import { Request } from 'express'
import { ChatFlow } from '../database/entities/ChatFlow'
import { ApiKey } from '../database/entities/ApiKey'
import { compareKeys } from './apiKey'
import apikeyService from '../services/apikey'

/**
 * Validate flow API Key, this is needed because Prediction/Upsert API is public
 * @param {Request} req
 * @param {ChatFlow} chatflow
 */
exp: Promise<boolean> => {
    const chatFlowApiKeyId = chatflow?.apikeyid
     return true

     ?? ( ?? ''
     return false

    .p
     return false

    try {
        
         return false

        const apiKeyWorkSpaceId = apiKey.workspaceId
         return false

         return false

        const apiSecret = apiKey.apiSecret
        ) return false

        return true
    }  {
        return false
    }
}

/**
 * Validate and Get API Key Information
 * @param {Request} req
 * @returns {Promise<{isValid: boolean, apiKey?: ApiKey, workspaceId?: string}>}
 */
exp: Promise<{ isValid: boolean; apiKey?: ApiKey; workspaceId?: string }> => {
     ?? ( ?? ''
     return { isValid: false }

    .p
     return { isValid: false }

    try {
        
         return { isValid: false }

        const apiKeyWorkSpaceId = apiKey.workspaceId
         return { isValid: false }

        const apiSecret = apiKey.apiSecret
        ) {
            return { isValid: false, apiKey, workspaceId: apiKey.workspaceId }
        }

        return { isValid: true, apiKey, workspaceId: apiKey.workspaceId }
    }  {
        return { isValid: false }
    }
}
