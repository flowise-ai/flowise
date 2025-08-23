import { BaseMessage, MessageContentImageUrl } from '@langchain/core/messages'
import { getImageUploads } from '../../src/multiModalUtils'
import { getFileFromStorage } from '../../src/storageUtils'
import { ICommonObject, IFileUpload } from '../../src/Interface'
import { BaseMessageLike } from '@langchain/core/messages'
import { IFlowState } from './Interface.Agentflow'
import { handleEscapeCharacters, mapMimeTypeToInputField } from '../../src/utils'

export const addImagesToMessages = async (
    options: ICommonObject,
    allowImageUploads: boolean,
    imageResolution?: 'auto' | 'low' | 'high'
): Promise<MessageContentImageUrl[]> => {
    const imageContent: MessageContentImageUrl[] = []

     {
        
        f {
            let bf = upload.data
             {
                
                // as the image is stored in the server, read the file and convert it to base64
                bf = '

                imageContent.push({
                    type: 'image_url',
                    image_url: {
                        url: bf,
                        detail: imageResolution ?? 'low'
                    }
                })
            } el {
                imageContent.push({
                    type: 'image_url',
                    image_url: {
                        url: bf,
                        detail: imageResolution ?? 'low'
                    }
                })
            }
        }
    }

    return imageContent
}

/**
 * Process message array to replace stored file references with base64 image data
 * @param messages Array of messages that may contain image references
 * @param options Common options object containing chatflowid and chatId
 * @returns Object containing updated messages array and transformed original messages
 */
export const processMessagesWithImages = async (
    messages: BaseMessageLike[],
    options: ICommonObject
): Promise<{
    updatedMessages: BaseMessageLike[]
    transformedMessages: BaseMessageLike[]
}> => {
     {
        return {
            updatedMessages: messages,
            transformedMessages: []
        }
    }

    // Create a deep copy of the messages to avoid mutating the original
    )
    // Track which messages were transformed
    const transformedMessages: BaseMessageLike[] = []

    // Scan through all messages looking for stored-file references
    f {
        const message = updatedMessages[i]

        // Skip non-user messages or messages without content
         {
            continue
        }

        // Han
        ) {
            const imageContents: MessageContentImageUrl[] = []
            let hasImageReferences = false

            // Process each content item
            f {
                // Look for stored-file type items
                ) {
                    hasImageReferences = true
                    try {
                        // Get file contents from storage
                        

                        // Create base64 data URL
                        

                        // Add to image content array
                        imageContents.push({
                            type: 'image_url',
                            image_url: {
                                url: base64Data,
                                detail: item.imageResolution ?? 'low'
                            }
                        })
                    }  {
                        
                    }
                }
            }

            // Replace the content with the image content array
             {
                // Store the original message before modifying
                 {
                    t))
                }
                updatedMessages[i].content = imageContents
            }
        }
    }

    return {
        updatedMessages,
        transformedMessages
    }
}

/**
 * Replace base64 image data in messages with file references
 * @param messages Array of messages that may contain base64 image data
 * @param uniqueImageMessages Array of messages with file references for new images
 * @param pastImageMessages Array of messages with file references for previous images
 * @returns Updated messages array with file references instead of base64 data
 */
export const replaceBase64ImagesWithFileReferences = (
    messages: BaseMessageLike[],
    uniqueImageMessages: BaseMessageLike[] = [],
    pastImageMessages: BaseMessageLike[] = []
): BaseMessageLike[] => {
    // Create a deep copy to avoid mutating the original
    )

    // Track positions in replacement arrays
    let pastMessageIndex = 0
    let pastContentIndex = 0
    let uniqueMessageIndex = 0
    let uniqueContentIndex = 0

    f {
        const message = updatedMessages[i]
        ) {
            f {
                const item = message.content[j]
                 {
                    // Try past images first
                    let replacement = null

                     {
                        const pastMessage = pastImageMessages[pastMessageIndex] as BaseMessage | undefined
                        ) {
                             {
                                replacement = pastMessage.content[pastContentIndex]
                                pastContentIndex++

                                // Move to next message if we've used all content in current one
                                 {
                                    pastMessageIndex++
                                    pastContentIndex = 0
                                }
                            } else {
                                // Current message has no more content, move to next
                                pastMessageIndex++
                                pastContentIndex = 0

                                // Try again with the next message
                                 {
                                    const nextPastMessage = pastImageMessages[pastMessageIndex] as BaseMessage | undefined
                                     && nextPa {
                                        replacement = nextPastMessage.content[0]
                                        pastContentIndex = 1
                                    }
                                }
                            }
                        }
                    }

                    // Try unique images if no past image replacement found
                     {
                        const uniqueMessage = uniqueImageMessages[uniqueMessageIndex] as BaseMessage | undefined
                        ) {
                             {
                                replacement = uniqueMessage.content[uniqueContentIndex]
                                uniqueContentIndex++

                                // Move to next message if we've used all content in current one
                                 {
                                    uniqueMessageIndex++
                                    uniqueContentIndex = 0
                                }
                            } else {
                                // Current message has no more content, move to next
                                uniqueMessageIndex++
                                uniqueContentIndex = 0

                                // Try again with the next message
                                 {
                                    const nextUniqueMessage = uniqueImageMessages[uniqueMessageIndex] as BaseMessage | undefined
                                    if (
                                        nextUniqueMessage &&
                                        A &&
                                        nextUniqueMessage.content.length > 0
                                    ) {
                                        replacement = nextUniqueMessage.content[0]
                                        uniqueContentIndex = 1
                                    }
                                }
                            }
                        }
                    }

                    // Apply replacement if found
                     {
                        message.content[j] = {
                            ...replacement
                        }
                    }
                }
            }
        }
    }

    return updatedMessages
}

/**
 * Get unique image messages from uploads
 * @param options Common options object containing uploads
 * @param messages Array of messages to check for existing images
 * @param modelConfig Model configuration object containing allowImageUploads and imageResolution
 * @returns Object containing imageMessageWithFileRef and imageMessageWithBase64
 */
export const getUniqueImageMessages = async (
    options: ICommonObject,
    messages: BaseMessageLike[],
    modelConfig?: ICommonObject
): Promise<{ imageMessageWithFileRef: BaseMessageLike; imageMessageWithBase64: BaseMessageLike } | undefined> => {
     return undefined

    // Get images from uploads
    

    // Filter out images that are already in previous messages
     => {
        // Check if this image is already in any existing message
         => {
            // F
            ) {
                return msg.content.some(
                    ( =>
                        // Compare by image URL/content for image objects
                         === JSON.
                )
            }
            // For direct comparison of simple content
             === JSON.
        })
    })

     {
        return undefined
    }

    // Create messages with the original file references for storage/display
    const imageMessageWithFileRef = {
        role: 'user',
         => ({
            type: upload.type,
            name: upload.name,
            mime: upload.mime,
            imageResolution: modelConfig?.imageResolution
        }))
    }

    // Create messages with base64 data for the LLM
    const imageMessageWithBase64 = {
        role: 'user',
        content: uniqueImages
    }

    return {
        imageMessageWithFileRef,
        imageMessageWithBase64
    }
}

/**
 * Get past chat history image messages
 * @param pastChatHistory Array of past chat history messages
 * @param options Common options object
 * @returns Object containing updatedPastMessages and transformedPastMessages
 */
export const getPastChatHistoryImageMessages = async (
    pastChatHistory: BaseMessageLike[],
    options: ICommonObject
): Promise<{ updatedPastMessages: BaseMessageLike[]; transformedPastMessages: BaseMessageLike[] }> => {
    const chatHistory = []
    const transformedPastMessages = []

    f {
        const message = pastChatHistory[i] as BaseMessage & { role: string }
        const messageRole = message.role || 'user'
         {
            // example: [{"type":"stored-file","name":"0_DiXc4ZklSTo3M8J4.jpg","mime":"image/jpeg"}]
            const fileUploads = message.additional_kwargs.fileUploads
            const artifacts = message.additional_kwargs.artifacts
            const fileAnnotations = message.additional_kwargs.fileAnnotations
            const usedTools = message.additional_kwargs.usedTools
            try {
                let messageWithFileUploads = ''
                 : fileUploads
                const imageContents: MessageContentImageUrl[] = []
                f {
                    ) {
                        
                        // as the image is stored in the server, read the file and convert it to base64
                        

                        imageContents.push({
                            type: 'image_url',
                            image_url: {
                                url: bf
                            }
                        })
                    } el && upl {
                        imageContents.push({
                            type: 'image_url',
                            image_url: {
                                url: upload.data
                            }
                        })
                    } el {
                        
                        // @ts-ignore
                        
                        const nodeOptions = {
                            retrieveAttachmentChatId: true,
                            chatflowid: options.chatflowid,
                            chatId: options.chatId,
                            orgId: options.orgId
                        }
                        let fileInputFieldFromMimeType = 'txtFile'
                        f
                        const nodeData = {
                            inputs: {
                                }`
                            }
                        }
                        
                        me}</doc>\n\n`
                    }
                }
                const messageContent = messageWithFileUploads ? `${messageWithFileUploads}\n\n${message.content}` : message.content
                 && artifacts.length > 0
                 && fileAnnotations.length > 0
                 && usedTools.length > 0

                 {
                    const imageMessage: any = {
                        role: messageRole,
                        content: imageContents
                    }
                     {
                        imageMessage.additional_kwargs = {}
                         imageMessage.additional_kwargs.artifacts = artifacts
                         imageMessage.additional_kwargs.fileAnnotations = fileAnnotations
                         imageMessage.additional_kwargs.usedTools = usedTools
                    }
                    
                    transformedPastMessages.push({
                        role: messageRole,
                        .a]
                    })
                }

                const contentMessage: any = {
                    role: messageRole,
                    content: messageContent
                }
                 {
                    contentMessage.additional_kwargs = {}
                     contentMessage.additional_kwargs.artifacts = artifacts
                     contentMessage.additional_kwargs.fileAnnotations = fileAnnotations
                     contentMessage.additional_kwargs.usedTools = usedTools
                }
                
            }  {
                // failed to parse fileUploads, continue with text only
                 && artifacts.length > 0
                 && fileAnnotations.length > 0
                 && usedTools.length > 0

                const errorMessage: any = {
                    role: messageRole,
                    content: message.content
                }
                 {
                    errorMessage.additional_kwargs = {}
                     errorMessage.additional_kwargs.artifacts = artifacts
                     errorMessage.additional_kwargs.fileAnnotations = fileAnnotations
                     errorMessage.additional_kwargs.usedTools = usedTools
                }
                
            }
        } el {
            const hasArtifacts =
                message.additional_kwargs.artifacts &&
                A &&
                message.additional_kwargs.artifacts.length > 0
            const hasFileAnnotations =
                message.additional_kwargs.fileAnnotations &&
                A &&
                message.additional_kwargs.fileAnnotations.length > 0
            const hasUsedTools =
                message.additional_kwargs.usedTools &&
                A &&
                message.additional_kwargs.usedTools.length > 0

             {
                const messageAdditionalKwargs: any = {}
                 messageAdditionalKwargs.artifacts = message.additional_kwargs.artifacts
                 messageAdditionalKwargs.fileAnnotations = message.additional_kwargs.fileAnnotations
                 messageAdditionalKwargs.usedTools = message.additional_kwargs.usedTools

                chatHistory.push({
                    role: messageRole,
                    content: message.content,
                    additional_kwargs: messageAdditionalKwargs
                })
            } else {
                chatHistory.push({
                    role: messageRole,
                    content: message.content
                })
            }
        } else {
            chatHistory.push({
                role: messageRole,
                content: message.content
            })
        }
    }
    return {
        updatedPastMessages: chatHistory,
        transformedPastMessages
    }
}

/**
 * Updates the flow state with new values
 */
exp: ICommonObject => {
    let newFlowState: Record<string, any> = {}
    f {
        newFlowState[state.key] = state.value
    }

    return {
        ...state,
        ...newFlowState
    }
}
