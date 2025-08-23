import { flatten } from 'lodash'
import { Embeddings } from '@langchain/core/embeddings'
import { SingleStoreVectorStore, SingleStoreVectorStoreConfig } from '@langchain/community/vectorstores/singlestore'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class SingleStore_VectorStores implements INode {
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
        this.label = 'SingleStore'
        this.name = 'singlestore'
        this.version = 1.0
        this.type = 'SingleStore'
        this.icon = 'singlestore.svg'
        this.category = 'Vector Stores'
        this.description =
            'Upsert embedded data and perform similarity search upon query using SingleStore, a fast and distributed cloud relational database'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Needed when using SingleStore cloud hosted',
            optional: true,
            credentialNames: ['singleStoreApi']
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
                label: 'Host',
                name: 'host',
                type: 'string'
            },
            {
                label: 'Database',
                name: 'database',
                type: 'string'
            },
            {
                label: 'Table Name',
                name: 'tableName',
                type: 'string',
                placeholder: 'embeddings',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Content Column Name',
                name: 'contentColumnName',
                type: 'string',
                placeholder: 'content',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Vector Column Name',
                name: 'vectorColumnName',
                type: 'string',
                placeholder: 'vector',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Metadata Column Name',
                name: 'metadataColumnName',
                type: 'string',
                placeholder: 'metadata',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Top K',
                name: 'topK',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'SingleStore Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'SingleStore Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            
            

            const singleStoreConnectionConfig = {
                connectionOptions: {
                    host: nodeData.inputs?.host as string,
                    port: 3306,
                    user,
                    password,
                    database: nodeData.inputs?.database as string
                },
                ...(n,
                ...(n,
                ...(n,
                ...(n
            } as SingleStoreVectorStoreConfig

            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            try {
                
                ve(f
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        
        

        const singleStoreConnectionConfig = {
            connectionOptions: {
                host: nodeData.inputs?.host as string,
                port: 3306,
                user,
                password,
                database: nodeData.inputs?.database as string
            },
            ...(n,
            ...(n,
            ...(n,
            ...(n
        } as SingleStoreVectorStoreConfig

        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const output = nodeData.outputs?.output as string
        const topK = nodeData.inputs?.topK as string
         : 4

        

         {
            
            return retriever
        } el {
            ;(ve.k = k
            return vectorStore
        }
        return vectorStore
    }
}

module.exports = { nodeClass: SingleStore_VectorStores }
