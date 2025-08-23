import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Organization } from './organization.entity'
import { User } from './user.entity'

export enum WorkspaceName {
    DEFAULT_WORKSPACE = 'Default Workspace',
    DEFAULT_PERSONAL_WORKSPACE = 'Personal Workspace'
}

@Ent
export class Workspace {
    @P
    id: string

    @C
    name: string

    @C
    description?: string

    @C
    organizationId?: string
    @ManyT => O => 
    @J
    organization?: Organization

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
