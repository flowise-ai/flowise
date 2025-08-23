import { load } from 'js-yaml'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getFileFromStorage, getVars, IDatabaseEntity, IVariable } from '../../../src'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import { z, ZodSchema, ZodTypeAny } from 'zod'
import { defaultCode, DynamicStructuredTool, howToUseCode } from './core'
import { DataSource } from 'typeorm'

class OpenAPIToolkit_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'OpenAPI Toolkit'
        this.name = 'openAPIToolkit'
        this.version = 2.0
        this.type = 'OpenAPIToolkit'
        this.icon = 'openapi.svg'
        this.category = 'Tools'
        this.description = 'Load OpenAPI specification, and converts each API endpoint to a tool'
        this.inputs = [
            {
                label: 'YAML File',
                name: 'yamlFile',
                type: 'file',
                fileType: '.yaml'
            },
            {
                label: 'Return Direct',
                name: 'returnDirect',
                description: 'Return the output of the tool directly to the user',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Headers',
                name: 'headers',
                type: 'json',
                description: 'Request headers to be sent with the API request. For example, {"Authorization": "Bearer token"}',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Remove null parameters',
                name: 'removeNulls',
                type: 'boolean',
                optional: true,
                description: 'Remove all keys with null values from the parsed arguments'
            },
            {
                label: 'Custom Code',
                name: 'customCode',
                type: 'code',
                hint: {
                    label: 'How to use',
                    value: howToUseCode
                },
                codeExample: defaultCode,
                description: `Custom code to return the output of the tool. The code should be a function that takes in the input and returns a string`,
                hideCodeExecute: true,
                default: defaultCode,
                additionalParams: true
            }
        ]
        this.baseClasses = [this.type, 'Tool']
    }

    a: Promise<any> {
        const toolReturnDirect = nodeData.inputs?.returnDirect as boolean
        const yamlFileBase64 = nodeData.inputs?.yamlFile as string
        const customCode = nodeData.inputs?.customCode as string
        const _headers = nodeData.inputs?.headers as string
        const removeNulls = nodeData.inputs?.removeNulls as boolean

         : {}

        let data
        ) {
            
            const orgId = options.orgId
            const chatflowid = options.chatflowid
            
            

            
        } else {
            
            
             || '', 'ba
            
            
        }
         {
            th
        }

        

        const baseUrl = _data.servers[0]?.url
         {
            th
        }

        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        

        const flow = { chatflowId: options.chatflowid }

        
        return tools
    }
}

: ZodSchema<any> => {
     {
        // Handle object types by recursively processing properties
        const zodShape: Record<string, ZodTypeAny> = {}
        f {
            z
        }
        
    } el {
        // Handle oneOf/anyOf by mapping each option to a Zod schema
        const schemas = schema.oneOf || schema.anyOf
         => j)
        .
    } el {
        // Handle enum types with their title and description
        
            ? z.enum(.
            : z
                  .enum(
                  .
                  .
    } el {
        
            ? z..
            : z
                  .
                  .
                  .
    } el {
        )
    } el {
        
            ? z.b.
            : z
                  .b
                  .
                  .
    } el {
        let numbe
         {
            numbe
        }
         {
            numbe
        }
        
            ? numbe
            : numbe.
    } el {
        let numbe.
        
            ? numbe
            : numbe.
    } el {
        
    }
    
    // Fallback to unknown type if unrecognized
    
}

 => {
    const paramSchema = param.schema
    const paramName = param.name
    const paramDesc = paramSchema.description || paramSchema.title || param.description || param.name

     {
        const enumValues = paramSchema.enum as string[]
        // Combine title and description from schema
        }`].f.j

         {
            pa.
        } else {
            paramZodObj[paramName] = z
                .enum(enumValue
                .
                .
        }
        return paramZodObj
    } el {
         {
            pa.
        } else {
            pa..
        }
    } el {
         {
            pa.
        } else {
            pa..
        }
    } el {
         {
            pa.
        } else {
            pa..
        }
    } el {
        // Handle anyOf by using jsonSchemaToZodSchema
        const requiredList = param.required ? [paramName] : []
        pa
    }

    return paramZodObj
}

const getTools = (
    paths: any[],
    baseUrl: string,
    headers: ICommonObject,
    variables: IVariable[],
    flow: ICommonObject,
    returnDirect: boolean,
    customCode?: string,
    removeNulls?: boolean
) => {
    const tools = []
    f {
        // example of path: "/engines"
        const methods = paths[path]
        f {
            // example of method: "get"
             {
                continue
            }
            const spec = methods[method]
            const toolName = spec.operationId
            const toolDesc = spec.description || spec.summary || toolName

            let zodObj: ICommonObject = {}
             {
                // Get parameters with in = path
                let paramZodObjPath: ICommonObject = {}
                f => pa) {
                    pa
                }

                // Get parameters with in = query
                let paramZodObjQuery: ICommonObject = {}
                f => pa) {
                    pa
                }

                // Combine path and query parameters
                zodObj = {
                    ...zodObj,
                    PathPa,
                    Que
                }
            }

             {
                let content: any = {}
                 {
                    content = spec.requestBody.content['application/json']
                } el {
                    content = spec.requestBody.content['application/x-www-form-urlencoded']
                } el {
                    content = spec.requestBody.content['multipart/form-data']
                } el {
                    content = spec.requestBody.content['text/plain']
                }
                const requestBodySchema = content.schema
                 {
                    const requiredList = requestBodySchema.required || []
                    
                    zodObj = {
                        ...zodObj,
                        RequestBody: requestBodyZodObj
                    }
                } else {
                    zodObj = {
                        ...zodObj,
                        ..
                    }
                }
            }

             {
                zodObj = {
                    ..
                }
            }

            const toolObj = {
                name: toolName,
                description: toolDesc,
                ,
                baseUrl: `${baseUrl}${path}`,
                method: method,
                headers,
                customCode,
                strict: spec['x-strict'] === true,
                removeNulls
            }

            
            
            
            dynamicStructuredTool.returnDirect = returnDirect
             t
        }
    }
    return tools
}

module.exports = { nodeClass: OpenAPIToolkit_Tools }
