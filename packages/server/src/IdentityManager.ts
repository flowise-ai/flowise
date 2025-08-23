/**
 * C 2023-present FlowiseAI, Inc.
 *
 * The Ente.
 * Unauthorized copying, modification, distribution, or use of the Enterprise and Cloud versions is strictly prohibited without a valid license agreement from FlowiseAI, Inc.
 *
 * The Open S
 *
 * For information about licensing of the Enterprise and Cloud versions, please contact:
 * security@flowise-ai.github.io
 */

import axios from 'axios'
import express, { Application, NextFunction, Request, Response } from 'express'
import * as fs from 'fs'
import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import path from 'path'
import { LoginMethodStatus } from './enterprise/database/entities/login-method.entity'
import { ErrorMessage, LoggedInUser } from './enterprise/Interface.Enterprise'
import { Permissions } from './enterprise/rbac/Permissions'
import { LoginMethodService } from './enterprise/services/login-method.service'
import { OrganizationService } from './enterprise/services/organization.service'
import Auth0SSO from './enterprise/sso/Auth0SSO'
import AzureSSO from './enterprise/sso/AzureSSO'
import GithubSSO from './enterprise/sso/GithubSSO'
import GoogleSSO from './enterprise/sso/GoogleSSO'
import SSOBase from './enterprise/sso/SSOBase'
import { InternalFlowiseError } from './errors/internalFlowiseError'
import { Platform, UserPlan } from './Interface'
import { StripeManager } from './StripeManager'
import { UsageCacheManager } from './UsageCacheManager'
import { GeneralErrorMessage, LICENSE_QUOTAS } from './utils/constants'
import { getRunningExpressApp } from './utils/getRunningExpressApp'
import { ENTERPRISE_FEATURE_FLAGS } from './utils/quotaUsage'
import Stripe from 'stripe'

const allSSOProviders = ['azure', 'google', 'auth0', 'github']
export class IdentityManager {
    private static instance: IdentityManager
    private stripeManager?: StripeManager
    licenseValid: boolean = false
    permissions: Permissions
    ssoProviderName: string = ''
    currentInstancePlatform: Platform = Platform.OPEN_SOURCE
    // create a map to store the sso provider name and the sso provider instance
    

    publ: Promise<IdentityManager> {
         {
            I
            awa
        }
        return IdentityManager.instance
    }

    publ {
        awa
        th
         {
            th
        }
    }

    publ => {
        return this.currentInstancePlatform
    }

    publ => {
        return this.permissions
    }

    publ => {
        return this.currentInstancePlatform === Platform.ENTERPRISE
    }

    publ => {
        return this.currentInstancePlatform === Platform.CLOUD
    }

    publ => {
        return this.currentInstancePlatform === Platform.OPEN_SOURCE
    }

    publ => {
        return this.licenseValid
    }

    p: any {
        try {
            , 'utf8')
            const decoded = jwt.verify(licenseKey, publicKey, {
                algorithms: ['RS256']
            })
            return decoded
        }  {
            
            return null
        }
    }

    p => {
        const LICENSE_URL = process.env.LICENSE_URL
        const FLOWISE_EE_LICENSE_KEY = process.env.FLOWISE_EE_LICENSE_KEY

        // First check if license key is missing
         {
            this.licenseValid = false
            this.currentInstancePlatform = Platform.OPEN_SOURCE
            return
        }

        try {
             {
                

                 {
                    this.licenseValid = false
                } else {
                    const issuedAtSeconds = decodedLicense.iat
                     {
                        this.licenseValid = false
                    } else {
                        
                        const expiryDurationInMonths = decodedLicense.expiryDurationInMonths || 0

                        
                        exp + exp

                         > exp {
                            this.licenseValid = false
                        } else {
                            this.licenseValid = true
                        }
                    }
                }
                this.currentInstancePlatform = Platform.ENTERPRISE
            } el {
                try {
                    
                    this.licenseValid = response.data?.valid

                    ) this.currentInstancePlatform = Platform.ENTERPRISE
                    el) this.currentInstancePlatform = Platform.ENTERPRISE
                    el) this.currentInstancePlatform = response.data?.platform
                    el
                }  {
                    
                    this.licenseValid = false
                    this.currentInstancePlatform = Platform.ENTERPRISE
                    return
                }
            }
        }  {
            this.licenseValid = false
        }
    }

    publ => {
         === Platf === Platf {
            
            let queryRunner
            try {
                que.App
                awa
                let organizationId = undefined
                 === Platf {
                    
                    
                     {
                        organizationId = organizations[0].id
                    } else {
                        th
                        return
                    }
                }
                
                 {
                    f {
                         {
                            meth)
                            th
                        }
                    }
                }
            } finally {
                 awa
            }
        }
        // iterate through the remaining providers and initialize them with configEnabled as false
        th
    }

     {
        allSSOP => {
            ) {
                th
            }
        })
    }

     {
        ) {
            
             {
                 {
                    p
                    p
                } else {
                    // if false, disable the provider
                    p
                }
            }
        } else {
             {
                case 'azure': {
                    
                    azu
                    th
                    break
                }
                case 'google': {
                    
                    g
                    th
                    break
                }
                case 'auth0': {
                    
                    auth0SSO.
                    th
                    break
                }
                case 'github': {
                    
                    g
                    th
                    break
                }
                default:
                    th
            }
        }
    }

    a {
        ) {
            th
        }
         a.
    }

    publ {
         return ''
         {
            th
        }
        
    }

    publ {
        ) {
            const features: Record<string, string> = {}
            f {
                features[feature] = 'true'
            }
            return features
        } el) {
             {
                return {}
            }
            
        }
        return {}
    }

    publ {
         => {
            const user = req.user
             {
                .length === 0) {
                    .j
                }
                . && u {
                    
                }
            }
            .j
        }
    }

    publ {
         {
            th
        }
        
    }

    publ {
         return {}
         {
            th
        }
        
    }

    publ {
         return
         {
            th
        }
        
    }

    publ {
         return {}
         {
            th
        }
        
    }

    publ {
         return {}

         {
            th
        }
        

        // Fetch product details to get quotas
        const items = subscription.items.data
         {
            th
        }

        const productId = items[0].price.product as string
        .p
        const productMetadata = product.metadata

        // Extract quotas from metadata
        const quotas: Record<string, number> = {}
        f {
            ) {
                qu
            }
        }
        quotas[LICENSE_QUOTAS.ADDITIONAL_SEATS_LIMIT] = quantity

        // Get features from Stripe
        

        // Update the cache with new subscription data including quotas
        
        await cacheManager.updateSubscriptionDataToCache(subscriptionId, {
            features,
            quotas,
            
        })

        return { success, subscription, invoice }
    }

    publ {
         return {}

         {
            th
        }
        
    }

    publ {
         return {}

         {
            th
        }
         {
            th
        }
        
         {
            // Fetch product details to get quotas
            .p
            const productMetadata = product.metadata

            // Extract quotas from metadata
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

            // Get features from Stripe
            

            // Update the cache with new subscription data including quotas
            

            const updateCacheData: Record<string, any> = {
                features,
                quotas,
                
            }

            if (
                newPlanId === process.env.CLOUD_FREE_ID ||
                newPlanId === process.env.CLOUD_STARTER_ID ||
                newPlanId === process.env.CLOUD_PRO_ID
            ) {
                updateCacheData.productId = newPlanId
            }

            awa

            const loggedInUser: LoggedInUser = {
                ...req.user,
                activeOrganizationSubscriptionId: subscription.id,
                features
            }

            if (
                newPlanId === process.env.CLOUD_FREE_ID ||
                newPlanId === process.env.CLOUD_STARTER_ID ||
                newPlanId === process.env.CLOUD_PRO_ID
            ) {
                loggedInUser.activeOrganizationProductId = newPlanId
            }

            req.user = {
                ...req.user,
                ...loggedInUser
            }

            // Update passport session
            // @ts-ignore
            req.session.passport.user = {
                ...req.user,
                ...loggedInUser
            }

             => {
                 th
            })

            return {
                status: 'success',
                user: loggedInUser
            }
        }
        return {
            status: 'error',
            message: 'Payment or subscription update not completed'
        }
    }

    publ {
         {
            th
        }

        try {
            // Create a customer in Stripe
            let customer: Stripe.Response<Stripe.Customer>
             {
                .customers.create({
                    email: email,
                    metadata: {
                        referral
                    }
                })
            } else {
                .customers.create({
                    email: email
                })
            }

            let productId = ''
             {
                case UserPlan.STARTER:
                    productId = process.env.CLOUD_STARTER_ID as string
                    break
                case UserPlan.PRO:
                    productId = process.env.CLOUD_PRO_ID as string
                    break
                case UserPlan.FREE:
                    productId = process.env.CLOUD_FREE_ID as string
                    break
            }

            // Get the default price ID for the product
            .prices.list({
                product: productId,
                active: true,
                limit: 1
            })

             {
                th
            }

            // Create the subscription
            .subscriptions.create({
                customer: customer.id,
                items: [{ price: prices.data[0].id }]
            })

            return {
                customerId: customer.id,
                subscriptionId: subscription.id
            }
        }  {
            
            throw error
        }
    }
}
