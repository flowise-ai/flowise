import { LLM, BaseLLMParams } from '@langchain/core/language_models/llms'
import { getEnvironmentVariable } from '../../../src/utils'

export interface HFInput {
    /** Model to use */
    model: string

    /** Sampling temperature to use */
    temperature?: number

    /**
     * Maximum number of tokens to generate in the completion.
     */
    maxTokens?: number

    /** Total probability mass of tokens to consider at each step */
    topP?: number

    /** Integer to define the top tokens considered within the sample operation to create new text. */
    topK?: number

    /** Penalizes repeated tokens according to frequency */
    frequencyPenalty?: number

    /** API key to use. */
    apiKey?: string

    /** Private endpoint to use. */
    endpoint?: string
}

export class HuggingFaceInference extends LLM implements HFInput {
    get l: { [key: string]: string } | undefined {
        return {
            apiKey: 'HUGGINGFACEHUB_API_KEY'
        }
    }

    model = 'gpt2'

    temperature: number | undefined = undefined

    maxTokens: number | undefined = undefined

    topP: number | undefined = undefined

    topK: number | undefined = undefined

    frequencyPenalty: number | undefined = undefined

    apiKey: string | undefined = undefined

    endpoint: string | undefined = undefined

     {
        

        this.model = fields?.model ?? this.model
        this.temperature = fields?.temperature ?? this.temperature
        this.maxTokens = fields?.maxTokens ?? this.maxTokens
        this.topP = fields?.topP ?? this.topP
        this.topK = fields?.topK ?? this.topK
        this.frequencyPenalty = fields?.frequencyPenalty ?? this.frequencyPenalty
        this.endpoint = fields?.endpoint ?? ''
        th
         {
            throw new Error(
                'Please set an API key for HuggingFace Hub in the environment variable HUGGINGFACEHUB_API_KEY or in the apiKey field of the HuggingFaceInference constructor.'
            )
        }
    }

    _llmType() {
        return 'hf'
    }

    /** @ignore */
    a: Promise<string> {
        
        
        const obj: any = {
            parameters: {
                // make it behave similar to openai, returning only the generated text
                return_full_text: false,
                temperature: this.temperature,
                max_new_tokens: this.maxTokens,
                top_p: this.topP,
                top_k: this.topK,
                repetition_penalty: this.frequencyPenalty
            },
            inputs: prompt
        }
         {
            hf.en
        } else {
            obj.model = this.model
        }
        , 
        return res.generated_text
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
