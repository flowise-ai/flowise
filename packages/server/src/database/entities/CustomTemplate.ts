import { ICustomTemplate } from '../../Interface'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Ent
export class CustomTemplate implements ICustomTemplate {
    @P
    id: string

    @C
    name: string

    @C
    flowData: string

    @C
    description?: string

    @C
    badge?: string

    @C
    framework?: string

    @C
    usecases?: string

    @C
    type?: string

    @C
    workspaceId: string

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date
}
