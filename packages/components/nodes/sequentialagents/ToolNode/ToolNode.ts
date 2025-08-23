import { flatten } from 'lodash'
import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeParams,
    ISeqAgentNode,
    IUsedTool,
    IStateWithMessages
} from '../../../src/Interface'
import { AIMessage, AIMessageChunk, BaseMessage, ToolMessage } from '@langchain/core/messages'
import { StructuredTool } from '@langchain/core/tools'
import { RunnableConfig } from '@langchain/core/runnables'
import { ARTIFACTS_PREFIX, SOURCE_DOCUMENTS_PREFIX, TOOL_ARGS_PREFIX } from '../../../src/agents'
import { Document } from '@langchain/core/documents'
import { DataSource } from 'typeorm'
import { MessagesState, RunnableCallable, customGet } from '../commonUtils'
import { getVars, prepareSandboxVars, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ChatPromptTemplate } from '@langchain/core/prompts'

const defaultApprovalPrompt = `You are about to execute tool: {tools}. Ask if user want to proceed`

const customOutputFuncDesc = `This is only applicable when you have a custom State at the START node. After tool execution, you might want to update the State values`

const howToUseCode = `
1. Return the key value JSON object. For example: if you have the following State:
    \`\`\`json
    {
        "user": null
    }
    \`\`\`

    You can update the "user" value by returning the following:
    \`\`\`js
    return {
        "user": "john doe"
    }
    \`\`\`

2. If y:
    \`\`\`json
    [
        {
            "tool": "tool's name",
            "toolInput": {},
            "toolOutput": "tool's output content",
            "sourceDocuments": [
                {
                    "pageContent": "This is the page content",
                    "metadata": "{foo: var}"
                }
            ]
        }
    ]
    \`\`\`

    For example:
    \`\`\`js
    /* Assuming you have the following state:
    {
        "sources": null
    }
    */
    
    return {
        "sources": $flow.output[0].toolOutput
    }
    \`\`\`

3. You can also get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

4. You can get custom variables: \`$vars.<variable-name>\`

`
const howToUse = `
1. Key and value pair to be updated. For example: if you have the following State:
    | Key       | Operation     | Default Value     |
    |-----------|---------------|-------------------|
    | user      | Replace       |                   |

    You can update the "user" value with the following:
    | Key       | Value     |
    |-----------|-----------|
    | user      | john doe  |

2. If y:
    \`\`\`json
    [
        {
            "tool": "tool's name",
            "toolInput": {},
            "toolOutput": "tool's output content",
            "sourceDocuments": [
                {
                    "pageContent": "This is the page content",
                    "metadata": "{foo: var}"
                }
            ]
        }
    ]
    \`\`\`

    For example:
    | Key          | Value                                     |
    |--------------|-------------------------------------------|
    | sources      | \`$flow.output[0].toolOutput\`       |

3. You can get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

4. You can get custom variables: \`$vars.<variable-name>\`

`

const defaultFunc = `const result = $flow.output;

/* Suppose we have a custom State schema like this:
* {
    aggregate: {
        value: (x, y) => x.,
         => []
    }
  }
*/

return {
  aggregate: [result.content]
};`
const TAB_IDENTIFIER = 'selectedUpdateStateMemoryTab'

class ToolNode_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Tool Node'
        this.name = 'seqToolNode'
        this.version = 2.1
        this.type = 'ToolNode'
        this.icon = 'toolNode.svg'
        this.category = 'Sequential Agents'
        this.description = `Execute tool and return tool's output`
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-6.-tool-node'
        this.inputs = [
            {
                label: 'Tools',
                name: 'tools',
                type: 'Tool',
                list: true,
                optional: true
            },
            {
                label: 'LLM Node',
                name: 'llmNode',
                type: 'LLMNode'
            },
            {
                label: 'Name',
                name: 'toolNodeName',
                type: 'string',
                placeholder: 'Tool'
            },
            {
                label: 'Require Approval',
                name: 'interrupt',
                description: 'Require approval before executing tools',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Approval Prompt',
                name: 'approvalPrompt',
                description: 'Prompt for approval. Only applicable if "Require Approval" is enabled',
                type: 'string',
                default: defaultApprovalPrompt,
                rows: 4,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Approve Button Text',
                name: 'approveButtonText',
                description: 'Text for approve button. Only applicable if "Require Approval" is enabled',
                type: 'string',
                default: 'Yes',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Reject Button Text',
                name: 'rejectButtonText',
                description: 'Text for reject button. Only applicable if "Require Approval" is enabled',
                type: 'string',
                default: 'No',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Update State',
                name: 'updateStateMemory',
                type: 'tabs',
                tabIdentifier: TAB_IDENTIFIER,
                additionalParams: true,
                default: 'updateStateMemoryUI',
                tabs: [
                    {
                        label: 'Up',
                        name: 'updateStateMemoryUI',
                        type: 'datagrid',
                        hint: {
                            label: 'How to use',
                            value: howToUse
                        },
                        description: customOutputFuncDesc,
                        datagrid: [
                            {
                                field: 'key',
                                headerName: 'Key',
                                type: 'asyncSingleSelect',
                                loadMethod: 'loadStateKeys',
                                flex: 0.5,
                                editable: true
                            },
                            {
                                field: 'value',
                                headerName: 'Value',
                                type: 'freeSolo',
                                valueOptions: [
                                    {
                                        label: 'All T',
                                        value: '$flow.output'
                                    },
                                    {
                                        label: 'F',
                                        value: '$flow.output[0].toolOutput'
                                    },
                                    {
                                        label: 'F',
                                        value: '$flow.output[0].toolInput'
                                    },
                                    {
                                        label: `F`,
                                        value: '$flow.output[0].sourceDocuments'
                                    },
                                    {
                                        label: `Gl`,
                                        value: '$vars.<variable-name>'
                                    },
                                    {
                                        label: 'Input Que',
                                        value: '$flow.input'
                                    },
                                    {
                                        label: 'Se',
                                        value: '$flow.sessionId'
                                    },
                                    {
                                        label: 'Chat I',
                                        value: '$flow.chatId'
                                    },
                                    {
                                        label: 'Chatfl',
                                        value: '$flow.chatflowId'
                                    }
                                ],
                                editable: true,
                                flex: 1
                            }
                        ],
                        optional: true,
                        additionalParams: true
                    },
                    {
                        label: 'Up',
                        name: 'updateStateMemoryCode',
                        type: 'code',
                        hint: {
                            label: 'How to use',
                            value: howToUseCode
                        },
                        description: `${customOutputFuncDesc}. Must return an object representing the state`,
                        hideCodeExecute: true,
                        codeExample: defaultFunc,
                        optional: true,
                        additionalParams: true
                    }
                ]
            }
        ]
    }

    a: Promise<any> {
        const toolNodeLabel = nodeData.inputs?.toolNodeName as string
        const llmNode = nodeData.inputs?.llmNode as ISeqAgentNode
         th

        const interrupt = nodeData.inputs?.interrupt as boolean
        const approvalPrompt = nodeData.inputs?.approvalPrompt as string
        const approveButtonText = nodeData.inputs?.approveButtonText as string
        const rejectButtonText = nodeData.inputs?.rejectButtonText as string

        let tools = nodeData.inputs?.tools
        t
         th

        const output = nodeData.outputs?.output as string

         th
        ..t

        
        ;(t.interrupt = interrupt

         {
            ;(t. => {
                
                
                const response = (await chain.invoke({
                    input: 'Hello there!',
                    t
                })) as AIMessageChunk
                return response.content
            }
        }

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: toolNode,
            name: toolNodeLabelName,
            label: toolNodeLabel,
            type: 'tool',
            output,
            predecessorAgents: [llmNode],
            llm: llmNode.llm,
            startLLM: llmNode.startLLM,
            moderations: llmNode.moderations,
            multiModalMessageContent: llmNode.multiModalMessageContent
        }

        return returnOutput
    }
}

class ToolNode<T extends IStateWithMessages | BaseMessage[] | MessagesState> extends RunnableCallable<T, BaseMessage[] | MessagesState> {
    tools: StructuredTool[]
    nodeData: INodeData
    inputQuery: string
    options: ICommonObject

    constructor(
        tools: StructuredTool[],
        nodeData: INodeData,
        inputQuery: string,
        options: ICommonObject,
        name: string = 'tools',
        tags: string[] = [],
        metadata: ICommonObject = {}
    ) {
         => th })
        this.tools = tools
        this.nodeData = nodeData
        this.inputQuery = inputQuery
        this.options = options
    }

    p: Promise<BaseMessage[] | MessagesState> {
        let messages: BaseMessage[]

        // Check if input is an array of BaseMessage[]
        ) {
            messages = input
        }
        // Check if input is IStateWithMessages
        el.me {
            me.messages
        }
        // Handle MessagesState type
        else {
            me.messages
        }

        // Get the last message
        const message = messages[messages.length - 1]

          {
            th
        }

        // Extract all properties except messages for IStateWithMessages
         ? { messages: input } : input
        const ChannelsWithoutMessages = {
            chatId: this.options.chatId,
            sessionId: this.options.sessionId,
            input: this.inputQuery,
            state: inputWithoutMessages
        }

        const outputs = await Promise.all(
            (me.t => {
                 => t
                 {
                    th
                }
                . {
                    // @ts-ignore
                    t
                }
                let 
                let sourceDocuments: Document[] = []
                let artifacts = []
                ) {
                    
                    output = outputArray[0]
                    const docs = outputArray[1]
                    try {
                        
                    }  {
                        
                    }
                }
                ) {
                    
                    output = outputArray[0]
                    try {
                        a
                    }  {
                        
                    }
                }

                let toolInput
                ) {
                    
                    output = outputArray[0]
                    try {
                        t
                    }  {
                        
                    }
                }

                return new ToolMessage({
                    name: tool.name,
                    ,
                    tool_call_id: call.id!,
                    additional_kwargs: {
                        sourceDocuments,
                        artifacts,
                        args: toolInput ?? call.args,
                        usedTools: [
                            {
                                tool: tool.name ?? '',
                                toolInput: toolInput ?? call.args,
                                toolOutput: output
                            }
                        ]
                    }
                })
            }) ?? []
        )

        const additional_kwargs: ICommonObject = { nodeId: this.nodeData.id }
         => ()

         {
            
            return {
                ...returnedOutput,
                messages: outputs
            }
        } else {
             ? outputs : { messages: outputs }
        }
    }
}

const getReturnOutput = async (
    nodeData: INodeData,
    input: string,
    options: ICommonObject,
    outputs: ToolMessage[],
    state: ICommonObject
) => {
    const appDataSource = options.appDataSource as DataSource
    const databaseEntities = options.databaseEntities as IDatabaseEntity
    const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`] as string
    const updateStateMemoryUI = nodeData.inputs?.updateStateMemoryUI as string
    const updateStateMemoryCode = nodeData.inputs?.updateStateMemoryCode as string
    const updateStateMemory = nodeData.inputs?.updateStateMemory as string

    [0] : 'updateStateMemoryUI'
    

     => {
        return {
            tool: output.name,
            toolInput: output.additional_kwargs.args,
            toolOutput: output.content,
            sourceDocuments: output.additional_kwargs.sourceDocuments,
            artifacts: output.additional_kwargs.artifacts
        } as IUsedTool
    })

    const flow = {
        chatflowId: options.chatflowid,
        sessionId: options.sessionId,
        chatId: options.chatId,
        input,
        output: reformattedOutput,
        state,
        va
    }

     {
        try {
             : updateStateMemory
            const obj: ICommonObject = {}
            f {
                const key = sch.Key
                 th
                let value = sch.Value as string
                ) {
                    value = )
                } el) {
                    value = )
                }
                obj[key] = value
            }
            return obj
        }  {
            th
        }
    }

     {
        try {
             : updateStateMemoryUI
            const obj: ICommonObject = {}
            f {
                const key = sch.key
                 th
                let value = sch.value as string
                ) {
                    value = )
                } el) {
                    value = )
                }
                obj[key] = value
            }
            return obj
        }  {
            th
        }
    } el {
        

        try {
            const response = await executeJavaScriptCode(updateStateMemoryCode, sandbox, {
                timeout: 10000
            })

             th
            return response
        }  {
            th
        }
    }
}

module.exports = { nodeClass: ToolNode_SeqAgents }
