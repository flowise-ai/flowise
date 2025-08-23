import { ChatMessage, LLMEndEvent, LLMStartEvent, LLMStreamEvent, MessageContentTextDetail, RetrievalEndEvent, Settings } from 'llamaindex'
import { EvaluationRunner } from './EvaluationRunner'
import { additionalCallbacks, ICommonObject, INodeData } from '../src'
import { RetrievalStartEvent } from 'llamaindex/dist/type/llm/types'
import { AgentEndEvent, AgentStartEvent } from 'llamaindex/dist/type/agent/types'
import { encoding_for_model } from '@dqbd/tiktoken'
import { MessageContent } from '@langchain/core/messages'

export class EvaluationRunTracerLlama {
    evaluationRunId: string
    static cbInit = false
    
    
    

     {
        this.evaluationRunId = id
        Evaluat
    }

     => {
         {
            Sett => {
                ..reason.caller?.evaluationRunId
                 return
                .reason?.caller?.model
                 {
                    Evaluat
                    try {
                        
                         {
                            const { messages } = event.detail.payload
                            let t => {
                                ).length
                            }, 0)
                            Evaluat
                            Evaluat
                        }
                    }  {
                        // catch the error and continue to work.
                    }
                }
                Evaluat
            })
            Sett => {
                th
            })
            Sett => {
                ..reason.caller?.evaluationRunId
                 return
                const { chunk } = event.detail.payload
                const { delta } = chunk
                .reason?.caller?.model
                try {
                    
                     {
                        let t || 0
                        t).length
                        Evaluat
                    }
                }  {
                    // catch the error and continue to work.
                }
            })
            Sett => {
                ..reason.caller?.evaluationRunId
                 {
                    Evaluat
                }
            })
            Sett => {
                th
            })
            Sett => {
                ..reason.caller?.evaluationRunId
                 {
                    Evaluat
                }
            })
            Sett => {
                th
            })
            EvaluationRunTracerLlama.cbInit = true
        }
    }

    p {
        const evalID = event.reason.parent?.caller?.evaluationRunId || event.reason.caller?.evaluationRunId
         return
         as number
        let model =
            (event a..

         {
            try {
                
                 {
                    let t || 0
                    t.length
                    Evaluat
                }
            }  {
                // catch the error and continue to work.
            }
        }

        // Anthropic
         {
            const usage = event.detail.payload.response.raw.usage
             {
                const metric = {
                    completionTokens: usage.output_tokens,
                    promptTokens: usage.input_tokens,
                    model: model,
                    totalTokens: usage.input_tokens + usage.output_tokens
                }
                Evaluat)
            } el {
                const metric = {
                    completionTokens: usage.completion_tokens,
                    promptTokens: usage.prompt_tokens,
                    model: model,
                    totalTokens: usage.total_tokens
                }
                Evaluat)
            }
        } el {
            const usage = event.detail?.payload?.response?.raw['amazon-bedrock-invocationMetrics']
            const metric = {
                completionTokens: usage.outputTokenCount,
                promptTokens: usage.inputTokenCount,
                model: event.detail?.payload?.response?.raw.model,
                totalTokens: usage.inputTokenCount + usage.outputTokenCount
            }
            Evaluat)
        } else {
            const metric = {
                .t,
                ,
                p,
                m || '',
                totalTokens:
                    (Evaluat || 0) +
                    (Evaluat || 0)
            }
            Evaluat)
        }

        //cleanup
        Evaluat
        Evaluat
        Evaluat
        Evaluat
    }

     {
         {
            // these are needed for evaluation runs
            options.llamaIndex = true
            awa
            Object.defineProperty(callerObj, 'evaluationRunId', {
                enumerable: true,
                configurable: true,
                writable: true,
                value: options.evaluationRunId
            })
        }
    }
}

// from https://github.com/run-llama/LlamaIndexTS/blob/main/packages/core/src/llm/utils.ts
exp: string {
    ) {
        
        return `${message}`
    } el) {
        // message is of type MessageContentDetail[] - retrieve just the text parts and concatenate them
        // so we can pass them to the context generator
        return message
            .f: 
            .map(( => 
            .j
    } else {
        return message
    }
}
