import { BraveSearch } from '@langchain/community/tools/brave_search'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class BraveSearchAPI_Tools implements INode {
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
        this.label = 'BraveSearch API'
        this.name = 'braveSearchAPI'
        this.version = 1.0
        this.type = 'BraveSearchAPI'
        this.icon = 'brave.svg'
        this.category = 'Tools'
        this.description = 'Wrapper around BraveSearch API - a real-time API to access Brave search results'
        this.inputs = []
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['braveSearchApi']
        }
        th]
    }

    a: Promise<any> {
        
        
        
    }
}

module.exports = { nodeClass: BraveSearchAPI_Tools }
