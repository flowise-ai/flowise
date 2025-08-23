import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import documentStoreService from '../../services/documentstore'
import { DocumentStore } from '../../database/entities/DocumentStore'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { DocumentStoreDTO } from '../../Interface'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { FLOWISE_COUNTER_STATUS, FLOWISE_METRIC_COUNTERS } from '../../Interface.Metrics'
import { getPageAndLimitParams } from '../../utils/pagination'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - body not provided!`
            )
        }

        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }

        const body = req.body
        body.workspaceId = req.user?.activeWorkspaceId

        
        
        
    }  {
        next(e
    }
}

 => {
    try {
        

        
         {
            return res.json({
                total: apiResponse.total,
                
            })
        } else {
            )
        }
    }  {
        next(e
    }
}

 => {
    try {
        const storeId = req.params.id
        const loaderId = req.params.loaderId

         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteLoaderFromDocumentStore - missing storeId or loaderId.`
            )
        }

        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }

        const apiResponse = await documentStoreService.deleteLoaderFromDocumentStore(
            storeId,
            loaderId,
            orgId,
            workspaceId,
            getRunn.usageCacheManager
        )
        )
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.getDocumentStoreById - id not provided!`
            )
        }
        
         {
            ap)
        }
        )
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.getDocumentStoreFileChunks - storeId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.getDocumentStoreFileChunks - fileId not provided!`
            )
        }
        .AppDataSource
         : 1
        const apiResponse = await documentStoreService.getDocumentStoreFileChunks(
            appDataSource,
            req.params.storeId,
            req.params.fileId,
            page
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteDocumentStoreFileChunk - storeId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteDocumentStoreFileChunk - loaderId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteDocumentStoreFileChunk - chunkId not provided!`
            )
        }
        const apiResponse = await documentStoreService.deleteDocumentStoreFileChunk(
            req.params.storeId,
            req.params.loaderId,
            req.params.chunkId
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.editDocumentStoreFileChunk - storeId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.editDocumentStoreFileChunk - loaderId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.editDocumentStoreFileChunk - chunkId not provided!`
            )
        }
        const body = req.body
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.editDocumentStoreFileChunk - body not provided!`
            )
        }
        const apiResponse = await documentStoreService.editDocumentStoreFileChunk(
            req.params.storeId,
            req.params.loaderId,
            req.params.chunkId,
            body.pageContent,
            body.metadata
        )
        
    }  {
        next(e
    }
}

 => {
    try {
        
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.saveProcessingLoader - body not provided!`
            )
        }
        const body = req.body
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.processLoader - loaderId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.processLoader - body not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
        const docLoaderId = req.params.loaderId
        const body = req.body
        const isInternalRequest = req.headers['x-request-from'] === 'internal'
        const apiResponse = await documentStoreService.processLoaderMiddleware(
            body,
            docLoaderId,
            orgId,
            workspaceId,
            subscriptionId,
            getRunn.usageCacheManager,
            isInternalRequest
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.updateDocumentStore - storeId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.updateDocumentStore - body not provided!`
            )
        }
        
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: documentStoreController.updateDocumentStore - DocumentStore ${req.params.id} not found in the database`
            )
        }
        const body = req.body
        
        Obje
        
        )
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteDocumentStore - storeId not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const apiResponse = await documentStoreService.deleteDocumentStore(
            req.params.id,
            orgId,
            workspaceId,
            getRunn.usageCacheManager
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.previewFileChunks - body not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
        const body = req.body
        body.preview = true
        const apiResponse = await documentStoreService.previewChunksMiddleware(
            body,
            orgId,
            workspaceId,
            subscriptionId,
            getRunn.usageCacheManager
        )
        
    }  {
        next(e
    }
}

 => {
    try {
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
        const body = req.body
        const apiResponse = await documentStoreService.insertIntoVectorStoreMiddleware(
            body,
            false,
            orgId,
            workspaceId,
            subscriptionId,
            getRunn.usageCacheManager
        )
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.SUCCESS
        })
        )
    }  {
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.FAILURE
        })
        next(e
    }
}

 => {
    try {
         {
            th
        }
        const body = req.body
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.deleteVectorStoreFromStore - storeId not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
        const body = req.body
        .AppDataSource
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
        const body = req.body
        
        
    }  {
        next(e
    }
}

 => {
    try {
        
        
    }  {
        next(e
    }
}

 => {
    try {
        
        
    }  {
        next(e
    }
}

 => {
    try {
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.upsertDocStoreMiddleware - storeId not provided!`
            )
        }
         {
            th
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
        const body = req.body
         || []
        const apiResponse = await documentStoreService.upsertDocStoreMiddleware(
            req.params.id,
            body,
            files,
            orgId,
            workspaceId,
            subscriptionId,
            getRunn.usageCacheManager
        )
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.SUCCESS
        })
        
    }  {
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.FAILURE
        })
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.refreshDocStoreMiddleware - storeId not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - organizationId not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.createDocumentStore - workspaceId not provided!`
            )
        }
        const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
        const body = req.body
        const apiResponse = await documentStoreService.refreshDocStoreMiddleware(
            req.params.id,
            body,
            orgId,
            workspaceId,
            subscriptionId,
            getRunn.usageCacheManager
        )
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.SUCCESS
        })
        
    }  {
        getRunn.metricsProvider?.incrementCounter(FLOWISE_METRIC_COUNTERS.VECTORSTORE_UPSERT, {
            status: FLOWISE_COUNTER_STATUS.FAILURE
        })
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.generateDocStoreToolDesc - storeId not provided!`
            )
        }
         {
            th
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.getDocStoreConfigs - storeId not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: documentStoreController.getDocStoreConfigs - doc loader Id not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

export default {
    deleteDocumentStore,
    createDocumentStore,
    getAllDocumentStores,
    deleteLoaderFromDocumentStore,
    getDocumentStoreById,
    getDocumentStoreFileChunks,
    updateDocumentStore,
    processLoader,
    previewFileChunks,
    getDocumentLoaders,
    deleteDocumentStoreFileChunk,
    editDocumentStoreFileChunk,
    insertIntoVectorStore,
    getEmbeddingProviders,
    getVectorStoreProviders,
    getRecordManagerProviders,
    saveVectorStoreConfig,
    queryVectorStore,
    deleteVectorStoreFromStore,
    updateVectorStoreConfigOnly,
    upsertDocStoreMiddleware,
    refreshDocStoreMiddleware,
    saveProcessingLoader,
    generateDocStoreToolDesc,
    getDocStoreConfigs
}
