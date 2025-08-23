import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralErrorMessage } from '../../utils/constants'
import { checkUsageLimit } from '../../utils/quotaUsage'
import { OrganizationUser } from '../database/entities/organization-user.entity'
import { Organization } from '../database/entities/organization.entity'

type OrganizationUserQuery = Partial<Pick<OrganizationUser, 'organizationId' | 'userId' | 'roleId'>>

import { QueryRunner } from 'typeorm'
import { Platform } from '../../Interface'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { GeneralRole } from '../database/entities/role.entity'
import { User, UserStatus } from '../database/entities/user.entity'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { OrganizationUserService } from '../services/organization-user.service'
import { RoleService } from '../services/role.service'
import { WorkspaceService } from '../services/workspace.service'

export class OrganizationUserController {
    publ {
        try {
            
            
            const subscriptionId = req.user?.activeOrganizationSubscriptionId || ''
            awa.u
            
            .j
        }  {
            next(e
        }
    }

    publ {
        let queryRunner
        try {
            que.App
            awa
            const query = req.query as OrganizationUserQuery
            

            let organizationUser:
                | {
                      organization: Organization
                      organizationUser: OrganizationUser | null
                  }
                | OrganizationUser
                | null
                | OrganizationUser[]
                | (OrganizationUser & {
                      roleCount: number
                  })[]
             {
                organizationUser = await organizationUserservice.readOrganizationUserByOrganizationIdUserId(
                    query.organizationId,
                    query.userId,
                    queryRunner
                )
            } el {
                organizationUser = await organizationUserservice.readOrganizationUserByOrganizationIdRoleId(
                    query.organizationId,
                    query.roleId,
                    queryRunner
                )
            } el {
                
            } el {
                
            } else {
                th
            }

            .j
        }  {
            next(e
        } finally {
             awa
        }
    }

    publ {
        try {
            
            
            .j
        }  {
            next(e
        }
    }

    publ {
        let queryRunner: QueryRunner | undefined
        try {
            que.App
            .
            awa
            const query = req.query as Partial<OrganizationUser>
             {
                th
            }
             {
                th
            }

            
            
            

            let organizationUser: OrganizationUser
            awa
             {
                
                const personalWorkspaces = await queryRunner.manager.findBy(WorkspaceUser, {
                    userId: query.userId,
                    roleId: personalRole.id
                })
                
                    // delete personal workspace
                    awa
                // remove user from other workspces
                
                // soft delete user because they might workspace might created by them
                
                 th
                deleteUser.name = UserStatus.DELETED
                }@deleted.flowise`
                deleteUser.status = UserStatus.DELETED
                deleteUser.credential = null
                deleteUser.tokenExpiry = null
                deleteUser.tempToken = null
                awa
            } else {
                
            }

            awa
            .j
        }  {
             awa
            next(e
        } finally {
             awa
        }
    }
}
