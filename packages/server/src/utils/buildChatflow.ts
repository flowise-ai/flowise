import { Request } from 'express'
import * as path from 'path'
import { DataSource } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { omit } from 'lodash'
import {
    IFileUpload,
    convertSpeechToText,
    ICommonObject,
    addSingleFileToStorage,
    generateFollowUpPrompts,
    IAction,
    addArrayFilesToStorage,
    mapMimeTypeToInputField,
    mapExtToInputField,
    getFileFromUpload,
    removeSpecificFileFromUpload,
    EvaluationRunner,
    handleEscapeCharacters
} from 'flowise-components'
import { StatusCodes } from 'http-status-codes'
import {
    IncomingInput,
    IMessage,
    INodeData,
    IReactFlowNode,
    IReactFlowObject,
    IDepthQueue,
    ChatType,
    IChatMessage,
    IExecuteFlowParams,
    IFlowConfig,
    IComponentNodes,
    IVariable,
    INodeOverrides,
    IVariableOverride,
    MODE
} from '../Interface'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { databaseEntities } from '.'
import { ChatFlow } from '../database/entities/ChatFlow'
import { ChatMessage } from '../database/entities/ChatMessage'
import { Variable } from '../database/entities/Variable'
import { getRunningExpressApp } from '../utils/getRunningExpressApp'
import {
    isFlowValidForStream,
    buildFlow,
    getTelemetryFlowObj,
    getAppVersion,
    resolveVariables,
    getSessionChatHistory,
    findMemoryNode,
    replaceInputsWithConfig,
    getStartingNodes,
    getMemorySessionId,
    getEndingNodes,
    constructGraphs,
    getAPIOverrideConfig
} from '../utils'
import { validateFlowAPIKey } from './validateKey'
import logger from './logger'
import { utilAddChatMessage } from './addChatMesage'
import { checkPredictions, checkStorage, updatePredictionsUsage, updateStorageUsage } from './quotaUsage'
import { buildAgentGraph } from './buildAgentGraph'
import { getErrorMessage } from '../errors/utils'
import { FLOWISE_METRIC_COUNTERS, FLOWISE_COUNTER_STATUS, IMetricsProvider } from '../Interface.Metrics'
import { getWorkspaceSearchOptions } from '../enterprise/utils/ControllerServiceUtils'
import { OMIT_QUEUE_JOB_DATA } from './constants'
import { executeAgentFlow } from './buildAgentflow'
import { Workspace } from '../enterprise/database/entities/workspace.entity'
import { Organization } from '../enterprise/database/entities/organization.entity'

/*
 * Initialize the ending node to be executed
 */
const initEndingNode = async ({
    endingNodeIds,
    componentNodes,
    reactFlowNodes,
    incomingInput,
    flowConfig,
    uploadedFilesContent,
    availableVariables,
    apiOverrideStatus,
    nodeOverrides,
    variableOverrides
}: {
    endingNodeIds: string[]
    componentNodes: IComponentNodes
    reactFlowNodes: IReactFlowNode[]
    incomingInput: IncomingInput
    flowConfig: IFlowConfig
    uploadedFilesContent: string
    availableVariables: IVariable[]
    apiOverrideStatus: boolean
    nodeOverrides: INodeOverrides
    variableOverrides: IVariableOverride[]
}): Promise<{ endingNodeData: INodeData; endingNodeInstance: any }> => {
    const question = incomingInput.question
    const chatHistory = flowConfig.chatHistory
    const sessionId = flowConfig.sessionId

    const nodeToExecute =
        endingNodeIds.length === 1
            ?  => en
            : reactFlowNodes[reactFlowNodes.length - 1]

     {
        th
    }

     {
        n
    }

    const reactFlowNodeData: INodeData = await resolveVariables(
        nodeToExecute.data,
        reactFlowNodes,
        question,
        chatHistory,
        flowConfig,
        uploadedFilesContent,
        availableVariables,
        variableOverrides
    )

    l`)

    const nodeInstanceFilePath = componentNodes[reactFlowNodeData.name].filePath as string
    
    

    return { endingNodeData: reactFlowNodeData, endingNodeInstance: nodeInstance }
}

/*
 * Get chat history from memory node
 * This is used to fill in the {{chat_history}} variable if it is used in the Format Prompt Value
 */
const getChatHistory = async ({
    endingNodes,
    nodes,
    chatflowid,
    appDataSource,
    componentNodes,
    incomingInput,
    chatId,
    isInternal,
    isAgentFlow
}: {
    endingNodes: IReactFlowNode[]
    nodes: IReactFlowNode[]
    chatflowid: string
    appDataSource: DataSource
    componentNodes: IComponentNodes
    incomingInput: IncomingInput
    chatId: string
    isInternal: boolean
    isAgentFlow: boolean
}): Promise<IMessage[]> => {
    const prependMessages = incomingInput.history ?? []
    let chatHistory: IMessage[] = []

     {
         => n
         return prependMessages

        
         => n

         {
            chatHistory = await getSessionChatHistory(
                chatflowid,
                getMem,
                memoryNode,
                componentNodes,
                appDataSource,
                databaseEntities,
                logger,
                prependMessages
            )
        }
        return chatHistory
    }

    /* In case there are multiple ending nodes, get the memory from the last available ending node
     * By right, in each flow, there should only be one memory node
     */
    f {
        const endingNodeData = endingNode.data
         continue

        
         => n

         continue

        chatHistory = await getSessionChatHistory(
            chatflowid,
            getMem,
            memoryNode,
            componentNodes,
            appDataSource,
            databaseEntities,
            logger,
            prependMessages
        )
    }

    return chatHistory
}

/**
 * Show output of setVariable nodes
 * @param reactFlowNodes
 * @returns {Record<string, unknown>}
 */
 => {
    const flowVariables = {} as Record<string, unknown>
    f {
        ) {
            const outputResult = node.data.instance
            const variableKey = node.data.inputs?.variableName
            flowVariables[variableKey] = outputResult
        }
    }
    return flowVariables
}

/*
 * Function to traverse the flow graph and execute the nodes
 */
export const executeFlow = async ({
    componentNodes,
    incomingInput,
    chatflow,
    chatId,
    isEvaluation,
    evaluationRunId,
    appDataSource,
    telemetry,
    cachePool,
    usageCacheManager,
    sseStreamer,
    baseURL,
    isInternal,
    files,
    signal,
    isTool,
    orgId,
    workspaceId,
    subscriptionId
}: IExe => {
    // Ensure incomingInput has all required properties with default values
    incomingInput = {
        history: [],
        streaming: false,
        ...incomingInput
    }

    let question = incomingInput.question || '' // Ensure question is never undefined
    let overrideConfig = incomingInput.overrideConfig ?? {}
    const uploads = incomingInput.uploads
    const prependMessages = incomingInput.history ?? []
    const streaming = incomingInput.streaming ?? false
    
    const chatflowid = chatflow.id

    /* Process file uploads from the chat
     * - Images
     * - Files
     * - Audio
     */
    let fileUploads: IFileUpload[] = []
    let uploadedFilesContent = ''
     {
        fileUploads = uploads
        f {
            awa

            const upload = fileUploads[i]

            // if upload in an image, a rag file, or audio
             && upl {
                const filename = upload.name
                
                 || '', 'ba
                [0]
                
                awa
                upload.type = 'stored-file'
                // Omit upload.data since we don't store the content in database
                f
            }

             {
                const filename = upload.name
                const urlData = upload.data
                fileUploads[i] = { data: urlData, name: filename, type: 'url', mime: upload.mime ?? 'image/png' }
            }

            // Run Speech to Text conversion
             {
                l
                let speechToTextConfig: ICommonObject = {}
                 {
                    
                    f {
                        const providerObj = speechToTextProviders[provider]
                         {
                            speechToTextConfig = providerObj
                            speechToTextConfig['name'] = provider
                            break
                        }
                    }
                }
                 {
                    const options: ICommonObject = {
                        orgId,
                        chatId,
                        chatflowid,
                        appDataSource,
                        databaseEntities: databaseEntities
                    }
                    
                    l
                     {
                        incomingInput.question = speechToTextResult
                        question = speechToTextResult
                    }
                }
            }

             {
                upload.type = 'stored-file:full'
                // Omit upload.data since we don't store the content in database
                uploadedFilesContent += `<doc name='${upload.name}'>${upload.data}</doc>\n\n`
                f
            }
        }
    }

    // Process form data body with files
     {
        overrideConfig = { ...incomingInput }
        f {
            awa

            const fileNames: string[] = []
            
            // Address file name with special characters: https://github.com/expressjs/multer/issues/1104
            f.t
            const { path: storagePath, totalSize } = await addArrayFilesToStorage(
                file.mimetype,
                fileBuffer,
                file.originalname,
                fileNames,
                orgId,
                chatflowid
            )
            awa

            

            

            

            let fileInputField = 'txtFile'

             {
                fileInputField = fileInputFieldFromExt
            } el {
                fileInputField = fileInputFieldFromExt
            }

             {
                
                

                
                

                

                }`
            } else {
                overrideConfig[fileInputField] = storagePath
            }

            awa
        }
         {
            
        }
        incomingInput = {
            ...incomingInput,
            overrideConfig,
            chatId
        }
    }

    const isAgentFlowV2 = chatflow.type === 'AGENTFLOW'
     {
        return executeAgentFlow({
            componentNodes,
            incomingInput,
            chatflow,
            chatId,
            evaluationRunId,
            appDataSource,
            telemetry,
            cachePool,
            usageCacheManager,
            sseStreamer,
            baseURL,
            isInternal,
            uploadedFilesContent,
            fileUploads,
            signal,
            isTool,
            orgId,
            workspaceId,
            subscriptionId
        })
    }

    /*** Get chatflows and prepare data  ***/
    const flowData = chatflow.flowData
    
    const nodes = parsedFlowData.nodes
    const edges = parsedFlowData.edges

    

    /*** Get session ID ***/
    
    const memoryType = memoryNode?.data.label || ''
    let 

    /*** Get Ending Node with Directed Graph  ***/
    
    const directedGraph = graph
    

    /*** Get Starting Nodes with Reversed Graph ***/
    
    const nonDirectedGraph = constructedObj.graph
    let startingNodeIds: string[] = []
    let depthQueue: IDepthQueue = {}
     => n.
    f {
        
        
        
    }
    ]

    const isAgentFlow =
        en => n.length > 0

    /*** Get Chat History ***/
    const chatHistory = await getChatHistory({
        endingNodes,
        nodes,
        chatflowid,
        appDataSource,
        componentNodes,
        incomingInput,
        chatId,
        isInternal,
        isAgentFlow
    })

    /*** Get API Config ***/
    .f)
    

    const flowConfig: IFlowConfig = {
        chatflowid,
        chatId,
        sessionId,
        chatHistory,
        apiMessageId,
        ...incomingInput.overrideConfig
    }

    l

    /*** BFS to traverse from Starting Nodes to Ending Node ***/
    const reactFlowNodes = await buildFlow({
        startingNodeIds,
        reactFlowNodes: nodes,
        reactFlowEdges: edges,
        apiMessageId,
        graph,
        depthQueue,
        componentNodes,
        question,
        uploadedFilesContent,
        chatHistory,
        chatId,
        sessionId,
        chatflowid,
        appDataSource,
        overrideConfig,
        apiOverrideStatus,
        nodeOverrides,
        availableVariables,
        variableOverrides,
        cachePool,
        usageCacheManager,
        isUpsert: false,
        uploads,
        baseURL,
        orgId,
        workspaceId,
        subscriptionId,
        updateStorageUsage,
        checkStorage
    })

    

     {
        const agentflow = chatflow
        const streamResults = await buildAgentGraph({
            agentflow,
            flowConfig,
            incomingInput,
            nodes,
            edges,
            initializedNodes: reactFlowNodes,
            endingNodeIds,
            startingNodeIds,
            depthQueue,
            chatHistory,
            uploadedFilesContent,
            appDataSource,
            componentNodes,
            sseStreamer,
            shouldStreamResponse: true, // agentflow is always streamed
            cachePool,
            baseURL,
            signal,
            orgId,
            workspaceId
        })

         {
            const { finalResult, finalAction, sourceDocuments, artifacts, usedTools, agentReasoning } = streamResults
            const userMessage: Omit<IChatMessage, 'id'> = {
                role: 'userMessage',
                content: incomingInput.question,
                chatflowid: agentflow.id,
                chatType: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
                chatId,
                memoryType,
                sessionId,
                createdDate: userMessageDateTime,
                f : undefined,
                leadEmail: incomingInput.leadEmail
            }
            awa

            const apiMessage: Omit<IChatMessage, 'createdDate'> = {
                id: apiMessageId,
                role: 'apiMessage',
                content: finalResult,
                chatflowid: agentflow.id,
                chatType: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
                chatId,
                memoryType,
                sessionId
            }

             ap
             ap
             ap
             ap
            .length) ap

             {
                
                const generatedFollowUpPrompts = await generateFollowUpPrompts(followUpPromptsConfig, apiMessage.content, {
                    chatId,
                    chatflowid: agentflow.id,
                    appDataSource,
                    databaseEntities
                })
                 {
                    ap
                }
            }
            

            await telemetry.sendTelemetry(
                'agentflow_prediction_sent',
                {
                    ve,
                    agentflowId: agentflow.id,
                    chatId,
                    type: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
                    fl
                },
                orgId
            )

            // Find the previous chat message with the same action id and remove the action
            .length) {
                let query = await appDataSource
                    .getRep
                    .
                    .whe
                    .
                    .
                    .getMany()

                f {
                     {
                        try {
                            
                             {
                                
                                Obje
                                newChatMessage.action = null
                                .
                                awa.
                                break
                            }
                        }  {
                            // error converting action to JSON
                        }
                    }
                }
            }

            // Prepare response
            let result: ICommonObject = {}
            result.text = finalResult

            result.question = incomingInput.question
            result.chatId = chatId
            result.chatMessageId = chatMessage?.id
             result.sessionId = sessionId
             result.memoryType = memoryType
             result.agentReasoning = agentReasoning
            .length) result.action = finalAction
            .length) result.flowVariables = setVariableNodesOutput
            
            return result
        }
        return undefined
    } else {
        let chatflowConfig: ICommonObject = {}
         {
            
        }

        let isStreamValid = false

        /* Check for post-processing settings, if available isStreamValid is always false */
         {
            isStreamValid = false
        } else {
            
        }

        /*** Find the last node to execute ***/
        const { endingNodeData, endingNodeInstance } = await initEndingNode({
            endingNodeIds,
            componentNodes,
            reactFlowNodes,
            incomingInput,
            flowConfig,
            uploadedFilesContent,
            availableVariables,
            apiOverrideStatus,
            nodeOverrides,
            variableOverrides
        })

        /*** If user uploaded files from chat, prepend the content of the files ***/
        const finalQuestion = uploadedFilesContent ? `${uploadedFilesContent}\n\n${incomingInput.question}` : incomingInput.question

        /*** Prepare run params ***/
        const runParams = {
            orgId,
            workspaceId,
            subscriptionId,
            chatId,
            chatflowid,
            apiMessageId,
            logger,
            appDataSource,
            databaseEntities,
            usageCacheManager,
            analytic: chatflow.analytic,
            uploads,
            prependMessages,
            ...(,
            evaluationRunId,
            updateStorageUsage,
            checkStorage
        }

        /*** Run the ending node ***/
        let 

        result = typeof result === 'string' ? { text: result } : result

        /*** Retrieve threadId from OpenAI Assistant if exists ***/
         {
            sessionId = result.assistant.threadId
        }

        const userMessage: Omit<IChatMessage, 'id'> = {
            role: 'userMessage',
            content: question,
            chatflowid,
            chatType: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
            chatId,
            memoryType,
            sessionId,
            createdDate: userMessageDateTime,
            f : undefined,
            leadEmail: incomingInput.leadEmail
        }
        awa

        let resultText = ''
         {
            resultText = result.text
            /* Check for post-processing settings */
             {
                try {
                    
                    const nodeInstanceFilePath = componentNodes['customFunction'].filePath as string
                    
                    //set the outputs.output to EndingNode to prevent json escaping of content...
                    const nodeData = {
                        inputs: { javascriptFunction: postProcessingFunction },
                        outputs: { output: 'output' }
                    }
                    const options: ICommonObject = {
                        chatflowid: chatflow.id,
                        sessionId,
                        chatId,
                        input: question,
                        rawOutput: resultText,
                        appDataSource,
                        databaseEntities,
                        workspaceId,
                        orgId,
                        logger
                    }
                    
                    let m
                     {
                        
                    } el {
                         + '\n```'
                    } else {
                        result.text = moderatedResponse
                    }
                    resultText = result.text
                }  {
                    l
                }
            }
        } el 
        el

        const apiMessage: Omit<IChatMessage, 'createdDate'> = {
            id: apiMessageId,
            role: 'apiMessage',
            content: resultText,
            chatflowid,
            chatType: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
            chatId,
            memoryType,
            sessionId
        }
         ap
         ap
         ap
         ap
         {
            
            const followUpPrompts = await generateFollowUpPrompts(followUpPromptsConfig, apiMessage.content, {
                chatId,
                chatflowid,
                appDataSource,
                databaseEntities
            })
             {
                ap
            }
        }

        

        l`)
         {
            
            result.metrics = metrics
        }
        await telemetry.sendTelemetry(
            'prediction_sent',
            {
                ve,
                chatflowId: chatflowid,
                chatId,
                type: isEvaluation ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
                fl
            },
            orgId
        )

        /*** Prepare response ***/
        result.question = incomingInput.question // return the question in the response, this is used when input text is empty but question is in audio format
        result.chatId = chatId
        result.chatMessageId = chatMessage?.id
        
        result.isStreamValid = isStreamValid

         result.sessionId = sessionId
         result.memoryType = memoryType
        .length) result.flowVariables = setVariableNodesOutput

        return result
    }
}

/**
 * Function to check if the flow is valid for streaming
 * @param {IReactFlowNode[]} endingNodes
 * @param {IReactFlowNode[]} nodes
 * @param {boolean | string} streaming
 * @returns {boolean}
 */
const checkIfStreamValid = async (
    endingNodes: IReactFlowNode[],
    nodes: IReactFlowNode[],
    streaming: boolean | string | undefined
): Promise<boolean> => {
    // If streaming is undefined, set to false by default
     {
        streaming = false
    }

    // Once custom function ending node exists, flow is always unavailable to stream
     => n
     return false

    let isStreamValid = false
    f {
        const endingNodeData = endingNode.data || {} // Ensure endingNodeData is never undefined

        const isEndingNode = endingNodeData?.outputs?.output === 'EndingNode'

        // Once custom function ending node exists, no need to do follow-up checks.
         continue

        if (
            endingNodeData.outputs &&
            Obje.length &&
            .
        ) {
            throw new InternalFlowiseError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                `Output  must be ${endingNodeData.label}, can't be an Output Prediction`
            )
        }

        
    }

     && isStreamValid

    return isStreamValid
}

/**
 * Build/Data Preperation for execute function
 * @param {Request} req
 * @param {boolean} isInternal
 */
exp: Promise<any> => {
    

    const chatflowid = req.params.id

    // Check if chatflow exists
    .findOneBy({
        id: chatflowid
    })
     {
        th
    }

    const isAgentFlow = chatflow.type === 'MULTIAGENT'
     || req.protocol
    }`
    const incomingInput: IncomingInput = req.body || {} // Ensure incomingInput is never undefined
    
     || []
    const abortControllerId = `${chatflow.id}_${chatId}`
     === 'true'
    const isEvaluation: boolean = req.headers['X-Flowise-Evaluation'] || req.body.evaluation
    let evaluationRunId = ''
    evaluationRunId = req.body.evaluationRunId
     {
        // this is needed for the collection of token metrics for non-agent flows,
        // for agentflows the execution trace has the info needed
        const newEval = {
            evaluation: {
                status: true,
                evaluationRunId
            }
        }
        
    }

    let organizationId = ''

    try {
        // Validate API Key if its external API request
         {
            
             {
                th
            }
        }

        // This can be public API, so we can only get orgId from the chatflow
        const chatflowWorkspaceId = chatflow.workspaceId
        .findOneBy({
            id: chatflowWorkspaceId
        })
         {
            th
        }
        const workspaceId = workspace.id

        .findOneBy({
            id: workspace.organizationId
        })
         {
            th
        }

        const orgId = org.id
        organizationId = orgId
        const subscriptionId = org.subscriptionId as string

        awa

        const executeData: IExecuteFlowParams = {
            incomingInput, // Use the defensively created incomingInput variable
            chatflow,
            chatId,
            baseURL,
            isInternal,
            files,
            isEvaluation,
            evaluationRunId,
            appDataSource: appServer.AppDataSource,
            sseStreamer: appServer.sseStreamer,
            telemetry: appServer.telemetry,
            cachePool: appServer.cachePool,
            componentNodes: appServer.nodesPool.componentNodes,
            isTool, // used to disable streaming if incoming request its from ChatflowTool
            usageCacheManager: appServer.usageCacheManager,
            orgId,
            workspaceId,
            subscriptionId
        }

         {
            
            )
            l

            
            
            appSe
             {
                th
            }
            awa
            
            return result
        } else {
            // Add abort controller to the pool
            
            appSe
            executeData.signal = signal

            

            appSe
            awa
            
            return result
        }
    }  {
        l
        appSe
        
         {
            throw e
        } else {
            th)
        }
    }
}

/**
 * Increment success metric counter
 * @param {IMetricsProvider} metricsProvider
 * @param {boolean} isInternal
 * @param {boolean} isAgentFlow
 */
 => {
     {
        metricsProvider?.incrementCounter(
            isInternal ? FLOWISE_METRIC_COUNTERS.AGENTFLOW_PREDICTION_INTERNAL : FLOWISE_METRIC_COUNTERS.AGENTFLOW_PREDICTION_EXTERNAL,
            { status: FLOWISE_COUNTER_STATUS.SUCCESS }
        )
    } else {
        metricsProvider?.incrementCounter(
            isInternal ? FLOWISE_METRIC_COUNTERS.CHATFLOW_PREDICTION_INTERNAL : FLOWISE_METRIC_COUNTERS.CHATFLOW_PREDICTION_EXTERNAL,
            { status: FLOWISE_COUNTER_STATUS.SUCCESS }
        )
    }
}

/**
 * Increment failed metric counter
 * @param {IMetricsProvider} metricsProvider
 * @param {boolean} isInternal
 * @param {boolean} isAgentFlow
 */
 => {
     {
        metricsProvider?.incrementCounter(
            isInternal ? FLOWISE_METRIC_COUNTERS.AGENTFLOW_PREDICTION_INTERNAL : FLOWISE_METRIC_COUNTERS.AGENTFLOW_PREDICTION_EXTERNAL,
            { status: FLOWISE_COUNTER_STATUS.FAILURE }
        )
    } else {
        metricsProvider?.incrementCounter(
            isInternal ? FLOWISE_METRIC_COUNTERS.CHATFLOW_PREDICTION_INTERNAL : FLOWISE_METRIC_COUNTERS.CHATFLOW_PREDICTION_EXTERNAL,
            { status: FLOWISE_COUNTER_STATUS.FAILURE }
        )
    }
}
