import { Request, Response, NextFunction } from 'express'
import { ChatMessageRatingType, ChatType, IReactFlowObject } from '../../Interface'
import chatflowsService from '../../services/chatflows'
import chatMessagesService from '../../services/chat-messages'
import { aMonthAgo, clearSessionMemory } from '../../utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Between, DeleteResult, FindOptionsWhere, In } from 'typeorm'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { utilGetChatMessage } from '../../utils/getChatMessage'
import { getPageAndLimitParams } from '../../utils/pagination'

: ChatMessageRatingType[] | undefined => {
    try {
        let feedbackTypeFilters
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
        return feedbackTypeFilters
    }  {
        return _feedbackTypeFilters
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                'Error: chatMessagesController.createChatMessage - request body not provided!'
            )
        }
        
        )
    }  {
        next(e
    }
}

 => {
    try {
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
        const activeWorkspaceId = req.user?.activeWorkspaceId
        const sortOrder = req.query?.order as string | undefined
        const chatId = req.query?.chatId as string | undefined
        const memoryType = req.query?.memoryType as string | undefined
        const sessionId = req.query?.sessionId as string | undefined
        const messageId = req.query?.messageId as string | undefined
        const startDate = req.query?.startDate as string | undefined
        const endDate = req.query?.endDate as string | undefined
        const feedback = req.query?.feedback as boolean | undefined

        

        let feedbackTypeFilters = req.query?.feedbackType as ChatMessageRatingType[] | undefined
         {
            fee
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: chatMessageController.getAllChatMessages - id not provided!`
            )
        }
        const apiResponse = await chatMessagesService.getAllChatMessages(
            req.params.id,
            chatTypes,
            sortOrder,
            chatId,
            memoryType,
            sessionId,
            startDate,
            endDate,
            messageId,
            feedback,
            feedbackTypeFilters,
            activeWorkspaceId,
            page,
            limit
        )
        )
    }  {
        next(e
    }
}

 => {
    try {
        const activeWorkspaceId = req.user?.activeWorkspaceId
        const sortOrder = req.query?.order as string | undefined
        const chatId = req.query?.chatId as string | undefined
        const memoryType = req.query?.memoryType as string | undefined
        const sessionId = req.query?.sessionId as string | undefined
        const messageId = req.query?.messageId as string | undefined
        const startDate = req.query?.startDate as string | undefined
        const endDate = req.query?.endDate as string | undefined
        const feedback = req.query?.feedback as boolean | undefined
        let feedbackTypeFilters = req.query?.feedbackType as ChatMessageRatingType[] | undefined
         {
            fee
        }
        const apiResponse = await chatMessagesService.getAllInternalChatMessages(
            req.params.id,
            [ChatType.INTERNAL],
            sortOrder,
            chatId,
            memoryType,
            sessionId,
            startDate,
            endDate,
            messageId,
            feedback,
            feedbackTypeFilters,
            activeWorkspaceId
        )
        )
    }  {
        next(e
    }
}

 => {
    try {
        
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                'Error: chatMessagesController.removeAllChatMessages - id not provided!'
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: chatMessagesController.removeAllChatMessages - organization ${orgId} not found!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: chatMessagesController.removeAllChatMessages - workspace ${workspaceId} not found!`
            )
        }
        const chatflowid = req.params.id
        
         {
            .
        }
        const flowData = chatflow.flowData
        
        const nodes = parsedFlowData.nodes
        const chatId = req.query?.chatId as string
        const memoryType = req.query?.memoryType as string | undefined
        const sessionId = req.query?.sessionId as string | undefined
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
        const isClearFromViewMessageDialog = req.query?.isClearFromViewMessageDialog as string | undefined
        let feedbackTypeFilters = req.query?.feedbackType as ChatMessageRatingType[] | undefined
         {
            fee
        }

         {
            const isFeedback = feedbackTypeFilters?.length ? true : false
            const hardDelete = req.query?.hardDelete as boolean | undefined

            const messages = await utilGetChatMessage({
                chatflowid,
                chatTypes,
                sessionId,
                startDate,
                endDate,
                feedback: isFeedback,
                feedbackTypes: feedbackTypeFilters,
                activeWorkspaceId: workspaceId
            })
             => me

             {
                const result: DeleteResult = { raw: [], affected: 0 }
                
            }

            // Categorize by chatId_memoryType_sessionId
            
            me => {
                const chatId = message.chatId
                const memoryType = message.memoryType
                const sessionId = message.sessionId
                const composite_key = `${chatId}_${memoryType}_${sessionId}`
                ) {
                    
                }
                ?.pu
            })

            // If hardDelete is ON, we clearSessionMemory from third party integrations
             {
                f {
                    
                    try {
                        await clearSessionMemory(
                            nodes,
                            appServer.nodesPool.componentNodes,
                            chatId,
                            appServer.AppDataSource,
                            orgId,
                            sessionId,
                            memoryType,
                            isClearFromViewMessageDialog
                        )
                    }  {
                        
                    }
                }
            }

            const apiResponse = await chatMessagesService.removeChatMessagesByMessageIds(
                chatflowid,
                chatIdMap,
                messageIds,
                orgId,
                workspaceId,
                appServer.usageCacheManager
            )
            
        } else {
            try {
                await clearSessionMemory(
                    nodes,
                    appServer.nodesPool.componentNodes,
                    chatId,
                    appServer.AppDataSource,
                    orgId,
                    sessionId,
                    memoryType,
                    isClearFromViewMessageDialog
                )
            }  {
                .
            }

            const deleteOptions: FindOptionsWhere<ChatMessage> = { chatflowid }
             deleteOptions.chatId = chatId
             deleteOptions.memoryType = memoryType
             deleteOptions.sessionId = sessionId
             {
                
            }
             {
                
                
                , t)
            }
            const apiResponse = await chatMessagesService.removeAllChatMessages(
                chatId,
                chatflowid,
                deleteOptions,
                orgId,
                workspaceId,
                appServer.usageCacheManager
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
                `Error: chatMessagesController.abortChatMessage - chatflowid or chatid not provided!`
            )
        }
        awa
        
    }  {
        next(e
    }
}

: ChatMessage | ChatMessage[] => {
    : ChatMessage => {
        const parsedResponse = { ...response }

        try {
             {
                pa
            }
             {
                pa
            }
             {
                pa
            }
             {
                pa
            }
             {
                pa
            }
             {
                pa
            }
             {
                pa
            }
        }  {
            
        }

        return parsedResponse
    }

    ) {
        
    } else {
        
    }
}

export default {
    createChatMessage,
    getAllChatMessages,
    getAllInternalChatMessages,
    removeAllChatMessages,
    abortChatMessage
}
