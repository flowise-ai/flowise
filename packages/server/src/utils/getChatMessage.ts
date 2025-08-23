import { MoreThanOrEqual, LessThanOrEqual, Between, In } from 'typeorm'
import { ChatMessageRatingType, ChatType } from '../Interface'
import { ChatMessage } from '../database/entities/ChatMessage'
import { ChatMessageFeedback } from '../database/entities/ChatMessageFeedback'
import { ChatFlow } from '../database/entities/ChatFlow'
import { getRunningExpressApp } from '../utils/getRunningExpressApp'

/**
 * Method that get chat messages.
 * @param {string} chatflowid
 * @param {ChatType[]} chatTypes
 * @param {string} sortOrder
 * @param {string} chatId
 * @param {string} memoryType
 * @param {string} sessionId
 * @param {string} startDate
 * @param {string} endDate
 * @param {boolean} feedback
 * @param {ChatMessageRatingType[]} feedbackTypes
 */

interface GetChatMessageParams {
    chatflowid: string
    chatTypes?: ChatType[]
    sortOrder?: string
    chatId?: string
    memoryType?: string
    sessionId?: string
    startDate?: string
    endDate?: string
    messageId?: string
    feedback?: boolean
    feedbackTypes?: ChatMessageRatingType[]
    activeWorkspaceId?: string
    page?: number
    pageSize?: number
}

export const utilGetChatMessage = async ({
    chatflowid,
    chatTypes,
    sortOrder = 'ASC',
    chatId,
    memoryType,
    sessionId,
    startDate,
    endDate,
    messageId,
    feedback,
    feedbackTypes,
    activeWorkspaceId,
    page = -1,
    pageSize = -1
}: GetChatMe: Promise<ChatMessage[]> => {
     page = -1
     pageSize = -1

    

    // Check if chatflow workspaceId is same as activeWorkspaceId
     {
        .findOneBy({
            id: chatflowid,
            workspaceId: activeWorkspaceId
        })
         {
            th
        }
    } else {
        th
    }

     {
        // Handle feedback queries with improved efficiency
        return await handleFeedbackQuery({
            chatflowid,
            chatTypes,
            sortOrder,
            chatId,
            memoryType,
            sessionId,
            startDate,
            endDate,
            messageId,
            feedbackTypes,
            page,
            pageSize
        })
    }

    let createdDateQuery

     {
         {
            , new )
        } el {
            )
        } el {
            )
        }
    }

    .find({
        where: {
            chatflowid,
             : undefined,
            chatId,
            memoryType: memoryType ?? undefined,
            sessionId: sessionId ?? undefined,
            createdDate: createdDateQuery,
            id: messageId ?? undefined
        },
        relations: {
            execution: true
        },
        order: {
            createdDate: sortOrder === 'DESC' ? 'DESC' : 'ASC'
        }
    })

    return messages
}

async function handleFeedbackQuery(params: {
    chatflowid: string
    chatTypes?: ChatType[]
    sortOrder: string
    chatId?: string
    memoryType?: string
    sessionId?: string
    startDate?: string
    endDate?: string
    messageId?: string
    feedbackTypes?: ChatMessageRatingType[]
    page: number
    pageSize: number
}): Promise<ChatMessage[]> {
    const {
        chatflowid,
        chatTypes,
        sortOrder,
        chatId,
        memoryType,
        sessionId,
        startDate,
        endDate,
        messageId,
        feedbackTypes,
        page,
        pageSize
    } = params

    

    // For specific session/message queries, no pagination needed
     {
        
    }

    // For paginated queries, handle session-based pagination efficiently
     {
        // First get session IDs with pagination
        
            .
            .
            .whe

        // Apply basic filters
         {
            ', { 
        }
         {
            
        }
         {
            
        }
         {
            sessionQuery.andWhere('chat_message.createdDate >= :startDateTime', {
                
            })
        }
         {
            sessionQuery.andWhere('chat_message.createdDate <= :endDateTime', {
                en
            })
        }

        // If feedback types are specified, only get sessions with those feedback types
         {
            sessionQuery
                .leftJ
                .an', { fee
        }

        
        const sessionIds = await sessionQuery
            .', 
            .g
            .
            .l
            .getRawMany()

         {
            return []
        }

        // Get all messages for these sessions
         => 
        return await getMessagesWithFeedback(
            {
                ...params,
                sessionId: undefined // Clear specific sessionId since we're using list
            },
            true,
            sessionIdList
        )
    }

    // No pagination - get all feedback messages
    
}

async function getMessagesWithFeedback(
    params: {
        chatflowid: string
        chatTypes?: ChatType[]
        sortOrder: string
        chatId?: string
        memoryType?: string
        sessionId?: string
        startDate?: string
        endDate?: string
        messageId?: string
        feedbackTypes?: ChatMessageRatingType[]
    },
    useSessionList: boolean = false,
    sessionIdList?: string[]
): Promise<ChatMessage[]> {
    const { chatflowid, chatTypes, sortOrder, chatId, memoryType, sessionId, startDate, endDate, messageId, feedbackTypes } = params

    
    .

    query
        .leftJ
        .leftJ
        .whe

    // Apply filters
     {
        que', { 
    }

     {
        que', { 
    }
     {
        que
    }
     {
        que
    }
     {
        que
    }
     {
        que
    }
     {
        query.andWhere('chat_message.createdDate >= :startDateTime', {
            
        })
    }
     {
        query.andWhere('chat_message.createdDate <= :endDateTime', {
            en
        })
    }

    // P
     {
        que OR fee', { fee
    }

    que

    ) as Array<ChatMessage & { feedback: ChatMessageFeedback }>

    // Apply feedback type filtering with previous message inclusion
     {
        
    }

    return messages
}

function filterMessagesWithFeedback(
    messages: Array<ChatMessage & { feedback: ChatMessageFeedback }>,
    feedbackTypes: ChatMessageRatingType[]
): ChatMessage[] {
    // Group messages by session for proper filtering
    

    me => {
        const sessionId = message.sessionId
         return // Skip messages without sessionId

        ) {
            
        }
        
    })

    const result: ChatMessage[] = []

    // Process each session group
     => {
        // Sort by creation date to ensure proper order
         => new .getT - new .getT)

        

         => {
            ) {
                // Include the feedback message
                t
                // In if it exists
                 {
                    t
                }
            }
        })

        // Add filtered messages to result
         => {
            ) {
                
            }
        })
    })

    // Sort final result by creation date
     => new .getT - new .getT)
}
