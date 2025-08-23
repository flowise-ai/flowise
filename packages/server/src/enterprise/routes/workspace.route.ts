import express from 'express'
import { WorkspaceController } from '../controllers/workspace.controller'
import { IdentityManager } from '../../IdentityManager'
import { checkPermission } from '../rbac/PermissionCheck'




, , w

, , w

// no feature flag because user with lower plan can switch to invited workspaces with higher plan


, , w

router.delete(
    ['/', '/:id'],
    I,
    ,
    workspaceController.delete
)

router.get(
    ['/shared', '/shared/:id'],
    I,
    ,
    workspaceController.getSharedWorkspacesForItem
)
router.post(
    ['/shared', '/shared/:id'],
    I,
    ,
    workspaceController.setSharedWorkspacesForItem
)

export default router
