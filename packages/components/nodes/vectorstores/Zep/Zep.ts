import { flatten } from 'lodash'
import { IDocument, ZepClient } from '@getzep/zep-js'
import { ZepVectorStore, IZepConfig } from '@langchain/community/vectorstores/zep'
import { Embeddings } from '@langchain/core/embeddings'
import { Document } from '@langchain/core/documents'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { addMMRInputParams, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'

class Zep_VectorStores implements INode {
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
        this.label = 'Zep Collection - Open Source'
        this.name = 'zep'
        this.version = 2.0
        this.type = 'Zep'
        this.icon = 'zep.svg'
        this.category = 'Vector Stores'
        this.description =
            'Upsert embedded data and perform similarity or mmr search upon query using Zep, a fast and scalable building block for LLM apps'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            optional: true,
            ',
            credentialNames: ['zepMemoryApi']
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
                label: 'Base URL',
                name: 'baseURL',
                type: 'string',
                default: 'http://127.0.0.1:8000'
            },
            {
                label: 'Zep Collection',
                name: 'zepCollection',
                type: 'string',
                placeholder: 'my-first-collection'
            },
            {
                label: 'Zep Metadata Filter',
                name: 'zepMetadataFilter',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Embedding Dimension',
                name: 'dimension',
                type: 'number',
                default: 1536,
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
                label: 'Zep Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Zep Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const baseURL = nodeData.inputs?.baseURL as string
            const zepCollection = nodeData.inputs?.zepCollection as string
             ?? 1536
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings

            
            

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            const zepConfig: IZepConfig = {
                apiUrl: baseURL,
                collectionName: zepCollection,
                embeddingDimensions: dimension,
                isAutoEmbedded: false
            }
             zepConfig.apiKey = apiKey

            try {
                awa
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const baseURL = nodeData.inputs?.baseURL as string
        const zepCollection = nodeData.inputs?.zepCollection as string
        const zepMetadataFilter = nodeData.inputs?.zepMetadataFilter
        const dimension = nodeData.inputs?.dimension as number
        const embeddings = nodeData.inputs?.embeddings as Embeddings

        
        

        const zepConfig: IZepConfig & Partial<ZepFilter> = {
            apiUrl: baseURL,
            collectionName: zepCollection,
            embeddingDimensions: dimension,
            isAutoEmbedded: false
        }
         zepConfig.apiKey = apiKey
         {
            
            zepConfig.filter = metadatafilter
        }

        

        
    }
}

interface ZepFilter {
    filter: Record<string, any>
}

fun: [Document, number][] {
     => [
        new Document({
            pageContent: d.content,
            metadata: d.metadata
        }),
        d.score ? d.score : 0
    ])
}

fun: Record<string, unknown> | undefined {
     {
        return value as Record<string, unknown>
    }
     {
        
    }
    return undefined
}

class ZepExistingVS extends ZepVectorStore {
    filter?: Record<string, any>
    args?: IZepConfig & Partial<ZepFilter>

     {
        
        this.filter = args.filter
        this.args = args
    }

    a {
        th
        try {
            th
        }  {
             {
                 {
                    awa
                } else {
                    throw err
                }
            }
        }
    }

    a {
         {
            throw new Error(
                `Collection ${args.collectionName} not found. You can create a new Collection by providing embeddingDimensions.`
            )
        }

        this.collection = await this.client.document.addCollection({
            name: args.collectionName,
            description: args.description,
            metadata: args.metadata,
            embeddingDimensions: args.embeddingDimensions,
            isAutoEmbedded: false
        })
    }

    async similaritySearchVectorWithScore(
        query: number[],
        k: number,
        filter?: Record<string, unknown> | undefined
    ): Promise<[Document, number][]> {
         {
            th
        }
        const _filters = filter ?? this.filter
        const ANDFilters = []
        f {
            let filterVal = _filters[filterKey]
             filterVal = `"${filterVal}"`
            AN` })
        }
        const newfilter = {
            where: { and: ANDFilters }
        }
        awa. => {
            
            throw err
        })
        const results = await this.collection.search(
            {
                embe,
                meta
            },
            k
        )
        
    }

    : Promise<ZepVectorStore> {
        
        return instance
    }
}

module.exports = { nodeClass: Zep_VectorStores }
