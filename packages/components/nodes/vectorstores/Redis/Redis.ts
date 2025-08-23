import { flatten } from 'lodash'
import { createClient, SearchOptions } from 'redis'
import { Embeddings } from '@langchain/core/embeddings'
import { RedisVectorStore, RedisVectorStoreConfig } from '@langchain/community/vectorstores/redis'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { escapeSpecialChars, unEscapeSpecialChars } from './utils'

class Redis_VectorStores implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    badge: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]

     {
        this.label = 'Redis'
        this.name = 'redis'
        this.version = 1.0
        this.description =
            'Upsert embedded data and perform similarity search upon query using Redis, an open source, in-memory data structure store'
        this.type = 'Redis'
        this.icon = 'redis.svg'
        this.category = 'Vector Stores'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['redisCacheUrlApi', 'redisCacheApi']
        }
        this.inputs = [
            {
                label: 'Document',
                name: 'document',
                type: 'Document',
                list: true,
                optional: true
            },
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'Embeddings'
            },
            {
                label: 'Index Name',
                name: 'indexName',
                placeholder: '<VECTOR_INDEX_NAME>',
                type: 'string'
            },
            {
                label: 'Replace Index on Upsert',
                name: 'replaceIndex',
                description: 'Selecting this option will delete the existing index and recreate a new one when upserting',
                default: false,
                type: 'boolean'
            },
            {
                label: 'Content Field',
                name: 'contentKey',
                 that contains the actual content',
                type: 'string',
                default: 'content',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Metadata Field',
                name: 'metadataKey',
                 that contains the metadata of the document',
                type: 'string',
                default: 'metadata',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Vector Field',
                name: 'vectorKey',
                 that contains the vector',
                type: 'string',
                default: 'content_vector',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to 4',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Redis Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Redis Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            const indexName = nodeData.inputs?.indexName as string
            let contentKey = nodeData.inputs?.contentKey as string
            let metadataKey = nodeData.inputs?.metadataKey as string
            let vectorKey = nodeData.inputs?.vectorKey as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const replaceIndex = nodeData.inputs?.replaceIndex as boolean

            let 
             {
                
                
                
                

                redisUrl = 'redis://' + username + ':' + password + '@' + host + ':' + portStr
            }

            const docs = nodeData.inputs?.document as Document[]

             : []
            const finalDocs = []
            f {
                 {
                    
                    f
                }
            }

            try {
                const redisClient = createClient({
                    url: redisUrl,
                    socket: {
                        keepAlive:
                            p)
                                ? pa
                                : undefined
                    },
                    pingInterval:
                        p)
                            ? pa
                            : undefined // Add Redis protocol-level pings
                })
                awa

                const storeConfig: RedisVectorStoreConfig = {
                    redisClient: redisClient,
                    indexName: indexName
                }
                
                 {
                    let 
                     {
                        // eslint-disable-next-line no-console
                        
                    }
                }
                

                 contentKey = 'content'
                 metadataKey = 'metadata'
                 vectorKey = 'content_vector'

                // Avoid Illegal invocation error
                ve => {
                    return await similaritySearchVectorWithScore(
                        query,
                        k,
                        indexName,
                        metadataKey,
                        vectorKey,
                        contentKey,
                        redisClient,
                        filter
                    )
                }

                awa

                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        const indexName = nodeData.inputs?.indexName as string
        let contentKey = nodeData.inputs?.contentKey as string
        let metadataKey = nodeData.inputs?.metadataKey as string
        let vectorKey = nodeData.inputs?.vectorKey as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const topK = nodeData.inputs?.topK as string
         : 4
        const output = nodeData.outputs?.output as string

        let 
         {
            
            
            
            

            redisUrl = 'redis://' + username + ':' + password + '@' + host + ':' + portStr
        }

        const redisClient = createClient({
            url: redisUrl,
            socket: {
                keepAlive:
                    p)
                        ? pa
                        : undefined
            },
            pingInterval:
                p)
                    ? pa
                    : undefined // Add Redis protocol-level pings
        })

        const storeConfig: RedisVectorStoreConfig = {
            redisClient: redisClient,
            indexName: indexName
        }

        

         contentKey = 'content'
         metadataKey = 'metadata'
         vectorKey = 'content_vector'

        // Avoid Illegal invocation error
        ve => {
            awa
            const results = await similaritySearchVectorWithScore(
                query,
                k,
                indexName,
                metadataKey,
                vectorKey,
                contentKey,
                redisClient,
                filter
            )
            awa
            return results
        }

         {
            
        } el {
            ;(ve.k = k
            return vectorStore
        }
        return vectorStore
    }
}

 => {
    try {
        awa
    }  {
        ) {
            throw new Error(
                'Failed to run FT.INFO command. Please ensure that you are running a RediSearch-capable Redis instance: https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/redis#setup'
            )
        }
        // index doesn't exist
        return false
    }

    return true
}

const buildQuery = (
    query: number[],
    k: number,
    metadataKey: string,
    vectorKey: string,
    contentKey: string,
    filter?: string[]
): [string, SearchOptions] => {
    const vectorScoreField = 'vector_score'

    let hybridFields = '*'
    // if a filter is set, modify the hybrid query
     {
        // `filter` is a list of strings, then it's applied using the OR operator in the metadata key
        hyb.j})`
    }

    const baseQuery = `${hybridFields} => [KNN ${k} @${vectorKey} $vector AS ${vectorScoreField}]`
    const returnFields = [metadataKey, contentKey, vectorScoreField]

    const options: SearchOptions = {
        PARAMS: {
            ve.buffe
        },
        RETURN: returnFields,
        SORTBY: vectorScoreField,
        DIALECT: 2,
        LIMIT: {
            from: 0,
            size: k
        }
    }

    return [baseQuery, options]
}

const similaritySearchVectorWithScore = async (
    query: number[],
    k: number,
    indexName: string,
    metadataKey: string,
    vectorKey: string,
    contentKey: string,
    redisClient: ReturnType<typeof createClient>,
    filter?: string[]
): Promise<[Document, number][]> => {
    )
    const result: [Document, number][] = []

     {
        f {
             {
                const document = res.value
                 {
                    
                    result.push([
                        new Document({
                            pageContent: document[contentKey] as string,
                            meta
                        }),
                        Numbe
                    ])
                }
            }
        }
    }
    return result
}

module.exports = { nodeClass: Redis_VectorStores }
