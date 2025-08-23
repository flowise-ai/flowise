import { DataSource } from 'typeorm'
import { getCredentialData, getCredentialParam, getVars, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { isValidUUID, isValidURL } from '../../../src/validator'
import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    ISeqAgentNode,
    ISeqAgentsState
} from '../../../src/Interface'
import { AIMessage, BaseMessage, HumanMessage } from '@langchain/core/messages'
import { v4 as uuidv4 } from 'uuid'

class ExecuteFlow_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams

     {
        this.label = 'Execute Flow'
        this.name = 'seqExecuteFlow'
        this.version = 1.0
        this.type = 'ExecuteFlow'
        this.icon = 'executeflow.svg'
        this.category = 'Sequential Agents'
        this.description = `Execute chatflow/agentflow and return final response`
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['chatflowApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Sequential Node',
                name: 'sequentialNode',
                type: 'Start | Agent | Condition | LLMNode | ToolNode | CustomFunction | ExecuteFlow',
                description:
                    'Can be connected to one of the following nodes: Start, Agent, Condition, LLM Node, Tool Node, Custom Function, Execute Flow',
                list: true
            },
            {
                label: 'Name',
                name: 'seqExecuteFlowName',
                type: 'string'
            },
            {
                label: 'Select Flow',
                name: 'selectedFlow',
                type: 'asyncOptions',
                loadMethod: 'listFlows'
            },
            {
                label: 'Input',
                name: 'seqExecuteFlowInput',
                type: 'options',
                description: 'Select one of the following or enter custom input',
                freeSolo: true,
                loadPreviousNodes: true,
                options: [
                    {
                        label: '{{ question }}',
                        name: 'userQuestion',
                        description: 'Use the user question from the chat as input.'
                    }
                ]
            },
            {
                label: 'Override Config',
                name: 'overrideConfig',
                description: 'Override the config passed to the flow.',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Base URL',
                name: 'baseURL',
                type: 'string',
                description:
                    'Base URL to Flowise. By default, it is the URL of the incoming request. Useful when you need to execute flow through an alternative route.',
                placeholder: 'http://localhost:3000',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Start new session per message',
                name: 'startNewSession',
                type: 'boolean',
                description:
                    'Whether to continue the session or start a new one with each interaction. Useful for flows with memory if you want to avoid it.',
                default: false,
                optional: true,
                additionalParams: true
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

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const returnData: INodeOptionsValue[] = []

            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity
             {
                return returnData
            }

            const searchOptions = options.searchOptions || {}
            .f

            f {
                const data = {
                    label: chatflows[i].name,
                    name: chatflows[i].id
                } as INodeOptionsValue
                
            }
            return returnData
        }
    }

    a: Promise<any> {
        const selectedFlowId = nodeData.inputs?.selectedFlow as string
        const _seqExecuteFlowName = nodeData.inputs?.seqExecuteFlowName as string
         th
        ..t
        const startNewSession = nodeData.inputs?.startNewSession as boolean
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const sequentialNodes = nodeData.inputs?.sequentialNode as ISeqAgentNode[]
        const seqExecuteFlowInput = nodeData.inputs?.seqExecuteFlowInput as string
        const overrideConfig =
            typeof nodeData.inputs?.overrideConfig === 'string' &&
            n &&
            n
                ? JSON.pa
                : nodeData.inputs?.overrideConfig

         th

         || (
        const returnValueAs = nodeData.inputs?.returnValueAs as string

        // Validate selectedFlowId is a valid UUID
        ) {
            th
        }

        // Validate baseURL is a valid URL
        ) {
            th
        }

        
        

         th

        let headers = {}
         headers = { Authorization: `Bearer ${chatflowApiKey}` }

        const chatflowId = options.chatflowid
        const sessionId = options.sessionId
        const chatId = options.chatId

         => {
            

            let flowInput = ''
             {
                flowInput = input
            } el && ) {
                ...t
                 ?? .filter(
                    (me => message.additional_kwargs && message.additional_kwargs?.nodeId === nodeId
                )
                const messageOutput = messageOutputs[messageOutputs.length - 1]

                 {
                    fl
                }
            }

            const flow = {
                chatflowId,
                sessionId,
                chatId,
                input: flowInput,
                state
            }

            const body = {
                question: flowInput,
                 : chatId,
                overrideConfig: {
                     : sessionId,
                    ...(
                }
            }

            const callOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                b
            }

            // Create additional sandbox variables
            const additionalSandbox: ICommonObject = {
                $callOptions: callOptions,
                $callBody: body
            }

            

            const code = `
    ;
    const url = "${baseURL}/api/v1/prediction/${selectedFlowId}";
    
    const body = $callBody;
    
    const options = $callOptions;
    
    try {
        ;
        ;
        return resp.text;
    }  {
        ;
        return '';
    }
`

            try {
                let response = await executeJavaScriptCode(code, sandbox, {
                    useSandbox: false,
                    timeout: 10000
                })

                 {
                    
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
            name: seqExecuteFlowName,
            label: _seqExecuteFlowName,
            type: 'utilities',
            output: 'ExecuteFlow',
            llm: startLLM,
            startLLM,
            multiModalMessageContent: sequentialNodes[0]?.multiModalMessageContent,
            predecessorAgents: sequentialNodes
        }

        return returnOutput
    }
}

module.exports = { nodeClass: ExecuteFlow_SeqAgents }
