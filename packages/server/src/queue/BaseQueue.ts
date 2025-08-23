import { Queue, Worker, Job, QueueEvents, RedisOptions, KeepJobs } from 'bullmq'
import { v4 as uuidv4 } from 'uuid'
import logger from '../utils/logger'

const QUEUE_REDIS_EVENT_STREAM_MAX_LEN = process.env.QUEUE_REDIS_EVENT_STREAM_MAX_LEN
    ? pa
    : 10000
 : 100000
 : -1
 : -1

export abstract class BaseQueue {
    protected queue: Queue
    protected queueEvents: QueueEvents
    protected connection: RedisOptions
    private worker: Worker

     {
        this.connection = connection
        this.queue = new Queue(queueName, {
            connection: this.connection,
            streams: { events: { maxLen: QUEUE_REDIS_EVENT_STREAM_MAX_LEN } }
        })
        th
    }

    ab: Promise<any>

    ab: string

    ab: Queue

    publ: Worker {
        return this.worker
    }

    publ: Promise<Job> {
        

        let removeOnFail: number | boolean | KeepJobs | undefined = true
        let removeOnComplete: number | boolean | KeepJobs | undefined = undefined

        // Only override removal options if age or count is specified
         {
            const keepJobObj: KeepJobs = {}
             {
                keepJobObj.age = REMOVE_ON_AGE
            }
             {
                keepJobObj.count = REMOVE_ON_COUNT
            }
            removeOnFail = keepJobObj
            removeOnComplete = keepJobObj
        }

        
    }

    publ: Worker {
        try {
            this.worker = new Worker(
                this.queue.name,
                a => {
                    .getT
                    l.t}`)
                    try {
                        
                        .getT
                        logger.info(
                            `.t} (${en`
                        )
                        return result
                    }  {
                        .getT
                        logger.error(
                            `.t} (${en:`,
                            { error }
                        )
                        throw error
                    }
                },
                {
                    connection: this.connection,
                    concurrency
                }
            )

            // Add error listeners to the worker
            th => {
                l
            })

            th => {
                l
            })

            th => {
                l
            })

            l
            return this.worker
        }  {
            l
            throw error
        }
    }

    publ: Promise<Job[]> {
        
    }

    publ: Promise<{ [index: string]: number }> {
        
    }

    publ: Promise<Job> {
        
         => j
         th
        return job
    }

    publ: QueueEvents {
        return this.queueEvents
    }

    publ: Promise<void> {
        awa
    }
}
