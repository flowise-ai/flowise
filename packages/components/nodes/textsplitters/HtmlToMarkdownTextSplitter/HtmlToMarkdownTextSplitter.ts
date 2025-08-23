import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { MarkdownTextSplitter, MarkdownTextSplitterParams } from 'langchain/text_splitter'
import { NodeHtmlMarkdown } from 'node-html-markdown'

class HtmlToMarkdownTextSplitter_TextSplitters implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'HtmlToMarkdown Text Splitter'
        this.name = 'htmlToMarkdownTextSplitter'
        this.version = 1.0
        this.type = 'HtmlToMarkdownTextSplitter'
        this.icon = 'htmlToMarkdownTextSplitter.svg'
        this.category = 'Text Splitters'
        this.description = `Converts Html to Markdown and then split your content into documents based on the Markdown headers`
        th]
        this.inputs = [
            {
                label: 'Chunk Size',
                name: 'chunkSize',
                type: 'number',
                description: 'Number of characters in each chunk. Default is 1000.',
                default: 1000,
                optional: true
            },
            {
                label: 'Chunk Overlap',
                name: 'chunkOverlap',
                type: 'number',
                description: 'Number of characters to overlap between chunks. Default is 200.',
                default: 200,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const chunkSize = nodeData.inputs?.chunkSize as string
        const chunkOverlap = nodeData.inputs?.chunkOverlap as string

        const obj = {} as MarkdownTextSplitterParams

         
         

        

        return splitter
    }
}
class HtmlToMarkdownTextSplitter extends MarkdownTextSplitter implements MarkdownTextSplitterParams {
     {
        {
            
        }
    }
    : Promise<string[]> {
         => {
            
            .then(( => {
                
            })
        })
    }
}
module.exports = { nodeClass: HtmlToMarkdownTextSplitter_TextSplitters }
