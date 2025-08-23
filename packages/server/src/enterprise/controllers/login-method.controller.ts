import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { LoginMethodErrorMessage, LoginMethodService } from '../services/login-method.service'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { LoginMethod, LoginMethodStatus } from '../database/entities/login-method.entity'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { decrypt } from '../utils/encryption.util'
import AzureSSO from '../sso/AzureSSO'
import GoogleSSO from '../sso/GoogleSSO'
import Auth0SSO from '../sso/Auth0SSO'
import { OrganizationService } from '../services/organization.service'
import { Platform } from '../../Interface'
import GithubSSO from '../sso/GithubSSO'

export class LoginMethodController {
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
            let organizationId
            . === Platf {
                organizationId = undefined
            } el. === Platf {
                
                
                 {
                    organizationId = organizations[0].id
                } else {
                    .j
                }
            } else {
                .j
            }
            

            const providers: string[] = []

            let l
             {
                f {
                     p
                }
            }
            .j
        }  {
            next(e
        } finally {
             awa
        }
    }

    publ {
        let queryRunner
        try {
            que.App
            awa
            const query = req.query as Partial<LoginMethod>
            

            const loginMethodConfig = {
                providers: [],
                callbacks: [
                    { p },
                    { p },
                    { p },
                    { p }
                ]
            }
            let loginMethod: any
             {
                l
                 th
                l)
            } else {
                l

                f {
                    meth)
                }
                loginMethodConfig.providers = loginMethod
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
            
            
             {
                
                let providers: any[] = req.body.providers
                p => {
                    const identityManager = appServer.identityManager
                     {
                        provider.config.configEnabled = provider.status === LoginMethodStatus.ENABLE
                        
                    }
                })
            }
            .j
        }  {
            next(e
        }
    }
    publ {
        try {
            const providers = req.body.providers
             {
                
                
            } el {
                
                
            } el {
                
                
            } el {
                
                
            } else {
                
            }
        }  {
            next(e
        }
    }
}
