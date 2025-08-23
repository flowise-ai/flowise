import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { getNodeModulesPackagePath } from '../../../../src/utils'
import { MCPToolkit, validateArgsForLocalFileAccess } from '../core'

class Supergateway_MCP implements INode {
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
        this.label = 'Supergateway MCP'
        this.name = 'supergatewayMCP'
        this.version = 1.0
        this.type = 'Supergateway MCP Tool'
        this.icon = 'supermachine-logo.png'
        th'
        th '
        this.documentation = 'https://github.com/supercorp-ai/supergateway'
        this.inputs = [
            {
                label: 'Arguments',
                name: 'arguments',
                type: 'string',
                rows: 4,
                placeholder: '--sse "https://mcp-server-ab71a6b2-cd55-49d0-adba-562bc85956e3.supermachine.app"',
                description:
                    'Arguments to pass to the supergateway server. Refer to the <a href="https://github.com/supercorp-ai/supergateway/blob/main/README.md" target="_blank">documentation</a> for more information.'
            },
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
                        description: 'No available actions, please check the arguments again and refresh'
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
        const _args = nodeData.inputs?.arguments as string
        

        const processedArgs = _args
            .t
            .
            .map((a => {
                // Remove surrounding double or single quotes if they exist
                 && a) || (a && a)) {
                    
                }
                return arg
            })

        const serverParams = {
            command: 'node',
            args: [packagePath, ...processedArgs]
        }

         {
            try {
                val
            }  {
                th
            }
        }

        
        awa

        const tools = toolkit.tools ?? []

        return tools as Tool[]
    }
}

module.exports = { nodeClass: Supergateway_MCP }
