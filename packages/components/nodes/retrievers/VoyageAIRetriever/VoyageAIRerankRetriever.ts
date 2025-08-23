import { BaseRetriever } from '@langchain/core/retrievers'
import { VectorStoreRetriever } from '@langchain/core/vectorstores'
import { ContextualCompressionRetriever } from 'langchain/retrievers/contextual_compression'
import { VoyageAIRerank } from './VoyageAIRerank'
import { getCredentialData, getCredentialParam, handleEscapeCharacters } from '../../../src'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'

class VoyageAIRerankRetriever_Retrievers implements INode {
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
    badge: string
    outputs: INodeOutputsValue[]

     {
        this.label = 'Voyage AI Rerank Retriever'
        this.name = 'voyageAIRerankRetriever'
        this.version = 1.0
        this.type = 'VoyageAIRerankRetriever'
        this.icon = 'voyageai.png'
        this.category = 'Retrievers'
        this.description = 'Voyage AI Rerank indexes the documents from most to least semantically relevant to the query.'
        this.baseClasses = [this.type, 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['voyageAIApi']
        }
        this.inputs = [
            {
                label: 'Vector Store Retriever',
                name: 'baseRetriever',
                type: 'VectorStoreRetriever'
            },
            {
                label: 'Model Name',
                name: 'model',
                type: 'options',
                options: [
                    {
                        label: 'rerank-lite-1',
                        name: 'rerank-lite-1'
                    },
                    {
                        label: 'rerank-lite-2',
                        name: 'rerank-lite-2'
                    },
                    {
                        label: 'rerank-1',
                        name: 'rerank-1'
                    },
                    {
                        label: 'rerank-2',
                        name: 'rerank-2'
                    }
                ],
                default: 'rerank-lite-1',
                optional: true
            },
            {
                label: 'Query',
                name: 'query',
                type: 'string',
                description: 'Query to retrieve documents from retriever. If not specified, user question will be used',
                optional: true,
                acceptVariable: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to the TopK of the Base Retriever',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Voyage AI Rerank Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Document',
                name: 'document',
                description: 'Array of document objects containing metadata and pageContent',
                baseClasses: ['Document', 'json']
            },
            {
                label: 'Text',
                name: 'text',
                description: 'Concatenated string from pageContent of documents',
                baseClasses: ['string', 'json']
            }
        ]
    }

    a: Promise<any> {
        const baseRetriever = nodeData.inputs?.baseRetriever as BaseRetriever
        const model = nodeData.inputs?.model as string
        const query = nodeData.inputs?.query as string
        
        
        const topK = nodeData.inputs?.topK as string
         : (ba.k ?? 4
        const output = nodeData.outputs?.output as string

        

        const retriever = new ContextualCompressionRetriever({
            baseCompressor: voyageAICompressor,
            baseRetriever: baseRetriever
        })

         return retriever
        el 
        el {
            let finaltext = ''

            

            f finaltext += `${doc.pageContent}\n`

            
        }

        return retriever
    }
}

module.exports = { nodeClass: VoyageAIRerankRetriever_Retrievers }
