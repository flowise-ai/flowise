import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { GeneralErrorMessage } from '../../utils/constants'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { User } from '../database/entities/user.entity'
import { UserErrorMessage, UserService } from '../services/user.service'

export class UserController {
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
            const query = req.query as Partial<User>
            

            let user: User | null
             {
                u
                 th
            } el {
                u
                 th
            } else {
                th
            }

             {
                delete user.credential
                delete user.tempToken
                delete user.tokenExpiry
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
            
            const currentUser = req.user
             {
                th
            }
            const { id } = req.body
             {
                th
            }
            
            .j
        }  {
            next(e
        }
    }

    publ {
        try {
            .j
        }  {
            next(e
        }
    }
}
