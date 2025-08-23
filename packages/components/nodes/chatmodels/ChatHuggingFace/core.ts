import { LLM, BaseLLMParams } from '@langchain/core/language_models/llms'
import { getEnvironmentVariable } from '../../../src/utils'
import { GenerationChunk } from '@langchain/core/outputs'
import { CallbackManagerForLLMRun } from '@langchain/core/callbacks/manager'

export interface HFInput {
    model: string
    temperature?: number
    maxTokens?: number
    stopSequences?: string[]
    topP?: number
    topK?: number
    frequencyPenalty?: number
    apiKey?: string
    endpointUrl?: string
    includeCredentials?: string | boolean
}

export class HuggingFaceInference extends LLM implements HFInput {
    get l: { [key: string]: string } | undefined {
        return {
            apiKey: 'HUGGINGFACEHUB_API_KEY'
        }
    }

    model = 'gpt2'

    temperature: number | undefined = undefined

    stopSequences: string[] | undefined = undefined

    maxTokens: number | undefined = undefined

    topP: number | undefined = undefined

    topK: number | undefined = undefined

    frequencyPenalty: number | undefined = undefined

    apiKey: string | undefined = undefined

    endpointUrl: string | undefined = undefined

    includeCredentials: string | boolean | undefined = undefined

     {
        

        this.model = fields?.model ?? this.model
        this.temperature = fields?.temperature ?? this.temperature
        this.maxTokens = fields?.maxTokens ?? this.maxTokens
        this.stopSequences = fields?.stopSequences ?? this.stopSequences
        this.topP = fields?.topP ?? this.topP
        this.topK = fields?.topK ?? this.topK
        this.frequencyPenalty = fields?.frequencyPenalty ?? this.frequencyPenalty
        th
        this.endpointUrl = fields?.endpointUrl
        this.includeCredentials = fields?.includeCredentials
         {
            throw new Error(
                'Please set an API key for HuggingFace Hub in the environment variable HUGGINGFACEHUB_API_KEY or in the apiKey field of the HuggingFaceInference constructor.'
            )
        }
    }

    _llmType() {
        return 'hf'
    }

     {
        return {
            model: this.model,
            parameters: {
                // make it behave similar to openai, returning only the generated text
                return_full_text: false,
                temperature: this.temperature,
                max_new_tokens: this.maxTokens,
                stop: options?.stop ?? this.stopSequences,
                top_p: this.topP,
                top_k: this.topK,
                repetition_penalty: this.frequencyPenalty
            }
        }
    }

    async *_streamResponseChunks(
        prompt: string,
        options: this['ParsedCallOptions'],
        runManager?: CallbackManagerForLLMRun
    ): AsyncGenerator<GenerationChunk> {
        
         =>
            hfi.textGenerationStream({
                ...th,
                inputs: prompt
            })
        )
        f {
            const token = chunk.token.text
            y
            awa

            // stream is done
            
                yield new GenerationChunk({
                    text: '',
                    generationInfo: { finished: true }
                })
        }
    }

    /** @ignore */
    a: Promise<string> {
        
        , inputs: prompt }
        , a
        return res.generated_text
    }

    /** @ignore */
    p {
        
        const hfi = new HfInference(this.apiKey, {
            includeCredentials: this.includeCredentials
        })
         : hfi
    }

    /** @ignore */
    : Promise<{
        HfInfe.HfInference
    }> {
        try {
            
            return { HfInference }
        }  {
            th
        }
    }
}
