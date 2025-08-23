import path from 'path'
import { NextFunction, Request, Response } from 'express'
import { getFilesListFromStorage, getStoragePath, removeSpecificFileFromStorage } from 'flowise-components'
import { updateStorageUsage } from '../../utils/quotaUsage'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'

 => {
    try {
        const activeOrganizationId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: filesController.getAllFiles - organization ${activeOrganizationId} not found!`
            )
        }
        
         => ({
            ...file,
            // replace org id because we don't want to expose it
            path: f, '').
        }))
        
    }  {
        next(e
    }
}

 => {
    try {
        const activeOrganizationId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: filesController.deleteFile - organization ${activeOrganizationId} not found!`
            )
        }
        const activeWorkspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: filesController.deleteFile - workspace ${activeWorkspaceId} not found!`
            )
        }
        const filePath = req.query.path as string
        .f => path 
        
        awa.u
        
    }  {
        next(e
    }
}

export default {
    getAllFiles,
    deleteFile
}
