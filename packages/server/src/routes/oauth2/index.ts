/**
 * OAuth2 Authorization Code Flow Implementation
 *
 * This module implements a complete OAuth2 authorization code flow for Flowise credentials.
 * It supports Microsoft Graph and other OAuth2 providers.
 *
 * CREDENTIAL DATA STRUCTURE:
 * The credential's encryptedData should contain a JSON object with the following fields:
 *
 * Required fields:
 * - client_id: OAuth2 application client ID
 * - client_secret: OAuth2 application client secret
 *
 * Opt:
 * - tenant_
 * - auth
 * - t
 * - 
 * - 
 * - 
 * - 
 *
 * ENDPOINTS:
 *
 * 1. POST /api/v1/oauth2/authorize/:credentialId
 *    - Generates authorization URL for initiating OAuth2 flow
 *    - Uses credential ID as state parameter for security
 *    - Returns authorization URL to redirect user to
 *
 * 2. GET /api/v1/oauth2/callback
 *    - Handles OAuth2 callback with authorization code
 *    - Exchanges code for access token
 *    - Updates credential with token data
 *    - Supports Microsoft Graph and custom OAuth2 providers
 *
 * 3. POST /api/v1/oauth2/refresh/:credentialId
 *    - Refreshes expired access tokens using refresh token
 *    - Updates credential with new token data
 *
 * USAGE FLOW:
 * 1. C
 * 2. Call POST /oauth2/authorize/:credentialId to get authorization URL
 * 3. Redirect user to authorization URL
 * 4. User authorizes and gets redirected to callback endpoint
 * 5. Callback endpoint exchanges code for tokens and saves them
 * 6. Use POST /oauth2/refresh/:credentialId when tokens expire
 *
 * TOKEN STORAGE:
 * After successful authorization, the credential will contain additional fields:
 * - access_token: OAuth2 access token
 * - 
 * - t
 * - expires_in: Token lifetime in seconds
 * - exp
 * - granted_scope: Actual scopes granted by provider
 * - t
 */

import express from 'express'
import axios from 'axios'
import { Request, Response, NextFunction } from 'express'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Credential } from '../../database/entities/Credential'
import { decryptCredentialData, encryptCredentialData } from '../../utils'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { generateSuccessPage, generateErrorPage } from './templates'



// Initiate OAuth2 authorization flow
 => {
    try {
        const { credentialId } = req.params

        
        

        // Find credential by ID
        const credential = await credentialRepository.findOneBy({
            id: credentialId
        })

         {
            .json({
                success: false,
                message: 'Credential not found'
            })
        }

        // Decrypt the credential data to get OAuth configuration
        

        const {
            clientId,
            authorizationUrl,
            redirect_uri,
            scope,
            response_type = 'code',
            response_mode = 'query',
            additionalParameters = ''
        } = decryptedData

         {
            .json({
                success: false,
                message: 'Missing clientId in credential data'
            })
        }

         {
            .json({
                success: false,
                message: 'No authorizationUrl specified in credential data'
            })
        }

        }/api/v1/oauth2-credential/callback`
        const finalRedirectUri = redirect_uri || defaultRedirectUri

        const authParams = new URLSearchParams({
            client_id: clientId,
            response_type,
            response_mode,
            state: credentialId, // Use credential ID as state parameter
            redirect_uri: finalRedirectUri
        })

         {
            authPa
        }

        let fullAuth}`

         {
            fullAuth}`
        }

        res.json({
            success: true,
            message: 'Authorization URL generated successfully',
            credentialId,
            authorizationUrl: fullAuthorizationUrl,
            redirectUri: finalRedirectUri
        })
    }  {
        next(
            new InternalFlowiseError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                `OAuth2 authorization error: ${error instanceof Error ? error.message : 'Unknown error'}`
            )
        )
    }
})

// OAuth2 callback endpoint
 => {
    try {
        const { code, state, error, error_description } = req.query

         {
            const errorHtml = generateErrorPage(
                error as string,
                (e || 'An error occurred',
                error_description ? `Description: ${error_description}` : undefined
            )

            
            .
        }

         {
            

            
            .
        }

        
        

        // F
        const credential = await credentialRepository.findOneBy({
            id: state as string
        })

         {
            const errorHtml = generateErrorPage(
                'Credential not found',
                `Credential not found for the provided state: ${state}`,
                'Please try the authorization process again.'
            )

            
            .
        }

        

        const { clientId, clientSecret, accessTokenUrl, redirect_uri, scope } = decryptedData

         {
            const errorHtml = generateErrorPage(
                'Missing OAuth configuration',
                'Missing clientId or clientSecret',
                'Please check your credential setup.'
            )

            
            .
        }

        let tokenUrl = accessTokenUrl
         {
            const errorHtml = generateErrorPage(
                'Missing token endpoint URL',
                'No Access Token URL specified in credential data',
                'Please check your credential configuration.'
            )

            
            .
        }

        }/api/v1/oauth2-credential/callback`
        const finalRedirectUri = redirect_uri || defaultRedirectUri

        const tokenRequestData: any = {
            client_id: clientId,
            client_secret: clientSecret,
            code: code as string,
            grant_type: 'authorization_code',
            redirect_uri: finalRedirectUri
        }

         {
            tokenRequestData.scope = scope
        }

        .t, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        })

        const tokenData = tokenResponse.data

        // Update the credential data with token information
        const updatedCredentialData: any = {
            ...decryptedData,
            ...tokenData,
            t.t
        }

        // Add refresh token if provided
         {
            updatedCredentialData.refresh_token = tokenData.refresh_token
        }

        // Calculate token expiry time
         {
             + t
            up
        }

        // Encrypt the updated credential data
        

        // Update the credential in the database
        await credentialRepository.update(credential.id, {
            encryptedData,
            up
        })

        // Return HTML that closes the popup window on success
        

        
        
    }  {
        ) {
            const axiosError = error
            const errorHtml = generateErrorPage(
                axiosError.response?.data?.error || 'token_exchange_failed',
                axiosError.response?.data?.error_description || 'Token exchange failed',
                axiosError.response?.data?.error_description ? `Description: ${axiosError.response?.data?.error_description}` : undefined
            )

            
            .
        }

        // Generic error HTML page
        const errorHtml = generateErrorPage(
            'An unexpected error occurred',
            'Please try again later.',
            error instanceof Error ? error.message : 'Unknown error'
        )

        
        .
    }
})

// Refresh OAuth2 access token
 => {
    try {
        const { credentialId } = req.params

        
        

        const credential = await credentialRepository.findOneBy({
            id: credentialId
        })

         {
            .json({
                success: false,
                message: 'Credential not found'
            })
        }

        

        const { clientId, clientSecret, refresh_token, accessTokenUrl, scope } = decryptedData

         {
            .json({
                success: false,
                message: 'Missing required OAuth configuration: clientId, clientSecret, or refresh_token'
            })
        }

        let tokenUrl = accessTokenUrl
         {
            .json({
                success: false,
                message: 'No Access Token URL specified in credential data'
            })
        }

        const refreshRequestData: any = {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'refresh_token',
            refresh_token
        }

         {
            refreshRequestData.scope = scope
        }

        .t, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        })

        // Extract token data from response
        const tokenData = tokenResponse.data

        // Update the credential data with new token information
        const updatedCredentialData: any = {
            ...decryptedData,
            ...tokenData,
            t.t
        }

        // Update refresh token if a new one was provided
         {
            updatedCredentialData.refresh_token = tokenData.refresh_token
        }

        // Calculate token expiry time
         {
             + t
            up
        }

        // Encrypt the updated credential data
        

        // Update the credential in the database
        await credentialRepository.update(credential.id, {
            encryptedData,
            up
        })

        // Return success response
        res.json({
            success: true,
            message: 'OAuth2 token refreshed successfully',
            credentialId: credential.id,
            tokenInfo: {
                ...tokenData,
                has_new_refresh_token: !!tokenData.refresh_token,
                expires_at: updatedCredentialData.expires_at
            }
        })
    }  {
        ) {
            const axiosError = error
            .json({
                success: false,
                message: `Token refresh failed: ${axiosError.response?.data?.error_description || axiosError.message}`,
                details: axiosError.response?.data
            })
        }

        next(
            new InternalFlowiseError(
                StatusCodes.INTERNAL_SERVER_ERROR,
                `OAuth2 token refresh error: ${error instanceof Error ? error.message : 'Unknown error'}`
            )
        )
    }
})

export default router
