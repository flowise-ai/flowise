import express from 'express'
import vectorsController from '../../controllers/vectors'
import { getMulterStorage } from '../../utils'



// CREATE
router.post(
    ['/upsert/', '/upsert/:id'],
    getMulte.a,
    vectorsController.getRateLimiterMiddleware,
    vectorsController.upsertVectorMiddleware
)
.a, ve

export default router
