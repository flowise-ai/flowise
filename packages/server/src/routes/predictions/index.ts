import express from 'express'
import predictionsController from '../../controllers/predictions'
import { getMulterStorage } from '../../utils'



// CREATE
router.post(
    ['/', '/:id'],
    getMulte.a,
    predictionsController.getRateLimiterMiddleware,
    predictionsController.createPrediction
)

export default router
