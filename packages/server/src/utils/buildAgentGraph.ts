import {
    ICommonObject,
    IMultiAgentNode,
    IAgentReasoning,
    IAction,
    ITeamState,
    ConsoleCallbackHandler,
    additionalCallbacks,
    ISeqAgentsState,
    ISeqAgentNode,
    IUsedTool,
    IDocument,
    IServerSideEventStreamer
} from 'flowise-components'
import { omit, cloneDeep, flatten, uniq } from 'lodash'
import { StateGraph, END, START } from '@langchain/langgraph'
import { Document } from '@langchain/core/documents'
import { StatusCodes } from 'http-status-codes'
import { v4 as uuidv4 } from 'uuid'
import { StructuredTool } from '@langchain/core/tools'
import { BaseMessage, HumanMessage, AIMessage, AIMessageChunk, ToolMessage } from '@langchain/core/messages'
import { IChatFlow, IComponentNodes, IDepthQueue, IReactFlowNode, IReactFlowEdge, IMessage, IncomingInput, IFlowConfig } from '../Interface'
import { databaseEntities, clearSessionMemory, getAPIOverrideConfig } from '../utils'
import { replaceInputsWithConfig, resolveVariables } from '.'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { getErrorMessage } from '../errors/utils'
import logger from './logger'
import { Variable } from '../database/entities/Variable'
import { getWorkspaceSearchOptions } from '../enterprise/utils/ControllerServiceUtils'
import { DataSource } from 'typeorm'
import { CachePool } from '../CachePool'

/**
 * Build Agent Graph
 */
export const buildAgentGraph = async ({
    agentflow,
    flowConfig,
    incomingInput,
    nodes,
    edges,
    initializedNodes,
    endingNodeIds,
    startingNodeIds,
    depthQueue,
    chatHistory,
    uploadedFilesContent,
    appDataSource,
    componentNodes,
    sseStreamer,
    shouldStreamResponse,
    cachePool,
    baseURL,
    signal,
    orgId,
    workspaceId
}: {
    agentflow: IChatFlow
    flowConfig: IFlowConfig
    incomingInput: IncomingInput
    nodes: IReactFlowNode[]
    edges: IReactFlowEdge[]
    initializedNodes: IReactFlowNode[]
    endingNodeIds: string[]
    startingNodeIds: string[]
    depthQueue: IDepthQueue
    chatHistory: IMessage[]
    uploadedFilesContent: string
    appDataSource: DataSource
    componentNodes: IComponentNodes
    sseStreamer: IServerSideEventStreamer
    shouldStreamResponse: boolean
    cachePool: CachePool
    baseURL: string
    signal?: AbortController
    orgId: string
    workspaceId?: string
}): Promise<any> => {
    try {
        const chatflowid = flowConfig.chatflowid
        const chatId = flowConfig.chatId
        const sessionId = flowConfig.sessionId
        const analytic = agentflow.analytic
        const uploads = incomingInput.uploads

        const options = {
            orgId,
            workspaceId,
            chatId,
            sessionId,
            chatflowid,
            logger,
            analytic,
            appDataSource,
            databaseEntities,
            cachePool,
            uploads,
            baseURL,
            
        }

        let streamResults
        let finalResult = ''
        let finalSummarization = ''
        let lastWorkerResult = ''
        let agentReasoning: IAgentReasoning[] = []
        let isSequential = false
        let lastMessageRaw = {} as AIMessageChunk
        let finalAction: IAction = {}
        let totalSourceDocuments: IDocument[] = []
        let totalUsedTools: IUsedTool[] = []
        let totalArtifacts: ICommonObject[] = []

         => n
         => n
         => n

        const mapNameToLabel: Record<string, { label: string; nodeName: string }> = {}

        f {
            ) {
                mapNameToLabel[node.data.instance.name] = {
                    label: node.data.instance.label,
                    nodeName: node.data.name
                }
            }
        }

        try {
             {
                streamResults = await compileMultiAgentsGraph({
                    agentflow,
                    appDataSource,
                    mapNameToLabel,
                    reactFlowNodes: initializedNodes,
                    workerNodeIds: endingNodeIds,
                    componentNodes,
                    options,
                    startingNodeIds,
                    question: incomingInput.question,
                    prependHistoryMessages: incomingInput.history,
                    chatHistory,
                    overrideConfig: incomingInput?.overrideConfig,
                    threadId: sessionId || chatId,
                     => n,
                    uploadedFilesContent
                })
            } else {
                isSequential = true
                streamResults = await compileSeqAgentsGraph({
                    depthQueue,
                    agentflow,
                    appDataSource,
                    reactFlowNodes: initializedNodes,
                    reactFlowEdges: edges,
                    componentNodes,
                    options,
                    question: incomingInput.question,
                    prependHistoryMessages: incomingInput.history,
                    chatHistory,
                    overrideConfig: incomingInput?.overrideConfig,
                    threadId: sessionId || chatId,
                    action: incomingInput.action,
                    uploadedFilesContent
                })
            }

             {
                let isStreamingStarted = false
                f {
                     {
                        f) {
                             continue

                            const nodeId = output[agentName]?.messages
                                ? output[agentName].messages[output[agentName].messages.length - 1]?.additional_kwargs?.nodeId
                                : ''
                            const usedTools = output[agentName]?.messages
                                ?  => m
                                : []
                            const sourceDocuments = output[agentName]?.messages
                                ?  => m
                                : []
                            const artifacts = output[agentName]?.messages
                                ?  => m
                                : []
                            const messages = output[agentName]?.messages
                                ?  => (type)
                                : []
                            lastMessageRaw = output[agentName]?.messages
                                ? output[agentName].messages[output[agentName].messages.length - 1]
                                : {}

                            

                             {
                                 => t
                                 t
                            }

                             {
                                 => 
                                 t
                            }

                             {
                                 => a
                                 t
                            }

                            /*
                             * Check if the next node is a condition node, if yes, then add the agent reasoning of the condition node
                             */
                             {
                                const inputEdges = edges.filter(
                                    (e => e
                                )

                                 => {
                                     => n
                                     {
                                        ) {
                                            
                                            newMe
                                            const reasoning = {
                                                agentName: parentNode.data.instance?.label || parentNode.data.type,
                                                messages: newMessages,
                                                nodeName: parentNode.data.name,
                                                nodeId: parentNode.data.id
                                            }
                                            agentRea
                                        }
                                    }
                                })
                            }

                            const reasoning = {
                                agentName: mapNameToLabel[agentName].label,
                                messages,
                                next: output[agentName]?.next,
                                instructions: output[agentName]?.instructions,
                                u as IUsedTool[],
                                 as Document[],
                                a as ICommonObject[],
                                state,
                                nodeName: isSequential ? mapNameToLabel[agentName].nodeName : undefined,
                                nodeId
                            }
                            agentRea

                            finalSummarization = output[agentName]?.summarization ?? ''

                            lastWorkerResult =
                                output[agentName]?.messages?.length &&
                                output[agentName].messages[output[agentName].messages.length - 1]?.additional_kwargs?.type === 'worker'
                                    ? output[agentName].messages[output[agentName].messages.length - 1].content
                                    : lastWorkerResult

                             {
                                 {
                                    isStreamingStarted = true
                                     {
                                        
                                    }
                                }

                                 {
                                    
                                }

                                // Send loading next agent indicator
                                 {
                                     {
                                        
                                    }
                                }
                            }
                        }
                    } else {
                        f?.content : ''
                        ) finalResult = output.__end__.instructions
                         {
                            
                        }
                    }
                }

                /*
                 * For multi agents mode, sometimes finalResult is empty
                 * 1.) Provide lastWorkerResult as final result if available
                 * 2.) Provide summary as final result if available
                 */
                 {
                     finalResult = lastWorkerResult
                    el finalResult = finalSummarization
                     {
                        
                    }
                }

                /*
                 * For sequential mode, sometimes finalResult is empty
                 * Use last agent message as final result
                 */
                 {
                    const lastMessages = agentReasoning[agentReasoning.length - 1].messages
                    const lastAgentReasoningMessage = lastMessages[lastMessages.length - 1]
                    // If last message is an AI Message with tool calls, that means the last node was interrupted
                     {
                        // The last node that got interrupted
                         => n

                        // Find the next tool node that is connected to the interrupted node, to get the approve/reject button text
                        const tooNodeId = edges.find(
                            (e =>
                                e &&
                                e
                        )?.target
                         => n

                        // Map raw tool calls to used tools, to be shown on interrupted message
                         => {
                            return {
                                tool: toolCall.name,
                                toolInput: toolCall.args,
                                toolOutput: ''
                            }
                        })

                        // Emit the interrupt message to the client
                        let approveButtonText = 'Yes'
                        let rejectButtonText = 'No'

                         {
                             {
                                
                                finalResult = result || 'Do you want to proceed?'
                                approveButtonText = connectedToolNode.data.inputs?.approveButtonText || 'Yes'
                                rejectButtonText = connectedToolNode.data.inputs?.rejectButtonText || 'No'
                            } el {
                                
                                finalResult = result || 'Do you want to proceed?'
                                approveButtonText = node.data.inputs?.approveButtonText || 'Yes'
                                rejectButtonText = node.data.inputs?.rejectButtonText || 'No'
                            }
                            finalAction = {
                                ,
                                mapping: {
                                    approve: approveButtonText,
                                    reject: rejectButtonText,
                                    toolCalls: lastMessageRaw.tool_calls
                                },
                                elements: [
                                    { type: 'approve-button', label: approveButtonText },
                                    { type: 'reject-button', label: rejectButtonText }
                                ]
                            }
                             {
                                
                                
                            }
                        }
                        t
                    } el {
                        finalResult = lastAgentReasoningMessage
                         {
                            
                        }
                    }
                }

                t)
                t)
                t)

                 {
                    
                    
                    
                    
                }

                return {
                    finalResult,
                    finalAction,
                    sourceDocuments: totalSourceDocuments,
                    artifacts: totalArtifacts,
                    usedTools: totalUsedTools,
                    agentReasoning
                }
            }
        }  {
            // clear agent memory because checkpoints were saved during runtime
            awa
            .) {
                 {
                    
                }
                return { finalResult, agentReasoning }
            }
            th)
        }
        return streamResults
    }  {
        l
        th}`)
    }
}

type MultiAgentsGraphParams = {
    agentflow: IChatFlow
    appDataSource: DataSource
    mapNameToLabel: Record<string, { label: string; nodeName: string }>
    reactFlowNodes: IReactFlowNode[]
    workerNodeIds: string[]
    componentNodes: IComponentNodes
    options: ICommonObject
    startingNodeIds: string[]
    question: string
    prependHistoryMessages?: IMessage[]
    chatHistory?: IMessage[]
    overrideConfig?: ICommonObject
    threadId?: string
    summarization?: boolean
    uploadedFilesContent?: string
}

 => {
    const {
        agentflow,
        appDataSource,
        mapNameToLabel,
        reactFlowNodes,
        workerNodeIds,
        componentNodes,
        options,
        prependHistoryMessages = [],
        chatHistory = [],
        overrideConfig = {},
        threadId,
        summarization = false,
        uploadedFilesContent
    } = params

    let question = params.question

    const channels: ITeamState = {
        messages: {
            value: (x: Ba => x.,
             => []
        },
        next: 'initialState',
        instructions: "Solve the user's request.",
        team_members: []
    }

     channels.summarization = 'summarize'

    const workflowGraph = new StateGraph<ITeamState>({
        //@ts-ignore
        channels
    })

     => w)

    /*** Get API Config ***/
    .f)
    

    let supervisorWorkers: { [key: string]: IMultiAgentNode[] } = {}

    // Init worker nodes
    f {
        const nodeInstanceFilePath = componentNodes[workerNode.data.name].filePath as string
        
        

        let fl
        
            fl
        flowNodeData = await resolveVariables(
            flowNodeData,
            reactFlowNodes,
            question,
            chatHistory,
            overrideConfig,
            uploadedFilesContent,
            availableVariables,
            variableOverrides
        )

        try {
            
            const parentSupervisor = workerResult.parentSupervisorName
             continue
            ) {
                
            } else {
                supervisorWorkers[parentSupervisor] = [workerResult]
            }

            w
        }  {
            th}`)
        }
    }

    // Init supervisor nodes
    f {
        const supervisorInputLabel = mapNameToLabel[supervisor].label
         => 
         continue

        const nodeInstanceFilePath = componentNodes[supervisorNode.data.name].filePath as string
        
        

        let fl

        
            fl
        flowNodeData = await resolveVariables(
            flowNodeData,
            reactFlowNodes,
            question,
            chatHistory,
            overrideConfig,
            uploadedFilesContent,
            availableVariables,
            variableOverrides
        )

         flowNodeData.inputs.workerNodes = supervisorWorkers[supervisor]

        try {
            
             continue

             {
                try {
                    f {
                        que
                    }
                }  {
                    th)
                }
            }

            w

            f {
                //@ts-ignore
                w
            }

            let conditionalEdges: { [key: string]: string } = {}
            f {
                conditionalEdges[supervisorResult.workers[i]] = supervisorResult.workers[i]
            }

            //@ts-ignore
            w => x.next, {
                ...conditionalEdges,
                FINISH: END
            })

            //@ts-ignore
            w
            ;(w.signal = options.signal

            // Get memory
            let memory = supervisorResult?.checkpointMemory

            

            
            
            const config = { configurable: { thread_id: threadId } }

            let prependMessages = []
            // Only append in the first message
             {
                f {
                     {
                        prependMessages.push(
                            new AIMessage({
                                content: message.message || message.content || ''
                            })
                        )
                    } el {
                        prependMessages.push(
                            new HumanMessage({
                                content: message.message || message.content || ''
                            })
                        )
                    }
                }
            }

            // Return stream result as we should only have 1 supervisor
            const finalQuestion = uploadedFilesContent ? `${uploadedFilesContent}\n\n${question}` : question
            return await graph.stream(
                {
                    me]
                },
                {
                    recursionLimit: supervisorResult?.recursionLimit ?? 100,
                    callbacks: [loggerHandler, ...callbacks],
                    configurable: config
                }
            )
        }  {
            th}`)
        }
    }
}

type SeqAgentsGraphParams = {
    depthQueue: IDepthQueue
    agentflow: IChatFlow
    appDataSource: DataSource
    reactFlowNodes: IReactFlowNode[]
    reactFlowEdges: IReactFlowEdge[]
    componentNodes: IComponentNodes
    options: ICommonObject
    question: string
    prependHistoryMessages?: IMessage[]
    chatHistory?: IMessage[]
    overrideConfig?: ICommonObject
    threadId?: string
    action?: IAction
    uploadedFilesContent?: string
}

 => {
    const {
        depthQueue,
        agentflow,
        appDataSource,
        reactFlowNodes,
        reactFlowEdges,
        componentNodes,
        options,
        prependHistoryMessages = [],
        chatHistory = [],
        overrideConfig = {},
        threadId,
        action,
        uploadedFilesContent
    } = params

    let question = params.question

    let channels: ISeqAgentsState = {
        messages: {
            value: (x: Ba => x.,
             => []
        }
    }

    // Get state
     => n
     {
        channels = {
            ...seqStateNode.data.instance.node,
            ...channels
        }
    }

    let seqGraph = new StateGraph<any>({
        //@ts-ignore
        channels
    })

    /*** Validate Graph ***/
     => n
     th
    
        th

     => n
     => n
     {
        th
    }
    /*** End of Validation ***/

    let flowNodeData
    let conditionalEdges: Record<string, { nodes: Record<string, string>; func: any }> = {}
    let interruptedRouteMapping: Record<string, Record<string, string>> = {}
    let conditionalToolNodes: Record<string, { source: ISeqAgentNode; toolNodes: ISeqAgentNode[] }> = {}
    let bindModel: Record<string, any> = {}
    let interruptToolNodeNames = []

    /*** Get API Config ***/
    .f)
    

     => {
        const nodeInstanceFilePath = componentNodes[node.data.name].filePath as string
        
        

        fl
        
            fl
        flowNodeData = await resolveVariables(
            flowNodeData,
            reactFlowNodes,
            question,
            chatHistory,
            overrideConfig,
            uploadedFilesContent,
            availableVariables,
            variableOverrides
        )

        
        return seqAgentNode
    }

    /*
     *  Two objectives we want to achieve here:
     *  1.) Prepare the mapping of conditional outputs to next nodes. This mapping will ONLY be used to add conditional edges to the Interrupted Agent connected next to Condition/ConditionAgent Node.
     *    For example, if the condition node has 2 outputs 'Yes' and 'No', and 'Yes' leads to 'agentName1' and 'No' leads to 'agentName2', then the mapping should be like:
     *    {
     *      <conditionNodeId>: { 'Yes': 'agentName1', 'No': 'agentName2' }
     *    }
     *  2.) With the interruptedRouteMapping object, avoid adding conditional edges to the Interrupted Agent for the nodes that are already interrupted by tools. It will be separately added from the function - agentInterruptToolFunc
     */
     => {
         => e ?? []

        f {
            const nextNodeId = conditionEdge.target
            const conditionNodeOutputAnchorId = conditionEdge.sourceHandle

             => n
             continue

             => n
             continue

            const outputAnchors = conditionNode?.data.outputAnchors
             continue

            const conditionOutputAnchorLabel =
                 => ?.label ?? ''
             continue

            ) {
                interruptedRouteMapping[conditionNodeId] = {
                    ...interruptedRouteMapping[conditionNodeId],
                    [conditionOutputAnchorLabel]: nextNode.data.instance.name
                }
            } else {
                interruptedRouteMapping[conditionNodeId] = {
                    [conditionOutputAnchorLabel]: nextNode.data.instance.name
                }
            }
        }
    }

    /*
     *  Prepare Conditional Edges
     *  Example: {
     *    'seqCondition_1': { nodes: { 'Yes': 'agentName1', 'No': 'agentName2' }, func: <condition-function>, disabled: true },
     *    'seqCondition_2': { nodes: { 'Yes': 'agentName3', 'No': 'agentName4' }, func: <condition-function> }
     *  }
     */
     => {
         => e) ?? []

        f {
            const conditionNodeId = conditionEdge.source
            const conditionNodeOutputAnchorId = conditionEdge.sourceHandle

             => n
            const outputAnchors = conditionNode?.data.outputAnchors

             continue

            const conditionOutputAnchorLabel =
                 => ?.label ?? ''

             continue

            ) {
                conditionalEdges[conditionNodeId] = {
                    ...conditionalEdges[conditionNodeId],
                    nodes: {
                        ...conditionalEdges[conditionNodeId].nodes,
                        [conditionOutputAnchorLabel]: nodeInstance.name
                    }
                }
            } else {
                conditionalEdges[conditionNodeId] = {
                    nodes: { [conditionOutputAnchorLabel]: nodeInstance.name },
                    func: conditionNode.data.instance.node
                }
            }
        }
    }

    /*
     *  Prepare Conditional Tool Edges. This is just for LLMNode -> ToolNode
     *  Example: {
     *    'agent_1': { source: agent, toolNodes: [node] }
     *  }
     */
     => {
        ) {
            const toolNodes = conditionalToolNodes[predecessorAgent.id].toolNodes
            t
            conditionalToolNodes[predecessorAgent.id] = {
                source: predecessorAgent,
                toolNodes
            }
        } else {
            conditionalToolNodes[predecessorAgent.id] = {
                source: predecessorAgent,
                toolNodes: [toolNodeInstance]
            }
        }
    }

    /*** This is to bind the tools to the model of LLMNode, when the LLMNode is predecessor/successor of ToolNode ***/
     => {
        
        b
    }

    /*** Start processing every Agent nodes ***/
    f) {
         => n
         continue

        const eligibleSeqNodes = ['seqAgent', 'seqEnd', 'seqLoop', 'seqToolNode', 'seqLLMNode', 'seqCustomFunction', 'seqExecuteFlow']
        const nodesToAdd = ['seqAgent', 'seqToolNode', 'seqLLMNode', 'seqCustomFunction', 'seqExecuteFlow']

        ) {
            try {
                

                ) {
                    // Add node to graph
                    

                    /*
                     * If it is an Interrupted Agent, we want to:
                     * 1.) Add conditional edges to the Interrupted Agent via agentInterruptToolFunc
                     * 2.) Add agent to the interruptToolNodeNames list
                     */
                     {
                        

                         => e?.target
                         => n

                        let nextNodeSeqAgentName = ''
                         {
                            nextNodeSeqAgentName = nextNode.data.instance.name

                            // If next node is Condition Node, process the interrupted route mapping, see more details from comments of processInterruptedRouteMapping
                            ) {
                                const conditionNode = nextNodeId
                                p
                                seqGraph = await agentInstance.agentInterruptToolFunc(
                                    seqGraph,
                                    undefined,
                                    nextNode.data.instance.node,
                                    interruptedRouteMapping[conditionNode]
                                )
                            } else {
                                
                            }
                        } else {
                            
                        }
                    }
                }

                 {
                    const predecessorAgents: ISeqAgentNode[] = agentInstance.predecessorAgents

                    const edges = []
                    f {
                        // Add start edge and set entry point
                         {
                             {
                                try {
                                    f {
                                        que
                                    }
                                }  {
                                    th)
                                }
                            }
                            //@ts-ignore
                            
                        } el {
                            /*
                             * If current node is Condition Node, AND predecessor is an Interrupted Agent
                             * Don't add conditional edges to the Interrupted Agent, as it will be added separately from the function - agentInterruptToolFunc
                             */
                            ) {
                                p
                            }
                        } el {
                            // Prepare the conditional edges for LLMNode -> ToolNode AND bind the tools to LLMNode
                            p
                            

                            // If current ToolNode has interrupt turned on, add the ToolNode name to interruptToolNodeNames
                             {
                                
                            }
                        } el {
                            // In the scenario when ToolNode -> LLMNode, bind the tools to LLMNode
                             {
                                
                            }

                            // Add edge to graph ONLY when predecessor is not an Interrupted Agent
                             {
                                e
                            }
                        }
                    }

                    // Edges can be multiple, in the case of parallel node executions
                     {
                        //@ts-ignore
                        
                    } el {
                        //@ts-ignore
                        
                    }
                }
            }  {
                th}`)
            }
        }
    }

    /*** Add conditional edges to graph for condition nodes ***/
    f {
         => e
         continue

        f {
             => n
             continue
            seqGraph.addConditionalEdges(
                startConditionNode.data.instance.name,
                conditionalEdges[conditionNodeId].func,
                //@ts-ignore
                conditionalEdges[conditionNodeId].nodes
            )
        }
    }

    /*** Add conditional edges to graph for LLMNode -> ToolNode ***/
    f {
        const connectedToolNodes = conditionalToolNodes[llmSourceNodeId].toolNodes
        const sourceNode = conditionalToolNodes[llmSourceNodeId].source

         => {
            const messages = state.messages as unknown as BaseMessage[]
            const lastMessage = messages[messages.length - 1] as AIMessage

             {
                return END
            }

            f {
                f {
                     || ((t.t
                     => t) {
                        return toolNode.name
                    }
                }
            }
            return END
        }

        seqGraph.addConditionalEdges(
            //@ts-ignore
            sourceNode.name,
            routeMessage
        )
    }

    ;(.signal = options.signal

    /*** Get memory ***/
     => n
    let memory = startNode?.data.instance?.checkpointMemory

    try {
        const graph = seqGraph.compile({
            checkpointer: memory,
            interruptBefore: interruptToolNodeNames as any
        })

        
        
        const config = { configurable: { thread_id: threadId }, bindModel }

        let prependMessages = []
        // Only append in the first message
         {
            f {
                 {
                    prependMessages.push(
                        new AIMessage({
                            content: message.message || message.content || ''
                        })
                    )
                } el {
                    prependMessages.push(
                        new HumanMessage({
                            content: message.message || message.content || ''
                        })
                    )
                }
            }
        }

        const finalQuestion = uploadedFilesContent ? `${uploadedFilesContent}\n\n${question}` : question
        let humanMsg: { messages: HumanMessage[] | ToolMessage[] } | null = {
            me]
        }

         {
            humanMsg = null
        } el {
            humanMsg = {
                me => {
                    return new ToolMessage({
                        name: toolCall.name,
                        content: `Tool ${toolCall.name} call denied by user. Acknowledge that, and DONT perform further actions. Only ask if user have other questions`,
                        tool_call_id: toolCall.id!,
                        additional_kwargs: { toolCallsDenied: true }
                    })
                })
            }
        }
        return await graph.stream(humanMsg, {
            callbacks: [loggerHandler, ...callbacks],
            configurable: config
        })
    }  {
        l
        th}`)
    }
}

 => {
    // Step 1: Convert the object into an array of [key, value] pairs and sort them by the value
    . => a

    // Step 2: Group keys by their depth values
    const groupedByDepth: Record<number, string[]> = {}
     => {
         {
            groupedByDepth[value] = []
        }
        g
    })

    // Step 3: Create the final sorted array with grouped keys
    [] = []
    Obje
        . => pa - pa)
        .f => {
            ]
            
        })

    
}
