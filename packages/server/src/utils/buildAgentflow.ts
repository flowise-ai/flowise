import { DataSource } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { cloneDeep, get } from 'lodash'
import TurndownService from 'turndown'
import {
    AnalyticHandler,
    ICommonObject,
    ICondition,
    IFileUpload,
    IHumanInput,
    IMessage,
    IServerSideEventStreamer,
    convertChatHistoryToText,
    generateFollowUpPrompts
} from 'flowise-components'
import {
    IncomingAgentflowInput,
    INodeData,
    IReactFlowObject,
    IExecuteFlowParams,
    IFlowConfig,
    IAgentflowExecutedData,
    ExecutionState,
    IExecution,
    IChatMessage,
    ChatType,
    IReactFlowNode,
    IReactFlowEdge,
    IComponentNodes,
    INodeOverrides,
    IVariableOverride,
    INodeDirectedGraph
} from '../Interface'
import {
    RUNTIME_MESSAGES_LENGTH_VAR_PREFIX,
    CHAT_HISTORY_VAR_PREFIX,
    databaseEntities,
    FILE_ATTACHMENT_PREFIX,
    getAppVersion,
    getGlobalVariable,
    getStartingNode,
    getTelemetryFlowObj,
    QUESTION_VAR_PREFIX,
    CURRENT_DATE_TIME_VAR_PREFIX,
    _removeCredentialId,
    validateHistorySchema
} from '.'
import { ChatFlow } from '../database/entities/ChatFlow'
import { Variable } from '../database/entities/Variable'
import { replaceInputsWithConfig, constructGraphs, getAPIOverrideConfig } from '../utils'
import logger from './logger'
import { getErrorMessage } from '../errors/utils'
import { Execution } from '../database/entities/Execution'
import { utilAddChatMessage } from './addChatMesage'
import { CachePool } from '../CachePool'
import { ChatMessage } from '../database/entities/ChatMessage'
import { Telemetry } from './telemetry'
import { getWorkspaceSearchOptions } from '../enterprise/utils/ControllerServiceUtils'
import { UsageCacheManager } from '../UsageCacheManager'

interface IWaitingNode {
    nodeId: string
    receivedInputs: Map<string, any>
    expectedInputs: Set<string>
    isConditional: boolean
    conditionalGroups: Map<string, string[]>
}

interface INodeQueue {
    nodeId: string
    data: any
    inputs: Record<string, any>
}

interface IProcessNodeOutputsParams {
    nodeId: string
    nodeName: string
    result: any
    humanInput?: IHumanInput
    graph: Record<string, string[]>
    nodes: IReactFlowNode[]
    edges: IReactFlowEdge[]
    nodeExecutionQueue: INodeQueue[]
    waitingNodes: Map<string, IWaitingNode>
    loopCounts: Map<string, number>
    abortController?: AbortController
}

interface IAgentFlowRuntime {
    state?: ICommonObject
    chatHistory?: IMessage[]
    form?: Record<string, any>
}

interface IExecuteNodeParams {
    nodeId: string
    reactFlowNode: IReactFlowNode
    nodes: IReactFlowNode[]
    edges: IReactFlowEdge[]
    graph: INodeDirectedGraph
    reversedGraph: INodeDirectedGraph
    incomingInput: IncomingAgentflowInput
    chatflow: ChatFlow
    chatId: string
    sessionId: string
    apiMessageId: string
    evaluationRunId?: string
    isInternal: boolean
    pastChatHistory: IMessage[]
    prependedChatHistory: IMessage[]
    appDataSource: DataSource
    usageCacheManager: UsageCacheManager
    telemetry: Telemetry
    componentNodes: IComponentNodes
    cachePool: CachePool
    sseStreamer: IServerSideEventStreamer
    baseURL: string
    overrideConfig?: ICommonObject
    apiOverrideStatus?: boolean
    nodeOverrides?: INodeOverrides
    variableOverrides?: IVariableOverride[]
    uploadedFilesContent?: string
    fileUploads?: IFileUpload[]
    humanInput?: IHumanInput
    agentFlowExecutedData?: IAgentflowExecutedData[]
    agentflowRuntime: IAgentFlowRuntime
    abortController?: AbortController
    parentTraceIds?: ICommonObject
    analyticHandlers?: AnalyticHandler
    parentExecutionId?: string
    isRecursive?: boolean
    iterationContext?: ICommonObject
    orgId: string
    workspaceId: string
    subscriptionId: string
}

interface IExecuteAgentFlowParams extends Omit<IExecuteFlowParams, 'incomingInput'> {
    incomingInput: IncomingAgentflowInput
}

 : 10

/**
 * Add execution to database
 * @param {DataSource} appDataSource
 * @param {string} agentflowId
 * @param {IAgentflowExecutedData[]} agentFlowExecutedData
 * @param {string} sessionId
 * @returns {Promise<Execution>}
 */
const addExecution = async (
    appDataSource: DataSource,
    agentflowId: string,
    agentFlowExecutedData: IAgentflowExecutedData[],
    sessionId: string,
    workspaceId: string
) => {
    
    const bodyExecution = {
        agentflowId,
        state: 'INPROGRESS',
        sessionId,
        workspaceId,
        exe
    }
    Obje

    .
    .
}

/**
 * Update execution in database
 * @param {DataSource} appDataSource
 * @param {string} executionId
 * @param {Partial<IExecution>} data
 * @returns {Promise<void>}
 */
 => {
    .findOneBy({
        id: executionId,
        workspaceId
    })

     {
        th
    }

    
    const bodyExecution: ICommonObject = {}
     {
        b
    }
     {
        bodyExecution.state = data.state

         {
            b
        }
    }

    Obje

    app.me
    awa.
}

export const resolveVariables = async (
    reactFlowNodeData: INodeData,
    question: string,
    form: Record<string, any>,
    flowConfig: IFlowConfig | undefined,
    availableVariables: Variable[],
    variableOverrides: IVariableOverride[],
    uploadedFilesContent: string,
    chatHistory: IMessage[],
    agentFlowExecutedData?: IAgentflowExecutedData[],
    iterationContext?: ICommonObject
): Promise<INodeData> => {
    let fl
    const types = 'inputs'

    : Promise<any> => {
        // If value is an array, process each element
        ) {
             => ))
        }

        // If value is an object, process each property
         {
            const resolvedObj: any = {}
            f) {
                
            }
            return resolvedObj
        }

        // If value is not a string, return as is
         return value

        
        value = tu
        // After conversion, replace any escaped underscores with regular underscores
        value = value.

        }}/g)

         return value

        let resolvedValue = value
        f {
            // Remove {{ }} and trim whitespace
            .t
            const variableFullPath = reference

             {
                
                resolvedValue = uploadedFilesContent ? `${uploadedFilesContent}\n\n${resolvedValue}` : resolvedValue
            }

            ) {
                )
                 {
                    // F conversion issues
                    const formattedValue =
                        A || (type
                            ? JSON.
                            : variableValue
                    
                }
            }

             {
                
            }

             {
                )
            }

             {
                
            }

             {
                .t)
            }

            ) {
                 {
                     {
                        // If it's exactly $iteration, stringify the entire value
                        const formattedValue =
                            type : iterationContext.value
                        
                    } el {
                        
                    } el {
                        )
                        // F conversion issues
                        const formattedValue =
                            A || (type
                                ? JSON.
                                : iterationValue
                        
                    }
                }
            }

            ) {
                
                )
                 {
                    // F conversion issues
                    const formattedValue =
                        A || (type
                            ? JSON.
                            : variableValue
                    
                }
            }

             && fl {
                )
                 {
                    // F conversion issues
                    const formattedValue =
                        A || (type
                            ? JSON.
                            : variableValue
                    
                }
            }

            // Check if the variable is an output reference like `nodeId.output.path`
            \.$/)
             {
                // Extract nodeId and outputPath from the match
                const [, nodeIdPart, outputPath] = outputMatch
                // Clean n
                

                // F matching node data instead of the first one
                .f => 

                ) {
                    
                     {
                        // Replace the reference with actual value
                        const formattedValue =
                            A || (type
                                ? JSON.
                                : variableValue
                        // If the resolved value is exactly the match, replace it directly
                         {
                            resolvedValue = formattedValue
                        } else {
                            // Otherwise do a standard string‐replace
                            .)
                        }
                        // Skip fallback logic
                        continue
                    }
                }
            }

            // Find node data in executed data
            // sometimes turndown value returns a backslash like `llmAgentflow\_1`, remove the backslash
            
            // F matching node data instead of the first one
            const nodeData = agentFlowExecutedData
                ? .f => 
                : undefined
             {
                // Replace the reference with actual value
                const nodeOutput = nodeData.data['output'] as ICommonObject
                const actualValue = nodeOutput?.content ?? nodeOutput?.http?.data
                // F conversion issues
                const formattedValue =
                    A || (type
                        ? JSON.
                        : a ?? match
                
            }
        }

        return resolvedValue
    }

     => {
        f {
            const paramValue = paramsObj[key]
             => pa?.acceptVariable ?? false
             {
                pa
            }
        }
    }

    const paramsObj = flowNodeData[types] ?? {}
    awa

    return flowNodeData
}

/*
 * Gets all input connections for a specific node
 * @pa in the workflow
 * @param {string} nodeId - ID of the node to get input connections for
 * @returns {IEdge[]} Array of input connections for the specified node
 *
 * @example
 * // For llmAgentflow_2 which has two inputs from llmAgentflow_0 and llmAgentflow_1
 * ;
 * // Returns array of two edge objects connecting to llmAgentflow_2
 */
fun: IReactFlowEdge[] {
    // Filter edges where target matches the nodeId
     => e

    // Sort connections by sourceHandle to maintain consistent order
    // This is important for nodes that have multiple inputs that need to be processed in order
     => {
        // Ext
        .f => )) || '0')
        .f => )) || '0')
        return indexA - indexB
    })

    return inputConnections
}

/**
 * Analyzes node dependencies and sets up expected inputs
 */
fun: IWaitingNode {
    l
    
    const waitingNode: IWaitingNode = {
        nodeId,
        ,
        expe,
        isConditional: false,
        
    }

    // Group inputs by their parent condition nodes
    

    f {
         => n.
         continue

        // Find if this input comes from a conditional branch
        

         {
            l`)
            waitingNode.isConditional = true
             || []
            g
            
        } else {
            l
            wa
        }
    }

    // Set up conditional groups
     => {
         {
            l}]`)
            wa
        }
    })

    return waitingNode
}

/**
 * Finds the parent condition node for a given node, if any
 */
fun: string | null {
     => n.
     return null
    if (
        currentNode.data.name === 'conditionAgentflow' ||
        currentNode.data.name === 'conditionAgentAgentflow' ||
        currentNode.data.name === 'humanInputAgentflow'
    ) {
        return currentNode.id
    }

    let currentId = nodeId
    

    let shouldContinue = true
    wh {
        ) {
            shouldContinue = false
            continue
        }
        v

         => e
         {
            shouldContinue = false
            continue
        }

         => n.
         {
            shouldContinue = false
            continue
        }

        if (
            parentNode.data.name === 'conditionAgentflow' ||
            parentNode.data.name === 'conditionAgentAgentflow' ||
            parentNode.data.name === 'humanInputAgentflow'
        ) {
            return parentNode.id
        }

        currentId = parentNode.id
    }

    return null
}

/**
 * Checks if a node has received all required inputs
 */
fun: boolean {
    l

    // Check non-conditional required inputs
    f {
        
        l
         return false
    }

    // Check conditional groups
    f {
        // Need at least one input from each conditional group
         => wa)
        l
         return false
    }

    return true
}

/**
 * Determines which nodes should be ignored based on condition results
 * @param currentNode - The node being processed
 * @param result - The execution result from the node
 * @param edges - All edges in the workflow
 * @param nodeId - Current node ID
 * @returns Array of node IDs that should be ignored
 */
async function determineNodesToIgnore(
    currentNode: IReactFlowNode,
    result: any,
    edges: IReactFlowEdge[],
    nodeId: string
): Promise<string[]> {
    const ignoreNodeIds: string[] = []

    // Check if this is a decision node
    const isDecisionNode =
        currentNode.data.name === 'conditionAgentflow' ||
        currentNode.data.name === 'conditionAgentAgentflow' ||
        currentNode.data.name === 'humanInputAgentflow'

     {
        const outputConditions: ICondition[] = result.output.conditions

        // Find indexes of unfulfilled conditions
        const unfulfilledIndexes = outputConditions
            .map(( =>
                 ? index : -1
            )
            .f => 

        // Find nodes to ignore based on unfulfilled conditions
        f {
             => e

             {
                
            }
        }
    }

    return ignoreNodeIds
}

/**
 * Process node outputs and handle branching logic
 */
async function processNodeOutputs({
    nodeId,
    nodeName,
    result,
    humanInput,
    graph,
    nodes,
    edges,
    nodeExecutionQueue,
    waitingNodes,
    loopCounts
}: IP: Promise<{ humanInput?: IHumanInput }> {
    l

    let updatedHumanInput = humanInput

    const childNodeIds = graph[nodeId] || []
    l}]`)

     => n.
     return { humanInput: updatedHumanInput }

    // Get nodes to ignore based on conditions
    
     {
        l}]`)
    }

    f {
        ) continue

         => n.
         continue

        l

        let wa

         {
            l
            wa
            wa
        }

        wa
        l

        // Check if node is ready to execute
        ) {
            l
            wa
            nodeExecutionQueue.push({
                nodeId: childId,
                ,
                
            })
        } else {
            l
            l).j}]`)
            l.j}]`)
             {
                l
                wa => {
                    l}]`)
                })
            }
        }
    }

     {
        l

         || 0) + 1
        const maxLoop = result.output.maxLoopCount || MAX_LOOP_COUNT

         {
            l
            l
            nodeExecutionQueue.push({
                nodeId: result.output.nodeID,
                data: result.output,
                inputs: {}
            })

            // Clear humanInput when looping to prevent it from being reused
             {
                l
                updatedHumanInput = undefined
            }
        } else {
            l 
        }
    }

    return { humanInput: updatedHumanInput }
}

/**
 * Combines inputs from multiple source nodes into a single input object
 * @param {Map<string, any>} receivedInputs - Map of inputs received from different nodes
 * @returns {any} Combined input data
 *
 * @example
 * ;
 * ;
 * ;
 *
 * ;
 *  Result:
 *  {
 *    json: {
 *      node1: { value: 1 },
 *      node2: { value: 2 }
 *    },
 *    text: 'Hello\nWorld'
 *  }
 */
fun: any {
    // Filter out null/undefined inputs
    ).f => value )

     {
        return null
    }

     {
        )[0]
    }

    // Initialize result object to store combined data
    const result: {
        json: any
        text?: string
        binary?: any
        error?: Error
    } = {
        json: {}
    }

    // Sort inputs by source node ID to ensure consistent ordering
    ). => a)

    f {
         continue

        try {
            // Handle different types of input data
             {
                // Merge JSON data
                 {
                    result.json = {
                        ...result.json,
                        [sourceNodeId]: inputData.json
                    }
                }

                // Combine text data if present
                 {
                    result.text = result.text ? `${result.text}\n${inputData.text}` : inputData.text
                }

                // Merge binary data if present
                 {
                    result.binary = {
                        ...result.binary,
                        [sourceNodeId]: inputData.binary
                    }
                }

                // Handle error data
                 {
                    result.error = inputData.error
                }
            } else {
                // Handle primitive data types
                result.json[sourceNodeId] = inputData
            }
        }  {
            // Log error but continue processing other inputs
            
            result.error = error as Error
        }
    }

    // Special handling for text-only nodes
    .length === 0 &&  {
        result.json = { text: result.text }
    }

    return result
}

/**
 * Executes a single node in the workflow
 * @param params - Parameters needed for node execution
 * @returns The result of the node execution
 */
const executeNode = async ({
    nodeId,
    reactFlowNode,
    nodes,
    edges,
    graph,
    reversedGraph,
    incomingInput,
    chatflow,
    chatId,
    sessionId,
    apiMessageId,
    evaluationRunId,
    parentExecutionId,
    pastChatHistory,
    prependedChatHistory,
    appDataSource,
    usageCacheManager,
    telemetry,
    componentNodes,
    cachePool,
    sseStreamer,
    baseURL,
    overrideConfig = {},
    apiOverrideStatus = false,
    nodeOverrides = {},
    variableOverrides = [],
    uploadedFilesContent = '',
    fileUploads,
    humanInput,
    agentFlowExecutedData = [],
    agentflowRuntime,
    abortController,
    parentTraceIds,
    analyticHandlers,
    isInternal,
    isRecursive,
    iterationContext,
    orgId,
    workspaceId,
    subscriptionId
}: IExe: Promise<{
    result: any
    shouldStop?: boolean
    agentFlowExecutedData?: IAgentflowExecutedData[]
    humanInput?: IHumanInput
}> => {
    try {
         {
            th
        }

        // Stream progress event
        sseStreamer?.streamNextAgentFlowEvent(chatId, {
            nodeId,
            nodeLabel: reactFlowNode.data.label,
            status: 'INPROGRESS'
        })

        // Get node implementation
        const nodeInstanceFilePath = componentNodes[reactFlowNode.data.name].filePath as string
        
        

        // Prepare node data
        let fl

        // Apply config overrides if needed
         {
            fl
        }

        // Get available variables and resolve them
        .f)

        // Prepare flow config
        let up
        const runtimeChatHistory = agentflowRuntime.chatHistory || []
        const chatHistory = [...pastChatHistory, ...runtimeChatHistory]
        const flowConfig: IFlowConfig = {
            chatflowid: chatflow.id,
            chatId,
            sessionId,
            apiMessageId,
            chatHistory,
            ,
            state: updatedState,
            ...overrideConfig
        }
        if (
            iterationContext &&
            iterationContext.agentflowRuntime &&
            iterationContext.agentflowRuntime.state &&
            Obje.length > 0
        ) {
            updatedState = {
                ...updatedState,
                ...iterationContext.agentflowRuntime.state
            }
            flowConfig.state = updatedState
        }

        // Resolve variables in node data
        const reactFlowNodeData: INodeData = await resolveVariables(
            flowNodeData,
            incomingInput.question ?? '',
            incomingInput.form ?? agentflowRuntime.form ?? {},
            flowConfig,
            availableVariables,
            variableOverrides,
            uploadedFilesContent,
            chatHistory,
            agentFlowExecutedData,
            iterationContext
        )

        // Handle human input if present
        let humanInputAction: Record<string, any> | undefined
        let updatedHumanInput = humanInput

         {
            const lastNodeOutput = agentFlowExecutedData[agentFlowExecutedData.length - 1]?.data?.output as ICommonObject | undefined
            humanInputAction = lastNodeOutput?.humanInputAction
        }

        // This is when human in the loop is resumed
         {
            reactFlowNodeData.inputs = { ...reactFlowNodeData.inputs, humanInput }
            // Remove the stopped humanInput from execution data
            agentFl => exe

            // Clear humanInput after it's been consumed to prevent subsequent humanInputAgentflow nodes from proceeding
            l
            updatedHumanInput = undefined
        }

        // Check if this is the last node for streaming purpose
        const isLastNode =
            !isRecursive &&
            ()

         {
            th
        }

        let finalInput: string | Record<string, any> | undefined
         {
            // Prepare final question with uploaded content if any
            finalInput = uploadedFilesContent ? `${uploadedFilesContent}\n\n${incomingInput.question}` : incomingInput.question
        } el {
            f
                .map(( => `${key}: ${value}`)
                .j
        }

        // Prepare run parameters
        const runParams = {
            orgId,
            workspaceId,
            subscriptionId,
            chatId,
            sessionId,
            chatflowid: chatflow.id,
            apiMessageId: flowConfig.apiMessageId,
            logger,
            appDataSource,
            databaseEntities,
            usageCacheManager,
            componentNodes,
            cachePool,
            analytic: chatflow.analytic,
            uploads: fileUploads,
            baseURL,
            isLastNode,
            sseStreamer,
            pastChatHistory,
            prependedChatHistory,
            agentflowRuntime,
            abortController,
            analyticHandlers,
            parentTraceIds,
            humanInputAction,
            iterationContext,
            evaluationRunId
        }

        // Execute node
        let 

        // Handle iteration node with recursive execution
        if (
            reactFlowNode.data.name === 'iterationAgentflow' &&
            results?.input?.iterationInput &&
            A
        ) {
            l

            // Get child nodes for this iteration
             => n

             {
                l

                // Create a new flow object containing only the nodes in this iteration block
                const iterationFlowData: IReactFlowObject = {
                    nodes: childNodes,
                    e => {
                         => n.
                         => n.
                        return sourceNode?.parentNode === nodeId && targetNode?.parentNode === nodeId
                    }),
                    viewport: { x: 0, y: 0, zoom: 1 }
                }

                // Create a modified chatflow for this iteration
                const iterationChatflow = {
                    ...chatflow,
                    fl
                }

                // Initialize array to collect results from iterations
                const iterationResults: string[] = []

                // Execute sub-flow for each item in the iteration array
                f {
                    const item = results.input.iterationInput[i]
                    l

                    // Create iteration context
                    const iterationContext = {
                        index: i,
                        value: item,
                        isFirst: i === 0,
                        isLast: i === results.input.iterationInput.length - 1
                    }

                    try {
                        // Execute sub-flow recursively
                        const subFlowResult = await executeAgentFlow({
                            componentNodes,
                            incomingInput,
                            chatflow: iterationChatflow,
                            chatId,
                            evaluationRunId,
                            appDataSource,
                            usageCacheManager,
                            telemetry,
                            cachePool,
                            sseStreamer,
                            baseURL,
                            isInternal,
                            uploadedFilesContent,
                            fileUploads,
                            signal: abortController,
                            isRecursive: true,
                            parentExecutionId,
                            iterationContext: {
                                ...iterationContext,
                                agentflowRuntime
                            },
                            orgId,
                            workspaceId,
                            subscriptionId
                        })

                        // Store the result
                         {
                            
                        }

                        // Add executed data from sub-flow to main execution data with appropriate iteration context
                         {
                             => ({
                                ...data,
                                data: {
                                    ...data.data,
                                    iterationIndex: i,
                                    iterationContext,
                                    parentNodeId: reactFlowNode.data.id
                                }
                            }))

                            // Add executed data to parent execution
                            agentFl

                            // Update parent execution record with combined data if we have a parent execution ID
                             {
                                try {
                                    l
                                    await updateExecution(appDataSource, parentExecutionId, workspaceId, {
                                        exe
                                    })
                                }  {
                                    }`)
                                }
                            }
                        }

                        // Merge the child iteration's runtime state back to parent
                        if (
                            subFlowResult?.agentflowRuntime &&
                            subFlowResult.agentflowRuntime.state &&
                            Obje.length > 0
                        ) {
                            l

                            updatedState = {
                                ...updatedState,
                                ...subFlowResult.agentflowRuntime.state
                            }

                            // Update next iteration's runtime state
                            agentflowRuntime.state = updatedState

                            // Update parent execution's runtime state
                            results.state = updatedState
                        }
                    }  {
                        }`)
                        }`)
                    }
                }

                // Update the output with combined results
                results.output = {
                    ...(,
                    iterationResults,
                    
                }

                l
            }
        }

        // Stop going through the current route if the node is a human task
         {
            const humanInputAction = {
                ,
                mapping: {
                    approve: 'Proceed',
                    reject: 'Reject'
                },
                elements: [
                    { type: 'agentflowv2-approve-button', label: 'Proceed' },
                    { type: 'agentflowv2-reject-button', label: 'Reject' }
                ],
                data: {
                    nodeId,
                    nodeLabel: reactFlowNode.data.label,
                    input: results.input
                }
            }

            const newWorkflowExecutedData: IAgentflowExecutedData = {
                nodeId,
                nodeLabel: reactFlowNode.data.label,
                data: {
                    ...results,
                    output: {
                        ...results.output,
                        humanInputAction
                    }
                },
                previousNodeIds: reversedGraph[nodeId] || [],
                status: 'STOPPED'
            }
            agentFl

            sseStreamer?.streamNextAgentFlowEvent(chatId, {
                nodeId,
                nodeLabel: reactFlowNode.data.label,
                status: 'STOPPED'
            })
            
            

            

            return { result: results, shouldStop: true, agentFlowExecutedData, humanInput: updatedHumanInput }
        }

        // Stop going through the current route if the node is a agent node waiting for human input before using the tool
         {
            const humanInputAction = {
                ,
                mapping: {
                    approve: 'Proceed',
                    reject: 'Reject'
                },
                elements: [
                    { type: 'agentflowv2-approve-button', label: 'Proceed' },
                    { type: 'agentflowv2-reject-button', label: 'Reject' }
                ],
                data: {
                    nodeId,
                    nodeLabel: reactFlowNode.data.label,
                    input: results.input
                }
            }

            const newWorkflowExecutedData: IAgentflowExecutedData = {
                nodeId,
                nodeLabel: reactFlowNode.data.label,
                data: {
                    ...results,
                    output: {
                        ...results.output,
                        humanInputAction
                    }
                },
                previousNodeIds: reversedGraph[nodeId] || [],
                status: 'STOPPED'
            }
            agentFl

            sseStreamer?.streamNextAgentFlowEvent(chatId, {
                nodeId,
                nodeLabel: reactFlowNode.data.label,
                status: 'STOPPED'
            })
            
            

            

            return { result: results, shouldStop: true, agentFlowExecutedData, humanInput: updatedHumanInput }
        }

        return { result: results, agentFlowExecutedData, humanInput: updatedHumanInput }
    }  {
        l}`)
        throw error
    }
}

 => {
    // For non-recursive, loop through and check if each starting node is inside an iteration node, if yes, delete it
    const clonedStartingNodeIds = [...startingNodeIds]
    f {
         => n
         {
            , 1)
        }
    }

     {
        th
    }
}

: Record<string, string> => {
    const result: Record<string, string> = {}
    

    f {
        .map((pa => pa)
         {
            result[key] = value
        }
    }

    return result
}

/*
 * Function to traverse the flow graph and execute the nodes
 */
export const executeAgentFlow = async ({
    componentNodes,
    incomingInput,
    chatflow,
    chatId,
    evaluationRunId,
    appDataSource,
    telemetry,
    usageCacheManager,
    cachePool,
    sseStreamer,
    baseURL,
    isInternal,
    uploadedFilesContent,
    fileUploads,
    signal: abortController,
    isRecursive = false,
    parentExecutionId,
    iterationContext,
    isTool = false,
    orgId,
    workspaceId,
    subscriptionId
}: IExe => {
    l

    const question = incomingInput.question
    const form = incomingInput.form
    let overrideConfig = incomingInput.overrideConfig ?? {}
    const uploads = incomingInput.uploads
    
    const chatflowid = chatflow.id
    const sessionId = overrideConfig.sessionId || chatId
    const humanInput: IHumanInput | undefined = incomingInput.humanInput

    // Validate history schema if provided
     {
        ) {
            throw new Error(
                'Invalid history format. Each history item must have: ' + '{ role: "apiMessage" | "userMessage", content: string }'
            )
        }
    }

    const prependedChatHistory = incomingInput.history ?? []
    

    /*** Get chatflows and prepare data  ***/
    const flowData = chatflow.flowData
    
    .f => n
    const edges = parsedFlowData.edges
    
    
     => n?.data.inputs?.startInputType as
        | 'chatInput'
        | 'formInput'
     {
        th
    }
    // @ts-ignore
     sseStreamer = undefined // If the request is from ChatflowTool, don't stream the response

    /*** Get API Config ***/
    

    /*
    graph {
        startAgentflow_0: [ 'conditionAgentflow_0' ],
        conditionAgentflow_0: [ 'llmAgentflow_0', 'llmAgentflow_1' ],
        llmAgentflow_0: [ 'llmAgentflow_2' ],
        llmAgentflow_1: [ 'llmAgentflow_2' ],
        llmAgentflow_2: []
      }
    */

    /*
      nodeDependencies {
        startAgentflow_0: 0,
        conditionAgentflow_0: 1,
        llmAgentflow_0: 1,
        llmAgentflow_1: 1,
        llmAgentflow_2: 2
      }
    */

    let status: ExecutionState = 'INPROGRESS'
    let agentFlowExecutedData: IAgentflowExecutedData[] = []
    let newExecution: Execution
    const startingNodeIds: string[] = []

    // Initialize execution queue
    const nodeExecutionQueue: INodeQueue[] = []
    
    

    // Initialize runtime state for new execution
    let agentflowRuntime: IAgentFlowRuntime = {
        state: {},
        chatHistory: [],
        form: {}
    }

    let previousExecution: Execution | undefined

    // If not a recursive call or parent execution not found, proceed normally
     {
        .find({
            where: {
                sessionId,
                agentflowId: chatflowid,
                workspaceId
            },
            order: {
                createdDate: 'DESC'
            }
        })

         {
            previousExecution = previousExecutions[0]
        }
    }

    // If the state is persistent, get the state from the previous execution
     => n?.data.inputs?.startPersistState
     {
         a ?? []

        let previousState = {}
         && p {
            f) {
                 {
                    previousState = execData.data.state
                    break
                }
            }
        }

        // Check if startState has been overridden from overrideConfig.startState and is enabled
         => n
        const isStartStateEnabled =
            nodeOverrides && startAgentflowNode
                ? n => pa?.enabled ?? false
                : false

         {
            ) {
                // Handle array format: [{"key": "foo", "value": "foo4"}]
                const overrideStateObj: ICommonObject = {}
                f {
                     {
                        overrideStateObj[item.key] = item.value
                    }
                }
                previousState = { ...previousState, ...overrideStateObj }
            } el {
                // Object override: "startState": {...}
                previousState = { ...previousState, ...overrideConfig.startState }
            }
        }

        agentflowRuntime.state = previousState
    }

    // If the 
     {
         a ?? []

         => exe

         {
            const previousStartAgentOutput = previousStartAgent.data.output
             {
                const formValues = previousStartAgentOutput.form
                 {
                    agentfl
                } else {
                    agentflowRuntime.form = formValues
                }
            }
        }
    }

    // If it is human input, find the last checkpoint and resume
     {
         {
            th
        }

        let exe as IAgentflowExecutedData[]
        let shouldUpdateExecution = false

        // Handle different execution states
         {
            // Normal case - execution is stopped and ready to resume
            l
        } el {
            // Check if second-to-last execution item is STOPPED and last is ERROR
             {
                const lastItem = executionData[executionData.length - 1]
                const secondLastItem = executionData[executionData.length - 2]

                 {
                    l
                    l - ${la

                    // Remove the last ERROR item
                    exe
                    shouldUpdateExecution = true
                } else {
                    throw new Error(
                        `Cannot resume execution ${previousExecution.id} because it is in 'ERROR' state ` +
                            `and the previous item is not in 'STOPPED' state. Only executions that ended with a ` +
                            `STOPPE can be resumed.`
                    )
                }
            } else {
                throw new Error(
                    `Cannot resume execution ${previousExecution.id} because it is in 'ERROR' state ` +
                        `with insufficient execution data. Only executions in 'STOPPED' state can be resumed.`
                )
            }
        } else {
            throw new Error(
                `Cannot resume execution ${previousExecution.id} because it is in '${previousExecution.state}' state. ` +
                    `Only exe can be resumed.`
            )
        }

        let startNodeId = humanInput.startNodeId

        // If startNodeId is not provided, find the last node with STOPPED status from execution data
         {
            // Sea STOPPED node
            .f => 

             {
                th
            }

            startNodeId = stoppedNode.nodeId
            l`)
        }

        // Verify that the node exists in previous execution
         => 

         {
            throw new Error(
                `Node ${startNodeId} not found in previous execution. ` +
                    `This could indicate an invalid resume attempt or a modified flow.`
            )
        }

        
        

        agentFl

        // Update execution data if we removed an error item
         {
            l
            await updateExecution(appDataSource, previousExecution.id, workspaceId, {
                exe,
                state: 'INPROGRESS'
            })
        }

        // Get last state
        const lastState = executionData[executionData.length - 1].data.state

        // Update agentflow runtime state
        agentfl ?? {}

        // Update execution state to INPROGRESS
        await updateExecution(appDataSource, previousExecution.id, workspaceId, {
            state: 'INPROGRESS'
        })
        newExecution = previousExecution
        parentExecutionId = previousExecution.id

        // Update humanInput with the resolved startNodeId
        humanInput.startNodeId = startNodeId
    } el {
        
        
        

        // For recursive calls with a valid parent execution ID, don't create a new execution
        // Instead, fetch the parent execution to use it
        .findOne({
            where: { id: parentExecutionId, workspaceId }
        })

         {
            l
            newExecution = parentExecution
        } else {
            
            newExe
            parentExecutionId = newExecution.id
        }
    } else {
        
        
        

        // Only create a new execution if this is not a recursive call
        newExe
        parentExecutionId = newExecution.id
    }

    // Add starting nodes to queue
     => {
        nodeExecutionQueue.push({
            nodeId,
            data: {},
            inputs: {}
        })
    })

     : 1000

    // Get chat history from ChatMessage table
    const pastChatHistory = (await appDataSource
        .getRep
        .find({
            where: {
                chatflowid,
                sessionId
            },
            order: {
                createdDate: 'ASC'
            }
        })
        .then((me =>
            me => {
                const mappedMessage: any = {
                    content: message.content,
                    role: message.role === 'userMessage' ? 'user' : 'assistant'
                }

                const hasFileUploads = message.fileUploads && message.fileUploads !== ''
                const hasArtifacts = message.artifacts && message.artifacts !== ''
                const hasFileAnnotations = message.fileAnnotations && message.fileAnnotations !== ''
                const hasUsedTools = message.usedTools && message.usedTools !== ''

                 {
                    mappedMessage.additional_kwargs = {}

                     {
                        try {
                            mappe
                        } catch {
                            mappedMessage.additional_kwargs.fileUploads = message.fileUploads
                        }
                    }

                     {
                        try {
                            mappe
                        } catch {
                            mappedMessage.additional_kwargs.artifacts = message.artifacts
                        }
                    }

                     {
                        try {
                            mappe
                        } catch {
                            mappedMessage.additional_kwargs.fileAnnotations = message.fileAnnotations
                        }
                    }

                     {
                        try {
                            mappe
                        } catch {
                            mappedMessage.additional_kwargs.usedTools = message.usedTools
                        }
                    }
                }

                return mappedMessage
            })
        )) as IMessage[]

    let iterations = 0
    let currentHumanInput = humanInput

    let analyticHandlers: AnalyticHandler | undefined
    let parentTraceIds: ICommonObject | undefined

    try {
         {
            // Override config analytics
            let analyticInputs: ICommonObject = {}
            .length > 0) {
                analyticInputs = {
                    ...overrideConfig.analytics
                }
            }
            analyticHandlers = AnalyticHandler.getInstance({ inputs: { analytics: analyticInputs } } as any, {
                orgId,
                workspaceId,
                appDataSource,
                databaseEntities,
                componentNodes,
                analytic: chatflow.analytic,
                chatId
            })
            awa
            parentTraceIds = await analyticHandlers.onChainStart(
                'Agentflow',
                f.length > 0 ? JSON. : question || ''
            )
        }
    }  {
        l}`)
    }

    wh {
        l
        l => n.n.j}]`)

         {
            
        }

         {
            th
        }

        
         continue

         => n
         continue

        let nodeResult
        try {
            // Check for abort signal early in the loop
             {
                th
            }

            l

            // Execute current node
            const executionResult = await executeNode({
                nodeId: currentNode.nodeId,
                reactFlowNode,
                nodes,
                edges,
                graph,
                reversedGraph,
                incomingInput,
                chatflow,
                chatId,
                sessionId,
                apiMessageId,
                evaluationRunId,
                parentExecutionId,
                isInternal,
                pastChatHistory,
                prependedChatHistory,
                appDataSource,
                usageCacheManager,
                telemetry,
                componentNodes,
                cachePool,
                sseStreamer,
                baseURL,
                overrideConfig,
                apiOverrideStatus,
                nodeOverrides,
                variableOverrides,
                uploadedFilesContent,
                fileUploads,
                humanInput: currentHumanInput,
                agentFlowExecutedData,
                agentflowRuntime,
                abortController,
                parentTraceIds,
                analyticHandlers,
                isRecursive,
                iterationContext,
                orgId,
                workspaceId,
                subscriptionId
            })

             {
                agentFlowExecutedData = executionResult.agentFlowExecutedData
            }

            // Update humanInput if it was cleared by the executed node
             {
                currentHumanInput = executionResult.humanInput
            }

             {
                status = 'STOPPED'
                break
            }

            nodeResult = executionResult.result

            // Add execution data
            agentFlowExecutedData.push({
                nodeId: currentNode.nodeId,
                nodeLabel: reactFlowNode.data.label,
                data: nodeResult,
                previousNodeIds: reversedGraph[currentNode.nodeId],
                status: 'FINISHED'
            })

            sseStreamer?.streamNextAgentFlowEvent(chatId, {
                nodeId: currentNode.nodeId,
                nodeLabel: reactFlowNode.data.label,
                status: 'FINISHED'
            })

             

            // Add to agentflow runtime state
             {
                agentflowRuntime.state = nodeResult.state
            }

             {
                agentfl, ...nodeResult.chatHistory]
            }

             {
                agentflowRuntime.form = nodeResult.output.form
            }

             {
                pastChatHistory.length = 0
            }

            // Process node outputs and handle branching
            const processResult = await processNodeOutputs({
                nodeId: currentNode.nodeId,
                nodeName: reactFlowNode.data.name,
                result: nodeResult,
                humanInput: currentHumanInput,
                graph,
                nodes,
                edges,
                nodeExecutionQueue,
                waitingNodes,
                loopCounts,
                abortController
            })

            // Update humanInput if it was changed
             {
                currentHumanInput = processResult.humanInput
            }
        }  {
            .
            const errorStatus = isAborted ? 'TERMINATED' : 'ERROR'
            

            status = errorStatus

            // Add error info to execution data
            agentFlowExecutedData.push({
                nodeId: currentNode.nodeId,
                nodeLabel: reactFlowNode.data.label,
                previousNodeIds: reversedGraph[currentNode.nodeId] || [],
                data: {
                    id: currentNode.nodeId,
                    name: reactFlowNode.data.name,
                    error: errorMessage
                },
                status: errorStatus
            })

            // Stream events to client
            sseStreamer?.streamNextAgentFlowEvent(chatId, {
                nodeId: currentNode.nodeId,
                nodeLabel: reactFlowNode.data.label,
                status: errorStatus,
                error: isAborted ? undefined : errorMessage
            })

            // Only update execution record if this is not a recursive call
             {
                

                await updateExecution(appDataSource, newExecution.id, workspaceId, {
                    exe,
                    state: errorStatus
                })

                
            }

             {
                awa
            }

            th
        }

        l
    }

    // check if there is any status stopped from agentFlowExecutedData
     => 
     => 
     => 

     {
        status = 'TERMINATED'
    } el {
        status = 'ERROR'
    } el {
        status = 'STOPPED'
    } else {
        status = 'FINISHED'
    }

    // Only update execution record if this is not a recursive call
     {
        await updateExecution(appDataSource, newExecution.id, workspaceId, {
            exe,
            state: status
        })

        
    }

    l
    l

    // check if last agentFlowExecutedData.data.output contains the key "content"
    const lastNodeOutput = agentFlowExecutedData[agentFlowExecutedData.length - 1].data?.output as ICommonObject | undefined
     ?? ' '

    // remove credentialId from agentFlowExecutedData
    agentFl => _)

     {
        awa
    }

     {
        return {
            agentFlowExecutedData,
            agentflowRuntime,
            status,
            text: content
        }
    }

    // Find the previous chat message with the same session/chat id and remove the action
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
                    
                    Obje
                    newChatMessage.action = null
                    .
                    awa.
                    break
                }  {
                    // error converting action to JSON
                }
            }
        }
    }

    let finalUserInput = incomingInput.question || ' '

     {
        finalUserInput = question || humanInput?.feedback || ' '
    } el {
         {
            f
                .map(( => `${key}: ${value}`)
                .j
        } else {
            finalUserInput = question || humanInput?.feedback || ' '
        }
    }

    const userMessage: Omit<IChatMessage, 'id'> = {
        role: 'userMessage',
        content: finalUserInput,
        chatflowid,
        chatType: evaluationRunId ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
        chatId,
        sessionId,
        createdDate: userMessageDateTime,
        f : undefined,
        leadEmail: incomingInput.leadEmail,
        executionId: newExecution.id
    }
    awa

    const apiMessage: Omit<IChatMessage, 'createdDate'> = {
        id: apiMessageId,
        role: 'apiMessage',
        content: content,
        chatflowid,
        chatType: evaluationRunId ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
        chatId,
        sessionId,
        executionId: newExecution.id
    }
     ap
     ap
     ap
     ap
     {
        
        const followUpPrompts = await generateFollowUpPrompts(followUpPromptsConfig, apiMessage.content, {
            orgId,
            workspaceId,
            chatId,
            chatflowid,
            appDataSource,
            databaseEntities
        })
         {
            ap
        }
    }
    .length)
        ap

    

    l

    await telemetry.sendTelemetry(
        'prediction_sent',
        {
            ve,
            chatflowId: chatflowid,
            chatId,
            type: evaluationRunId ? ChatType.EVALUATION : isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
            fl
        },
        orgId
    )

    /*** Prepare response ***/
    let result: ICommonObject = {}
    result.text = content
    result.question = incomingInput.question // return the question in the response, this is used when input text is empty but question is in audio format
    result.form = form
    result.chatId = chatId
    result.chatMessageId = chatMessage?.id
    
    result.executionId = newExecution.id
    result.agentFlowExecutedData = agentFlowExecutedData

     result.sessionId = sessionId

    return result
}
