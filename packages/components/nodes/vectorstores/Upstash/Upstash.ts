import { flatten } from 'lodash'
import { IndexingResult, INode, INodeOutputsValue, INodeParams, INodeData, ICommonObject } from '../../../src/Interface'
import { FLOWISE_CHATID, getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { UpstashVectorStore } from '@langchain/community/vectorstores/upstash'
import { Index as UpstashIndex } from '@upstash/vector'
import { index } from '../../../src/indexing'
import { howToUseFileUpload, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'

type UpstashVectorStoreParams = {
    index: UpstashIndex
    filter?: string
}
class Upstash_VectorStores implements INode {
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
        this.label = 'Upstash Vector'
        this.name = 'upstash'
        this.version = 2.0
        this.type = 'Upstash'
        this.icon = 'upstash.svg'
        this.category = 'Vector Stores'
        this.description =
            'Upsert data as embedding or string and perform similarity search with Upstash, the leading serverless data platform'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Necessary credentials for the HTTP connection',
            credentialNames: ['upstashVectorApi']
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
                label: 'Upstash Metadata Filter',
                name: 'upstashMetadataFilter',
                type: 'string',
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
                label: 'Upstash Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Upstash Vector Store',
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
            const recordManager = nodeData.inputs?.recordManager
            const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

            
            
            

            const upstashIndex = new UpstashIndex({
                url: UPSTASH_VECTOR_REST_URL,
                token: UPSTASH_VECTOR_REST_TOKEN
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

            const obj = {
                index: upstashIndex
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
                            vectorStoreName: UPSTASH_VECTOR_REST_URL
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
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const recordManager = nodeData.inputs?.recordManager

            
            
            

            const upstashIndex = new UpstashIndex({
                url: UPSTASH_VECTOR_REST_URL,
                token: UPSTASH_VECTOR_REST_TOKEN
            })

            const obj = {
                index: upstashIndex
            }

            

            try {
                 {
                    const vectorStoreName = UPSTASH_VECTOR_REST_URL
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
        const upstashMetadataFilter = nodeData.inputs?.upstashMetadataFilter
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

        
        
        

        const upstashIndex = new UpstashIndex({
            url: UPSTASH_VECTOR_REST_URL,
            token: UPSTASH_VECTOR_REST_TOKEN
        })

        const obj: UpstashVectorStoreParams = {
            index: upstashIndex
        }

         {
            obj.filter = upstashMetadataFilter
        }
         {
             obj.filter += ` OR ${FLOWISE_CHATID} = "${options.chatId}" OR HAS NOT FIELD ${FLOWISE_CHATID}`
            else obj.filter = `${FLOWISE_CHATID} = "${options.chatId}" OR HAS NOT FIELD ${FLOWISE_CHATID}`
        }

        

        
    }
}

module.exports = { nodeClass: Upstash_VectorStores }
