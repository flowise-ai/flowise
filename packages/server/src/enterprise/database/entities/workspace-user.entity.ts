import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user.entity'
import { Role } from './role.entity'
import { Workspace } from './workspace.entity'

export enum WorkspaceUserStatus {
    ACTIVE = 'active',
    DISABLE = 'disable',
    INVITED = 'invited'
}

@Ent
export class WorkspaceUser {
    @P
    workspaceId: string
    @ManyT => W => w
    @J
    workspace: Workspace

    @P
    userId: string
    @ManyT => U => u
    @J
    user: User

    @C
    roleId: string
    @ManyT => R => 
    @J
    role?: Role

    @C
    status?: string

    @C
    lastLogin?: string

    @C
    createdDate?: Date

    @Up
    updatedDate?: Date

    @C
    createdBy?: string
    @ManyT => U => u
    @J
    createdByUser?: User

    @C
    updatedBy?: string
    @ManyT => U => u
    @J
    updatedByUser?: User
}
