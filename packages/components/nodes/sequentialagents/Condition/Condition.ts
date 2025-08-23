import { DataSource } from 'typeorm'
import { BaseMessage } from '@langchain/core/messages'
import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOutputsValue,
    INodeParams,
    ISeqAgentNode,
    ISeqAgentsState
} from '../../../src/Interface'
import { checkCondition, customGet } from '../commonUtils'
import { getVars, prepareSandboxVars, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'

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

3. You can get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

4. You can get custom variables: \`$vars.<variable-name>\`

`

const defaultFunc = `const state = $flow.state;
                
const messages = state.messages;

const lastMessage = messages[messages.length - 1];

/* Check if the last message has content */
 {
    return "Agent";
}

return "End";`

const TAB_IDENTIFIER = 'selectedConditionFunctionTab'

interface IConditionGridItem {
    variable: string
    operation: string
    value: string
    output: string
}

class Condition_SeqAgents implements INode {
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
        this.label = 'Condition'
        this.name = 'seqCondition'
        this.version = 2.1
        this.type = 'Condition'
        this.icon = 'condition.svg'
        this.category = 'Sequential Agents'
        this.description = 'Conditional function to determine which route to take next'
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-7.-conditional-node'
        this.inputs = [
            {
                label: 'Condition Name',
                name: 'conditionName',
                type: 'string',
                optional: true,
                placeholder: 'If X, then Y'
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
        const conditionLabel = nodeData.inputs?.conditionName as string
        ..t
        const output = nodeData.outputs?.output as string
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]

         th

        const startLLM = sequentialNodes[0].startLLM

         => awa

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: conditionalEdge,
            name: conditionName,
            label: conditionLabel,
            type: 'condition',
            output,
            llm: startLLM,
            startLLM,
            multiModalMessageContent: sequentialNodes[0]?.multiModalMessageContent,
            predecessorAgents: sequentialNodes
        }

        return returnOutput
    }
}

 => {
    const appDataSource = options.appDataSource as DataSource
    const databaseEntities = options.databaseEntities as IDatabaseEntity
    const conditionUI = nodeData.inputs?.conditionUI as string
    const conditionFunction = nodeData.inputs?.conditionFunction as string
    const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`] as string

    [0] : 'conditionUI'
    

    const flow = {
        chatflowId: options.chatflowid,
        sessionId: options.sessionId,
        chatId: options.chatId,
        input,
        state,
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

module.exports = { nodeClass: Condition_SeqAgents }
