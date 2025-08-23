import { DataSource } from 'typeorm'
import { getVars, handleEscapeCharacters, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeParams, ISeqAgentNode, ISeqAgentsState } from '../../../src/Interface'
import { AIMessage, BaseMessage, HumanMessage } from '@langchain/core/messages'
import { customGet } from '../commonUtils'

const howToUseCode = `
1. Must return a string value at the end of function.

2. You can get default flow config, including the current "state":
    - \`$flow.sessionId\`
    - \`$flow.chatId\`
    - \`$flow.chatflowId\`
    - \`$flow.input\`
    - \`$flow.state\`

3. You can get custom variables: \`$vars.<variable-name>\`

`

class CustomFunction_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'Custom JS Function'
        this.name = 'seqCustomFunction'
        this.version = 1.0
        this.type = 'CustomFunction'
        this.icon = 'customfunction.svg'
        this.category = 'Sequential Agents'
        this.description = `Execute custom javascript function`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Input Variables',
                name: 'functionInputVariables',
                description: 'Input variables can be used in the function with prefix $. For example: $var',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
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
                label: 'Function Name',
                name: 'functionName',
                type: 'string',
                placeholder: 'My Function'
            },
            {
                label: 'Javascript Function',
                name: 'javascriptFunction',
                type: 'code',
                hint: {
                    label: 'How to use',
                    value: howToUseCode
                }
            },
            {
                label: 'Return Value As',
                name: 'returnValueAs',
                type: 'options',
                options: [
                    { label: 'AI Message', name: 'aiMessage' },
                    { label: 'Human Message', name: 'humanMessage' },
                    {
                        label: 'State Object',
                        name: 'stateObj',
                        description: "Return as state object, ex: { foo: bar }. This will update the custom state 'foo' to 'bar'"
                    }
                ],
                default: 'aiMessage'
            }
        ]
    }

    a: Promise<any> {
        const functionName = nodeData.inputs?.functionName as string
        const javascriptFunction = nodeData.inputs?.javascriptFunction as string
        const functionInputVariablesRaw = nodeData.inputs?.functionInputVariables
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]
        const returnValueAs = nodeData.inputs?.returnValueAs as string

         th

         => {
            
            const flow = {
                chatflowId: options.chatflowid,
                sessionId: options.sessionId,
                chatId: options.chatId,
                input,
                state
            }

            let inputVars: ICommonObject = {}
             {
                try {
                    inputVars =
                        type
                }  {
                    th
                }
            }

            // Some values might be a stringified JSON, parse it
            f {
                let value = inputVars[key]
                 {
                    value = han
                     && value.en) {
                        try {
                            value = JSON.pa
                            const nodeId = value.id || ''
                             {
                                const messages = state.messages as unknown as BaseMessage[]
                                 => m?.content
                                 {
                                    value = content
                                }
                            }
                        }  {
                            // ignore
                        }
                    }

                    ) {
                        )
                         {
                            value = variableValue
                        }
                    } el) {
                        value = )
                    }
                    inputVars[key] = value
                }
            }

            // Create additional sandbox variables
            const additionalSandbox: ICommonObject = {}

            // Add input variables to sandbox
            .length) {
                f {
                    additionalSandbox[`$${item}`] = inputVars[item]
                }
            }

            

            try {
                const response = await executeJavaScriptCode(javascriptFunction, sandbox, {
                    timeout: 10000
                })

                 {
                     {
                        th
                    }
                    return {
                        ...state,
                        ...response
                    }
                }

                 {
                    th
                }

                 {
                    return {
                        messages: [
                            new HumanMessage({
                                content: response,
                                additional_kwargs: {
                                    nodeId: nodeData.id
                                }
                            })
                        ]
                    }
                }

                return {
                    messages: [
                        new AIMessage({
                            content: response,
                            additional_kwargs: {
                                nodeId: nodeData.id
                            }
                        })
                    ]
                }
            }  {
                th
            }
        }

        const startLLM = sequentialNodes[0].startLLM

        const returnOutput: ISeqAgentNode = {
            id: nodeData.id,
            node: executeFunc,
            name: fun..t,
            label: functionName,
            type: 'utilities',
            output: 'CustomFunction',
            llm: startLLM,
            startLLM,
            multiModalMessageContent: sequentialNodes[0]?.multiModalMessageContent,
            predecessorAgents: sequentialNodes
        }

        return returnOutput
    }
}

module.exports = { nodeClass: CustomFunction_SeqAgents }
