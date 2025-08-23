import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user.entity'
import { Organization } from './organization.entity'

export enum LoginMethodStatus {
    ENABLE = 'enable',
    DISABLE = 'disable'
}

@Ent
export class LoginMethod {
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
    config: string

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
