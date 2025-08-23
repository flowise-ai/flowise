import { difference, flatten, uniq } from 'lodash'
import { DataSource } from 'typeorm'
import { z } from 'zod'
import { RunnableSequence, RunnablePassthrough, RunnableConfig } from '@langchain/core/runnables'
import { ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, BaseMessagePromptTemplateLike } from '@langchain/core/prompts'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { AIMessage, AIMessageChunk } from '@langchain/core/messages'
import {
    INode,
    INodeData,
    INodeParams,
    ISeqAgentsState,
    ICommonObject,
    MessageContentImageUrl,
    INodeOutputsValue,
    ISeqAgentNode,
    IDatabaseEntity,
    ConversationHistorySelection
} from '../../../src/Interface'
import { AgentExecutor } from '../../../src/agents'
import {
    extractOutputFromArray,
    getInputVariables,
    getVars,
    handleEscapeCharacters,
    prepareSandboxVars,
    transformBracesWithColon,
    executeJavaScriptCode,
    createCodeExecutionSandbox
} from '../../../src/utils'
import {
    convertStructuredSchemaToZod,
    customGet,
    processImageMessage,
    transformObjectPropertyToFunction,
    filterConversationHistory,
    restructureMessages,
    checkMessageHistory
} from '../commonUtils'

const TAB_IDENTIFIER = 'selectedUpdateStateMemoryTab'
const customOutputFuncDesc = `This is only applicable when you have a custom State at the START node. After agent execution, you might want to update the State values`
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

2. If you want to use the LLM Node's output as the value to update state, it is available as \`$flow.output\` with the following structure:
    \`\`\`json
    {
        "content": 'Hello! How can I assist you today?',
        "name": "",
        "additional_kwargs": {},
        "response_metadata": {},
        "tool_calls": [],
        "invalid_tool_calls": [],
        "usage_metadata": {}
    }
    \`\`\`

    For example, if the output \`content\` is the value you want to update the state with, you can return the following:
    \`\`\`js
    return {
        "user": $flow.output.content
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

2. If you want to use the LLM Node's output as the value to update state, it is available as available as \`$flow.output\` with the following structure:
    \`\`\`json
    {
        "content": 'Hello! How can I assist you today?',
        "name": "",
        "additional_kwargs": {},
        "response_metadata": {},
        "tool_calls": [],
        "invalid_tool_calls": [],
        "usage_metadata": {}
    }
    \`\`\`

    For example, if the output \`content\` is the value you want to update the state with, you can do the following:
    | Key       | Value                     |
    |-----------|---------------------------|
    | user      | \`$flow.output.content\`  |

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

;

return [
    new HumanMe,
    new AIMessage({
        content: "",
        tool_calls: [
        {
            id: "12345",
            name: "calulator",
            args: {
                number1: 333382,
                number2: 1932,
                operation: "divide",
            },
        },
        ],
    }),
    new ToolMessage({
        tool_call_id: "12345",
        content: "The answer is 172.558.",
    }),
    new AIMe,
]`

class LLMNode_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs?: INodeParams[]
    badge?: string
    documentation?: string
    outputs: INodeOutputsValue[]

     {
        this.label = 'LLM Node'
        this.name = 'seqLLMNode'
        this.version = 4.1
        this.type = 'LLMNode'
        this.icon = 'llmNode.svg'
        this.category = 'Sequential Agents'
        this.description = 'Run Chat Model and return the output'
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-5.-llm-node'
        this.inputs = [
            {
                label: 'Name',
                name: 'llmNodeName',
                type: 'string',
                placeholder: 'LLM'
            },
            {
                label: 'System Prompt',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Prepend Messages History',
                name: 'messageHistory',
                description:
                    'Prepend a list of messages between System Prompt and Human Prompt. This is useful when you want to provide few shot examples',
                type: 'code',
                hideCodeExecute: true,
                codeExample: messageHistoryExample,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Conversation History',
                name: 'conversationHistorySelection',
                type: 'options',
                options: [
                    {
                        label: 'User Question',
                        name: 'user_question',
                        description: 'Use the user question from the historical conversation messages as input.'
                    },
                    {
                        label: 'Last Conversation Message',
                        name: 'last_message',
                        description: 'Use the last conversation message from the historical conversation messages as input.'
                    },
                    {
                        label: 'All Conversation Messages',
                        name: 'all_messages',
                        description: 'Use all conversation messages from the historical conversation messages as input.'
                    },
                    {
                        label: 'Empty',
                        name: 'empty',
                        description:
                            'Do not use any messages from the conversation history. ' +
                            'Ensure to use either System Prompt, Human Prompt, or Messages History.'
                    }
                ],
                default: 'all_messages',
                optional: true,
                description:
                    'Select which messages from the conversation history to include in the prompt. ' +
                    'The  and ' +
                    '[Messages History, Human Prompt].',
                additionalParams: true
            },
            {
                label: 'Human Prompt',
                name: 'humanMessagePrompt',
                type: 'string',
                description: 'This prompt will be added at the end of the messages as human message',
                rows: 4,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Sequential Node',
                name: 'sequentialNode',
                type: 'Start | Agent | Condition | LLMNode | ToolNode | CustomFunction | ExecuteFlow',
                description:
                    'Can be connected to one of the following nodes: Start, Agent, Condition, LLM, Tool Node, Custom Function, Execute Flow',
                list: true
            },
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel',
                optional: true,
                description: `Overwrite model to be used for this node`
            },
            {
                label: 'Format Prompt Values',
                name: 'promptValues',
                description: 'Assign values to the prompt variables. You can also use $flow.state.<variable-name> to get the state value',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true,
                additionalParams: true
            },
            {
                label: 'JSON Structured Output',
                name: 'llmStructuredOutput',
                type: 'datagrid',
                description: 'Instruct the LLM to give output in a JSON structured schema',
                datagrid: [
                    { field: 'key', headerName: 'Key', editable: true },
                    {
                        field: 'type',
                        headerName: 'Type',
                        type: 'singleSelect',
                        valueOptions: ['String', 'String Array', 'Number', 'Boolean', 'Enum'],
                        editable: true
                    },
                    { field: 'enumValues', headerName: 'Enum Values', editable: true },
                    { field: 'description', headerName: 'Description', flex: 1, editable: true }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Update State',
                name: 'updateStateMemory',
                type: 'tabs',
                tabIdentifier: TAB_IDENTIFIER,
                default: 'updateStateMemoryUI',
                additionalParams: true,
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
                                        label: 'LLM N',
                                        value: '$flow.output.content'
                                    },
                                    {
                                        label: `LLM JSON Output Key (`,
                                        value: '$flow.output.<replace-with-key>'
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
        // Tools can be connected through ToolNodes
        let tools = nodeData.inputs?.tools
        t

        let systemPrompt = nodeData.inputs?.systemMessagePrompt as string
        
        let humanPrompt = nodeData.inputs?.humanMessagePrompt as string
        humanP
        const llmNodeLabel = nodeData.inputs?.llmNodeName as string
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]
        const model = nodeData.inputs?.model as BaseChatModel
        const promptValuesStr = nodeData.inputs?.promptValues
        const output = nodeData.outputs?.output as string
        const llmStructuredOutput = nodeData.inputs?.llmStructuredOutput

         th
        ..t

         th

        let llmNodeInputVariablesValues: ICommonObject = {}
         {
            try {
                llmN
            }  {
                th
            }
        }
        llmN

        const startLLM = sequentialNodes[0].startLLM
        const llm = model || startLLM
         nodeData.inputs.model = llm

        )
        const abortControllerSignal = options.signal as AbortController
        , ...getInputVa])

        ).j
        const allVariablesSatisfied = missingInputVars.length === 0
         {
            
            .j

            throw new Error(
                `LLM Node input variables values are not provided! Required: ${nodeInputVars}, Provided: ${providedInputVars}. Missing: ${missingInputVars}`
            )
        }

         => {
            const bindModel = config.configurable?.bindModel?.[nodeData.id]
            return await agentNode(
                {
                    state,
                    llm,
                    agent: await createAgent(
                        nodeData,
                        options,
                        llmNodeName,
                        state,
                        bindModel || llm,
                        [...tools],
                        systemPrompt,
                        humanPrompt,
                        multiModalMessageContent,
                        llmNodeInputVariablesValues,
                        llmStructuredOutput
                    ),
                    name: llmNodeName,
                    abortControllerSignal,
                    nodeData,
                    input,
                    options
                },
                config
            )
        }

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: workerNode,
            name: llmNodeName,
            label: llmNodeLabel,
            type: 'llm',
            llm,
            startLLM,
            output,
            predecessorAgents: sequentialNodes,
            multiModalMessageContent,
            moderations: sequentialNodes[0]?.moderations
        }

        return returnOutput
    }
}

async function createAgent(
    nodeData: INodeData,
    options: ICommonObject,
    llmNodeName: string,
    state: ISeqAgentsState,
    llm: BaseChatModel,
    tools: any[],
    systemPrompt: string,
    humanPrompt: string,
    multiModalMessageContent: MessageContentImageUrl[],
    llmNodeInputVariablesValues: ICommonObject,
    llmStructuredOutput: string
): Promise<AgentExecutor | RunnableSequence> {
     {
         {
            th
        }
        // @ts-ignore
        llm = llm.b
    }

     {
        try {
            )

            // @ts-ignore
            llm = llm.w
        }  {
            
        }
    }

    ] as BaseMessagePromptTemplateLike[]
     p
     p

    let p
    p

     {
        
        p
    }

    let chain

    .length) {
        .withConfig({
            metadata: { sequentialNodeName: llmNodeName }
        })
    } else {
        chain = RunnableSequence.from([
            RunnablePa),
            prompt,
            llm
        ]).withConfig({
            metadata: { sequentialNodeName: llmNodeName }
        })
    }

    // @ts-ignore
    return chain
}

async function agentNode(
    {
        state,
        llm,
        agent,
        name,
        abortControllerSignal,
        nodeData,
        input,
        options
    }: {
        state: ISeqAgentsState
        llm: BaseChatModel
        agent: AgentExecutor | RunnableSequence
        name: string
        abortControllerSignal: AbortController
        nodeData: INodeData
        input: string
        options: ICommonObject
    },
    config: RunnableConfig
) {
    try {
         {
            th
        }

         as ConversationHistorySelection
        // @ts-ignore
        
        // @ts-ignore
        

        let 

        const llmStructuredOutput = nodeData.inputs?.llmStructuredOutput
         {
            let jsonResult = {}
            f {
                jsonResult = { ...jsonResult, ...toolCall.args }
            }
            result = { ...jsonResult, additional_kwargs: { nodeId: nodeData.id } }
        }

         {
            

             {
                const messages = [
                    new AIMessage({
                         : result,
                        name,
                        additional_kwargs: { nodeId: nodeData.id }
                    })
                ]
                return {
                    ...returnedOutput,
                    messages
                }
            } else {
                result.name = name
                result.additional_kwargs = { ...result.additional_kwargs, nodeId: nodeData.id }
                let outputContent = typeof result === 'string' ? result : result.content
                
                return {
                    ...returnedOutput,
                    messages: [result]
                }
            }
        } else {
             {
                const messages = [
                    new AIMessage({
                         : result,
                        name,
                        additional_kwargs: { nodeId: nodeData.id }
                    })
                ]
                return {
                    messages
                }
            } else {
                result.name = name
                result.additional_kwargs = { ...result.additional_kwargs, nodeId: nodeData.id }
                let outputContent = typeof result === 'string' ? result : result.content
                
                return {
                    messages: [result]
                }
            }
        }
    }  {
        th
    }
}

 => {
    const appDataSource = options.appDataSource as DataSource
    const databaseEntities = options.databaseEntities as IDatabaseEntity
    const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`] as string
    const updateStateMemoryUI = nodeData.inputs?.updateStateMemoryUI as string
    const updateStateMemoryCode = nodeData.inputs?.updateStateMemoryCode as string
    const updateStateMemory = nodeData.inputs?.updateStateMemory as string

    [0] : 'updateStateMemoryUI'
    

    const flow = {
        chatflowId: options.chatflowid,
        sessionId: options.sessionId,
        chatId: options.chatId,
        input,
        output,
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

module.exports = { nodeClass: LLMNode_SeqAgents }
