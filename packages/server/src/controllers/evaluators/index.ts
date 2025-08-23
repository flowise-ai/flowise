import { Request, Response, NextFunction } from 'express'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import evaluatorService from '../../services/evaluator'
import { getPageAndLimitParams } from '../../utils/pagination'

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
        const body = req.body
        body.workspaceId = req.user?.activeWorkspaceId
        
        
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

 => {
    try {
         {
            th
        }
        
        
    }  {
        next(e
    }
}

export default {
    getAllEvaluators,
    getEvaluator,
    createEvaluator,
    updateEvaluator,
    deleteEvaluator
}
