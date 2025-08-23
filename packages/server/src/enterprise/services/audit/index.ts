import { getRunningExpressApp } from '../../../utils/getRunningExpressApp'
import { LoginActivity } from '../../database/entities/EnterpriseEntities'
import { InternalFlowiseError } from '../../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getErrorMessage } from '../../../errors/utils'
import { Between, In } from 'typeorm'
import { LoginActivityCode } from '../../Interface.Enterprise'
import { Platform } from '../../../Interface'

const PAGE_SIZE = 10

 => {
    
    .getM - 1)
    return date
}

 => {
    
    )) {
        return undefined
    }
     : 
    return date
}

 => {
    try {
         : 1
         * PAGE_SIZE
        const take = PAGE_SIZE
        

        let fromDate
         f

        let toDate
         t

        const whereCondition: any = {
            attempte, t)
        }
         {
            whe
        }
        .count({
            where: whereCondition
        })
        .find({
            where: whereCondition,
            order: {
                attemptedDateTime: 'DESC'
            },
            skip,
            take
        })
        return {
            data: pagedResults,
            count: count,
            currentPage: page,
            pageSize: PAGE_SIZE
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        
         {
            return
        }
        const loginMode = ssoProvider ?? 'Email/Password'
        .create({
            username,
            activityCode,
            message,
            loginMode
        })
        .
        return result
    }  {
        th}`)
    }
}

 => {
    try {
        

        awa.delete({
            
        })
        return 'OK'
    }  {
        th}`)
    }
}

export default {
    recordLoginActivity,
    deleteLoginActivity,
    fetchLoginActivity
}
