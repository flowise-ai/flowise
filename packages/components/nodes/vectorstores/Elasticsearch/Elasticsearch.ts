import { flatten } from 'lodash'
import { Client, ClientOptions } from '@elastic/elasticsearch'
import { Document } from '@langchain/core/documents'
import { Embeddings } from '@langchain/core/embeddings'
import { ElasticClientArgs, ElasticVectorSearch } from '@langchain/community/vectorstores/elasticsearch'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { index } from '../../../src/indexing'

class Elasticsearch_VectorStores implements INode {
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
        this.label = 'Elasticsearch'
        this.name = 'elasticsearch'
        this.version = 2.0
        this.description =
            'Upsert embedded data and perform similarity search upon query using Elasticsearch, a distributed search and analytics engine'
        this.type = 'Elasticsearch'
        this.icon = 'elasticsearch.png'
        this.category = 'Vector Stores'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['elasticsearchApi', 'elasticSearchUserPassword']
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
                label: 'Index Name',
                name: 'indexName',
                placeholder: '<INDEX_NAME>',
                type: 'string'
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
                label: 'Similarity',
                name: 'similarity',
                description: 'Similarity measure used in Elasticsearch.',
                type: 'options',
                default: 'l2_norm',
                options: [
                    {
                        label: 'l2_norm',
                        name: 'l2_norm'
                    },
                    {
                        label: 'dot_product',
                        name: 'dot_product'
                    },
                    {
                        label: 'cosine',
                        name: 'cosine'
                    }
                ],
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Elasticsearch Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Elasticsearch Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            
            
            const indexName = nodeData.inputs?.indexName as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const similarityMeasure = nodeData.inputs?.similarityMeasure as string
            const recordManager = nodeData.inputs?.recordManager

            const docs = nodeData.inputs?.document as Document[]
             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            // The f in the underlying library.
            // Store does not support object in metadata and fail silently
            f => {
                delete d.metadata.pdf
                delete d.metadata.loc
            })
            // end of workaround

            const { elasticClient, elasticSearchClientArgs } = prepareClientArgs(
                endPoint,
                cloudId,
                credentialData,
                nodeData,
                similarityMeasure,
                indexName
            )
            

            try {
                 {
                    
                    awa
                    const res = await index({
                        docsSource: finalDocs,
                        recordManager,
                        vectorStore,
                        options: {
                            cleanup: recordManager?.cleanup,
                            sourceIdKey: recordManager?.sourceIdKey ?? 'source',
                            vectorStoreName: indexName
                        }
                    })
                    awa
                    return res
                } else {
                    awa
                    awa
                    return { numAdded: finalDocs.length, addedDocs: finalDocs }
                }
            }  {
                th
            }
        },
        a: Promise<void> {
            const indexName = nodeData.inputs?.indexName as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const similarityMeasure = nodeData.inputs?.similarityMeasure as string
            const recordManager = nodeData.inputs?.recordManager

            
            
            

            const { elasticClient, elasticSearchClientArgs } = prepareClientArgs(
                endPoint,
                cloudId,
                credentialData,
                nodeData,
                similarityMeasure,
                indexName
            )
            

            try {
                 {
                    const vectorStoreName = indexName
                    awa
                    ;(.name.namespace + '_' + vectorStoreName
                    

                    awa
                    awa
                    awa
                } else {
                    awa
                    awa
                }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        
        
        const indexName = nodeData.inputs?.indexName as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const topK = nodeData.inputs?.topK as string
        const similarityMeasure = nodeData.inputs?.similarityMeasure as string
         : 4
        const output = nodeData.outputs?.output as string

        const { elasticClient, elasticSearchClientArgs } = prepareClientArgs(
            endPoint,
            cloudId,
            credentialData,
            nodeData,
            similarityMeasure,
            indexName
        )
        
        const originalSimilaritySearchVectorWithScore = vectorStore.similaritySearchVectorWithScore

        ve => {
            
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

const prepareConnectionOptions = (
    endPoint: string | undefined,
    cloudId: string | undefined,
    credentialData: ICommonObject,
    nodeData: INodeData
) => {
    let elasticSearchClientOptions: ClientOptions = {}
     {
        let ap
        elasticSearchClientOptions = {
            node: endPoint,
            auth: {
                apiKey: apiKey
            }
        }
    } el {
        let u
        let pa
        ) {
            elasticSearchClientOptions = {
                node: cloudId,
                auth: {
                    username: username,
                    password: password
                },
                tls: {
                    rejectUnauthorized: false
                }
            }
        } else {
            elasticSearchClientOptions = {
                cloud: {
                    id: cloudId
                },
                auth: {
                    username: username,
                    password: password
                }
            }
        }
    }
    return elasticSearchClientOptions
}

const prepareClientArgs = (
    endPoint: string | undefined,
    cloudId: string | undefined,
    credentialData: ICommonObject,
    nodeData: INodeData,
    similarityMeasure: string,
    indexName: string
) => {
    let ela
    let vectorSearchOptions = {}
     {
        case 'dot_product':
            vectorSearchOptions = {
                similarity: 'dot_product'
            }
            break
        case 'cosine':
            vectorSearchOptions = {
                similarity: 'cosine'
            }
            break
        default:
            vectorSearchOptions = {
                similarity: 'l2_norm'
            }
    }

    
    const elasticSearchClientArgs: ElasticClientArgs = {
        client: elasticClient,
        indexName: indexName,
        vectorSearchOptions: vectorSearchOptions
    }
    return {
        elasticClient,
        elasticSearchClientArgs
    }
}

module.exports = { nodeClass: Elasticsearch_VectorStores }
