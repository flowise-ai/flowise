import { flatten } from 'lodash'
import { ChatMessage, OpenAI, OpenAIAgent } from 'llamaindex'
import { getBaseClasses } from '../../../../src/utils'
import { EvaluationRunTracerLlama } from '../../../../evaluation/EvaluationRunTracerLlama'
import {
    FlowiseMemory,
    ICommonObject,
    IMessage,
    INode,
    INodeData,
    INodeParams,
    IServerSideEventStreamer,
    IUsedTool
} from '../../../../src/Interface'

class OpenAIFunctionAgent_LlamaIndex_Agents implements INode {
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
    sessionId?: string

     {
        this.label = 'OpenAI Tool Agent'
        this.name = 'openAIToolAgentLlamaIndex'
        this.version = 2.0
        this.type = 'OpenAIToolAgent'
        this.category = 'Agents'
        this.icon = 'function.svg'
        this.description = `Agent that uses OpenAI Function Calling to pick the tools and args to call using LlamaIndex`
        th]
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'Tools',
                name: 'tools',
                type: 'Tool_LlamaIndex',
                list: true
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseChatMemory'
            },
            {
                label: 'OpenAI/Azure Chat Model',
                name: 'model',
                type: 'BaseChatModel_LlamaIndex'
            },
            {
                label: 'System Message',
                name: 'systemMessage',
                type: 'string',
                rows: 4,
                optional: true,
                additionalParams: true
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        return null
    }

    a: Promise<string | ICommonObject> {
        const memory = nodeData.inputs?.memory as FlowiseMemory
        const model = nodeData.inputs?.model as OpenAI
        const systemMessage = nodeData.inputs?.systemMessage as string
        let tools = nodeData.inputs?.tools
        t

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

        const chatHistory = [] as ChatMessage[]

         {
            chatHistory.push({
                content: systemMessage,
                role: 'system'
            })
        }

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

        const agent = new OpenAIAgent({
            tools,
            llm: model,
            chatHistory: chatHistory,
            verbose: process.env.DEBUG === 'true' ? true : false
        })

        // these are needed for evaluation runs
        awa

        let text = ''
        let isStreamingStarted = false
        const usedTools: IUsedTool[] = []

         {
            const stream = await agent.chat({
                message: input,
                chatHistory,
                stream: true,
                verbose: process.env.DEBUG === 'true' ? true : false
            })
            f {
                text += chunk.response.delta
                 {
                    isStreamingStarted = true
                     {
                        
                    }
                     {
                        f {
                            usedTools.push({
                                tool: sourceTool.tool?.metadata.name ?? '',
                                toolInput: sourceTool.input,
                                toolOutput: sourceTool.output as any
                            })
                        }
                         {
                            
                        }
                    }
                }
                 {
                    
                }
            }
        } else {
            
             {
                f {
                    usedTools.push({
                        tool: sourceTool.tool?.metadata.name ?? '',
                        toolInput: sourceTool.input,
                        toolOutput: sourceTool.output as any
                    })
                }
            }

            text = response.response.message.content as string
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

        return usedTools.length ? { text: text, usedTools } : text
    }
}

module.exports = { nodeClass: OpenAIFunctionAgent_LlamaIndex_Agents }
