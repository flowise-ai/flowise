import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import contentDisposition from 'content-disposition'
import { streamStorageFile } from 'flowise-components'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { Workspace } from '../../enterprise/database/entities/workspace.entity'

 => {
    try {
         {
            .
        }
        const chatflowId = req.query.chatflowId as string
        const chatId = req.query.chatId as string
        const fileName = req.query.fileName as string
        const download = req.query.download === 'true' // Check if download parameter is set

        

        // This can be public API, so we can only get orgId from the chatflow
        .findOneBy({
            id: chatflowId
        })
         {
            th
        }
        const chatflowWorkspaceId = chatflow.workspaceId
        .findOneBy({
            id: chatflowWorkspaceId
        })
         {
            th
        }
        const orgId = workspace.organizationId as string

        // Set Content-Disposition header - force attachment for download
         {
            )
        } else {
            )
        }
        

         th

         {
            f
        } else {
            
        }
    }  {
        next(e
    }
}

export default {
    streamUploadedFile
}
