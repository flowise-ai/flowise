import { StatusCodes } from 'http-status-codes'
import { In } from 'typeorm'
import { ChatMessage } from '../../database/entities/ChatMessage'
import { Execution } from '../../database/entities/Execution'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { ExecutionState, IAgentflowExecutedData } from '../../Interface'
import { _removeCredentialId } from '../../utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'

export interface ExecutionFilters {
    id?: string
    agentflowId?: string
    sessionId?: string
    state?: ExecutionState
    startDate?: Date
    endDate?: Date
    page?: number
    limit?: number
    workspaceId?: string
}

: Promise<Execution | null> => {
    try {
        
        

        const query: any = { id: executionId }
        // Add workspace filtering if provided
         query.workspaceId = workspaceId

        
         {
            th
        }
        return res
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<Execution | null> => {
    try {
        
        
        
         {
            th
        }
         : res?.executionData
         => _)
        
        return { ...res, executionData: stringifiedExecutionData }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<{ data: Execution[]; total: number }> => {
    try {
        
        const { id, agentflowId, sessionId, state, startDate, endDate, page = 1, limit = 12, workspaceId } = filters

        // Handle UUID fields properly using raw parameters to avoid type conversion issues
        // This uses the query builder instead of direct objects for compatibility with UUID fields
        
            .
            .leftJ
            .
            . * l
            .take(l

         que
         que
         que
         que
         que

        // Date range conditions
         {
            que
        } el {
            que
        } el {
            que
        }

        

        return { data, total }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<Execution | null> => {
    try {
        

        const query: any = { id: executionId }
        // Add workspace filtering if provided
         query.workspaceId = workspaceId

        .f
         {
            th
        }
        
        Obje
        awa.me
        .
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

/**
 * Delete multiple executions by their IDs
 * @param executionIds Array of execution IDs to delete
 * @param workspaceId Optional workspace ID to filter executions
 * @returns Object with success status and count of deleted executions
 */
: Promise<{ success: boolean; deletedCount: number }> => {
    try {
        
        

        // Create the where condition with workspace filtering if provided
         }
         whereCondition.workspaceId = workspaceId

        // Delete executions where id is in the provided array and belongs to the workspace
        

        // Update chat message executionId column to NULL
        awa.up }, { exe

        return {
            success: true,
            deletedCount: result.affected || 0
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    getExecutionById,
    getAllExecutions,
    deleteExecutions,
    getPublicExecutionById,
    updateExecution
}
