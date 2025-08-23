import {
    EnhancedGenerateContentResponse,
    Content,
    Part,
    type FunctionDeclarationsTool as GoogleGenerativeAIFunctionDeclarationsTool,
    type FunctionDeclaration as GenerativeAIFunctionDeclaration,
    POSSIBLE_ROLES,
    FunctionCallPart,
    TextPart,
    FileDataPart,
    InlineDataPart
} from '@google/generative-ai'
import {
    AIMessage,
    AIMessageChunk,
    BaseMessage,
    ChatMessage,
    ToolMessage,
    ToolMessageChunk,
    MessageContent,
    MessageContentComplex,
    UsageMetadata,
    isAIMessage,
    isBaseMessage,
    isToolMessage,
    StandardContentBlockConverter,
    parseBase64DataUrl,
    convertToProviderContentBlock,
    isDataContentBlock
} from '@langchain/core/messages'
import { ChatGeneration, ChatGenerationChunk, ChatResult } from '@langchain/core/outputs'
import { isLangChainTool } from '@langchain/core/utils/function_calling'
import { isOpenAITool } from '@langchain/core/language_models/base'
import { ToolCallChunk } from '@langchain/core/messages/tool'
import { v4 as uuidv4 } from 'uuid'
import { jsonSchemaToGeminiParameters, schemaToGenerativeAIParameters } from './zod_to_genai_parameters.js'
import { GoogleGenerativeAIToolType } from './types.js'

exp {
    
    ) {
        return message.role
    }
     {
        return type
    }
    return message.name ?? type
}

/**
 * Maps a message type to a Google Generative AI chat author.
 * @param message The message to map.
 * @param model The model to use for mapping.
 * @returns The message type mapped to a Google Generative AI chat author.
 */
exp: (type[number] {
     {
        /**
         *  Note: Gemini currently is not supporting system messages
         *  we will convert them to human messages and merge with following
         * */
        case 'supervisor':
        case 'ai':
        case 'model': // getMessageAuthor returns message.name. code ex.: return message.name ?? type;
            return 'model'
        case 'system':
            return 'system'
        case 'human':
            return 'user'
        case 'tool':
        case 'function':
            return 'function'
        default:
            return 'user' // return user as default instead of throwing error
    }
}

fun: Part {
     {
        return {
            inlineData: {
                mimeType: content.mimeType,
                data: content.data
            }
        }
    }
     {
        return {
            fileData: {
                mimeType: content.mimeType,
                fileUri: content.fileUri
            }
        }
    }

    th
}

fun: string | undefined {
    return previousMessages
        .map((m => {
            ) {
                return msg.tool_calls ?? []
            }
            return []
        })
        .flat()
        .f => {
            return toolCall.id === message.tool_call_id
        })?.name
}

fun {
    const standardContentBlockConverter: StandardContentBlockConverter<{
        text: TextPart
        image: FileDataPart | InlineDataPart
        audio: FileDataPart | InlineDataPart
        file: FileDataPart | InlineDataPart | TextPart
    }> = {
        providerName: 'Google Gemini',

        f {
            return {
                text: block.text
            }
        },

        f: FileDataPart | InlineDataPart {
             {
                th
            }
             {
                
                 {
                    return {
                        inlineData: {
                            mimeType: data.mime_type,
                            data: data.data
                        }
                    }
                } else {
                    return {
                        fileData: {
                            mimeType: block.mime_type ?? '',
                            fileUri: block.url
                        }
                    }
                }
            }

             {
                return {
                    inlineData: {
                        mimeType: block.mime_type ?? '',
                        data: block.data
                    }
                }
            }

            th
        },

        f: FileDataPart | InlineDataPart {
             {
                th
            }
             {
                
                 {
                    return {
                        inlineData: {
                            mimeType: data.mime_type,
                            data: data.data
                        }
                    }
                } else {
                    return {
                        fileData: {
                            mimeType: block.mime_type ?? '',
                            fileUri: block.url
                        }
                    }
                }
            }

             {
                return {
                    inlineData: {
                        mimeType: block.mime_type ?? '',
                        data: block.data
                    }
                }
            }

            th
        },

        f: FileDataPart | InlineDataPart | TextPart {
             {
                th
            }
             {
                return {
                    text: block.text
                }
            }
             {
                
                 {
                    return {
                        inlineData: {
                            mimeType: data.mime_type,
                            data: data.data
                        }
                    }
                } else {
                    return {
                        fileData: {
                            mimeType: block.mime_type ?? '',
                            fileUri: block.url
                        }
                    }
                }
            }

             {
                return {
                    inlineData: {
                        mimeType: block.mime_type ?? '',
                        data: block.data
                    }
                }
            }
            th
        }
    }
    return standardContentBlockConverter
}

fun: Part | undefined {
    ) {
        )
    }

     {
        return { text: content.text }
    } el {
        return { executableCode: content.executableCode }
    } el {
        return { codeExecutionResult: content.codeExecutionResult }
    } el {
         {
            th
        }
        let source
         {
            source = content.image_url
        } el {
            source = content.image_url.url
        } else {
            th
        }
        
        ) {
            th
        }

        .
         {
            th
        }

        return {
            inlineData: {
                data,
                mimeType
            }
        }
    } el {
        
    } el {
        return {
            functionCall: {
                name: content.name,
                args: content.input
            }
        }
    } else if (
         &&
        // Ensure it's a single slash.
        .length === 2 &&
        'data' in content &&
        typeof content.data === 'string'
    ) {
        return {
            inlineData: {
                mimeType: content.type,
                data: content.data
            }
        }
    } el {
        // No action needed here — function calls will be added later from message.tool_calls
        return undefined
    } else {
         {
            th
        } else {
            th}`)
        }
    }
}

exp: Part[] {
    ) {
        
         {
            throw new Error(
                `Google requires a tool name for each tool call response, and we could not infer a called tool name for ToolMessage "${message.id}" from your passed messages. Please populate a "name" field on that ToolMessage explicitly.`
            )
        }

        
            ? (me => _).f => p  a
            : message.content

         {
            return [
                {
                    functionResponse: {
                        name: messageName,
                        // The API expects an object with an `error` field if the function call fails.
                        // `e, so we wrap `message.content` here
                        response: { error: { details: result } }
                    }
                }
            ]
        }

        return [
            {
                functionResponse: {
                    name: messageName,
                    // again, can't have a string or array value for `response`, so we wrap it as an object here
                    response: { result }
                }
            }
        ]
    }

    let functionCalls: FunctionCallPart[] = []
    const messageParts: Part[] = []

     {
        me
    }

    ) {
        messageParts.push(
            ...(me => _).f => p  a
        )
    }

     && me {
        fun => {
            return {
                functionCall: {
                    name: tc.name,
                    args: tc.args
                }
            }
        })
    }

    return [...messageParts, ...functionCalls]
}

export function convertBaseMessagesToContent(
    messages: BaseMessage[],
    isMultimodalModel: boolean,
    convertSystemMessageToHumanContent: boolean = false
) {
    return messages.reduce<{
        content: Content[]
        mergeWithPreviousContent: boolean
    }>(
        (a => {
            ) {
                th
            }
            
             {
                th
            }
            

            const prevContent = acc.content[acc.content.length]
             {
                th
            }

            )

             {
                const prevContent = acc.content[acc.content.length - 1]
                 {
                    th
                }
                p

                return {
                    mergeWithPreviousContent: false,
                    content: acc.content
                }
            }
            let actualRole = role
            ) {
                // GenerativeAI API will throw an error if the role is not "user" or "model."
                actualRole = 'user'
            }
            const content: Content = {
                role: actualRole,
                parts
            }
            return {
                mergeWithPreviousContent: author === 'system' && !convertSystemMessageToHumanContent,
                content: [...acc.content, content]
            }
        },
        { content: [], mergeWithPreviousContent: false }
    ).content
}

export function mapGenerateContentResultToChatResult(
    response: EnhancedGenerateContentResponse,
    extra?: {
        usageMetadata: UsageMetadata | undefined
    }
): ChatResult {
    // if rejected or error, return empty generations with reason in filters
     {
        return {
            generations: [],
            llmOutput: {
                filters: response.promptFeedback
            }
        }
    }

    
    const [candidate] = response.candidates
    const { content: candidateContent, ...generationInfo } = candidate
    let content: MessageContent | undefined

     &&  {
        content = candidateContent.parts[0].text
    } el &&  {
         => {
             {
                return {
                    type: 'text',
                    text: p.text
                }
            } el {
                return {
                    type: 'executableCode',
                    executableCode: p.executableCode
                }
            } el {
                return {
                    type: 'codeExecutionResult',
                    codeExecutionResult: p.codeExecutionResult
                }
            }
            return p
        })
    } else {
        // no content returned - likely due to abnormal stop reason, e.g. malformed function call
        content = []
    }

    let text = ''
     {
        text = content
    } el &&  {
         => 'text'  as { text: string } | undefined
        text = block?.text ?? text
    }

    const generation: ChatGeneration = {
        text,
        message: new AIMessage({
            content: content ?? '',
            t => {
                return {
                    ...fc,
                    type: 'tool_call',
                    
                }
            }),
            additional_kwargs: {
                ...generationInfo
            },
            usage_metadata: extra?.usageMetadata
        }),
        generationInfo
    }

    return {
        generations: [generation],
        llmOutput: {
            tokenUsage: {
                promptTokens: extra?.usageMetadata?.input_tokens,
                completionTokens: extra?.usageMetadata?.output_tokens,
                totalTokens: extra?.usageMetadata?.total_tokens
            }
        }
    }
}

export function convertResponseContentToChatGenerationChunk(
    response: EnhancedGenerateContentResponse,
    extra: {
        usageMetadata?: UsageMetadata | undefined
        index: number
    }
): ChatGenerationChunk | null {
     {
        return null
    }
    
    const [candidate] = response.candidates
    const { content: candidateContent, ...generationInfo } = candidate
    let content: MessageContent | undefined
    // Checks if some parts do not have text. If false, it means that the content is a string.
     &&  => 'text' ) {
         => p.text).j
    } el) {
         => {
             {
                return {
                    type: 'text',
                    text: p.text
                }
            } el {
                return {
                    type: 'executableCode',
                    executableCode: p.executableCode
                }
            } el {
                return {
                    type: 'codeExecutionResult',
                    codeExecutionResult: p.codeExecutionResult
                }
            }
            return p
        })
    } else {
        // no content returned - likely due to abnormal stop reason, e.g. malformed function call
        content = []
    }

    let text = ''
     {
        text = content
    } el) {
         => 'text'  as { text: string } | undefined
        text = block?.text ?? ''
    }

    const toolCallChunks: ToolCallChunk[] = []
     {
        toolCallChunks.push(
            ...fun => ({
                ...fc,
                a,
                index: extra.index,
                type: 'tool_call_chunk' as const,
                
            }))
        )
    }

    return new ChatGenerationChunk({
        text,
        message: new AIMessageChunk({
            content: content || '',
            name: !candidateContent ? undefined : candidateContent.role,
            tool_call_chunks: toolCallChunks,
            // Each chunk can have unique "generationInfo", and merging strategy is unclear,
            // so leave blank for now.
            additional_kwargs: {},
            usage_metadata: extra.usageMetadata
        }),
        generationInfo
    })
}

exp: GoogleGenerativeAIFunctionDeclarationsTool[] {
     => 'fun)) {
        return tools as GoogleGenerativeAIFunctionDeclarationsTool[]
    }
    return [
        {
            fun: GenerativeAIFunctionDeclaration => {
                ) {
                    
                    .length === 0) {
                        return {
                            name: tool.name,
                            description: tool.description
                        }
                    }
                    return {
                        name: tool.name,
                        description: tool.description,
                        parameters: jsonSchema
                    }
                }
                ) {
                    return {
                        name: tool.function.name,
                        description: tool.function.description ?? `A function available to call.`,
                        pa
                    }
                }
                return tool as unknown as GenerativeAIFunctionDeclaration
            })
        }
    ]
}
