import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { OrganizationErrorMessage, OrganizationService } from '../services/organization.service'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { Organization } from '../database/entities/organization.entity'
import { GeneralErrorMessage } from '../../utils/constants'
import { OrganizationUserService } from '../services/organization-user.service'
import { getCurrentUsage } from '../../utils/quotaUsage'

export class OrganizationController {
    publ {
        try {
            
            
            .j
        }  {
            next(e
        }
    }

    publ {
        let queryRunner
        try {
            que.App
            awa
            const query = req.query as Partial<Organization>
            

            let organization: Organization | null
             {
                
                 th
            } el {
                
                 th
            } else {
                th
            }

            .j
        }  {
            next(e
        } finally {
             awa
        }
    }

    publ {
        try {
            
            
            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { subscriptionId } = req.query
             {
                .j
            }
            
            

            .identityManager
            

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { customerId } = req.query
             {
                .j
            }
            .identityManager
            

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { subscriptionId, quantity } = req.query
             {
                .j
            }
             {
                .j
            }
            .identityManager
            )

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { subscriptionId, newPlanId } = req.query
             {
                .j
            }
             {
                .j
            }
            .identityManager
            

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { subscriptionId, quantity, prorationDate } = req.body
             {
                .j
            }
             {
                .j
            }
             {
                .j
            }
            .identityManager
            

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const { subscriptionId, newPlanId, prorationDate } = req.body
             {
                .j
            }
             {
                .j
            }
             {
                .j
            }
            .identityManager
            

            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            const orgId = req.user?.activeOrganizationId
            const subscriptionId = req.user?.activeOrganizationSubscriptionId
             {
                .j
            }
             {
                .j
            }
            .usageCacheManager
            
            .j
        }  {
            next(e
        }
    }
}
