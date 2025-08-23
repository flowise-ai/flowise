import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'
import { IDocumentStoreFileChunk } from '../../Interface'

@Ent
export class DocumentStoreFileChunk implements IDocumentStoreFileChunk {
    @P
    id: string

    @In
    @C
    docId: string

    @In
    @C
    storeId: string

    @C
    chunkNo: number

    @C
    pageContent: string

    @C
    metadata: string
}
