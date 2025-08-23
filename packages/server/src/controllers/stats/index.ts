import { StatusCodes } from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import statsService from '../../services/stats'
import { ChatMessageRatingType, ChatType } from '../../Interface'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'

 => {
    try {
         {
            th
        }
        const chatflowid = req.params.id
        const _chatTypes = req.query?.chatType as string | undefined
        let chatTypes: ChatType[] | undefined
         {
            try {
                ) {
                    chatTypes = _chatTypes
                } else {
                    
                }
            }  {
                chatTypes = [_chatTypes as ChatType]
            }
        }
        const startDate = req.query?.startDate as string | undefined
        const endDate = req.query?.endDate as string | undefined
        let feedbackTypeFilters = req.query?.feedbackType as ChatMessageRatingType[] | undefined
         {
            try {
                )
                if (
                    fee &&
                    fee
                ) {
                    feedbackTypeFilters = [ChatMessageRatingType.THUMBS_UP, ChatMessageRatingType.THUMBS_DOWN]
                } el) {
                    feedbackTypeFilters = [ChatMessageRatingType.THUMBS_UP]
                } el) {
                    feedbackTypeFilters = [ChatMessageRatingType.THUMBS_DOWN]
                } else {
                    feedbackTypeFilters = undefined
                }
            }  {
                .
            }
        }
        const apiResponse = await statsService.getChatflowStats(
            chatflowid,
            chatTypes,
            startDate,
            endDate,
            '',
            true,
            feedbackTypeFilters,
            req.user?.activeWorkspaceId
        )
        
    }  {
        next(e
    }
}

export default {
    getChatflowStats
}
