import bcrypt from 'bcryptjs'
import { StatusCodes } from 'http-status-codes'
import moment from 'moment'
import { DataSource, QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { IdentityManager } from '../../IdentityManager'
import { Platform, UserPlan } from '../../Interface'
import { GeneralErrorMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { checkUsageLimit } from '../../utils/quotaUsage'
import { OrganizationUser, OrganizationUserStatus } from '../database/entities/organization-user.entity'
import { Organization, OrganizationName } from '../database/entities/organization.entity'
import { GeneralRole, Role } from '../database/entities/role.entity'
import { User, UserStatus } from '../database/entities/user.entity'
import { WorkspaceUser, WorkspaceUserStatus } from '../database/entities/workspace-user.entity'
import { Workspace, WorkspaceName } from '../database/entities/workspace.entity'
import { LoggedInUser, LoginActivityCode } from '../Interface.Enterprise'
import { compareHash } from '../utils/encryption.util'
import { sendPasswordResetEmail, sendVerificationEmailForCloud, sendWorkspaceAdd, sendWorkspaceInvite } from '../utils/sendEmail'
import { generateTempToken } from '../utils/tempTokenUtils'
import auditService from './audit'
import { OrganizationUserErrorMessage, OrganizationUserService } from './organization-user.service'
import { OrganizationErrorMessage, OrganizationService } from './organization.service'
import { RoleErrorMessage, RoleService } from './role.service'
import { UserErrorMessage, UserService } from './user.service'
import { WorkspaceUserErrorMessage, WorkspaceUserService } from './workspace-user.service'
import { WorkspaceErrorMessage, WorkspaceService } from './workspace.service'

type AccountDTO = {
    user: Partial<User>
    organization: Partial<Organization>
    organizationUser: Partial<OrganizationUser>
    workspace: Partial<Workspace>
    workspaceUser: Partial<WorkspaceUser>
    role: Partial<Role>
}

export class AccountService {
    private dataSource: DataSource
    private userService: UserService
    private organizationservice: OrganizationService
    private workspaceService: WorkspaceService
    private roleService: RoleService
    private organizationUserService: OrganizationUserService
    private workspaceUserService: WorkspaceUserService
    private identityManager: IdentityManager

     {
        
        this.dataSource = appServer.AppDataSource
        th
        th
        th
        th
        th
        th
        this.identityManager = appServer.identityManager
    }

    p {
        data.organization = data.organization || {}
        data.organizationUser = data.organizationUser || {}
        data.workspace = data.workspace || {}
        data.workspaceUser = data.workspaceUser || {}
        data.role = data.role || {}

        return data
    }

    publ {
        
        awa
        try {
            awa

            
             th
            
                th

             th

            const updateUserData: Partial<User> = {}
            up
            
             : 24
            t + exp
            updateUserData.tokenExpiry = tokenExpiry

            // Update user with new token and expiry
            
            awa

            // resend invite
            const verificationLink = `${process.env.APP_URL}/verify?token=${updateUserData.tempToken}`
            awa

            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }
    }

    p {
        
         th
    }

    p {
        

        

         {
            case Platform.OPEN_SOURCE:
                awa
                data.organization.name = OrganizationName.DEFAULT_ORGANIZATION
                
                data.workspace.name = WorkspaceName.DEFAULT_WORKSPACE
                data.workspaceUser.role = data.organizationUser.role
                data.user.status = UserStatus.ACTIVE
                
                break
            case Platform.CLOUD: {
                
                )
                    th

                 th
                const { customerId, subscriptionId } = await this.identityManager.createStripeUserAndSubscribe({
                    email: data.user.email,
                    userPlan: UserPlan.FREE,
                    // @ts-ignore
                    referral: data.user.referral || ''
                })
                data.organization.customerId = customerId
                data.organization.subscriptionId = subscriptionId

                // if credential exists then the user is signing up with email/password
                // if not then the user is signing up with oauth/sso
                 {
                    data.user.status = UserStatus.UNVERIFIED
                    
                    
                     : 24
                    t + exp
                    data.user.tokenExpiry = tokenExpiry
                } else {
                    data.user.status = UserStatus.ACTIVE
                    data.user.tempToken = ''
                    data.user.tokenExpiry = null
                }
                data.organization.name = OrganizationName.DEFAULT_ORGANIZATION
                
                data.workspace.name = WorkspaceName.DEFAULT_WORKSPACE
                data.workspaceUser.role = data.organizationUser.role
                 {
                    
                } else {
                     
                    data.user.updatedBy = user.id
                    
                }
                // send verification email only if user signed up with email/password
                 {
                    const verificationLink = `${process.env.APP_URL}/verify?token=${data.user.tempToken}`
                    awa
                }
                break
            }
            case Platform.ENTERPRISE: {
                 {
                    
                     th
                    
                        th
                    const name = data.user.name
                     u
                    data.user = user
                    
                    
                        th
                    const assignedOrganization = await this.organizationservice.readOrganizationById(
                        organizationUser[0].organizationId,
                        queryRunner
                    )
                    
                        th
                    data.organization = assignedOrganization
                    
                    
                     th
                    data.user.tempToken = ''
                    data.user.tokenExpiry = null
                    data.user.name = name
                    data.user.status = UserStatus.ACTIVE
                    data.organizationUser.status = OrganizationUserStatus.ACTIVE
                    
                    data.workspace.name = WorkspaceName.DEFAULT_PERSONAL_WORKSPACE
                    
                } else {
                    awa
                    
                    data.workspace.name = WorkspaceName.DEFAULT_WORKSPACE
                    data.workspaceUser.role = data.organizationUser.role
                    data.user.status = UserStatus.ACTIVE
                    
                }
                break
            }
            default:
                th
        }

         {
            data.organization.createdBy = data.user.createdBy
            
        }
        data.organizationUser.organizationId = data.organization.id
        data.organizationUser.userId = data.user.id
        data.organizationUser.createdBy = data.user.createdBy
        
        data.workspace.organizationId = data.organization.id
        data.workspace.createdBy = data.user.createdBy
        
        data.workspaceUser.workspaceId = data.workspace.id
        data.workspaceUser.userId = data.user.id
        data.workspaceUser.createdBy = data.user.createdBy
        data.workspaceUser.status = WorkspaceUserStatus.ACTIVE
        

        return data
    }

    p {
        
        awa
        
        

        try {
            

            awa
            
            
            
            
            
            if (
                data.workspace.id &&
                (platf &&
                ownerRole.id === data.organizationUser.roleId
            ) {
                awa
            }
            awa

            delete data.user.credential
            delete data.user.tempToken
            delete data.user.tokenExpiry

            return data
        }  {
             awa
            throw error
        } finally {
             awa
        }
    }

    publ {
        
    }

    p {
        
        
        awa

        try {
            
             th
            data.workspace = workspace

            
            const subscriptionId = currentUser?.activeOrganizationSubscriptionId || ''

            
             th
            data.role = role
            
             {
                awa.u

                // generate a temporary token
                
                
                // set expiry based on env setting and fallback to 24 hours
                 : 24
                t + exp
                data.user.tokenExpiry = tokenExpiry
                data.user.status = UserStatus.INVITED
                // send invite
                const registerLink =
                    th === Platform.ENTERPRISE
                        ? `${process.env.APP_URL}/register?token=${data.user.tempToken}`
                        : `${process.env.APP_URL}/register`
                awa)
                

                data.organizationUser.organizationId = data.workspace.organizationId
                data.organizationUser.userId = data.user.id
                
                data.organizationUser.roleId = roleMember.id
                data.organizationUser.createdBy = data.user.createdBy
                data.organizationUser.status = OrganizationUserStatus.INVITED
                

                workspace.updatedBy = data.user.createdBy

                data.workspaceUser.workspaceId = data.workspace.id
                data.workspaceUser.userId = data.user.id
                data.workspaceUser.roleId = data.role.id
                data.workspaceUser.createdBy = data.user.createdBy
                data.workspaceUser.status = WorkspaceUserStatus.INVITED
                

                awa
                
                awa
                
                
                
                awa
                delete data.user.credential
                delete data.user.tempToken
                delete data.user.tokenExpiry

                return data
            }
            const { organizationUser } = await this.organizationUserService.readOrganizationUserByOrganizationIdUserId(
                data.workspace.organizationId,
                user.id,
                queryRunner
            )
             {
                awa.u
                data.organizationUser.organizationId = data.workspace.organizationId
                data.organizationUser.userId = user.id
                
                data.organizationUser.roleId = roleMember.id
                data.organizationUser.createdBy = data.user.createdBy
                data.organizationUser.status = OrganizationUserStatus.INVITED
                
            } else {
                data.organizationUser = organizationUser
            }

            let oldWorkspaceUser
             {
                const workspaceUser = await this.workspaceUserService.readWorkspaceUserByOrganizationIdUserId(
                    data.workspace.organizationId,
                    user.id,
                    queryRunner
                )
                let registerLink: string
                 === Platf {
                    data.user = user
                    
                    
                     : 24
                    t + exp
                    data.user.tokenExpiry = tokenExpiry
                    awa
                    registerLink = `${process.env.APP_URL}/register?token=${data.user.tempToken}`
                } else {
                    registerLink = `${process.env.APP_URL}/register`
                }
                 {
                    oldWorkspaceUser = workspaceUser[0]
                     {
                        await sendWorkspaceInvite(
                            data.user.email!,
                            data.workspace.name!,
                            registerLink,
                            th
                        )
                    } else {
                        await sendWorkspaceInvite(
                            data.user.email!,
                            data.workspace.name!,
                            registerLink,
                            th,
                            'update'
                        )
                    }
                } else {
                    awa)
                }
            } else {
                data.organizationUser.updatedBy = data.user.createdBy

                const dashboardLink = `${process.env.APP_URL}`
                awa
            }

            workspace.updatedBy = data.user.createdBy

            data.workspaceUser.workspaceId = data.workspace.id
            data.workspaceUser.userId = user.id
            data.workspaceUser.roleId = data.role.id
            data.workspaceUser.createdBy = data.user.createdBy
            data.workspaceUser.status = WorkspaceUserStatus.INVITED
            

            
             {
                awa
            }

            awa
            
            awa
            
            
            awa

            return data
        }  {
             awa
            throw error
        } finally {
             awa
        }
    }

    publ {
        
    }

    publ {
        
        
        awa
        
        try {
             {
                awa
                th
            }
            
             {
                awa
                th
            }
             {
                awa
                th
            }
            ) {
                awa
                th
            }
             {
                awa
                th
            }
            let w
            ) {
                 {
                    wsUserOrUsers = wsUserOrUsers[0]
                } else {
                    awa
                    th
                }
            }
             {
                awa
            }
            return { user, workspaceDetails: wsUserOrUsers }
        } finally {
            awa
        }
    }

    publ {
        
        
        awa
        try {
            awa
             th
            
             th
            data.user = user
            data.user.tempToken = ''
            data.user.tokenExpiry = null
            data.user.status = UserStatus.ACTIVE
            
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return data
    }

    publ {
        
        
        awa
        try {
            awa
            
             th

            data.user = user
            
            
            const expiryInMins = process.env.PASSWORD_RESET_TOKEN_EXPIRY_IN_MINUTES
                ? pa
                : 15
            t + exp
            data.user.tokenExpiry = tokenExpiry
            
            const resetLink = `${process.env.APP_URL}/reset-password?token=${data.user.tempToken}`
            awa
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return data
    }

    publ {
        
        
        awa
        try {
            
             th
            
                th

            const tokenExpiry = user.tokenExpiry
            
            const expiryInMins = process.env.PASSWORD_RESET_TOKEN_EXPIRY_IN_MINUTES
                ? pa
                : 15
            
             > exp th

            // all checks are done, now update the user password, don't forget to hash it and do not forget to clear the temp token
            // leave the user status and other details as is
            )
            // @ts-ignore
            
            data.user = user
            data.user.credential = hash
            data.user.tempToken = ''
            data.user.tokenExpiry = undefined
            data.user.status = UserStatus.ACTIVE

            awa
            
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return data
    }

    publ {
        
         {
            await auditService.recordLoginActivity(
                user.email,
                LoginActivityCode.LOGOUT_SUCCESS,
                'Logout Success',
                user.ssoToken ? 'SSO' : 'Email/Password'
            )
        }
    }
}
