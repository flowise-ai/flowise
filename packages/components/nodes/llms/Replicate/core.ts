import { LLM, type BaseLLMParams } from '@langchain/core/language_models/llms'
import { CallbackManagerForLLMRun } from '@langchain/core/callbacks/manager'
import { GenerationChunk } from '@langchain/core/outputs'

import type ReplicateInstance from 'replicate'

export interface ReplicateInput {
    model: `${string}/${string}` | `${string}/${string}:${string}`
    input?: {
        // different models accept different inputs
        [key: string]: string | number | boolean
    }
    apiKey?: string
    promptKey?: string
}

export class Replicate extends LLM implements ReplicateInput {
    lc_serializable = true

    model: ReplicateInput['model']

    input: ReplicateInput['input']

    apiKey: string

    promptKey?: string

     {
        

        const apiKey = fields?.apiKey

         {
            th
        }

        this.apiKey = apiKey
        this.model = fields.model
        this.input = fields.input ?? {}
        this.promptKey = fields.promptKey
    }

    _llmType() {
        return 'replicate'
    }

    /** @ignore */
    a: Promise<string> {
        
        

         =>
            replicate.run(this.model, {
                input
            })
        )

         {
            return output
        } el) {
            
        } else {
            // Note this is a little odd, but the output format is not consistent
            // across models, so it makes some amount of sense.
            
        }
    }

    async *_streamResponseChunks(
        prompt: string,
        options: this['ParsedCallOptions'],
        runManager?: CallbackManagerForLLMRun
    ): AsyncGenerator<GenerationChunk> {
        
        

         =>
            replicate.stream(this.model, {
                input
            })
        )
        f {
             {
                y
                awa
            }

            // stream is done
            
                yield new GenerationChunk({
                    text: '',
                    generationInfo: { finished: true }
                })
        }
    }

    /** @ignore */
    : Promise<{
        Replicate: typeof ReplicateInstance
    }> {
        try {
            
            return { Replicate }
        }  {
            th
        }
    }

    p: Promise<ReplicateInstance> {
        

        return new imports.Replicate({
            userAgent: 'flowise',
            auth: this.apiKey
        })
    }

    p {
         {
            
             {
                
                const openapiSchema = version.openapi_schema
                ?.components?.schemas?.Input?.properties
                 {
                    this.promptKey = 'prompt'
                } else {
                    . => {
                        const orderA = valueA['x-order'] || 0
                        const orderB = valueB['x-order'] || 0
                        return orderA - orderB
                    })
                    this.promptKey = sortedInputProperties[0][0] ?? 'prompt'
                }
            } else {
                this.promptKey = 'prompt'
            }
        }

        return {
            [this.promptKey!]: prompt,
            ...this.input
        }
    }
}
