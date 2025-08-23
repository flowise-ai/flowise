import { z } from 'zod'
import { RunnableConfig } from '@langchain/core/runnables'
import { StructuredTool, ToolParams } from '@langchain/core/tools'
import { CallbackManagerForToolRun, Callbacks, CallbackManager, parseCallbackConfigArg } from '@langchain/core/callbacks/manager'
import { executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ICommonObject } from '../../../src/Interface'

class ToolInputParsingException extends Error {
    output?: string

     {
        
        this.output = output
    }
}

export interface BaseDynamicToolInput extends ToolParams {
    name: string
    description: string
    code: string
    returnDirect?: boolean
}

export interface DynamicStructuredToolInput<
    // eslint-disable-next-line
    T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>
> extends BaseDynamicToolInput {
    fun => Promise<string>
    schema: T
}

export class DynamicStructuredTool<
    // eslint-disable-next-line
    T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>
> extends StructuredTool {
    name: string

    description: string

    code: string

    func: DynamicStructuredToolInput['func']

    // @ts-ignore
    schema: T
    private variables: any[]
    private flowObj: any

     {
        
        this.name = fields.name
        this.description = fields.description
        this.code = fields.code
        this.func = fields.func
        this.returnDirect = fields.returnDirect ?? this.returnDirect
        this.schema = fields.schema
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
        // Create additional sandbox variables for tool arguments
        const additionalSandbox: ICommonObject = {}

        .length) {
            f {
                additionalSandbox[`$${item}`] = arg[item]
            }
        }

        // Prepare flow object for sandbox
        const flow = this.flowObj ? { ...this.flowObj, ...flowConfig } : {}

        

        const response = await executeJavaScriptCode(this.code, sandbox, {
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
}
