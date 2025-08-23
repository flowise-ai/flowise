import { Request, Response, NextFunction } from 'express'
import componentsCredentialsService from '../../services/components-credentials'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'

// Get all component credentials
 => {
    try {
        
        
    }  {
        next(e
    }
}

// Get component credential via name
 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: componentsCredentialsController.getComponentByName - name not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

// Returns specific component credential icon via name
 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: componentsCredentialsController.getSingleComponentsCredentialIcon - name not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

export default {
    getAllComponentsCredentials,
    getComponentByName,
    getSingleComponentsCredentialIcon
}
