import { flatten } from 'lodash'
import { Chroma } from '@langchain/community/vectorstores/chroma'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { ChromaExtended } from './core'
import { index } from '../../../src/indexing'

class Chroma_VectorStores implements INode {
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
        this.label = 'Chroma'
        this.name = 'chroma'
        this.version = 2.0
        this.type = 'Chroma'
        this.icon = 'chroma.svg'
        this.category = 'Vector Stores'
        this.description = 'Upsert embedded data and perform similarity search upon query using Chroma, an open-source embedding database'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Only needed if you have chroma on cloud services with X-Api-key',
            optional: true,
            credentialNames: ['chromaApi']
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
                label: 'Collection Name',
                name: 'collectionName',
                type: 'string'
            },
            {
                label: 'Chroma URL',
                name: 'chromaURL',
                type: 'string',
                optional: true
            },
            {
                label: 'Chroma Metadata Filter',
                name: 'chromaMetadataFilter',
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
                label: 'Chroma Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Chroma Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const collectionName = nodeData.inputs?.collectionName as string
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const chromaURL = nodeData.inputs?.chromaURL as string
            const recordManager = nodeData.inputs?.recordManager

            
            
            
            

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            const obj: {
                collectionName: string
                url?: string
                chromaApiKey?: string
                chromaTenant?: string
                chromaDatabase?: string
            } = { collectionName }
             obj.url = chromaURL
             obj.chromaApiKey = chromaApiKey
             obj.chromaTenant = chromaTenant
             obj.chromaDatabase = chromaDatabase

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
                            vectorStoreName: collectionName
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
            const collectionName = nodeData.inputs?.collectionName as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const chromaURL = nodeData.inputs?.chromaURL as string
            const recordManager = nodeData.inputs?.recordManager

            
            
            
            

            const obj: {
                collectionName: string
                url?: string
                chromaApiKey?: string
                chromaTenant?: string
                chromaDatabase?: string
            } = { collectionName }
             obj.url = chromaURL
             obj.chromaApiKey = chromaApiKey
             obj.chromaTenant = chromaTenant
             obj.chromaDatabase = chromaDatabase

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
        const collectionName = nodeData.inputs?.collectionName as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const chromaURL = nodeData.inputs?.chromaURL as string
        const output = nodeData.outputs?.output as string
        const topK = nodeData.inputs?.topK as string
         : 4

        
        
        
        
        const chromaMetadataFilter = nodeData.inputs?.chromaMetadataFilter

        const obj: {
            collectionName: string
            url?: string
            chromaApiKey?: string
            chromaTenant?: string
            chromaDatabase?: string
            filter?: object | undefined
        } = { collectionName }
         obj.url = chromaURL
         obj.chromaApiKey = chromaApiKey
         obj.chromaTenant = chromaTenant
         obj.chromaDatabase = chromaDatabase
         {
            
            obj.filter = metadatafilter
        }

        

         {
            
            return retriever
        } el {
            ;(ve.k = k
             {
                ;(ve.filter = obj.filter
            }
            return vectorStore
        }
        return vectorStore
    }
}

module.exports = { nodeClass: Chroma_VectorStores }
