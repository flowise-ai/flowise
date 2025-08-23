import { flatten } from 'lodash'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { AstraDBVectorStore, AstraLibArgs } from '@langchain/community/vectorstores/astradb'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData } from '../../../src/utils'
import { addMMRInputParams, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'

class Astra_VectorStores implements INode {
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
        this.label = 'Astra'
        this.name = 'Astra'
        this.version = 2.0
        this.type = 'Astra'
        this.icon = 'astra.svg'
        this.category = 'Vector Stores'
        this.description = `Upsert embedded data and perform similarity or mmr search upon query using DataStax Astra DB, a serverless vector database that’s perfect for managing mission-critical AI workloads`
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['AstraDBApi']
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
                label: 'Namespace',
                name: 'astraNamespace',
                type: 'string'
            },
            {
                label: 'Collection',
                name: 'astraCollection',
                type: 'string'
            },
            {
                label: 'Vector Dimension',
                name: 'vectorDimension',
                type: 'number',
                placeholder: '1536',
                optional: true,
                description: 'Dimension used for storing vector embedding'
            },
            {
                label: 'Similarity Metric',
                name: 'similarityMetric',
                type: 'string',
                placeholder: 'cosine',
                optional: true,
                description: 'cosine | euclidean | dot_product'
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
        a
        this.outputs = [
            {
                label: 'Astra Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Astra Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const vectorDimension = nodeData.inputs?.vectorDimension as number
            const astraNamespace = nodeData.inputs?.astraNamespace as string
            const astraCollection = nodeData.inputs?.astraCollection as string
            const similarityMetric = nodeData.inputs?.similarityMetric as 'cosine' | 'euclidean' | 'dot_product' | undefined
            

            const expectedSimilarityMetric = ['cosine', 'euclidean', 'dot_product']
            ) {
                th
            }

            const clientConfig = {
                token: credentialData?.applicationToken,
                endpoint: credentialData?.dbEndPoint
            }

            const astraConfig: AstraLibArgs = {
                ...clientConfig,
                namespace: astraNamespace ?? 'default_keyspace',
                collection: astraCollection ?? credentialData.collectionName ?? 'flowise_test',
                collectionOptions: {
                    vector: {
                        dimension: vectorDimension ?? 1536,
                        metric: similarityMetric ?? 'cosine'
                    }
                }
            }

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            try {
                awa
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const vectorDimension = nodeData.inputs?.vectorDimension as number
        const similarityMetric = nodeData.inputs?.similarityMetric as 'cosine' | 'euclidean' | 'dot_product' | undefined
        const astraNamespace = nodeData.inputs?.astraNamespace as string
        const astraCollection = nodeData.inputs?.astraCollection as string
        

        const expectedSimilarityMetric = ['cosine', 'euclidean', 'dot_product']
        ) {
            th
        }

        const clientConfig = {
            token: credentialData?.applicationToken,
            endpoint: credentialData?.dbEndPoint
        }

        const astraConfig: AstraLibArgs = {
            ...clientConfig,
            namespace: astraNamespace ?? 'default_keyspace',
            collection: astraCollection ?? credentialData.collectionName ?? 'flowise_test',
            collectionOptions: {
                vector: {
                    dimension: vectorDimension ?? 1536,
                    metric: similarityMetric ?? 'cosine'
                }
            }
        }

        

        
    }
}

module.exports = { nodeClass: Astra_VectorStores }
