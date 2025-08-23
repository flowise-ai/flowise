import { Request, Response, NextFunction } from 'express'
import { RateLimiterManager } from '../../utils/rateLimit'
import chatflowsService from '../../services/chatflows'
import logger from '../../utils/logger'
import predictionsServices from '../../services/predictions'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { v4 as uuidv4 } from 'uuid'
import { getErrorMessage } from '../../errors/utils'
import { MODE } from '../../Interface'

// Sen
 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: predictionsController.createPrediction - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: predictionsController.createPrediction - body not provided!`
            )
        }
        
         {
            th
        }
        let isDomainAllowed = true
        let unauthorizedOriginError = 'This site is not allowed to access this chatbot'
        l
         {
            
            // check whether the first one is not empty. if it is empty that means the user set a value and then removed it.
            const isValidAllowedOrigins = parsedConfig.allowedOrigins?.length && parsedConfig.allowedOrigins[0] !== ''
            unauthorizedOriginError = parsedConfig.allowedOriginsError || 'This site is not allowed to access this chatbot'
             {
                const originHeader = req.headers.origin
                .host
                isDomainAllowed =
                    pa => {
                        try {
                            .host
                            return origin === allowedOrigin
                        }  {
                            return false
                        }
                    }).length > 0
            }
        }
         {
            
            const isStreamingRequested = req.body.streaming === 'true' || req.body.streaming === true
             {
                .sseStreamer

                let chatId = req.body.chatId
                 {
                    
                    req.body.chatId = chatId
                }
                try {
                    
                    
                    
                    
                     //nginx config: https://serverfault.com/a/801629
                    

                     {
                        getRunn.
                    }

                    
                    
                }  {
                     {
                        )
                    }
                    next(e
                } finally {
                    
                }
            } else {
                
                
            }
        } else {
            const isStreamingRequested = req.body.streaming === 'true' || req.body.streaming === true
             {
                .
            }
            th
        }
    }  {
        next(e
    }
}

 => {
    try {
        .getRateL(
    }  {
        next(e
    }
}

export default {
    createPrediction,
    getRateLimiterMiddleware
}
