import { StatusCodes } from 'http-status-codes'
import { ChatMessageRatingType, ChatType } from '../../Interface'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { utilGetChatMessage } from '../../utils/getChatMessage'
import { ChatMessageFeedback } from '../../database/entities/ChatMessageFeedback'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'

// get stats for showing in chatflow
const getChatflowStats = async (
    chatflowid: string,
    chatTypes: ChatType[] | undefined,
    startDate?: string,
    endDate?: string,
    messageId?: string,
    feedback?: boolean,
    feedbackTypes?: ChatMessageRatingType[],
    activeWorkspaceId?: string
): Promise<any> => {
    try {
        const chatmessages = (await utilGetChatMessage({
            chatflowid,
            chatTypes,
            startDate,
            endDate,
            messageId,
            feedback,
            feedbackTypes,
            activeWorkspaceId
        })) as Array<ChatMessage & { feedback?: ChatMessageFeedback }>
        const totalMessages = chatmessages.length
         => me.length
         => me.length
        // count the number of unique sessions in the chatmessages - count unique sessionId
         => me)
        const totalSessions = uniqueSessions.size
        const dbResponse = {
            totalMessages,
            totalFeedback,
            positiveFeedback,
            totalSessions
        }

        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    getChatflowStats
}
