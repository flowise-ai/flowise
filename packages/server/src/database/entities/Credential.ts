/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { ICredential } from '../../Interface'

@Ent
export class Credential implements ICredential {
    @P
    id: string

    @C
    name: string

    @C
    credentialName: string

    @C
    encryptedData: string

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    workspaceId?: string
}
