import { Redis } from 'ioredis'
import hash from 'object-hash'
import { RedisCache as LangchainRedisCache } from '@langchain/community/caches/ioredis'
import { StoredGeneration, mapStoredMessageToChatMessage } from '@langchain/core/messages'
import { Generation, ChatGeneration } from '@langchain/core/outputs'
import { getBaseClasses, getCredentialData, getCredentialParam, ICommonObject, INode, INodeData, INodeParams } from '../../../src'

class RedisCache implements INode {
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
        this.label = 'Redis Cache'
        this.name = 'redisCache'
        this.version = 1.0
        this.type = 'RedisCache'
        this.description = 'Cache LLM response in Redis, useful for sharing cache across multiple processes or servers'
        this.icon = 'redis.svg'
        this.category = 'Cache'
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
                label: 'T',
                name: 'ttl',
                type: 'number',
                step: 1,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const ttl = nodeData.inputs?.ttl as string

        let 
        

         => {
            try {
                
                 {
                    
                }
            }  {
                
            }

            let idx = 0
            let key = getCa)
            let value = awa
            const generations: Generation[] = []

            wh {
                
                gene)
                idx += 1
                key = getCa)
                value = awa
            }

            

            return generations.length > 0 ? generations : null
        }

         => {
            try {
                
                 {
                    
                }
            }  {
                
            }

            f {
                )
                 {
                    awa), 'PX', pa)
                } else {
                    awa))
                }
            }

            
        }

        

        return redisClient
    }
}
 => {
    let client: Redis

    
    

     {
        
        
        
        
        

        const tlsOptions = sslEnabled === true ? { tls: { rejectUnauthorized: false } } : {}

        client = new Redis({
            p : 6379,
            host,
            username,
            password,
            keepAlive:
                p)
                    ? pa
                    : undefined,
            ...tlsOptions
        })
    } else {
        client = new Redis(redisUrl, {
            keepAlive:
                p)
                    ? pa
                    : undefined
        })
    }

    return client
}
: )
 => {
     {
        return {
            text: storedGeneration.text,
            me
        }
    } else {
        return { text: storedGeneration.text }
    }
}
 => {
    const serializedValue: StoredGeneration = {
        text: generation.text
    }
    .me {
        .me
    }
    return serializedValue
}

module.exports = { nodeClass: RedisCache }
