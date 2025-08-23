import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import {
    ICommonObject,
    ICondition,
    IHumanInput,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeOutputsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { AIMessageChunk, BaseMessageLike } from '@langchain/core/messages'
import { DEFAULT_HUMAN_INPUT_DESCRIPTION, DEFAULT_HUMAN_INPUT_DESCRIPTION_HTML } from '../prompt'

class HumanInput_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Human Input'
        this.name = 'humanInputAgentflow'
        this.version = 1.0
        this.type = 'HumanInput'
        this.category = 'Agent Flows'
        this.description = 'Request human input, approval or rejection during execution'
        this.color = '#6E6EFD'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Description Type',
                name: 'humanInputDescriptionType',
                type: 'options',
                options: [
                    {
                        label: 'Fixed',
                        name: 'fixed',
                        description: 'Specify a fixed description'
                    },
                    {
                        label: 'Dynamic',
                        name: 'dynamic',
                        description: 'Use LLM to generate a description'
                    }
                ]
            },
            {
                label: 'Description',
                name: 'humanInputDescription',
                type: 'string',
                placeholder: 'Are you sure you want to proceed?',
                acceptVariable: true,
                rows: 4,
                show: {
                    humanInputDescriptionType: 'fixed'
                }
            },
            {
                label: 'Model',
                name: 'humanInputModel',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                loadConfig: true,
                show: {
                    humanInputDescriptionType: 'dynamic'
                }
            },
            {
                label: 'Prompt',
                name: 'humanInputModelPrompt',
                type: 'string',
                default: DEFAULT_HUMAN_INPUT_DESCRIPTION_HTML,
                acceptVariable: true,
                generateInstruction: true,
                rows: 4,
                show: {
                    humanInputDescriptionType: 'dynamic'
                }
            },
            {
                label: 'Enable Feedback',
                name: 'humanInputEnableFeedback',
                type: 'boolean',
                default: true
            }
        ]
        this.outputs = [
            {
                label: 'Proceed',
                name: 'proceed'
            },
            {
                label: 'Reject',
                name: 'reject'
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const componentNodes = options.componentNodes as {
                [key: string]: INode
            }

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                 {
                    ) {
                        continue
                    }
                    returnOptions.push({
                        label: componentNode.label,
                        name: nodeName,
                        imageSrc: componentNode.icon
                    })
                }
            }
            return returnOptions
        }
    }

    a: Promise<any> {
        const _humanInput = nodeData.inputs?.humanInput
         : _humanInput

        const humanInputEnableFeedback = nodeData.inputs?.humanInputEnableFeedback as boolean
        let humanInputDescriptionType = nodeData.inputs?.humanInputDescriptionType as string
        const model = nodeData.inputs?.humanInputModel as string
        const modelConfig = nodeData.inputs?.humanInputModelConfig as ICommonObject
        const _humanInputModelPrompt = nodeData.inputs?.humanInputModelPrompt as string
        const humanInputModelPrompt = _humanInputModelPrompt ? _humanInputModelPrompt : DEFAULT_HUMAN_INPUT_DESCRIPTION

        // Extract runtime state and history
        const state = options.agentflowRuntime?.state as ICommonObject
         ?? []
         ?? []

        const chatId = options.chatId as string
        const isStreamable = options.sseStreamer !== undefined

         {
            const outcomes: Partial<ICondition>[] & Partial<IHumanInput>[] = [
                {
                    type: 'proceed',
                    startNodeId: humanInput?.startNodeId,
                    feedback: humanInputEnableFeedback && humanInput?.feedback ? humanInput.feedback : undefined,
                    isFulfilled: false
                },
                {
                    type: 'reject',
                    startNodeId: humanInput?.startNodeId,
                    feedback: humanInputEnableFeedback && humanInput?.feedback ? humanInput.feedback : undefined,
                    isFulfilled: false
                }
            ]

            // Only one outcome can be fulfilled at a time
             {
                case 'proceed':
                    outcomes[0].isFulfilled = true
                    break
                case 'reject':
                    outcomes[1].isFulfilled = true
                    break
            }

            const messages = [
                ...pastChatHistory,
                ...runtimeChatHistory,
                {
                    role: 'user',
                    content: humanInput.feedback || humanInput.type
                }
            ]
            const input = { ...humanInput, messages }
            const output = { conditions: outcomes }

            const nodeOutput = {
                id: nodeData.id,
                name: this.name,
                input,
                output,
                state
            }

             {
                ;(n.chatHistory = [{ role: 'user', content: humanInput.feedback }]
            }

            return nodeOutput
        } else {
            let humanInputDescription = ''

             {
                humanInput || 'Do you want to proceed?'
                const messages = [...pastChatHistory, ...runtimeChatHistory]
                // Find the last message in the messages array
                .content || ''
                humanInputDescription = `${lastMessage}\n\n${humanInputDescription}`
                 {
                    const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
                    
                }
            } else {
                 {
                    const nodeInstanceFilePath = options.componentNodes[model].filePath as string
                    
                    
                    const newNodeData = {
                        ...nodeData,
                        credential: modelConfig['FLOWISE_CREDENTIAL_ID'],
                        inputs: {
                            ...nodeData.inputs,
                            ...modelConfig
                        }
                    }
                    ) as BaseChatModel
                    const messages = [
                        ...pastChatHistory,
                        ...runtimeChatHistory,
                        {
                            role: 'user',
                            content: humanInputModelPrompt || DEFAULT_HUMAN_INPUT_DESCRIPTION
                        }
                    ]

                    let 
                     {
                        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
                        f) {
                            )
                            
                        }
                        humanInputDescription = response.content as string
                    } else {
                        
                        humanInputDescription = response.content as string
                    }
                }
            }

            const input = { messages: [...pastChatHistory, ...runtimeChatHistory], humanInputEnableFeedback }
            const output = { content: humanInputDescription }
            const nodeOutput = {
                id: nodeData.id,
                name: this.name,
                input,
                output,
                state,
                chatHistory: [{ role: 'assistant', content: humanInputDescription }]
            }

            return nodeOutput
        }
    }
}

module.exports = { nodeClass: HumanInput_Agentflow }
