import { Request, Response, NextFunction } from 'express'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import datasetService from '../../services/dataset'
import { StatusCodes } from 'http-status-codes'
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
    getAllDatasets,
    getDataset,
    createDataset,
    updateDataset,
    deleteDataset,
    addDatasetRow,
    updateDatasetRow,
    deleteDatasetRow,
    patchDeleteRows,
    reorderDatasetRow
}
