/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn } from 'typeorm'
import { IUpsertHistory } from '../../Interface'

@Ent
export class UpsertHistory implements IUpsertHistory {
    @P
    id: string

    @In
    @C
    chatflowid: string

    @C
    result: string

    @C
    flowData: string

    @C
    date: Date
}
