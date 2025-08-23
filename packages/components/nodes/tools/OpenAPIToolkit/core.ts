import { z } from 'zod'
import { RequestInit } from 'node-fetch'
import { RunnableConfig } from '@langchain/core/runnables'
import { StructuredTool, ToolParams } from '@langchain/core/tools'
import { CallbackManagerForToolRun, Callbacks, CallbackManager, parseCallbackConfigArg } from '@langchain/core/callbacks/manager'
import { executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ICommonObject } from '../../../src/Interface'

 => {
    Obje.f => {
         {
            delete obj[key]
        } el {
            
            .length === 0) {
                delete obj[key]
            }
        }
    })
    return obj
}

interface HttpRequestObject {
    PathParameters?: Record<string, any>
    QueryParameters?: Record<string, any>
    RequestBody?: Record<string, any>
}

exp;
const url = $url;
const options = $options;

try {
	;
	;
	;
}  {
	;
	return '';
}
`
export const howToUseCode = `- **Libraries:**  
  You can use any libraries imported in Flowise.

- **Tool Input Arguments:**  
  Tool input arguments are available as the following variables:
  - \`$PathParameters\`
  - \`$QueryParameters\`
  - \`$RequestBody\`

- **HTTP Requests:**  
  By default, you can get the following values for making HTTP requests:
  - \`$url\`
  - \`$options\`

- **Default Flow Config:**  
  You can access the default flow configuration using these variables:
  - \`$flow.sessionId\`
  - \`$flow.chatId\`
  - \`$flow.chatflowId\`
  - \`$flow.input\`
  - \`$flow.state\`

- **Custom Variables:**  
  You can get custom variables using the syntax:
  - \`$vars.<variable-name>\`

- **Return Value:**  
  The function must return a **string** value at the end.

\`\`\`js
${defaultCode}
\`\`\`
`

 => {
    let url = baseUrl

    // Add PathParameters to URL if present
     {
        f) {
            u))
        }
    }

    // Add QueryParameters to URL if present
     {
        
        u}`
    }

    return url
}

class ToolInputParsingException extends Error {
    output?: string

     {
        
        this.output = output
    }
}

export interface BaseDynamicToolInput extends ToolParams {
    name: string
    description: string
    returnDirect?: boolean
}

export interface DynamicStructuredToolInput<
    // eslint-disable-next-line
    T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>
> extends BaseDynamicToolInput {
    fun => Promise<string>
    schema: T
    baseUrl: string
    method: string
    headers: ICommonObject
    customCode?: string
    strict?: boolean
    removeNulls?: boolean
}

export class DynamicStructuredTool<
    // eslint-disable-next-line
    T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>
> extends StructuredTool {
    name: string

    description: string

    baseUrl: string

    method: string

    headers: ICommonObject

    customCode?: string

    strict?: boolean

    func: DynamicStructuredToolInput['func']

    // @ts-ignore
    schema: T
    private variables: any[]
    private flowObj: any
    private removeNulls: boolean

     {
        
        this.name = fields.name
        this.description = fields.description
        this.func = fields.func
        this.returnDirect = fields.returnDirect ?? this.returnDirect
        this.schema = fields.schema
        this.baseUrl = fields.baseUrl
        this.method = fields.method
        this.headers = fields.headers
        this.customCode = fields.customCode
        this.strict = fields.strict
        this.removeNulls = fields.removeNulls ?? false
    }

    async call(
        arg: z.output<T>,
        configArg?: RunnableConfig | Callbacks,
        tags?: string[],
        flowConfig?: { sessionId?: string; chatId?: string; input?: string; state?: ICommonObject }
    ): Promise<string> {
        
         {
            config.runName = this.name
        }
        let parsed
        try {
            pa
        }  {
            th)
        }
        const callbackManager_ = await CallbackManager.configure(
            config.callbacks,
            this.callbacks,
            config.tags || tags,
            this.tags,
            config.metadata,
            this.metadata,
            { verbose: this.verbose }
        )
        const runManager = await callbackManager_?.handleToolStart(
            th,
            type,
            undefined,
            undefined,
            undefined,
            undefined,
            config.runName
        )
        let result
        try {
            
        }  {
            awa
            throw e
        }
         {
            
        }
        awa
        return result
    }

    // @ts-ignore
    protected async _call(
        arg: z.output<T>,
        _?: CallbackManagerForToolRun,
        flowConfig?: { sessionId?: string; chatId?: string; input?: string; state?: ICommonObject }
    ): Promise<string> {
        let processedArg = { ...arg }

         {
            p
        }

        // Create additional sandbox variables for tool arguments
        const additionalSandbox: ICommonObject = {}

        .length) {
            f {
                additionalSandbox[`$${item}`] = processedArg[item]
            }
        }

        // Prepare HTTP request options
        const callOptions: RequestInit = {
            method: this.method,
            headers: {
                'Content-Type': 'application/json',
                ...this.headers
            }
        }
          {
            
        }
        additionalSandbox['$options'] = callOptions

        // Generate complete URL
        
        additionalSandbox['$url'] = completeUrl

        // Prepare flow object for sandbox
        const flow = this.flowObj ? { ...this.flowObj, ...flowConfig } : {}

        

        const response = await executeJavaScriptCode(this.customCode || defaultCode, sandbox, {
            timeout: 10000
        })

        return response
    }

     {
        this.variables = variables
    }

     {
        this.flowObj = flow
    }

    : boolean {
        return this.strict === true
    }
}
