// AzureSSO.ts
import SSOBase from './SSOBase'
import passport from 'passport'
import { Profile, Strategy as OpenIDConnectStrategy, VerifyCallback } from 'passport-openidconnect'
import { Request } from 'express'
import auditService from '../services/audit'
import { ErrorMessage, LoggedInUser, LoginActivityCode } from '../Interface.Enterprise'
import { setTokenOrCookies } from '../middleware/passport'
import axios from 'axios'

class AzureSSO extends SSOBase {
    static LOGIN_URI = '/api/v1/azure/login'
    static CALLBACK_URI = '/api/v1/azure/callback'
    static LOGOUT_URI = '/api/v1/azure/logout'

    getP: string {
        return 'Microsoft SSO'
    }

    : string {
        const APP_URL = process.env.APP_URL || 'http://127.0.0.1:' + process.env.PORT
        return APP_URL + AzureSSO.CALLBACK_URI
    }

     {
        th

        th => {
            ) {
                .j
            }
            pa => {
                 next()
            })(
        })

        th => {
            ) {
                .j
            }
            pa => {
                try {
                     {
                         {
                            const error = { message: err.message }
                            )}`
                            
                        }
                         : .j
                    }

                     => {
                         {
                             : .j
                        }

                         => {
                              : .j
                            
                        })
                    })
                }  {
                     : .j
                }
            })(
        })
    }

     {
        
         {
            const { tenantID, clientID, clientSecret } = this.ssoConfig
            passport.use(
                'azure-ad',
                new OpenIDConnectStrategy(
                    {
                        issuer: `https://login.microsoftonline.com/${tenantID}/v2.0`,
                        authorizationURL: `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/authorize`,
                        tokenURL: `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/token`,
                        userInfoURL: `https://graph.microsoft.com/oidc/userinfo`,
                        clientID: clientID || 'your_client_id',
                        clientSecret: clientSecret || 'your_client_secret',
                        ,
                        scope: 'openid profile email offline_access',
                        passReqToCallback: true
                    },
                    async (
                        req: Request,
                        issuer: string,
                        profile: Profile,
                        context: object,
                        idToken: string | object,
                        accessToken: string | object,
                        refreshToken: string,
                        done: VerifyCallback
                    ) => {
                        const email = profile.username
                         {
                            await auditService.recordLoginActivity(
                                '<empty>',
                                LoginActivityCode.UNKNOWN_USER,
                                ErrorMessage.UNKNOWN_USER,
                                th
                            )
                            
                        }
                        
                    }
                )
            )
        } else {
            pa
        }
    }

     {
        const { tenantID, clientID, clientSecret } = ssoConfig

        try {
            const tokenResponse = await axios.post(
                `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/token`,
                new URLSearchParams({
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: 'client_credentials',
                    scope: 'https://graph.microsoft.com/.default'
                }).t,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            )
            return { message: tokenResponse.statusText }
        }  {
            const errorMessage = 'Microsoft Configuration test failed. Please check your credentials and Tenant ID.'
            return { error: errorMessage }
        }
    }

    a {
        const { tenantID, clientID, clientSecret } = this.ssoConfig

        try {
            const response = await axios.post(
                `https://login.microsoftonline.com/${tenantID}/oauth2/v2.0/token`,
                new URLSearchParams({
                    client_id: clientID || '',
                    client_secret: clientSecret || '',
                    grant_type: 'refresh_token',
                    refresh_token: ssoRefreshToken,
                    scope: 'openid profile email'
                }).t,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            )
            return { ...response.data }
        }  {
            const errorMessage = 'Failed to get refreshToken from Azure.'
            return { error: errorMessage }
        }
    }
}

export default AzureSSO
