import { flatten } from 'lodash'
import { DataType, ErrorCode, MetricType, IndexType } from '@zilliz/milvus2-sdk-node'
import { Document } from '@langchain/core/documents'
import { MilvusLibArgs, Milvus } from '@langchain/community/vectorstores/milvus'
import { Embeddings } from '@langchain/core/embeddings'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { FLOWISE_CHATID, getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { howToUseFileUpload } from '../VectorStoreUtils'

interface InsertRow {
    [x: string]: string | number[]
}

class Milvus_VectorStores implements INode {
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
        this.label = 'Milvus'
        this.name = 'milvus'
        this.version = 2.1
        this.type = 'Milvus'
        this.icon = 'milvus.svg'
        this.category = 'Vector Stores'
        this.description = `Upsert embedded data and perform similarity search upon query using Milvus, world's most advanced open-source vector database`
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            optional: true,
            credentialNames: ['milvusAuth']
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
                label: 'Milvus Server URL',
                name: 'milvusServerUrl',
                type: 'string',
                placeholder: 'http://localhost:19530'
            },
            {
                label: 'Milvus Collection Name',
                name: 'milvusCollection',
                type: 'string'
            },
            {
                label: 'Milvus Partition Name',
                name: 'milvusPartition',
                default: '_default',
                type: 'string',
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
                label: 'Milvus Text Field',
                name: 'milvusTextField',
                type: 'string',
                placeholder: 'langchain_text',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Milvus Filter',
                name: 'milvusFilter',
                type: 'string',
                optional: true,
                description:
                    'Filter data with a simple string query. Refer Milvus <a target="_blank" href="https://milvus.io/blog/2022-08-08-How-to-use-string-data-to-empower-your-similarity-search-applications.md#Hybrid-search">docs</a> for more details.',
                placeholder: 'doc=="a"',
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
                label: 'Secure',
                name: 'secure',
                type: 'boolean',
                optional: true,
                description: 'Enable secure connection to Milvus server',
                additionalParams: true
            },
            {
                label: 'Client PEM Path',
                name: 'clientPemPath',
                type: 'string',
                optional: true,
                description: 'Path to the client PEM file',
                additionalParams: true
            },
            {
                label: 'Client Key Path',
                name: 'clientKeyPath',
                type: 'string',
                optional: true,
                description: 'Path to the client key file',
                additionalParams: true
            },
            {
                label: 'CA PEM Path',
                name: 'caPemPath',
                type: 'string',
                optional: true,
                description: 'Path to the root PEM file',
                additionalParams: true
            },
            {
                label: 'Server Name',
                name: 'serverName',
                type: 'string',
                optional: true,
                description: 'Server name for the secure connection',
                additionalParams: true
            }
        ]
        this.outputs = [
            {
                label: 'Milvus Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Milvus Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            // server setup
            const address = nodeData.inputs?.milvusServerUrl as string
            const collectionName = nodeData.inputs?.milvusCollection as string

            // embeddings
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

            // credential
            
            
            

            // tls
            const secure = nodeData.inputs?.secure as boolean
            const clientPemPath = nodeData.inputs?.clientPemPath as string
            const clientKeyPath = nodeData.inputs?.clientKeyPath as string
            const caPemPath = nodeData.inputs?.caPemPath as string
            const serverName = nodeData.inputs?.serverName as string

            // partition
            const partitionName = nodeData.inputs?.milvusPartition ?? '_default'

            // init MilvusLibArgs
            const milVusArgs: MilvusLibArgs = {
                url: address,
                collectionName: collectionName,
                partitionName: partitionName
            }

             {
                milVusArgs.clientConfig = {
                    address: address,
                    ssl: secure,
                    tls: {
                        rootCertPath: caPemPath,
                        certChainPath: clientPemPath,
                        privateKeyPath: clientKeyPath,
                        serverName: serverName
                    }
                }
            }

             milVusArgs.username = milvusUser
             milVusArgs.password = milvusPassword

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
                

                // Avoid Illegal Invocation
                ve => {
                    
                }

                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        // server setup
        const address = nodeData.inputs?.milvusServerUrl as string
        const collectionName = nodeData.inputs?.milvusCollection as string
        const _milvusFilter = nodeData.inputs?.milvusFilter as string
        const textField = nodeData.inputs?.milvusTextField as string
        const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

        // embeddings
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const topK = nodeData.inputs?.topK as string

        // output
        const output = nodeData.outputs?.output as string

        // format data
         : 4

        // credential
        
        
        

        // tls
        const secure = nodeData.inputs?.secure as boolean
        const clientPemPath = nodeData.inputs?.clientPemPath as string
        const clientKeyPath = nodeData.inputs?.clientKeyPath as string
        const caPemPath = nodeData.inputs?.caPemPath as string
        const serverName = nodeData.inputs?.serverName as string

        // partition
        const partitionName = nodeData.inputs?.milvusPartition ?? '_default'

        // init MilvusLibArgs
        const milVusArgs: MilvusLibArgs = {
            url: address,
            collectionName: collectionName,
            partitionName: partitionName,
            textField: textField
        }

         {
            milVusArgs.clientConfig = {
                address: address,
                ssl: secure,
                tls: {
                    rootCertPath: caPemPath,
                    certChainPath: clientPemPath,
                    privateKeyPath: clientKeyPath,
                    serverName: serverName
                }
            }
        }

         milVusArgs.username = milvusUser
         milVusArgs.password = milvusPassword

        let milvusFilter = _milvusFilter
         {
             m`
            el`
        }

        

        // Avoid Illegal Invocation
        ve => {
            
        }

         {
            
            return retriever
        } el {
            ;(ve.k = k
             {
                ;(ve.filter = milvusFilter
            }
            return vectorStore
        }
        return vectorStore
    }
}

: { isJson: boolean; obj: any } => {
    try {
        
        return { isJson: true, obj: result }
    }  {
        return { isJson: false, obj: null }
    }
}

 => {
    const hasColResp = await vectorStore.client.hasCollection({
        collection_name: vectorStore.collectionName
    })
     {
        th
    }
     {
        th
    }

    const filterStr = milvusFilter ?? filter ?? ''

    awa

    const loadResp = await vectorStore.client.loadCollectionSync({
        collection_name: vectorStore.collectionName
    })

     {
        th
    }

     => f

    const search_params: any = {
        anns_field: vectorStore.vectorField,
        t,
        metric_type: vectorStore.indexCreateParams.metric_type,
        pa
    }
    const searchResp = await vectorStore.client.search({
        collection_name: vectorStore.collectionName,
        search_params,
        output_fields: outputFields,
        vector_type: DataType.FloatVector,
        vectors: [query],
        filter: filterStr
    })
     {
        th}`)
    }
    const results: [Document, number][] = []
     => {
        const fields = {
            pageContent: '',
            metadata: {} as Record<string, any>
        }
        Obje.f => {
             {
                fields.pageContent = result[key]
            } el || key === ve {
                 {
                    
                    fields.metadata[key] = isJson ? obj : result[key]
                } else {
                    fields.metadata[key] = result[key]
                }
            }
        })
        let normalizedScore = result.score
         {
            case MetricType.L2:
                n
                break
            case MetricType.IP:
            case MetricType.COSINE:
                n / 2
                break
        }

        , n
    })
    return results
}

class MilvusUpsert extends Milvus {
    a: Promise<void> {
         {
            return
        }
        awa

        const insertDatas: InsertRow[] = []

        f {
            const vec = vectors[index]
            const doc = documents[index]
            const data: InsertRow = {
                [this.textField]: doc.pageContent,
                [this.vectorField]: vec
            }
            th => {
                 {
                    case this.primaryField:
                         {
                             {
                                throw new Error(
                                    `The Collection's primaryField is configured with autoId=false, thus its value must be provided through metadata.`
                                )
                            }
                            data[field] = doc.metadata[this.primaryField]
                        }
                        break
                    case this.textField:
                        data[field] = doc.pageContent
                        break
                    case this.vectorField:
                        data[field] = vec
                        break
                    default: // metadata fields
                         {
                            th
                        } el {
                            
                        } else {
                            data[field] = doc.metadata[field]
                        }
                        break
                }
            })

            
        }

        const descIndexResp = await this.client.describeIndex({
            collection_name: this.collectionName
        })

         {
            const resp = await this.client.createIndex({
                collection_name: this.collectionName,
                field_name: this.vectorField,
                .t}`,
                index_type: IndexType.AUTOINDEX,
                metric_type: MetricType.L2
            })
             {
                th
            }
        }

        const insertResp = await this.client.insert({
            collection_name: this.collectionName,
            fields_data: insertDatas
        })

         {
            th}`)
        }

        awa
    }
}

module.exports = { nodeClass: Milvus_VectorStores }
