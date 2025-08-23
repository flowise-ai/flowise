import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { MarkdownTextSplitter, MarkdownTextSplitterParams } from 'langchain/text_splitter'

class MarkdownTextSplitter_TextSplitters implements INode {
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
        this.label = 'Markdown Text Splitter'
        this.name = 'markdownTextSplitter'
        this.version = 1.1
        this.type = 'MarkdownTextSplitter'
        this.icon = 'markdownTextSplitter.svg'
        this.category = 'Text Splitters'
        this.description = `Split your content into documents based on the Markdown headers`
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
            },
            {
                label: 'Split by Headers',
                name: 'splitByHeaders',
                type: 'options',
                description: 'Split documents at specified header levels. Headers will be included with their content.',
                default: 'disabled',
                options: [
                    {
                        label: 'Disabled',
                        name: 'disabled'
                    },
                    {
                        label: '# Hea',
                        name: 'h1'
                    },
                    {
                        label: '## Hea',
                        name: 'h2'
                    },
                    {
                        label: '### Hea',
                        name: 'h3'
                    },
                    {
                        label: '#### Hea',
                        name: 'h4'
                    },
                    {
                        label: '##### Hea',
                        name: 'h5'
                    },
                    {
                        label: '###### Hea',
                        name: 'h6'
                    }
                ],
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const chunkSize = nodeData.inputs?.chunkSize as string
        const chunkOverlap = nodeData.inputs?.chunkOverlap as string
        const splitByHeaders = nodeData.inputs?.splitByHeaders as string

        const obj = {} as MarkdownTextSplitterParams

         
         

        

         {
            return {
                 => {
                    const results = []

                    f {
                        
                        f {
                            results.push({
                                pageContent: chunk,
                                metadata: { ...doc.metadata }
                            })
                        }
                    }

                    return results
                },
                 => {
                    
                }
            }
        }

        return splitter
    }

    p: Promise<string[]> {
        
         

        
        const sections: string[] = []
        let currentSection: string[] = []

        f {
             && l
            /)?.[1]?.length || 0 : 0

             {
                // Save previous section
                 {
                    .t)
                }
                // Start new section
                currentSection = [line]
            } else {
                // Add line to current section
                
            }
        }

        // Add final section
         {
            .t)
        }

        return sections
    }

    p: number {
         {
            case 'h1':
                return 1
            case 'h2':
                return 2
            case 'h3':
                return 3
            case 'h4':
                return 4
            case 'h5':
                return 5
            case 'h6':
                return 6
            default:
                return 0
        }
    }
}

module.exports = { nodeClass: MarkdownTextSplitter_TextSplitters }
