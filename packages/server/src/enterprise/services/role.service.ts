import { StatusCodes } from 'http-status-codes'
import { DataSource, IsNull, QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralSuccessMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Role } from '../database/entities/role.entity'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { isInvalidName, isInvalidUUID } from '../utils/validation.util'
import { OrganizationErrorMessage, OrganizationService } from './organization.service'
import { UserErrorMessage, UserService } from './user.service'

export const enum RoleErrorMessage {
    INVALID_ROLE_ID = 'Invalid Role Id',
    INVALID_ROLE_NAME = 'Invalid Role Name',
    INVALID_ROLE_PERMISSIONS = 'Invalid Role Permissions',
    ROLE_NOT_FOUND = 'Role Not Found'
}

export class RoleService {
    private dataSource: DataSource
    private userService: UserService
    private organizationService: OrganizationService

     {
        
        this.dataSource = appServer.AppDataSource
        th
        th
    }

    publ {
        ) th
    }

    publ {
        th
        
    }

    publ {
        ) th
    }

    publ {
        
         th

        
        return await Promise.all(
             => {
                
                const userCount = workspaceUser.length
                return { ...role, userCount } as Role & { userCount: number }
            })
        )
    }

    publ {
        th
        
         th

        
    }

    publ {
        th
         })
         th
        return generalRole
    }

    publ {
        th
         })
    }

    publ {
         } })
         th
        return generalRoles
    }

    publ {
        
    }

    publ {
        
    }

    publ {
        
        awa

        
         th
        
         th
        th
         th
        data.updatedBy = data.createdBy

        let newR
        try {
            awa
            newR
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return newRole
    }

    publ {
        
        awa

        
         th
        
         th
         th
        newRole.organizationId = oldRole.organizationId
        newRole.createdBy = oldRole.createdBy

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

        return updateRole
    }

    publ {
        
        try {
            awa

            
             th

            awa

            awa
            awa

            awa

            return { message: GeneralSuccessMessage.DELETED }
        }  {
             awa
            throw error
        } finally {
             awa
        }
    }
}
