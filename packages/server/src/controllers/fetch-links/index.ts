import { Request, Response, NextFunction } from 'express'
import fetchLinksService from '../../services/fetch-links'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

 => {
    try {
         {
            th
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: fetchLinksController.getAllLinks - relativeLinksMethod not provided!`
            )
        }
         {
            th
        }
        const apiResponse = await fetchLinksService.getAllLinks(
            req.query.url as string,
            req.query.relativeLinksMethod as string,
            req.query.limit as string
        )
        
    }  {
        next(e
    }
}

export default {
    getAllLinks
}
