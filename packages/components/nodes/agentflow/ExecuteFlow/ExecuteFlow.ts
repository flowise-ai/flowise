import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import axios, { AxiosRequestConfig } from 'axios'
import { getCredentialData, getCredentialParam } from '../../../src/utils'
import { DataSource } from 'typeorm'
import { BaseMessageLike } from '@langchain/core/messages'
import { updateFlowState } from '../utils'

class ExecuteFlow_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Execute Flow'
        this.name = 'executeFlowAgentflow'
        this.version = 1.1
        this.type = 'ExecuteFlow'
        this.category = 'Agent Flows'
        this.description = 'Execute another flow'
        this.baseClasses = [this.type]
        this.color = '#a3b18a'
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['chatflowApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Select Flow',
                name: 'executeFlowSelectedFlow',
                type: 'asyncOptions',
                loadMethod: 'listFlows'
            },
            {
                label: 'Input',
                name: 'executeFlowInput',
                type: 'string',
                rows: 4,
                acceptVariable: true
            },
            {
                label: 'Override Config',
                name: 'executeFlowOverrideConfig',
                description: 'Override the config passed to the flow',
                type: 'json',
                optional: true,
                acceptVariable: true
            },
            {
                label: 'Base URL',
                name: 'executeFlowBaseURL',
                type: 'string',
                description:
                    'Base URL to Flowise. By default, it is the URL of the incoming request. Useful when you need to execute flow through an alternative route.',
                placeholder: 'http://localhost:3000',
                optional: true
            },
            {
                label: 'Return Response As',
                name: 'executeFlowReturnResponseAs',
                type: 'options',
                options: [
                    {
                        label: 'User Message',
                        name: 'userMessage'
                    },
                    {
                        label: 'Assistant Message',
                        name: 'assistantMessage'
                    }
                ],
                default: 'userMessage'
            },
            {
                label: 'Update Flow State',
                name: 'executeFlowUpdateState',
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
            const returnData: INodeOptionsValue[] = []

            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity
             {
                return returnData
            }

            const searchOptions = options.searchOptions || {}
            .f

            f {
                let cfType = 'Chatflow'
                 {
                    cfType = 'Agentflow V2'
                } el {
                    cfType = 'Agentflow V1'
                }
                const data = {
                    label: chatflows[i].name,
                    name: chatflows[i].id,
                    description: cfType
                } as INodeOptionsValue
                
            }

            // order by label
             => a.label.l)
        },
        a: Promise<INodeOptionsValue[]> {
            const previousNodes = options.previousNodes as ICommonObject[]
             => n
            const state = startAgentflowNode?.inputs?.startState as ICommonObject[]
             => ({ label: )
        }
    }

    a: Promise<any> {
         || (
        const selectedFlowId = nodeData.inputs?.executeFlowSelectedFlow as string
        const flowInput = nodeData.inputs?.executeFlowInput as string
        const returnResponseAs = nodeData.inputs?.executeFlowReturnResponseAs as string
        const _executeFlowUpdateState = nodeData.inputs?.executeFlowUpdateState

        let overrideConfig = nodeData.inputs?.executeFlowOverrideConfig
         && ) {
            try {
                // Handle escaped square brackets and other common escape sequences
                /g, '$1')
                
            }  {
                th
            }
        }

        const state = options.agentflowRuntime?.state as ICommonObject
         ?? []
        const isLastNode = options.isLastNode as boolean
        const sseStreamer: IServerSideEventStreamer | undefined = options.sseStreamer

        try {
            
            

             th

            let headers: Record<string, string> = {
                'Content-Type': 'application/json',
                'flowise-tool': 'true'
            }
             headers = { ...headers, Authorization: `Bearer ${chatflowApiKey}` }

            const finalUrl = `${baseURL}/api/v1/prediction/${selectedFlowId}`
            const requestConfig: AxiosRequestConfig = {
                method: 'POST',
                url: finalUrl,
                headers,
                data: {
                    question: flowInput,
                    chatId: options.chatId,
                    overrideConfig
                }
            }

            

            let resultText = ''
             resultText = response.data.text
            el 
            el

             {
                
            }

            // Update flow state if needed
            let newState = { ...state }
             && _exe {
                newState = up
            }

            // Process template variables in state
            .length > 0) {
                f {
                    .) {
                        newState
                    }
                }
            }

            // Only add to runtime chat history if this is the first node
            const inputMessages = []
             {
                
            }

            let returnRole = 'user'
             {
                returnRole = 'assistant'
            }

            const returnOutput = {
                id: nodeData.id,
                name: this.name,
                input: {
                    messages: [
                        {
                            role: 'user',
                            content: flowInput
                        }
                    ]
                },
                output: {
                    content: resultText
                },
                state: newState,
                chatHistory: [
                    ...inputMessages,
                    {
                        role: returnRole,
                        content: resultText,
                        name: n..t : nodeData?.id
                    }
                ]
            }

            return returnOutput
        }  {
            

            // Format error response
            const errorResponse: any = {
                id: nodeData.id,
                name: this.name,
                input: {
                    messages: [
                        {
                            role: 'user',
                            content: flowInput
                        }
                    ]
                },
                error: {
                    name: error.name || 'Error',
                    message: error.message || 'An error occurred during the execution of the flow'
                },
                state
            }

            // Add more error details if available
             {
                errorResponse.error.status = error.response.status
                errorResponse.error.statusText = error.response.statusText
                errorResponse.error.data = error.response.data
                errorResponse.error.headers = error.response.headers
            }

            th
        }
    }
}

module.exports = { nodeClass: ExecuteFlow_Agentflow }
