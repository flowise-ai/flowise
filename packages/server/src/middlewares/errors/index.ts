import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'

// we need eslint because we have to pass next arg for the error middleware
// eslint-disable-next-line
a {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    )
        err.message = '401 Invalid model key or Incorrect local model configuration.'
    let displayedError = {
        statusCode,
        success: false,
        message: err.message,
        // Provide error stack trace only in development
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    }

     {
        
        .j
    }
}

export default errorHandlerMiddleware
