import express from 'express'
import { AccountController } from '../controllers/account.controller'
import { IdentityManager } from '../../IdentityManager'
import { checkAnyPermission } from '../rbac/PermissionCheck'






// feature flag to workspace since only user who has workspaces can invite
router.post(
    '/invite',
    I,
    ,
    accountController.invite
)





















export default router
