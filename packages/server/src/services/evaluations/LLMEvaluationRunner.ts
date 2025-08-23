import { convertSchemaToZod, ICommonObject } from 'flowise-components'
import { z } from 'zod'
import { RunnableSequence } from '@langchain/core/runnables'
import { PromptTemplate } from '@langchain/core/prompts'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { databaseEntities } from '../../utils'

export class LLMEvaluationRunner {
    private llm: any

    a {
        const evaluationResults: any[] = []
         {
            th
        }

        f {
            const actualOutput = actualOutputArray[j]
            f {
                 {
                    evaluationResults.push({
                        error: 'Not Graded!'
                    })
                    continue
                }
                try {
                    const llmEvaluator = llmEvaluatorMap[i]
                    let evaluator = llmEvaluator.evaluator
                    ))
                    
                    const llmExecutor = RunnableSequence.from([
                        P,
                        modelWithStructuredOutput
                    ])
                    const response = await llmExecutor.invoke({
                        question: data.input,
                        actualOutput: actualOutput,
                        expectedOutput: data.expectedOutput
                    })
                    evaluat
                }  {
                    evaluationResults.push({
                        error: 'error'
                    })
                }
            }
        }
        return evaluationResults
    }

    a: Promise<any> {
        try {
            
            const nodeInstanceFilePath = appServer.nodesPool.componentNodes[data.llmConfig.llm].filePath as string
            
            
            let nodeData = {
                inputs: { modelName: data.llmConfig.model },
                credential: data.llmConfig.credentialId,
                id: 'llm_0'
            }
            const options: ICommonObject = {
                appDataSource: appServer.AppDataSource,
                databaseEntities: databaseEntities
            }
            
        }  {
            th
        }
    }
}
