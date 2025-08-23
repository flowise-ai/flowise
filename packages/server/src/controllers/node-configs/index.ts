import { Request, Response, NextFunction } from 'express'
import nodeConfigsService from '../../services/node-configs'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: nodeConfigsController.getAllNodeConfigs - body not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

export default {
    getAllNodeConfigs
}
