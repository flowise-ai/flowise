import { Tool } from '@langchain/core/tools'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../../src/Interface'
import { MCPToolkit } from '../core'
import { getVars, prepareSandboxVars } from '../../../../src/utils'
import { DataSource } from 'typeorm'
import hash from 'object-hash'

const mcpServerConfig = `{
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
}`

const howToUseCode = `
You can use variables in the MCP Server Config with double curly braces \`{{ }}\` and prefix \`$vars.<variableName>\`. 

For example, you have a variable called "var1":
\`\`\`json
{
    "command": "docker",
    "args": [
        "run",
        "-i",
        "--rm",
        "-e", "API_TOKEN"
    ],
    "env": {
        "API_TOKEN": "{{$vars.var1}}"
    }
}
\`\`\`

For example, when using SSE, you can use the variable "var1" in the headers:
\`\`\`json
{
    "url": "https://api.example.com/endpoint/sse",
    "headers": {
        "Authorization": "Bearer {{$vars.var1}}"
    }
}
\`\`\`
`

class Custom_MCP implements INode {
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
        this.label = 'Custom MCP'
        this.name = 'customMCP'
        this.version = 1.1
        this.type = 'Custom MCP Tool'
        this.icon = 'customMCP.png'
        th'
        this.description = 'Custom MCP Config'
        this.documentation = 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search'
        this.inputs = [
            {
                label: 'MCP Server Config',
                name: 'mcpServerConfig',
                type: 'code',
                hideCodeExecute: true,
                hint: {
                    label: 'How to use',
                    value: howToUseCode
                },
                placeholder: mcpServerConfig,
                warning:
                    process.env.CUSTOM_MCP_SECURITY_CHECK === 'true'
                        ? 'In next release, only Remote MCP with url is supported. Read more <a href="https://docs.flowise-ai.github.io/tutorials/tools-and-mcp#streamable-http-recommended" target="_blank">here</a>'
                        : undefined
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
        const mcpServerConfig = nodeData.inputs?.mcpServerConfig as string
         {
            th
        }

        let sandbox: ICommonObject = {}

        ) {
            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity

            
            
        }

        const workspaceId = options?.searchOptions?.workspaceId?._value || options?.workspaceId

        let canonicalConfig
        try {
            
        }  {
            canonicalConfig = mcpServerConfig
        }

        

         {
            
             {
                return cachedResult.tools
            }
        }

        try {
            let serverParams
             {
                
            } el {
                
                
                
            }

            // Compatible with stdio and SSE
            let toolkit: MCPToolkit
             {
                t
            } el {
                t
            } else {
                t
            }

            awa

            const tools = toolkit.tools ?? []

             {
                awa
            }

            return tools as Tool[]
        }  {
            th
        }
    }
}

fun: any {
     {
        // Replace variables in string values
        
    } el) {
        // Recursively process arrays
         => )
    } el {
        // Recursively process object properties
        const result: any = {}
        f) {
            
        }
        return result
    }
    // Return primitive values as-is
    return obj
}

fun: string {
    // Use regex to find {{$variableName.property}} patterns and replace with sandbox values
    *)\}\}/g, (mat => {
        try {
            // Spl
            

            // Start with the sandbox object
            let current = sandbox

            // Navigate through the path
            f {
                // For the first part, check if it exists with $ prefix
                 {
                    const sandboxKey = `$${part}`
                    .) {
                        current = current[sandboxKey]
                    } else {
                        // If the key doesn't exist, return the original match
                        return match
                    }
                } else {
                    // For subsequent parts, access directly
                     {
                        current = current[part]
                    } else {
                        // If the property doesn't exist, return the original match
                        return match
                    }
                }
            }

            // Return the resolved value, converting to string if necessary
            
        }  {
            // If any error occurs during resolution, return the original match
            
            return match
        }
    })
}

fun {
    try {
        ()
        
    }  {
        
        return ''
    }
}

module.exports = { nodeClass: Custom_MCP }
