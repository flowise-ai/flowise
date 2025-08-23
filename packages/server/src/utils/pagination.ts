import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { Request } from 'express'

type Pagination = {
    page: number
    limit: number
}

exp: Pagination => {
    // by default assume no pagination
    let page = -1
    let limit = -1
     {
        // if page is provided, make sure it's a positive number
        page = pa
         {
            th
        }
    }
     {
        // if limit is provided, make sure it's a positive number
        l
         {
            th
        }
    }
    return { page, limit }
}
