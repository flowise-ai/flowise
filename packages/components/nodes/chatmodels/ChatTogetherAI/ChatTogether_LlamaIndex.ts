import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { TogetherLLM, OpenAI } from 'llamaindex'

class ChatTogetherAI_LlamaIndex_ChatModels implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    tags: string[]
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'ChatTogetherAI'
        this.name = 'chatTogetherAI_LlamaIndex'
        this.version = 1.0
        this.type = 'ChatTogetherAI'
        this.icon = 'togetherai.png'
        this.category = 'Chat Models'
        this.description = 'Wrapper around ChatTogetherAI LLM specific for LlamaIndex'
        th]
        this.tags = ['LlamaIndex']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['togetherAIApi']
        }
        this.inputs = [
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                placeholder: 'mixtral-8x7b-32768',
                description: 'Refer to <a target="_blank" href="https://docs.together.ai/docs/inference-models">models</a> page'
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                default: 0.9,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const temperature = nodeData.inputs?.temperature as string
        const modelName = nodeData.inputs?.modelName as string

        
        

        const obj: Partial<OpenAI> = {
            tempe,
            model: modelName,
            apiKey: togetherAIApiKey
        }

        
        return model
    }
}

module.exports = { nodeClass: ChatTogetherAI_LlamaIndex_ChatModels }
