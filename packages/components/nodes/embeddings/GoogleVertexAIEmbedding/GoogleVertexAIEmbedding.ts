import { GoogleVertexAIEmbeddingsInput, VertexAIEmbeddings } from '@langchain/google-vertexai'
import { buildGoogleCredentials } from '../../../src/google-utils'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { MODEL_TYPE, getModels, getRegions } from '../../../src/modelLoader'
import { getBaseClasses } from '../../../src/utils'

class VertexAIEmbeddingsWithStripNewLines extends VertexAIEmbeddings {
    stripNewLines: boolean

     {
        
        this.stripNewLines = params.stripNewLines ?? false
    }

    a: Promise<number[][]> {
         => text.) : texts
        
    }

    a: Promise<number[]> {
         : text
        
    }
}

class GoogleVertexAIEmbedding_Embeddings implements INode {
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
        this.label = 'GoogleVertexAI Embeddings'
        this.name = 'googlevertexaiEmbeddings'
        this.version = 2.1
        this.type = 'GoogleVertexAIEmbeddings'
        this.icon = 'GoogleVertex.svg'
        this.category = 'Embeddings'
        this.description = 'Google vertexAI API to generate embeddings for a given text'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['googleVertexAuth'],
            optional: true,
            description:
                'Google Vertex AI credential. If you are using a GCP service like Cloud Run, or if you have installed default credentials on your local machine, you do not need to set this credential.'
        }
        this.inputs = [
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                default: 'text-embedding-004'
            },
            {
                label: 'Region',
                description: 'Region to use for the model.',
                name: 'region',
                type: 'asyncOptions',
                loadMethod: 'listRegions',
                optional: true
            },
            {
                label: 'Strip New Lines',
                name: 'stripNewLines',
                type: 'boolean',
                optional: true,
                additionalParams: true,
                description: 'Remove new lines from input text before embedding to reduce token count'
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        },
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.modelName as string
        const region = nodeData.inputs?.region as string
        const stripNewLines = nodeData.inputs?.stripNewLines as boolean

        const obj: GoogleVertexAIEmbeddingsInput & { stripNewLines?: boolean } = {
            model: modelName,
            stripNewLines
        }

        
        .length  obj.authOptions = authOptions

         obj.location = region

        
        return model
    }
}

module.exports = { nodeClass: GoogleVertexAIEmbedding_Embeddings }
