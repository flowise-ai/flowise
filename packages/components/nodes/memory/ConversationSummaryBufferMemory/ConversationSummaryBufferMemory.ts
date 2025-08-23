import {
    IMessage,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeParams,
    MemoryMethods,
    ICommonObject,
    FlowiseSummaryBufferMemory
} from '../../../src/Interface'
import { getBaseClasses, mapChatMessageToBaseMessage } from '../../../src/utils'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { BaseMessage, getBufferString, HumanMessage } from '@langchain/core/messages'
import { ConversationSummaryBufferMemory, ConversationSummaryBufferMemoryInput } from 'langchain/memory'
import { DataSource } from 'typeorm'
import { ChatAnthropic } from '../../chatmodels/ChatAnthropic/FlowiseChatAnthropic'

class ConversationSummaryBufferMemory_Memory implements INode {
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
        this.label = 'Conversation Summary Buffer Memory'
        this.name = 'conversationSummaryBufferMemory'
        this.version = 1.0
        this.type = 'ConversationSummaryBufferMemory'
        this.icon = 'memory.svg'
        this.category = 'Memory'
        this.description = 'Uses token length to decide when to summarize conversations'
        th]
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
            },
            {
                label: 'Max Token Limit',
                name: 'maxTokenLimit',
                type: 'number',
                default: 2000,
                description: 'Summarize conversations once token limit is reached. Default to 2000'
            },
            {
                label: 'Session Id',
                name: 'sessionId',
                type: 'string',
                description:
                    'If not specified, a random id will be used. Learn <a target="_blank" href="https://docs.flowise-ai.github.io/memory#ui-and-embedded-chat">more</a>',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Memory Key',
                name: 'memoryKey',
                type: 'string',
                default: 'chat_history',
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const _maxTokenLimit = nodeData.inputs?.maxTokenLimit as string
         : 2000
        const sessionId = nodeData.inputs?.sessionId as string
         ?? 'chat_history'

        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const chatflowid = options.chatflowid as string
        const orgId = options.orgId as string

        const obj: ConversationSummaryBufferMemoryInput & BufferMemoryExtendedInput = {
            llm: model,
            sessionId,
            memoryKey,
            maxTokenLimit,
            returnMessages: true,
            appDataSource,
            databaseEntities,
            chatflowid,
            orgId
        }

        
    }
}

interface BufferMemoryExtendedInput {
    sessionId: string
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
    orgId: string
}

class ConversationSummaryBufferMemoryExtended extends FlowiseSummaryBufferMemory implements MemoryMethods {
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
    orgId: string
    sessionId = ''

     {
        
        this.sessionId = fields.sessionId
        this.appDataSource = fields.appDataSource
        this.databaseEntities = fields.databaseEntities
        this.chatflowid = fields.chatflowid
        this.orgId = fields.orgId
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
        const id = overrideSessionId ? overrideSessionId : this.sessionId
         return []

        let .find({
            where: {
                sessionId: id,
                chatflowid: this.chatflowid
            },
            order: {
                createdDate: 'ASC'
            }
        })

         {
            
        }

        let ba

        // Prune baseMessages if it exceeds max token limit
         {
            ba, ...baseMessages]
        }

        let currBufferLength = 0

         {
            )
             {
                const prunedMemory = []
                wh {
                    
                     {
                        p
                        )
                    }
                }
                th
            }
        }

        // ----------- Finished Pruning ---------------

         {
            // Anthropic doesn't support multiple system messages
             {
                ba, ...baseMessages]
            } else {
                ba, ...baseMessages]
            }
        }

         {
            return baseMessages
        }

        let returnIMessages: IMessage[] = []
        f {
            returnIMessages.push({
                message: m.content as string,
                type: m._getType() === 'human' ? 'userMessage' : 'apiMessage'
            })
        }

        return returnIMessages
    }

    a: Promise<void> {
        // adding chat messages is done on server level
        return
    }

    a: Promise<void> {
        // clearing chat messages is done on server level
        return
    }
}

module.exports = { nodeClass: ConversationSummaryBufferMemory_Memory }
