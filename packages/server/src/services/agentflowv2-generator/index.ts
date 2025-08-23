import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import path from 'path'
import * as fs from 'fs'
import { generateAgentflowv2 as generateAgentflowv2_json } from 'flowise-components'
import { z } from 'zod'
import { sysPrompt } from './prompt'
import { databaseEntities } from '../../utils'
import logger from '../../utils/logger'
import { MODE } from '../../Interface'

// Define the Zod schema for Agentflowv2 data structure
const NodeType = z.object({
    ,
    type: z.,
    position: z.object({
        x: z.numbe,
        y: z.numbe
    }),
    w,
    he,
    .,
    positionAbsolute: z
        .object({
            x: z.numbe,
            y: z.numbe
        })
        .,
    .,
    .,
    pa.
})

const EdgeType = z.object({
    ,
    ,
    ta,
    ta,
    data: z
        .object({
            .,
            ta.,
            e.,
            .
        })
        .,
    type: z..,
    
})

const AgentFlowV2Type = z
    .object({
        .,
        u).,
        n,
        e
    })
    .

// Type for the templates array
type AgentFlowV2Template = z.infer<typeof AgentFlowV2Type>

 => {
    
    const nodes = appServer.nodesPool.componentNodes
    const agentFlow2Nodes = []
    f {
         {
            agentFlow2Nodes.push({
                name: nodes[node].name,
                label: nodes[node].label,
                description: nodes[node].description
            })
        }
    }
    
}

 => {
    
    const nodes = appServer.nodesPool.componentNodes
    const toolNodes = []
     : []
    const removeTools = ['chainTool', 'retrieverTool', 'webBrowser', ...disabled_nodes]

    f {
        ) {
            ) {
                continue
            }
            toolNodes.push({
                name: nodes[node].name,
                description: nodes[node].description
            })
        }
    }
    
}

 => {
    const templates: AgentFlowV2Template[] = []
    let ma
    let j.f => path.extname(f === '.j
    j => {
        try {
            
            
            )
            // get rid of the node.data, remain all other properties
             => {
                return {
                    ...node,
                    data: undefined
                }
            })

            [0]
            const template = {
                title,
                description: fileDataObj.description || `Template from ${file}`,
                usecases: fileDataObj.usecases || [],
                nodes: filteredNodes,
                edges: fileDataObj.edges
            }

            // Validate template against schema
            
            templates.push({
                ...validatedTemplate,
                // @ts-ignore
                title: title
            })
        }  {
            
            // Continue with next file instead of failing completely
        }
    })

    // Format templates into the requested string format
    let formattedTemplates = ''
    template => {
        f.title}>> - ${template.description}\n`
        formattedTemplates += `"nodes": [\n`

        // Format nodes with proper indentation
        
        // Split by newlines and add 3 spaces to the beginning of each line except the first and last
        
         {
            formattedTemplates += `   ${nodesLines[0]}\n`
            f {
                formattedTemplates += `   ${nodesLines[i]}\n`
            }
            formattedTemplates += `   ${nodesLines[nodesLines.length - 1]}\n`
        } else {
            formattedTemplates += `   ${nodesJson}\n`
        }

        formattedTemplates += `]\n`
        formattedTemplates += `"edges": [\n`

        // Format edges with proper indentation
        
        // Split by newlines and add tab to the beginning of each line except the first and last
        
         {
            formattedTemplates += `\t${edgesLines[0]}\n`
            f {
                formattedTemplates += `\t${edgesLines[i]}\n`
            }
            formattedTemplates += `\t${edgesLines[edgesLines.length - 1]}\n`
        } else {
            formattedTemplates += `\t${edgesJson}\n`
        }

        formattedTemplates += `]\n\n`
    })

    return formattedTemplates
}

 => {
    try {
        
        
        

        const prompt = sysPrompt
            .
            .
            .
        const options: Record<string, any> = {
            app.AppDataSource,
            databaseEntities: databaseEntities,
            logger: logger
        }

        let response

         {
            .queueManage
            const job = await predictionQueue.addJob({
                prompt,
                question,
                toolNodes,
                selectedChatModel,
                isAgentFlowGenerator: true
            })
            l
            
            
        } else {
            response = await generateAgentflowv2_json(
                { p.nodesPool.componentNodes, toolNodes, selectedChatModel },
                question,
                options
            )
        }

        try {
            // Try to parse and validate the response if it's a string
             {
                
                
                return validatedResponse
            }
            // If response is already an object
            el {
                
                return validatedResponse
            }
            // Unexpected response type
            else {
                th
            }
        }  {
            
            // If parsing fails, return an error object
            return {
                error: 'Failed to validate response format',
                rawResponse: response
            } as any // Type assertion to avoid type errors
        }
    }  {
        th}`)
    }
}

export default {
    generateAgentflowv2
}
