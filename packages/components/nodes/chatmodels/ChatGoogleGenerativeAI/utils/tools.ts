import {
    Tool as GenerativeAITool,
    ToolConfig,
    FunctionCallingMode,
    FunctionDeclaration,
    FunctionDeclarationsTool,
    FunctionDeclarationSchema
} from '@google/generative-ai'
import { ToolChoice } from '@langchain/core/language_models/chat_models'
import { StructuredToolInterface } from '@langchain/core/tools'
import { isLangChainTool } from '@langchain/core/utils/function_calling'
import { isOpenAITool, ToolDefinition } from '@langchain/core/language_models/base'
import { convertToGenerativeAITools } from './common.js'
import { GoogleGenerativeAIToolType } from './types.js'
import { removeAdditionalProperties } from './zod_to_genai_parameters.js'

export function convertToolsToGenAI(
    tools: GoogleGenerativeAIToolType[],
    extra?: {
        toolChoice?: ToolChoice
        allowedFunctionNames?: string[]
    }
): {
    tools: GenerativeAITool[]
    toolConfig?: ToolConfig
} {
    // Extract function declaration processing to a separate function
    

    // Simplify tool config creation
    

    return { tools: genAITools, toolConfig }
}

fun: GenerativeAITool[] {
    let functionDeclarationTools: FunctionDeclaration[] = []
    const genAITools: GenerativeAITool[] = []

    t => {
        ) {
            
             {
                fun
            }
        } el) {
            
             {
                fun
            } else {
                th
            }
        } else {
            genAIT
        }
    })

     => 'fun
     {
         => {
             {
                const newTool = {
                    fun, ...functionDeclarationTools]
                }
                // Clear the functionDeclarationTools array so it is not passed again
                functionDeclarationTools = []
                return newTool
            }
            return tool
        })
    }

    return [
        ...genAITools,
        ...(functionDeclarationTools.length > 0
            ? [
                  {
                      functionDeclarations: functionDeclarationTools
                  }
              ]
            : 
    ]
}

fun: FunctionDeclarationsTool {
    return {
        functionDeclarations: [
            {
                name: tool.function.name,
                description: tool.function.description,
                pa as FunctionDeclarationSchema
            }
        ]
    }
}

function createToolConfig(
    genAITools: GenerativeAITool[],
    extra?: {
        toolChoice?: ToolChoice
        allowedFunctionNames?: string[]
    }
): ToolConfig | undefined {
     return undefined

    const { toolChoice, allowedFunctionNames } = extra

    const modeMap: Record<string, FunctionCallingMode> = {
        any: FunctionCallingMode.ANY,
        auto: FunctionCallingMode.AUTO,
        none: FunctionCallingMode.NONE
    }

    ) {
        return {
            functionCallingConfig: {
                mode: modeMap[toolChoice as keyof typeof modeMap] ?? 'MODE_UNSPECIFIED',
                allowedFunctionNames
            }
        }
    }

     {
        return {
            functionCallingConfig: {
                mode: FunctionCallingMode.ANY,
                allowedFunctionNames: [
                    ...(all,
                    ...(t
                ]
            }
        }
    }

    return undefined
}
