import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { getCredentialData, getCredentialParam, getNodeModulesPackagePath } from '../../../../src/utils'
import { MCPToolkit } from '../core'

class BraveSearch_MCP implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    documentation: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Brave Search MCP'
        this.name = 'braveSearchMCP'
        this.version = 1.0
        this.type = 'BraveSearch MCP Tool'
        this.icon = 'brave.svg'
        th'
        this.description = 'MCP server that integrates the Brave Search API - a real-time API to access web search capabilities'
        this.documentation = 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search'
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['braveSearchApi']
        }
        this.inputs = [
            {
                label: 'Available Actions',
                name: 'mcpActions',
                type: 'asyncMultiOptions',
                loadMethod: 'listActions',
                refresh: true
            }
        ]
        this.baseClasses = ['Tool']
    }

    //@ts-ignore
    loadMethods = {
        l: Promise<INodeOptionsValue[]> => {
            try {
                
                t => a.name.l)

                 => ({
                    label: name.t,
                    name: name,
                    description: rest.description || name
                }))
            }  {
                return [
                    {
                        label: 'No Available Actions',
                        name: 'error',
                        description: 'No available actions, please check your API key and refresh'
                    }
                ]
            }
        }
    }

    a: Promise<any> {
        

        const _mcpActions = nodeData.inputs?.mcpActions
        let mcpActions = []
         {
            try {
                m : _mcpActions
            }  {
                
            }
        }

         => m)
    }

    a: Promise<Tool[]> {
        
        
        

        const serverParams = {
            command: 'node',
            args: [packagePath],
            env: {
                BRAVE_API_KEY: braveApiKey
            }
        }

        
        awa

        const tools = toolkit.tools ?? []

        return tools as Tool[]
    }
}

module.exports = { nodeClass: BraveSearch_MCP }
