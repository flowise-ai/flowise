import { DataSource } from 'typeorm'
import {
    IComponentNodes,
    IExecuteDocStoreUpsert,
    IExecuteFlowParams,
    IExecutePreviewLoader,
    IExecuteProcessLoader,
    IExecuteVectorStoreInsert
} from '../Interface'
import { Telemetry } from '../utils/telemetry'
import { CachePool } from '../CachePool'
import { BaseQueue } from './BaseQueue'
import { executeUpsert } from '../utils/upsertVector'
import { executeDocStoreUpsert, insertIntoVectorStore, previewChunks, processLoader } from '../services/documentstore'
import { RedisOptions } from 'bullmq'
import logger from '../utils/logger'
import { UsageCacheManager } from '../UsageCacheManager'

interface UpsertQueueOptions {
    appDataSource: DataSource
    telemetry: Telemetry
    cachePool: CachePool
    usageCacheManager: UsageCacheManager
    componentNodes: IComponentNodes
}

export class UpsertQueue extends BaseQueue {
    private componentNodes: IComponentNodes
    private telemetry: Telemetry
    private cachePool: CachePool
    private appDataSource: DataSource
    private usageCacheManager: UsageCacheManager
    private queueName: string

     {
        
        this.queueName = name
        this.componentNodes = options.componentNodes || {}
        this.telemetry = options.telemetry
        this.cachePool = options.cachePool
        this.appDataSource = options.appDataSource
        this.usageCacheManager = options.usageCacheManager
    }

    publ {
        return this.queueName
    }

    publ {
        return this.queue
    }

    async processJob(
        data: IExecuteFlowParams | IExecuteDocStoreUpsert | IExecuteProcessLoader | IExecuteVectorStoreInsert | IExecutePreviewLoader
    ) {
         data.appDataSource = this.appDataSource
         data.telemetry = this.telemetry
         data.cachePool = this.cachePool
         data.usageCacheManager = this.usageCacheManager
         data.componentNodes = this.componentNodes

        // document-store/loader/preview
        ) {
            l
            
        }

        // document-store/loader/process/:loaderId
        ) {
            l
            
        }

        // document-store/vectorstore/insert/:loaderId
        ) {
            l
            
        }

        // document-store/upsert/:storeId
        ) {
            l
            
        }

        // upsert-vector/:chatflowid
        l
        
    }
}
