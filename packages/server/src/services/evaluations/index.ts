import { StatusCodes } from 'http-status-codes'
import { EvaluationRunner, ICommonObject } from 'flowise-components'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { Dataset } from '../../database/entities/Dataset'
import { DatasetRow } from '../../database/entities/DatasetRow'
import { Evaluation } from '../../database/entities/Evaluation'
import { EvaluationStatus, IEvaluationResult } from '../../Interface'
import { EvaluationRun } from '../../database/entities/EvaluationRun'
import { Credential } from '../../database/entities/Credential'
import { ApiKey } from '../../database/entities/ApiKey'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { getAppVersion } from '../../utils'
import { In } from 'typeorm'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { v4 as uuidv4 } from 'uuid'
import { calculateCost, formatCost } from './CostCalculator'
import { runAdditionalEvaluators } from './EvaluatorRunner'
import evaluatorsService from '../evaluator'
import { LLMEvaluationRunner } from './LLMEvaluationRunner'
import { Assistant } from '../../database/entities/Assistant'

 => {
    try {
        
        .findOneBy({
            id: id
        })
         th
         : {}
        const data: ICommonObject = {
            chatflowId: evaluation.chatflowId,
            chatflowName: evaluation.chatflowName,
            datasetName: evaluation.datasetName,
            datasetId: evaluation.datasetId,
            evaluationType: evaluation.evaluationType,
            ,
            datasetAsOneConversation: additionalConfig.datasetAsOneConversation,
            
        }
        data.name = evaluation.name
        data.workspaceId = evaluation.workspaceId
         {
            
            data.credentialId = additionalConfig.credentialId
            // this is to preserve backward compatibility for evaluations created before the llm/model options were added
             {
                data.model = additionalConfig.llmConfig.model
                data.llm = additionalConfig.llmConfig.llm
                data.credentialId = additionalConfig.llmConfig.credentialId
            } else {
                data.model = 'gpt-3.5-turbo'
                data.llm = 'OpenAI'
            }
        }
        data.version = true
        
    }  {
        th}`)
    }
}

 => {
    try {
        
        
        Obje
        newEval.status = EvaluationStatus.PENDING

        .
        

        const additionalConfig: ICommonObject = {
             : [],
            datasetAsOneConversation: body.datasetAsOneConversation,
             : []
        }

         {
            a : []
            additionalConfig.llmConfig = {
                credentialId: body.credentialId,
                llm: body.llm,
                model: body.model
            }
        }
        
        .

        await appServer.telemetry.sendTelemetry(
            'evaluation_created',
            {
                ve
            },
            orgId
        )

        .findOneBy({
            id: body.datasetId
        })
         th

        .find({
            where: { datasetId: dataset.id },
            order: { sequenceNo: 'ASC' }
        })
        ;(.rows = items

        const data: ICommonObject = {
            chatflowId: body.chatflowId,
            dataset: dataset,
            evaluationType: body.evaluationType,
            evaluationId: newEvaluation.id,
            credentialId: body.credentialId
        }
         {
            
        }

        // When chatflow has an APIKey
        const apiKeys: { chatflowId: string; apiKey: string }[] = []
        
        f {
            const chatflowId = chatflowIds[i]
            .findOneBy({
                id: chatflowId
            })
             {
                .findOneBy({
                    id: cFlow.apikeyid
                })
                 {
                    apiKeys.push({
                        chatflowId: chatflowId,
                        apiKey: apikeyObj.apiKey
                    })
                }
            }
        }
         {
            data.apiKeys = apiKeys
        }

        // save the evaluation with status as pending
        
         {
            .findOneBy({
                id: body.credentialId
            })

             th
        }

        let evalMetrics = { passCount: 0, failCount: 0, errorCount: 0 }
        evalRunner
            .
            .then(a => {
                let totalTime = 0
                // let us assume that the eval is successful
                let allRowsSuccessful = true
                try {
                    
                    f {
                        const metricsArray: ICommonObject[] = []
                        const actualOutputArray: string[] = []
                        const errorArray: string[] = []
                        f {
                             {
                                // 
                                allRowsSuccessful = false
                            }
                            a
                            t
                            let metricsObjFromRun: ICommonObject = {}

                            let nested_metrics = evaluationRow.nested_metrics

                            let promptTokens = 0,
                                completionTokens = 0,
                                totalTokens = 0
                            let inputCost = 0,
                                outputCost = 0,
                                totalCost = 0
                             {
                                f {
                                    const nested_metric = nested_metrics[i]
                                     {
                                        promptTokens += nested_metric.promptTokens
                                        completionTokens += nested_metric.completionTokens
                                        totalTokens += nested_metric.totalTokens

                                        inputCost += nested_metric.cost_values.input_cost
                                        outputCost += nested_metric.cost_values.output_cost
                                        totalCost += nested_metric.cost_values.total_cost

                                        ne
                                        ne
                                        ne
                                    }
                                }
                                ne => {
                                    return metric.model && metric.provider
                                })
                            }
                            const metrics = evaluationRow.metrics
                             {
                                 {
                                    metrics.push({
                                        promptTokens: promptTokens,
                                        completionTokens: completionTokens,
                                        totalTokens: totalTokens,
                                        t,
                                        p,
                                        
                                    })
                                    metricsObjFromRun.nested_metrics = nested_metrics
                                }
                                met => {
                                     {
                                        
                                        Obje.map((key) => {
                                            metricsObjFromRun[key] = json[key]
                                        })
                                    }
                                })
                                met
                            }
                            e
                        }

                        
                        newRun.evaluationId = newEvaluation.id
                        newRun.
                        newRun.input = resultRow.input
                        newRun.expectedOutput = resultRow.expectedOutput
                        newRun.a
                        newRun.e
                        
                        newRun.met

                        const { results, evaluatorMetrics } = await runAdditionalEvaluators(
                            metricsArray,
                            actualOutputArray,
                            errorArray,
                            b : []
                        )

                        newRun.evaluat
                        evalMetrics.passCount += evaluatorMetrics.passCount
                        evalMetrics.failCount += evaluatorMetrics.failCount
                        evalMetrics.errorCount += evaluatorMetrics.errorCount

                         {
                            resultRow.llmConfig = additionalConfig.llmConfig
                             : []
                            const llmEvaluatorMap: { evaluatorId: string; evaluator: any }[] = []
                            f {
                                const evaluatorId = resultRow.LLMEvaluators[i]
                                
                                llmEvaluatorMap.push({
                                    evaluatorId: evaluatorId,
                                    evaluator: evaluator
                                })
                            }
                            // iterate over the actualOutputArray and add the actualOutput to the evaluationLineItem object
                            const resultArray = await llmEvaluationRunner.runLLMEvaluators(
                                resultRow,
                                actualOutputArray,
                                errorArray,
                                llmEvaluatorMap
                            )
                            newRun.llmEvaluat
                            .
                            awa.
                        } else {
                            .
                            awa.
                        }
                    }
                    //update the evaluation with status as completed
                    let passPercent = -1
                     {
                        passPercent =
                            (evalMet) * 100
                    }
                    appSe
                        .f
                        .then((evaluat => {
                             {
                                evaluation.status = allRowsSuccessful ? EvaluationStatus.COMPLETED : EvaluationStatus.ERROR
                                evaluation.average_metrics = JSON.stringify({
                                    ave.t,
                                    totalRuns: result.rows.length,
                                    ...evalMetrics,
                                    pa
                                })
                                appSe.
                            }
                        })
                }  {
                    //update the evaluation with status as error
                    appSe
                        .f
                        .then((evaluat => {
                             {
                                evaluation.status = EvaluationStatus.ERROR
                                appSe.
                            }
                        })
                }
            })
            . => {
                // Handle errors from runEvaluations
                )
                appSe
                    .f
                    .then((evaluat => {
                         {
                            evaluation.status = EvaluationStatus.ERROR
                            evaluation.average_metrics = JSON.stringify({
                                e
                            })
                            appSe.
                        }
                    })
                    . => {
                        )
                    })
            })

        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        

        // First, get the count of distinct evaluation names for the total
        // nee method in TypeORM doesn't respect the GROUP BY clause and will return the total count of records
        
            .
            .)', '
            .whe

        
         : 0

        // Then get the distinct evaluation names with their counts and latest run date
        
            .
            .', 'name')
            .a', '
            .a', 'late
            .an
            .g
            .', ' // Order by the latest run date

         {
            name * l
            name
        }

        
        // Get all evaluations for all names at once in a single query
        const returnResults: IEvaluationResult[] = []

         {
             => 
            // Fetch all evaluations for these names in a single query
            
                .
                .whe', { name
                .an
                .
                .a
                .getMany()

            // Process the results by name
            
            // Group evaluations by name
            f {
                ) {
                    evaluat
                }
                evaluat
            }

            // Process each name's evaluations
            f {
                 || []
                f {
                    const evaluation = evaluationsForName[i] as IEvaluationResult
                    evaluation.latestEval = i === 0
                    evaluat - i
                    
                }
            }
        }

         {
            return {
                total: total,
                data: returnResults
            }
        } else {
            return returnResults
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Delete evaluation and all rows via id
 => {
    try {
        
        awa.
        awa.
        .f)
        return results
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// check for outdated evaluations
 => {
    try {
        
        .findOneBy({
            id: id
        })
         th
        
        let isOutdated = false
        const returnObj: ICommonObject = {
            isOutdated: false,
            chatflows: [],
            dataset: '',
            errors: []
        }

        // check if the evaluation is outdated by extracting the runTime and then check with the dataset last updated time as well
        // as the chatflows last updated time. If the evaluation is outdated, then return true else return false
        .findOneBy({
            id: evaluation.datasetId
        })
         {
            
             {
                isOutdated = true
                returnObj.dataset = dataset
            }
        } else {
            returnObj.errors.push({
                message: `Dataset ${evaluation.datasetName} not found`,
                id: evaluation.datasetId
            })
            isOutdated = true
        }
         : []
         : []
        .chatflowTypes : []
        f {
            // check for backward compatibility, as previous versions did not the types in additionalConfig
             {
                 {
                    // if the chatflow type is custom assistant, then we should NOT check in the chatflows table
                    continue
                }
            }
            .findOneBy({
                id: chatflowIds[i]
            })
             {
                returnObj.errors.push({
                    message: `Chatflow ${chatflowNames[i]} not found`,
                    id: chatflowIds[i]
                })
                isOutdated = true
            } else {
                
                 {
                    isOutdated = true
                    returnObj.chatflows.push({
                        chatflowName: chatflowNames[i],
                        chatflowId: chatflowIds[i],
                        chatflowType: chatflow.type === 'AGENTFLOW' ? 'Agentflow v2' : 'Chatflow',
                        isOutdated: true
                    })
                }
            }
        }
         {
            f {
                 {
                    // if the chatflow type is NOT custom assistant, then bail out for this item
                    continue
                }
                .findOneBy({
                    id: chatflowIds[i]
                })
                 {
                    returnObj.errors.push({
                        message: `Custom Assistant ${chatflowNames[i]} not found`,
                        id: chatflowIds[i]
                    })
                    isOutdated = true
                } else {
                    
                     {
                        isOutdated = true
                        returnObj.chatflows.push({
                            chatflowName: chatflowNames[i],
                            chatflowId: chatflowIds[i],
                            chatflowType: 'Custom Assistant',
                            isOutdated: true
                        })
                    }
                }
            }
        }
        returnObj.isOutdated = isOutdated
        return returnObj
    }  {
        th}`)
    }
}

 => {
    try {
        
        .findOneBy({
            id: id
        })
         th
        .countBy({
            name: evaluation.name
        })
        .find({
            where: { evaluationId: id }
        })
        ).versions
         => ve + 1
        return {
            ...evaluation,
            versionCount: versionCount,
            versionNo: versionNo,
            rows: items
        }
    }  {
        th}`)
    }
}

 => {
    try {
        
        .findOneBy({
            id: id
        })
         th
        .find({
            where: {
                name: evaluation.name
            },
            order: {
                runDate: 'ASC'
            }
        })
        const returnResults: { id: string; runDate: Date; version: number }[] = []
        ve => {
            returnResults.push({
                id: version.id,
                runDate: version.runDate,
                version: index + 1
            })
        })
        return {
            versions: returnResults
        }
    }  {
        th}`)
    }
}

 => {
    try {
        
        .find({
            where: {
                
            }
        })
        awa.
        f {
            awa.
        }

         {
            f {
                .find({
                    where: {
                        name: evaluation.name
                    }
                })
                 {
                    awa.delete(
                         => evaluat
                    )
                    f {
                        awa.
                    }
                }
            }
        }

        .f)
        return results
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    createEvaluation,
    getAllEvaluations,
    deleteEvaluation,
    getEvaluation,
    isOutdated,
    runAgain,
    getVersions,
    patchDeleteEvaluations
}
