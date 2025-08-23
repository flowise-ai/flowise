import { ICommonObject, removeFolderFromStorage } from 'flowise-components'
import { StatusCodes } from 'http-status-codes'
import { In } from 'typeorm'
import { ChatflowType, IReactFlowObject } from '../../Interface'
import { FLOWISE_COUNTER_STATUS, FLOWISE_METRIC_COUNTERS } from '../../Interface.Metrics'
import { UsageCacheManager } from '../../UsageCacheManager'
import { ChatFlow, EnumChatflowType } from '../../database/entities/ChatFlow'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { ChatMessageFeedback } from '../../database/entities/ChatMessageFeedback'
import { UpsertHistory } from '../../database/entities/UpsertHistory'
import { Workspace } from '../../enterprise/database/entities/workspace.entity'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import documentStoreService from '../../services/documentstore'
import { constructGraphs, getAppVersion, getEndingNodes, getTelemetryFlowObj, isFlowValidForStream } from '../../utils'
import { containsBase64File, updateFlowDataWithFilePaths } from '../../utils/fileRepository'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { utilGetUploadsConfig } from '../../utils/getUploadsConfig'
import logger from '../../utils/logger'
import { updateStorageUsage } from '../../utils/quotaUsage'

export const enum ChatflowErrorMessage {
    INVALID_CHATFLOW_TYPE = 'Invalid Chatflow Type'
}

exp {
    .)
        th
}

// Check if chatflow valid for streaming
: Promise<any> => {
    try {
        
        //**
        .findOneBy({
            id: chatflowId
        })
         {
            th
        }

        /* Check for post-processing settings, if available isStreamValid is always false */
        let chatflowConfig: ICommonObject = {}
         {
            
             {
                return { isStreaming: false }
            }
        }

         {
            return { isStreaming: true }
        }

        /*** Get Ending Node with Directed Graph  ***/
        const flowData = chatflow.flowData
        
        const nodes = parsedFlowData.nodes
        const edges = parsedFlowData.edges
        

        

        let isStreaming = false
        f {
            const endingNodeData = endingNode.data
            const isEndingNode = endingNodeData?.outputs?.output === 'EndingNode'
            // Once custom function ending node exists, flow is always unavailable to stream
             {
                return { isStreaming: false }
            }
            
        }

        // If it is a Multi/Sequential Agents, always enable streaming
         => n.length > 0) {
            return { isStreaming: true }
        }

        const dbResponse = { isStreaming: isStreaming }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Check if chatflow valid for uploads
: Promise<any> => {
    try {
        
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<any> => {
    try {
        

        .

        // Update document store usage
        awa

        // Delete all chat messages
        awa.

        // Delete all chat feedback
        awa.

        // Delete all upsert history
        awa.

        try {
            // Delete all uploads corresponding to this chatflow
            
            awa
        }  {
            l
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        

        
            .
            .

         {
            que * l
            que
        }
         {
            que
        } el {
            que
        } el {
            que
        } el {
            // fetch all chatflows that are not agentflow
            que
        }
         que
        

         {
            return { data, total }
        } else {
            return data
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

a: Promise<number> {
    try {
        

        .f
         => w
        .countBy({
            type,
            w
        })

        return chatflowsCount
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<number> => {
    try {
        
         {
            .countBy({
                type,
                ...getW
            })
            return dbResponse
        }
        .)
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<any> => {
    try {
        // Here we only get chatflows that are bounded by the apikeyid and chatflows that are not bounded by any apikey
        
        let que
            .
            .whe
         {
            que.
        }

        .getMany()
         {
            th
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<any> => {
    try {
        
        .findOneBy({
            id: chatflowId
        })
         {
            th
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const saveChatflow = async (
    newChatFlow: ChatFlow,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
): Promise<any> => {
    val
    

    let dbResponse: ChatFlow
    ) {
        // we need a 2-step process, as we need to save the chatflow first and then update the file paths
        // this is because we need the chatflow id to create the file paths

        // step 1 - save with empty flowData
        const incomingFlowData = newChatFlow.flowData
        newChatFl
        .
        .

        // step 2 - convert base64 to file paths and update the chatflow
        step1Results.flowData = await updateFlowDataWithFilePaths(
            step1Results.id,
            incomingFlowData,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        )
        awa
        .
    } else {
        .
        .
    }
    await appServer.telemetry.sendTelemetry(
        'chatflow_created',
        {
            ve,
            chatflowId: dbResponse.id,
            fl?.n?.e
        },
        orgId
    )

    appServer.metricsProvider?.incrementCounter(
        dbResponse?.type === 'MULTIAGENT' ? FLOWISE_METRIC_COUNTERS.AGENTFLOW_CREATED : FLOWISE_METRIC_COUNTERS.CHATFLOW_CREATED,
        { status: FLOWISE_COUNTER_STATUS.SUCCESS }
    )

    return dbResponse
}

const updateChatflow = async (
    chatflow: ChatFlow,
    updateChatFlow: ChatFlow,
    orgId: string,
    workspaceId: string,
    subscriptionId: string
): Promise<any> => {
    
    ) {
        updateChatFlow.flowData = await updateFlowDataWithFilePaths(
            chatflow.id,
            updateChatFlow.flowData,
            orgId,
            workspaceId,
            subscriptionId,
            appServer.usageCacheManager
        )
    }
     {
        val
    } else {
        updateChatFlow.type = chatflow.type
    }
    .me
    awa
    .

    return dbResponse
}

// Get 
// Safe as public endpoint as chatbotConfig doesn't contain sensitive credential
: Promise<any> => {
    try {
        
        .findOneBy({
            id: chatflowId
        })
         {
            th
        }
        
        // even if chatbotConfig is not set but uploads are enabled
        // send uploadsConfig to the chatbot
         {
            try {
                 : {}
                return { ...parsedConfig, uploads: uploadsConfig, flowData: dbResponse.flowData }
            }  {
                th
            }
        }
        return 'OK'
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    
    const nodes = parsedFlowData.nodes
    // f
     => n
     {
        awa
    } else {
        awa
    }
}

: Promise<any> => {
    try {
        
        //**
        .findOneBy({
            id: chatflowId
        })
         {
            th
        }
        // parse the lastUpdatedDateTime as a date and
        //check if the updatedDate is the same as the lastUpdatedDateTime
         !== lastUpdatedDateTime }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    checkIfChatflowIsValidForStreaming,
    checkIfChatflowIsValidForUploads,
    deleteChatflow,
    getAllChatflows,
    getAllChatflowsCount,
    getChatflowByApiKey,
    getChatflowById,
    saveChatflow,
    updateChatflow,
    getSinglePublicChatbotConfig,
    checkIfChatflowHasChanged,
    getAllChatflowsCountByOrganization
}
