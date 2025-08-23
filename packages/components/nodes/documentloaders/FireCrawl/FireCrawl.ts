import { TextSplitter } from 'langchain/text_splitter'
import { Document, DocumentInterface } from '@langchain/core/documents'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { INode, INodeData, INodeParams, ICommonObject, INodeOutputsValue } from '../../../src/Interface'
import { getCredentialData, getCredentialParam, handleEscapeCharacters } from '../../../src/utils'
import axios, { AxiosResponse, AxiosRequestHeaders } from 'axios'
import { z } from 'zod'

// FirecrawlApp interfaces
interface FirecrawlAppConfig {
    apiKey?: string | null
    apiUrl?: string | null
}

interface FirecrawlDocumentMetadata {
    title?: string
    description?: string
    language?: string
    sourceURL?: string
    statusCode?: number
    error?: string
    [key: string]: any
}

interface FirecrawlDocument {
    markdown?: string
    html?: string
    rawHtml?: string
    screenshot?: string
    links?: string[]
    actions?: {
        screenshots?: string[]
    }
    metadata: FirecrawlDocumentMetadata
    llm_extraction?: Record<string, any>
    warning?: string
}

interface ScrapeResponse {
    success: boolean
    data?: FirecrawlDocument
    error?: string
}

interface CrawlResponse {
    success: boolean
    id: string
    url: string
    error?: string
    data?: FirecrawlDocument
}

interface CrawlStatusResponse {
    status: string
    total: number
    completed: number
    creditsUsed: number
    expiresAt: string
    next?: string
    data?: FirecrawlDocument[]
}

interface ExtractResponse {
    success: boolean
    id: string
    url: string
    data?: Record<string, any>
}

interface SearchResult {
    url: string
    title: string
    description: string
}

interface SearchResponse {
    success: boolean
    data?: SearchResult[]
    warning?: string
}

interface SearchRequest {
    query: string
    limit?: number
    tbs?: string
    lang?: string
    country?: string
    location?: string
    timeout?: number
    ignoreInvalidURLs?: boolean
}

interface Params {
    [key: string]: any
    extractorOptions?: {
        extractionSchema: z.ZodSchema | any
        mode?: 'llm-extraction'
        extractionPrompt?: string
    }
}

interface ExtractRequest {
    urls: string[]
    prompt?: string
    schema?: Record<string, any>
    enableWebSearch?: boolean
    ignoreSitemap?: boolean
    includeSubdomains?: boolean
    showSources?: boolean
    scrapeOptions?: {
        formats?: string[]
        onlyMainContent?: boolean
        includeTags?: string | string[]
        excludeTags?: string | string[]
        mobile?: boolean
        skipTlsVerification?: boolean
        timeout?: number
        jsonOptions?: {
            schema?: Record<string, any>
            prompt?: string
        }
    }
}

interface ExtractStatusResponse {
    success: boolean
    data: any
    status: 'completed' | 'pending' | 'processing' | 'failed' | 'cancelled'
    expiresAt: string
}

// F
class FirecrawlApp {
    private apiKey: string
    private apiUrl: string

     {
        this.apiKey = apiKey || ''
        this.apiUrl = apiUrl || 'https://api.firecrawl.dev'
         {
            th
        }
    }

    a: Promise<ScrapeResponse> {
        

        // Create a clean payload with only valid parameters
        const validParams: any = {
            url,
            formats: ['markdown'],
            onlyMainContent: true
        }

        // Add optional parameters if they exist
         {
             {
                val
                    ? params.scrapeOptions.includeTags
                    : pa
            }
             {
                val
                    ? params.scrapeOptions.excludeTags
                    : pa
            }
             {
                validParams.mobile = params.scrapeOptions.mobile
            }
             {
                validParams.skipTlsVerification = params.scrapeOptions.skipTlsVerification
            }
             {
                validParams.timeout = params.scrapeOptions.timeout
            }
        }

        // Add JSON options if they exist
         {
            validParams.jsonOptions = {
                schema: params.extractorOptions.extractionSchema,
                prompt: params.extractorOptions.extractionPrompt
            }
        }

        try {
            const parameters = {
                ...validParams,
                integration: 'flowise'
            }
            
             {
                const responseData = response.data
                 {
                    return responseData
                } else {
                    th
                }
            } else {
                th
            }
        }  {
            th
        }
        return { success: false, error: 'Internal server error.' }
    }

    async crawlUrl(
        url: string,
        params: Params | null = null,
        waitUntilDone: boolean = true,
        pollInterval: number = 2,
        idempotencyKey?: string
    ): Promise<CrawlResponse | CrawlStatusResponse> {
        

        // Create a clean payload with only valid parameters
        const validParams: any = {
            url
        }

        // Add scrape options with only non-empty values
        const scrapeOptions: any = {
            formats: ['markdown'],
            onlyMainContent: true
        }

        // Add crawl-specific parameters if they exist and are not empty
         {
            const validCrawlParams = [
                'excludePaths',
                'includePaths',
                'maxDepth',
                'maxDiscoveryDepth',
                'ignoreSitemap',
                'ignoreQueryParameters',
                'limit',
                'allowBackwardLinks',
                'allowExternalLinks',
                'delay'
            ]

            val => {
                 {
                    validParams[param] = params[param]
                }
            })
        }

        // Add scrape options if they exist and are not empty
         {
             {
                
                    ? params.scrapeOptions.includePaths
                    : pa
                 {
                    validParams.includePaths = includePaths
                }
            }

             {
                
                    ? params.scrapeOptions.excludePaths
                    : pa
                 {
                    validParams.excludePaths = excludePaths
                }
            }

             {
                validParams.limit = params.scrapeOptions.limit
            }

            const validScrapeParams = ['mobile', 'skipTlsVerification', 'timeout', 'includeTags', 'excludeTags', 'onlyMainContent']

            val => {
                 {
                    scrapeOptions[param] = params.scrapeOptions[param]
                }
            })
        }

        // Only add scrapeOptions if it has more than just the default values
        .length > 2) {
            validParams.scrapeOptions = scrapeOptions
        }

        try {
            const parameters = {
                ...validParams,
                integration: 'flowise'
            }
            
             {
                const crawlResponse = response.data as CrawlResponse
                 {
                    th
                }

                 {
                    
                } else {
                    return crawlResponse
                }
            } else {
                th
            }
        }  {
             {
                th
            }
            th
        }

        return { success: false, id: '', url: '' }
    }

    async extract(
        request: ExtractRequest,
        waitUntilDone: boolean = true,
        pollInterval: number = 2
    ): Promise<ExtractResponse | ExtractStatusResponse> {
        

        // Create a clean payload with only valid parameters
        const validParams: any = {
            urls: request.urls
        }

        // Add optional parameters if they exist and are not empty
         {
            validParams.prompt = request.prompt
        }

         {
            validParams.schema = request.schema
        }

        const validExtractParams = ['enableWebSearch', 'ignoreSitemap', 'includeSubdomains', 'showSources'] as const

        val => {
             {
                validParams[param] = request[param]
            }
        })

        // Add scrape options if they exist
         {
            const scrapeOptions: any = {
                formats: ['markdown'],
                onlyMainContent: true
            }

            // Handle includeTags
             {
                
                    ? request.scrapeOptions.includeTags
                    : 
                 {
                    scrapeOptions.includeTags = includeTags
                }
            }

            // Handle excludeTags
             {
                
                    ? request.scrapeOptions.excludeTags
                    : 
                 {
                    scrapeOptions.excludeTags = excludeTags
                }
            }

            // Add other scrape options if they exist and are not empty
            const validScrapeParams = ['mobile', 'skipTlsVerification', 'timeout'] as const

            val => {
                 {
                    scrapeOptions[param] = request.scrapeOptions[param]
                }
            })

            // Add JSON options if they exist
             {
                scrapeOptions.jsonOptions = {}
                 {
                    scrapeOptions.jsonOptions.schema = request.scrapeOptions.jsonOptions.schema
                }
                 {
                    scrapeOptions.jsonOptions.prompt = request.scrapeOptions.jsonOptions.prompt
                }
            }

            // Only add scrapeOptions if it has more than just the default values
            .length > 2) {
                validParams.scrapeOptions = scrapeOptions
            }
        }

        try {
            const parameters = {
                ...validParams,
                integration: 'flowise'
            }
            
             {
                const extractResponse = response.data as ExtractResponse
                 {
                    
                } else {
                    return extractResponse
                }
            } else {
                th
            }
        }  {
            th
        }
        return { success: false, id: '', url: '' }
    }

    a: Promise<SearchResponse> {
        

        // Create a clean payload with only valid parameters
        const validParams: any = {
            query: request.query
        }

        // Add optional parameters if they exist and are not empty
        const validSearchParams = ['limit', 'tbs', 'lang', 'country', 'location', 'timeout', 'ignoreInvalidURLs'] as const

        val => {
             {
                validParams[param] = request[param]
            }
        })

        try {
            const parameters = {
                ...validParams,
                integration: 'flowise'
            }
            
             {
                const searchResponse = response.data as SearchResponse
                 {
                    th
                }
                return searchResponse
            } else {
                th
            }
        }  {
            th
        }
        return { success: false }
    }

    p: AxiosRequestHeaders {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
            ...(
        } as AxiosRequestHeaders & { 'x-idempotency-key'?: string }
    }

    p: Promise<AxiosResponse> {
        
        return result
    }

    p: Promise<AxiosResponse> {
        
    }

    p: Promise<CrawlStatusResponse> {
        let isJobCompleted = false
        wh {
            
             {
                const statusData = statusResponse.data as CrawlStatusResponse
                 {
                    case 'completed':
                        isJobCompleted = true
                        return statusData
                    case 'scraping':
                    case 'failed':
                         {
                            th
                        }
                        awa =>  * 1000))
                        break
                    default:
                        th
                }
            } else {
                th
            }
        }
        th
    }

    p: Promise<ExtractStatusResponse> {
        let isJobCompleted = false
        wh {
            
             {
                const statusData = statusResponse.data as ExtractStatusResponse
                 {
                    case 'completed':
                        isJobCompleted = true
                        return statusData
                    case 'processing':
                    case 'failed':
                         {
                            th
                        }
                        awa =>  * 1000))
                        break
                    default:
                        th
                }
            } else {
                th
            }
        }
        th
    }

    p: void {
        ) {
            const errorMessage: string = response.data.error || 'Unknown error occurred'
            th
        } else {
            th
        }
    }
}

// FireCrawl Loader
interface FirecrawlLoaderParameters {
    url?: string
    query?: string
    apiKey?: string
    apiUrl?: string
    mode?: 'crawl' | 'scrape' | 'extract' | 'search'
    params?: Record<string, unknown>
}

export class FireCrawlLoader extends BaseDocumentLoader {
    private apiKey: string
    private apiUrl: string
    private url?: string
    private query?: string
    private mode: 'crawl' | 'scrape' | 'extract' | 'search'
    private params?: Record<string, unknown>

     {
        
        const { apiKey, apiUrl, url, query, mode = 'crawl', params } = loaderParams
         {
            th
        }

        this.apiKey = apiKey
        this.url = url
        this.query = query
        this.mode = mode
        this.params = params
        this.apiUrl = apiUrl || 'https://api.firecrawl.dev'
    }

    publ: Promise<DocumentInterface[]> {
        
        let firecrawlDocs: FirecrawlDocument[]

         {
             {
                th
            }
            
             {
                th
            }

            // Convert search results to FirecrawlDocument format
            f.map(( => ({
                markdown: result.description,
                metadata: {
                    title: result.title,
                    sourceURL: result.url,
                    description: result.description
                }
            }))
        } el {
             {
                th
            }
            
             {
                th
            }
            firecrawlDocs = [response.data as FirecrawlDocument]
        } el {
             {
                th
            }
            
             {
                 {
                    th
                }
                firecrawlDocs = response.data || []
            } else {
                 {
                    th
                }
                firecrawlDocs = [response.data as FirecrawlDocument]
            }
        } el {
             {
                th
            }
            this.params!.urls = [this.url]
            
             {
                th
            }

            // Convert extract response to document format
             {
                // Create a document from the extracted data
                const extractedData = response.data
                

                const metadata: Record<string, any> = {
                    source: this.url,
                    type: 'extracted_data'
                }

                // Add status and expiresAt if they exist in the response
                 {
                    metadata.status = response.status
                }
                 {
                    metadata.data = response.data
                }
                 {
                    metadata.expiresAt = response.expiresAt
                }

                return [
                    new Document({
                        pageContent: content,
                        metadata
                    })
                ]
            }
            return []
        } else {
            th
        }

        // Convert Firecrawl documents to LangChain documents
         => {
            // Use markdown content if available, otherwise fallback to HTML or empty string
            const content = doc.markdown || doc.html || doc.rawHtml || ''

            // Create a standard LangChain document
            return new Document({
                pageContent: content,
                metadata: {
                    ...doc.metadata,
                    source: doc.metadata?.sourceURL || this.url,
                    title: doc.metadata?.title,
                    description: doc.metadata?.description,
                    language: doc.metadata?.language,
                    statusCode: doc.metadata?.statusCode
                }
            })
        })

        return documents
    }
}

// Flowise Node Class
class FireCrawl_DocumentLoaders implements INode {
    label: string
    name: string
    description: string
    type: string
    icon: string
    version: number
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]

     {
        this.label = 'FireCrawl'
        this.name = 'fireCrawl'
        this.type = 'Document'
        this.icon = 'firecrawl.png'
        this.version = 4.0
        this.category = 'Document Loaders'
        this.description = 'Load data from URL using FireCrawl'
        this.baseClasses = [this.type]
        this.credential = {
            label: 'FireCrawl API',
            name: 'credential',
            type: 'credential',
            credentialNames: ['fireCrawlApi']
        }
        this.inputs = [
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Type',
                type: 'options',
                name: 'crawlerType',
                options: [
                    {
                        label: 'Crawl',
                        name: 'crawl',
                        description: 'Crawl a URL and all accessible subpages'
                    },
                    {
                        label: 'Scrape',
                        name: 'scrape',
                        description: 'Scrape a URL and get its content'
                    },
                    {
                        label: 'Extract',
                        name: 'extract',
                        description: 'Extract data from a URL'
                    },
                    {
                        label: 'Search',
                        name: 'search',
                        description: 'Search the web using FireCrawl'
                    }
                ],
                default: 'crawl'
            },
            {
                label: 'URLs',
                name: 'url',
                type: 'string',
                description: 'URL to be crawled/scraped/extracted',
                placeholder: 'https://docs.flowise-ai.github.io',
                optional: true,
                show: {
                    crawlerType: ['crawl', 'scrape', 'extract']
                }
            },
            {
                // includeTags
                label: 'Include Tags',
                name: 'includeTags',
                type: 'string',
                description: 'Tags to include in the output. Use comma to separate multiple tags.',
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['scrape']
                }
            },
            {
                // excludeTags
                label: 'Exclude Tags',
                name: 'excludeTags',
                type: 'string',
                description: 'Tags to exclude from the output. Use comma to separate multiple tags.',
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['scrape']
                }
            },
            {
                // onlyMainContent
                label: 'Only Main Content',
                name: 'onlyMainContent',
                type: 'boolean',
                description: 'Extract only the main content of the page',
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['scrape']
                }
            },
            {
                // limit
                label: 'Limit',
                name: 'limit',
                type: 'string',
                description: 'Maximum number of pages to crawl',
                optional: true,
                additionalParams: true,
                default: '10000',
                show: {
                    crawlerType: ['crawl']
                }
            },
            {
                label: 'Include Paths',
                name: 'includePaths',
                type: 'string',
                description:
                    'URL pathname regex patterns that include matching URLs in the crawl. Only the paths that match the specified patterns will be included in the response.',
                placeholder: `blog/.*, news/.*`,
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['crawl']
                }
            },
            {
                label: 'Exclude Paths',
                name: 'excludePaths',
                type: 'string',
                description: 'URL pathname regex patterns that exclude matching URLs from the crawl.',
                placeholder: `blog/.*, news/.*`,
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['crawl']
                }
            },
            {
                label: 'Schema',
                name: 'extractSchema',
                type: 'json',
                description: 'JSON schema for data extraction',
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['extract']
                }
            },
            {
                label: 'Prompt',
                name: 'extractPrompt',
                type: 'string',
                description: 'Prompt for data extraction',
                optional: true,
                additionalParams: true,
                show: {
                    crawlerType: ['extract']
                }
            },
            {
                label: 'Query',
                name: 'searchQuery',
                type: 'string',
                description: 'Search query to find relevant content',
                optional: true,
                show: {
                    crawlerType: ['search']
                }
            },
            {
                label: 'Limit',
                name: 'searchLimit',
                type: 'string',
                description: 'Maximum number of results to return',
                optional: true,
                additionalParams: true,
                default: '5',
                show: {
                    crawlerType: ['search']
                }
            },
            {
                label: 'Language',
                name: 'searchLang',
                type: 'string',
                ',
                optional: true,
                additionalParams: true,
                default: 'en',
                show: {
                    crawlerType: ['search']
                }
            },
            {
                label: 'Country',
                name: 'searchCountry',
                type: 'string',
                ',
                optional: true,
                additionalParams: true,
                default: 'us',
                show: {
                    crawlerType: ['search']
                }
            },
            {
                label: 'Timeout',
                name: 'searchTimeout',
                type: 'number',
                description: 'Timeout in milliseconds for search operation',
                optional: true,
                additionalParams: true,
                default: 60000,
                show: {
                    crawlerType: ['search']
                }
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
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const url = nodeData.inputs?.url as string
        const crawlerType = nodeData.inputs?.crawlerType as string
        const limit = nodeData.inputs?.limit as string
        const onlyMainContent = nodeData.inputs?.onlyMainContent as boolean
        
        
        
        const output = nodeData.outputs?.output as string

        // Validate URL only for non-search methods
         {
            th
        }

         a : undefined
         a : undefined

         a : undefined
         a : undefined

        const extractSchema = nodeData.inputs?.extractSchema
        const extractPrompt = nodeData.inputs?.extractPrompt as string

        const searchQuery = nodeData.inputs?.searchQuery as string
        const searchLimit = nodeData.inputs?.searchLimit as string
        const searchLang = nodeData.inputs?.searchLang as string
        const searchCountry = nodeData.inputs?.searchCountry as string
        const searchTimeout = nodeData.inputs?.searchTimeout as number

        const input: FirecrawlLoaderParameters = {
            url,
            query: searchQuery,
            mode: crawlerType as 'crawl' | 'scrape' | 'extract' | 'search',
            apiKey: firecrawlApiToken,
            apiUrl: firecrawlApiUrl,
            params: {
                scrapeOptions: {
                    includePaths,
                    excludePaths,
                    l : 1000,
                    includeTags,
                    excludeTags
                },
                schema: extractSchema || undefined,
                prompt: extractPrompt || undefined
            }
        }

        // Add search-specific parameters only when in search mode
         {
             {
                th
            }
            input.params = {
                l : 5,
                lang: searchLang,
                country: searchCountry,
                timeout: searchTimeout
            }
        }

         {
            const scrapeOptions = input.params?.scrapeOptions as any
            input.params!.scrapeOptions = {
                ...scrapeOptions,
                onlyMainContent: true
            }
        }

        
        let docs = []

        // Load documents
        

        // Apply text splitting if configured
         {
            
        }

        // Apply metadata if provided
         {
            
             => ({
                ...doc,
                metadata: {
                    ...doc.metadata,
                    ...parsedMetadata
                }
            }))
        }

        // Return based on output type
         {
            return docs
        } else {
            let finaltext = ''
            f {
                finaltext += `${doc.pageContent}\n`
            }
            
        }
    }
}

module.exports = { nodeClass: FireCrawl_DocumentLoaders }

// FOR TESTING PURPOSES
// export { FireCrawl_DocumentLoaders }
