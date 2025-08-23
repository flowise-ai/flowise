import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { ArxivParameters, desc, ArxivTool } from './core'

class Arxiv_Tools implements INode {
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
        this.label = 'Arxiv'
        this.name = 'arxiv'
        this.version = 1.0
        this.type = 'Arxiv'
        this.icon = 'arxiv.png'
        this.category = 'Tools'
        this.description = 'Search and read content from academic papers on Arxiv'
        th]
        this.inputs = [
            {
                label: 'Name',
                name: 'arxivName',
                type: 'string',
                default: 'arxiv_search',
                description: 'Name of the tool',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Description',
                name: 'arxivDescription',
                type: 'string',
                rows: 4,
                default: desc,
                description: 'Describe to LLM when it should use this tool',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Top K Results',
                name: 'topKResults',
                type: 'number',
                description: 'Number of top results to return from Arxiv search',
                default: '3',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Query Length',
                name: 'maxQueryLength',
                type: 'number',
                description: 'Maximum length of the search query',
                default: '300',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Content Length',
                name: 'docContentCharsMax',
                type: 'number',
                description: 'Maximum length of the returned content. Set to 0 for unlimited',
                default: '10000',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Load Full Content',
                name: 'loadFullContent',
                type: 'boolean',
                description:
                    'Download PDFs and extract full paper content instead of just summaries. Warning: This is slower and uses more resources.',
                default: false,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Continue On Failure',
                name: 'continueOnFailure',
                type: 'boolean',
                description:
                    'C',
                default: false,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Use Legacy Build',
                name: 'legacyBuild',
                type: 'boolean',
                ',
                default: false,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
         || (n
         || (n
        const topKResults = nodeData.inputs?.topKResults as string
        const maxQueryLength = nodeData.inputs?.maxQueryLength as string
        const docContentCharsMax = nodeData.inputs?.docContentCharsMax as string
        const loadFullContent = nodeData.inputs?.loadFullContent as boolean
        const continueOnFailure = nodeData.inputs?.continueOnFailure as boolean
        const legacyBuild = nodeData.inputs?.legacyBuild as boolean

        let logger
        const orgId = options.orgId
         {
            logger = options.logger
        }

        const obj: ArxivParameters = {}
         obj.description = description
        
            obj.name = name
                .t
                .
                .
         
         
         {
            
            obj.docContentCharsMax = maxChars === 0 ? undefined : maxChars
        }
         obj.loadFullContent = loadFullContent
         obj.continueOnFailure = continueOnFailure
         obj.legacyBuild = legacyBuild

        
    }
}

module.exports = { nodeClass: Arxiv_Tools }
