import { Document } from '@langchain/core/documents'
import {
    addArrayFilesToStorage,
    addSingleFileToStorage,
    getFileFromStorage,
    getFileFromUpload,
    ICommonObject,
    IDocument,
    mapExtToInputField,
    mapMimeTypeToInputField,
    removeFilesFromStorage,
    removeSpecificFileFromStorage,
    removeSpecificFileFromUpload
} from 'flowise-components'
import { StatusCodes } from 'http-status-codes'
import { cloneDeep, omit } from 'lodash'
import * as path from 'path'
import { DataSource, In } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import {
    addLoaderSource,
    ChatType,
    DocumentStoreDTO,
    DocumentStoreStatus,
    IComponentNodes,
    IDocumentStoreFileChunkPagedResponse,
    IDocumentStoreLoader,
    IDocumentStoreLoaderFile,
    IDocumentStoreLoaderForPreview,
    IDocumentStoreRefreshData,
    IDocumentStoreUpsertData,
    IDocumentStoreWhereUsed,
    IExecuteDocStoreUpsert,
    IExecutePreviewLoader,
    IExecuteProcessLoader,
    IExecuteVectorStoreInsert,
    INodeData,
    IOverrideConfig,
    MODE
} from '../../Interface'
import { UsageCacheManager } from '../../UsageCacheManager'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { DocumentStore } from '../../database/entities/DocumentStore'
import { DocumentStoreFileChunk } from '../../database/entities/DocumentStoreFileChunk'
import { UpsertHistory } from '../../database/entities/UpsertHistory'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { databaseEntities, getAppVersion, saveUpsertFlowData } from '../../utils'
import { DOCUMENT_STORE_BASE_FOLDER, INPUT_PARAMS_TYPE, OMIT_QUEUE_JOB_DATA } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import logger from '../../utils/logger'
import { DOCUMENTSTORE_TOOL_DESCRIPTION_PROMPT_GENERATOR } from '../../utils/prompt'
import { checkStorage, updateStorageUsage } from '../../utils/quotaUsage'
import { Telemetry } from '../../utils/telemetry'
import nodesService from '../nodes'

 => {
    try {
        

        .
        .
        await appServer.telemetry.sendTelemetry(
            'document_store_created',
            {
                ve
            },
            orgId
        )
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

 => {
    
    .f } })
}

const deleteLoaderFromDocumentStore = async (
    storeId: string,
    docId: string,
    orgId: string,
    workspaceId: string,
    usageCacheManager: UsageCacheManager
) => {
    try {
        

        .findOneBy({
            id: storeId
        })
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: documentStoreServices.deleteLoaderFromDocumentStore - Document store ${storeId} not found`
            )
        }

         {
             {
                th
            }
        }

        
         => l
         {
             {
                f {
                     {
                        try {
                            
                            awa
                        }  {
                            
                        }
                    }
                }
            }
            
             {
                ex
            }
            // remove the chunks
            awa.

            ent
            .
            return results
        } else {
            th
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        .findOneBy({
            id: storeId
        })
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: documentStoreServices.getDocumentStoreById - Document store ${storeId} not found`
            )
        }
        return entity
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
         {
            
            const updatedWhereUsed: IDocumentStoreWhereUsed[] = []
            f {
                .findOne({
                    where: { id: whereUsed[i] },
                    select: ['id', 'name']
                })
                 {
                    updatedWhereUsed.push({
                        id: whereUsed[i],
                        name: associatedChatflow.name
                    })
                }
            }
            return updatedWhereUsed
        }
        return []
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Get chunks for a specific loader or store
 => {
    try {
        .findOneBy({
            id: storeId
        })
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: documentStoreServices.getDocumentStoreById - Document store ${storeId} not found`
            )
        }
        

        let found: IDocumentStoreLoader | undefined
         {
            f => l
             {
                throw new InternalFlowiseError(
                    StatusCodes.NOT_FOUND,
                    `Error: documentStoreServices.getDocumentStoreById - Document loader ${docId} not found`
                )
            }
        }
         {
            found.id = docId
            found.status = entity.status
        }

        let characters = 0
         {
            l => {
                characters += loader.totalChars || 0
            })
        } else {
            characters = found?.totalChars || 0
        }

        const PAGE_SIZE = 50
         * PAGE_SIZE
        const take = PAGE_SIZE
        let whereCondition: any = { docId: docId }
         {
            whereCondition = { storeId: storeId }
        }
        .count({
            where: whereCondition
        })
        .find({
            skip,
            take,
            where: whereCondition,
            order: {
                chunkNo: 'ASC'
            }
        })

         {
            th
        }

        const response: IDocumentStoreFileChunkPagedResponse = {
            chunks: chunksWithCount,
            count: count,
            file: found,
            currentPage: pageNo,
            storeName: entity.name,
            description: entity.description,
            workspaceId: entity.workspaceId,
            docId: docId,
            characters
        }
        return response
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        

        // delete all the chunks associated with the store
        awa.delete({
            storeId: storeId
        })
        // now delete the files associated with the store
        .findOneBy({
            id: storeId
        })
         {
            th
        }

         {
             {
                th
            }
        }

        try {
            
            awa
        }  {
            l
        }

        // delete upsert history
        awa.delete({
            chatflowid: storeId
        })

        // now delete the store
        .delete({
            id: storeId
        })

        return { deleted: tbd.affected }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        .findOneBy({
            id: storeId
        })
         {
            th
        }
        
         => l
         {
            th
        }

        .findOneBy({
            id: chunkId
        })
         {
            th
        }
        awa.
        found.totalChunks--
        found.totalChars -= tbdChunk.pageContent.length
        ent
        awa.
        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        const componentNodes = appServer.nodesPool.componentNodes

        .findOneBy({
            id: storeId
        })
         {
            th
        }

         {
            th
        }

         {
            th
        }

         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Record Manager for Document Store ${storeId} is needed to delete data from Vector Store`
            )
        }

        const options: ICommonObject = {
            chatflowid: storeId,
            appDataSource: appServer.AppDataSource,
            databaseEntities,
            logger
        }

        // Get Record Manager Instance
        
        const recordManagerObj = await _createRecordManagerObject(
            componentNodes,
            { recordManagerName: recordManagerConfig.name, recordManagerConfig: recordManagerConfig.config },
            options
        )

        // Get Embeddings Instance
        
        const embeddingObj = await _createEmbeddingsObject(
            componentNodes,
            { embeddingName: embeddingConfig.name, embeddingConfig: embeddingConfig.config },
            options
        )

        // Get Vector Store Node Data
        
        const vStoreNodeData = _createVectorStoreNodeData(
            componentNodes,
            { vectorStoreName: vectorStoreConfig.name, vectorStoreConfig: vectorStoreConfig.config },
            embeddingObj,
            recordManagerObj
        )

        // Get Vector Store Instance
        const vectorStoreObj = await _createVectorStoreObject(
            componentNodes,
            { vectorStoreName: vectorStoreConfig.name, vectorStoreConfig: vectorStoreConfig.config },
            vStoreNodeData
        )
        const idsToDelete: string[] = [] // empty ids because we get it dynamically from the record manager

        // Call the delete method of the vector store
         {
            awa
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        .findOneBy({
            id: storeId
        })
         {
            th
        }
        
         => l
         {
            th
        }

        .findOneBy({
            id: chunkId
        })
         {
            th
        }
        found.totalChars -= editChunk.pageContent.length
        editChunk.pageContent = content
        e
        found.totalChars += content.length
        awa.
        ent
        awa.
        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        .me
        .
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const _saveFileToStorage = async (
    fileBase64: string,
    entity: DocumentStore,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    awa

    
    ?.[1] ?? ''
     || '', 'ba
    
    let mime = ''
     {
        m[1]
    }
    
    awa

    return {
        ,
        name: filename,
        mimePrefix: mime,
        size: bf.length,
        status: DocumentStoreStatus.NEW,
        upl
    }
}

 => {
    try {
        let splitterInstance = null
        .length > 0) {
            const nodeInstanceFilePath = componentNodes[data.splitterId].filePath as string
            
            
            let nodeData = {
                inputs: { ...data.splitterConfig },
                id: 'splitter_0'
            }
            
        }
         return []
        const nodeInstanceFilePath = componentNodes[data.loaderId].filePath as string
        
        // doc loader configs
        const nodeData = {
            credential: data.credential || data.loaderConfig['FLOWISE_CREDENTIAL_ID'] || undefined,
            inputs: { ...data.loaderConfig, textSplitter: splitterInstance },
            outputs: { output: 'document' }
        }
        const options: ICommonObject = {
            ,
            appDataSource,
            databaseEntities,
            logger,
            processRaw: true
        }
        
        let 
        return docs
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const _normalizeFilePaths = async (
    appDataSource: DataSource,
    data: IDocumentStoreLoaderForPreview,
    entity: DocumentStore | null,
    orgId: string
) => {
    
    let rehydrated = false
    f {
        const input = data.loaderConfig[keys[i]]
         {
            continue
        }
         {
            continue
        }
        let documentStoreEntity: DocumentStore | null = entity
        ) {
             {
                .findOneBy({
                    id: data.storeId
                })
                 {
                    th
                }
            }
            
            let files: string[] = []
             && f) {
                f
            } else {
                files = [fileName]
            }
            
             => l
             {
                const base64Files: string[] = []
                f {
                    
                    // find the file entry that has the same name as the file
                     => uF
                    const mimePrefix = 'data:' + uploadedFile.mimePrefix + ';base64'
                     + `,filename:${file}`
                    ba
                }
                
                rehydrated = true
            }
        }
    }
    data.rehydrated = rehydrated
}

const previewChunksMiddleware = async (
    data: IDocumentStoreLoaderForPreview,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    try {
        
        const appDataSource = appServer.AppDataSource
        const componentNodes = appServer.nodesPool.componentNodes

        const executeData: IExecutePreviewLoader = {
            appDataSource,
            componentNodes,
            usageCacheManager,
            data,
            isPreviewOnly: true,
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
            return result
        }

        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

exp => {
    try {
         {
            if (
                data.loaderId === 'cheerioWebScraper' ||
                data.loaderId === 'puppeteerWebScraper' ||
                data.loaderId === 'playwrightWebScraper'
            ) {
                data.loaderConfig['limit'] = 3
            }
        }
         {
            awa
        }
        let 
        const totalChunks = docs.length
        // if -1, return all chunks
         data.previewChunkCount = totalChunks
        // return all docs if the user ask for more than we have
        ) data.previewChunkCount = totalChunks
        // return only the first n chunks
        ) 

        return { chunks: docs, totalChunks: totalChunks, previewChunkCount: data.previewChunkCount }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<IDocumentStoreLoader> => {
    try {
        .findOneBy({
            id: data.storeId
        })
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: documentStoreServices.saveProcessingLoader - Document store ${data.storeId} not found`
            )
        }
        
        
         => l
         {
             => l

             data.loaderId = found.loaderId
             data.loaderName = found.loaderName
             data.loaderConfig = found.loaderConfig
             data.splitterId = found.splitterId
             data.splitterName = found.splitterName
             data.splitterConfig = found.splitterConfig
             {
                data.credential = found.credential
            }

            let loader: IDocumentStoreLoader = {
                ...found,
                loaderId: data.loaderId,
                loaderName: data.loaderName,
                loaderConfig: data.loaderConfig,
                splitterId: data.splitterId,
                splitterName: data.splitterName,
                splitterConfig: data.splitterConfig,
                totalChunks: 0,
                totalChars: 0,
                status: DocumentStoreStatus.SYNCING
            }
             {
                loader.credential = data.credential
            }

            existingLoaders[foundIndex] = loader
            ent
        } else {
            let loader: IDocumentStoreLoader = {
                id: newDocLoaderId,
                loaderId: data.loaderId,
                loaderName: data.loaderName,
                loaderConfig: data.loaderConfig,
                splitterId: data.splitterId,
                splitterName: data.splitterName,
                splitterConfig: data.splitterConfig,
                totalChunks: 0,
                totalChars: 0,
                status: DocumentStoreStatus.SYNCING
            }
             {
                loader.credential = data.credential
            }
            ex
            ent
        }
        awa.
        
         => l
         {
            th
        }
        newL
        return newLoader
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export const processLoader = async ({
    appDataSource,
    componentNodes,
    data,
    docLoaderId,
    orgId,
    workspaceId,
    subscriptionId,
    usageCacheManager
}: IExe => {
    .findOneBy({
        id: data.storeId
    })
     {
        throw new InternalFlowiseError(
            StatusCodes.NOT_FOUND,
            `Error: documentStoreServices.processLoader - Document store ${data.storeId} not found`
        )
    }
     {
         {
            th
        }
    }
    await _saveChunksToStorage(
        appDataSource,
        componentNodes,
        data,
        entity,
        docLoaderId,
        orgId,
        workspaceId,
        subscriptionId,
        usageCacheManager
    )
    
}

const processLoaderMiddleware = async (
    data: IDocumentStoreLoaderForPreview,
    docLoaderId: string,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager,
    isInternalRequest = false
) => {
    try {
        
        const appDataSource = appServer.AppDataSource
        const componentNodes = appServer.nodesPool.componentNodes
        const telemetry = appServer.telemetry

        const executeData: IExecuteProcessLoader = {
            appDataSource,
            componentNodes,
            data,
            docLoaderId,
            isProcessWithoutUpsert: true,
            telemetry,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        }

         {
            
            )
            l

             {
                return {
                    jobId: job.id
                }
            }

            
            

             {
                th
            }
            return result
        }

        
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const _saveChunksToStorage = async (
    appDataSource: DataSource,
    componentNodes: IComponentNodes,
    data: IDocumentStoreLoaderForPreview,
    entity: DocumentStore,
    newLoaderId: string,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    

    try {
        //step 1: restore the full paths, if any
        awa

        //step 2: split the file into chunks
        const response = await previewChunks({
            appDataSource,
            componentNodes,
            data,
            isPreviewOnly: false,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        })

        //step 3: remove all files associated with the loader
        
         => l
         {
            
             {
                ex
                 {
                     {
                        l => {
                            try {
                                const { totalSize } = await removeSpecificFileFromStorage(
                                    orgId,
                                    DOCUMENT_STORE_BASE_FOLDER,
                                    entity.id,
                                    file.name
                                )
                                awa
                            }  {
                                
                            }
                        })
                    }
                }
            }
        }

        //step 4: save new file to storage
        let filesWithMetadata = []
        
        f {
            const input = data.loaderConfig[keys[i]]

             {
                continue
            }
             {
                continue
            }
             && ) {
                
                const fileNames: string[] = []
                f {
                    const file = files[j]
                    ) {
                        
                        f
                        f
                    }
                }
                
            } el) {
                const fileNames: string[] = []
                
                f
                f
                
                break
            }
        }

        //step 5: update with the new files and loaderConfig
         {
            loader.loaderConfig = data.loaderConfig
            loader.files = filesWithMetadata
        }

        //step 6: update the loaders with the new loaderConfig
         {
            ex
        }

        //step 7: remove all previous chunks
        awa.
         {
            //step 8: now save the new chunks
             => {
                 {
                    return acc + chunk.pageContent.length
                }
                return acc
            }, 0)
            await Promise.all(
                 => {
                    try {
                        const docChunk: DocumentStoreFileChunk = {
                            docId: newLoaderId,
                            storeId: data.storeId || '',
                            ,
                            chunkNo: index + 1,
                            pageC,
                            meta
                        }
                        .
                        awa.
                    }  {
                        throw new InternalFlowiseError(
                            StatusCodes.INTERNAL_SERVER_ERROR,
                            `E}`
                        )
                    }
                })
            )
            // update the loader with the new metrics
            loader.totalChunks = response.totalChunks
            loader.totalChars = totalChars
        }
        loader.status = 'SYNC'
        // have a flag and iterate over the loaders and update the entity status to SYNC
         => l
        entity.status = allSynced ? DocumentStoreStatus.SYNC : DocumentStoreStatus.STALE
        ent

        //step 9: update the entity in the database
        awa.

        return
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// remove null bytes from chunk content
 => {
    // eslint-disable-next-line no-control-regex
    
}

// Get all component nodes
 => {
    const removeDocumentLoadersWithName = ['documentStore', 'vectorStoreToDocument', 'unstructuredFolderLoader', 'folderFiles']

    try {
        
         => )
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        // find the document store
        
        // find all entities that have the chatId in their whereUsed
        .f)
        ent => {
            
             => w === 
             {
                 {
                    // remove the chatId from the whereUsed, as the store is being deleted
                    
                     {
                        whe
                        ent
                        awa.
                    }
                } el {
                    // do nothing, already found and updated
                } el {
                    // remove the chatId from the whereUsed, as a new store is being used
                    
                     {
                        whe
                        ent
                        awa.
                    }
                }
            } else {
                 {
                    // add the chatId to the whereUsed
                    whe
                    ent
                    awa.
                }
            }
        })
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        .findOneBy({
            id: data.storeId
        })
         {
            th
        }

         {
            entity.vectorStoreConfig = JSON.stringify({
                config: data.vectorStoreConfig,
                name: data.vectorStoreName
            })

            .
            return updatedEntity
        }
        return {}
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}
 => {
    try {
        .findOneBy({
            id: data.storeId
        })
         {
            th
        }

         {
            entity.embeddingConfig = JSON.stringify({
                config: data.embeddingConfig,
                name: data.embeddingName
            })
        } el {
            ?.config
            ?.name
             entity.embeddingConfig = null
        } el {
            entity.embeddingConfig = null
        }

         {
            entity.vectorStoreConfig = JSON.stringify({
                config: data.vectorStoreConfig,
                name: data.vectorStoreName
            })
        } el {
            ?.config
            ?.name
             entity.vectorStoreConfig = null
        } el {
            entity.vectorStoreConfig = null
        }

         {
            entity.recordManagerConfig = JSON.stringify({
                config: data.recordManagerConfig,
                name: data.recordManagerName
            })
        } el {
            ?.config
            ?.name
             entity.recordManagerConfig = null
        } el {
            entity.recordManagerConfig = null
        }

        ) {
            // if the store is not already in sync, mark it as sync
            // this also means that the store is not yet sync'ed to vector store
            entity.status = DocumentStoreStatus.SYNC
        }
        awa.
        return entity
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export const insertIntoVectorStore = async ({
    appDataSource,
    componentNodes,
    telemetry,
    data,
    isStrictSave,
    orgId
}: IExe => {
    try {
        
        entity.status = DocumentStoreStatus.UPSERTING
        awa.

        
        return indexResult
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const insertIntoVectorStoreMiddleware = async (
    data: ICommonObject,
    isStrictSave = true,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    try {
        
        const appDataSource = appServer.AppDataSource
        const componentNodes = appServer.nodesPool.componentNodes
        const telemetry = appServer.telemetry

        const executeData: IExecuteVectorStoreInsert = {
            appDataSource,
            componentNodes,
            telemetry,
            data,
            isStrictSave,
            isVectorStoreInsert: true,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        }

         {
            
            )
            l

            
            

             {
                th
            }
            return result
        } else {
            
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const _insertIntoVectorStoreWorkerThread = async (
    appDataSource: DataSource,
    componentNodes: IComponentNodes,
    telemetry: Telemetry,
    data: ICommonObject,
    isStrictSave = true,
    orgId: string
) => {
    try {
        
        let upsertHistory: Record<string, any> = {}
        const chatflowid = data.storeId // fake chatflowid because this is not tied to any chatflow

        const options: ICommonObject = {
            chatflowid,
            appDataSource,
            databaseEntities,
            logger
        }

        let recordManagerObj = undefined

        // Get Record Manager Instance
         {
            
        }

        // Get Embeddings Instance
        

        // Get Vector Store Node Data
        

        // Prepare docs for upserting
        const filterOptions: ICommonObject = {
            storeId: data.storeId
        }
         {
            filterOptions['docId'] = data.docId
        }
        .find({
            where: filterOptions
        })
         => {
            return new Document({
                pageContent: chunk.pageContent,
                meta
            })
        })
        vStoreNodeData.inputs.document = docs

        // Get Vector Store Instance
        
        

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
                type: ChatType.INTERNAL,
                fl
            },
            orgId
        )

        entity.status = DocumentStoreStatus.UPSERTED
        awa.

        return indexResult ?? { result: 'Successfully Upserted' }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Get all component nodes - Embeddings
 => {
    try {
        
         => )
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Get all component nodes - Vector Stores
 => {
    try {
        
        return dbResponse.filter(
            (n =>  && node.name !== 'documentStoreVS' && node.name !== 'memoryVectorStore'
        )
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}
// Get all component nodes - Vector Stores
 => {
    try {
        
         => )
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        const componentNodes = appServer.nodesPool.componentNodes

        .findOneBy({
            id: data.storeId
        })
         {
            th
        }
        const options: ICommonObject = {
            ,
            appDataSource: appServer.AppDataSource,
            databaseEntities,
            logger
        }

         {
            th
        }

         {
            th
        }

        
        data.embeddingName = embeddingConfig.name
        data.embeddingConfig = embeddingConfig.config
        let embe

        
        data.vectorStoreName = vsConfig.name
        data.vectorStoreConfig = vsConfig.config
         {
            data.vectorStoreConfig = { ...vsConfig.config, ...data.inputs }
        }

        

        // Get Vector Store Instance
        
        
         {
            th
        }
        
        
         {
            th
        }
        
        const timeTaken = endMillis - startMillis
         => {
            return {
                pageContent: result.pageContent,
                metadata: result.metadata,
                
            }
        })
        // query our document store chunk with the storeId and pageContent
        f {
            .findOneBy({
                storeId: data.storeId,
                pageContent: doc.pageContent
            })
             {
                doc.id = documentStoreChunk.id
                doc.chunkNo = documentStoreChunk.chunkNo
            } else {
                // this should not happen, only possible if the vector store has more content
                // than our document store
                
                doc.chunkNo = -1
            }
        }

        return {
            timeTaken: timeTaken,
            docs: docs
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const _createEmbeddingsObject = async (
    componentNodes: IComponentNodes,
    data: ICommonObject,
    options: ICommonObject,
    upsertHistory?: Record<string, any>
): Promise<any> => {
    // prepare embedding node data
    const embeddingComponent = componentNodes[data.embeddingName]
    const embeddingNodeData: any = {
        inputs: { ...data.embeddingConfig },
        outputs: { output: 'document' },
        id: `${embeddingComponent.name}_0`,
        label: embeddingComponent.label,
        name: embeddingComponent.name,
        category: embeddingComponent.category,
        inputParams: embeddingComponent.inputs || []
    }
     {
        embeddingNodeData.credential = data.embeddingConfig.credential
    }

    // save to upsert history
     up

    // init embedding object
    const embeddingNodeInstanceFilePath = embeddingComponent.filePath as string
    
    
    
     {
        th
    }
    return embeddingObj
}

const _createRecordManagerObject = async (
    componentNodes: IComponentNodes,
    data: ICommonObject,
    options: ICommonObject,
    upsertHistory?: Record<string, any>
) => {
    // prepare record manager node data
    const recordManagerComponent = componentNodes[data.recordManagerName]
    const rmNodeData: any = {
        inputs: { ...data.recordManagerConfig },
        id: `${recordManagerComponent.name}_0`,
        inputParams: recordManagerComponent.inputs,
        label: recordManagerComponent.label,
        name: recordManagerComponent.name,
        category: recordManagerComponent.category
    }
     {
        rmNodeData.credential = data.recordManagerConfig.credential
    }

    // save to upsert history
     up

    // init record manager object
    const rmNodeInstanceFilePath = recordManagerComponent.filePath as string
    
    
    
     {
        th
    }
    return recordManagerObj
}

 => {
    const vectorStoreComponent = componentNodes[data.vectorStoreName]
    const vStoreNodeData: any = {
        id: `${vectorStoreComponent.name}_0`,
        inputs: { ...data.vectorStoreConfig },
        outputs: { output: 'retriever' },
        label: vectorStoreComponent.label,
        name: vectorStoreComponent.name,
        category: vectorStoreComponent.category
    }
     {
        vStoreNodeData.credential = data.vectorStoreConfig.credential
    }

     {
        vStoreNodeData.inputs.embeddings = embeddingObj
    }

     {
        vStoreNodeData.inputs.recordManager = recordManagerObj
    }

    // Get all input params except the ones that are anchor points to avoid JSON stringify circular error
    const filterInputParams = ['document', 'embeddings', 'recordManager']
     => )
    vStoreNodeData.inputParams = inputParams
    return vStoreNodeData
}

const _createVectorStoreObject = async (
    componentNodes: IComponentNodes,
    data: ICommonObject,
    vStoreNodeData: INodeData,
    upsertHistory?: Record<string, any>
) => {
    const vStoreNodeInstanceFilePath = componentNodes[data.vectorStoreName].filePath as string
    
    
     up
    return vStoreNodeInstance
}

const upsertDocStore = async (
    appDataSource: DataSource,
    componentNodes: IComponentNodes,
    telemetry: Telemetry,
    storeId: string,
    data: IDocumentStoreUpsertData,
    files: Express.Multer.File[] = [],
    isRefreshExisting = false,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    const docId = data.docId
    let metadata = {}
     {
        try {
            meta : data.metadata
        }  {
            th
        }
    }
    const replaceExisting =
        type.t === 'true' : data.replaceExisting ?? false
    const createNewDocStore =
        typeof data.createNewDocStore === 'string'
            ? (.t === 'true'
            : data.createNewDocStore ?? false
     : data.loader
     : data.splitter
     : data.vectorStore
     : data.embedding
     : data.recordManager

     => {
        .f => n
        return component?.label || ''
    }

    let loaderName = ''
    let loaderId = ''
    let loaderConfig: ICommonObject = {}

    let splitterName = ''
    let splitterId = ''
    let splitterConfig: ICommonObject = {}

    let vectorStoreName = ''
    let vectorStoreConfig: ICommonObject = {}

    let embeddingName = ''
    let embeddingConfig: ICommonObject = {}

    let recordManagerName = ''
    let recordManagerConfig: ICommonObject = {}

    // Step 1: Get existing loader
     {
        .f
         {
            th
        }

         {
             {
                th
            }
        }

        
         => l
         {
            th
        }

        // Loader
        loaderName = loader.loaderName
        loaderId = loader.loaderId
        loaderConfig = {
            ...loaderConfig,
            ...loader?.loaderConfig
        }

        // Splitter
        splitterName = loader.splitterName
        splitterId = loader.splitterId
        splitterConfig = {
            ...splitterConfig,
            ...loader?.splitterConfig
        }

        // Vector Store
        ve?.name
        ve?.config

        // Embedding
        embe?.name
        embe?.config

        // Record Manager
        ?.name
        ?.config
    }

     {
         : data.docStore
        .t}` }
        
        .
        .
        storeId = dbResponse.id
    }

    // Step 2: Replace with new values
    l : loaderName
    loaderId = newLoader?.name || loaderId
    loaderConfig = {
        ...loaderConfig,
        ...newLoader?.config
    }

    // Override loaderName if it's provided directly in data
     {
        loaderName = data.loaderName
    }

     : splitterName
    splitterId = newSplitter?.name || splitterId
    splitterConfig = {
        ...splitterConfig,
        ...newSplitter?.config
    }

    vectorStoreName = newVectorStore?.name || vectorStoreName
    vectorStoreConfig = {
        ...vectorStoreConfig,
        ...newVectorStore?.config
    }

    embeddingName = newEmbedding?.name || embeddingName
    embeddingConfig = {
        ...embeddingConfig,
        ...newEmbedding?.config
    }

    recordManagerName = newRecordManager?.name || recordManagerName
    recordManagerConfig = {
        ...recordManagerConfig,
        ...newRecordManager?.config
    }

    // Step 3: Replace with files
     {
        const filesLoaderConfig: ICommonObject = {}
        f {
            const fileNames: string[] = []
            
            // Address file name with special characters: https://github.com/expressjs/multer/issues/1104
            f.t

            try {
                
                const { totalSize } = await addArrayFilesToStorage(
                    file.mimetype,
                    fileBuffer,
                    file.originalname,
                    fileNames,
                    orgId,
                    DOCUMENT_STORE_BASE_FOLDER,
                    storeId
                )
                awa
            }  {
                continue
            }

            const mimePrefix = 'data:' + file.mimetype + ';base64'
             + `,filename:${file.originalname}`

            

            

            

            let fileInputField = 'txtFile'

             {
                fileInputField = fileInputFieldFromExt
            } el {
                fileInputField = fileInputFieldFromExt
            }

             {
                fileInputField = 'fileObject'
            }

             {
                
                const newFileInputFieldArray = [storagePath]
                
                f
            } else {
                f
            }

            awa
        }

        loaderConfig = {
            ...loaderConfig,
            ...filesLoaderConfig
        }
    }

    .length > 0) {
        loaderConfig = {
            ...loaderConfig,
            metadata
        }
    }

    // Step 4: Verification for must have components
     {
        th
    }

     {
        th
    }

     {
        th
    }

    // Step 5: Process & Upsert
    const processData: IDocumentStoreLoaderForPreview = {
        storeId,
        loaderId,
        loaderName,
        loaderConfig,
        splitterId,
        splitterName,
        splitterConfig
    }

     {
        processData.id = docId
    }

    try {
        
        const result = await processLoader({
            appDataSource,
            componentNodes,
            data: processData,
            docLoaderId: newLoader.id || '',
            isProcessWithoutUpsert: false,
            telemetry,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        })
        const newDocId = result.docId

        const insertData = {
            storeId,
            docId: newDocId,
            vectorStoreName,
            vectorStoreConfig,
            embeddingName,
            embeddingConfig,
            recordManagerName,
            recordManagerConfig
        }

        const res = await insertIntoVectorStore({
            appDataSource,
            componentNodes,
            telemetry,
            data: insertData,
            isStrictSave: false,
            isVectorStoreInsert: true,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        })
        res.docId = newDocId

        return res
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export const executeDocStoreUpsert = async ({
    appDataSource,
    componentNodes,
    telemetry,
    storeId,
    totalItems,
    files,
    isRefreshAPI,
    orgId,
    workspaceId,
    subscriptionId,
    usageCacheManager
}: IExe => {
    const results = []
    f {
        const res = await upsertDocStore(
            appDataSource,
            componentNodes,
            telemetry,
            storeId,
            item,
            files,
            isRefreshAPI,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        )
        
    }
    return isRefreshAPI ? results : results[0]
}

const upsertDocStoreMiddleware = async (
    storeId: string,
    data: IDocumentStoreUpsertData,
    files: Express.Multer.File[] = [],
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    
    const componentNodes = appServer.nodesPool.componentNodes
    const appDataSource = appServer.AppDataSource
    const telemetry = appServer.telemetry

    try {
        const executeData: IExecuteDocStoreUpsert = {
            appDataSource,
            componentNodes,
            telemetry,
            storeId,
            totalItems: [data],
            files,
            isRefreshAPI: false,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        }

         {
            
            )
            l

            
            

             {
                th
            }
            return result
        } else {
            
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

const refreshDocStoreMiddleware = async (
    storeId: string,
    data: IDocumentStoreRefreshData,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    
    const componentNodes = appServer.nodesPool.componentNodes
    const appDataSource = appServer.AppDataSource
    const telemetry = appServer.telemetry

    try {
        let totalItems: IDocumentStoreUpsertData[] = []

         {
            .f
             {
                th
            }

             {
                 {
                    th
                }
            }

            
            t => {
                return {
                    docId: ldr.id
                }
            })
        } else {
            totalItems = data.items
        }

        const executeData: IExecuteDocStoreUpsert = {
            appDataSource,
            componentNodes,
            telemetry,
            storeId,
            totalItems,
            files: [],
            isRefreshAPI: true,
            orgId,
            workspaceId,
            subscriptionId,
            usageCacheManager
        }

         {
            
            )
            l

            
            

             {
                th
            }
            return result
        } else {
            
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<string> => {
    try {
        

        // get matching DocumentStoreFileChunk storeId with docStoreId, and only the first 4 chunks sorted by chunkNo
        .findBy({
            storeId: docStoreId
        })

         {
            th
        }

        // sort the chunks by chunkNo
         => a.

        // get the first 4 chunks
        const chunksPageContent = chunks
            .
            .map(( => {
                return chunk.pageContent
            })
            .j

        .length > 0) {
            const nodeInstanceFilePath = appServer.nodesPool.componentNodes[selectedChatModel.name].filePath as string
            
            
            const nodeData = {
                credential: selectedChatModel.credential || selectedChatModel.inputs['FLOWISE_CREDENTIAL_ID'] || undefined,
                inputs: selectedChatModel.inputs,
                id: `${selectedChatModel.name}_0`
            }
            const options: ICommonObject = {
                appDataSource: appServer.AppDataSource,
                databaseEntities,
                logger
            }
            
            const response = await llmNodeInstance.invoke(
                
            )
            return response
        }

        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `Error: documentStoreServices.generateDocStoreToolDesc - Error generating tool description`
        )
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

exp => {
    // find the document store
    
    .f

     {
        th
    }

    
     => l
     {
        th
    }

    const nodes = []
    const componentCredentials = appServer.nodesPool.componentCredentials

    const loaderName = loader.loaderId
    const loaderLabel = appServer.nodesPool.componentNodes[loaderName].label

    const loaderInputs =
        appSe => INPUT_PARAMS_TYPE.) ?? []
    nodes.push({
        label: loaderLabel,
        nodeId: `${loaderName}_0`,
        inputParams: loaderInputs
    })

    const splitterName = loader.splitterId
     {
        const splitterLabel = appServer.nodesPool.componentNodes[splitterName].label
        const splitterInputs =
            appSe => INPUT_PARAMS_TYPE.) ?? []
        nodes.push({
            label: splitterLabel,
            nodeId: `${splitterName}_0`,
            inputParams: splitterInputs
        })
    }

     {
        .name
        const vectorStoreLabel = appServer.nodesPool.componentNodes[vectorStoreName].label
        const vectorStoreInputs =
            appSe => INPUT_PARAMS_TYPE.) ?? []
        nodes.push({
            label: vectorStoreLabel,
            nodeId: `${vectorStoreName}_0`,
            inputParams: vectorStoreInputs
        })
    }

     {
        .name
        const embeddingLabel = appServer.nodesPool.componentNodes[embeddingName].label
        const embeddingInputs =
            appSe => INPUT_PARAMS_TYPE.) ?? []
        nodes.push({
            label: embeddingLabel,
            nodeId: `${embeddingName}_0`,
            inputParams: embeddingInputs
        })
    }

     {
        .name
        const recordManagerLabel = appServer.nodesPool.componentNodes[recordManagerName].label
        const recordManagerInputs =
            appSe => INPUT_PARAMS_TYPE.) ?? []
        nodes.push({
            label: recordManagerLabel,
            nodeId: `${recordManagerName}_0`,
            inputParams: recordManagerInputs
        })
    }

    const configs: IOverrideConfig[] = []
    f {
        const inputParams = node.inputParams
        f {
            let obj: IOverrideConfig
             {
                obj = {
                    node: node.label,
                    nodeId: node.nodeId,
                    label: inputParam.label,
                    name: 'files',
                    type: inputParam.fileType ?? inputParam.type
                }
            } el {
                obj = {
                    node: node.label,
                    nodeId: node.nodeId,
                    label: inputParam.label,
                    name: inputParam.name,
                    type: inputParam.options
                        ? inputParam.options
                              ?.map(( => {
                                  return option.name
                              })
                              .j
                        : 'string'
                }
            } el {
                // get component credential inputs
                f {
                    ) {
                        const inputs = componentCredentials[name]?.inputs ?? []
                        f {
                            obj = {
                                node: node.label,
                                nodeId: node.nodeId,
                                label: input.label,
                                name: input.name,
                                type: input.type === 'password' ? 'string' : input.type
                            }
                            
                        }
                    }
                }
                continue
            } else {
                obj = {
                    node: node.label,
                    nodeId: node.nodeId,
                    label: inputParam.label,
                    name: inputParam.name,
                    type: inputParam.type === 'password' ? 'string' : inputParam.type
                }
            }
             => JSON. === JSON.)) {
                
            }
        }
    }

    return configs
}

export default {
    updateDocumentStoreUsage,
    deleteDocumentStore,
    createDocumentStore,
    deleteLoaderFromDocumentStore,
    getAllDocumentStores,
    getAllDocumentFileChunksByDocumentStoreIds,
    getDocumentStoreById,
    getUsedChatflowNames,
    getDocumentStoreFileChunks,
    updateDocumentStore,
    previewChunksMiddleware,
    saveProcessingLoader,
    processLoaderMiddleware,
    deleteDocumentStoreFileChunk,
    editDocumentStoreFileChunk,
    getDocumentLoaders,
    insertIntoVectorStoreMiddleware,
    getEmbeddingProviders,
    getVectorStoreProviders,
    getRecordManagerProviders,
    saveVectorStoreConfig,
    queryVectorStore,
    deleteVectorStoreFromStore,
    updateVectorStoreConfigOnly,
    upsertDocStoreMiddleware,
    refreshDocStoreMiddleware,
    generateDocStoreToolDesc,
    findDocStoreAvailableConfigs
}
