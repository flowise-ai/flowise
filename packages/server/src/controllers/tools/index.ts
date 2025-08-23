import { NextFunction, Request, Response } from 'express'
import toolsService from '../../services/tools'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getPageAndLimitParams } from '../../utils/pagination'

 => {
    try {
         {
            th
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
         {
            th
        }
        
        
    }  {
        next(e
    }
}

export default {
    createTool,
    deleteTool,
    getAllTools,
    getToolById,
    updateTool
}
