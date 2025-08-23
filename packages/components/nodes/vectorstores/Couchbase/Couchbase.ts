import { flatten } from 'lodash'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { CouchbaseVectorStore, CouchbaseVectorStoreArgs } from '@langchain/community/vectorstores/couchbase'
import { Cluster } from 'couchbase'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { resolveVectorStoreOrRetriever } from '../VectorStoreUtils'

class Couchbase_VectorStores implements INode {
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
        this.label = 'Couchbase'
        this.name = 'couchbase'
        this.version = 1.0
        this.type = 'Couchbase'
        this.icon = 'couchbase.svg'
        this.category = 'Vector Stores'
        this.description = `Upsert embedded data and load existing index using Couchbase, a award-winning distributed NoSQL database`
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['couchbaseApi']
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
                label: 'Bucket Name',
                name: 'bucketName',
                placeholder: '<DB_BUCKET_NAME>',
                type: 'string'
            },
            {
                label: 'Scope Name',
                name: 'scopeName',
                placeholder: '<SCOPE_NAME>',
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
                label: 'Couchbase Metadata Filter',
                name: 'couchbaseMetadataFilter',
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
        this.outputs = [
            {
                label: 'Couchbase Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Couchbase Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            const bucketName = nodeData.inputs?.bucketName as string
            const scopeName = nodeData.inputs?.scopeName as string
            const collectionName = nodeData.inputs?.collectionName as string
            const indexName = nodeData.inputs?.indexName as string
            let textKey = nodeData.inputs?.textKey as string
            let embeddingKey = nodeData.inputs?.embeddingKey as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings

            let 
            let 
            let 

            const docs = nodeData.inputs?.document as Document[]

             : []
            const finalDocs = []
            f {
                 {
                    
                    f
                }
            }

            const couchbaseClient = await Cluster.connect(connectionString, {
                username: databaseUsername,
                password: databasePassword,
                configProfile: 'wanDevelopment'
            })

            const couchbaseConfig: CouchbaseVectorStoreArgs = {
                cluster: couchbaseClient,
                bucketName: bucketName,
                scopeName: scopeName,
                collectionName: collectionName,
                indexName: indexName,
                textKey: textKey,
                embeddingKey: embeddingKey
            }

            try {
                 couchbaseConfig.textKey = 'text'
                 couchbaseConfig.embeddingKey = 'embedding'

                awa
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        const bucketName = nodeData.inputs?.bucketName as string
        const scopeName = nodeData.inputs?.scopeName as string
        const collectionName = nodeData.inputs?.collectionName as string
        const indexName = nodeData.inputs?.indexName as string
        let textKey = nodeData.inputs?.textKey as string
        let embeddingKey = nodeData.inputs?.embeddingKey as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const couchbaseMetadataFilter = nodeData.inputs?.couchbaseMetadataFilter

        let 
        let 
        let 
        let metadatafilter

        const couchbaseClient = await Cluster.connect(connectionString, {
            username: databaseUsername,
            password: databasePassword,
            configProfile: 'wanDevelopment'
        })

        const couchbaseConfig: CouchbaseVectorStoreArgs = {
            cluster: couchbaseClient,
            bucketName: bucketName,
            scopeName: scopeName,
            collectionName: collectionName,
            indexName: indexName,
            textKey: textKey,
            embeddingKey: embeddingKey
        }

        try {
             couchbaseConfig.textKey = 'text'
             couchbaseConfig.embeddingKey = 'embedding'

             {
                meta
            }

            

            
        }  {
            th
        }
    }
}

module.exports = { nodeClass: Couchbase_VectorStores }
