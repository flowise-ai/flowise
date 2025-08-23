import { flatten } from 'lodash'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { FLOWISE_CHATID, getBaseClasses } from '../../../src/utils'
import { index } from '../../../src/indexing'
import { howToUseFileUpload } from '../VectorStoreUtils'
import { VectorStore } from '@langchain/core/vectorstores'
import { VectorStoreDriver } from './driver/Base'
import { TypeORMDriver } from './driver/TypeORM'
// import { PGVectorDriver } from './driver/PGVector'
import { getContentColumnName, getDatabase, getHost, getPort, getTableName } from './utils'

const serverCredentialsExists = !!process.env.POSTGRES_VECTORSTORE_USER && !!process.env.POSTGRES_VECTORSTORE_PASSWORD

// added temporarily to fix the base class return for VectorStore when postgres node is using TypeORM
fun {
    // Try getting base classes through the utility function
    

    // If we got results, return them
     {
        return baseClasses
    }

    // If VectorStore is recognized as a class but getBaseClasses returned nothing,
    // return the known inheritance chain
     {
        return ['VectorStore']
    }

    // Fallback to minimum required class
    return ['VectorStore']
}

class Postgres_VectorStores implements INode {
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
        this.label = 'Postgres'
        this.name = 'postgres'
        this.version = 7.0
        this.type = 'Postgres'
        this.icon = 'postgres.svg'
        this.category = 'Vector Stores'
        this.description = 'Upsert embedded data and perform similarity search upon query using pgvector on Postgres'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['PostgresApi'],
            optional: serverCredentialsExists
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
                label: 'Host',
                name: 'host',
                type: 'string',
                pla,
                
            },
            {
                label: 'Database',
                name: 'database',
                type: 'string',
                pla,
                
            },
            {
                label: 'Port',
                name: 'port',
                type: 'number',
                pla,
                optional: true
            },
            {
                label: 'SSL',
                name: 'ssl',
                description: 'Use SSL to connect to Postgres',
                type: 'boolean',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Table Name',
                name: 'tableName',
                type: 'string',
                pla,
                additionalParams: true,
                optional: true
            },
            /*{
                label: 'Driver',
                name: 'driver',
                type: 'options',
                default: 'typeorm',
                description: 'Different option to connect to Postgres',
                options: [
                    {
                        label: 'TypeORM',
                        name: 'typeorm'
                    },
                    {
                        label: 'PGVector',
                        name: 'pgvector'
                    }
                ],
                optional: true,
                additionalParams: true
            },*/
            {
                label: 'Distance Strategy',
                name: 'distanceStrategy',
                description: 'Strategy for calculating distances between vectors',
                type: 'options',
                options: [
                    {
                        label: 'Cosine',
                        name: 'cosine'
                    },
                    {
                        label: 'Euclidean',
                        name: 'euclidean'
                    },
                    {
                        label: 'Inner Product',
                        name: 'innerProduct'
                    }
                ],
                additionalParams: true,
                default: 'cosine',
                optional: true
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
                label: 'Additional Configuration',
                name: 'additionalConfig',
                type: 'json',
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
            },
            {
                label: 'Postgres Metadata Filter',
                name: 'pgMetadataFilter',
                type: 'json',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Content Column Name',
                name: 'contentColumnName',
                ',
                type: 'string',
                pla,
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Postgres Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Postgres Vector Store',
                name: 'vectorStore',
                baseClasses: [
                    this.type,
                    // ...getBa, // disabled temporarily for using TypeORM
                    ...getVe // added temporarily for using TypeORM
                ]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            const docs = nodeData.inputs?.document as Document[]
            const recordManager = nodeData.inputs?.recordManager
            const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean
            

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
                            vectorStoreName: tableName
                        }
                    })

                    return res
                } else {
                    awa

                    return { numAdded: finalDocs.length, addedDocs: finalDocs }
                }
            }  {
                th
            }
        },
        a: Promise<void> {
            
            
            const recordManager = nodeData.inputs?.recordManager

            

            try {
                 {
                    const vectorStoreName = tableName
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
        
        const output = nodeData.outputs?.output as string
        const topK = nodeData.inputs?.topK as string
         : 4
        const _pgMetadataFilter = nodeData.inputs?.pgMetadataFilter
        const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

        let pgMetadataFilter: any
         {
            pgMeta
        }
         {
            pgMetadataFilter = {
                ...(pgMeta,
                [FLOWISE_CHATID]: options.chatId
            }
        }

        

         {
            
            return retriever
        } el {
            ;(ve.k = k
             {
                ;(ve.filter = pgMetadataFilter
            }
            return vectorStore
        }
        return vectorStore
    }

    : VectorStoreDriver {
        /* {
            case 'typeorm':
                
            case 'pgvector':
                
            default:
                
        }*/
        
    }
}

module.exports = { nodeClass: Postgres_VectorStores }
