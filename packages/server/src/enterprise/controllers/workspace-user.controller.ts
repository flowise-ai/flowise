import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { QueryRunner } from 'typeorm'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralErrorMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { WorkspaceUserService } from '../services/workspace-user.service'

export class WorkspaceUserController {
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
            const query = req.query as Partial<WorkspaceUser & { organizationId: string | undefined }>
            

            let workspaceUser: any
             {
                workspaceUser = await workspaceUserService.readWorkspaceUserByWorkspaceIdUserId(
                    query.workspaceId,
                    query.userId,
                    queryRunner
                )
            } el {
                w
            } el {
                workspaceUser = await workspaceUserService.readWorkspaceUserByOrganizationIdUserId(
                    query.organizationId,
                    query.userId,
                    queryRunner
                )
            } el {
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
        let queryRunner: QueryRunner | undefined
        try {
            que.App
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
            const query = req.query as Partial<WorkspaceUser>

            
            
            .j
        }  {
            next(e
        }
    }
}
