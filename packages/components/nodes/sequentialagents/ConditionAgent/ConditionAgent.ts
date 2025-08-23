import { uniq } from 'lodash'
import { DataSource } from 'typeorm'
import { z } from 'zod'
import { BaseMessagePromptTemplateLike, ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts'
import { RunnableSequence, RunnablePassthrough, RunnableConfig } from '@langchain/core/runnables'
import { BaseMessage } from '@langchain/core/messages'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import {
    ConversationHistorySelection,
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOutputsValue,
    INodeParams,
    ISeqAgentNode,
    ISeqAgentsState
} from '../../../src/Interface'
import {
    getInputVariables,
    getVars,
    handleEscapeCharacters,
    prepareSandboxVars,
    transformBracesWithColon,
    executeJavaScriptCode,
    createCodeExecutionSandbox
} from '../../../src/utils'
import {
    checkCondition,
    convertStructuredSchemaToZod,
    customGet,
    transformObjectPropertyToFunction,
    filterConversationHistory,
    restructureMessages
} from '../commonUtils'

interface IConditionGridItem {
    variable: string
    operation: string
    value: string
    output: string
}

const examplePrompt = `You are an expert customer support routing system.
Your job is to detect whether a customer support representative is routing a user to the technical support team, or just responding conversationally.`

const exampleHumanPrompt = `The previous conversation is an interaction between a customer support representative and a user.
Extract whether the representative is routing the user to the technical support team, or just responding conversationally.

If representative want to route the user to the technical support team, respond only with the word "TECHNICAL".
Otherwise, respond only with the word "CONVERSATION".

Remember, only respond with one of the above words.`

const howToUseCode = `
1. Must return a string value at the end of function. For example:
    \`\`\`js
     {
        return "Agent"; // connect to next agent node
    } else {
        return "End"; // connect to end node
    }
    \`\`\`

2. In most cases, you would probably get the last message to do some comparison. You can get all current messages from the state: \`$flow.state.messages\`:
    \`\`\`json
    [
        {
            "content": "Hello! How can I assist you today?",
            "name": "",
            "additional_kwargs": {},
            "response_metadata": {},
            "tool_calls": [],
            "invalid_tool_calls": [],
            "usage_metadata": {}
        }
    ]
    \`\`\`

    For example, to get the last message content:
    \`\`\`js
    const messages = $flow.state.messages;
    const lastMessage = messages[messages.length - 1];

    // Proceed to do something with the last message content
    \`\`\`

3. If you want to use the Condition Agent's output for conditional checks, it is available as \`$flow.output\` with the following structure:

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

    For example, we can check if the agent's output contains specific keyword:
    \`\`\`js
    const result = $flow.output.content;
    
    ) {
        return "Agent"; // connect to next agent node
    } else {
        return "End"; // connect to end node
    }
    \`\`\`

    If Structured Output is enabled, \`$flow.output\` will be in the JSON format as defined in the Structured Output configuration:
    \`\`\`json
    {
        "foo": 'var'
    }
    \`\`\`

4. You can get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

5. You can get custom variables: \`$vars.<variable-name>\`

`

const defaultFunc = `const result = $flow.output.content;

) {
    return "Agent";
}

return "End";
`

const TAB_IDENTIFIER = 'selectedConditionFunctionTab'

class ConditionAgent_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]
    documentation?: string
    outputs: INodeOutputsValue[]

     {
        this.label = 'Condition Agent'
        this.name = 'seqConditionAgent'
        this.version = 3.1
        this.type = 'ConditionAgent'
        this.icon = 'condition.svg'
        this.category = 'Sequential Agents'
        this.description = 'Uses an agent to determine which route to take next'
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-8.-conditional-agent-node'
        this.inputs = [
            {
                label: 'Name',
                name: 'conditionAgentName',
                type: 'string',
                placeholder: 'Condition Agent'
            },
            {
                label: 'Sequential Node',
                name: 'sequentialNode',
                type: 'Start | Agent | LLMNode | ToolNode | CustomFunction | ExecuteFlow',
                description:
                    'Can be connected to one of the following nodes: Start, Agent, LLM Node, Tool Node, Custom Function, Execute Flow',
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
                label: 'System Prompt',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                default: examplePrompt,
                additionalParams: true,
                optional: true
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
                    'Human Prompt.',
                additionalParams: true
            },
            {
                label: 'Human Prompt',
                name: 'humanMessagePrompt',
                type: 'string',
                description: 'This prompt will be added at the end of the messages as human message',
                rows: 4,
                default: exampleHumanPrompt,
                additionalParams: true,
                optional: true
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
                name: 'conditionAgentStructuredOutput',
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
                label: 'Condition',
                name: 'condition',
                type: 'conditionFunction', // This is a custom type to show as button on the UI and render anchor points when saved
                tabIdentifier: TAB_IDENTIFIER,
                tabs: [
                    {
                        label: 'C',
                        name: 'conditionUI',
                        type: 'datagrid',
                        description: 'If a condition is met, the node connected to the respective output will be executed',
                        optional: true,
                        datagrid: [
                            {
                                field: 'variable',
                                headerName: 'Variable',
                                type: 'freeSolo',
                                editable: true,
                                loadMethod: ['getPreviousMessages', 'loadStateKeys'],
                                valueOptions: [
                                    {
                                        label: 'Agent Output (',
                                        value: '$flow.output.content'
                                    },
                                    {
                                        label: `Agent'`,
                                        value: '$flow.output.<replace-with-key>'
                                    },
                                    {
                                        label: 'T',
                                        value: '$flow.state.messages.length'
                                    },
                                    {
                                        label: 'F',
                                        value: '$flow.state.messages[0].content'
                                    },
                                    {
                                        label: 'La',
                                        value: '$flow.state.messages[-1].content'
                                    },
                                    {
                                        label: `Gl`,
                                        value: '$vars.<variable-name>'
                                    }
                                ],
                                flex: 0.5,
                                minWidth: 200
                            },
                            {
                                field: 'operation',
                                headerName: 'Operation',
                                type: 'singleSelect',
                                valueOptions: [
                                    'Contains',
                                    'Not Contains',
                                    'Start With',
                                    'End With',
                                    'Is',
                                    'Is Not',
                                    'Is Empty',
                                    'Is Not Empty',
                                    'Greater Than',
                                    'Less Than',
                                    'Equal To',
                                    'Not Equal To',
                                    'Greater Than or Equal To',
                                    'Less Than or Equal To'
                                ],
                                editable: true,
                                flex: 0.4,
                                minWidth: 150
                            },
                            {
                                field: 'value',
                                headerName: 'Value',
                                flex: 1,
                                editable: true
                            },
                            {
                                field: 'output',
                                headerName: 'Output Name',
                                editable: true,
                                flex: 0.3,
                                minWidth: 150
                            }
                        ]
                    },
                    {
                        label: 'C',
                        name: 'conditionFunction',
                        type: 'code',
                        description: 'Function to evaluate the condition',
                        hint: {
                            label: 'How to use',
                            value: howToUseCode
                        },
                        hideCodeExecute: true,
                        codeExample: defaultFunc,
                        optional: true
                    }
                ]
            }
        ]
        this.outputs = [
            {
                label: 'Next',
                name: 'next',
                baseClasses: ['Condition'],
                isAnchor: true
            },
            {
                label: 'End',
                name: 'end',
                baseClasses: ['Condition'],
                isAnchor: true
            }
        ]
    }

    a: Promise<any> {
        const conditionLabel = nodeData.inputs?.conditionAgentName as string
        ..t
        const output = nodeData.outputs?.output as string
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]
        let agentPrompt = nodeData.inputs?.systemMessagePrompt as string
        agentP
        let humanPrompt = nodeData.inputs?.humanMessagePrompt as string
        humanP
        const promptValuesStr = nodeData.inputs?.promptValues
        const conditionAgentStructuredOutput = nodeData.inputs?.conditionAgentStructuredOutput
        const model = nodeData.inputs?.model as BaseChatModel

         th

        const startLLM = sequentialNodes[0].startLLM
        const llm = model || startLLM
         nodeData.inputs.model = llm

        let conditionAgentInputVariablesValues: ICommonObject = {}
         {
            try {
                
            }  {
                th
            }
        }
        

        , ...getInputVa])

         => Obje.)) {
            th
        }

        const abortControllerSignal = options.signal as AbortController

         =>
            await runCondition(
                conditionName,
                nodeData,
                input,
                options,
                state,
                config,
                llm,
                agentPrompt,
                humanPrompt,
                conditionAgentInputVariablesValues,
                conditionAgentStructuredOutput,
                abortControllerSignal
            )

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: conditionalEdge,
            name: conditionName,
            label: conditionLabel,
            type: 'condition',
            output,
            llm,
            startLLM,
            multiModalMessageContent: sequentialNodes[0]?.multiModalMessageContent,
            predecessorAgents: sequentialNodes
        }

        return returnOutput
    }
}

const runCondition = async (
    conditionName: string,
    nodeData: INodeData,
    input: string,
    options: ICommonObject,
    state: ISeqAgentsState,
    config: RunnableConfig,
    llm: BaseChatModel,
    agentPrompt: string,
    humanPrompt: string,
    conditionAgentInputVariablesValues: ICommonObject,
    conditionAgentStructuredOutput: string,
    abortControllerSignal: AbortController
) => {
    const appDataSource = options.appDataSource as DataSource
    const databaseEntities = options.databaseEntities as IDatabaseEntity
    const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`] as string
    const conditionUI = nodeData.inputs?.conditionUI as string
    const conditionFunction = nodeData.inputs?.conditionFunction as string
    [0] : 'conditionUI'

    ] as BaseMessagePromptTemplateLike[]
     p
     p
    

    let model
     {
        try {
            )

            // @ts-ignore
            m
        }  {
            
            model = llm
        }
    } else {
        model = llm
    }

    let chain

    .length) {
        .withConfig({
            metadata: { sequentialNodeName: conditionName }
        })
    } else {
        chain = RunnableSequence.from([
            RunnablePa),
            prompt,
            model
        ]).withConfig({
            metadata: { sequentialNodeName: conditionName }
        })
    }

     as ConversationHistorySelection
    // @ts-ignore
    
    // @ts-ignore
    

    let 
    result.additional_kwargs = { ...result.additional_kwargs, nodeId: nodeData.id }

     {
        let jsonResult = {}
        f {
            jsonResult = { ...jsonResult, ...toolCall.args }
        }
        result = { ...jsonResult, additional_kwargs: { nodeId: nodeData.id } }
    }

    

    const flow = {
        chatflowId: options.chatflowid,
        sessionId: options.sessionId,
        chatId: options.chatId,
        input,
        state,
        output: result,
        va
    }

     {
        

        try {
            const response = await executeJavaScriptCode(conditionFunction, sandbox, {
                timeout: 10000
            })

             th
            return response
        }  {
            th
        }
    } el {
        try {
             : conditionUI

            f {
                 th

                ) {
                    )
                    ) {
                        return item.output
                    }
                } el) {
                    )
                    ) {
                        return item.output
                    }
                } el) {
                    

                     ?? .filter(
                        (me => message.additional_kwargs && message.additional_kwargs?.nodeId === nodeId
                    )
                    const messageOutput = messageOutputs[messageOutputs.length - 1]

                     {
                        ) {
                            return item.output
                        }
                    }
                }
            }
            return 'End'
        }  {
            th
        }
    }
}

module.exports = { nodeClass: ConditionAgent_SeqAgents }
