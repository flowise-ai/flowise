import { getCredentialData, getCredentialParam } from '../../../src'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { Meilisearch } from 'meilisearch'
import { MeilisearchRetriever } from './core'
import { flatten } from 'lodash'
import { Document } from '@langchain/core/documents'
import { v4 as uuidv4 } from 'uuid'
import { Embeddings } from '@langchain/core/embeddings'

class MeilisearchRetriever_node implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]
    author?: string

     {
        this.label = 'Meilisearch'
        this.name = 'meilisearch'
        this.version = 1.0
        this.type = 'Meilisearch'
        this.icon = 'Meilisearch.png'
        this.category = 'Vector Stores'
        this.description = `Upsert embedded data and perform similarity search upon query using Meilisearch hybrid search functionality`
        this.baseClasses = ['BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['meilisearchApi']
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
                type: 'string',
                description: "This is the URL for the desired Meilisearch instance, the URL must not end with a '/'"
            },
            {
                label: 'Index Uid',
                name: 'indexUid',
                type: 'string',
                description: 'UID for the index to answer from'
            },
            {
                label: 'Delete Index if exists',
                name: 'deleteIndex',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Top K',
                name: 'K',
                type: 'number',
                description: 'number of top searches to return as context, default is 4',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Semantic Ratio',
                name: 'semanticRatio',
                type: 'number',
                description: 'percentage of sematic reasoning in meilisearch hybrid search, default is 0.75',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Search Filter',
                name: 'searchFilter',
                type: 'string',
                description: 'search filter to apply on searchable attributes',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Meilisearch Retriever',
                name: 'MeilisearchRetriever',
                description: 'retrieve answers',
                baseClasses: this.baseClasses
            }
        ]
        this.outputs = [
            {
                label: 'Meilisearch Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            }
        ]
    }
    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<any> {
            
            
            const docs = nodeData.inputs?.document as Document[]
            const host = nodeData.inputs?.host as string
            const indexUid = nodeData.inputs?.indexUid as string
            const deleteIndex = nodeData.inputs?.deleteIndex as boolean
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            let embeddingDimension: number = 384
            const client = new Meilisearch({
                host: host,
                apiKey: meilisearchAdminApiKey
            })
             : []
            const finalDocs = []
            f {
                 {
                    
                    const { pageContent, metadata } = flattenDocs[i]
                    
                    embeddingDimension = docEmbedding.length
                    const documentForIndexing = {
                        pageContent,
                        metadata,
                        objectID: uniqueId,
                        _vectors: {
                            ollama: {
                                embeddings: docEmbedding,
                                regenerate: false
                            }
                        }
                    }
                    f
                }
            }
            let taskUid_created: number = 0

             {
                try {
                    
                    taskUid_created = deleteResponse.taskUid
                    let 

                    wh {
                        
                         {
                            th
                        }
                    }
                }  {
                    
                    
                }
            }

            let index: any

            try {
                
            }  {
                

                try {
                    
                    taskUid_created = createResponse.taskUid
                    let 

                    wh {
                        
                         {
                            th
                        }
                    }
                    
                }  {
                    
                }
            }

            try {
                awa
                await index.updateSettings({
                    embedders: {
                        ollama: {
                            source: 'userProvided',
                            dimensions: embeddingDimension
                        }
                    }
                })
                
                taskUid_created = addResponse.taskUid
                let A
                wh {
                    A
                     {
                        th
                    }
                }
                
            }  {
                
            }
            return { numAdded: finalDocs.length, addedDocs: finalDocs }
        }
    }
    a: Promise<any> {
        
        
        
        const host = nodeData.inputs?.host as string
        const indexUid = nodeData.inputs?.indexUid as string
        const K = nodeData.inputs?.K as string
        const semanticRatio = nodeData.inputs?.semanticRatio as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const searchFilter = nodeData.inputs?.searchFilter as string

        const experimentalEndpoint = host + '/experimental-features/'
        const token = meilisearchAdminApiKey

        const experimentalOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                vectorStore: true
            })
        }

        try {
            
             {
                th
            }

            

            const vectorStoreEnabled = data.vectorStore
             {
                th
            }
        }  {
            
        }

        const hybridsearchretriever = new MeilisearchRetriever(
            host,
            meilisearchSearchApiKey,
            indexUid,
            K,
            semanticRatio,
            embeddings,
            searchFilter
        )
        return hybridsearchretriever
    }
}
module.exports = { nodeClass: MeilisearchRetriever_node }
