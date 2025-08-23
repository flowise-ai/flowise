import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, stripHTMLFromToolInput } from '../../../src/utils'
import { desc, RequestParameters, RequestsGetTool } from './core'

const codeExample = `{
    "id": {
        "type": "string",
        "required": true,
        "in": "path",
        "description": "ID of the item to get. /:id"
    },
    "limit": {
        "type": "string",
        "in": "query",
        "description": "Limit the number of items to get. ?limit=10"
    }
}`

class RequestsGet_Tools implements INode {
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
        this.label = 'Requests Get'
        this.name = 'requestsGet'
        this.version = 2.0
        this.type = 'RequestsGet'
        this.icon = 'get.png'
        this.category = 'Tools'
        this.description = 'Execute HTTP GET requests'
        th, 'Tool']
        this.inputs = [
            {
                label: 'URL',
                name: 'requestsGetUrl',
                type: 'string',
                acceptVariable: true
            },
            {
                label: 'Name',
                name: 'requestsGetName',
                type: 'string',
                default: 'requests_get',
                description: 'Name of the tool',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Description',
                name: 'requestsGetDescription',
                type: 'string',
                rows: 4,
                default: desc,
                description: 'Describe to LLM when it should use this tool',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Headers',
                name: 'requestsGetHeaders',
                type: 'string',
                rows: 4,
                acceptVariable: true,
                additionalParams: true,
                optional: true,
                placeholder: `{
    "Authorization": "Bearer <token>"
}`
            },
            {
                label: 'Query Params Schema',
                name: 'requestsGetQueryParamsSchema',
                type: 'code',
                description: 'Description of the available query params to enable LLM to figure out which query params to use',
                placeholder: `{
    "id": {
        "type": "string",
        "required": true,
        "in": "path",
        "description": "ID of the item to get. /:id"
    },
    "limit": {
        "type": "string",
        "in": "query",
        "description": "Limit the number of items to get. ?limit=10"
    }
}`,
                optional: true,
                hideCodeExecute: true,
                additionalParams: true,
                codeExample: codeExample
            },
            {
                label: 'Max Output Length',
                name: 'requestsGetMaxOutputLength',
                type: 'number',
                description: 'Max length of the output. Remove this if you want to return the entire response',
                default: '2000',
                step: 1,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
         || (n
         || (n
         || (n
         || (n
        const queryParamsSchema =
            (n || (n
        const maxOutputLength = nodeData.inputs?.requestsGetMaxOutputLength as string

        const obj: RequestParameters = {}
         
         obj.description = description
        
            obj.name = name
                .t
                .
                .
         obj.queryParamsSchema = queryParamsSchema
         
         {
            )
            obj.headers = parsedHeaders
        }

        
    }
}

module.exports = { nodeClass: RequestsGet_Tools }
