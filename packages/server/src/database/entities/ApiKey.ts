import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { IApiKey } from '../../Interface'

@Ent
export class ApiKey implements IApiKey {
    @P
    id: string

    @C
    apiKey: string

    @C
    apiSecret: string

    @C
    keyName: string

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
