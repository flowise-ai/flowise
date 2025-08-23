import { OpenAIChatInput, ChatOpenAI } from '@langchain/openai'
import { BaseCache } from '@langchain/core/caches'
import { BaseLLMParams } from '@langchain/core/language_models/llms'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class ChatLitellm_ChatModels implements INode {
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
        this.label = 'ChatLitellm'
        this.name = 'chatLitellm'
        this.version = 1.0
        this.type = 'ChatLitellm'
        this.icon = 'litellm.jpg'
        this.category = 'Chat Models'
        this.description = 'Connect to a Litellm server using OpenAI-compatible API'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['litellmApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Cache',
                name: 'cache',
                type: 'BaseCache',
                optional: true
            },
            {
                label: 'Base URL',
                name: 'basePath',
                type: 'string',
                placeholder: 'http://localhost:8000'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                placeholder: 'model_name'
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                default: 0.9,
                optional: true
            },
            {
                label: 'Streaming',
                name: 'streaming',
                type: 'boolean',
                default: true,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Tokens',
                name: 'maxTokens',
                type: 'number',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top P',
                name: 'topP',
                type: 'number',
                step: 0.1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Timeout',
                name: 'timeout',
                type: 'number',
                step: 1,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const cache = nodeData.inputs?.cache as BaseCache
        const basePath = nodeData.inputs?.basePath as string
        const modelName = nodeData.inputs?.modelName as string
        const temperature = nodeData.inputs?.temperature as string
        const streaming = nodeData.inputs?.streaming as boolean
        const maxTokens = nodeData.inputs?.maxTokens as string
        const topP = nodeData.inputs?.topP as string
        const timeout = nodeData.inputs?.timeout as string

        
        

        const obj: Partial<OpenAIChatInput> &
            BaseLLMParams & { openAIApiKey?: string } & { configuration?: { baseURL?: string; defaultHeaders?: ICommonObject } } = {
            tempe,
            modelName,
            streaming: streaming ?? true
        }

         {
            obj.configuration = {
                baseURL: basePath
            }
        }

         
         
         
         obj.cache = cache
         {
            obj.openAIApiKey = apiKey
            obj.apiKey = apiKey
        }

        

        return model
    }
}

module.exports = { nodeClass: ChatLitellm_ChatModels }
