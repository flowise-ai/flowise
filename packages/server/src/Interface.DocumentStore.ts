import { ICommonObject } from 'flowise-components'
import { DocumentStore } from './database/entities/DocumentStore'
import { DataSource } from 'typeorm'
import { IComponentNodes } from './Interface'
import { Telemetry } from './utils/telemetry'
import { CachePool } from './CachePool'
import { UsageCacheManager } from './UsageCacheManager'

export enum DocumentStoreStatus {
    EMPTY_SYNC = 'EMPTY',
    SYNC = 'SYNC',
    SYNCING = 'SYNCING',
    STALE = 'STALE',
    NEW = 'NEW',
    UPSERTING = 'UPSERTING',
    UPSERTED = 'UPSERTED'
}

export interface IDocumentStore {
    id: string
    name: string
    description: string
    loaders: string // JSON string
    whereUsed: string // JSON string
    updatedDate: Date
    createdDate: Date
    status: DocumentStoreStatus
    vectorStoreConfig: string | null // JSON string
    embeddingConfig: string | null // JSON string
    recordManagerConfig: string | null // JSON string
    workspaceId?: string
}

export interface IDocumentStoreFileChunk {
    id: string
    chunkNo: number
    docId: string
    storeId: string
    pageContent: string
    metadata: string
}

export interface IDocumentStoreFileChunkPagedResponse {
    chunks: IDocumentStoreFileChunk[]
    count: number
    characters: number
    file?: IDocumentStoreLoader
    currentPage: number
    storeName: string
    description: string
    docId: string
    workspaceId?: string
}

export interface IDocumentStoreLoader {
    id?: string
    loaderId?: string
    loaderName?: string
    loaderConfig?: any // JSON string
    splitterId?: string
    splitterName?: string
    splitterConfig?: any // JSON string
    totalChunks?: number
    totalChars?: number
    status?: DocumentStoreStatus
    storeId?: string
    files?: IDocumentStoreLoaderFile[]
    source?: string
    credential?: string
}

export interface IDocumentStoreLoaderForPreview extends IDocumentStoreLoader {
    rehydrated?: boolean
    preview?: boolean
    previewChunkCount?: number
}

export interface IDocumentStoreUpsertData {
    docId: string
    metadata?: string | object
    replaceExisting?: boolean
    createNewDocStore?: boolean
    docStore?: IDocumentStore
    loaderName?: string
    loader?: {
        name: string
        config: ICommonObject
    }
    splitter?: {
        name: string
        config: ICommonObject
    }
    vectorStore?: {
        name: string
        config: ICommonObject
    }
    embedding?: {
        name: string
        config: ICommonObject
    }
    recordManager?: {
        name: string
        config: ICommonObject
    }
}

export interface IDocumentStoreRefreshData {
    items: IDocumentStoreUpsertData[]
}

export interface IDocumentStoreLoaderFile {
    id: string
    name: string
    mimePrefix: string
    size: number
    status: DocumentStoreStatus
    uploaded: Date
}

export interface IDocumentStoreWhereUsed {
    id: string
    name: string
}

export interface IUpsertQueueAppServer {
    orgId: string
    workspaceId: string
    subscriptionId: string
    appDataSource: DataSource
    componentNodes: IComponentNodes
    telemetry: Telemetry
    usageCacheManager: UsageCacheManager
    cachePool?: CachePool
}

export interface IExecuteDocStoreUpsert extends IUpsertQueueAppServer {
    storeId: string
    totalItems: IDocumentStoreUpsertData[]
    files: Express.Multer.File[]
    isRefreshAPI: boolean
}

export interface IExecutePreviewLoader extends Omit<IUpsertQueueAppServer, 'telemetry'> {
    data: IDocumentStoreLoaderForPreview
    isPreviewOnly: boolean
    telemetry?: Telemetry
}

export interface IExecuteProcessLoader extends IUpsertQueueAppServer {
    data: IDocumentStoreLoaderForPreview
    docLoaderId: string
    isProcessWithoutUpsert: boolean
}

export interface IExecuteVectorStoreInsert extends IUpsertQueueAppServer {
    data: ICommonObject
    isStrictSave: boolean
    isVectorStoreInsert: boolean
}

 => {
    let fileNames = []
    ) {
        
         && name) {
            
            
        } else {
            
        }
    }
     && f) {
        
        f {
            
            [1]
            f
        }
        
    } else {
        
        [1]
        return filename
    }
}

exp => {
    let source = 'None'

    : string => {
         {
             : 
        }
        return config.filePath || 'None'
    }

     {
        case 'pdfFile':
        case 'docxFile':
        case 'jsonFile':
        case 'csvFile':
        case 'file':
        case 'jsonlinesFile':
        case 'txtFile':
            source = isGetFileNameOnly
                ? getF
                : l || 'None'
            break
        case 'apiLoader':
            '
            break
        case 'cheerioWebScraper':
        case 'playwrightWebScraper':
        case 'puppeteerWebScraper':
            source = loader.loaderConfig?.url || 'None'
            break
        case 'unstructuredFileLoader':
            
            break
        default:
            source = 'None'
            break
    }

    return source
}

export class DocumentStoreDTO {
    id: string
    name: string
    description: string
    files: IDocumentStoreLoaderFile[]
    whereUsed: IDocumentStoreWhereUsed[]
    createdDate: Date
    updatedDate: Date
    status: DocumentStoreStatus
    chunkOverlap: number
    splitter: string
    totalChunks: number
    totalChars: number
    chunkSize: number
    workspaceId?: string
    loaders: IDocumentStoreLoader[]
    vectorStoreConfig: any
    embeddingConfig: any
    recordManagerConfig: any

     {}

    : DocumentStoreDTO {
        let 

        Obje
        documentStoreDTO.id = entity.id
        documentStoreDTO.name = entity.name
        documentStoreDTO.description = entity.description
        documentStoreDTO.status = entity.status
        documentStoreDTO.workspaceId = entity.workspaceId
        documentStoreDTO.totalChars = 0
        documentStoreDTO.totalChunks = 0

         {
            
        } else {
            documentStoreDTO.whereUsed = []
        }

         {
            
        }
         {
            
        }
         {
            
        }

         {
            
             => {
                documentStoreDTO.totalChars += loader.totalChars || 0
                documentStoreDTO.totalChunks += loader.totalChunks || 0
                l
                 {
                    documentStoreDTO.status = DocumentStoreStatus.STALE
                }
            })
        }

        return documentStoreDTO
    }

    : DocumentStoreDTO[] {
         {
            return []
        }
         => th)
    }

    : DocumentStore {
        
        Obje
        docStore.loaders = body.loaders ?? '[]'
        docStore.whereUsed = body.whereUsed ?? '[]'
        // when a new document store is created, it is empty and in sync
        docStore.status = DocumentStoreStatus.EMPTY_SYNC
        return docStore
    }
}
