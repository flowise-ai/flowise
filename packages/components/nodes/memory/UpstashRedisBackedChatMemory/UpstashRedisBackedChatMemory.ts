import { Redis } from '@upstash/redis'
import { BufferMemory, BufferMemoryInput } from 'langchain/memory'
import { UpstashRedisChatMessageHistory } from '@langchain/community/stores/message/upstash_redis'
import { mapStoredMessageToChatMessage, AIMessage, HumanMessage, StoredMessage, BaseMessage } from '@langchain/core/messages'
import { FlowiseMemory, IMessage, INode, INodeData, INodeParams, MemoryMethods, MessageType } from '../../../src/Interface'
import {
    convertBaseMessagetoIMessage,
    getBaseClasses,
    getCredentialData,
    getCredentialParam,
    mapChatMessageToBaseMessage
} from '../../../src/utils'
import { ICommonObject } from '../../../src/Interface'

class UpstashRedisBackedChatMemory_Memory implements INode {
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

     {
        this.label = 'Upstash Redis-Backed Chat Memory'
        this.name = 'upstashRedisBackedChatMemory'
        this.version = 2.0
        this.type = 'UpstashRedisBackedChatMemory'
        this.icon = 'upstash.svg'
        this.category = 'Memory'
        this.description = 'Summarizes the conversation and stores the memory in Upstash Redis server'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Configure password authentication on your upstash redis instance',
            credentialNames: ['upstashRedisMemoryApi']
        }
        this.inputs = [
            {
                label: 'Upstash Redis REST URL',
                name: 'baseURL',
                type: 'string',
                placeholder: 'https://<your-url>.upstash.io'
            },
            {
                label: 'Session Id',
                name: 'sessionId',
                type: 'string',
                description:
                    'If not specified, a random id will be used. Learn <a target="_blank" href="https://docs.flowise-ai.github.io/memory/long-term-memory#ui-and-embedded-chat">more</a>',
                default: '',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Session Timeouts',
                name: 'sessionTTL',
                type: 'number',
                description: 'Seconds till a session expires. If not specified, the session will never expire.',
                additionalParams: true,
                optional: true
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
        
    }
}

: Promise<BufferMemory> => {
    const baseURL = nodeData.inputs?.baseURL as string
    const sessionId = nodeData.inputs?.sessionId as string
    const memoryKey = nodeData.inputs?.memoryKey as string
    const _sessionTTL = nodeData.inputs?.sessionTTL as string
     : undefined

    
    

    const client = new Redis({
        url: baseURL,
        token: upstashRestToken
    })

    const redisChatMessageHistory = new UpstashRedisChatMessageHistory({
        sessionId,
        sessionTTL,
        client
    })
    const orgId = options.orgId as string
    const memory = new BufferMemoryExtended({
        memoryKey: memoryKey ?? 'chat_history',
        chatHistory: redisChatMessageHistory,
        sessionId,
        sessionTTL,
        redisClient: client,
        orgId
    })

    return memory
}

interface BufferMemoryExtendedInput {
    redisClient: Redis
    sessionId: string
    orgId: string
    sessionTTL?: number
}

class BufferMemoryExtended extends FlowiseMemory implements MemoryMethods {
    sessionId = ''
    orgId = ''
    redisClient: Redis
    sessionTTL?: number

     {
        
        this.sessionId = fields.sessionId
        this.redisClient = fields.redisClient
        this.sessionTTL = fields.sessionTTL
        this.orgId = fields.orgId
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
         return []

        const id = overrideSessionId ? overrideSessionId : this.sessionId
        
        
        : x 
        
         {
            ba))
        }
        
    }

    a: Promise<void> {
         return

        const id = overrideSessionId ? overrideSessionId : this.sessionId
         => m
         => m

         {
            
             => m)
            awa)
             awa
        }

         {
            
             => m)
            awa)
             awa
        }
    }

    a: Promise<void> {
         return

        const id = overrideSessionId ? overrideSessionId : this.sessionId
        awa
        awa
    }
}

module.exports = { nodeClass: UpstashRedisBackedChatMemory_Memory }
