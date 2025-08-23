import { StatusCodes } from 'http-status-codes'
import { DataSource, Not, QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralErrorMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { OrganizationUser, OrganizationUserStatus } from '../database/entities/organization-user.entity'
import { Organization } from '../database/entities/organization.entity'
import { GeneralRole } from '../database/entities/role.entity'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { Workspace } from '../database/entities/workspace.entity'
import { OrganizationErrorMessage, OrganizationService } from './organization.service'
import { RoleErrorMessage, RoleService } from './role.service'
import { UserErrorMessage, UserService } from './user.service'
import { WorkspaceUserErrorMessage } from './workspace-user.service'

export const enum OrganizationUserErrorMessage {
    INVALID_ORGANIZATION_USER_SATUS = 'Invalid Organization User Status',
    ORGANIZATION_USER_ALREADY_EXISTS = 'Organization User Already Exists',
    ORGANIZATION_USER_NOT_FOUND = 'Organization User Not Found'
}

export class OrganizationUserService {
    private dataSource: DataSource
    private userService: UserService
    private organizationService: OrganizationService
    private roleService: RoleService

     {
        
        this.dataSource = appServer.AppDataSource
        th
        th
        th
    }

    publ {
        .)
            th
    }

    public async readOrganizationUserByOrganizationIdUserId(
        organizationId: string | undefined,
        userId: string | undefined,
        queryRunner: QueryRunner
    ) {
        
         th
        
         th
        

        const organizationUser = await queryRunner.manager
            .
            .
            .whe
            .an
            .getOne()

        return {
            organization,
            organizationUser: organizationUser
                ? {
                      ...organizationUser,
                      isOrgOwner: organizationUser.roleId === ownerRole?.id
                  }
                : null
        }
    }

    public async readOrganizationUserByWorkspaceIdUserId(
        workspaceId: string | undefined,
        userId: string | undefined,
        queryRunner: QueryRunner
    ) {
        const workspace = await queryRunner.manager
            .
            .
            .
            .
            .whe
            .getOne()
         th
        
    }

    publ {
        
         th
        

        const organizationUsers = await queryRunner.manager
            .
            .
            .
            .whe
            .getMany()

        // Get workspace user last login for all users
        const workspaceUsers = await queryRunner.manager
            .
            .whe', {
                u => u
            })
            .
            .getMany()

         => )

        return await Promise.all(
             => {
                const workspaceUser = await queryRunner.manager.findBy(WorkspaceUser, {
                    userId: organizationUser.userId,
                    workspace: { organizationId: organizationId }
                })
                delete organizationUser.user.credential
                delete organizationUser.user.tempToken
                delete organizationUser.user.tokenExpiry
                return {
                    ...organizationUser,
                    isOrgOwner: organizationUser.roleId === ownerRole?.id,
                    la || null,
                    roleCount: workspaceUser.length
                }
            })
        )
    }

    public async readOrganizationUserByOrganizationIdRoleId(
        organizationId: string | undefined,
        roleId: string | undefined,
        queryRunner: QueryRunner
    ) {
        
         th
        
         th
        

        const orgUsers = await queryRunner.manager
            .
            .
            .
            .whe
            .an
            .getMany()

         => {
            delete organizationUser.user.credential
            delete organizationUser.user.tempToken
            delete organizationUser.user.tokenExpiry
            return {
                ...organizationUser,
                isOrgOwner: organizationUser.roleId === ownerRole?.id
            }
        })
    }

    publ {
        
         th
        

        const orgUsers = await queryRunner.manager
            .
            .
            .whe
            .getMany()

         => ({
            ...user,
            isOrgOwner: user.roleId === ownerRole?.id
        }))

        // loop through organizationUsers, get the organizationId, find the organization user with the ownerRole.id, and get the user's details
        f {
            
             {
                // get the user's name and email
                
                 {
                    user.user = userDetails
                }
            }
        }

        return organizationUsers
    }

    publ: Promise<number> {
        try {
            
            .countBy({
                organizationId
            })
            return dbResponse
        }  {
            th
        }
    }

    publ {
         th
        data.updatedBy = data.createdBy

        
    }

    publ {
        
    }

    publ {
        
        awa

        const { organization, organizationUser } = await this.readOrganizationUserByOrganizationIdUserId(
            data.organizationId,
            data.userId,
            queryRunner
        )
        
            th
        
         th
        
         th

        let newO
        organization.updatedBy = data.createdBy
        try {
            awa
            newO
            awa
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return newOrganizationUser
    }

    publ {
        
        awa

        
         th

        let newO

        
         th
        let newOrganizationUser: Partial<OrganizationUser> = {
            organizationId: newOrganization.id,
            userId: user.id,
            roleId: role.id,
            createdBy: user.id
        }
        newO
        try {
            awa
            newO
            awa
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return newOrganization
    }

    publ {
        
        awa

        const { organizationUser } = await this.readOrganizationUserByOrganizationIdUserId(
            newOrganizationUser.organizationId,
            newOrganizationUser.userId,
            queryRunner
        )
        
            th

         {
            
             th
        }

         th

        newOrganizationUser.createdBy = organizationUser.createdBy

        let up
        try {
            awa
            up
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return updateOrganizationUser
    }

    publ {
        
        
            th
        
         th
        
            th

        
        
         => ({
            workspaceId: organizationWorkspace.id,
            userId: organizationUser.userId,
            
        }))

        awa
        awa

        return organizationUser
    }
}
