import { Tool } from '@langchain/core/tools'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'

const defaultDesc =
    'A meta search engine. Useful for when you need to answer questions about current events. Input should be a search query. Output is a JSON array of the query results'
const defaultName = 'searxng-search'

interface SearxngResults {
    query: string
    number_of_results: number
    results: Array<{
        url: string
        title: string
        content: string
        img_src: string
        engine: string
        parsed_url: Array<string>
        template: string
        engines: Array<string>
        positions: Array<number>
        score: number
        category: string
        pretty_url: string
        open_group?: boolean
        close_group?: boolean
    }>
    answers: Array<string>
    corrections: Array<string>
    infoboxes: Array<{
        infobox: string
        content: string
        engine: string
        engines: Array<string>
    }>
    suggestions: Array<string>
    unresponsive_engines: Array<string>
}

interface SearxngCustomHeaders {
    [key: string]: string
}

interface SearxngSearchParams {
    numResults?: number
    categories?: string
    engines?: string
    language?: string
    pageNumber?: number
    timeRange?: number
    format?: string
    resultsOnNewTab?: 0 | 1
    imageProxy?: boolean
    autocomplete?: string
    safesearch?: 0 | 1 | 2
}

class Searxng_Tools implements INode {
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
        this.label = 'SearXNG'
        this.name = 'searXNG'
        this.version = 3.0
        this.type = 'SearXNG'
        this.icon = 'SearXNG.svg'
        this.category = 'Tools'
        this.description = 'Wrapper around SearXNG - a free internet metasearch engine'
        this.inputs = [
            {
                label: 'Base URL',
                name: 'apiBase',
                type: 'string',
                default: 'http://localhost:8080'
            },
            {
                label: 'Tool Name',
                name: 'toolName',
                type: 'string',
                default: defaultName
            },
            {
                label: 'Tool Description',
                name: 'toolDescription',
                type: 'string',
                rows: 4,
                default: defaultDesc
            },
            {
                label: 'Headers',
                name: 'headers',
                type: 'json',
                description: 'Custom headers for the request',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Format',
                name: 'format',
                type: 'options',
                options: [
                    {
                        label: 'JSON',
                        name: 'json'
                    },
                    {
                        label: 'HTML',
                        name: 'html'
                    }
                ],
                default: 'json',
                description:
                    'Format of the response. You need to enable search formats in settings.yml. Refer to <a target="_blank" href="https://docs.flowise-ai.github.io/integrations/langchain/tools/searxng">SearXNG Setup Guide</a> for more details.',
                additionalParams: true
            },
            {
                label: 'Categories',
                name: 'categories',
                description:
                    'C',
                optional: true,
                additionalParams: true,
                type: 'string'
            },
            {
                label: 'Engines',
                name: 'engines',
                description:
                    'C',
                optional: true,
                additionalParams: true,
                type: 'string'
            },
            {
                label: 'Language',
                name: 'language',
                description: 'Code of the language.',
                optional: true,
                additionalParams: true,
                type: 'string'
            },
            {
                label: 'Page No.',
                name: 'pageno',
                description: 'Search page number.',
                optional: true,
                additionalParams: true,
                type: 'number'
            },
            {
                label: 'Time Range',
                name: 'time_range',
                description:
                    'Time range of search for engines which support it. See if an engine supports time range search in the preferences page of an instance.',
                optional: true,
                additionalParams: true,
                type: 'string'
            },
            {
                label: 'Safe Search',
                name: 'safesearch',
                description:
                    'Filter search results of engines which support safe search. See if an engine supports safe search in the preferences page of an instance.',
                optional: true,
                additionalParams: true,
                type: 'number'
            }
        ]
        th]
    }

    a: Promise<any> {
        const apiBase = nodeData.inputs?.apiBase as string
        const headers = nodeData.inputs?.headers as string
        const categories = nodeData.inputs?.categories as string
        const engines = nodeData.inputs?.engines as string
        const language = nodeData.inputs?.language as string
        const pageno = nodeData.inputs?.pageno as string
        const time_range = nodeData.inputs?.time_range as string
        const safesearch = nodeData.inputs?.safesearch as 0 | 1 | 2 | undefined
        const format = nodeData.inputs?.format as string
        const toolName = nodeData.inputs?.toolName as string
        const toolDescription = nodeData.inputs?.toolDescription as string

        const params: SearxngSearchParams = {}

         params.categories = categories
         params.engines = engines
         params.language = language
         pa
         pa
         params.safesearch = safesearch
         params.format = format

        let customHeaders = undefined
         {
             : headers
        }

        const tool = new SearxngSearch({
            apiBase,
            params,
            headers: customHeaders,
            toolName,
            toolDescription
        })

        return tool
    }
}

class SearxngSearch extends Tool {
     {
        return 'SearxngSearch'
    }

    name = defaultName

    description = defaultDesc

    protected apiBase?: string

    protected params?: SearxngSearchParams = {
        numResults: 10,
        pageNumber: 1,
        imageProxy: true,
        safesearch: 0
    }

    protected headers?: SearxngCustomHeaders

    get l: { [key: string]: string } | undefined {
        return {
            apiBase: 'SEARXNG_API_BASE'
        }
    }

    constructor({
        apiBase,
        params,
        headers,
        toolName,
        toolDescription
    }: {
        apiBase?: string
        params?: SearxngSearchParams
        headers?: SearxngCustomHeaders
        toolName?: string
        toolDescription?: string
    }) {
        

        this.apiBase = apiBase
        this.headers = { 'content-type': 'application/json', ...headers }

         {
            th
        }

         {
            this.params = { ...this.params, ...params }
        }

         {
            this.name = toolName
        }

         {
            this.description = toolDescription
        }
    }

    p: string {
        
            .f => value 
            .map(( => ]) // Avoid string conversion
        
        return `${baseUrl}/${path}?${searchParams}`
    }

    a: Promise<string> {
        const queryParams = {
            q: input,
            ...this.params
        }
        

        const resp = await fetch(url, {
            method: 'POST',
            headers: this.headers,
             // 5 seconds
        })

         {
            th
        }

        

         {
            return 'No good results found.'
        } el {
            const response: string[] = []

             => {
                response.push(
                    JSON.stringify({
                        title: r.title || '',
                        link: r.url || '',
                        snippet: r.content || ''
                    })
                )
            })

            .t
        } el {
            return res.answers[0]
        } el {
            
        } el {
            let suggestions = 'Suggestions: '
             => {
                suggestions += `${s}, `
            })
            return suggestions
        } else {
            return 'No good results found.'
        }
    }
}

module.exports = { nodeClass: Searxng_Tools }
