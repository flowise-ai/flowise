import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IEvaluation } from '../../Interface'

@Ent
export class Evaluation implements IEvaluation {
    @P
    id: string

    @C
    average_metrics: string

    @C
    additionalConfig: string

    @C
    name: string

    @C
    evaluationType: string

    @C
    chatflowId: string

    @C
    chatflowName: string

    @C
    datasetId: string

    @C
    datasetName: string

    @C
    status: string

    @Up
    runDate: Date

    @C
    workspaceId?: string
}
