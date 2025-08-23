import { Entity, Column, Index, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { IExecution, ExecutionState } from '../../Interface'
import { ChatFlow } from './ChatFlow'

@Ent
export class Execution implements IExecution {
    @P
    id: string

    @C
    executionData: string

    @C
    state: ExecutionState

    @In
    @C
    agentflowId: string

    @In
    @C
    sessionId: string

    @C
    action?: string

    @C
    isPublic?: boolean

    @C
    @C
    createdDate: Date

    @C
    @Up
    updatedDate: Date

    @C
    stoppedDate: Date

    @ManyT => ChatFl
    @J
    agentflow: ChatFlow

    @C
    workspaceId?: string
}
