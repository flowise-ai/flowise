import { Request, Response, NextFunction } from 'express'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

// Returns specific component node icon via name
 => {
    try {
        
        ) {
            const nodeInstance = appServer.nodesPool.componentNodes[req.params.name]
             {
                throw new InternalFlowiseError(
                    StatusCodes.NOT_FOUND,
                    `Error: nodeIconController.getSingleNodeIcon - Node ${req.params.name} icon not found`
                )
            }

             || n || n) {
                const filepath = nodeInstance.icon
                
            } else {
                throw new InternalFlowiseError(
                    StatusCodes.PRECONDITION_FAILED,
                    `Error: nodeIconController.getSingleNodeIcon - Node ${req.params.name} icon is missing icon`
                )
            }
        } else {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: nodeIconController.getSingleNodeIcon - Node ${req.params.name} not found`
            )
        }
    }  {
        next(e
    }
}

export default {
    getSingleNodeIcon
}
