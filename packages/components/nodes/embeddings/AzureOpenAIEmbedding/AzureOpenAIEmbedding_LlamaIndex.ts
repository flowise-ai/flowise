import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { OpenAIEmbedding } from 'llamaindex'

interface AzureOpenAIConfig {
    apiKey?: string
    endpoint?: string
    apiVersion?: string
    deploymentName?: string
}

class AzureOpenAIEmbedding_LlamaIndex_Embeddings implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    credential: INodeParams
    tags: string[]
    inputs: INodeParams[]

     {
        this.label = 'Azure OpenAI Embeddings'
        this.name = 'azureOpenAIEmbeddingsLlamaIndex'
        this.version = 1.0
        this.type = 'AzureOpenAIEmbeddings'
        this.icon = 'Azure.svg'
        this.category = 'Embeddings'
        this.description = 'Azure OpenAI API embeddings specific for LlamaIndex'
        th]
        this.tags = ['LlamaIndex']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['azureOpenAIApi']
        }
        this.inputs = [
            {
                label: 'Timeout',
                name: 'timeout',
                type: 'number',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const timeout = nodeData.inputs?.timeout as string

        
        
        
        
        

        const obj: Partial<OpenAIEmbedding> & { azure?: AzureOpenAIConfig } = {
            azure: {
                apiKey: azureOpenAIApiKey,
                endpoint: `https://${azureOpenAIApiInstanceName}.openai.azure.com`,
                apiVersion: azureOpenAIApiVersion,
                deploymentName: azureOpenAIApiDeploymentName
            }
        }

         

        
        return model
    }
}

module.exports = { nodeClass: AzureOpenAIEmbedding_LlamaIndex_Embeddings }
