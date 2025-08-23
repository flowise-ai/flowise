import { INodeParams, INodeCredential } from '../src/Interface'

class AzureCognitiveServices implements INodeCredential {
    label: string
    name: string
    version: number
    inputs: INodeParams[]

     {
        this.label = 'Azure Cognitive Services'
        this.name = 'azureCognitiveServices'
        this.version = 1.0
        this.inputs = [
            {
                label: 'Azure Subscription Key',
                name: 'azureSubscriptionKey',
                type: 'password',
                description: 'Your Azure Cognitive Services subscription key'
            },
            {
                label: 'Service Region',
                name: 'serviceRegion',
                type: 'string',
                ',
                placeholder: 'westus'
            },
            {
                label: 'API Version',
                name: 'apiVersion',
                type: 'string',
                ',
                placeholder: '2024-05-15-preview',
                default: '2024-05-15-preview'
            }
        ]
    }
}

module.exports = { credClass: AzureCognitiveServices }
