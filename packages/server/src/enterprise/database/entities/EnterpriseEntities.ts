import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ILoginActivity, IWorkspaceShared, IWorkspaceUser } from '../../Interface.Enterprise'

@Ent
export class WorkspaceUsers implements IWorkspaceUser {
    @P
    id: string

    @C
    workspaceId: string

    @C
    userId: string

    @C
    role: string
}

@Ent
export class WorkspaceShared implements IWorkspaceShared {
    @P
    id: string

    @C
    workspaceId: string

    @C
    sharedItemId: string

    @C
    itemType: string

    @C
    @Up
    createdDate: Date

    @C
    @Up
    updatedDate: Date
}

@Ent
export class LoginActivity implements ILoginActivity {
    @P
    id: string

    @C
    username: string

    @C
    activityCode: number

    @C
    loginMode: string

    @C
    message: string

    @C
    @Up
    attemptedDateTime: Date
}
