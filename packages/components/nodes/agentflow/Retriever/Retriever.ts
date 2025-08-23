import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { updateFlowState } from '../utils'
import { DataSource } from 'typeorm'
import { BaseRetriever } from '@langchain/core/retrievers'
import { Document } from '@langchain/core/documents'

interface IKnowledgeBase {
    documentStore: string
}

class Retriever_Agentflow implements INode {
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
        this.label = 'Retriever'
        this.name = 'retrieverAgentflow'
        this.version = 1.0
        this.type = 'Retriever'
        this.category = 'Agent Flows'
        this.description = 'Retrieve information from vector database'
        this.baseClasses = [this.type]
        this.color = '#b8bedd'
        this.inputs = [
            {
                label: 'Kn',
                name: 'retrieverKnowledgeDocumentStores',
                type: 'array',
                description: 'Document stores to retrieve information from. Document stores must be upserted in advance.',
                array: [
                    {
                        label: 'Document Store',
                        name: 'documentStore',
                        type: 'asyncOptions',
                        loadMethod: 'listStores'
                    }
                ]
            },
            {
                label: 'Retriever Query',
                name: 'retrieverQuery',
                type: 'string',
                placeholder: 'Enter your query here',
                rows: 4,
                acceptVariable: true
            },
            {
                label: 'Output Format',
                name: 'outputFormat',
                type: 'options',
                options: [
                    { label: 'Text', name: 'text' },
                    { label: 'Text with Metadata', name: 'textWithMetadata' }
                ],
                default: 'text'
            },
            {
                label: 'Update Flow State',
                name: 'retrieverUpdateState',
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
            const previousNodes = options.previousNodes as ICommonObject[]
             => n
            const state = startAgentflowNode?.inputs?.startState as ICommonObject[]
             => ({ label: )
        },
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
                 {
                    const obj = {
                        name: `${store.id}:${store.name}`,
                        label: store.name,
                        description: store.description
                    }
                    
                }
            }
            return returnData
        }
    }

    a: Promise<any> {
        const retrieverQuery = nodeData.inputs?.retrieverQuery as string
        const outputFormat = nodeData.inputs?.outputFormat as string
        const _retrieverUpdateState = nodeData.inputs?.retrieverUpdateState

        const state = options.agentflowRuntime?.state as ICommonObject
        const chatId = options.chatId as string
        const isLastNode = options.isLastNode as boolean
        const isStreamable = isLastNode && options.sseStreamer !== undefined

        const abortController = options.abortController as AbortController

        // Extract knowledge
        let docs: Document[] = []
        const knowledgeBases = nodeData.inputs?.retrieverKnowledgeDocumentStores as IKnowledgeBase[]
         {
            f {
                

                const docStoreVectorInstanceFilePath = options.componentNodes['documentStoreVS'].filePath as string
                
                
                const docStoreVectorInstance = (await newDocStoreVectorInstance.init(
                    {
                        ...nodeData,
                        inputs: {
                            ...nodeData.inputs,
                            selectedStore: storeId
                        },
                        outputs: {
                            output: 'retriever'
                        }
                    },
                    '',
                    options
                )) as BaseRetriever

                
            }
        }

         => .j

        // Update flow state if needed
        let newState = { ...state }
         && _ {
            newState = up
        }

        try {
            let finalOutput = ''
             {
                finalOutput = docsText
            } el {
                f
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
                    question: retrieverQuery || input
                },
                output: {
                    content: finalOutput
                },
                state: newState
            }

            return returnOutput
        }  {
            th
        }
    }
}

module.exports = { nodeClass: Retriever_Agentflow }
