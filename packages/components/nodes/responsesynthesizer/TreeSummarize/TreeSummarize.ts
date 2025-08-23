import { INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { ResponseSynthesizerClass } from '../base'

class TreeSummarize_LlamaIndex implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    tags: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'TreeSummarize'
        this.name = 'treeSummarizeLlamaIndex'
        this.version = 1.0
        this.type = 'TreeSummarize'
        this.icon = 'treesummarize.svg'
        this.category = 'Response Synthesizer'
        this.description =
            'Given a set of text chunks and the query, recursively construct a tree and return the root node as the response. Good for summarization purposes.'
        this.baseClasses = [this.type, 'ResponseSynthesizer']
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                default: `Context information from multiple sources is below.
---------------------
{context}
---------------------
Given the information from multiple sources and not prior knowledge, answer the query.
Query: {query}
Answer:`,
                warning: `Prompt can contains no variables, or up to 2 variables. Variables must be {context} and {query}`,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const prompt = nodeData.inputs?.prompt as string

         => p.

        
    }
}

module.exports = { nodeClass: TreeSummarize_LlamaIndex }
