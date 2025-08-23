import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IEvaluator } from '../../Interface'

//1714808591644

@Ent
export class Evaluator implements IEvaluator {
    @P
    id: string

    @C
    name: string

    @C
    type: string

    @C
    config: string

    @C
    createdDate: Date

    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
