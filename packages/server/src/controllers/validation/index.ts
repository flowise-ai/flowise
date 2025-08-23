import { Request, Response, NextFunction } from 'express'
import validationService from '../../services/validation'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

 => {
    try {
        const flowId = req.params?.id as string | undefined
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: validationController.checkFlowValidation - id not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
        
        
    }  {
        next(e
    }
}

export default {
    checkFlowValidation
}
