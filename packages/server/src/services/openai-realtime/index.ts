import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import {
    buildFlow,
    constructGraphs,
    databaseEntities,
    getAPIOverrideConfig,
    getEndingNodes,
    getStartingNodes,
    resolveVariables
} from '../../utils'
import { checkStorage, updateStorageUsage } from '../../utils/quotaUsage'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { IDepthQueue, IReactFlowNode } from '../../Interface'
import { ICommonObject, INodeData } from 'flowise-components'
import { convertToOpenAIFunction } from '@langchain/core/utils/function_calling'
import { v4 as uuidv4 } from 'uuid'
import { Variable } from '../../database/entities/Variable'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { Workspace } from '../../enterprise/database/entities/workspace.entity'
import { Organization } from '../../enterprise/database/entities/organization.entity'

const SOURCE_DOCUMENTS_PREFIX = '\n\n----FLOWISE_SOURCE_DOCUMENTS----\n\n'
const ARTIFACTS_PREFIX = '\n\n----FLOWISE_ARTIFACTS----\n\n'
const TOOL_ARGS_PREFIX = '\n\n----FLOWISE_TOOL_ARGS----\n\n'

 => {
    
    .findOneBy({
        id: chatflowid
    })
     {
        th
    }

    
    
    
    const nodes = flowData.nodes
    const edges = flowData.edges

    const toolAgentNode = nodes.find(
        (n => n => a && node.data.category === 'Agents'
    )
     {
        th
    }

    
    const directedGraph = graph
    

    /*** Get Starting Nodes with Reversed Graph ***/
    
    const nonDirectedGraph = constructedObj.graph
    let startingNodeIds: string[] = []
    let depthQueue: IDepthQueue = {}
     => n.
    f {
        
        
        
    }
    ]

    /*** Get API Config ***/
    .f)
    

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
    const subscriptionId = org.subscriptionId

    const reactFlowNodes = await buildFlow({
        startingNodeIds,
        reactFlowNodes: nodes,
        reactFlowEdges: edges,
        graph,
        depthQueue,
        componentNodes: appServer.nodesPool.componentNodes,
        question: '',
        chatHistory: [],
        chatId: chatId,
        sessionId: chatId,
        chatflowid,
        apiMessageId,
        appDataSource: appServer.AppDataSource,
        usageCacheManager: appServer.usageCacheManager,
        cachePool: appServer.cachePool,
        apiOverrideStatus,
        nodeOverrides,
        availableVariables,
        variableOverrides,
        orgId,
        workspaceId,
        subscriptionId,
        updateStorageUsage,
        checkStorage
    })

    const nodeToExecute =
        endingNodeIds.length === 1
            ?  => en
            : reactFlowNodes[reactFlowNodes.length - 1]

     {
        th
    }

    const flowDataObj: ICommonObject = { chatflowid, chatId }

    const reactFlowNodeData: INodeData = await resolveVariables(
        nodeToExecute.data,
        reactFlowNodes,
        '',
        [],
        flowDataObj,
        '',
        availableVariables,
        variableOverrides
    )
    let nodeToExecuteData = reactFlowNodeData

    const nodeInstanceFilePath = appServer.nodesPool.componentNodes[nodeToExecuteData.name].filePath as string
    
    

    const agent = await nodeInstance.init(nodeToExecuteData, '', {
        chatflowid,
        chatId,
        orgId,
        workspaceId,
        appDataSource: appServer.AppDataSource,
        databaseEntities,
        analytic: chatflow.analytic
    })

    return agent
}

: Promise<any> => {
    try {
        
        const tools = agent.tools
        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const executeAgentTool = async (
    chatflowid: string,
    chatId: string,
    toolName: string,
    inputArgs: string,
    apiMessageId?: string
): Promise<any> => {
    try {
        
        const tools = agent.tools
         => t

         {
            th
        }

         : inputArgs

        let t

         {
            t
        }

        let sourceDocuments = []
        ) {
            
            toolOutput = _splitted[0]
            )
            ) {
                sourceDocuments = _sourceDocuments
            } else {
                
            }
        }

        let artifacts = []
        ) {
            
            toolOutput = _splitted[0]
            )
            ) {
                artifacts = _artifacts
            } else {
                a
            }
        }

        ) {
            
            toolOutput = _splitted[0]
        }

        return {
            output: toolOutput,
            sourceDocuments,
            artifacts
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    getAgentTools,
    executeAgentTool
}
