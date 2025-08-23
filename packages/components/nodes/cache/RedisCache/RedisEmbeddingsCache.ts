import { Redis } from 'ioredis'
import { RedisByteStore } from '@langchain/community/storage/ioredis'
import { Embeddings, EmbeddingsInterface } from '@langchain/core/embeddings'
import { CacheBackedEmbeddingsFields } from 'langchain/embeddings/cache_backed'
import { getBaseClasses, getCredentialData, getCredentialParam, ICommonObject, INode, INodeData, INodeParams } from '../../../src'
import { BaseStore } from '@langchain/core/stores'
import { insecureHash } from '@langchain/core/utils/hash'
import { Document } from '@langchain/core/documents'

class RedisEmbeddingsCache implements INode {
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
        this.label = 'Redis Embeddings Cache'
        this.name = 'redisEmbeddingsCache'
        this.version = 1.0
        this.type = 'RedisEmbeddingsCache'
        this.description = 'Cache generated Embeddings in Redis to avoid needing to recompute them.'
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
                label: 'Embeddings',
                name: 'embeddings',
                type: 'Embeddings'
            },
            {
                label: 'T',
                name: 'ttl',
                type: 'number',
                step: 10,
                default: 60 * 60,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Namespace',
                name: 'namespace',
                type: 'string',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        let ttl = nodeData.inputs?.ttl as string
        const namespace = nodeData.inputs?.namespace as string
        const underlyingEmbeddings = nodeData.inputs?.embeddings as Embeddings

        
        

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

        ttl ??= '3600'
        let ttlNumbe
        const redisStore = new RedisByteStore({
            client: client,
            ttl: ttlNumber
        })

        const store = CacheBackedEmbeddings.fromBytesStore(underlyingEmbeddings, redisStore, {
            namespace: namespace,
            redisClient: client
        })

        return store
    }
}

class CacheBackedEmbeddings extends Embeddings {
    protected underlyingEmbeddings: EmbeddingsInterface

    protected documentEmbeddingStore: BaseStore<string, number[]>

    protected redisClient?: Redis

     {
        
        this.underlyingEmbeddings = fields.underlyingEmbeddings
        this.documentEmbeddingStore = fields.documentEmbeddingStore
        this.redisClient = fields.redisClient
    }

    a: Promise<number[]> {
        
        th
        return res
    }

    a: Promise<number[][]> {
        
        const missingIndicies = []
        const missingDocuments = []
        f {
             {
                m
                m
            }
        }
         {
            
             => 
            awa
            f {
                vectors[missingIndicies[i]] = missingVectors[i]
            }
        }
        th
        return vectors as number[][]
    }

    static fromBytesStore(
        underlyingEmbeddings: EmbeddingsInterface,
        documentEmbeddingStore: BaseStore<string, Uint8Array>,
        options?: {
            namespace?: string
            redisClient?: Redis
        }
    ) {
        
        
        const encoderBackedStore = new EncoderBackedStore<string, number[], Uint8Array>({
            store: documentEmbeddingStore,
            keyEn => ( + ,
            valueSe => en),
            value => JSON.pa)
        })
        return new this({
            underlyingEmbeddings,
            documentEmbeddingStore: encoderBackedStore,
            redisClient: options?.redisClient
        })
    }
}

class EncoderBackedStore<K, V, SerializedType = any> extends BaseStore<K, V> {
    lc_namespace = ['langchain', 'storage']

    store: BaseStore<string, SerializedType>

    keyEn => string

    valueSe => SerializedType

    value => V

    constructor(fields: {
        store: BaseStore<string, SerializedType>
        keyEn => string
        valueSe => SerializedType
        value => V
    }) {
        
        this.store = fields.store
        this.keyEncoder = fields.keyEncoder
        this.valueSerializer = fields.valueSerializer
        this.valueDeserializer = fields.valueDeserializer
    }

    a: P[]> {
        
        
         => {
             {
                return undefined
            }
            
        })
    }

    a: Promise<void> {
         => [
            th,
            th
        ])
        
    }

    a: Promise<void> {
        
        
    }

    a: AsyncGenerator<string | K> {
        y
    }
}

exp {
    
    
    return new EncoderBackedStore({
        store,
        keyEn => key,
        valueSe => en),
        value => new ))
    })
}

module.exports = { nodeClass: RedisEmbeddingsCache }
