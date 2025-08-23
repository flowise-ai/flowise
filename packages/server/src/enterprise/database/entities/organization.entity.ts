import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user.entity'

export enum OrganizationName {
    DEFAULT_ORGANIZATION = 'Default Organization'
}

@Ent
export class Organization {
    @P
    id: string

    @C
    name: string

    @C
    customerId?: string

    @C
    subscriptionId?: string

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
