import express, { Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import http from 'http'
import cookieParser from 'cookie-parser'
import { DataSource, IsNull } from 'typeorm'
import { MODE, Platform } from './Interface'
import { getNodeModulesPackagePath, getEncryptionKey } from './utils'
import logger, { expressRequestLogger } from './utils/logger'
import { getDataSource } from './DataSource'
import { NodesPool } from './NodesPool'
import { ChatFlow } from './database/entities/ChatFlow'
import { CachePool } from './CachePool'
import { AbortControllerPool } from './AbortControllerPool'
import { RateLimiterManager } from './utils/rateLimit'
import { getAllowedIframeOrigins, getCorsOptions, sanitizeMiddleware } from './utils/XSS'
import { Telemetry } from './utils/telemetry'
import flowiseApiV1Router from './routes'
import errorHandlerMiddleware from './middlewares/errors'
import { WHITELIST_URLS } from './utils/constants'
import { initializeJwtCookieMiddleware, verifyToken } from './enterprise/middleware/passport'
import { IdentityManager } from './IdentityManager'
import { SSEStreamer } from './utils/SSEStreamer'
import { validateAPIKey } from './utils/validateKey'
import { LoggedInUser } from './enterprise/Interface.Enterprise'
import { IMetricsProvider } from './Interface.Metrics'
import { Prometheus } from './metrics/Prometheus'
import { OpenTelemetry } from './metrics/OpenTelemetry'
import { QueueManager } from './queue/QueueManager'
import { RedisEventSubscriber } from './queue/RedisEventSubscriber'
import 'global-agent/bootstrap'
import { UsageCacheManager } from './UsageCacheManager'
import { Workspace } from './enterprise/database/entities/workspace.entity'
import { Organization } from './enterprise/database/entities/organization.entity'
import { GeneralRole, Role } from './enterprise/database/entities/role.entity'
import { migrateApiKeysFromJsonToDb } from './utils/apiKey'
import { ExpressAdapter } from '@bull-board/express'

declare global {
    namespace Express {
        interface User extends LoggedInUser {}
        interface Request {
            user?: LoggedInUser
        }
        namespace Multer {
            interface File {
                bucket: string
                key: string
                acl: string
                contentType: string
                contentDisposition: null
                storageClass: string
                serverSideEncryption: null
                metadata: any
                location: string
                etag: string
            }
        }
    }
}

export class App {
    app: express.Application
    nodesPool: NodesPool
    abortControllerPool: AbortControllerPool
    cachePool: CachePool
    telemetry: Telemetry
    rateLimiterManager: RateLimiterManager
    App
    sseStreamer: SSEStreamer
    identityManager: IdentityManager
    metricsProvider: IMetricsProvider
    queueManager: QueueManager
    redisSubscriber: RedisEventSubscriber
    usageCacheManager: UsageCacheManager

     {
        th
    }

    a {
        // Initialize database
        try {
            awa
            l

            // Run Migrations Scripts
            awa
            l

            // Initialize Identity Manager
            th
            l

            // Initialize nodes pool
            th
            awa
            l

            // Initialize abort controllers pool
            th
            l

            // Initialize encryption key
            awa
            l

            // Initialize Rate Limit
            th
            awa.getRep.f)
            l

            // Initialize cache pool
            th
            l

            // Initialize usage cache manager
            th
            l

            // Initialize telemetry
            th
            l

            // Initialize SSE Streamer
            th
            l

            // Init Queues
             {
                th
                
                
                this.queueManager.setupAllQueues({
                    componentNodes: this.nodesPool.componentNodes,
                    telemetry: this.telemetry,
                    cachePool: this.cachePool,
                    appDataSource: this.AppDataSource,
                    abortControllerPool: this.abortControllerPool,
                    usageCacheManager: this.usageCacheManager,
                    serverAdapter
                })
                l

                th
                awa
                l
            }

            // TODO: Remove this by end of 2025
            awa)

            l
        }  {
            l
        }
    }

    a {
        // Limit is needed to allow sending/receiving base64 encoded string
        const flowise_file_size_limit = process.env.FLOWISE_FILE_SIZE_LIMIT || '50mb'
        th)
        th)

        // Enhanced trust proxy settings for load balancer
        th // Trust all proxies

        // Allow access from specified domains
        th))

        // Parse cookies
        th)

        // Allow embedding from specified domains.
        th => {
            
             {
                next()
            } else {
                const csp = `frame-ancestors ${allowedOrigins}`
                
                next()
            }
        })

        // Switch off the default 'X-Powered-By: Express' header
        th

        // Add the expressRequestLogger middleware to log all requests
        th

        // Add the sanitizeMiddleware to guard against XSS
        th

        th => {
             // All
             next()
        })

         : []
         => )
        const URL_CASE_INSENSITIVE_REGEX: RegExp = /\/api\/v1\//i
        const URL_CASE_SENSITIVE_REGEX: RegExp = /\/api\/v1\//

        awa

        th => {
            // Step 1: Check if the req path contains /api/v1 regardless of case
            ) {
                // Step 2: Check if the req path is casesensitive
                ) {
                    // Step 3: Check if the req path is in the whitelist
                     => )
                     {
                        next()
                    } el {
                        ve
                    } else {
                        // Only check license validity for non-open-source platforms
                          {
                            ) {
                                .j
                            }
                        }

                        
                         {
                            .j
                        }

                        // Find workspace
                        .findOne({
                            where: { id: apiKeyWorkSpaceId }
                        })
                         {
                            .j
                        }

                        // Find owner role
                        .findOne({
                            whe }
                        })
                         {
                            .j
                        }

                        // Find organization
                        const activeOrganizationId = workspace.organizationId as string
                        .findOne({
                            where: { id: activeOrganizationId }
                        })
                         {
                            .j
                        }
                        const subscriptionId = org.subscriptionId as string
                        const customerId = org.customerId as string
                        
                        

                        // @ts-ignore
                        req.user = {
                            pe],
                            features,
                            activeOrganizationId: activeOrganizationId,
                            activeOrganizationSubscriptionId: subscriptionId,
                            activeOrganizationCustomerId: customerId,
                            activeOrganizationProductId: productId,
                            isOrganizationAdmin: true,
                            activeWorkspaceId: apiKeyWorkSpaceId!,
                            activeWorkspace: workspace.name,
                            isApiKeyValidated: true
                        }
                        next()
                    }
                } else {
                    .j
                }
            } else {
                // If the req path does not contain /api/v1, then allow the request to pass through, example: /assets, /canvas
                next()
            }
        })

        // this is for SSO and must be after the JWT cookie middleware
        awa

         {
             {
                // default to prometheus
                case 'prometheus':
                case undefined:
                    th
                    break
                case 'open_telemetry':
                    th
                    break
                // add more cases for other metrics providers here
            }
             {
                awa
                l}] ha
            } else {
                logger.error(
                    "❌ [server]: Metrics collection is enabled, but failed to initialize provider (valid values are 'prometheus' or 'open_telemetry'."
                )
            }
        }

        th

        // ----------------------------------------
        // Configure number of proxies in Host Environment
        // ----------------------------------------
        th => {
            response.send({
                ip: request.ip,
                m, then the number of proxies is correct and the rate limiter should now work correctly. If not, increase the number of proxies by 1 and restart Cloud-Hosted Flowise until the IP address matches your own. Visit https://docs.flowise-ai.github.io/configuration/rate-limit#cloud-hosted-rate-limit-setup-guide for more information.'
            })
        })

        ) {
            th)
        }

        // ----------------------------------------
        // Serve UI static
        // ----------------------------------------

        
        
        

        th)

        // All other requests not handled will return React app
        th => {
            
        })

        // Error handling
        th
    }

    a {
        try {
            const removePromises: any[] = []
            )
             {
                )
            }
            awa
        }  {
            l
        }
    }
}

let serverApp: App | undefined

exp: Promise<void> {
    

    const host = process.env.HOST
     || 3000
    

    awa
    awa

     => {
        l
    })
}

exp: App | undefined {
    return serverApp
}
