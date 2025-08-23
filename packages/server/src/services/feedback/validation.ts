import { StatusCodes } from 'http-status-codes'
import { IChatMessageFeedback } from '../../Interface'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { ChatMessageFeedback } from '../../database/entities/ChatMessageFeedback'

/**
 * Validates that the message ID exists
 * @param {string} messageId
 */
exp: Promise<ChatMessage> => {
    
    .findOne({
        where: { id: messageId }
    })

     {
        th
    }

    return message
}

/**
 * Validates that the feedback ID exists
 * @param {string} feedbackId
 */
exp: Promise<ChatMessageFeedback> => {
    
    .findOne({
        where: { id: feedbackId }
    })

     {
        th
    }

    return feedbackExists
}

/**
 * Validates a feedback object for creation
 * @param {Partial<IChatMessageFeedback>} feedback
 */
exp: Promise<Partial<IChatMessageFeedback>> => {
    // If messageId is provided, validate it exists and get the message
    let message: ChatMessage | null = null
     {
        me
    } else {
        th
    }

    // If chatId is provided, validate it matches the message's chatId
     {
         {
            throw new InternalFlowiseError(
                StatusCodes.BAD_REQUEST,
                `Inconsistent chat ID: message with ID ${message.id} does not belong to chat with ID ${feedback.chatId}`
            )
        }
    } else {
        // If not provided, use the message's chatId
        feedback.chatId = message.chatId
    }

    // If chatflowid is provided, validate it matches the message's chatflowid
     {
         {
            throw new InternalFlowiseError(
                StatusCodes.BAD_REQUEST,
                `Inconsistent chatflow ID: message with ID ${message.id} does not belong to chatflow with ID ${feedback.chatflowid}`
            )
        }
    } else {
        // If not provided, use the message's chatflowid
        feedback.chatflowid = message.chatflowid
    }

    return feedback
}

/**
 * Validates a feedback object for update
 * @param {string} feedbackId
 * @param {Partial<IChatMessageFeedback>} feedback
 */
export const validateFeedbackForUpdate = async (
    feedbackId: string,
    feedback: Partial<IChatMessageFeedback>
): Promise<Partial<IChatMessageFeedback>> => {
    // First validate the feedback exists
    

    feedback.messageId = feedback.messageId ?? existingFeedback.messageId
    feedback.chatId = feedback.chatId ?? existingFeedback.chatId
    feedback.chatflowid = feedback.chatflowid ?? existingFeedback.chatflowid

    // If messageId is provided, validate it exists and get the message
    let message: ChatMessage | null = null
     {
        me
    }

    // If chatId is provided and we have a message, validate it matches the message's chatId
     {
         {
            throw new InternalFlowiseError(
                StatusCodes.BAD_REQUEST,
                `Inconsistent chat ID: message with ID ${message?.id} does not belong to chat with ID ${feedback.chatId}`
            )
        }
    }

    // If chatflowid is provided and we have a message, validate it matches the message's chatflowid
     {
         {
            throw new InternalFlowiseError(
                StatusCodes.BAD_REQUEST,
                `Inconsistent chatflow ID: message with ID ${message?.id} does not belong to chatflow with ID ${feedback.chatflowid}`
            )
        }
    }

    return feedback
}
