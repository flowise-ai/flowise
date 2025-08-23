/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Index } from 'typeorm'
import { IAssistant, IDataset, IDatasetRow } from '../../Interface'

@Ent
export class DatasetRow implements IDatasetRow {
    @P
    id: string

    @C
    @In
    datasetId: string

    @C
    input: string

    @C
    output: string

    @Up
    updatedDate: Date

    @C
    sequenceNo: number
}
