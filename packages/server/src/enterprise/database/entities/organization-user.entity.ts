import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Organization } from './organization.entity'
import { Role } from './role.entity'
import { User } from './user.entity'

export enum OrganizationUserStatus {
    ACTIVE = 'active',
    DISABLE = 'disable',
    INVITED = 'invited'
}

@Ent
export class OrganizationUser {
    @P
    organizationId: string
    @ManyT => O => 
    @J
    organization: Organization

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
