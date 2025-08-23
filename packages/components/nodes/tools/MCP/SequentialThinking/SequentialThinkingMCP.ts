import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { getNodeModulesPackagePath } from '../../../../src/utils'
import { MCPToolkit } from '../core'

class SequentialThinking_MCP implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    documentation: string
    inputs: INodeParams[]

     {
        this.label = 'Sequential Thinking MCP'
        this.name = 'sequentialThinkingMCP'
        this.version = 1.0
        this.type = 'Sequential Thinking MCP Tool'
        this.icon = 'sequentialthinking.svg'
        th'
        this.description =
            'MCP server that provides a tool for dynamic and reflective problem-solving through a structured thinking process'
        this.documentation = 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking'
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
                        description: 'No available actions, please refresh'
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
            args: [packagePath]
        }

        
        awa

        const tools = toolkit.tools ?? []

        return tools as Tool[]
    }
}

module.exports = { nodeClass: SequentialThinking_MCP }
