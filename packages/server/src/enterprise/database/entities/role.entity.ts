import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Organization } from './organization.entity'
import { User } from './user.entity'

export enum GeneralRole {
    OWNER = 'owner',
    MEMBER = 'member',
    PERSONAL_WORKSPACE = 'personal workspace'
}

@Ent
export class Role {
    @P
    id: string

    @C
    organizationId?: string
    @ManyT => O => 
    @J
    organization?: Organization

    @C
    name: string

    @C
    description?: string

    @C
    permissions: string

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
