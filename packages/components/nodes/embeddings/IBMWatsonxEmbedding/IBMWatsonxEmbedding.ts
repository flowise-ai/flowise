import { WatsonxEmbeddings, WatsonxInputEmbeddings } from '@langchain/community/embeddings/ibm'
import { WatsonxAuth } from '@langchain/community/dist/types/ibm'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class IBMWatsonx_Embeddings implements INode {
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
        this.label = 'IBM Watsonx Embeddings'
        this.name = 'ibmEmbedding'
        this.version = 1.0
        this.type = 'WatsonxEmbeddings'
        this.icon = 'ibm.png'
        this.category = 'Embeddings'
        this.description = 'Generate embeddings for a given text using open source model on IBM Watsonx'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['ibmWatsonx']
        }
        this.inputs = [
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                default: 'ibm/slate-30m-english-rtrvr'
            },
            {
                label: 'Truncate Input Tokens',
                name: 'truncateInputTokens',
                type: 'number',
                description: 'Truncate the input tokens.',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Retries',
                name: 'maxRetries',
                type: 'number',
                description: 'The maximum number of retries.',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Concurrency',
                name: 'maxConcurrency',
                type: 'number',
                description: 'The maximum number of concurrencies.',
                step: 1,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.modelName as string
        const truncateInputTokens = nodeData.inputs?.truncateInputTokens as string
        const maxRetries = nodeData.inputs?.maxRetries as string
        const maxConcurrency = nodeData.inputs?.maxConcurrency as string

        
        
        
        
        
        
        

        const auth = {
            version,
            serviceUrl,
            projectId,
            watsonxAIAuthType,
            watsonxAIApikey,
            watsonxAIBearerToken
        }

        const obj: WatsonxInputEmbeddings & WatsonxAuth = {
            ...auth,
            model: modelName
        }

         
         
         

        
        return model
    }
}

module.exports = { nodeClass: IBMWatsonx_Embeddings }
