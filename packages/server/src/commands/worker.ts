import logger from '../utils/logger'
import { QueueManager } from '../queue/QueueManager'
import { BaseCommand } from './base'
import { getDataSource } from '../DataSource'
import { Telemetry } from '../utils/telemetry'
import { NodesPool } from '../NodesPool'
import { CachePool } from '../CachePool'
import { QueueEvents, QueueEventsListener } from 'bullmq'
import { AbortControllerPool } from '../AbortControllerPool'
import { UsageCacheManager } from '../UsageCacheManager'

interface CustomListener extends QueueEventsListener {
    ab => void
}

export default class Worker extends BaseCommand {
    predictionWorkerId: string
    upsertionWorkerId: string

    a: Promise<void> {
        l

        

        
        queueManager.setupAllQueues({
            componentNodes,
            telemetry,
            cachePool,
            appDataSource,
            abortControllerPool,
            usageCacheManager
        })

        /** Prediction */
        
        
        this.predictionWorkerId = predictionWorker.id
        l

        
         })

        queueEvent => {
            ab
        })

        /** Upsertion */
        
        
        this.upsertionWorkerId = upsertionWorker.id
        l

        // Keep the process running
        p
    }

    a {
        // Init database
        
        awa
        awa

        // Initialize abortcontroller pool
        

        // Init telemetry
        

        // Initialize nodes pool
        
        awa

        // Initialize cache pool
        

        // Initialize usage cache manager
        

        return { appDataSource, telemetry, componentNodes: nodesPool.componentNodes, cachePool, abortControllerPool, usageCacheManager }
    }

    a {
         l
        awa => {
            
        })
        awa
    }

    a {
        try {
            
            .getW
            l
            awa

            .getW
            l
            awa
        }  {
            l
            awa
        }

        awa
    }
}
