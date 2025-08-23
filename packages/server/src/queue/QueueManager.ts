import { BaseQueue } from './BaseQueue'
import { PredictionQueue } from './PredictionQueue'
import { UpsertQueue } from './UpsertQueue'
import { IComponentNodes } from '../Interface'
import { Telemetry } from '../utils/telemetry'
import { CachePool } from '../CachePool'
import { DataSource } from 'typeorm'
import { AbortControllerPool } from '../AbortControllerPool'
import { QueueEventsProducer, RedisOptions } from 'bullmq'
import { createBullBoard } from '@bull-board/api'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { Express } from 'express'
import { UsageCacheManager } from '../UsageCacheManager'
import { ExpressAdapter } from '@bull-board/express'

const QUEUE_NAME = process.env.QUEUE_NAME || 'flowise-queue'

type QUEUE_TYPE = 'prediction' | 'upsert'

export class QueueManager {
    private static instance: QueueManager
    p
    private connection: RedisOptions
    private bullBoardRouter?: Express
    private predictionQueueEventsProducer?: QueueEventsProducer

    p {
         {
            let tlsOpts = undefined
            ) {
                tlsOpts = {
                    rejectUnauthorized: false
                }
            } el {
                tlsOpts = {
                     : undefined,
                    key: p : undefined,
                     : undefined
                }
            }
            this.connection = {
                url: process.env.REDIS_URL,
                tls: tlsOpts,
                enableReadyCheck: true,
                keepAlive:
                    p)
                        ? pa
                        : undefined
            }
        } else {
            let tlsOpts = undefined
             {
                tlsOpts = {
                     : undefined,
                    key: p : undefined,
                     : undefined
                }
            }
            this.connection = {
                host: process.env.REDIS_HOST || 'localhost',
                p,
                username: process.env.REDIS_USERNAME || undefined,
                password: process.env.REDIS_PASSWORD || undefined,
                tls: tlsOpts,
                enableReadyCheck: true,
                keepAlive:
                    p)
                        ? pa
                        : undefined
            }
        }
    }

    publ: QueueManager {
         {
            QueueManage
        }
        return QueueManager.instance
    }

    publ {
        th
    }

    publ {
        return this.connection
    }

    publ: BaseQueue {
        
         th
        return queue
    }

    publ: QueueEventsProducer {
         th
        return this.predictionQueueEventsProducer
    }

    publ: Express {
         th
        return this.bullBoardRouter
    }

    publ: Promise<{ [queueName: string]: { [status: string]: number } }> {
        const counts: { [queueName: string]: { [status: string]: number } } = {}

        f {
            
        }

        return counts
    }

    public setupAllQueues({
        componentNodes,
        telemetry,
        cachePool,
        appDataSource,
        abortControllerPool,
        usageCacheManager,
        serverAdapter
    }: {
        componentNodes: IComponentNodes
        telemetry: Telemetry
        cachePool: CachePool
        appDataSource: DataSource
        abortControllerPool: AbortControllerPool
        usageCacheManager: UsageCacheManager
        serverAdapter?: ExpressAdapter
    }) {
        const predictionQueueName = `${QUEUE_NAME}-prediction`
        const predictionQueue = new PredictionQueue(predictionQueueName, this.connection, {
            componentNodes,
            telemetry,
            cachePool,
            appDataSource,
            abortControllerPool,
            usageCacheManager
        })
        th

        th, {
            connection: this.connection
        })

        const upsertionQueueName = `${QUEUE_NAME}-upsertion`
        const upsertionQueue = new UpsertQueue(upsertionQueueName, this.connection, {
            componentNodes,
            telemetry,
            cachePool,
            appDataSource,
            usageCacheManager
        })
        th

         {
            createBullBoard({
                queue), new BullMQA)],
                serverAdapter: serverAdapter
            })
            th
        }
    }
}
