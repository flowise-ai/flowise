import { Request, Response, NextFunction } from 'express'
import vectorsService from '../../services/vectors'
import { RateLimiterManager } from '../../utils/rateLimit'

 => {
    try {
        .getRateL(
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
        const isInternal = true
        
        
    }  {
        next(e
    }
}

export default {
    upsertVectorMiddleware,
    createInternalUpsert,
    getRateLimiterMiddleware
}
