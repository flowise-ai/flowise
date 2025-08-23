import { flatten } from 'lodash'
import { ZepClient } from '@getzep/zep-cloud'
import { IZepConfig, ZepVectorStore } from '@getzep/zep-cloud/langchain'
import { Document } from 'langchain/document'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { addMMRInputParams, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'
import { FakeEmbeddings } from 'langchain/embeddings/fake'
import { Embeddings } from '@langchain/core/embeddings'

class Zep_CloudVectorStores implements INode {
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
        this.label = 'Zep Collection - Cloud'
        this.name = 'zepCloud'
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
            optional: false,
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
            const zepCollection = nodeData.inputs?.zepCollection as string
            const docs = nodeData.inputs?.document as Document[]
            
            
             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }
            const client = new ZepClient({
                apiKey: apiKey
            })
            const zepConfig = {
                apiKey: apiKey,
                collectionName: zepCollection,
                client
            }
            try {
                awa, zepC
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const zepCollection = nodeData.inputs?.zepCollection as string
        const zepMetadataFilter = nodeData.inputs?.zepMetadataFilter
        
        

        const zepConfig: IZepConfig & Partial<ZepFilter> = {
            apiKey,
            collectionName: zepCollection
        }
         {
            zepC
        }
        zepConfig.client = new ZepClient({
            apiKey: apiKey
        })
        
        
    }
}

interface ZepFilter {
    filter: Record<string, any>
}

class ZepExistingVS extends ZepVectorStore {
    filter?: Record<string, any>
    args?: IZepConfig & Partial<ZepFilter>

     {
        
        this.filter = args.filter
        this.args = args
    }

    : Promise<ZepVectorStore> {
        
    }
}

module.exports = { nodeClass: Zep_CloudVectorStores }
