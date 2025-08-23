import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IEvaluationRun } from '../../Interface'

@Ent
export class EvaluationRun implements IEvaluationRun {
    @P
    id: string

    @C
    evaluationId: string

    @C
    input: string

    @C
    expectedOutput: string

    @Up
    runDate: Date

    @C
    actualOutput: string

    @C
    metrics: string

    @C
    llmEvaluators: string

    @C
    evaluators: string

    @C
    errors: string
}
