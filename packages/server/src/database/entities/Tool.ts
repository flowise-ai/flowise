/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { ITool } from '../../Interface'

@Ent
export class Tool implements ITool {
    @P
    id: string

    @C
    name: string

    @C
    description: string

    @C
    color: string

    @C
    iconSrc?: string

    @C
    schema?: string

    @C
    func?: string

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
