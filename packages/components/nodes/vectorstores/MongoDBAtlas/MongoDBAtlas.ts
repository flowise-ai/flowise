import { flatten } from 'lodash'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { addMMRInputParams, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'
import { MongoDBAtlasVectorSearch } from './core'

// TO
class MongoDBAtlas_VectorStores implements INode {
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
        this.label = 'MongoDB Atlas'
        this.name = 'mongoDBAtlas'
        this.version = 1.0
        this.description = `Upsert embedded data and perform similarity or mmr search upon query using MongoDB Atlas, a managed cloud mongodb database`
        this.type = 'MongoDB Atlas'
        this.icon = 'mongodb.svg'
        this.category = 'Vector Stores'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['mongoDBUrlApi']
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
                label: 'Database',
                name: 'databaseName',
                placeholder: '<DB_NAME>',
                type: 'string'
            },
            {
                label: 'Collection Name',
                name: 'collectionName',
                placeholder: '<COLLECTION_NAME>',
                type: 'string'
            },
            {
                label: 'Index Name',
                name: 'indexName',
                placeholder: '<VECTOR_INDEX_NAME>',
                type: 'string'
            },
            {
                label: 'Content Field',
                name: 'textKey',
                 that contains the actual content',
                type: 'string',
                default: 'text',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Embedded Field',
                name: 'embeddingKey',
                 that contains the Embedding',
                type: 'string',
                default: 'embedding',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Mongodb Metadata Filter',
                name: 'mongoMetadataFilter',
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
            }
        ]
        a
        this.outputs = [
            {
                label: 'MongoDB Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'MongoDB Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            const databaseName = nodeData.inputs?.databaseName as string
            const collectionName = nodeData.inputs?.collectionName as string
            const indexName = nodeData.inputs?.indexName as string
            let textKey = nodeData.inputs?.textKey as string
            let embeddingKey = nodeData.inputs?.embeddingKey as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings

            let m

            const docs = nodeData.inputs?.document as Document[]

             : []
            const finalDocs = []
            f {
                 {
                    
                    f
                }
            }

            try {
                 textKey = 'text'
                 embeddingKey = 'embedding'

                const mongoDBAtlasVectorSearch = new MongoDBAtlasVectorSearch(embeddings, {
                    connectionDetails: { mongoDBConnectUrl, databaseName, collectionName },
                    indexName,
                    textKey,
                    embeddingKey
                })
                awa

                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        const databaseName = nodeData.inputs?.databaseName as string
        const collectionName = nodeData.inputs?.collectionName as string
        const indexName = nodeData.inputs?.indexName as string
        let textKey = nodeData.inputs?.textKey as string
        let embeddingKey = nodeData.inputs?.embeddingKey as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const mongoMetadataFilter = nodeData.inputs?.mongoMetadataFilter as object

        let m

        const mongoDbFilter: MongoDBAtlasVectorSearch['FilterType'] = {}

        try {
             textKey = 'text'
             embeddingKey = 'embedding'

            const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
                connectionDetails: { mongoDBConnectUrl, databaseName, collectionName },
                indexName,
                textKey,
                embeddingKey
            })

             {
                

                f {
                    mongoDbFilter.preFilter = {
                        ...mongoDbFilter.preFilter,
                        [key]: {
                            $eq: metadataFilter[key]
                        }
                    }
                }
            }

            
        }  {
            th
        }
    }
}

module.exports = { nodeClass: MongoDBAtlas_VectorStores }
