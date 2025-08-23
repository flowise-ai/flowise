import { NextFunction, Request, Response } from 'express'
import { rateLimit, RateLimitRequestHandler } from 'express-rate-limit'
import { IChatFlow, MODE } from '../Interface'
import { Mutex } from 'async-mutex'
import { RedisStore } from 'rate-limit-redis'
import Redis from 'ioredis'
import { QueueEvents, QueueEventsListener, QueueEventsProducer } from 'bullmq'

interface CustomListener extends QueueEventsListener {
    up => void
}

const QUEUE_NAME = 'ratelimit'
const QUEUE_EVENT_NAME = 'updateRateLimiter'

export class RateLimiterManager {
    private rateLimiters: Record<string, RateLimitRequestHandler> = {}
    p
    private redisClient: Redis
    private static instance: RateLimiterManager
    private queueEventsProducer: QueueEventsProducer
    private queueEvents: QueueEvents

     {
         {
             {
                this.redisClient = new Redis(process.env.REDIS_URL, {
                    keepAlive:
                        p)
                            ? pa
                            : undefined
                })
            } else {
                this.redisClient = new Redis({
                    host: process.env.REDIS_HOST || 'localhost',
                    p,
                    username: process.env.REDIS_USERNAME || undefined,
                    password: process.env.REDIS_PASSWORD || undefined,
                    tls:
                        process.env.REDIS_TLS === 'true'
                            ? {
                                   : undefined,
                                  key: p : undefined,
                                   : undefined
                              }
                            : undefined,
                    keepAlive:
                        p)
                            ? pa
                            : undefined
                })
            }
            th })
            th })
        }
    }

    getC {
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
        return {
            url: process.env.REDIS_URL || undefined,
            host: process.env.REDIS_HOST || 'localhost',
            p,
            username: process.env.REDIS_USERNAME || undefined,
            password: process.env.REDIS_PASSWORD || undefined,
            tls: tlsOpts,
            maxRetriesPerRequest: null,
            enableReadyCheck: true,
            keepAlive:
                p)
                    ? pa
                    : undefined
        }
    }

    publ: RateLimiterManager {
         {
            RateL
        }
        return RateLimiterManager.instance
    }

    publ: Promise<void> {
        
        try {
             {
                this.rateLimiters[id] = rateLimit({
                    windowMs: duration * 1000,
                    max: limit,
                    standardHeaders: true,
                    legacyHeaders: false,
                    message,
                    store: new RedisStore({
                        prefix: `rl:${id}`,
                        // @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
                         => th
                    })
                })
            } else {
                this.rateLimiters[id] = rateLimit({
                    windowMs: duration * 1000,
                    max: limit,
                    message
                })
            }
        } finally {
            
        }
    }

    publ: void {
         {
            delete this.rateLimiters[id]
        }
    }

    publ: ( => void {
         => {
            const id = req.params.id
             
            const idRateLimiter = this.rateLimiters[id]
            
        }
    }

    publ: Promise<void> {
         return
        

        const rateLimit: { limitDuration: number; limitMax: number; limitMsg: string; status?: boolean } = apiConfig.rateLimit
         return

        const { limitDuration, limitMax, limitMsg, status } = rateLimit

         {
            await this.queueEventsProducer.publishEvent({
                eventName: QUEUE_EVENT_NAME,
                limitDuration,
                limitMax,
                limitMsg,
                id: chatFlow.id
            })
        } else {
             {
                th
            } el {
                awa
            }
        }
    }

    publ: Promise<void> {
        await Promise.all(
             => {
                awa
            })
        )

         {
            this.queueEvents.on<CustomListener>(
                QUEUE_EVENT_NAME,
                async ({
                    limitDuration,
                    limitMax,
                    limitMsg,
                    id
                }: {
                    limitDuration: number
                    limitMax: number
                    limitMsg: string
                    id: string
                }) => {
                    awa
                }
            )
        }
    }
}
