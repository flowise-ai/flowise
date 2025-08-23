import { z } from 'zod'
import { DynamicStructuredTool } from '../OpenAPIToolkit/core'
import { secureFetch } from '../../../src/httpSecurity'

export const desc = `Use this when you want to execute a POST request to create or update a resource.`

export interface Headers {
    [key: string]: string
}

export interface Body {
    [key: string]: any
}

export interface RequestParameters {
    headers?: Headers
    body?: Body
    url?: string
    description?: string
    name?: string
    bodySchema?: string
    maxOutputLength?: number
}

// Base schema for POST request
 => {
    // If bodySchema is provided, parse it and add dynamic body params
     {
        try {
            
            const bodyParamsObject: Record<string, z.ZodTypeAny> = {}

            Obje.f => {
                let z

                // Handle different types
                 {
                    z
                } el {
                    z
                } el {
                    z)
                } el {
                    z)
                }

                // Add description
                 {
                    z
                }

                // Make optional if not required
                 {
                    z
                }

                bodyParamsObject[key] = zodType
            })

            .length > 0) {
                return z.object({
                    b.
                })
            }
        }  {
            
        }
    }

    // Fallback to generic body
    return z.object({
        b)..
    })
}

export class RequestsPostTool extends DynamicStructuredTool {
    url = ''
    maxOutputLength = Infinity
    headers = {}
    body = {}
    bodySchema?: string

     {
        

        const toolInput = {
            name: args?.name || 'requests_post',
            description: args?.description || desc,
            schema: schema,
            baseUrl: '',
            method: 'POST',
            headers: args?.headers || {}
        }
        
        this.url = args?.url ?? this.url
        this.headers = args?.headers ?? this.headers
        this.body = args?.body ?? this.body
        this.maxOutputLength = args?.maxOutputLength ?? this.maxOutputLength
        this.bodySchema = args?.bodySchema
    }

    /** @ignore */
    a: Promise<string> {
        const params = { ...arg }

        try {
            const inputUrl = this.url
             {
                th
            }

            let inputBody = {
                ...this.body
            }

            .length > 0) {
                inputBody = {
                    ...inputBody,
                    ...params.body
                }
            }

            const requestHeaders = {
                'Content-Type': 'application/json',
                ...(pa,
                ...this.headers
            }

            const res = await secureFetch(inputUrl, {
                method: 'POST',
                headers: requestHeaders,
                b
            })

             {
                th
            }

            
            
        }  {
            th
        }
    }
}
