/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ILead } from '../../Interface'

@Ent
export class Lead implements ILead {
    @P
    id: string

    @C
    name?: string

    @C
    email?: string

    @C
    phone?: string

    @C
    chatflowid: string

    @C
    chatId: string

    @C
    createdDate: Date
}
