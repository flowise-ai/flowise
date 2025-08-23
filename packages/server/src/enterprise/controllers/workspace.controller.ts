import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralErrorMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { OrganizationUserStatus } from '../database/entities/organization-user.entity'
import { GeneralRole } from '../database/entities/role.entity'
import { WorkspaceUserStatus } from '../database/entities/workspace-user.entity'
import { Workspace } from '../database/entities/workspace.entity'
import { IAssignedWorkspace, LoggedInUser } from '../Interface.Enterprise'
import { OrganizationUserErrorMessage, OrganizationUserService } from '../services/organization-user.service'
import { OrganizationErrorMessage, OrganizationService } from '../services/organization.service'
import { RoleErrorMessage, RoleService } from '../services/role.service'
import { UserErrorMessage, UserService } from '../services/user.service'
import { WorkspaceUserErrorMessage, WorkspaceUserService } from '../services/workspace-user.service'
import { WorkspaceErrorMessage, WorkspaceService } from '../services/workspace.service'

export class WorkspaceController {
    publ {
        try {
            
            
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
            const query = req.query as Partial<Workspace>
            

            let workspace:
                | Workspace
                | null
                | (Workspace & {
                      userCount: number
                  })[]
             {
                w
            } el {
                w
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
         {
            )
        }
        let queryRunner
        try {
            que.App
            awa
            const query = req.query as Partial<Workspace>
            awa

            
            
             th

            
            
             th

            
            
             th
            w.t
            workspaceUser.status = WorkspaceUserStatus.ACTIVE
            workspaceUser.updatedBy = user.id
            awa

            
            const { organizationUser } = await organizationUserService.readOrganizationUserByWorkspaceIdUserId(
                workspaceUser.workspaceId,
                workspaceUser.userId,
                queryRunner
            )
            
                th
            organizationUser.status = OrganizationUserStatus.ACTIVE
            organizationUser.updatedBy = user.id
            awa

            
            
            
             th

            
            
             th
            const subscriptionId = org.subscriptionId as string
            const customerId = org.customerId as string
            .
            .

            
             => {
                return {
                    id: workspaceUser.workspace.id,
                    name: workspaceUser.workspace.name,
                    role: workspaceUser.role?.name,
                    organizationId: workspaceUser.workspace.organizationId
                } as IAssignedWorkspace
            })

            const loggedInUser: LoggedInUser & { role: string; isSSO: boolean } = {
                ...req.user,
                activeOrganizationId: org.id,
                activeOrganizationSubscriptionId: subscriptionId,
                activeOrganizationCustomerId: customerId,
                activeOrganizationProductId: productId,
                isOrganizationAdmin: workspaceUser.roleId === ownerRole.id,
                activeWorkspaceId: workspace.id,
                activeWorkspace: workspace.name,
                assignedWorkspaces,
                isApiKeyValidated: true,
                isSSO: req.user.ssoProvider ? true : false,
                pe],
                features,
                role: role.name,
                roleId: role.id
            }

            // update the passport session
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

            awa
            .j
        }  {
             {
                awa
            }
            next(e
        } finally {
             {
                awa
            }
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
            awa
            const workspaceId = req.params.id
             {
                th
            }
            
            awa

            

            awa
            .j
        }  {
             awa
            next(e
        } finally {
             awa
        }
    }

    publ {
        try {
             {
                th
            }
            
            )
        }  {
            next(e
        }
    }

    publ {
        try {
             {
                th
            }
             {
                throw new InternalFlowiseError(
                    StatusCodes.UNAUTHORIZED,
                    `Error: workspaceController.setSharedWorkspacesForItem - id not provided!`
                )
            }
             {
                throw new InternalFlowiseError(
                    StatusCodes.PRECONDITION_FAILED,
                    `Error: workspaceController.setSharedWorkspacesForItem - body not provided!`
                )
            }
            
            )
        }  {
            next(e
        }
    }
}
