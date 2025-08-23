import { Request, Response, NextFunction } from 'express'
import leadsService from '../../services/leads'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: leadsController.getAllLeadsForChatflow - id not provided!`
            )
        }
        const chatflowid = req.params.id
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: leadsController.createLeadInChatflow - body not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

export default {
    createLeadInChatflow,
    getAllLeadsForChatflow
}
