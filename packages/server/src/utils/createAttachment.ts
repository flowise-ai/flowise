import { Request } from 'express'
import * as path from 'path'
import {
    addArrayFilesToStorage,
    getFileFromUpload,
    IDocument,
    mapExtToInputField,
    mapMimeTypeToInputField,
    removeSpecificFileFromUpload,
    isValidUUID,
    isPathTraversal
} from 'flowise-components'
import { getRunningExpressApp } from './getRunningExpressApp'
import { getErrorMessage } from '../errors/utils'
import { checkStorage, updateStorageUsage } from './quotaUsage'
import { ChatFlow } from '../database/entities/ChatFlow'
import { Workspace } from '../enterprise/database/entities/workspace.entity'
import { Organization } from '../enterprise/database/entities/organization.entity'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

/**
 * Create attachment
 * @param {Request} req
 */
exp => {
    

    const chatflowid = req.params.chatflowId
    ) {
        th
    }
    ) {
        th
    }

    const chatId = req.params.chatId

    // Validate chatflow exists and check API key
    .findOneBy({
        id: chatflowid
    })
     {
        th
    }

    let orgId = req.user?.activeOrganizationId || ''
    let workspaceId = req.user?.activeWorkspaceId || ''
    let subscriptionId = req.user?.activeOrganizationSubscriptionId || ''

    // This is one of the WHITELIST_URLS, API can be public and there might be no req.user
     {
        const chatflowWorkspaceId = chatflow.workspaceId
        .findOneBy({
            id: chatflowWorkspaceId
        })
         {
            th
        }
        workspaceId = workspace.id

        .findOneBy({
            id: workspace.organizationId
        })
         {
            th
        }

        orgId = org.id
        subscriptionId = org.subscriptionId as string
    }

    // Parse chatbot configuration to get file upload settings
    let pdfConfig = {
        usage: 'perPage',
        legacyBuild: false
    }

     {
        try {
            
             {
                 {
                    pdfConfig.usage = chatbotConfig.fullFileUpload.pdfFile.usage
                }
                 {
                    pdfConfig.legacyBuild = chatbotConfig.fullFileUpload.pdfFile.legacyBuild
                }
            }
        }  {
            // Use default PDF config if parsing fails
        }
    }

    // Find FileLoader node
    const fileLoaderComponent = appServer.nodesPool.componentNodes['fileLoader']
    const fileLoaderNodeInstanceFilePath = fileLoaderComponent.filePath as string
    
    
    const options = {
        retrieveAttachmentChatId: true,
        orgId,
        workspaceId,
        chatflowid,
        chatId
    }
     || []
    const fileAttachments = []
     {
        const isBase64 = req.body.base64
        f {
            awa

            
            const fileNames: string[] = []
            // Address file name with special characters: https://github.com/expressjs/multer/issues/1104
            f.t
            const { path: storagePath, totalSize } = await addArrayFilesToStorage(
                file.mimetype,
                fileBuffer,
                file.originalname,
                fileNames,
                orgId,
                chatflowid,
                chatId
            )
            awa

            

            

            

            let fileInputField = 'txtFile'

             {
                fileInputField = fileInputFieldFromExt
            } el {
                fileInputField = fileInputFieldFromExt
            }

            awa

            try {
                const nodeData = {
                    inputs: {
                        [fileInputField]: storagePath
                    },
                    outputs: { output: 'document' }
                }

                // Apply PDF specific configuration if this is a PDF file
                 {
                    nodeData.inputs.usage = pdfConfig.usage
                    nodeData.inputs.legacyBuild = pdfConfig.legacyBuild as unknown as string
                }

                let content = ''

                 {
                    
                } else {
                    
                     => .j
                }

                fileAttachments.push({
                    name: file.originalname,
                    mimeType: file.mimetype,
                    size: file.size,
                    content
                })
            }  {
                th}`)
            }
        }
    }

    return fileAttachments
}
