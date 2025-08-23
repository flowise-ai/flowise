import { VectorStore } from '@langchain/core/vectorstores'
import { INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { handleEscapeCharacters } from '../../../src/utils'

class VectorStoreToDocument_DocumentLoaders implements INode {
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

     {
        this.label = 'VectorStore To Document'
        this.name = 'vectorStoreToDocument'
        this.version = 2.0
        this.type = 'Document'
        this.icon = 'vectorretriever.svg'
        this.category = 'Document Loaders'
        this.description = 'Search documents with scores from vector store'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Vector Store',
                name: 'vectorStore',
                type: 'VectorStore'
            },
            {
                label: 'Query',
                name: 'query',
                type: 'string',
                description: 'Query to retrieve documents from vector database. If not specified, user question will be used',
                optional: true,
                acceptVariable: true
            },
            {
                label: 'M',
                name: 'minScore',
                type: 'number',
                optional: true,
                placeholder: '75',
                step: 1,
                description: 'Minumum score for embeddings documents to be included'
            }
        ]
        this.outputs = [
            {
                label: 'Document',
                name: 'document',
                description: 'Array of document objects containing metadata and pageContent',
                baseClasses: [...this.baseClasses, 'json']
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
        const vectorStore = nodeData.inputs?.vectorStore as VectorStore
        const minScore = nodeData.inputs?.minScore as number
        const query = nodeData.inputs?.query as string
        const output = nodeData.outputs?.output as string

        ?.k ?? 4
        ?.filter

        // If it is already pre-defined in lc_kwargs, then don't pass it again
        const filter = vectorStore.lc_kwargs.filter ? undefined : _filter
         {
            ;(ve.filter = vectorStore.lc_kwargs.filter
        }

        
        // eslint-disable-next-line no-console
        
        // eslint-disable-next-line no-console
        )

         {
            let finaldocs = []
            f {
                 continue
                f
            }
            return finaldocs
        } else {
            let finaltext = ''
            f {
                 continue
                finaltext += `${doc[0].pageContent}\n`
            }
            
        }
    }
}

module.exports = { nodeClass: VectorStoreToDocument_DocumentLoaders }
