import { Request, Response, NextFunction } from 'express'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import evaluationsService from '../../services/evaluations'
import { getPageAndLimitParams } from '../../utils/pagination'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: evaluationsService.createEvaluation - body not provided!`
            )
        }
        const orgId = req.user?.activeOrganizationId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: evaluationsService.createEvaluation - organization ${orgId} not found!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
         {
            throw new InternalFlowiseError(
                StatusCodes.NOT_FOUND,
                `Error: evaluationsService.createEvaluation - workspace ${workspaceId} not found!`
            )
        }
        const body = req.body
        body.workspaceId = workspaceId

         ||  || req.protocol
        }`
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            th
        }
        const orgId = req.user?.activeOrganizationId
         {
            th
        }
         ||  || req.protocol
        }`
        
        
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
        const ids = req.body.ids ?? []
        const isDeleteAllVersion = req.body.isDeleteAllVersion ?? false
        
        
    }  {
        next(e
    }
}

export default {
    createEvaluation,
    getEvaluation,
    deleteEvaluation,
    getAllEvaluations,
    isOutdated,
    runAgain,
    getVersions,
    patchDeleteEvaluations
}
