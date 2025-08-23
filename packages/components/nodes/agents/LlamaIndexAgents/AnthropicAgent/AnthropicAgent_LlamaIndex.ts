import { flatten } from 'lodash'
import { MessageContentTextDetail, ChatMessage, AnthropicAgent, Anthropic } from 'llamaindex'
import { getBaseClasses } from '../../../../src/utils'
import { FlowiseMemory, ICommonObject, IMessage, INode, INodeData, INodeParams, IUsedTool } from '../../../../src/Interface'
import { EvaluationRunTracerLlama } from '../../../../evaluation/EvaluationRunTracerLlama'

class AnthropicAgent_LlamaIndex_Agents implements INode {
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
        this.label = 'Anthropic Agent'
        this.name = 'anthropicAgentLlamaIndex'
        this.version = 1.0
        this.type = 'AnthropicAgent'
        this.category = 'Agents'
        this.icon = 'Anthropic.svg'
        this.description = `Agent that uses Anthropic Claude Function Calling to pick the tools and args to call using LlamaIndex`
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
                label: 'Anthropic Claude Model',
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
        const model = nodeData.inputs?.model as Anthropic
        const systemMessage = nodeData.inputs?.systemMessage as string
        const prependMessages = options?.prependMessages

        let tools = nodeData.inputs?.tools
        t

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

        const agent = new AnthropicAgent({
            tools,
            llm: model,
            chatHistory: chatHistory,
            verbose: process.env.DEBUG === 'true' ? true : false
        })

        // these are needed for evaluation runs
        awa

        let text = ''
        const usedTools: IUsedTool[] = []

        

         {
            f {
                usedTools.push({
                    tool: sourceTool.tool?.metadata.name ?? '',
                    toolInput: sourceTool.input,
                    toolOutput: sourceTool.output as any
                })
            }
        }

         &&  {
            text = (.text
        } else {
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

module.exports = { nodeClass: AnthropicAgent_LlamaIndex_Agents }
