import { Request, Response, NextFunction } from 'express'
import variablesService from '../../services/variables'
import { Variable } from '../../database/entities/Variable'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getPageAndLimitParams } from '../../utils/pagination'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: variablesController.createVariable - body not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            th
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            th
        }
        const body = req.body
        body.workspaceId = workspaceId
        
        Obje
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
        
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                'Error: variablesController.updateVariable - body not provided!'
            )
        }
        
         {
            .
        }
        const body = req.body
        
        Obje
        
        
    }  {
        next(e
    }
}

export default {
    createVariable,
    deleteVariable,
    getAllVariables,
    updateVariable
}
