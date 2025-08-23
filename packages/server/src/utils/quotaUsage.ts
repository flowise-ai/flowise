import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { UsageCacheManager } from '../UsageCacheManager'
import { LICENSE_QUOTAS } from './constants'
import logger from './logger'

type UsageType = 'flows' | 'users'
export const ENTERPRISE_FEATURE_FLAGS = [
    //'feat:account', // Only for Cloud
    'feat:datasets',
    'feat:evaluations',
    'feat:evaluators',
    'feat:files',
    'feat:login-activity',
    'feat:users',
    'feat:workspaces',
    'feat:logs',
    'feat:roles',
    'feat:sso-config'
]

exp => {
    try {
         return

        ) || 0
        ) || 0

        
        const storageLimit = quotas[LICENSE_QUOTAS.STORAGE_LIMIT]
        const predLimit = quotas[LICENSE_QUOTAS.PREDICTIONS_LIMIT]

        return {
            predictions: {
                usage: currentPredictionsUsage,
                limit: predLimit
            },
            storage: {
                usage: currentStorageUsage,
                limit: storageLimit
            }
        }
    }  {
        l
        throw error
    }
}

// For usage that doesn't renew per month, we just get the count from database and check
export const checkUsageLimit = async (
    type: UsageType,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager,
    currentUsage: number
) => {
     return

    

    let limit = -1
     {
        case 'flows':
            limit = quotas[LICENSE_QUOTAS.FLOWS_LIMIT]
            break
        case 'users':
            l || 0)
            break
    }

     return

     {
        th
    }
}

// As predictions limit renew per month, we set to cache with 1 month TTL
export const updatePredictionsUsage = async (
    orgId: string,
    subscriptionId: string,
    _: string = '',
    usageCacheManager?: UsageCacheManager
) => {
     return

    
    const predictionsLimit = quotas[LICENSE_QUOTAS.PREDICTIONS_LIMIT]

    let currentPredictions = 0
    
     {
         > p
    } else {
        currentPredictions = 1
    }

    
     {
        
        const timeLeft = currentTTL - currentTimestamp
        u
    } else {
        
         {
            const MS_PER_DAY = 24 * 60 * 60 * 1000
            const DAYS = 30
            const approximateMonthMs = DAYS * MS_PER_DAY

            // Calculate time elapsed since subscription creation
            const createdTimestamp = subscriptionDetails.created * 1000 // Convert to milliseconds if timestamp is in seconds
            
            const timeElapsed = currentTimestamp - createdTimestamp

            // Calculate remaining time in the current month period
            

            u
        } else {
            // Fallback to default 30 days if no creation date
            const MS_PER_DAY = 24 * 60 * 60 * 1000
            const DAYS = 30
            const approximateMonthMs = DAYS * MS_PER_DAY
            u
        }
    }
}

exp => {
     return

    ) || 0

    
    const predictionsLimit = quotas[LICENSE_QUOTAS.PREDICTIONS_LIMIT]
     return

     {
        th
    }

    return {
        usage: currentPredictions,
        limit: predictionsLimit
    }
}

// Storage does not renew per month nor do we store the total size in database, so we just store the total size in cache
exp => {
     return
    u
}

exp => {
     return

    let currentStorageUsage = 0
    ) || 0

    
    const storageLimit = quotas[LICENSE_QUOTAS.STORAGE_LIMIT]
     return

     {
        th
    }

    return {
        usage: currentStorageUsage,
        limit: storageLimit
    }
}
