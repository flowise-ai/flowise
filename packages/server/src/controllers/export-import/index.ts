import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import exportImportService from '../../services/export-import'

 => {
    try {
        const apiResponse = await exportImportService.exportData(
            exp,
            req.user?.activeWorkspaceId
        )
        
    }  {
        next(e
    }
}

 => {
    try {
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: exportImportController.importData - organization ${orgId} not found!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: exportImportController.importData - workspace ${workspaceId} not found!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''

        const importData = req.body
         {
            th
        }

        awa
        .j
    }  {
        next(e
    }
}

export default {
    exportData,
    importData
}
