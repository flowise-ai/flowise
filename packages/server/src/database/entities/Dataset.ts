/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IAssistant, IDataset } from '../../Interface'

@Ent
export class Dataset implements IDataset {
    @P
    id: string

    @C
    name: string

    @C
    description: string

    @C
    createdDate: Date

    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
