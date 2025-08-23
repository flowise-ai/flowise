import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src'
import { TogetherAI, TogetherAIInputs } from '@langchain/community/llms/togetherai'
import { getModels, MODEL_TYPE } from '../../../src/modelLoader'
import { BaseCache } from '@langchain/core/caches'

class TogetherAI_LLMs implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'TogetherAI'
        this.name = 'togetherAI'
        this.version = 1.0
        this.type = 'TogetherAI'
        this.icon = 'togetherai.png'
        this.category = 'LLMs'
        this.description = 'Wrapper around TogetherAI large language models'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['togetherAIApi']
        }
        this.inputs = [
            {
                label: 'Cache',
                name: 'cache',
                type: 'BaseCache',
                optional: true
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                description: 'The name of the model to query.'
            },
            {
                label: 'Top K',
                name: 'topK',
                type: 'number',
                description:
                    'The topK parameter is used to limit the number of choices for the next predicted word or token. It specifies the maximum number of tokens to consider at each step, based on their probability of occurrence. This technique helps to speed up the generation process and can improve the quality of the generated text by focusing on the most likely options.',
                step: 1,
                default: 50
            },
            {
                label: 'Top P',
                name: 'topP',
                type: 'number',
                description:
                    'The t parameter is used to dynamically adjust the number of choices for each predicted token based on the cumulative probabilities. It specifies a probability threshold, below which all less likely tokens are filtered out. This technique helps to maintain diversity and generate more fluent and natural-sounding text.',
                step: 0.1,
                default: 0.7
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                description:
                    'A decimal number that determines the degree of randomness in the response. A value of 1 will always yield the same output. A temperature less than 1 favors more correctness and is appropriate for question answering or summarization. A value greater than 1 introduces more randomness in the output.',
                step: 0.1,
                default: 0.7
            },
            {
                label: 'Repeat Penalty',
                name: 'repeatPenalty',
                type: 'number',
                description:
                    'A number that controls the diversity of generated text by reducing the likelihood of repeated sequences. Higher values decrease repetition.',
                step: 0.1,
                default: 1
            },
            {
                label: 'Streaming',
                name: 'streaming',
                type: 'boolean',
                default: false,
                description: 'Whether or not to stream tokens as they are generated'
            },
            {
                label: 'Max Tokens',
                name: 'maxTokens',
                type: 'number',
                step: 1,
                description: 'Limit the number of tokens generated.',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Stop Sequence',
                name: 'stop',
                type: 'string',
                rows: 4,
                placeholder: 'AI assistant:',
                description: 'A list of tokens at which the generation should stop.',
                optional: true,
                additionalParams: true
            }
            // todo: safetyModel? logprobs?
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const temperature = nodeData.inputs?.temperature as string
        const maxTokens = nodeData.inputs?.maxTokens as string
        const topP = nodeData.inputs?.topP as string
        const topK = nodeData.inputs?.topK as string
        const repeatPenalty = nodeData.inputs?.repeatPenalty as string
        const modelName = nodeData.inputs?.modelName as string
        const stop = nodeData.inputs?.stop as string
        const streaming = nodeData.inputs?.streaming as boolean

        const cache = nodeData.inputs?.cache as BaseCache

        
        

        const obj: TogetherAIInputs = {
            modelName,
            apiKey: togetherAiApiKey,
            streaming: streaming ?? false
        }

         
         
         
         
         
         obj.streaming = streaming
         {
            
        }
         obj.cache = cache

        
        return togetherAI
    }
}

module.exports = { nodeClass: TogetherAI_LLMs }
