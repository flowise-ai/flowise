import {
    FlowiseSummaryMemory,
    IMessage,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeParams,
    MemoryMethods,
    ICommonObject
} from '../../../src/Interface'
import { getBaseClasses, mapChatMessageToBaseMessage } from '../../../src/utils'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { BaseMessage, HumanMessage, SystemMessage } from '@langchain/core/messages'
import { ConversationSummaryMemory, ConversationSummaryMemoryInput } from 'langchain/memory'
import { DataSource } from 'typeorm'
import { ChatAnthropic } from '../../chatmodels/ChatAnthropic/FlowiseChatAnthropic'

class ConversationSummaryMemory_Memory implements INode {
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
        this.label = 'Conversation Summary Memory'
        this.name = 'conversationSummaryMemory'
        this.version = 2.0
        this.type = 'ConversationSummaryMemory'
        this.icon = 'memory.svg'
        this.category = 'Memory'
        this.description = 'Summarizes the conversation and stores the current summary in memory'
        th]
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
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
        const sessionId = nodeData.inputs?.sessionId as string
         ?? 'chat_history'

        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const chatflowid = options.chatflowid as string
        const orgId = options.orgId as string

        const obj: ConversationSummaryMemoryInput & BufferMemoryExtendedInput = {
            llm: model,
            memoryKey,
            returnMessages: true,
            sessionId,
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

class ConversationSummaryMemoryExtended extends FlowiseSummaryMemory implements MemoryMethods {
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

        this.buffer = ''
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

        

        // Get summary
         {
            th, th : ''
        }

         {
            // Anthropic doesn't support multiple system messages
             {
                ]
            } else {
                ]
            }
        }

         {
            return [
                {
                    message: this.buffer,
                    type: 'apiMessage'
                }
            ]
        }

        let returnIMessages: IMessage[] = []
        f {
            returnIMessages.push({
                message: m.content as string,
                type: m.role
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

module.exports = { nodeClass: ConversationSummaryMemory_Memory }
