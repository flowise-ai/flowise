import { Request, Response, NextFunction } from 'express'
import upsertHistoryService from '../../services/upsert-history'

 => {
    try {
        const sortOrder = req.query?.order as string | undefined
        const chatflowid = req.params?.id as string | undefined
        const startDate = req.query?.startDate as string | undefined
        const endDate = req.query?.endDate as string | undefined
        
        
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

export default {
    getAllUpsertHistory,
    patchDeleteUpsertHistory
}
