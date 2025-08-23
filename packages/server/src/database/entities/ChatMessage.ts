/* eslint-disable */
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, Index, JoinColumn, OneToOne } from 'typeorm'
import { IChatMessage, MessageType } from '../../Interface'
import { Execution } from './Execution'

@Ent
export class ChatMessage implements IChatMessage {
    @P
    id: string

    @C
    role: MessageType

    @In
    @C
    chatflowid: string

    @C
    executionId?: string

    @OneT => Exe
    @J
    execution: Execution

    @C
    content: string

    @C
    sourceDocuments?: string

    @C
    usedTools?: string

    @C
    fileAnnotations?: string

    @C
    agentReasoning?: string

    @C
    fileUploads?: string

    @C
    artifacts?: string

    @C
    action?: string | null

    @C
    chatType: string

    @C
    chatId: string

    @C
    memoryType?: string

    @C
    sessionId?: string

    @C
    @C
    createdDate: Date

    @C
    leadEmail?: string

    @C
    followUpPrompts?: string
}
