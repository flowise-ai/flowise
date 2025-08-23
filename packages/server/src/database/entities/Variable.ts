/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IVariable } from '../../Interface'

@Ent
export class Variable implements IVariable {
    @P
    id: string

    @C
    name: string

    @C
    value: string

    @C
    type: string

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
