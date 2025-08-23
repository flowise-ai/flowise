import { Request } from 'express'
import * as path from 'path'
import { cloneDeep, omit } from 'lodash'
import {
    IMessage,
    addArrayFilesToStorage,
    mapMimeTypeToInputField,
    mapExtToInputField,
    getFileFromUpload,
    removeSpecificFileFromUpload
} from 'flowise-components'
import logger from '../utils/logger'
import {
    buildFlow,
    constructGraphs,
    getAllConnectedNodes,
    findMemoryNode,
    getMemorySessionId,
    getAppVersion,
    getTelemetryFlowObj,
    getStartingNodes,
    getAPIOverrideConfig
} from '../utils'
import { validateFlowAPIKey } from './validateKey'
import { IncomingInput, INodeDirectedGraph, IReactFlowObject, ChatType, IExecuteFlowParams, MODE } from '../Interface'
import { ChatFlow } from '../database/entities/ChatFlow'
import { getRunningExpressApp } from '../utils/getRunningExpressApp'
import { UpsertHistory } from '../database/entities/UpsertHistory'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { checkStorage, updateStorageUsage } from './quotaUsage'
import { getErrorMessage } from '../errors/utils'
import { v4 as uuidv4 } from 'uuid'
import { FLOWISE_COUNTER_STATUS, FLOWISE_METRIC_COUNTERS } from '../Interface.Metrics'
import { Variable } from '../database/entities/Variable'
import { getWorkspaceSearchOptions } from '../enterprise/utils/ControllerServiceUtils'
import { OMIT_QUEUE_JOB_DATA } from './constants'
import { Workspace } from '../enterprise/database/entities/workspace.entity'
import { Organization } from '../enterprise/database/entities/organization.entity'

export const executeUpsert = async ({
    componentNodes,
    incomingInput,
    chatflow,
    chatId,
    appDataSource,
    telemetry,
    cachePool,
    isInternal,
    files,
    orgId,
    workspaceId,
    subscriptionId,
    usageCacheManager
}: IExe => {
    const question = incomingInput.question
    let overrideConfig = incomingInput.overrideConfig ?? {}
    let stopNodeId = incomingInput?.stopNodeId ?? ''
    const chatHistory: IMessage[] = []
    const isUpsert = true
    const chatflowid = chatflow.id
    

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
            question: '',
            overrideConfig,
            stopNodeId,
            chatId
        }
    }

    /*** Get chatflows and prepare data  ***/
    const flowData = chatflow.flowData
    
    const nodes = parsedFlowData.nodes
    const edges = parsedFlowData.edges

    /*** Get session ID ***/
    
    let 

    /*** Find the 1 final vector store will be upserted  ***/
     => n
     => n
     {
        th
    } el {
        stopNodeId = vsNodesWithFileUpload[0].data.id
    }

    /*** Check if multiple vector store nodes exist, and if stopNodeId is specified ***/
     {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            'There are multiple vector nodes, please provide stopNodeId in body request'
        )
    } el {
        stopNodeId = vsNodes[0].data.id
    } el {
        th
    }

    /*** Get Starting Nodes with Reversed Graph ***/
    
    
    const filteredGraph: INodeDirectedGraph = {}
    f {
        ) {
            filteredGraph[key] = graph[key]
        }
    }
    

    /*** Get API Config ***/
    .f)
    

    const upsertedResult = await buildFlow({
        startingNodeIds,
        reactFlowNodes: nodes,
        reactFlowEdges: edges,
        apiMessageId,
        graph: filteredGraph,
        depthQueue,
        componentNodes,
        question,
        chatHistory,
        chatId,
        sessionId,
        chatflowid,
        appDataSource,
        usageCacheManager,
        cachePool,
        isUpsert,
        stopNodeId,
        overrideConfig,
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

    // Save to DB
     {
        
        
        )
        result.chatflowid = chatflowid
        
        Obje
        .
        awa.
    }

    await telemetry.sendTelemetry(
        'vector_upserted',
        {
            ve,
            chatlowId: chatflowid,
            type: isInternal ? ChatType.INTERNAL : ChatType.EXTERNAL,
            fl,
            stopNodeId
        },
        orgId
    )

    return upsertedResult['result'] ?? { result: 'Successfully Upserted' }
}

/**
 * Upsert documents
 * @param {Request} req
 * @param {boolean} isInternal
 */
exp => {
    

    try {
        const chatflowid = req.params.id

        // Check if chatflow exists
        .findOneBy({
            id: chatflowid
        })
         {
            th
        }

         || req.protocol
        }`
        const incomingInput: IncomingInput = req.body
        
         || []

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
        const subscriptionId = org.subscriptionId as string

        const executeData: IExecuteFlowParams = {
            componentNodes: appServer.nodesPool.componentNodes,
            incomingInput,
            chatflow,
            chatId,
            appDataSource: appServer.AppDataSource,
            telemetry: appServer.telemetry,
            cachePool: appServer.cachePool,
            sseStreamer: appServer.sseStreamer,
            usageCacheManager: appServer.usageCacheManager,
            baseURL,
            isInternal,
            files,
            isUpsert: true,
            orgId,
            workspaceId,
            subscriptionId
        }

         {
            

            )
            l

            
            

             {
                th
            }

            appServer.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
                status: FLOWISE_COUNTER_STATUS.SUCCESS
            })
            return result
        } else {
            

            appServer.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
                status: FLOWISE_COUNTER_STATUS.SUCCESS
            })
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
