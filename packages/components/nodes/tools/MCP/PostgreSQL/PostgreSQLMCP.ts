import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { getCredentialData, getCredentialParam, getNodeModulesPackagePath } from '../../../../src/utils'
import { MCPToolkit } from '../core'

class PostgreSQL_MCP implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    documentation: string
    inputs: INodeParams[]

     {
        this.label = 'PostgreSQL MCP'
        this.name = 'postgreSQLMCP'
        this.version = 1.0
        this.type = 'PostgreSQL MCP Tool'
        this.icon = 'postgres.svg'
        th'
        this.description = 'MCP server that provides read-only access to PostgreSQL databases'
        this.documentation = 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres'
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['PostgresUrl']
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
                        description: 'No available actions, please check your postgres url and refresh'
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
            args: [packagePath, postgresUrl]
        }

        
        awa

        const tools = toolkit.tools ?? []

        return tools as Tool[]
    }
}

module.exports = { nodeClass: PostgreSQL_MCP }
