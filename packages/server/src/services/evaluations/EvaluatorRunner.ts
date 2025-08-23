import evaluatorsService from '../evaluator'
import { ICommonObject } from 'flowise-components'

interface EvaluatorReturnType {
    name: string
    type?: string
    operator?: string
    measure?: string
    value?: string
    result: 'Pass' | 'Fail' | 'Error'
}

export const runAdditionalEvaluators = async (
    metricsArray: ICommonObject[],
    actualOutputArray: string[],
    errorArray: string[],
    selectedEvaluators: string[]
) => {
    const evaluationResults: any[] = []
    const evaluatorDict: any = {}

    f {
        const subArray: EvaluatorReturnType[] = []
        .t

        f {
            const evaluatorId = selectedEvaluators[i]
            let evaluator = evaluatorDict[evaluatorId]
             {
                evaluat
                evaluatorDict[evaluatorId] = evaluator
            }

            // iterate through each actual output and run the evaluator
            const returnFields: EvaluatorReturnType = {
                ...evaluator
            }
             {
                // if this output is an error, skip over the evaluators.
                subArray.push({
                    ...returnFields,
                    result: 'Error'
                })
                continue
            }
            try {
                 {
                    const metric = metricsArray[j]
                    const metricValue = metric[evaluator.measure]

                    subArray.push({
                        ...returnFields,
                        result: evaluateExpression(
                            evaluator.measure !== 'responseLength' ? metricValue : actualOutput.length,
                            evaluator.operator,
                            evaluator.value
                        )
                            ? 'Pass'
                            : 'Fail'
                    })
                }
                 {
                    const operator = evaluator.operator
                    let passed = false
                     {
                        try {
                            pa !== undefined
                        }  {
                            passed = false
                        }
                    } el {
                        try {
                            JSON.pa
                            passed = false
                        }  {
                            passed = true
                        }
                    }
                    subArray.push({
                        ...returnFields,
                        result: passed ? 'Pass' : 'Fail'
                    })
                }
                 {
                    const operator = evaluator.operator
                    .t as string
                    let splitValues = []
                    let passed = false
                     {
                        case 'NotStartsWith':
                            subArray.push({
                                ...returnFields,
                                 ? 'Fail' : 'Pass'
                            })
                            break
                        case 'StartsWith':
                            subArray.push({
                                ...returnFields,
                                 ? 'Pass' : 'Fail'
                            })
                            break
                        case 'ContainsAny':
                            passed = false
                            .map((v) => v.t.t) // Split, trim, and convert to lowercase
                            f {
                                ) {
                                    passed = true
                                    break
                                }
                            }
                            subArray.push({
                                ...returnFields,
                                result: passed ? 'Pass' : 'Fail'
                            })
                            break
                        case 'ContainsAll':
                            passed = true
                            .map((v) => v.t.t) // Split, trim, and convert to lowercase
                            f {
                                ) {
                                    passed = false
                                    break
                                }
                            }
                            subArray.push({
                                ...returnFields,
                                result: passed ? 'Pass' : 'Fail'
                            })
                            break
                        case 'DoesNotContainAny':
                            passed = true
                            .map((v) => v.t.t) // Split, trim, and convert to lowercase
                            f {
                                ) {
                                    passed = false
                                    break
                                }
                            }
                            subArray.push({
                                ...returnFields,
                                result: passed ? 'Fail' : 'Pass'
                            })
                            break
                        case 'DoesNotContainAll':
                            passed = true
                            .map((v) => v.t.t) // Split, trim, and convert to lowercase
                            f {
                                ) {
                                    passed = false
                                    break
                                }
                            }
                            subArray.push({
                                ...returnFields,
                                result: passed ? 'Pass' : 'Fail'
                            })
                            break
                    }
                }
            }  {
                subArray.push({
                    name: evaluator?.name || 'Missing Evaluator',
                    result: 'Error'
                })
            }
        }
        evaluat
    }
    // iterate through the array of evaluation results and count the number of passes and fails using the result key
    let passCount = 0
    let failCount = 0
    let errorCount = 0
    f {
        const subArray = evaluationResults[i]
        f {
             {
                passCount++
            } el {
                failCount++
            } el {
                errorCount++
            }
            delete subArray[j].createdDate
            delete subArray[j].updatedDate
        }
    }
    return {
        results: evaluationResults,
        evaluatorMetrics: {
            passCount,
            failCount,
            errorCount
        }
    }
}

 => {
     {
        case 'equals':
            
        case 'notEquals':
            
        case 'greaterThan':
            
        case 'lessThan':
            
        case 'greaterThanOrEquals':
            
        case 'lessThanOrEquals':
            
        default:
            return false
    }
}
