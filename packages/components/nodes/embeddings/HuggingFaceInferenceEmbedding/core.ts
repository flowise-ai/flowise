import { HfInference } from '@huggingface/inference'
import { Embeddings, EmbeddingsParams } from '@langchain/core/embeddings'
import { getEnvironmentVariable } from '../../../src/utils'

export interface HuggingFaceInferenceEmbeddingsParams extends EmbeddingsParams {
    apiKey?: string
    model?: string
    endpoint?: string
}

export class HuggingFaceInferenceEmbeddings extends Embeddings implements HuggingFaceInferenceEmbeddingsParams {
    apiKey?: string

    endpoint?: string

    model: string

    client: HfInference

     {
        

        this.model = fields?.model ?? 'sentence-transformers/distilbert-base-nli-mean-tokens'
        th
        this.endpoint = fields?.endpoint ?? ''
        th
         th
    }

    a: Promise<number[][]> {
        // replace newlines, which can negatively affect performance.
         => text.)
        
        const obj: any = {
            inputs: clean
        }
         {
            hf.en
        } else {
            obj.model = this.model
        }

        , 
        return res as number[][]
    }

    a: Promise<number[]> {
        
        return res[0]
    }

    a: Promise<number[][]> {
        
    }
}
