import { DataSource, QueryRunner } from 'typeorm'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { isInvalidName, isInvalidUUID } from '../utils/validation.util'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { LoginMethod, LoginMethodStatus } from '../database/entities/login-method.entity'
import { decrypt, encrypt } from '../utils/encryption.util'
import { UserErrorMessage, UserService } from './user.service'
import { OrganizationErrorMessage, OrganizationService } from './organization.service'
import { IsNull } from 'typeorm'

export const enum LoginMethodErrorMessage {
    INVALID_LOGIN_METHOD_ID = 'Invalid Login Method Id',
    INVALID_LOGIN_METHOD_NAME = 'Invalid Login Method Name',
    INVALID_LOGIN_METHOD_STATUS = 'Invalid Login Method Status',
    INVALID_LOGIN_METHOD_CONFIG = 'Invalid Login Method Config',
    LOGIN_METHOD_NOT_FOUND = 'Login Method Not Found'
}

export class LoginMethodService {
    private dataSource: DataSource
    private userService: UserService
    private organizationService: OrganizationService

     {
        
        this.dataSource = appServer.AppDataSource
        th
        th
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
        .)
            th
    }

    publ {
         {
            
             th
            
        } else {
             })
        }
    }

    publ {
         th
        
    }

    publ {
         th
        
    }

    p {
        
    }

    publ {
        let queryRunner: QueryRunner | undefined
        let newLoginMethod: Partial<LoginMethod>
        try {
            que
            awa
            
             th
            
             th
            th
            th
            
            data.updatedBy = createdBy.id

            newL
            awa
            newL
            awa
        }  {
             awa
            throw error
        } finally {
             awa
        }

        return newLoginMethod
    }

    publ {
        let organizationId: string = body.organizationId
        let providers: any[] = body.providers
        let userId: string = body.userId

        let queryRunner
        try {
            que
            awa
            awa
            
             th
            
             th

            f {
                th
                th

                const name = provider.providerName
                
                 {
                    /* empty */
                    loginMethod.status = provider.status
                    l)
                    loginMethod.updatedBy = userId
                    awa
                } else {
                    )
                    let newLoginMethod = queryRunner.manager.create(LoginMethod, {
                        organizationId,
                        name,
                        status: provider.status,
                        config: encryptedConfig,
                        createdBy: userId,
                        updatedBy: userId
                    })
                    awa
                }
            }
            awa
        }  {
             awa
            throw error
        } finally {
             awa
        }
        return { status: 'OK', organizationId: organizationId }
    }

    publ {
        
        awa

        
         th
        
         th
         {
            
             th
        }
         th
         newL
         th
        newLoginMethod.createdBy = oldLoginMethod.createdBy

        let up
        try {
            awa
            up
            awa
        }  {
            awa
            throw error
        } finally {
            awa
        }

        return updateLoginMethod
    }
}
