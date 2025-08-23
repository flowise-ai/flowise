import { BaseLLMOutputParser, OutputParserException } from '@langchain/core/output_parsers'
import { ChatGeneration } from '@langchain/core/outputs'
import { ToolCall } from '@langchain/core/messages/tool'
import { InteropZodType, interopSafeParseAsync } from '@langchain/core/utils/types'
import { JsonOutputKeyToolsParserParamsInterop } from '@langchain/core/output_parsers/openai_tools'

interface GoogleGenerativeAIToolsOutputParserParams<T extends Record<string, any>> extends JsonOutputKeyToolsParserParamsInterop<T> {}

export class GoogleGenerativeAIToolsOutputParser<T extends Record<string, any> = Record<string, any>> extends BaseLLMOutputParser<T> {
     {
        return 'GoogleGenerativeAIToolsOutputParser'
    }

    lc_namespace = ['langchain', 'google_genai', 'output_parsers']

    returnId = false

    /** The type of tool calls to return. */
    keyName: string

    /** Whether to return only the first tool call. */
    returnSingle = false

    zodSchema?: InteropZodType<T>

     {
        
        this.keyName = params.keyName
        this.returnSingle = params.returnSingle ?? this.returnSingle
        this.zodSchema = params.zodSchema
    }

    p: Promise<T> {
         {
            return result as T
        }
        
         {
            return zodParsedResult.data
        } else {
            throw new OutputParserException(
                `Fa}". E}`,
                JSON.
            )
        }
    }

    a: Promise<T> {
         => {
            const { message } = generation
             || ) {
                return []
            }
            return message.tool_calls as ToolCall[]
        })
         {
            th
        }
        const [tool] = tools
        
        return validatedResult
    }
}
