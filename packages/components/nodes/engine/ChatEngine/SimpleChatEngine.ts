import {
    FlowiseMemory,
    ICommonObject,
    IMessage,
    INode,
    INodeData,
    INodeOutputsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { LLM, ChatMessage, SimpleChatEngine } from 'llamaindex'
import { EvaluationRunTracerLlama } from '../../../evaluation/EvaluationRunTracerLlama'

class SimpleChatEngine_LlamaIndex implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    tags: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]
    sessionId?: string

     {
        this.label = 'Simple Chat Engine'
        this.name = 'simpleChatEngine'
        this.version = 1.0
        this.type = 'SimpleChatEngine'
        this.icon = 'chat-engine.png'
        this.category = 'Engine'
        this.description = 'Simple engine to handle back and forth conversations'
        this.baseClasses = [this.type]
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel_LlamaIndex'
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseChatMemory'
            },
            {
                label: 'System Message',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                optional: true,
                placeholder: 'You are a helpful assistant'
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        return null
    }

    a: Promise<string> {
        const model = nodeData.inputs?.model as LLM
        const systemMessagePrompt = nodeData.inputs?.systemMessagePrompt as string
        const memory = nodeData.inputs?.memory as FlowiseMemory
        const prependMessages = options?.prependMessages

        const chatHistory = [] as ChatMessage[]

         {
            chatHistory.push({
                content: systemMessagePrompt,
                role: 'user'
            })
        }

        

        // these are needed for evaluation runs
        awa

        ) as IMessage[]
        f {
             {
                chatHistory.push({
                    content: message.message,
                    role: 'assistant'
                })
            } el {
                chatHistory.push({
                    content: message.message,
                    role: 'user'
                })
            }
        }

        let text = ''
        let isStreamingStarted = false

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            
            f {
                text += chunk.response
                 {
                    isStreamingStarted = true
                     {
                        
                    }
                }
                 {
                    
                }
            }
        } else {
            
            text = response?.response
        }

        await memory.addChatMessages(
            [
                {
                    text: input,
                    type: 'userMessage'
                },
                {
                    text: text,
                    type: 'apiMessage'
                }
            ],
            this.sessionId
        )

        return text
    }
}

module.exports = { nodeClass: SimpleChatEngine_LlamaIndex }
