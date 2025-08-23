import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcryptjs'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Telemetry, TelemetryEventType } from '../../utils/telemetry'
import { User, UserStatus } from '../database/entities/user.entity'
import { isInvalidEmail, isInvalidName, isInvalidPassword, isInvalidUUID } from '../utils/validation.util'
import { DataSource, QueryRunner } from 'typeorm'
import { generateId } from '../../utils'
import { GeneralErrorMessage } from '../../utils/constants'
import { getHash } from '../utils/encryption.util'

export const enum UserErrorMessage {
    EXPIRED_TEMP_TOKEN = 'Expired Temporary Token',
    INVALID_TEMP_TOKEN = 'Invalid Temporary Token',
    INVALID_USER_ID = 'Invalid User Id',
    INVALID_USER_EMAIL = 'Invalid User Email',
    INVALID_USER_CREDENTIAL = 'Invalid User Credential',
    INVALID_USER_NAME = 'Invalid User Name',
    INVALID_USER_TYPE = 'Invalid User Type',
    INVALID_USER_STATUS = 'Invalid User Status',
    USER_EMAIL_ALREADY_EXISTS = 'User Email Already Exists',
    USER_EMAIL_UNVERIFIED = 'User Email Unverified',
    USER_NOT_FOUND = 'User Not Found',
    USER_FOUND_MULTIPLE = 'User Found Multiple',
    INCORRECT_USER_EMAIL_OR_CREDENTIALS = 'Incorrect Email or Password'
}
export class UserService {
    private telemetry: Telemetry
    private dataSource: DataSource

     {
        
        this.dataSource = appServer.AppDataSource
        this.telemetry = appServer.telemetry
    }

    publ {
        ) th
    }

    publ {
        th
        
    }

    publ {
        ) th
    }

    publ {
        ) th
    }

    publ {
        th
        
    }

    publ {
        
    }

    publ {
        .)
            th
    }

    publ {
        
    }

    publ {
        )
            th
        
    }

    publ {
        
         th
         
         data.name = data.email
        th
         th

        
         {
            
             th
            data.createdBy = createdBy.id
            data.updatedBy = data.createdBy
        } else {
            data.createdBy = data.id
            data.updatedBy = data.id
        }

        
    }

    publ {
        
    }

    publ {
        
        awa

        let newU
        try {
            awa
            newU
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        this.telemetry.sendTelemetry(
            TelemetryEventType.USER_CREATED,
            {
                userId: newUser.id,
                createdBy: newUser.createdBy
            },
            newUser.id
        )

        return newUser
    }

    publ {
        let queryRunner: QueryRunner | undefined
        let updatedUser: Partial<User>
        try {
            que
            awa
            
             th

             {
                
                 th
            }

            newUserData.createdBy = oldUserData.createdBy

             {
                th
            }

             {
                th
            }

             {
                )
                // @ts-ignore
                
                newUserData.credential = hash
                newUserData.tempToken = ''
                newUserData.tokenExpiry = undefined
            }

            up
            awa
            awa
            awa
        }  {
             awa
            throw error
        } finally {
             awa
        }

        return updatedUser
    }
}
