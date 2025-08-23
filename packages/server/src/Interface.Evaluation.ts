// Evaluation Related Interfaces
import { Evaluator } from './database/entities/Evaluator'

export interface IDataset {
    id: string
    name: string
    description: string
    createdDate: Date
    updatedDate: Date
    workspaceId?: string
}
export interface IDatasetRow {
    id: string
    datasetId: string
    input: string
    output: string
    updatedDate: Date
    sequenceNo: number
}

export enum EvaluationStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    ERROR = 'error'
}

export interface IEvaluation {
    id: string
    name: string
    chatflowId: string
    chatflowName: string
    datasetId: string
    datasetName: string
    evaluationType: string
    additionalConfig: string //json
    average_metrics: string //json
    status: string
    runDate: Date
    workspaceId?: string
}

export interface IEvaluationResult extends IEvaluation {
    latestEval: boolean
    version: number
}

export interface IEvaluationRun {
    id: string
    evaluationId: string
    input: string
    expectedOutput: string
    actualOutput: string // JSON
    metrics: string // JSON
    runDate: Date
    llmEvaluators?: string // JSON
    evaluators?: string // JSON
    errors?: string // JSON
}

export interface IEvaluator {
    id: string
    name: string
    type: string
    config: string // JSON
    updatedDate: Date
    createdDate: Date
    workspaceId?: string
}

export class EvaluatorDTO {
    id: string
    name: string
    type: string
    measure?: string
    operator?: string
    value?: string
    prompt?: string
    evaluatorType?: string
    outputSchema?: []
    updatedDate: Date
    createdDate: Date

    : Evaluator {
        
        Obje
        let config: any = {}
         {
            config = {
                prompt: body.prompt,
                outputSchema: body.outputSchema
            }
        } el {
            config = {
                operator: body.operator,
                value: body.value
            }
        } el {
            config = {
                operator: body.operator
            }
        } el {
            config = {
                operator: body.operator,
                value: body.value,
                measure: body.measure
            }
        } else {
            th
        }
        new
        return newDs
    }

    : EvaluatorDTO {
        
        Obje
        
         {
            newDs.prompt = config.prompt
            newDs.outputSchema = config.outputSchema
        } el {
            newDs.operator = config.operator
            newDs.value = config.value
        } el {
            newDs.operator = config.operator
            newDs.value = config.value
        } el {
            newDs.operator = config.operator
            newDs.value = config.value
            newDs.measure = config.measure
        }
        .config
        return newDs
    }

    : EvaluatorDTO[] {
         => th)
    }
}
