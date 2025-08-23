import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import {
    ICommonObject,
    IDatabaseEntity,
    IHumanInput,
    IMessage,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    IServerSideEventStreamer,
    IUsedTool
} from '../../../src/Interface'
import { AIMessageChunk, BaseMessageLike, MessageContentText } from '@langchain/core/messages'
import { AnalyticHandler } from '../../../src/handler'
import { DEFAULT_SUMMARIZER_TEMPLATE } from '../prompt'
import { ILLMMessage } from '../Interface.Agentflow'
import { Tool } from '@langchain/core/tools'
import { ARTIFACTS_PREFIX, SOURCE_DOCUMENTS_PREFIX, TOOL_ARGS_PREFIX } from '../../../src/agents'
import { flatten } from 'lodash'
import zodToJsonSchema from 'zod-to-json-schema'
import { getErrorMessage } from '../../../src/error'
import { DataSource } from 'typeorm'
import {
    getPastChatHistoryImageMessages,
    getUniqueImageMessages,
    processMessagesWithImages,
    replaceBase64ImagesWithFileReferences,
    updateFlowState
} from '../utils'
import { convertMultiOptionsToStringArray, getCredentialData, getCredentialParam } from '../../../src/utils'
import { addSingleFileToStorage } from '../../../src/storageUtils'
import fetch from 'node-fetch'

interface ITool {
    agentSelectedTool: string
    agentSelectedToolConfig: ICommonObject
    agentSelectedToolRequiresHumanInput: boolean
}

interface IKnowledgeBase {
    documentStore: string
    docStoreDescription: string
    returnSourceDocuments: boolean
}

interface IKnowledgeBaseVSEmbeddings {
    vectorStore: string
    vectorStoreConfig: ICommonObject
    embeddingModel: string
    embeddingModelConfig: ICommonObject
    knowledgeName: string
    knowledgeDescription: string
    returnSourceDocuments: boolean
}

interface ISimpliefiedTool {
    name: string
    description: string
    schema: any
    toolNode: {
        label: string
        name: string
    }
}

class Agent_Agentflow implements INode {
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
        this.label = 'Agent'
        this.name = 'agentAgentflow'
        this.version = 2.0
        this.type = 'Agent'
        this.category = 'Agent Flows'
        this.description = 'Dynamically choose and utilize tools during runtime, enabling multi-step reasoning'
        this.color = '#4DD0E1'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Model',
                name: 'agentModel',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                loadConfig: true
            },
            {
                label: 'Messages',
                name: 'agentMessages',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Role',
                        name: 'role',
                        type: 'options',
                        options: [
                            {
                                label: 'System',
                                name: 'system'
                            },
                            {
                                label: 'Assistant',
                                name: 'assistant'
                            },
                            {
                                label: 'Developer',
                                name: 'developer'
                            },
                            {
                                label: 'User',
                                name: 'user'
                            }
                        ]
                    },
                    {
                        label: 'Content',
                        name: 'content',
                        type: 'string',
                        acceptVariable: true,
                        generateInstruction: true,
                        rows: 4
                    }
                ]
            },
            {
                label: 'OpenAI Built-in Tools',
                name: 'agentToolsBuiltInOpenAI',
                type: 'multiOptions',
                optional: true,
                options: [
                    {
                        label: 'Web Search',
                        name: 'web_search_preview',
                        description: 'Search the web for the latest information'
                    },
                    {
                        label: 'Code Interpreter',
                        name: 'code_interpreter',
                        description: 'Write and run Python code in a sandboxed environment'
                    },
                    {
                        label: 'Image Generation',
                        name: 'image_generation',
                        description: 'Generate images based on a text prompt'
                    }
                ],
                show: {
                    agentModel: 'chatOpenAI'
                }
            },
            {
                label: 'Tools',
                name: 'agentTools',
                type: 'array',
                optional: true,
                array: [
                    {
                        label: 'Tool',
                        name: 'agentSelectedTool',
                        type: 'asyncOptions',
                        loadMethod: 'listTools',
                        loadConfig: true
                    },
                    {
                        label: 'Require Human Input',
                        name: 'agentSelectedToolRequiresHumanInput',
                        type: 'boolean',
                        optional: true
                    }
                ]
            },
            {
                label: 'Kn',
                name: 'agentKnowledgeDocumentStores',
                type: 'array',
                description: 'Give your agent context about different document sources. Document stores must be upserted in advance.',
                array: [
                    {
                        label: 'Document Store',
                        name: 'documentStore',
                        type: 'asyncOptions',
                        loadMethod: 'listStores'
                    },
                    {
                        label: 'Describe Knowledge',
                        name: 'docStoreDescription',
                        type: 'string',
                        generateDocStoreDescription: true,
                        placeholder:
                            'Describe what the knowledge base is about, this is useful for the AI to know when and how to search for correct information',
                        rows: 4
                    },
                    {
                        label: 'Return Source Documents',
                        name: 'returnSourceDocuments',
                        type: 'boolean',
                        optional: true
                    }
                ],
                optional: true
            },
            {
                label: 'Kn',
                name: 'agentKnowledgeVSEmbeddings',
                type: 'array',
                description: 'Give your agent context about different document sources from existing vector stores and embeddings',
                array: [
                    {
                        label: 'Vector Store',
                        name: 'vectorStore',
                        type: 'asyncOptions',
                        loadMethod: 'listVectorStores',
                        loadConfig: true
                    },
                    {
                        label: 'Embedding Model',
                        name: 'embeddingModel',
                        type: 'asyncOptions',
                        loadMethod: 'listEmbeddings',
                        loadConfig: true
                    },
                    {
                        label: 'Knowledge Name',
                        name: 'knowledgeName',
                        type: 'string',
                        placeholder:
                            'A short name for the knowledge base, this is useful for the AI to know when and how to search for correct information'
                    },
                    {
                        label: 'Describe Knowledge',
                        name: 'knowledgeDescription',
                        type: 'string',
                        placeholder:
                            'Describe what the knowledge base is about, this is useful for the AI to know when and how to search for correct information',
                        rows: 4
                    },
                    {
                        label: 'Return Source Documents',
                        name: 'returnSourceDocuments',
                        type: 'boolean',
                        optional: true
                    }
                ],
                optional: true
            },
            {
                label: 'Enable Memory',
                name: 'agentEnableMemory',
                type: 'boolean',
                description: 'Enable memory for the conversation thread',
                default: true,
                optional: true
            },
            {
                label: 'Memory Type',
                name: 'agentMemoryType',
                type: 'options',
                options: [
                    {
                        label: 'All Messages',
                        name: 'allMessages',
                        description: 'Retrieve all messages from the conversation'
                    },
                    {
                        label: 'Window Size',
                        name: 'windowSize',
                        description: 'Uses a fixed window size to surface the last N messages'
                    },
                    {
                        label: 'Conversation Summary',
                        name: 'conversationSummary',
                        description: 'Summarizes the whole conversation'
                    },
                    {
                        label: 'Conversation Summary Buffer',
                        name: 'conversationSummaryBuffer',
                        description: 'Summarize conversations once token limit is reached. Default to 2000'
                    }
                ],
                optional: true,
                default: 'allMessages',
                show: {
                    agentEnableMemory: true
                }
            },
            {
                label: 'Window Size',
                name: 'agentMemoryWindowSize',
                type: 'number',
                default: '20',
                description: 'Uses a fixed window size to surface the last N messages',
                show: {
                    agentMemoryType: 'windowSize'
                }
            },
            {
                label: 'Max Token Limit',
                name: 'agentMemoryMaxTokenLimit',
                type: 'number',
                default: '2000',
                description: 'Summarize conversations once token limit is reached. Default to 2000',
                show: {
                    agentMemoryType: 'conversationSummaryBuffer'
                }
            },
            {
                label: 'Input Message',
                name: 'agentUserMessage',
                type: 'string',
                description: 'Add an input message as user message at the end of the conversation',
                rows: 4,
                optional: true,
                acceptVariable: true,
                show: {
                    agentEnableMemory: true
                }
            },
            {
                label: 'Return Response As',
                name: 'agentReturnResponseAs',
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
                name: 'agentUpdateState',
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

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                 {
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
            const componentNodes = options.componentNodes as {
                [key: string]: INode
            }

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                 {
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
        },
        a: Promise<INodeOptionsValue[]> {
            const componentNodes = options.componentNodes as {
                [key: string]: INode
            }

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                 {
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
        }
    }

    a: Promise<any> {
        let llmIds: ICommonObject | undefined
        let analyticHandlers = options.analyticHandlers as AnalyticHandler

        try {
            const abortController = options.abortController as AbortController

            // Extract input parameters
            const model = nodeData.inputs?.agentModel as string
            const modelConfig = nodeData.inputs?.agentModelConfig as ICommonObject
             {
                th
            }

            // Extract tools
            const tools = nodeData.inputs?.agentTools as ITool[]

            const toolsInstance: Tool[] = []
            f {
                const toolConfig = tool.agentSelectedToolConfig
                const nodeInstanceFilePath = options.componentNodes[tool.agentSelectedTool].filePath as string
                
                
                const newNodeData = {
                    ...nodeData,
                    credential: toolConfig['FLOWISE_CREDENTIAL_ID'],
                    inputs: {
                        ...nodeData.inputs,
                        ...toolConfig
                    }
                }
                

                // toolInstance might returns a list of tools like MCP tools
                ) {
                    f {
                        const subToolInstance = subTool as Tool
                        ;(.agentSelectedTool = tool.agentSelectedTool
                         {
                            ;(.requiresHumanInput = true
                        }
                        t
                    }
                } else {
                     {
                        toolInstance.requiresHumanInput = true
                    }
                    t
                }
            }

             => {
                const originalTool = tools[index]
                let agentSele?.agentSelectedTool
                 {
                    agentSelectedTool = originalTool?.agentSelectedTool
                }
                const componentNode = options.componentNodes[agentSelectedTool]

                
                 {
                    delete jsonSchema.$schema
                }

                return {
                    name: tool.name,
                    description: tool.description,
                    schema: jsonSchema,
                    toolNode: {
                        label: componentNode?.label || tool.name,
                        name: componentNode?.name || tool.name
                    }
                }
            })

            // Extract knowledge
            const knowledgeBases = nodeData.inputs?.agentKnowledgeDocumentStores as IKnowledgeBase[]
             {
                f {
                    const nodeInstanceFilePath = options.componentNodes['retrieverTool'].filePath as string
                    
                    
                    

                    const docStoreVectorInstanceFilePath = options.componentNodes['documentStoreVS'].filePath as string
                    
                    
                    const docStoreVectorInstance = await newDocStoreVectorInstance.init(
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
                    )

                    const newRetrieverToolNodeData = {
                        ...nodeData,
                        inputs: {
                            ...nodeData.inputs,
                            name: storeName
                                .t
                                .
                                .,
                            description: knowledgeBase.docStoreDescription,
                            retriever: docStoreVectorInstance,
                            returnSourceDocuments: knowledgeBase.returnSourceDocuments
                        }
                    }
                    

                    t

                    
                     {
                        delete jsonSchema.$schema
                    }
                    const componentNode = options.componentNodes['retrieverTool']

                    availableTools.push({
                        name: storeName
                            .t
                            .
                            .,
                        description: knowledgeBase.docStoreDescription,
                        schema: jsonSchema,
                        toolNode: {
                            label: componentNode?.label || retrieverToolInstance.name,
                            name: componentNode?.name || retrieverToolInstance.name
                        }
                    })
                }
            }

            const knowledgeBasesForVSEmbeddings = nodeData.inputs?.agentKnowledgeVSEmbeddings as IKnowledgeBaseVSEmbeddings[]
             {
                f {
                    const nodeInstanceFilePath = options.componentNodes['retrieverTool'].filePath as string
                    
                    

                    const selectedEmbeddingModel = knowledgeBase.embeddingModel
                    const selectedEmbeddingModelConfig = knowledgeBase.embeddingModelConfig
                    const embeddingInstanceFilePath = options.componentNodes[selectedEmbeddingModel].filePath as string
                    
                    
                    const newEmbeddingNodeData = {
                        ...nodeData,
                        credential: selectedEmbeddingModelConfig['FLOWISE_CREDENTIAL_ID'],
                        inputs: {
                            ...nodeData.inputs,
                            ...selectedEmbeddingModelConfig
                        }
                    }
                    

                    const selectedVectorStore = knowledgeBase.vectorStore
                    const selectedVectorStoreConfig = knowledgeBase.vectorStoreConfig
                    const vectorStoreInstanceFilePath = options.componentNodes[selectedVectorStore].filePath as string
                    
                    
                    const newVSNodeData = {
                        ...nodeData,
                        credential: selectedVectorStoreConfig['FLOWISE_CREDENTIAL_ID'],
                        inputs: {
                            ...nodeData.inputs,
                            ...selectedVectorStoreConfig,
                            embeddings: embeddingInstance
                        },
                        outputs: {
                            output: 'retriever'
                        }
                    }
                    

                    const knowledgeName = knowledgeBase.knowledgeName || ''

                    const newRetrieverToolNodeData = {
                        ...nodeData,
                        inputs: {
                            ...nodeData.inputs,
                            name: knowledgeName
                                .t
                                .
                                .,
                            description: knowledgeBase.knowledgeDescription,
                            retriever: vectorStoreInstance,
                            returnSourceDocuments: knowledgeBase.returnSourceDocuments
                        }
                    }
                    

                    t

                    
                     {
                        delete jsonSchema.$schema
                    }
                    const componentNode = options.componentNodes['retrieverTool']

                    availableTools.push({
                        name: knowledgeName
                            .t
                            .
                            .,
                        description: knowledgeBase.knowledgeDescription,
                        schema: jsonSchema,
                        toolNode: {
                            label: componentNode?.label || retrieverToolInstance.name,
                            name: componentNode?.name || retrieverToolInstance.name
                        }
                    })
                }
            }

            // Extract memory and configuration options
            const enableMemory = nodeData.inputs?.agentEnableMemory as boolean
            const memoryType = nodeData.inputs?.agentMemoryType as string
            const userMessage = nodeData.inputs?.agentUserMessage as string
            const _agentUpdateState = nodeData.inputs?.agentUpdateState
             ?? []

            // Extract runtime state and history
            const state = options.agentflowRuntime?.state as ICommonObject
             ?? []
             ?? []
            const prependedChatHistory = options.prependedChatHistory as IMessage[]
            const chatId = options.chatId as string

            // Initialize the LLM model instance
            const nodeInstanceFilePath = options.componentNodes[model].filePath as string
            
            
            const newNodeData = {
                ...nodeData,
                credential: modelConfig['FLOWISE_CREDENTIAL_ID'],
                inputs: {
                    ...nodeData.inputs,
                    ...modelConfig
                }
            }

            ) as BaseChatModel
            let llmNodeInstance = llmWithoutToolsBind

            
             {
                f {
                    const builtInTool: ICommonObject = {
                        type: tool
                    }
                     {
                        builtInTool.container = { type: 'auto' }
                    }
                    ;(t.pu
                    ;(ava.push({
                        name: tool,
                        toolNode: {
                            label: tool,
                            name: tool
                        }
                    })
                }
            }

             {
                 {
                    th
                }

                // @ts-ignore
                llmN
            }

            // Prepare messages array
            const messages: BaseMessageLike[] = []
            // Use to store messages with image file references as we do not want to store the base64 data into database
            let runtimeImageMessagesWithFileRef: BaseMessageLike[] = []
            // Use to keep track of past messages with image file references
            let pastImageMessagesWithFileRef: BaseMessageLike[] = []

            // Prepend history ONLY if it is the first node
             {
                f {
                    const role: string = msg.role === 'apiMessage' ? 'assistant' : 'user'
                    const content: string = msg.content ?? ''
                    messages.push({
                        role,
                        content
                    })
                }
            }

            f {
                const role = msg.role
                const content = msg.content
                 {
                     {
                        me
                    } else {
                        me
                    }
                }
            }

            // Handle memory management if enabled
             {
                await this.handleMemory({
                    messages,
                    memoryType,
                    pastChatHistory,
                    runtimeChatHistory,
                    llmNodeInstance,
                    nodeData,
                    userMessage,
                    input,
                    abortController,
                    options,
                    modelConfig,
                    runtimeImageMessagesWithFileRef,
                    pastImageMessagesWithFileRef
                })
            } el {
                /*
                 * If this is the first node:
                 * - Add images to messages if exist
                 * - Add user message if it does not exist in the agentMessages array
                 */
                 {
                    
                     {
                        const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                        me
                        
                    }
                }

                 => m) {
                    messages.push({
                        role: 'user',
                        content: input
                    })
                }
            }
            delete nodeData.inputs?.agentMessages

            // Initialize response and determine if streaming is possible
            let 
            const isLastNode = options.isLastNode as boolean
            const isStreamable = isLastNode && options.sseStreamer !== undefined && modelConfig?.streaming !== false

            // Start analytics
             {
                const llmLabel = options?.componentNodes?.[model]?.label || model
                llmI
            }

            // Track execution time
            

            // Get initial response from LLM
            const sseStreamer: IServerSideEventStreamer | undefined = options.sseStreamer

            // Handle tool calls with support for recursion
            let usedTools: IUsedTool[] = []
            let sourceDocuments: Array<any> = []
            let artifacts: any[] = []
            let fileAnnotations: any[] = []
            let additionalTokens = 0
            let isWaitingForHumanInput = false

            // Store the current messages length to track which messages are added during tool calls
            const messagesBeforeToolCalls = [...messages]
            let _toolCallMessages: BaseMessageLike[] = []

            // Check if this is hummanInput for tool calls
            const _humanInput = nodeData.inputs?.humanInput
             : _humanInput
            const humanInputAction = options.humanInputAction
            const iterationContext = options.iterationContext

             {
                 {
                    th
                }
                const result = await this.handleResumedToolCalls({
                    humanInput,
                    humanInputAction,
                    messages,
                    toolsInstance,
                    sseStreamer,
                    chatId,
                    input,
                    options,
                    abortController,
                    llmWithoutToolsBind,
                    isStreamable,
                    isLastNode,
                    iterationContext
                })

                response = result.response
                usedTools = result.usedTools
                sourceDocuments = result.sourceDocuments
                artifacts = result.artifacts
                additionalTokens = result.totalTokens
                isWaitingForHumanInput = result.isWaitingForHumanInput || false

                // Calculate which messages were added during tool calls
                _t

                // Stream additional data if this is the last node
                 {
                     {
                        )
                    }

                     {
                        )
                    }

                     {
                        )
                    }
                }
            } else {
                 {
                    
                } else {
                    
                }
            }

            // A
            

             {
                const result = await this.handleToolCalls({
                    response,
                    messages,
                    toolsInstance,
                    sseStreamer,
                    chatId,
                    input,
                    options,
                    abortController,
                    llmNodeInstance,
                    isStreamable,
                    isLastNode,
                    iterationContext
                })

                response = result.response
                usedTools = result.usedTools
                sourceDocuments = result.sourceDocuments
                artifacts = result.artifacts
                additionalTokens = result.totalTokens
                isWaitingForHumanInput = result.isWaitingForHumanInput || false

                // Calculate which messages were added during tool calls
                _t

                // Stream additional data if this is the last node
                 {
                     {
                        )
                    }

                     {
                        )
                    }

                     {
                        )
                    }
                }
            } el {
                // Stream whole response back to UI if not streaming and no tool calls
                let finalResponse = ''
                ) {
                    f => .j
                } el {
                    finalResponse = response.content
                } else {
                    f
                }
                
            }

            // Calculate execution time
            
            const timeDelta = endTime - startTime

            // Update flow state if needed
            let newState = { ...state }
             && _agentUp {
                newState = up
            }

            // Clean up empty inputs
            f {
                 {
                    delete nodeData.inputs[key]
                }
            }

            // Prepare final response and output object
            let finalResponse = ''
            ) {
                f => .j
            } el {
                finalResponse = response.content
            } else {
                f
            }

            // Address built in tools
            
             {
                u]

                // Stream used tools if this is the last node
                 {
                    )
                }
            }

            // Extract artifacts from annotations in response metadata
             {
                const { artifacts: extractedArtifacts, fileAnnotations: extractedFileAnnotations } =
                    awa
                 {
                    artifacts = [...artifacts, ...extractedArtifacts]

                    // Stream artifacts if this is the last node
                     {
                        
                    }
                }

                 {
                    fileAnnotations = [...fileAnnotations, ...extractedFileAnnotations]

                    // Stream file annotations if this is the last node
                     {
                        
                    }
                }
            }

            // Repla
            ) {
                f
            }

            const output = this.prepareOutputObject(
                response,
                availableTools,
                finalResponse,
                startTime,
                endTime,
                timeDelta,
                usedTools,
                sourceDocuments,
                artifacts,
                additionalTokens,
                isWaitingForHumanInput,
                fileAnnotations
            )

            // End analytics tracking
             {
                awa
            }

            // Send additional streaming events if needed
             {
                th
            }

            // Stream file annotations if any were extracted
             {
                
            }

            // Process template variables in state
            .length > 0) {
                f {
                    .) {
                        newState
                    }
                }
            }

            // Replace the actual messages array with one that includes the file references for images instead of base64 data
            const messagesWithFileReferences = replaceBase64ImagesWithFileReferences(
                messages,
                runtimeImageMessagesWithFileRef,
                pastImageMessagesWithFileRef
            )

            // Only add to runtime chat history if this is the first node
            const inputMessages = []
             {
                 {
                    
                }
                 {
                     {
                         => m) {
                            
                        } else {
                            agentMe => {
                                 {
                                    
                                }
                            })
                        }
                    } else {
                        
                    }
                }
            }

            const returnResponseAs = nodeData.inputs?.agentReturnResponseAs as string
            let returnRole = 'user'
             {
                returnRole = 'assistant'
            }

            // Prepare and return the final output
            return {
                id: nodeData.id,
                name: this.name,
                input: {
                    messages: messagesWithFileReferences,
                    ...nodeData.inputs
                },
                output,
                state: newState,
                chatHistory: [
                    ...inputMessages,

                    // Add the messages that were specifically added during tool calls, this enable other nodes to see the full tool call history, temporaraily disabled
                    // ...toolCallMessages,

                    // End with the final assistant response
                    {
                        role: returnRole,
                        content: finalResponse,
                        name: n..t : nodeData?.id,
                        ...(((a ||
                            (f ||
                            (u) && {
                            additional_kwargs: {
                                ...(a,
                                ...(f,
                                ...(u
                            }
                        })
                    }
                ]
            }
        }  {
             {
                awa)
            }

             {
                throw error
            }
            th}`)
        }
    }

    /**
     * Extracts built-in used tools from response metadata and processes image generation results
     */
    p: Promise<IUsedTool[]> {
         {
            return builtInUsedTools
        }

        const { output, tools } = response.response_metadata

         ||  || t {
            return builtInUsedTools
        }

        f {
            ) {
                let toolInput = outputItem.action ?? outputItem.code
                let toolOutput = outputItem.status === 'completed' ? 'Success' : outputItem.status

                // Handle image generation calls specially
                 {
                    // Create input summary for image generation
                    toolInput = {
                        prompt: outputItem.revised_prompt || 'Image generation request',
                        size: outputItem.size || '1024x1024',
                        quality: outputItem.quality || 'standard',
                        output_format: outputItem.output_format || 'png'
                    }

                    // Che
                     && ) {
                        toolOutput = `Image generated and saved`
                    } else {
                        t`
                    }
                }

                // Remove "_call" suffix to get the base tool name
                

                // Find matching tool that includes the base name in its type
                 => t)

                 {
                    // Check for duplicates
                     => t) {
                        continue
                    }

                    builtInUsedTools.push({
                        tool: matchingTool.type,
                        toolInput,
                        toolOutput
                    })
                }
            }
        }

        return builtInUsedTools
    }

    /**
     * Saves base64 image data to storage and returns file information
     */
    private async saveBase64Image(
        outputItem: any,
        options: ICommonObject
    ): Promise<{ filePath: string; fileName: string; totalSize: number } | null> {
        try {
             {
                return null
            }

            // Extract base64 data and create buffer
            const base64Data = outputItem.result
            

            // Determine file extension and MIME type
            const outputFormat = outputItem.output_format || 'png'
            }.${outputFormat}`
            const mimeType = outputFormat === 'png' ? 'image/png' : 'image/jpeg'

            // Save the image using the existing storage utility
            const { path, totalSize } = await addSingleFileToStorage(
                mimeType,
                imageBuffer,
                fileName,
                options.orgId,
                options.chatflowid,
                options.chatId
            )

            return { filePath: path, fileName, totalSize }
        }  {
            
            return null
        }
    }

    /**
     * Handles memory management based on the specified memory type
     */
    private async handleMemory({
        messages,
        memoryType,
        pastChatHistory,
        runtimeChatHistory,
        llmNodeInstance,
        nodeData,
        userMessage,
        input,
        abortController,
        options,
        modelConfig,
        runtimeImageMessagesWithFileRef,
        pastImageMessagesWithFileRef
    }: {
        messages: BaseMessageLike[]
        memoryType: string
        pastChatHistory: BaseMessageLike[]
        runtimeChatHistory: BaseMessageLike[]
        llmNodeInstance: BaseChatModel
        nodeData: INodeData
        userMessage: string
        input: string | Record<string, any>
        abortController: AbortController
        options: ICommonObject
        modelConfig: ICommonObject
        runtimeImageMessagesWithFileRef: BaseMessageLike[]
        pastImageMessagesWithFileRef: BaseMessageLike[]
    }): Promise<void> {
        
        pastChatHistory = updatedPastMessages
        pa

        let pastMessages = [...pastChatHistory, ...runtimeChatHistory]
         {
            /*
             * If this is the first node:
             * - Add images to messages if exist
             * - Add user message
             */
             {
                
                 {
                    const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                    pa
                    
                }
            }
            pastMessages.push({
                role: 'user',
                content: input
            })
        }
        
        pastMessages = updatedMessages
        pa

         {
             {
                // Window memory: Keep the last N messages
                const windowSize = nodeData.inputs?.agentMemoryWindowSize as number
                
                me
            } el {
                // Summary memory: Summarize all past messages
                const summary = await llmNodeInstance.invoke(
                    [
                        {
                            role: 'user',
                            content: DEFAULT_SUMMARIZER_TEMPLATE.replace(
                                '{conversation}',
                                pa => `${m.j
                            )
                        }
                    ],
                    { signal: abortController?.signal }
                )
                me
            } el {
                // Summary buffer: Summarize messages that exceed token limit
                awa
            } else {
                // Default: Use all messages
                me
            }
        }

        // Add user message
         {
            messages.push({
                role: 'user',
                content: userMessage
            })
        }
    }

    /**
     * Handles conversation summary buffer memory type
     */
    private async handleSummaryBuffer(
        messages: BaseMessageLike[],
        pastMessages: BaseMessageLike[],
        llmNodeInstance: BaseChatModel,
        nodeData: INodeData,
        abortController: AbortController
    ): Promise<void> {
         || 2000

        // Convert past messages to a format suitable for token counting
         => `${m.j
        

         {
            // Cal
            let currBufferLength = tokenCount
            const messagesToSummarize = []
            const remainingMessages = [...pastMessages]

            // Remove messages from the beginning until we're under the token limit
            wh {
                
                 {
                    me
                    // Recalculate token count for remaining messages
                     => `${m.j
                    
                }
            }

            // Summarize the messages that were removed
             => `${m.j

            const summary = await llmNodeInstance.invoke(
                [
                    {
                        role: 'user',
                        
                    }
                ],
                { signal: abortController?.signal }
            )

            // Add summary as a system message at the beginning, then add remaining messages
            me
            me
        } else {
            // If under token limit, use all messages
            me
        }
    }

    /**
     * Handles streaming response from the LLM
     */
    private async handleStreamingResponse(
        sseStreamer: IServerSideEventStreamer | undefined,
        llmNodeInstance: BaseChatModel,
        messages: BaseMessageLike[],
        chatId: string,
        abortController: AbortController
    ): Promise<AIMessageChunk> {
        let 

        try {
            f) {
                 {
                    let content = ''
                     &&  {
                        const contents = chunk.content as MessageContentText[]
                         => .j
                    } else {
                        
                    }
                    
                }

                
            }
        }  {
            
            throw error
        }
         &&  {
            const responseContents = response.content as MessageContentText[]
             => .j
        }
        return response
    }

    /**
     * Prepares the output object with response and metadata
     */
    private prepareOutputObject(
        response: AIMessageChunk,
        availableTools: ISimpliefiedTool[],
        finalResponse: string,
        startTime: number,
        endTime: number,
        timeDelta: number,
        usedTools: IUsedTool[],
        sourceDocuments: Array<any>,
        artifacts: any[],
        additionalTokens: number = 0,
        isWaitingForHumanInput: boolean = false,
        fileAnnotations: any[] = []
    ): any {
        const output: any = {
            content: finalResponse,
            timeMetadata: {
                start: startTime,
                end: endTime,
                delta: timeDelta
            }
        }

         {
            output.calledTools = response.tool_calls
        }

        // Include token usage metadata with accumulated tokens from tool calls
         {
            const originalTokens = response.usage_metadata.total_tokens || 0
            output.usageMetadata = {
                ...response.usage_metadata,
                total_tokens: originalTokens + additionalTokens,
                tool_call_tokens: additionalTokens
            }
        } el {
            // If no original usage metadata but we have tool tokens
            output.usageMetadata = {
                total_tokens: additionalTokens,
                tool_call_tokens: additionalTokens
            }
        }

         {
            output.responseMetadata = response.response_metadata
        }

        // Add used tools, source documents and artifacts to output
         {
            
        }

         {
            
        }

         {
            
        }

         {
            output.availableTools = availableTools
        }

         {
            output.isWaitingForHumanInput = isWaitingForHumanInput
        }

         {
            output.fileAnnotations = fileAnnotations
        }

        return output
    }

    /**
     * Sends additional streaming events for tool calls and metadata
     */
    p: void {
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer

         {
            
        }

         {
            
        }

        
    }

    /**
     * Handles tool calls and their responses, with support for recursive tool calling
     */
    private async handleToolCalls({
        response,
        messages,
        toolsInstance,
        sseStreamer,
        chatId,
        input,
        options,
        abortController,
        llmNodeInstance,
        isStreamable,
        isLastNode,
        iterationContext
    }: {
        response: AIMessageChunk
        messages: BaseMessageLike[]
        toolsInstance: Tool[]
        sseStreamer: IServerSideEventStreamer | undefined
        chatId: string
        input: string | Record<string, any>
        options: ICommonObject
        abortController: AbortController
        llmNodeInstance: BaseChatModel
        isStreamable: boolean
        isLastNode: boolean
        iterationContext: ICommonObject
    }): Promise<{
        response: AIMessageChunk
        usedTools: IUsedTool[]
        sourceDocuments: Array<any>
        artifacts: any[]
        totalTokens: number
        isWaitingForHumanInput?: boolean
    }> {
        // Track total tokens used throughout this process
        let totalTokens = response.usage_metadata?.total_tokens || 0

         {
            return { response, usedTools: [], sourceDocuments: [], artifacts: [], totalTokens }
        }

        // Stream tool calls if available
         {
            )
        }

        // Add LLM response with tool calls to messages
        messages.push({
            id: response.id,
            role: 'assistant',
            content: response.content,
            tool_calls: response.tool_calls,
            usage_metadata: response.usage_metadata
        })

        const usedTools: IUsedTool[] = []
        let sourceDocuments: Array<any> = []
        let artifacts: any[] = []
        let isWaitingForHumanInput: boolean | undefined

        // Process each tool call
        f {
            const toolCall = response.tool_calls[i]

             => t
             {
                let parsedDocs
                let parsedArtifacts
                let isToolRequireHumanInput =
                    (..length === 0)

                const flowConfig = {
                    chatflowId: options.chatflowid,
                    sessionId: options.sessionId,
                    chatId: options.chatId,
                    input: input,
                    state: options.agentflowRuntime?.state
                }

                 {
                     + '\n```'
                    const responseContent = response.content + `\nAttempting to use tool:\n${toolCallDetails}`
                    response.content = responseContent
                    
                    return { response, usedTools, sourceDocuments, artifacts, totalTokens, isWaitingForHumanInput: true }
                }

                let toolIds: ICommonObject | undefined
                 {
                    t
                }

                try {
                    //@ts-ignore
                    let t

                     {
                        awa
                    }

                    // Extract source documents if present
                    ) {
                        
                        toolOutput = output
                        try {
                            pa
                            
                        }  {
                            
                        }
                    }

                    // Extract artifacts if present
                    ) {
                        
                        toolOutput = output
                        try {
                            pa
                            a
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

                    // Add tool message to conversation
                    messages.push({
                        role: 'tool',
                        content: toolOutput,
                        tool_call_id: toolCall.id,
                        name: toolCall.name,
                        additional_kwargs: {
                            artifacts: parsedArtifacts,
                            sourceDocuments: parsedDocs
                        }
                    })

                    // Track used tools
                    usedTools.push({
                        tool: toolCall.name,
                        toolInput: toolInput ?? toolCall.args,
                        toolOutput
                    })
                }  {
                     {
                        awa
                    }

                    
                    usedTools.push({
                        tool: selectedTool.name,
                        toolInput: toolCall.args,
                        toolOutput: '',
                        e
                    })
                    )
                    th)
                }
            }
        }

        // Return direct tool output if there's exactly one tool with returnDirect
         {
             => t
             {
                const lastToolOutput = usedTools[0]?.toolOutput || ''
                

                 {
                    
                }

                return {
                    ,
                    usedTools,
                    sourceDocuments,
                    artifacts,
                    totalTokens
                }
            }
        }

        // Get LLM response after tool calls
        let newResponse: AIMessageChunk

         {
            newRe
        } else {
            newRe

            // Stream non-streaming response if this is the last node
             {
                let 
                 {
                    responseContent = newResponse.content
                }
                
            }
        }

        // Add tokens from this response
         {
            totalTokens += newResponse.usage_metadata.total_tokens
        }

        // Check for recursive tool calls and handle them
         {
            const {
                response: recursiveResponse,
                usedTools: recursiveUsedTools,
                sourceDocuments: recursiveSourceDocuments,
                artifacts: recursiveArtifacts,
                totalTokens: recursiveTokens,
                isWaitingForHumanInput: recursiveIsWaitingForHumanInput
            } = await this.handleToolCalls({
                response: newResponse,
                messages,
                toolsInstance,
                sseStreamer,
                chatId,
                input,
                options,
                abortController,
                llmNodeInstance,
                isStreamable,
                isLastNode,
                iterationContext
            })

            // Merge results from recursive tool calls
            newResponse = recursiveResponse
            u
            sourceDocuments = [...sourceDocuments, ...recursiveSourceDocuments]
            artifacts = [...artifacts, ...recursiveArtifacts]
            totalTokens += recursiveTokens
            isWaitingForHumanInput = recursiveIsWaitingForHumanInput
        }

        return { response: newResponse, usedTools, sourceDocuments, artifacts, totalTokens, isWaitingForHumanInput }
    }

    /**
     * Handles tool calls and their responses, with support for recursive tool calling
     */
    private async handleResumedToolCalls({
        humanInput,
        humanInputAction,
        messages,
        toolsInstance,
        sseStreamer,
        chatId,
        input,
        options,
        abortController,
        llmWithoutToolsBind,
        isStreamable,
        isLastNode,
        iterationContext
    }: {
        humanInput: IHumanInput
        humanInputAction: Record<string, any> | undefined
        messages: BaseMessageLike[]
        toolsInstance: Tool[]
        sseStreamer: IServerSideEventStreamer | undefined
        chatId: string
        input: string | Record<string, any>
        options: ICommonObject
        abortController: AbortController
        llmWithoutToolsBind: BaseChatModel
        isStreamable: boolean
        isLastNode: boolean
        iterationContext: ICommonObject
    }): Promise<{
        response: AIMessageChunk
        usedTools: IUsedTool[]
        sourceDocuments: Array<any>
        artifacts: any[]
        totalTokens: number
        isWaitingForHumanInput?: boolean
    }> {
        let llmNodeInstance = llmWithoutToolsBind

        const lastCheckpointMessages = humanInputAction?.data?.input?.messages ?? []
         {
            , usedTools: [], sourceDocuments: [], artifacts: [], totalTokens: 0 }
        }

        // Use the last message as the response
        const response = lastCheckpointMessages[lastCheckpointMessages.length - 1] as AIMessageChunk

        // Replace messages array
        messages.length = 0
        me)

        // Track total tokens used throughout this process
        let totalTokens = response.usage_metadata?.total_tokens || 0

         {
            return { response, usedTools: [], sourceDocuments: [], artifacts: [], totalTokens }
        }

        // Stream tool calls if available
         {
            )
        }

        // Add LLM response with tool calls to messages
        messages.push({
            id: response.id,
            role: 'assistant',
            content: response.content,
            tool_calls: response.tool_calls,
            usage_metadata: response.usage_metadata
        })

        const usedTools: IUsedTool[] = []
        let sourceDocuments: Array<any> = []
        let artifacts: any[] = []
        let isWaitingForHumanInput: boolean | undefined

        // Process each tool call
        f {
            const toolCall = response.tool_calls[i]

             => t
             {
                let parsedDocs
                let parsedArtifacts

                const flowConfig = {
                    chatflowId: options.chatflowid,
                    sessionId: options.sessionId,
                    chatId: options.chatId,
                    input: input,
                    state: options.agentflowRuntime?.state
                }

                 {
                    me
                     => t
                     {
                        t => t
                        // Remove other tools with the same agentSelectedTool such as MCP tools
                        toolsInstance = toolsInstance.filter(
                            (t => (t.agentSele.agentSelectedTool
                        )
                    }
                }
                 {
                    let toolIds: ICommonObject | undefined
                     {
                        t
                    }

                    try {
                        //@ts-ignore
                        let t

                         {
                            awa
                        }

                        // Extract source documents if present
                        ) {
                            
                            toolOutput = output
                            try {
                                pa
                                
                            }  {
                                
                            }
                        }

                        // Extract artifacts if present
                        ) {
                            
                            toolOutput = output
                            try {
                                pa
                                a
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

                        // Add tool message to conversation
                        messages.push({
                            role: 'tool',
                            content: toolOutput,
                            tool_call_id: toolCall.id,
                            name: toolCall.name,
                            additional_kwargs: {
                                artifacts: parsedArtifacts,
                                sourceDocuments: parsedDocs
                            }
                        })

                        // Track used tools
                        usedTools.push({
                            tool: toolCall.name,
                            toolInput: toolInput ?? toolCall.args,
                            toolOutput
                        })
                    }  {
                         {
                            awa
                        }

                        
                        usedTools.push({
                            tool: selectedTool.name,
                            toolInput: toolCall.args,
                            toolOutput: '',
                            e
                        })
                        )
                        th)
                    }
                }
            }
        }

        // Return direct tool output if there's exactly one tool with returnDirect
         {
             => t
             {
                const lastToolOutput = usedTools[0]?.toolOutput || ''
                

                 {
                    
                }

                return {
                    ,
                    usedTools,
                    sourceDocuments,
                    artifacts,
                    totalTokens
                }
            }
        }

        // Get LLM response after tool calls
        let newResponse: AIMessageChunk

        .bu.bu {
            t.bu
        }

         {
             {
                th
            }

            // @ts-ignore
            llmN
        }

         {
            newRe
        } else {
            newRe

            // Stream non-streaming response if this is the last node
             {
                let 
                 {
                    responseContent = newResponse.content
                }
                
            }
        }

        // Add tokens from this response
         {
            totalTokens += newResponse.usage_metadata.total_tokens
        }

        // Check for recursive tool calls and handle them
         {
            const {
                response: recursiveResponse,
                usedTools: recursiveUsedTools,
                sourceDocuments: recursiveSourceDocuments,
                artifacts: recursiveArtifacts,
                totalTokens: recursiveTokens,
                isWaitingForHumanInput: recursiveIsWaitingForHumanInput
            } = await this.handleToolCalls({
                response: newResponse,
                messages,
                toolsInstance,
                sseStreamer,
                chatId,
                input,
                options,
                abortController,
                llmNodeInstance,
                isStreamable,
                isLastNode,
                iterationContext
            })

            // Merge results from recursive tool calls
            newResponse = recursiveResponse
            u
            sourceDocuments = [...sourceDocuments, ...recursiveSourceDocuments]
            artifacts = [...artifacts, ...recursiveArtifacts]
            totalTokens += recursiveTokens
            isWaitingForHumanInput = recursiveIsWaitingForHumanInput
        }

        return { response: newResponse, usedTools, sourceDocuments, artifacts, totalTokens, isWaitingForHumanInput }
    }

    /**
     * Ext
     */
    private async extractArtifactsFromResponse(
        responseMetadata: any,
        modelNodeData: INodeData,
        options: ICommonObject
    ): Promise<{ artifacts: any[]; fileAnnotations: any[] }> {
        const artifacts: any[] = []
        const fileAnnotations: any[] = []

        ) {
            return { artifacts, fileAnnotations }
        }

        f {
            // Handle container file citations from annotations
            ) {
                f {
                    ) {
                        f {
                             {
                                try {
                                    // Download and store the file content
                                    const downloadResult = await this.downloadContainerFile(
                                        annotation.container_id,
                                        annotation.file_id,
                                        annotation.filename,
                                        modelNodeData,
                                        options
                                    )

                                     {
                                        

                                         {
                                            const artifact = {
                                                type: fileType,
                                                data: downloadResult.filePath
                                            }

                                            a
                                        } else {
                                            fileAnnotations.push({
                                                filePath: downloadResult.filePath,
                                                fileName: annotation.filename
                                            })
                                        }
                                    }
                                }  {
                                    
                                }
                            }
                        }
                    }
                }
            }

            // Han
             {
                try {
                    
                     {
                        // Replace the base64 result with the file path in the response metadata
                        outputItem.result = savedImageResult.filePath

                        // Create artifact in the same format as other image artifacts
                        
                        artifacts.push({
                            type: fileType,
                            data: savedImageResult.filePath
                        })
                    }
                }  {
                    
                }
            }
        }

        return { artifacts, fileAnnotations }
    }

    /**
     * Downloads file content from container file citation
     */
    private async downloadContainerFile(
        containerId: string,
        fileId: string,
        filename: string,
        modelNodeData: INodeData,
        options: ICommonObject
    ): Promise<{ filePath: string; totalSize: number } | null> {
        try {
            
            

             {
                
                return null
            }

            // Download the file using OpenAI Container API
            const response = await fetch(`https://api.openai.com/v1/containers/${containerId}/files/${fileId}/content`, {
                method: 'GET',
                headers: {
                    Accept: '*/*',
                    Authorization: `Bearer ${openAIApiKey}`
                }
            })

             {
                console.warn(
                    `Failed to download container file ${fileId} from container ${containerId}: ${response.status} ${response.statusText}`
                )
                return null
            }

            // Extract the binary data from the Response object
            
            
            

            // Store the file using the same storage utility as OpenAIAssistant
            const { path, totalSize } = await addSingleFileToStorage(
                mimeType,
                dataBuffer,
                filename,
                options.orgId,
                options.chatflowid,
                options.chatId
            )

            return { filePath: path, totalSize }
        }  {
            
            return null
        }
    }

    /**
     * Gets MIME type from filename extension
     */
    p: string {
        ..p
        const mimeTypes: { [key: string]: string } = {
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            gif: 'image/gif',
            pdf: 'application/pdf',
            txt: 'text/plain',
            csv: 'text/csv',
            json: 'application/json',
            html: 'text/html',
            xml: 'application/xml'
        }
        return mimeTypes[extension || ''] || 'application/octet-stream'
    }

    /**
     * Gets artifact type from filename extension for UI rendering
     */
    p: string {
        ..p
        const artifactTypes: { [key: string]: string } = {
            png: 'png',
            jpg: 'jpeg',
            jpeg: 'jpeg',
            html: 'html',
            htm: 'html',
            md: 'markdown',
            markdown: 'markdown',
            json: 'json',
            js: 'javascript',
            javascript: 'javascript',
            tex: 'latex',
            latex: 'latex',
            txt: 'text',
            csv: 'text',
            pdf: 'text'
        }
        return artifactTypes[extension || ''] || 'text'
    }

    /**
     * Processes sandbox links in the response text and converts them to file annotations
     */
    p: Promise<string> {
        let processedResponse = text

        // Regex t
        \]\(]+)\)/g
        )

        f {
            const fullMatch = match[0]
            const linkText = match[1]
            const filePath = match[2]

            try {
                // Extract filename from the file path
                .p || filePath

                // Replace sandbox link with proper download URL
                const downloadUrl = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatflowId}&chatId=${chatId}&fileName=${fileName}&download=true`
                `

                p
            }  {
                
                // If there's an error, remove the sandbox link as fallback
                p
            }
        }

        return processedResponse
    }
}

module.exports = { nodeClass: Agent_Agentflow }
