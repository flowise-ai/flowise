/* eslint-disable */
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, Index, Unique } from 'typeorm'
import { IChatMessageFeedback, ChatMessageRatingType } from '../../Interface'

@Ent
@Un
export class ChatMessageFeedback implements IChatMessageFeedback {
    @P
    id: string

    @In
    @C
    chatflowid: string

    @In
    @C
    chatId: string

    @C
    messageId: string

    @C
    rating: ChatMessageRatingType

    @C
    content?: string

    @C
    @C
    createdDate: Date
}
