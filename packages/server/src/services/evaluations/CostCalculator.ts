import { ICommonObject } from 'flowise-components'

// fractionDigits is the number of digits after the decimal point, for display purposes
const fractionDigits = 2
// This function calculates the cost of the tokens from a metrics array
exp => {
    f {
        const metric = metricsArray[i]
        const model = metric.model
         {
            continue
        }
        const completionTokens = metric.completionTokens
        const promptTokens = metric.promptTokens
        const totalTokens = metric.totalTokens

        let promptTokensCost: string = '0'
        let completionTokensCost: string = '0'
        let totalTokensCost = '0'
         {
            let costValues: any = {}
             {
                costValues = metric.cost_values.cost_values
            } else {
                costValues = metric.cost_values
            }

             {
                let 
                t
            } else {
                let totalCost = 0
                 {
                    
                    totalCost += cost
                    p
                }
                 {
                    
                    totalCost += cost
                    
                }
                t
            }
        }
        metric['totalCost'] = totalTokensCost
        metric['promptCost'] = promptTokensCost
        metric['completionCost'] = completionTokensCost
    }
}

exp => {
     {
        return '$ 0'
    }
    
}
