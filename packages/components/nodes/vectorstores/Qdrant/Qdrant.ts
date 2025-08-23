import { flatten } from 'lodash'
import { v4 as uuid } from 'uuid'
import { QdrantClient } from '@qdrant/js-client-rest'
import { VectorStoreRetrieverInput } from '@langchain/core/vectorstores'
import { Document } from '@langchain/core/documents'
import { QdrantVectorStore, QdrantLibArgs } from '@langchain/qdrant'
import { Embeddings } from '@langchain/core/embeddings'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { FLOWISE_CHATID, getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { index } from '../../../src/indexing'
import { howToUseFileUpload } from '../VectorStoreUtils'

type RetrieverConfig = Partial<VectorStoreRetrieverInput<QdrantVectorStore>>
type QdrantAddDocumentOptions = {
    customPayload?: Record<string, any>[]
    ids?: string[]
}

class Qdrant_VectorStores implements INode {
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
        this.label = 'Qdrant'
        this.name = 'qdrant'
        this.version = 5.0
        this.type = 'Qdrant'
        this.icon = 'qdrant.png'
        this.category = 'Vector Stores'
        this.description =
            'Upsert embedded data and perform similarity search upon query using Qdrant, a scalable open source vector database written in Rust'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Only needed when using Qdrant cloud hosted',
            optional: true,
            credentialNames: ['qdrantApi']
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
                label: 'Record Manager',
                name: 'recordManager',
                type: 'RecordManager',
                description: 'Keep track of the record to prevent duplication',
                optional: true
            },
            {
                label: 'Qdrant Server URL',
                name: 'qdrantServerUrl',
                type: 'string',
                placeholder: 'http://localhost:6333'
            },
            {
                label: 'Qdrant Collection Name',
                name: 'qdrantCollection',
                type: 'string'
            },
            {
                label: 'File Upload',
                name: 'fileUpload',
                description: 'Allow file upload on the chat',
                hint: {
                    label: 'How to use',
                    value: howToUseFileUpload
                },
                type: 'boolean',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Vector Dimension',
                name: 'qdrantVectorDimension',
                type: 'number',
                default: 1536,
                additionalParams: true
            },
            {
                label: 'Content Key',
                name: 'contentPayloadKey',
                description: 'The key for storing text. Default to `content`',
                type: 'string',
                default: 'content',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Metadata Key',
                name: 'metadataPayloadKey',
                description: 'The key for storing metadata. Default to `metadata`',
                type: 'string',
                default: 'metadata',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Upsert Batch Size',
                name: 'batchSize',
                type: 'number',
                step: 1,
                description: 'Upsert in batches of size N',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Similarity',
                name: 'qdrantSimilarity',
                description: 'Similarity measure used in Qdrant.',
                type: 'options',
                default: 'Cosine',
                options: [
                    {
                        label: 'Cosine',
                        name: 'Cosine'
                    },
                    {
                        label: 'Euclid',
                        name: 'Euclid'
                    },
                    {
                        label: 'Dot',
                        name: 'Dot'
                    }
                ],
                additionalParams: true
            },
            {
                label: 'Additional Collection Cofiguration',
                name: 'qdrantCollectionConfiguration',
                description:
                    'Refer to <a target="_blank" href="https://qdrant.tech/documentation/concepts/collections">collection docs</a> for more reference',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to 4',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Qdrant Search Filter',
                name: 'qdrantFilter',
                description: 'Only return points which satisfy the conditions',
                type: 'json',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Qdrant Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Qdrant Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const qdrantServerUrl = nodeData.inputs?.qdrantServerUrl as string
            const collectionName = nodeData.inputs?.qdrantCollection as string
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const qdrantSimilarity = nodeData.inputs?.qdrantSimilarity
            const qdrantVectorDimension = nodeData.inputs?.qdrantVectorDimension
            const recordManager = nodeData.inputs?.recordManager
            const _batchSize = nodeData.inputs?.batchSize
            const contentPayloadKey = nodeData.inputs?.contentPayloadKey || 'content'
            const metadataPayloadKey = nodeData.inputs?.metadataPayloadKey || 'metadata'
            const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

            
            

            

            const client = new QdrantClient({
                url: qdrantServerUrl,
                apiKey: qdrantApiKey,
                port: port
            })

             : []
            const finalDocs = []
            f {
                 {
                     {
                        flattenDocs[i].metadata = { ...flattenDocs[i].metadata, [FLOWISE_CHATID]: options.chatId }
                    }
                    f)
                }
            }

            const dbConfig: QdrantLibArgs = {
                client,
                url: qdrantServerUrl,
                collectionName,
                collectionConfig: {
                    vectors: {
                         : 1536,
                        distance: qdrantSimilarity ?? 'Cosine'
                    }
                },
                contentPayloadKey,
                metadataPayloadKey
            }

            try {
                 {
                    
                    awa

                    vectorStore.addVectors = async (
                        vectors: number[][],
                        documents: Document[],
                        documentOptions?: QdrantAddDocumentOptions
                    ): Promise<void> => {
                         {
                            return
                        }

                        awa

                         => ({
                            ,
                            vector: embedding,
                            payload: {
                                [contentPayloadKey]: documents[idx].pageContent,
                                [metadataPayloadKey]: documents[idx].metadata,
                                customPayload: documentOptions?.customPayload?.length ? documentOptions?.customPayload[idx] : undefined
                            }
                        }))

                        try {
                             {
                                
                                f {
                                    
                                    await client.upsert(collectionName, {
                                        wait: true,
                                        points: batchPoints
                                    })
                                }
                            } else {
                                await client.upsert(collectionName, {
                                    wait: true,
                                    points
                                })
                            }
                        }  {
                            
                            throw error
                        }
                    }

                    ve: Promise<void> => {
                        const { ids } = params

                         {
                            try {
                                client.delete(collectionName, {
                                    points: ids
                                })
                            }  {
                                
                            }
                        }
                    }

                    awa

                    const res = await index({
                        docsSource: finalDocs,
                        recordManager,
                        vectorStore,
                        options: {
                            cleanup: recordManager?.cleanup,
                            sourceIdKey: recordManager?.sourceIdKey ?? 'source',
                            vectorStoreName: collectionName
                        }
                    })

                    return res
                } else {
                     {
                        
                        f {
                            
                            awa
                        }
                    } else {
                        awa
                    }
                    return { numAdded: finalDocs.length, addedDocs: finalDocs }
                }
            }  {
                th
            }
        },
        a: Promise<void> {
            const qdrantServerUrl = nodeData.inputs?.qdrantServerUrl as string
            const collectionName = nodeData.inputs?.qdrantCollection as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const qdrantSimilarity = nodeData.inputs?.qdrantSimilarity
            const qdrantVectorDimension = nodeData.inputs?.qdrantVectorDimension
            const recordManager = nodeData.inputs?.recordManager

            
            

            

            const client = new QdrantClient({
                url: qdrantServerUrl,
                apiKey: qdrantApiKey,
                port: port
            })

            const dbConfig: QdrantLibArgs = {
                client,
                url: qdrantServerUrl,
                collectionName,
                collectionConfig: {
                    vectors: {
                         : 1536,
                        distance: qdrantSimilarity ?? 'Cosine'
                    }
                }
            }

            

            ve: Promise<void> => {
                const { ids } = params

                 {
                    try {
                        client.delete(collectionName, {
                            points: ids
                        })
                    }  {
                        
                    }
                }
            }

            try {
                 {
                    const vectorStoreName = collectionName
                    awa
                    ;(.name.namespace + '_' + vectorStoreName
                    

                    awa
                    awa
                } else {
                    awa
                }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const qdrantServerUrl = nodeData.inputs?.qdrantServerUrl as string
        const collectionName = nodeData.inputs?.qdrantCollection as string
        let qdrantCollectionConfiguration = nodeData.inputs?.qdrantCollectionConfiguration
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const qdrantSimilarity = nodeData.inputs?.qdrantSimilarity
        const qdrantVectorDimension = nodeData.inputs?.qdrantVectorDimension
        const output = nodeData.outputs?.output as string
        const topK = nodeData.inputs?.topK as string
        let queryFilter = nodeData.inputs?.qdrantFilter
        const contentPayloadKey = nodeData.inputs?.contentPayloadKey || 'content'
        const metadataPayloadKey = nodeData.inputs?.metadataPayloadKey || 'metadata'
        const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

         : 4

        
        

        

        const client = new QdrantClient({
            url: qdrantServerUrl,
            apiKey: qdrantApiKey,
            port: port
        })

        const dbConfig: QdrantLibArgs = {
            client,
            collectionName,
            contentPayloadKey,
            metadataPayloadKey
        }

        const retrieverConfig: RetrieverConfig = {
            k
        }

         {
            qdrantCollectionConfiguration =
                typeof qdrantCollectionConfiguration === 'object'
                    ? qdrantCollectionConfiguration
                    : JSON.pa
            dbConfig.collectionConfig = {
                ...qdrantCollectionConfiguration,
                vectors: {
                    ...qdrantCollectionConfiguration.vectors,
                     : 1536,
                    distance: qdrantSimilarity ?? 'Cosine'
                }
            }
        }

         {
            
        }
         {
            retrieverConfig.filter = retrieverConfig.filter || {}

             ? retrieverConfig.filter.should : []

            retrieverConfig.filter.should.push(
                {
                    key: `metadata.${FLOWISE_CHATID}`,
                    match: {
                        value: options.chatId
                    }
                },
                {
                    is_empty: {
                        key: `metadata.${FLOWISE_CHATID}`
                    }
                }
            )
        }

        

         {
            
            return retriever
        } el {
            ;(ve.k = k
             {
                ;(ve.filter = retrieverConfig.filter
            }
            return vectorStore
        }
        return vectorStore
    }

    /**
     * Determine the port number from the given URL.
     *
     * The problem is when not doing this the qdrant-client.js will fall back on 6663 when you enter a port 443 and 80.
     * See: https://stackoverflow.com/questions/59104197/nodejs-new-url-urlhttps-myurl-com80-lists-the-port-as-empty
     * @param qdrantServerUrl the url to get the port from
     */
    : number {
        

        let p : 6663

         {
            port = 443
        }
         {
            port = 80
        }

        return port
    }
}

module.exports = { nodeClass: Qdrant_VectorStores }
