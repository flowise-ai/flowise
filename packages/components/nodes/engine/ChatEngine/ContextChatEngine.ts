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
import { Metadata, BaseRetriever, LLM, ContextChatEngine, ChatMessage, NodeWithScore } from 'llamaindex'
import { reformatSourceDocuments } from '../EngineUtils'
import { EvaluationRunTracerLlama } from '../../../evaluation/EvaluationRunTracerLlama'

class ContextChatEngine_LlamaIndex implements INode {
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
        this.label = 'Context Chat Engine'
        this.name = 'contextChatEngine'
        this.version = 1.0
        this.type = 'ContextChatEngine'
        this.icon = 'context-chat-engine.png'
        this.category = 'Engine'
        th with built-in memory to remember conversation'
        this.baseClasses = [this.type]
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel_LlamaIndex'
            },
            {
                label: 'Vector Store Retriever',
                name: 'vectorStoreRetriever',
                type: 'VectorIndexRetriever'
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseChatMemory'
            },
            {
                label: 'Return Source Documents',
                name: 'returnSourceDocuments',
                type: 'boolean',
                optional: true
            },
            {
                label: 'System Message',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                optional: true,
                placeholder:
                    'I want you to act as a document that I am having a conversation with. Your name is "AI Assistant". You will provide me with answers from the given info. If the answer is not included, say exactly "Hmm, I am not sure." and stop after that. Refuse to answer any question not about the info. Never break character.'
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        return null
    }

    a: Promise<string | ICommonObject> {
        const model = nodeData.inputs?.model as LLM
        const vectorStoreRetriever = nodeData.inputs?.vectorStoreRetriever as BaseRetriever
        const systemMessagePrompt = nodeData.inputs?.systemMessagePrompt as string
        const memory = nodeData.inputs?.memory as FlowiseMemory
        const returnSourceDocuments = nodeData.inputs?.returnSourceDocuments as boolean
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
        let sourceDocuments: ICommonObject[] = []
        let sourceNodes: NodeWithScore<Metadata>[] = []

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            
            f {
                text += chunk.response
                 sourceNodes = chunk.sourceNodes
                 {
                    isStreamingStarted = true
                     {
                        
                    }
                }

                 {
                    
                }
            }

             {
                
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

         return { text, sourceDocuments }
        else return { text }
    }
}

module.exports = { nodeClass: ContextChatEngine_LlamaIndex }
