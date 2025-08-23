/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ChatflowType, IChatFlow } from '../../Interface'

export enum EnumChatflowType {
    CHATFLOW = 'CHATFLOW',
    AGENTFLOW = 'AGENTFLOW',
    MULTIAGENT = 'MULTIAGENT',
    ASSISTANT = 'ASSISTANT'
}

@Ent
export class ChatFlow implements IChatFlow {
    @P
    id: string

    @C
    name: string

    @C
    flowData: string

    @C
    deployed?: boolean

    @C
    isPublic?: boolean

    @C
    apikeyid?: string

    @C
    chatbotConfig?: string

    @C
    apiConfig?: string

    @C
    analytic?: string

    @C
    speechToText?: string

    @C
    followUpPrompts?: string

    @C
    category?: string

    @C
    type?: ChatflowType

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
