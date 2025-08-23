import { Request, Response, NextFunction } from 'express'
import executionsService from '../../services/executions'
import { ExecutionState } from '../../Interface'

 => {
    try {
        const executionId = req.params.id
        const workspaceId = req.user?.activeWorkspaceId
        
        
    }  {
        next(e
    }
}

 => {
    try {
        const executionId = req.params.id
        
        
    }  {
        next(e
    }
}

 => {
    try {
        const executionId = req.params.id
        const workspaceId = req.user?.activeWorkspaceId
        
        
    }  {
        next(e
    }
}

 => {
    try {
        // Extract all possible filters from query params
        const filters: any = {}

        // Add workspace ID filter
        filters.workspaceId = req.user?.activeWorkspaceId

        // ID filter
         filters.id = req.query.id as string

        // Flow and session filters
         filters.agentflowId = req.query.agentflowId as string
         filters.sessionId = req.query.sessionId as string

        // State filter
         {
            const stateValue = req.query.state as string
            ) {
                filters.state = stateValue as ExecutionState
            }
        }

        // Date filters
         {
            f
        }

         {
            f
        }

        // Pagination
         {
            f
        }

         {
            f
        }

        

        
    }  {
        next(e
    }
}

/**
 * Delete multiple executions by their IDs
 * If a single ID is provided in the URL params, it will delete that execution
 * If an array of IDs is provided in the request body, it will delete all those executions
 */
 => {
    try {
        let executionIds: string[] = []
        const workspaceId = req.user?.activeWorkspaceId

        // Check if we're deleting a single execution from URL param
         {
            executionIds = [req.params.id]
        }
        // Check if we're deleting multiple executions from request body
        el) {
            executionIds = req.body.executionIds
        } else {
            .j
        }

        
        
    }  {
        next(e
    }
}

export default {
    getAllExecutions,
    deleteExecutions,
    getExecutionById,
    getPublicExecutionById,
    updateExecution
}
