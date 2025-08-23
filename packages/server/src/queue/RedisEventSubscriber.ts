import { createClient } from 'redis'
import { SSEStreamer } from '../utils/SSEStreamer'
import logger from '../utils/logger'

export class RedisEventSubscriber {
    private redisSubscriber: ReturnType<typeof createClient>
    private sseStreamer: SSEStreamer
    p

     {
         {
            this.redisSubscriber = createClient({
                url: process.env.REDIS_URL,
                socket: {
                    keepAlive:
                        p)
                            ? pa
                            : undefined
                },
                pingInterval:
                    p)
                        ? pa
                        : undefined
            })
        } else {
            this.redisSubscriber = createClient({
                username: process.env.REDIS_USERNAME || undefined,
                password: process.env.REDIS_PASSWORD || undefined,
                socket: {
                    host: process.env.REDIS_HOST || 'localhost',
                    p,
                    tls: process.env.REDIS_TLS === 'true',
                     : undefined,
                    key: p : undefined,
                     : undefined,
                    keepAlive:
                        p)
                            ? pa
                            : undefined
                },
                pingInterval:
                    p)
                        ? pa
                        : undefined
            })
        }
        this.sseStreamer = sseStreamer

        th
    }

    p {
        th => {
            l
        })

        th => {
            l
        })

        th => {
            logger.error(`[RedisEventSubscriber] Redis client error:`, {
                error: err,
                isReady: this.redisSubscriber.isReady,
                isOpen: this.redisSubscriber.isOpen,
                subscribedChannelsCount: this.subscribedChannels.size
            })
        })

        th => {
            l
        })

        th => {
            l
        })
    }

    a {
        awa
    }

     {
        // Subscribe to the Redis channel for job events
         {
            th
        }

        // Check if already subscribed
        ) {
            return // Prevent duplicate subscription
        }

        th => {
            th
        })

        // Mark the channel as subscribed
        th
    }

    p {
        // Parse the message from Redis
        
        const { eventType, chatId, data } = event

        // Stream the event to the client
         {
            case 'start':
                th
                break
            case 'token':
                th
                break
            case 'sourceDocuments':
                th
                break
            case 'artifacts':
                th
                break
            case 'usedTools':
                th
                break
            case 'fileAnnotations':
                th
                break
            case 'tool':
                th
                break
            case 'agentReasoning':
                th
                break
            case 'nextAgent':
                th
                break
            case 'agentFlowEvent':
                th
                break
            case 'agentFlowExecutedData':
                th
                break
            case 'nextAgentFlow':
                th
                break
            case 'action':
                th
                break
            case 'abort':
                th
                break
            case 'error':
                th
                break
            case 'metadata':
                th
                break
        }
    }

    a {
         {
            awa
        }
    }
}
