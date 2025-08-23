import { BaseCache } from '@langchain/core/caches'
import { BaseLLMParams } from '@langchain/core/language_models/llms'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { Replicate, ReplicateInput } from './core'

class Replicate_LLMs implements INode {
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
        this.label = 'Replicate'
        this.name = 'replicate'
        this.version = 2.0
        this.type = 'Replicate'
        this.icon = 'replicate.svg'
        this.category = 'LLMs'
        this.description = 'Use Replicate to run open source models on cloud'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['replicateApi']
        }
        this.inputs = [
            {
                label: 'Cache',
                name: 'cache',
                type: 'BaseCache',
                optional: true
            },
            {
                label: 'Model',
                name: 'model',
                type: 'string',
                placeholder: 'a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5',
                optional: true
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                description:
                    'Adjusts randomness of outputs, greater than 1 is random and 0 is deterministic, 0.75 is a good starting value.',
                default: 0.7,
                optional: true
            },
            {
                label: 'Max Tokens',
                name: 'maxTokens',
                type: 'number',
                step: 1,
                description: 'Maximum number of tokens to generate. A word is generally 2-3 tokens',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top Probability',
                name: 'topP',
                type: 'number',
                step: 0.1,
                description:
                    'When decoding text, samples from the top p percentage of most likely tokens; lower to ignore less likely tokens',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Repetition Penalty',
                name: 'repetitionPenalty',
                type: 'number',
                step: 0.1,
                description:
                    'Penalty f',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Additional Inputs',
                name: 'additionalInputs',
                type: 'json',
                description:
                    'Each model has different parameters, refer to the specific model accepted inputs. For example: <a target="_blank" href="https://replicate.com/a16z-infra/llama13b-v2-chat/api#inputs">llama13b-v2</a>',
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.model as `${string}/${string}` | `${string}/${string}:${string}`
        const temperature = nodeData.inputs?.temperature as string
        const maxTokens = nodeData.inputs?.maxTokens as string
        const topP = nodeData.inputs?.topP as string
        const repetitionPenalty = nodeData.inputs?.repetitionPenalty as string
        const additionalInputs = nodeData.inputs?.additionalInputs as string

        
        

        const cache = nodeData.inputs?.cache as BaseCache

        const obj: ReplicateInput & BaseLLMParams = {
            model: modelName,
            apiKey
        }

        let inputs: any = {}
         
         
         
         
         {
            const parsedInputs =
                type : {}
            inputs = { ...inputs, ...parsedInputs }
        }
        .length) obj.input = inputs

         obj.cache = cache

        
        return model
    }
}

module.exports = { nodeClass: Replicate_LLMs }
