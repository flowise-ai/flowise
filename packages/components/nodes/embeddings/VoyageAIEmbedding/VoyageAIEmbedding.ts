import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { MODEL_TYPE, getModels } from '../../../src/modelLoader'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { VoyageEmbeddings, VoyageEmbeddingsParams } from '@langchain/community/embeddings/voyage'

class VoyageAIEmbedding_Embeddings implements INode {
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
        this.label = 'VoyageAI Embeddings'
        this.name = 'voyageAIEmbeddings'
        this.version = 2.0
        this.type = 'VoyageAIEmbeddings'
        this.icon = 'voyageai.png'
        this.category = 'Embeddings'
        this.description = 'Voyage AI API to generate embeddings for a given text'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['voyageAIApi']
        }
        this.inputs = [
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                default: 'voyage-2'
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.modelName as string

        
        
        

        const obj: Partial<VoyageEmbeddingsParams> & { apiKey?: string } = {
            apiKey: voyageAiApiKey
        }

         obj.modelName = modelName

        
         model.apiUrl = voyageAiEndpoint
        return model
    }
}

module.exports = { nodeClass: VoyageAIEmbedding_Embeddings }
