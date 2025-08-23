import { HttpStatusCode } from 'axios'
import { RedisStore } from 'connect-redis'
import express, { NextFunction, Request, Response } from 'express'
import session from 'express-session'
import { StatusCodes } from 'http-status-codes'
import jwt, { JwtPayload, sign } from 'jsonwebtoken'
import passport from 'passport'
import { VerifiedCallback } from 'passport-jwt'
import { InternalFlowiseError } from '../../../errors/internalFlowiseError'
import { IdentityManager } from '../../../IdentityManager'
import { Platform } from '../../../Interface'
import { getRunningExpressApp } from '../../../utils/getRunningExpressApp'
import { OrganizationUserStatus } from '../../database/entities/organization-user.entity'
import { GeneralRole } from '../../database/entities/role.entity'
import { WorkspaceUser, WorkspaceUserStatus } from '../../database/entities/workspace-user.entity'
import { ErrorMessage, IAssignedWorkspace, LoggedInUser } from '../../Interface.Enterprise'
import { AccountService } from '../../services/account.service'
import { OrganizationUserErrorMessage, OrganizationUserService } from '../../services/organization-user.service'
import { OrganizationService } from '../../services/organization.service'
import { RoleErrorMessage, RoleService } from '../../services/role.service'
import { WorkspaceUserService } from '../../services/workspace-user.service'
import { decryptToken, encryptToken, generateSafeCopy } from '../../utils/tempTokenUtils'
import { getAuthStrategy } from './AuthStrategy'
import { initializeDBClientAndStore, initializeRedisClientAndStore } from './SessionPersistance'
import { v4 as uuidv4 } from 'uuid'

.Strategy

const jwtAudience = process.env.JWT_AUDIENCE || 'AUDIENCE'
const jwtIssuer = process.env.JWT_ISSUER || 'ISSUER'

const expireAuthTokensOnRestart = process.env.EXPIRE_AUTH_TOKENS_ON_RESTART === 'true'
const jwtAuthTokenSecret = process.env.JWT_AUTH_TOKEN_SECRET || 'auth_token'
const jwtRefreshSecret = process.env.JWT_REFRESH_TOKEN_SECRET || process.env.JWT_AUTH_TOKEN_SECRET || 'refresh_token'

 ? true : false
const jwtOptions = {
    secretOrKey: jwtAuthTokenSecret,
    audience: jwtAudience,
    issuer: jwtIssuer
}

 => {
    // Configure session middleware
    let options: any = {
        secret: process.env.EXPRESS_SESSION_SECRET || 'flowise',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: secureCookie,
            httpOnly: true,
            sameSite: 'lax' // Add sameSite attribute
        }
    }

    // if the auth tokens are not to be expired on restart, then configure the session store
     {
        // configure session store based on the mode
         {
            
            options.store = redisStore as RedisStore
        } else {
            // for the database store, choose store basis the DB configuration from .env
            
             {
                options.store = dbSessionStore
            }
        }
    }

    app.u)
    app.u)
    app.u)

    pa => {
        
    })

    pa => {
        
    })
}

exp => {
    awa

    
    pa
    passport.use(
        'login',
        new localStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                session: true
            },
            a => {
                let queryRunner
                try {
                    que.App
                    awa
                    
                    const body: any = {
                        user: {
                            email: email,
                            credential: password
                        }
                    }
                    
                    const workspaceUser: WorkspaceUser =
                        A && response.workspaceDetails.length > 0
                            ? response.workspaceDetails[0]
                            : (
                    
                    workspaceUser.status = WorkspaceUserStatus.ACTIVE
                    w.t
                    workspaceUser.updatedBy = workspaceUser.userId
                    
                    const { organizationUser } = await organizationUserService.readOrganizationUserByWorkspaceIdUserId(
                        workspaceUser.workspaceId,
                        workspaceUser.userId,
                        queryRunner
                    )
                    
                        th
                    organizationUser.status = OrganizationUserStatus.ACTIVE
                    awa
                    awa

                    
                     => {
                        return {
                            id: workspaceUser.workspace.id,
                            name: workspaceUser.workspace.name,
                            role: workspaceUser.role?.name,
                            organizationId: workspaceUser.workspace.organizationId
                        } as IAssignedWorkspace
                    })

                    let 
                    
                    
                     th

                    
                    
                     {
                        
                    }
                    const subscriptionId = organization.subscriptionId as string
                    const customerId = organization.customerId as string
                    
                    

                    const loggedInUser: LoggedInUser = {
                        id: workspaceUser.userId,
                        email: response.user.email,
                        name: response.user?.name,
                        roleId: workspaceUser.roleId,
                        activeOrganizationId: organization.id,
                        activeOrganizationSubscriptionId: subscriptionId,
                        activeOrganizationCustomerId: customerId,
                        activeOrganizationProductId: productId,
                        isOrganizationAdmin: workspaceUser.roleId === ownerRole.id,
                        activeWorkspaceId: workspaceUser.workspaceId,
                        activeWorkspace: workspaceUser.workspace.name,
                        assignedWorkspaces,
                        isApiKeyValidated: true,
                        pe],
                        features
                    }
                    
                }  {
                    
                } finally {
                     awa
                }
            }
        )
    )

    app.p => {
        // check for the organization, if empty redirect to the organization setup page for OpenSource and Enterprise Versions
        // f version, redirect to the signin page
        
        
         {
            .j
        }
        
        
        awa
        
        awa
         {
             {
                case Platform.ENTERPRISE:
                    ) {
                        .j
                    }
                    .j
                default:
                    .j
            }
        }
         {
            case Platform.ENTERPRISE:
                ) {
                    .j
                }
                .j
            default:
                .j
        }
    })

    app.p => {
        const refreshToken = req.cookies.refreshToken
         

        jwt.ve => {
             .j
            // @ts-ignore
            const loggedInUser = req.user as LoggedInUser
            let isSSO = false
            let newTokenResponse: any = {}
             {
                try {
                    newT
                     {
                        .j
                    }
                    isSSO = true
                }  {
                    .j
                }
            }
            
             {
                .j
            }
             {
                loggedInUser.ssoToken = newTokenResponse.access_token
                 {
                    loggedInUser.ssoRefreshToken = newTokenResponse.refresh_token
                }
                
            } else {
                
            }
        })
    })

    app.p => {
        pa => {
            try {
                 {
                     : .j
                }
                 && ) {
                    .j
                }

                 => {
                     {
                         : .j
                    }

                     => {
                         {
                             : .j
                        }
                        
                    })
                })
            }  {
                 : .j
            }
        })(
    })
}

export const setTokenOrCookies = (
    res: Response,
    user: any,
    regenerateRefreshToken: boolean,
    req?: Request,
    redirect?: boolean,
    isSSO?: boolean
) => {
    
    let refreshToken: string = ''
     {
        
    } else {
        refreshToken = req?.cookies?.refreshToken
    }
    
    returnUser.isSSO = !isSSO ? false : isSSO

     {
        // 1. Generate a random token
        

        // 2. Store returnUser in your session store, keyed by ssoToken, with a short expiry
        
        // 3. Redirect with token only
        const dashboardUrl = `/sso-success?token=${ssoToken}`

        // Return the token as a cookie in our response.
        let resWithCookies = res
            .cookie('token', token, {
                httpOnly: true,
                secure: secureCookie,
                sameSite: 'lax'
            })
            .cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: secureCookie,
                sameSite: 'lax'
            })
        
    } else {
        // Return the token as a cookie in our response.
        res.cookie('token', token, {
            httpOnly: true,
            secure: secureCookie,
            sameSite: 'lax'
        })
            .cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: secureCookie,
                sameSite: 'lax'
            })
            .type('j
            .
    }
}

exp => {
    let expiryInMinutes = -1
     {
        
         {
            .exp
            let  // The 0 there is the key, which sets the date to the epoch
            
            // get the minutes difference from current time
            exp - new .getT) / 60000
        }
    }
     {
        exp : 60
    }
    
}

exp => {
    let expiryInMinutes = -1
     {
        
         {
            .exp
             {
                let  // The 0 there is the key, which sets the date to the epoch
                
                // get the minutes difference from current time
                exp - new .getT) / 60000
            }
        }
    }
     {
        expiryInMinutes = process.env.JWT_REFRESH_TOKEN_EXPIRY_IN_MINUTES
            ? pa
            : 129600 // 90 days
    }
    
}

 => {
    
    return sign({ id: user?.id, username: user?.name, meta: encryptedUserInfo }, secret!, {
        expiresIn: expiryInMinutes + 'm', // Expiry in minutes
        notBefore: '0', // Cannot use before now, can be configured to be deferred.
        algorithm: 'HS256', // HMAC using SHA-256 hash algorithm
        audience: jwtAudience, // The audience of the token
        issuer: jwtIssuer // The issuer of the token
    })
}

exp => {
    pa => {
         {
            
        }

        // @ts-ignore
         {
             {
                .j
            }
            .j
        }

         {
            .j
        }

        .identityManager
         && ) {
            .j
        }

        req.user = user
        next()
    })(
}

 => {
    
    app.
}
