import { SerpAPI } from '@langchain/community/tools/serpapi'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class SerpAPI_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Serp API'
        this.name = 'serpAPI'
        this.version = 1.0
        this.type = 'SerpAPI'
        this.icon = 'serp.svg'
        this.category = 'Tools'
        this.description = 'Wrapper around SerpAPI - a real-time API to access Google search results'
        this.inputs = []
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['serpApi']
        }
        th]
    }

    a: Promise<any> {
        
        
        
    }
}

module.exports = { nodeClass: SerpAPI_Tools }
