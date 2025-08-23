import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { DocumentStoreStatus, IDocumentStore } from '../../Interface'

@Ent
export class DocumentStore implements IDocumentStore {
    @P
    id: string

    @C
    name: string

    @C
    description: string

    @C
    loaders: string

    @C
    whereUsed: string

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    status: DocumentStoreStatus

    @C
    vectorStoreConfig: string | null

    @C
    embeddingConfig: string | null

    @C
    recordManagerConfig: string | null

    @C
    workspaceId?: string
}
