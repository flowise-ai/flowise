import {
    BaseNode,
    Document,
    Metadata,
    IEmbedModel,
    VectorStoreBase,
    VectorStoreNoEmbedModel,
    VectorStoreQuery,
    VectorStoreQueryResult,
    serviceContextFromDefaults,
    storageContextFromDefaults,
    VectorStoreIndex,
    BaseEmbedding
} from 'llamaindex'
import { FetchResponse, Index, Pinecone, ScoredPineconeRecord } from '@pinecone-database/pinecone'
import { flatten } from 'lodash'
import { Document as LCDocument } from 'langchain/document'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { flattenObject, getCredentialData, getCredentialParam } from '../../../src/utils'

class PineconeLlamaIndex_VectorStores implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    tags: string[]
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]

     {
        this.label = 'Pinecone'
        this.name = 'pineconeLlamaIndex'
        this.version = 1.0
        this.type = 'Pinecone'
        this.icon = 'pinecone.svg'
        this.category = 'Vector Stores'
        this.description = `Upsert embedded data and perform similarity search upon query using Pinecone, a leading fully managed hosted vector database`
        this.baseClasses = [this.type, 'VectorIndexRetriever']
        this.tags = ['LlamaIndex']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['pineconeApi']
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
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel_LlamaIndex'
            },
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'BaseEmbedding_LlamaIndex'
            },
            {
                label: 'Pinecone Index',
                name: 'pineconeIndex',
                type: 'string'
            },
            {
                label: 'Pinecone Namespace',
                name: 'pineconeNamespace',
                type: 'string',
                placeholder: 'my-first-namespace',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Pinecone Metadata Filter',
                name: 'pineconeMetadataFilter',
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
                label: 'Pinecone Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Pinecone Vector Store Index',
                name: 'vectorStore',
                baseClasses: [this.type, 'VectorStoreIndex']
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const indexName = nodeData.inputs?.pineconeIndex as string
            const pineconeNamespace = nodeData.inputs?.pineconeNamespace as string
            const docs = nodeData.inputs?.document as LCDocument[]
            const embeddings = nodeData.inputs?.embeddings as BaseEmbedding
            const model = nodeData.inputs?.model

            
            

            const pcvs = new PineconeVectorStore({
                indexName,
                apiKey: pineconeApiKey,
                namespace: pineconeNamespace,
                embedModel: embeddings
            })

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            const llamadocs: Document[] = []
            f {
                llama)
            }

            
            

            try {
                awa
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const indexName = nodeData.inputs?.pineconeIndex as string
        const pineconeNamespace = nodeData.inputs?.pineconeNamespace as string
        const pineconeMetadataFilter = nodeData.inputs?.pineconeMetadataFilter
        const embeddings = nodeData.inputs?.embeddings as BaseEmbedding
        const model = nodeData.inputs?.model
        const topK = nodeData.inputs?.topK as string
         : 4

        
        

        const obj: PineconeParams = {
            indexName,
            apiKey: pineconeApiKey,
            embedModel: embeddings
        }

         obj.namespace = pineconeNamespace

        let metadatafilter = {}
         {
            meta
            obj.queryFilter = metadatafilter
        }

        

        
        

        const index = await VectorStoreIndex.init({
            nodes: [],
            storageContext,
            serviceContext
        })

        const output = nodeData.outputs?.output as string

         {
            
            retriever.similarityTopK = k
            ;(.serviceContext = serviceContext
            return retriever
        } el {
            ;(.k = k
             {
                ;(.metadatafilter = metadatafilter
            }
            return index
        }
        return index
    }
}

type PineconeParams = {
    indexName: string
    apiKey: string
    namespace?: string
    chunkSize?: number
    queryFilter?: object
} & IEmbedModel

class PineconeVectorStore extends VectorStoreBase implements VectorStoreNoEmbedModel {
    storesText: boolean = true
    db?: Pinecone
    indexName: string
    apiKey: string
    chunkSize: number
    namespace?: string
    queryFilter?: object

     {
        
        this.indexName = params?.indexName
        this.apiKey = params?.apiKey
        this.namespace = params?.namespace ?? ''
        th
        this.queryFilter = params?.queryFilter ?? {}
    }

    p: Promise<Pinecone> {
         {
            this.db = new Pinecone({
                apiKey: this.apiKey
            })
        }
        
    }

     {
        
    }

    a {
        
        
    }

    a {
        
        .
    }

    a: Promise<string[]> {
         {
            
        }

        
        

        f {
            
            
             {
                
            }
        }
        
    }

    p {
        try {
            
            awa
            return true
        }  {
            return false
        }
    }

    a: Promise<void> {
        
        
        
    }

    a: Promise<VectorStoreQueryResult> {
        const queryOptions: any = {
            vector: query.queryEmbedding,
            topK: query.similarityTopK
        }

        .length > 0) {
            queryOptions.filter = this.queryFilter
        }

        
        
        

         => 
        
        

         => {
            return new Document({
                id_: row.id,
                text: th,
                meta,
                embedding: row.values
            })
        })

        const result = {
            nodes: nodes,
             => ,
             => 
        }

        
    }

    /**
     * Required by VectorStore interface. Currently ignored.
     */
    pe: Promise<void> {
        
    }

    textF: string {
        return row.metadata?.text ?? ''
    }

    metaW: any {
        
            .f => key 
            . => {
                acc[key] = meta[key]
                return acc
            }, {})
    }

    n {
        let id: any = node.id_.length ? node.id_ : null
        return {
            id: id,
            value,
            metadata: {
                ...,
                text: (n.text
            }
        }
    }
}

 => {
    // Pinecone doesn't support nested objects, so we flatten them
    const documentMetadata: any = { ...nodeMetadata }
    // preserve string arrays which are allowed
    const stringArrays: Record<string, string[]> = {}
    f) {
         &&  => type) {
            stringArrays[key] = documentMetadata[key]
            delete documentMetadata[key]
        }
    }
    const metadata: {
        [key: string]: string | number | boolean | string[] | null
    } = {
        ...flattenObje,
        ...stringArrays
    }
    // Pinecone doesn't support null values, so we remove them
    f) {
         {
            delete metadata[key]
        } el.length === 0) {
            delete metadata[key]
        }
    }
    return metadata
}

module.exports = { nodeClass: PineconeLlamaIndex_VectorStores }
