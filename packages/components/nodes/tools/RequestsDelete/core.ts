import { z } from 'zod'
import { DynamicStructuredTool } from '../OpenAPIToolkit/core'
import { secureFetch } from '../../../src/httpSecurity'

export const desc = `Use this when you need to execute a DELETE request to remove data from a website.`

export interface Headers {
    [key: string]: string
}

export interface RequestParameters {
    headers?: Headers
    url?: string
    name?: string
    queryParamsSchema?: string
    description?: string
    maxOutputLength?: number
}

// Base schema for DELETE request
 => {
    // If queryParamsSchema is provided, parse it and add dynamic query params
     {
        try {
            
            const queryParamsObject: Record<string, z.ZodTypeAny> = {}

            Obje.f => {
                let z

                // Handle different types
                 {
                    z.t => Numbe)
                } el {
                    z.t => val === 't
                }

                // Add description
                 {
                    z
                }

                // Make optional if not required
                 {
                    z
                }

                queryParamsObject[key] = zodType
            })

            .length > 0) {
                return z.object({
                    que..
                })
            }
        }  {
            
        }
    }

    // Fallback to generic query params
    return z.object({
        que)..
    })
}

export class RequestsDeleteTool extends DynamicStructuredTool {
    url = ''
    maxOutputLength = Infinity
    headers = {}
    queryParamsSchema?: string

     {
        

        const toolInput = {
            name: args?.name || 'requests_delete',
            description: args?.description || desc,
            schema: schema,
            baseUrl: '',
            method: 'DELETE',
            headers: args?.headers || {}
        }
        
        this.url = args?.url ?? this.url
        this.headers = args?.headers ?? this.headers
        this.maxOutputLength = args?.maxOutputLength ?? this.maxOutputLength
        this.queryParamsSchema = args?.queryParamsSchema
    }

    /** @ignore */
    a: Promise<string> {
        const params = { ...arg }

        const inputUrl = this.url
         {
            th
        }

        const requestHeaders = {
            ...(pa,
            ...this.headers
        }

        // Process URL and query parameters based on schema
        let finalUrl = inputUrl
        const queryParams: Record<string, string> = {}

        .length > 0) {
            try {
                
                const pathParams: Array<{ key: string; value: string }> = []

                Obje.f => {
                    const paramConfig = parsedSchema[key]
                     {
                         {
                            // Check if URL contains path parameter placeholder
                            
                            ) {
                                // Repla
                                f))
                            } else {
                                // Collect path parameters to append to URL
                                pathPa })
                            }
                        } el {
                            // Add to query parameters
                            que
                        }
                    }
                })

                // Append path parameters to URL if any exist
                 {
                    let urlPath = finalUrl
                    // Remove trailing slash if present
                    ) {
                        u
                    }
                    // Append each path parameter
                    pathPa => {
                        u}`
                    })
                    finalUrl = urlPath
                }

                // Add query parameters to URL if any exist
                .length > 0) {
                    
                    Obje.f => {
                        u
                    })
                    f
                }
            }  {
                
            }
        } el.length > 0) {
            // Fallback: treat all parameters as query parameters if no schema is defined
            
            Obje.f => {
                u)
            })
            f
        }

        try {
            const res = await secureFetch(finalUrl, {
                method: 'DELETE',
                headers: requestHeaders
            })

             {
                th
            }

            
            
        }  {
            th
        }
    }
}
