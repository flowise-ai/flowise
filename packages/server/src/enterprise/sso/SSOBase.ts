// SSOBase.ts
import express from 'express'
import passport from 'passport'
import { IAssignedWorkspace, LoggedInUser } from '../Interface.Enterprise'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { UserErrorMessage, UserService } from '../services/user.service'
import { WorkspaceUserService } from '../services/workspace-user.service'
import { AccountService } from '../services/account.service'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { OrganizationService } from '../services/organization.service'
import { GeneralRole } from '../database/entities/role.entity'
import { RoleErrorMessage, RoleService } from '../services/role.service'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { Platform } from '../../Interface'
import { UserStatus } from '../database/entities/user.entity'

abstract class SSOBase {
    protected app: express.Application
    protected ssoConfig: any

     {
        this.app = app
        this.ssoConfig = ssoConfig
    }

     {
        this.ssoConfig = ssoConfig
    }

    getSSOC {
        return this.ssoConfig
    }

    ab: string
    ab: void
    ab: Promise<{ [key: string]: any }>
    async verifyAndLogin(
        app: express.Application,
        email: string,
         => void,
        profile: passport.Profile,
        accessToken: string | object,
        refreshToken: string
    ) {
        let queryRunner
        
        try {
            que.App
            awa

            
            
            

            let u
            let wu: any = {}

             {
                // In ENTERPRISE mode, we don't want to create a new user if the user is not found
                . === Platf {
                    th
                }
                // no user found, register the user
                const data: any = {
                    user: {
                        email: email,
                        name: profile.displayName || email,
                        status: UserStatus.ACTIVE,
                        credential: undefined
                    }
                }
                . === Platf {
                    
                    
                    wu = newAccount.workspaceUser
                    wu.workspace = newAccount.workspace
                    user = newAccount.user
                }
            } else {
                 {
                    const data: any = {
                        user: {
                            ...user,
                            email,
                            name: profile.displayName || '',
                            status: UserStatus.ACTIVE,
                            credential: undefined
                        }
                    }
                    
                    
                    user = newAccount.user
                }
                let w
                wu = A && w
            }

            const workspaceUser = wu as WorkspaceUser
            let 
            
            
             th

            
             => {
                return {
                    id: workspaceUser.workspace.id,
                    name: workspaceUser.workspace.name,
                    role: workspaceUser.role?.name,
                    organizationId: workspaceUser.workspace.organizationId
                } as IAssignedWorkspace
            })

            
             th
            const subscriptionId = organization.subscriptionId as string
            const customerId = organization.customerId as string
            .
            .

            const loggedInUser: LoggedInUser = {
                id: workspaceUser.userId,
                email: user?.email || '',
                name: user?.name || '',
                roleId: workspaceUser.roleId,
                activeOrganizationId: organization.id,
                activeOrganizationSubscriptionId: subscriptionId,
                activeOrganizationCustomerId: customerId,
                activeOrganizationProductId: productId,
                isOrganizationAdmin: workspaceUser.roleId === ownerRole?.id,
                activeWorkspaceId: workspaceUser.workspaceId,
                activeWorkspace: workspaceUser.workspace.name,
                assignedWorkspaces,
                isApiKeyValidated: true,
                ssoToken: accessToken as string,
                ssoRefreshToken: refreshToken,
                ssoProvider: ssoProviderName,
                pe],
                features
            }
            
        }  {
            return done(
                { name: 'SSO_LOGIN_FAILED', message: ssoProviderName + ' Login failed! Please contact your administrator.' },
                undefined
            )
        } finally {
             awa
        }
    }
}

export default SSOBase
