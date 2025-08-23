import { Redis, RedisOptions } from 'ioredis'
import { BufferMemory, BufferMemoryInput } from 'langchain/memory'
import { mapStoredMessageToChatMessage, BaseMessage, AIMessage, HumanMessage } from '@langchain/core/messages'
import { INode, INodeData, INodeParams, ICommonObject, MessageType, IMessage, MemoryMethods, FlowiseMemory } from '../../../src/Interface'
import {
    convertBaseMessagetoIMessage,
    getBaseClasses,
    getCredentialData,
    getCredentialParam,
    mapChatMessageToBaseMessage
} from '../../../src/utils'

class RedisBackedChatMemory_Memory implements INode {
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
        this.label = 'Redis-Backed Chat Memory'
        this.name = 'RedisBackedChatMemory'
        this.version = 2.0
        this.type = 'RedisBackedChatMemory'
        this.icon = 'redis.svg'
        this.category = 'Memory'
        this.description = 'Summarizes the conversation and stores the memory in Redis server'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            optional: true,
            credentialNames: ['redisCacheApi', 'redisCacheUrlApi']
        }
        this.inputs = [
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
            },
            {
                label: 'Window Size',
                name: 'windowSize',
                type: 'number',
                description: 'Window of size k to surface the last k back-and-forth to use as memory.',
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        
    }
}

: Promise<BufferMemory> => {
    const sessionTTL = nodeData.inputs?.sessionTTL as number
    const memoryKey = nodeData.inputs?.memoryKey as string
    const sessionId = nodeData.inputs?.sessionId as string
    const windowSize = nodeData.inputs?.windowSize as number

    
    
    const orgId = options.orgId as string

    const redisOptions = redisUrl
        ? redisUrl
        : ({
              p || '6379'),
              h,
              u,
              pa,
              tl ? { rejectUnauthorized: false } : undefined
          } a

    const memory = new BufferMemoryExtended({
        memoryKey: memoryKey ?? 'chat_history',
        sessionId,
        windowSize,
        sessionTTL,
        redisOptions,
        orgId
    })

    return memory
}

interface BufferMemoryExtendedInput {
    sessionId: string
    windowSize?: number
    sessionTTL?: number
    orgId: string
    redisOptions: RedisOptions | string
}

class BufferMemoryExtended extends FlowiseMemory implements MemoryMethods {
    sessionId = ''
    orgId = ''
    windowSize?: number
    sessionTTL?: number
    redisOptions: RedisOptions | string

     {
        
        this.sessionId = fields.sessionId
        this.windowSize = fields.windowSize
        this.sessionTTL = fields.sessionTTL
        this.orgId = fields.orgId
        this.redisOptions = fields.redisOptions
    }

    p => P: Promise<T> {
        const client =
            typeof this.redisOptions === 'string'
                ? new Redis(this.redisOptions, {
                      keepAlive:
                          p)
                              ? pa
                              : undefined
                  })
                : new Redis({
                      ...this.redisOptions,
                      keepAlive:
                          p)
                              ? pa
                              : undefined
                  })
        try {
            
        } finally {
            awa
        }
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
         => {
            const id = overrideSessionId ? overrideSessionId : this.sessionId
            
            .map((me => JSON.pa)
            
             {
                ba))
            }
            
        })
    }

    a: Promise<void> {
        awa => {
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
        })
    }

    a: Promise<void> {
        awa => {
            const id = overrideSessionId ? overrideSessionId : this.sessionId
            awa
            awa
        })
    }
}

module.exports = { nodeClass: RedisBackedChatMemory_Memory }
