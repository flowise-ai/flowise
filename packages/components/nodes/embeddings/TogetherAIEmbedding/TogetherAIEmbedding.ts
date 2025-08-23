import { TogetherAIEmbeddings, TogetherAIEmbeddingsParams } from '@langchain/community/embeddings/togetherai'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class TogetherAIEmbedding_Embeddings implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams

     {
        this.label = 'TogetherAIEmbedding'
        this.name = 'togetherAIEmbedding'
        this.version = 1.0
        this.type = 'TogetherAIEmbedding'
        this.icon = 'togetherai.png'
        this.category = 'Embeddings'
        this.description = 'TogetherAI Embedding models to generate embeddings for a given text'
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
                placeholder: 'sentence-transformers/msmarco-bert-base-dot-v5',
                description: 'Refer to <a target="_blank" href="https://docs.together.ai/docs/embedding-models">embedding models</a> page'
            }
        ]
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.modelName as string

        
        

        const obj: Partial<TogetherAIEmbeddingsParams> = {
            modelName: modelName,
            apiKey: togetherAIApiKey,
            model: modelName
        }

        
        return model
    }
}

module.exports = { nodeClass: TogetherAIEmbedding_Embeddings }
