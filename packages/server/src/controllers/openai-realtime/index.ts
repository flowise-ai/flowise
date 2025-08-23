import { Request, Response, NextFunction } from 'express'
import openaiRealTimeService from '../../services/openai-realtime'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.getAgentTools - id not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.executeAgentTool - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.executeAgentTool - body not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.executeAgentTool - body chatId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.executeAgentTool - body toolName not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiRealTimeController.executeAgentTool - body inputArgs not provided!`
            )
        }
        const apiResponse = await openaiRealTimeService.executeAgentTool(
            req.params.id,
            req.body.chatId,
            req.body.toolName,
            req.body.inputArgs,
            req.body.apiMessageId
        )
        
    }  {
        next(e
    }
}

export default {
    getAgentTools,
    executeAgentTool
}
