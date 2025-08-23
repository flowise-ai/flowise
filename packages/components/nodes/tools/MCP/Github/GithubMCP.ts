import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { getCredentialData, getCredentialParam, getNodeModulesPackagePath } from '../../../../src/utils'
import { MCPToolkit } from '../core'

class Github_MCP implements INode {
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
        this.label = 'Github MCP'
        this.name = 'githubMCP'
        this.version = 1.0
        this.type = 'Github MCP Tool'
        this.icon = 'github.svg'
        th'
        this.description = 'MCP Server for the GitHub API'
        this.documentation = 'https://github.com/modelcontextprotocol/servers/tree/main/src/github'
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['githubApi']
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
                        description: 'No available actions, please check your Github Access Token and refresh'
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
        
        

         {
            th
        }

        

        const serverParams = {
            command: 'node',
            args: [packagePath],
            env: {
                GITHUB_PERSONAL_ACCESS_TOKEN: accessToken
            }
        }

        
        awa

        const tools = toolkit.tools ?? []

        return tools as Tool[]
    }
}

module.exports = { nodeClass: Github_MCP }
