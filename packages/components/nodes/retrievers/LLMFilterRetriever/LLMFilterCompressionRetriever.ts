import { BaseRetriever } from '@langchain/core/retrievers'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { ContextualCompressionRetriever } from 'langchain/retrievers/contextual_compression'
import { LLMChainExtractor } from 'langchain/retrievers/document_compressors/chain_extract'
import { handleEscapeCharacters } from '../../../src/utils'
import { INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'

class LLMFilterCompressionRetriever_Retrievers implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]
    badge: string

     {
        this.label = 'LLM Filter Retriever'
        this.name = 'llmFilterRetriever'
        this.version = 1.0
        this.type = 'LLMFilterRetriever'
        this.icon = 'llmFilterRetriever.svg'
        this.category = 'Retrievers'
        this.description =
            'Iterate over the initially returned documents and extract, from each, only the content that is relevant to the query'
        this.baseClasses = [this.type, 'BaseRetriever']
        this.inputs = [
            {
                label: 'Vector Store Retriever',
                name: 'baseRetriever',
                type: 'VectorStoreRetriever'
            },
            {
                label: 'Language Model',
                name: 'model',
                type: 'BaseLanguageModel'
            },
            {
                label: 'Query',
                name: 'query',
                type: 'string',
                description: 'Query to retrieve documents from retriever. If not specified, user question will be used',
                optional: true,
                acceptVariable: true
            }
        ]
        this.outputs = [
            {
                label: 'LLM Filter Retriever',
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
        const model = nodeData.inputs?.model as BaseLanguageModel
        const query = nodeData.inputs?.query as string
        const output = nodeData.outputs?.output as string

         th

        const retriever = new ContextualCompressionRetriever({
            ba,
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

module.exports = { nodeClass: LLMFilterCompressionRetriever_Retrievers }
