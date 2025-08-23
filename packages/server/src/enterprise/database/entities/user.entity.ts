import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { LoginMethod } from './login-method.entity'
import { OrganizationUser } from './organization-user.entity'
import { Organization } from './organization.entity'
import { Role } from './role.entity'
import { WorkspaceUser } from './workspace-user.entity'
import { Workspace } from './workspace.entity'

export enum UserStatus {
    ACTIVE = 'active',
    INVITED = 'invited',
    UNVERIFIED = 'unverified',
    DELETED = 'deleted'
}

@Ent
export class User {
    @P
    id: string

    @C
    name: string

    @C
    email: string

    @C
    credential?: string | null

    @C
    tempToken?: string | null

    @C
    tokenExpiry?: Date | null

    @C
    status: string

    @C
    createdDate?: Date

    @Up
    updatedDate?: Date

    @C
    createdBy: string
    @ManyT => U => u
    @J
    createdByUser?: User

    @C
    updatedBy: string
    @ManyT => U => u
    @J
    updatedByUser?: User

    @OneT => O => 
    createdOrganizations?: Organization[]

    @OneT => O => 
    updatedOrganizations?: Organization[]

    @OneT => R => 
    createdRoles?: Role[]

    @OneT => R => 
    updatedRoles?: Role[]

    @OneT => O => 
    createdOrganizationUser?: OrganizationUser[]

    @OneT => O => 
    updatedOrganizationUser?: OrganizationUser[]

    @OneT => W => w
    createdWorkspace?: Workspace[]

    @OneT => W => w
    updatedWorkspace?: Workspace[]

    @OneT => W => w
    createdWorkspaceUser?: WorkspaceUser[]

    @OneT => W => w
    updatedByWorkspaceUser?: WorkspaceUser[]

    @OneT => L => l
    createdByLoginMethod?: LoginMethod[]

    @OneT => L => l
    updatedByLoginMethod?: LoginMethod[]
}
