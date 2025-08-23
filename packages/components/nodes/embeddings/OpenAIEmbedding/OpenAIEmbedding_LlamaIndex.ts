import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { MODEL_TYPE, getModels } from '../../../src/modelLoader'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { OpenAIEmbedding } from 'llamaindex'

class OpenAIEmbedding_LlamaIndex_Embeddings implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    tags: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'OpenAI Embedding'
        this.name = 'openAIEmbedding_LlamaIndex'
        this.version = 2.0
        this.type = 'OpenAIEmbedding'
        this.icon = 'openai.svg'
        this.category = 'Embeddings'
        this.description = 'OpenAI Embedding specific for LlamaIndex'
        th]
        this.tags = ['LlamaIndex']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['openAIApi']
        }
        this.inputs = [
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                default: 'text-embedding-ada-002'
            },
            {
                label: 'Timeout',
                name: 'timeout',
                type: 'number',
                optional: true,
                additionalParams: true
            },
            {
                label: 'BasePath',
                name: 'basepath',
                type: 'string',
                optional: true,
                additionalParams: true
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const timeout = nodeData.inputs?.timeout as string
        const modelName = nodeData.inputs?.modelName as string
        const basePath = nodeData.inputs?.basepath as string

        
        

        const obj: Partial<OpenAIEmbedding> = {
            apiKey: openAIApiKey,
            model: modelName
        }
         
         {
            obj.additionalSessionOptions = {
                baseURL: basePath
            }
        }
        
        return model
    }
}

module.exports = { nodeClass: OpenAIEmbedding_LlamaIndex_Embeddings }
