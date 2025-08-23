/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { AssistantType, IAssistant } from '../../Interface'

@Ent
export class Assistant implements IAssistant {
    @P
    id: string

    @C
    details: string

    @C
    credential: string

    @C
    iconSrc?: string

    @C
    type?: AssistantType

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
