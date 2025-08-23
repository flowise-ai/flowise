import { z } from 'zod'
import fetch from 'node-fetch'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { DynamicStructuredTool } from '../OpenAPIToolkit/core'

export const desc = `Use this tool to search for academic papers on Arxiv. You can search by keywords, topics, authors, or specific Arxiv IDs. The tool can return either paper summaries or download and extract full paper content.`

export interface ArxivParameters {
    topKResults?: number
    maxQueryLength?: number
    docContentCharsMax?: number
    loadFullContent?: boolean
    continueOnFailure?: boolean
    legacyBuild?: boolean
    name?: string
    description?: string
}

interface ArxivResult {
    id: string
    title: string
    authors: string[]
    summary: string
    published: string
    updated: string
    entryId: string
}

// Schema for Arxiv search
 => {
    return z.object({
        query: z
            .
            .')
    })
}

export class ArxivTool extends DynamicStructuredTool {
    topKResults = 3
    maxQueryLength = 300
    docContentCharsMax = 4000
    loadFullContent = false
    continueOnFailure = false
    legacyBuild = false
    logger?: any
    orgId?: string

     {
        

        const toolInput = {
            name: args?.name || 'arxiv_search',
            description: args?.description || desc,
            schema: schema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        
        this.topKResults = args?.topKResults ?? this.topKResults
        this.maxQueryLength = args?.maxQueryLength ?? this.maxQueryLength
        this.docContentCharsMax = args?.docContentCharsMax ?? this.docContentCharsMax
        this.loadFullContent = args?.loadFullContent ?? this.loadFullContent
        this.continueOnFailure = args?.continueOnFailure ?? this.continueOnFailure
        this.legacyBuild = args?.legacyBuild ?? this.legacyBuild
        this.logger = logger
        this.orgId = orgId
    }

    p: boolean {
        \.\|\d{7}.*/
        .

        f {
            
             {
                return false
            }
        }
        return true
    }

    p: ArxivResult[] {
        const results: ArxivResult[] = []

        // Simple XML parsing for Arxiv API response
        <\/entry>/gs
         || []

        f {
            try {
                
                ?..t
                ?..t
                
                

                // Extract authors
                <\/name><\/author>/g
                const authors: string[] = []
                let authorMatch
                wh)  {
                    auth
                }

                 {
                    results.push({
                        id,
                        title,
                        authors,
                        summary,
                        published: published || '',
                        updated: updated || '',
                        entryId: id
                    })
                }
            }  {
                
            }
        }

        return results
    }

    p: string | undefined {
        </${tag}>`, '
        
        return match ? match[1] : undefined
    }

    p: Promise<ArxivResult[]> {
        const baseUrl = 'http://export.arxiv.org/api/query'
        let searchParams: URLSearchParams

        ) {
            // Search by ID
            .j
            searchParams = new URLSearchParams({
                id_list: ids,
                max_
            })
        } else {
            // Search by query
            // Remove problematic characters that can cause search issues
            .
            searchParams = new URLSearchParams({
                search_query: `all:${cleanedQuery}`,
                max_,
                sortBy: 'relevance',
                sortOrder: 'descending'
            })
        }

        }`
        th

        
         {
            th
        }

        
        
    }

    p: Promise<string> {
        // Extract clean arxiv ID from full URL if needed
        .
        const pdfUrl = `https://arxiv.org/pdf/${cleanId}.pdf`

        th

        
         {
            th
        }

        // Get PDF buffer and create blob
        
        

        // U
        const loader = new PDFLoader(blob, {
            splitPages: false,
            p =>
                // @ts-ignore
                th : 
        })

        
         => .j
    }

    /** @ignore */
    a: Promise<string> {
        const { query } = arg

         {
            th
        }

        try {
            

             {
                return 'No good Arxiv Result was found'
            }

             {
                // Retu
                 => {
                    .t.[0] : 'Unknown'
                    }\nSummary: ${
                        result.summary
                    }`
                })

                
                 : fullText
            } else {
                // Download PDFs and extract full content
                const docs: string[] = []

                f {
                    try {
                        th

                        // Download and extract PDF content
                        

                        .t.[0] : 'Unknown'

                        // Format with metadata and full content
                        const docContent = `Published: ${publishedDate}\nTitle: ${result.title}\nAuthors: ${result.authors.join(
                            ', '
                        )}\nSummary: ${result.summary}\n\nFull Content:\n${fullText}`

                         : docContent

                        
                    }  {
                        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
                        

                         {
                            th
                        } else {
                            // Add error notice and continue with summary only
                            .t.[0] : 'Unknown'
                            const fallbackContent = `Published: ${publishedDate}\nTitle: ${result.title}\nAuthors: ${result.authors.join(
                                ', '
                            )}\nSummary: ${result.summary}\n\n[ERROR: Could not load full content - ${errorMessage}]`
                            
                        }
                    }
                }

                
            }
        }  {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'
            
            th
        }
    }
}
