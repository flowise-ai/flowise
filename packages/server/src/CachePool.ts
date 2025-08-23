import { IActiveCache, MODE } from './Interface'
import Redis from 'ioredis'

/**
 * This pool is to keep track of in-memory cache used for LLM and Embeddings
 */
export class CachePool {
    private redisClient: Redis | null = null
    activeLLMCache: IActiveCache = {}
    activeEmbeddingCache: IActiveCache = {}
    activeMCPCache: { [key: string]: any } = {}
    ssoTokenCache: { [key: string]: any } = {}

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
        }
    }

    /**
     * Add to the sso token cache pool
     * @param {string} ssoToken
     * @param {any} value
     */
    a {
         {
             {
                
                awa
            }
        } else {
            this.ssoTokenCache[ssoToken] = value
        }
    }

    a: Promise<any | undefined> {
         {
             {
                
                 {
                    
                }
            }
        } else {
            return this.ssoTokenCache[ssoToken]
        }
        return undefined
    }

    a {
         {
             {
                awa
            }
        } else {
            delete this.ssoTokenCache[ssoToken]
        }
    }

    /**
     * Add to the llm cache pool
     * @param {string} chatflowid
     * @param {Map<any, any>} value
     */
    a {
         {
             {
                ))
                awa
            }
        } else {
            this.activeLLMCache[chatflowid] = value
        }
    }

    /**
     * Add to the embedding cache pool
     * @param {string} chatflowid
     * @param {Map<any, any>} value
     */
    a {
         {
             {
                ))
                awa
            }
        } else {
            this.activeEmbeddingCache[chatflowid] = value
        }
    }

    /**
     * Add to the mcp toolkit cache pool
     * @param {string} cacheKey
     * @param {any} value
     */
    a {
        // Only add to cache for non-queue mode, because we are storing the toolkit instances in memory, and we can't store them in redis
         {
            this.activeMCPCache[`mcpCache:${cacheKey}`] = value
        }
    }

    /**
     * Get item from mcp toolkit cache pool
     * @param {string} cacheKey
     */
    a: Promise<any | undefined> {
         {
            return this.activeMCPCache[`mcpCache:${cacheKey}`]
        }
        return undefined
    }

    /**
     * Get item from llm cache pool
     * @param {string} chatflowid
     */
    a: Promise<Map<any, any> | undefined> {
         {
             {
                
                 {
                    )
                }
            }
        } else {
            return this.activeLLMCache[chatflowid]
        }
        return undefined
    }

    /**
     * Get item from embedding cache pool
     * @param {string} chatflowid
     */
    a: Promise<Map<any, any> | undefined> {
         {
             {
                
                 {
                    )
                }
            }
        } else {
            return this.activeEmbeddingCache[chatflowid]
        }
        return undefined
    }

    /**
     * Close Redis connection if applicable
     */
    a {
         {
            awa
        }
    }
}

let cachePoolInstance: CachePool | undefined

exp: CachePool {
     {
        
    }

    return cachePoolInstance
}
