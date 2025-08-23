import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import apikeyService from '../../services/apikey'
import { getPageAndLimitParams } from '../../utils/pagination'

// Get api keys
 => {
    try {
        const autoCreateNewKey = true
        
        
        
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

// Update api key
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

// Import Keys from JSON file
 => {
    try {
         {
            th
        }
        req.body.workspaceId = req.user?.activeWorkspaceId
        
        
    }  {
        next(e
    }
}

// Delete api key
 => {
    try {
         {
            th
        }
        
        
    }  {
        next(e
    }
}

// Verify api key
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
    createApiKey,
    deleteApiKey,
    getAllApiKeys,
    updateApiKey,
    verifyApiKey,
    importKeys
}
