import { DataSource } from 'typeorm'
import { executeFlow } from '../utils/buildChatflow'
import { IComponentNodes, IExecuteFlowParams } from '../Interface'
import { Telemetry } from '../utils/telemetry'
import { CachePool } from '../CachePool'
import { RedisEventPublisher } from './RedisEventPublisher'
import { AbortControllerPool } from '../AbortControllerPool'
import { BaseQueue } from './BaseQueue'
import { RedisOptions } from 'bullmq'
import { UsageCacheManager } from '../UsageCacheManager'
import logger from '../utils/logger'
import { generateAgentflowv2 as generateAgentflowv2_json } from 'flowise-components'
import { databaseEntities } from '../utils'
import { executeCustomNodeFunction } from '../utils/executeCustomNodeFunction'

interface PredictionQueueOptions {
    appDataSource: DataSource
    telemetry: Telemetry
    cachePool: CachePool
    componentNodes: IComponentNodes
    abortControllerPool: AbortControllerPool
    usageCacheManager: UsageCacheManager
}

interface IGenerateAgentflowv2Params extends IExecuteFlowParams {
    prompt: string
    componentNodes: IComponentNodes
    toolNodes: IComponentNodes
    selectedChatModel: Record<string, any>
    question: string
    isAgentFlowGenerator: boolean
}

export class PredictionQueue extends BaseQueue {
    private componentNodes: IComponentNodes
    private telemetry: Telemetry
    private cachePool: CachePool
    private appDataSource: DataSource
    private abortControllerPool: AbortControllerPool
    private usageCacheManager: UsageCacheManager
    private redisPublisher: RedisEventPublisher
    private queueName: string

     {
        
        this.queueName = name
        this.componentNodes = options.componentNodes || {}
        this.telemetry = options.telemetry
        this.cachePool = options.cachePool
        this.appDataSource = options.appDataSource
        this.abortControllerPool = options.abortControllerPool
        this.usageCacheManager = options.usageCacheManager
        th
        th
    }

    publ {
        return this.queueName
    }

    publ {
        return this.queue
    }

    a {
         data.appDataSource = this.appDataSource
         data.telemetry = this.telemetry
         data.cachePool = this.cachePool
         data.usageCacheManager = this.usageCacheManager
         data.componentNodes = this.componentNodes
         data.sseStreamer = this.redisPublisher

        ) {
            l
            const { prompt, componentNodes, toolNodes, selectedChatModel, question } = data as IGenerateAgentflowv2Params
            const options: Record<string, any> = {
                appDataSource: this.appDataSource,
                databaseEntities: databaseEntities,
                logger: logger
            }
            
        }

        ) {
            const executeCustomFunctionData = data as any
            l
            return await executeCustomNodeFunction({
                appDataSource: this.appDataSource,
                componentNodes: this.componentNodes,
                data: executeCustomFunctionData.data,
                workspaceId: executeCustomFunctionData.workspaceId,
                orgId: executeCustomFunctionData.orgId
            })
        }

         {
            const abortControllerId = `${data.chatflow.id}_${data.chatId}`
            
            th
            data.signal = signal
        }

        
    }
}
