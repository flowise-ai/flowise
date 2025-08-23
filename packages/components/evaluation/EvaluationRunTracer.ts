import { RunCollectorCallbackHandler } from '@langchain/core/tracers/run_collector'
import { Run } from '@langchain/core/tracers/base'
import { EvaluationRunner } from './EvaluationRunner'
import { encoding_for_model, get_encoding } from '@dqbd/tiktoken'

export class EvaluationRunTracer extends RunCollectorCallbackHandler {
    evaluationRunId: string
    model: string

     {
        
        this.evaluationRunId = id
    }

    a: Promise<void> {
        
    }

    : number => {
        let promptTokenCount = 0
         {
             {
                 => {
                    let content = message.content
                        ? message.content
                        : message.SystemMessage?.content
                        ? message.SystemMessage.content
                        : message.HumanMessage?.content
                        ? message.HumanMessage.content
                        : message.AIMessage?.content
                        ? message.AIMessage.content
                        : undefined
                    p.length : 0
                })
            }
             {
                const content = run.inputs.prompts[0]
                p.length : 0
            }
        }
        return promptTokenCount
    }

    : number => {
        let completionTokenCount = 0
         {
             {
                 => {
                    let content = chunk.text ? chunk.text : chunk.message?.content ? chunk.message?.content : undefined
                    .length : 0
                })
            }
        }
        return completionTokenCount
    }

    ext: string => {
        return (
            (?.kwargs?.model ||
            (?.kwargs?.model_name ||
            (?.metadata?.ls_model_name ||
            (?.metadata?.fw_model_name
        )
    }

    : void | Promise<void> {
         {
            let provider = run.name
             {
                provider = 'awsChatBedrock'
            }
            EvaluationRunner.addMetrics(
                this.evaluationRunId,
                JSON.stringify({
                    provider: provider
                })
            )
        }

        let m
         {
            const tokenUsage = run.outputs?.llmOutput?.tokenUsage
             {
                const metric = {
                    completionTokens: tokenUsage.completionTokens,
                    promptTokens: tokenUsage.promptTokens,
                    model: model,
                    totalTokens: tokenUsage.totalTokens
                }
                Evaluat)
            }
        } else if (
            run.outputs?.generations?.length > 0 &&
            run.outputs?.generations[0].length > 0 &&
            run.outputs?.generations[0][0]?.message?.usage_metadata?.total_tokens
        ) {
            const usage_metadata = run.outputs?.generations[0][0]?.message?.usage_metadata
             {
                const metric = {
                    completionTokens: usage_metadata.output_tokens,
                    promptTokens: usage_metadata.input_tokens,
                    model: model || this.model,
                    totalTokens: usage_metadata.total_tokens
                }
                Evaluat)
            }
        } else {
            let encoding: any = undefined
            let promptInputTokens = 0
            let completionTokenCount = 0
            try {
                en
                p
                
            }  {
                try {
                    // as tiktoken will fail for non openai models, assume that is 'cl100k_base'
                    en
                    p
                    
                }  {
                    // stay silent
                }
            }
            const metric = {
                completionTokens: completionTokenCount,
                promptTokens: promptInputTokens,
                model: model,
                totalTokens: promptInputTokens + completionTokenCount
            }
            Evaluat)
            //cleanup
            this.model = ''
        }
    }

    a: Promise<void> {
        const json = {
            
        }
        let met
         {
            Evaluat
        }

         {
            let m
             {
                Evaluat)
                this.model = model
            }
            // OpenAI non streaming models
            const estimatedTokenUsage = run.outputs?.llmOutput?.estimatedTokenUsage
            .length > 0) {
                Evaluat
            }
        }
    }
}

fun {
     return ''
    const elapsed = run.end_time - run.start_time
    }`
}
