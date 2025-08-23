import { StatusCodes } from 'http-status-codes'
import { DataSource, EntityManager, In, IsNull, QueryRunner, UpdateResult } from 'typeorm'
import { ApiKey } from '../../database/entities/ApiKey'
import { Assistant } from '../../database/entities/Assistant'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { ChatMessageFeedback } from '../../database/entities/ChatMessageFeedback'
import { Credential } from '../../database/entities/Credential'
import { CustomTemplate } from '../../database/entities/CustomTemplate'
import { Dataset } from '../../database/entities/Dataset'
import { DatasetRow } from '../../database/entities/DatasetRow'
import { DocumentStore } from '../../database/entities/DocumentStore'
import { DocumentStoreFileChunk } from '../../database/entities/DocumentStoreFileChunk'
import { Evaluation } from '../../database/entities/Evaluation'
import { EvaluationRun } from '../../database/entities/EvaluationRun'
import { Evaluator } from '../../database/entities/Evaluator'
import { Execution } from '../../database/entities/Execution'
import { Tool } from '../../database/entities/Tool'
import { UpsertHistory } from '../../database/entities/UpsertHistory'
import { Variable } from '../../database/entities/Variable'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { generateId } from '../../utils'
import { GeneralSuccessMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { WorkspaceShared } from '../database/entities/EnterpriseEntities'
import { GeneralRole } from '../database/entities/role.entity'
import { WorkspaceUser } from '../database/entities/workspace-user.entity'
import { Workspace, WorkspaceName } from '../database/entities/workspace.entity'
import { isInvalidName, isInvalidUUID } from '../utils/validation.util'
import { OrganizationErrorMessage, OrganizationService } from './organization.service'
import { RoleErrorMessage, RoleService } from './role.service'
import { UserErrorMessage, UserService } from './user.service'

export const enum WorkspaceErrorMessage {
    INVALID_WORKSPACE_ID = 'Invalid Workspace Id',
    INVALID_WORKSPACE_NAME = 'Invalid Workspace Name',
    WORKSPACE_NOT_FOUND = 'Workspace Not Found',
    WORKSPACE_RESERVERD_NAME = 'Workspace name cannot be Default Workspace or Personal Workspace - this is a reserved name'
}

export class WorkspaceService {
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
        ) th
    }

    publ {
        th
        
    }

    publ {
        ) th
        ) {
            th
        }
    }

    publ {
        awa
        

        
         th

        const filteredWorkspaces = await Promise.all(
            w => {
                

                // Skip if any user in the workspace has PERSONAL_WORKSPACE role
                 => u
                 {
                    return null
                }

                return {
                    ...workspace,
                    userCount: workspaceUsers.length
                } as Workspace & { userCount: number }
            })
        )

        // F
        : w
    }

    publ {
        th
        data.updatedBy = data.createdBy
        

        
    }

    publ {
        
    }

    publ {
        
        awa

        
         th
        
         th

        let newW
        try {
            awa
            newW
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return newWorkspace
    }

    publ {
        
        awa

        
         th
        
         th
         {
            th
        }
        newWorkspaceData.organizationId = oldWorkspaceData.organizationId
        newWorkspaceData.createdBy = oldWorkspaceData.createdBy

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

        return updateWorkspace
    }

    publ {
        
         th

        // First get all related entities that need to be deleted
        
        
        
        

        // Extract IDs for bulk deletion
         => 
         => 
         => e.
         => 

        // Start deleting in the correct order to maintain referential integrity
        awa
        awa
        awa
        awa

        // Delete chatflow related entities
         {
            awa
            awa })
            awa })
            awa })
        }

        awa
        awa

        // Delete dataset related entities
         {
            awa
            awa })
        }

        // Delete document store related entities
         {
            awa
            awa })
        }

        // Delete evaluation related entities
         {
            awa
            awa })
        }

        awa
        awa
        awa
        awa

        // Finally delete the workspace itself
        awa

        return workspace
    }

    publ {
        .find({
            where: {
                sharedItemId: itemId
            }
        })
         {
            return []
        }

         => w
        .find({
            select: ['id', 'name'],
            whe }
        })

         => {
             => w.
            return {
                workspaceId: sw.workspaceId,
                workspaceName: workspace?.name,
                sharedItemId: sw.sharedItemId,
                itemType: sw.itemType
            }
        })
    }

    publ {
        .find({
            where: {
                workspaceId: wsId,
                itemType: itemType
            }
        })
         {
            return []
        }

         => 
         {
            .find({
                select: ['id', 'name', 'credentialName'],
                whe }
            })
        } el {
            .find({
                whe }
            })
        }
        return []
    }

    publ {
        const { itemType, workspaceIds } = body

        awa => {
            // Delete existing shared workspaces for the item
            awa.delete({
                sharedItemId: itemId
            })

            // Add new shared workspaces
             =>
                t.create({
                    workspaceId,
                    sharedItemId: itemId,
                    itemType
                })
            )
            awa.
        })

        return { message: GeneralSuccessMessage.UPDATED }
    }

    /**
     * Updates all entities with null workspaceId to the specified workspaceId
     * Used for migrating legacy data that was created before workspace implementation
     * This function is guaranteed to return meaningful results with affected row counts
     * @param queryRunner The TypeORM query runner to execute database operations
     * @param workspaceId The target workspaceId to assign to records with null workspaceId
     * @returns An array of update results, each containing the count of affected rows.
     * The array will always contain results for each entity type in the following order:
     * [ApiKey, Assistant, ChatFlow, Credential, CustomTemplate, Dataset, DocumentStore, Evaluation, Evaluator, Tool, Variable]
     */
    publ: Promise<UpdateResult[]> {
        return await Promise.all([
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w,
            que }, { w
        ])
    }
}
