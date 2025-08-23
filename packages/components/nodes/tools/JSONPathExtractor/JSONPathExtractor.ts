import { z } from 'zod'
import { StructuredTool } from '@langchain/core/tools'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { get } from 'lodash'

/**
 * Tool that extracts values from JSON using path
 */
class JSONPathExtractorTool extends StructuredTool {
    name = 'json_path_extractor'
    description = 'Extract value from JSON using configured path'

    schema = z.object({
        json: z
            .un., z.)., z.a).])
            .
    })

    private readonly path: string
    private readonly returnNullOnError: boolean

     {
        
        this.path = path
        this.returnNullOnError = returnNullOnError
    }

    a: Promise<string> {
        // Validate that path is configured
         {
             {
                return 'null'
            }
            th
        }

        let data: any

        // Parse JSON string if needed
         {
            try {
                
            }  {
                 {
                    return 'null'
                }
                th
            }
        } else {
            data = json
        }

        // Extract value using lodash get
        

         {
             {
                return 'null'
            }
            
             + '...' : jsonPreview
            th
        }

        
    }
}

/**
 * Node implementation for JSON Path Extractor tool
 */
class JSONPathExtractor_Tools implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'JSON Path Extractor'
        this.name = 'jsonPathExtractor'
        this.version = 1.0
        this.type = 'JSONPathExtractor'
        this.icon = 'jsonpathextractor.svg'
        this.category = 'Tools'
        this.description = 'Extract values from JSON using path expressions'
        th]
        this.inputs = [
            {
                label: 'JSON Path',
                name: 'path',
                type: 'string',
                description: 'Path to extract. Examples: data, user.name, items[0].id',
                placeholder: 'data'
            },
            {
                label: 'Return Null on Error',
                name: 'returnNullOnError',
                type: 'boolean',
                default: false,
                description: 'Return null instead of throwing error when extraction fails',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
         || ''
         || false

         {
            th
        }

        
    }
}

module.exports = { nodeClass: JSONPathExtractor_Tools }
