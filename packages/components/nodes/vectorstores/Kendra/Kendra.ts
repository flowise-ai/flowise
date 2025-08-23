import { flatten } from 'lodash'
import { AmazonKendraRetriever } from '@langchain/aws'
import { KendraClient, BatchPutDocumentCommand, BatchDeleteDocumentCommand } from '@aws-sdk/client-kendra'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { FLOWISE_CHATID, getCredentialData, getCredentialParam } from '../../../src/utils'
import { howToUseFileUpload } from '../VectorStoreUtils'
import { MODEL_TYPE, getRegions } from '../../../src/modelLoader'

class Kendra_VectorStores implements INode {
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
        this.label = 'AWS Kendra'
        this.name = 'kendra'
        this.version = 1.0
        this.type = 'Kendra'
        this.icon = 'kendra.svg'
        this.category = 'Vector Stores'
        this.description = `Use AWS Kendra's intelligent search service for document retrieval and semantic search`
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'AWS Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['awsApi'],
            optional: true
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
                label: 'Region',
                name: 'region',
                type: 'asyncOptions',
                loadMethod: 'listRegions',
                default: 'us-east-1'
            },
            {
                label: 'Kendra Index ID',
                name: 'indexId',
                type: 'string',
                placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                description: 'The ID of your AWS Kendra index'
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
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to 10',
                placeholder: '10',
                type: 'number',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Attribute Filter',
                name: 'attributeFilter',
                description: 'Optional filter to apply when retrieving documents',
                type: 'json',
                optional: true,
                additionalParams: true
            }
        ]
        // Note: Kendra doesn't support MMR search, but keeping the structure consistent
        this.outputs = [
            {
                label: 'Kendra Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Kendra Vector Store',
                name: 'vectorStore',
                baseClasses: [this.type, 'BaseRetriever']
            }
        ]
    }

    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const indexId = nodeData.inputs?.indexId as string
            const region = nodeData.inputs?.region as string
            const docs = nodeData.inputs?.document as Document[]
            const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

            
            let clientConfig: any = { region }

            .length  {
                
                
                

                 {
                    clientConfig.credentials = {
                        accessKeyId,
                        secretAccessKey,
                        ...(
                    }
                }
            }

            

             : []
            const finalDocs = []
            const kendraDocuments = []

            f {
                 {
                     {
                        flattenDocs[i].metadata = { ...flattenDocs[i].metadata, [FLOWISE_CHATID]: options.chatId }
                    }
                    f)

                    // Prepare document for Kendra
                    }_${i}`
                    const docTitle = flattenDocs[i].metadata?.title || flattenDocs[i].metadata?.source || `Document ${i + 1}`

                    kendraDocuments.push({
                        Id: docId,
                        Title: docTitle,
                        Bl),
                        ContentType: 'PLAIN_TEXT' as any
                    })
                }
            }

            try {
                 {
                    // Kendra has a limit of 10 documents per batch
                    const batchSize = 10
                    f {
                        
                        const command = new BatchPutDocumentCommand({
                            IndexId: indexId,
                            Documents: batch
                        })

                        

                         {
                            
                            th}`)
                        }
                    }
                }

                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        },

        a: Promise<void> {
            const indexId = nodeData.inputs?.indexId as string
            const region = nodeData.inputs?.region as string

            
            let clientConfig: any = { region }

            .length  {
                
                
                

                 {
                    clientConfig.credentials = {
                        accessKeyId,
                        secretAccessKey,
                        ...(
                    }
                }
            }

            

            try {
                // Kendra has a limit of 10 documents per batch delete
                const batchSize = 10
                f {
                    
                    const command = new BatchDeleteDocumentCommand({
                        IndexId: indexId,
                        DocumentIdList: batch
                    })
                    awa
                }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const indexId = nodeData.inputs?.indexId as string
        const region = nodeData.inputs?.region as string
        const topK = nodeData.inputs?.topK as string
        const attributeFilter = nodeData.inputs?.attributeFilter
        const isFileUploadEnabled = nodeData.inputs?.fileUpload as boolean

        
        let clientOptions: any = {}

        .length  {
            clientOptions.credentials = {
                a,
                ,
                
            }
        }

        let filter = undefined
         {
            f
        }

        // Add chat-specific filtering if file upload is enabled
         {
             {
                filter = {}
            }
            filter.OrAllFilters = [
                ...(f,
                {
                    EqualsTo: {
                        Key: FLOWISE_CHATID,
                        Value: {
                            StringValue: options.chatId
                        }
                    }
                }
            ]
        }

        const retriever = new AmazonKendraRetriever({
            t : 10,
            indexId,
            region,
            attributeFilter: filter,
            clientOptions
        })

        const output = nodeData.outputs?.output as string

         {
            return retriever
        } el {
            // Kendra doesn't have a traditional vector store interface,
            // but we can return the retriever with additional properties
            ;(.k = t : 10
            ;(.filter = filter
            return retriever
        }
    }
}

module.exports = { nodeClass: Kendra_VectorStores }
