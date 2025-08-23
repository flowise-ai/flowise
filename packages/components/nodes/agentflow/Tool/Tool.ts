import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams, IServerSideEventStreamer } from '../../../src/Interface'
import { updateFlowState } from '../utils'
import { Tool } from '@langchain/core/tools'
import { ARTIFACTS_PREFIX, TOOL_ARGS_PREFIX } from '../../../src/agents'
import zodToJsonSchema from 'zod-to-json-schema'

interface IToolInputArgs {
    inputArgName: string
    inputArgValue: string
}

class Tool_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    hideOutput: boolean
    hint: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Tool'
        this.name = 'toolAgentflow'
        this.version = 1.1
        this.type = 'Tool'
        this.category = 'Agent Flows'
        this.description = 'Tools allow LLM to interact with external systems'
        this.baseClasses = [this.type]
        this.color = '#d4a373'
        this.inputs = [
            {
                label: 'Tool',
                name: 'toolAgentflowSelectedTool',
                type: 'asyncOptions',
                loadMethod: 'listTools',
                loadConfig: true
            },
            {
                label: 'Tool Input Arguments',
                name: 'toolInputArgs',
                type: 'array',
                acceptVariable: true,
                refresh: true,
                array: [
                    {
                        label: 'Input Argument Name',
                        name: 'inputArgName',
                        type: 'asyncOptions',
                        loadMethod: 'listToolInputArgs',
                        refresh: true
                    },
                    {
                        label: 'Input Argument Value',
                        name: 'inputArgValue',
                        type: 'string',
                        acceptVariable: true
                    }
                ],
                show: {
                    toolAgentflowSelectedTool: '.+'
                }
            },
            {
                label: 'Update Flow State',
                name: 'toolUpdateState',
                description: 'Update runtime state during the execution of the workflow',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Key',
                        name: 'key',
                        type: 'asyncOptions',
                        loadMethod: 'listRuntimeStateKeys',
                        freeSolo: true
                    },
                    {
                        label: 'Value',
                        name: 'value',
                        type: 'string',
                        acceptVariable: true,
                        acceptNodeOutputAsVariable: true
                    }
                ]
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const componentNodes = options.componentNodes as {
                [key: string]: INode
            }

            const removeTools = ['chainTool', 'retrieverTool', 'webBrowser']

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                ') {
                    ) {
                        continue
                    }
                    ) {
                        continue
                    }
                    returnOptions.push({
                        label: componentNode.label,
                        name: nodeName,
                        imageSrc: componentNode.icon
                    })
                }
            }
            return returnOptions
        },
        a: Promise<INodeOptionsValue[]> {
            const currentNode = options.currentNode as ICommonObject
             || (
            const selectedToolConfig =
                ( ||
                ( ||
                {}

            const nodeInstanceFilePath = options.componentNodes[selectedTool].filePath as string

            
            

            const newNodeData = {
                ...nodeData,
                credential: selectedToolConfig['FLOWISE_CREDENTIAL_ID'],
                inputs: {
                    ...nodeData.inputs,
                    ...selectedToolConfig
                }
            }

            try {
                ) as Tool

                let toolInputArgs: ICommonObject = {}

                ) {
                    // Combine schemas from all tools in the array
                     => {
                         {
                            
                             }
                        }
                        return acc
                    }, {})
                    toolInputArgs = { properties: allProperties }
                } else {
                    // Handle single tool instance
                    t : {}
                }

                .length > 0) {
                    delete toolInputArgs.$schema
                }

                .map(( => ({
                    label: item,
                    name: item,
                    description: toolInputArgs.properties[item].description
                }))
            }  {
                return []
            }
        },
        a: Promise<INodeOptionsValue[]> {
            const previousNodes = options.previousNodes as ICommonObject[]
             => n
            const state = startAgentflowNode?.inputs?.startState as ICommonObject[]
             => ({ label: )
        }
    }

    a: Promise<any> {
         || (n
        const selectedToolConfig =
            (n ||
            (n ||
            {}

        const toolInputArgs = nodeData.inputs?.toolInputArgs as IToolInputArgs[]
        const _toolUpdateState = nodeData.inputs?.toolUpdateState

        const state = options.agentflowRuntime?.state as ICommonObject
        const chatId = options.chatId as string
        const isLastNode = options.isLastNode as boolean
        const isStreamable = isLastNode && options.sseStreamer !== undefined

        const abortController = options.abortController as AbortController

        // Update flow state if needed
        let newState = { ...state }
         && _t {
            newState = up
        }

         {
            th
        }

        const nodeInstanceFilePath = options.componentNodes[selectedTool].filePath as string
        
        
        const newNodeData = {
            ...nodeData,
            credential: selectedToolConfig['FLOWISE_CREDENTIAL_ID'],
            inputs: {
                ...nodeData.inputs,
                ...selectedToolConfig
            }
        }
        ) as Tool | Tool[]

        let toolCallArgs: Record<string, any> = {}

        : any => {
             {
                return value
            }

            // Rem
            // ex: \["a", "b", "c", "d", "e"\]
            let cleanedValue = value
                . // \" -> "
                . // \\ -> \
                . // \[ -> [
                . // \] -> ]
                . // \{ -> {
                . // \} -> }

            // Try to parse as JSON if it looks like JSON/array
            if (
                ( && ) ||
                ( && )
            ) {
                try {
                    
                }  {
                    // If parsing fails, return the cleaned value
                    return cleanedValue
                }
            }

            return cleanedValue
        }

         {
            

            toolCallArgs = {
                ...defaultParams,
                ...toolCallArgs
            }
        }

        f {
            const variableName = item.inputArgName
            const variableValue = item.inputArgValue
            t
        }

        const flowConfig = {
            chatflowId: options.chatflowid,
            sessionId: options.sessionId,
            chatId: options.chatId,
            input: input,
            state: options.agentflowRuntime?.state
        }

        try {
            let toolOutput: string
            ) {
                // Execute all tools and combine their outputs
                const outputs = await Promise.all(
                    t =>
                        //@ts-ignore
                        t
                    )
                )
                t
            } else {
                //@ts-ignore
                t
            }

            let parsedArtifacts

            // Extract artifacts if present
            ) {
                
                toolOutput = output
                try {
                    pa
                }  {
                    
                }
            }

            let toolInput
            ) {
                
                toolOutput = output
                try {
                    t
                }  {
                    
                }
            }

             {
                t
            }

             {
                const sseStreamer: IServerSideEventStreamer = options.sseStreamer
                
            }

            // Process template variables in state
            .length > 0) {
                f {
                    .) {
                        newState
                    }
                }
            }

            const returnOutput = {
                id: nodeData.id,
                name: this.name,
                input: {
                    toolInputArgs: toolInput ?? toolInputArgs,
                    selectedTool: selectedTool
                },
                output: {
                    content: toolOutput,
                    artifacts: parsedArtifacts
                },
                state: newState
            }

            return returnOutput
        }  {
            th
        }
    }
}

module.exports = { nodeClass: Tool_Agentflow }
