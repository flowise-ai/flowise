import { Keyv } from 'keyv'
import KeyvRedis from '@keyv/redis'
import { Cache, createCache } from 'cache-manager'
import { MODE } from './Interface'
import { LICENSE_QUOTAS } from './utils/constants'
import { StripeManager } from './StripeManager'

const DISABLED_QUOTAS = {
    [LICENSE_QUOTAS.PREDICTIONS_LIMIT]: 0,
    [LICENSE_QUOTAS.STORAGE_LIMIT]: 0, // in MB
    [LICENSE_QUOTAS.FLOWS_LIMIT]: 0,
    [LICENSE_QUOTAS.USERS_LIMIT]: 0,
    [LICENSE_QUOTAS.ADDITIONAL_SEATS_LIMIT]: 0
}

const UNLIMITED_QUOTAS = {
    [LICENSE_QUOTAS.PREDICTIONS_LIMIT]: -1,
    [LICENSE_QUOTAS.STORAGE_LIMIT]: -1,
    [LICENSE_QUOTAS.FLOWS_LIMIT]: -1,
    [LICENSE_QUOTAS.USERS_LIMIT]: -1,
    [LICENSE_QUOTAS.ADDITIONAL_SEATS_LIMIT]: -1
}

export class UsageCacheManager {
    private cache: Cache
    private static instance: UsageCacheManager

    publ: Promise<UsageCacheManager> {
         {
            U
            awa
        }
        return UsageCacheManager.instance
    }

    p: Promise<void> {
         {
            let redisConfig: string | Record<string, any>
             {
                redisConfig = process.env.REDIS_URL
            } else {
                redisConfig = {
                    username: process.env.REDIS_USERNAME || undefined,
                    password: process.env.REDIS_PASSWORD || undefined,
                    socket: {
                        host: process.env.REDIS_HOST || 'localhost',
                        p,
                        tls: process.env.REDIS_TLS === 'true',
                         : undefined,
                        key: p : undefined,
                         : undefined
                    }
                }
            }
            this.cache = createCache({
                stores: [
                    new Keyv({
                        
                    })
                ]
            })
        } else {
            th
        }
    }

    publ: Promise<Record<string, any>> {
        
         {
            return UNLIMITED_QUOTAS
        }

        // Skip cache if withoutCache is true
         {
            
             {
                return subscriptionData.subsriptionDetails
            }
        }

        // If not in cache, retrieve from Stripe
        .

        // Update subscription data cache
        awa })

        
    }

    publ: Promise<Record<string, number>> {
        
         {
            return UNLIMITED_QUOTAS
        }

        // Skip cache if withoutCache is true
         {
            
             {
                return subscriptionData.quotas
            }
        }

        // If not in cache, retrieve from Stripe
        .
        const items = subscription.items.data
         {
            return DISABLED_QUOTAS
        }

        const productId = items[0].price.product as string
        .p
        const productMetadata = product.metadata

        .length === 0) {
            return DISABLED_QUOTAS
        }

        const quotas: Record<string, number> = {}
        f {
            ) {
                qu
            }
        }

        const additionalSeatsItem = subscription.items.data.find(
            ( => ( === process.env.ADDITIONAL_SEAT_ID
        )
        quotas[LICENSE_QUOTAS.ADDITIONAL_SEATS_LIMIT] = additionalSeatsItem?.quantity || 0

        // Update subscription data cache with quotas
        await this.updateSubscriptionDataToCache(subscriptionId, {
            quotas,
            
        })

        return quotas
    }

    publ {
        const cacheKey = `subscription:${subscriptionId}`
        return await this.get<{
            quotas?: Record<string, number>
            productId?: string
            features?: Record<string, string>
            subsriptionDetails?: Record<string, any>
        }>(
    }

    public async updateSubscriptionDataToCache(
        subscriptionId: string,
        data: Partial<{
            quotas: Record<string, number>
            productId: string
            features: Record<string, string>
            subsriptionDetails: Record<string, any>
        }>
    ) {
        const cacheKey = `subscription:${subscriptionId}`
        ) || {}
        const updatedData = { ...existingData, ...data }
        th // Cache for 1 hour
    }

    publ: Promise<T | null> {
         awa
        
        return value
    }

    publ: Promise<number | null> {
         awa
        
        return value
    }

    publ: P[]> {
         {
            
            return values
        } else {
            return []
        }
    }

    publ {
         {
            th
        }
    }

    publ {
         {
            th
        }
    }

    publ: Promise<void> {
        awa
    }

    publ: Promise<void> {
        awa
    }

    publ: Promise<void> {
        awa
    }

    publ => P: Promise<T> {
        
    }
}
