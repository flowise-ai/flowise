import { flatten, uniq } from 'lodash'
import { DataSource } from 'typeorm'
import { RunnableSequence, RunnablePassthrough, RunnableConfig } from '@langchain/core/runnables'
import { ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, BaseMessagePromptTemplateLike } from '@langchain/core/prompts'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { AIMessage, AIMessageChunk, BaseMessage, HumanMessage, ToolMessage } from '@langchain/core/messages'
import { formatToOpenAIToolMessages } from 'langchain/agents/format_scratchpad/openai_tools'
import { type ToolsAgentStep } from 'langchain/agents/openai/output_parser'
import { StringOutputParser } from '@langchain/core/output_parsers'
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
    IUsedTool,
    IDocument,
    IStateWithMessages,
    ConversationHistorySelection
} from '../../../src/Interface'
import {
    ToolCallingAgentOutputParser,
    AgentExecutor,
    SOURCE_DOCUMENTS_PREFIX,
    ARTIFACTS_PREFIX,
    TOOL_ARGS_PREFIX
} from '../../../src/agents'
import {
    extractOutputFromArray,
    getInputVariables,
    getVars,
    handleEscapeCharacters,
    prepareSandboxVars,
    removeInvalidImageMarkdown,
    transformBracesWithColon,
    executeJavaScriptCode,
    createCodeExecutionSandbox
} from '../../../src/utils'
import {
    customGet,
    processImageMessage,
    transformObjectPropertyToFunction,
    filterConversationHistory,
    restructureMessages,
    MessagesState,
    RunnableCallable,
    checkMessageHistory
} from '../commonUtils'
import { END, StateGraph } from '@langchain/langgraph'
import { StructuredTool } from '@langchain/core/tools'

const defaultApprovalPrompt = `You are about to execute tool: {tools}. Ask if user want to proceed`
const examplePrompt = 'You are a research assistant who can search for up-to-date info using search engine.'
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

2. If you want to use the agent's output as the value to update state, it is available as \`$flow.output\` with the following structure:
    \`\`\`json
    {
        "content": "Hello! How can I assist you today?",
        "usedTools": [
            {
                "tool": "tool-name",
                "toolInput": "{foo: var}",
                "toolOutput": "This is the tool's output"
            }
        ],
        "sourceDocuments": [
            {
                "pageContent": "This is the page content",
                "metadata": "{foo: var}"
            }
        ]
    }
    \`\`\`

    For example, if the \`toolOutput\` is the value you want to update the state with, you can return the following:
    \`\`\`js
    return {
        "user": $flow.output.usedTools[0].toolOutput
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

2. If you want to use the Agent's output as the value to update state, it is available as available as \`$flow.output\` with the following structure:
    \`\`\`json
    {
        "content": "Hello! How can I assist you today?",
        "usedTools": [
            {
                "tool": "tool-name",
                "toolInput": "{foo: var}",
                "toolOutput": "This is the tool's output"
            }
        ],
        "sourceDocuments": [
            {
                "pageContent": "This is the page content",
                "metadata": "{foo: var}"
            }
        ]
    }
    \`\`\`

    For example, if the \`toolOutput\` is the value you want to update the state with, you can do the following:
    | Key       | Value                                     |
    |-----------|-------------------------------------------|
    | user      | \`$flow.output.usedTools[0].toolOutput\`  |

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
const TAB_IDENTIFIER = 'selectedUpdateStateMemoryTab'

class Agent_SeqAgents implements INode {
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
        this.label = 'Agent'
        this.name = 'seqAgent'
        this.version = 4.1
        this.type = 'Agent'
        this.icon = 'seqAgent.png'
        this.category = 'Sequential Agents'
        this.description = 'Agent that can execute tools'
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-4.-agent-node'
        this.inputs = [
            {
                label: 'Agent Name',
                name: 'agentName',
                type: 'string',
                placeholder: 'Agent'
            },
            {
                label: 'System Prompt',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                optional: true,
                default: examplePrompt
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
                label: 'Tools',
                name: 'tools',
                type: 'Tool',
                list: true,
                optional: true
            },
            {
                label: 'Sequential Node',
                name: 'sequentialNode',
                type: 'Start | Agent | Condition | LLMNode | ToolNode | CustomFunction | ExecuteFlow',
                description:
                    'Can be connected to one of the following nodes: Start, Agent, Condition, LLM Node, Tool Node, Custom Function, Execute Flow',
                list: true
            },
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel',
                optional: true,
                description: `Overwrite model to be used for this agent`
            },
            {
                label: 'Require Approval',
                name: 'interrupt',
                description:
                    'Pause execution and request user approval before running tools.\n' +
                    'If enabled, the agent will prompt the user with customizable approve/reject options\n' +
                    'and will proceed only after approval. This requires a configured agent memory to manage\n' +
                    'the state and handle approval requests.\n' +
                    'If no tools are invoked, the agent proceeds without interruption.',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Format Prompt Values',
                name: 'promptValues',
                description: 'Assign values to the prompt variables. You can also use $flow.state.<variable-name> to get the state value',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
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
                                        label: 'Agent Output (',
                                        value: '$flow.output.content'
                                    },
                                    {
                                        label: `U`,
                                        value: '$flow.output.usedTools'
                                    },
                                    {
                                        label: `F`,
                                        value: '$flow.output.usedTools[0].toolOutput'
                                    },
                                    {
                                        label: 'S',
                                        value: '$flow.output.sourceDocuments'
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
            },
            {
                label: 'Max Iterations',
                name: 'maxIterations',
                type: 'number',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        let tools = nodeData.inputs?.tools
        t
        let agentSystemPrompt = nodeData.inputs?.systemMessagePrompt as string
        agentSy
        let agentHumanPrompt = nodeData.inputs?.humanMessagePrompt as string
        agentHumanP
        const agentLabel = nodeData.inputs?.agentName as string
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]
        const maxIterations = nodeData.inputs?.maxIterations as string
        const model = nodeData.inputs?.model as BaseChatModel
        const promptValuesStr = nodeData.inputs?.promptValues
        const output = nodeData.outputs?.output as string
        const approvalPrompt = nodeData.inputs?.approvalPrompt as string

         th
        ..t

         th

        let agentInputVariablesValues: ICommonObject = {}
         {
            try {
                agentInputVa
            }  {
                th
            }
        }
        agentInputVa

        const startLLM = sequentialNodes[0].startLLM
        const llm = model || startLLM
         nodeData.inputs.model = llm

        )
        const abortControllerSignal = options.signal as AbortController
        , ...getInputVa])

         => Obje.)) {
            th
        }

        const interrupt = nodeData.inputs?.interrupt as boolean

        const toolName = `tool_${nodeData.id}`
        

        ;(t. => {
            
            
            const response = (await chain.invoke({
                input: 'Hello there!',
                t
            })) as AIMessageChunk
            return response.content
        }

         => {
            return await agentNode(
                {
                    state,
                    llm,
                    interrupt,
                    agent: await createAgent(
                        nodeData,
                        options,
                        agentName,
                        state,
                        llm,
                        interrupt,
                        [...tools],
                        agentSystemPrompt,
                        agentHumanPrompt,
                        multiModalMessageContent,
                        agentInputVariablesValues,
                        maxIterations,
                        {
                            sessionId: options.sessionId,
                            chatId: options.chatId,
                            input
                        }
                    ),
                    name: agentName,
                    abortControllerSignal,
                    nodeData,
                    input,
                    options
                },
                config
            )
        }

        const toolInterrupt = async (
            graph: StateGraph<any>,
            nextNodeName?: string,
            runCondition?: any,
            conditionalMapping: ICommonObject = {}
        ) => {
             => {
                const messages = state.messages as unknown as BaseMessage[]
                const lastMessage = messages[messages.length - 1] as AIMessage

                 {
                    // if next node is condition node, run the condition
                     {
                        
                        return returnNodeName
                    }
                    return nextNodeName || END
                }
                return toolName
            }

            g

             {
                // @ts-ignore
                graph.addConditionalEdges(agentName, routeMessage, {
                    [toolName]: toolName,
                    [END]: END,
                    [nextNodeName]: nextNodeName,
                    ...conditionalMapping
                })
            } else {
                // @ts-ignore
                g
            }

            // @ts-ignore
            g

            return graph
        }

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: workerNode,
            name: agentName,
            label: agentLabel,
            type: 'agent',
            llm,
            startLLM,
            output,
            predecessorAgents: sequentialNodes,
            multiModalMessageContent,
            moderations: sequentialNodes[0]?.moderations,
            agentInterruptToolNode: interrupt ? toolNode : undefined,
            agentInterruptToolFunc: interrupt ? toolInterrupt : undefined
        }

        return returnOutput
    }
}

async function createAgent(
    nodeData: INodeData,
    options: ICommonObject,
    agentName: string,
    state: ISeqAgentsState,
    llm: BaseChatModel,
    interrupt: boolean,
    tools: any[],
    systemPrompt: string,
    humanPrompt: string,
    multiModalMessageContent: MessageContentImageUrl[],
    agentInputVariablesValues: ICommonObject,
    maxIterations?: string,
    flowObj?: { sessionId?: string; chatId?: string; input?: string }
): Promise<any> {
     {
        const promptArrays = [
            new Me,
            new Me
        ] as BaseMessagePromptTemplateLike[]
         p
         p

        let p
        p

         {
            
            p
        }

         {
            th
        }
        

        let agent

        .length) {
            agent = RunnableSequence.from([
                RunnablePassthrough.assign({
                    //@ts-ignore
                    agent_ => f
                }),
                prompt,
                modelWithTools,
                new T
            ]).withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        } else {
            agent = RunnableSequence.from([
                RunnablePassthrough.assign({
                    //@ts-ignore
                    agent_ => f
                }),
                RunnablePa),
                prompt,
                modelWithTools,
                new T
            ]).withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        }

        const executor = AgentExecutor.fromAgentAndTools({
            agent,
            tools,
            sessionId: flowObj?.sessionId,
            chatId: flowObj?.chatId,
            input: flowObj?.input,
            verbose: process.env.DEBUG === 'true' ? true : false,
            maxIte : undefined
        })
        return executor
    } el {
         {
            th
        }
        // @ts-ignore
        llm = llm.b

        ] as BaseMessagePromptTemplateLike[]
         p
         p

        let p
        p

         {
            
            p
        }

        let agent

        .length) {
            agent = RunnableSequen.withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        } else {
            agent = RunnableSequence.from([
                RunnablePa),
                prompt,
                llm
            ]).withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        }
        return agent
    } else {
        ] as BaseMessagePromptTemplateLike[]
         p
         p

        let p
        p

         {
            
            p
        }

        let conversationChain

        .length) {
            ]).withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        } else {
            conversationChain = RunnableSequence.from([
                RunnablePa),
                prompt,
                llm,
                new St
            ]).withConfig({
                metadata: { sequentialNodeName: agentName }
            })
        }

        return conversationChain
    }
}

async function agentNode(
    {
        state,
        llm,
        interrupt,
        agent,
        name,
        abortControllerSignal,
        nodeData,
        input,
        options
    }: {
        state: ISeqAgentsState
        llm: BaseChatModel
        interrupt: boolean
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

         {
            const messages = state.messages as unknown as BaseMessage[]
            const lastMessage = messages.length ? messages[messages.length - 1] : null

            // If the last message is a tool message and is an interrupted message, format output into standard agent output
             === 't {
                let formattedAgentResult: {
                    output?: string
                    usedTools?: IUsedTool[]
                    sourceDocuments?: IDocument[]
                    artifacts?: ICommonObject[]
                } = {}
                formattedAgentResult.output = result.content
                 {
                    formattedAgentResult.usedTools = lastMessage.additional_kwargs.usedTools as IUsedTool[]
                }
                 {
                    formattedAgentResult.sourceDocuments = lastMessage.additional_kwargs.sourceDocuments as IDocument[]
                }
                 {
                    formattedAgentResult.artifacts = lastMessage.additional_kwargs.artifacts as ICommonObject[]
                }
                result = formattedAgentResult
            } else {
                result.name = name
                result.additional_kwargs = { ...result.additional_kwargs, nodeId: nodeData.id, interrupt: true }
                return {
                    messages: [result]
                }
            }
        }

        const additional_kwargs: ICommonObject = { nodeId: nodeData.id }

         {
            additional_kwargs.usedTools = result.usedTools
        }
         {
            additional_kwargs.sourceDocuments = result.sourceDocuments
        }
         {
            additional_kwargs.artifacts = result.artifacts
        }
         {
            result.content = result.output
            delete result.output
        }

        let outputContent = typeof result === 'string' ? result : result.content || result.output
        
        

         {
            let formattedOutput = {
                ...result,
                content: outputContent
            }
            
            return {
                ...returnedOutput,
                me
            }
        } else {
            return {
                messages: [
                    new HumanMessage({
                        content: outputContent,
                        name,
                        a.length ? additional_kwargs : undefined
                    })
                ]
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

    return {}
}

 => {
     => {
        return new HumanMessage({
            content: message,
            name,
            a.length ? additional_kwargs : undefined
        })
    })
}

class ToolNode<T extends BaseMessage[] | MessagesState> extends RunnableCallable<T, T> {
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
         ? outputs : { messages: outputs }
    }
}

module.exports = { nodeClass: Agent_SeqAgents }
