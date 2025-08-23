import express from 'express'
import { WorkspaceUserController } from '../controllers/workspace-user.controller'
import { IdentityManager } from '../../IdentityManager'
import { checkPermission } from '../rbac/PermissionCheck'




// no feature flag because user with lower plan can read invited workspaces with higher plan


router.post(
    '/',
    I,
    ,
    workspaceUserController.create
)

router.put(
    '/',
    I,
    ,
    workspaceUserController.update
)

router.delete(
    '/',
    I,
    ,
    workspaceUserController.delete
)

export default router
