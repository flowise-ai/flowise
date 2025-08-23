import { StatusCodes } from 'http-status-codes'
import { INodeParams } from 'flowise-components'
import { ChatFlow } from '../database/entities/ChatFlow'
import { getRunningExpressApp } from '../utils/getRunningExpressApp'
import { IUploadFileSizeAndTypes, IReactFlowNode, IReactFlowEdge } from '../Interface'
import { InternalFlowiseError } from '../errors/internalFlowiseError'

type IUploadConfig = {
    isSpeechToTextEnabled: boolean
    isImageUploadAllowed: boolean
    isRAGFileUploadAllowed: boolean
    imgUploadSizeAndTypes: IUploadFileSizeAndTypes[]
    fileUploadSizeAndTypes: IUploadFileSizeAndTypes[]
}

/**
 * Method that checks if uploads are enabled in the chatflow
 * @param {string} chatflowid
 */
exp: Promise<IUploadConfig> => {
    
    .findOneBy({
        id: chatflowid
    })
     {
        th
    }

    
    const nodes: IReactFlowNode[] = flowObj.nodes
    const edges: IReactFlowEdge[] = flowObj.edges

    let isSpeechToTextEnabled = false
    let isImageUploadAllowed = false
    let isRAGFileUploadAllowed = false

    /*
     * Check for STT
     */
     {
        
        f {
             {
                const providerObj = speechToTextProviders[provider]
                 {
                    isSpeechToTextEnabled = true
                    break
                }
            }
        }
    }

    /*
     * Condition for isRAGFileUploadAllowed
     * 1.) vector store with fileUpload = true && connected to a document loader with fileType
     */
    const fileUploadSizeAndTypes: IUploadFileSizeAndTypes[] = []
    f {
         {
            // Get the connected document loader node fileTypes
            const sourceDocumentEdges = edges.filter(
                (e => edge.target === node.id && edge.targetHandle === `${node.id}-input-document-Document`
            )
            f {
                 => n
                 continue
                 => pa?.fileType
                 {
                    fileUploadSizeAndTypes.push({
                        f,
                        maxUploadSize: 500
                    })
                    isRAGFileUploadAllowed = true
                }
            }
            break
        }
    }

    /*
     * Condition for isImageUploadAllowed
     * 1.) one of the imgUploadAllowedNodes exists
     * 2.) one of the imgUploadLLMNodes exists + allowImageUploads is ON
     */
    const imgUploadSizeAndTypes: IUploadFileSizeAndTypes[] = []
    const imgUploadAllowedNodes = [
        'llmChain',
        'conversationChain',
        'reactAgentChat',
        'conversationalAgent',
        'toolAgent',
        'supervisor',
        'seqStart'
    ]

     => n

     {
        // check through all the nodes and check if any of the nodes data inputs agentModelConfig or llmModelConfig or conditionAgentModelConfig has allowImageUploads
        n => {
             {
                if (
                    node.data.inputs?.agentModelConfig?.allowImageUploads ||
                    node.data.inputs?.llmModelConfig?.allowImageUploads ||
                    node.data.inputs?.conditionAgentModelConfig?.allowImageUploads
                ) {
                    imgUploadSizeAndTypes.push({
                        f,
                        maxUploadSize: 5
                    })
                    isImageUploadAllowed = true
                }
            }
        })
    } else {
         => )) {
            n => {
                const data = node.data
                 {
                    // TODO: for now the maxUploadSize is hardcoded to 5MB, we need to add it to the node properties
                    n => {
                         {
                            imgUploadSizeAndTypes.push({
                                f,
                                maxUploadSize: 5
                            })
                            isImageUploadAllowed = true
                        }
                    })
                }
            })
        }
    }

    return {
        isSpeechToTextEnabled,
        isImageUploadAllowed,
        isRAGFileUploadAllowed,
        imgUploadSizeAndTypes,
        fileUploadSizeAndTypes
    }
}
