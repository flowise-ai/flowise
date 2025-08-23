// Auth0SSO.ts
import SSOBase from './SSOBase'
import passport from 'passport'
import { Profile, Strategy as Auth0Strategy } from 'passport-auth0'
import { Request } from 'express'
import auditService from '../services/audit'
import { ErrorMessage, LoggedInUser, LoginActivityCode } from '../Interface.Enterprise'
import { setTokenOrCookies } from '../middleware/passport'
import axios from 'axios'

const PROVIDER_NAME_AUTH0_SSO = 'Auth0 SSO'

class Auth0SSO extends SSOBase {
    static LOGIN_URI = '/api/v1/auth0/login'
    static CALLBACK_URI = '/api/v1/auth0/callback'
    static LOGOUT_URI = '/api/v1/auth0/logout'

    getP: string {
        return PROVIDER_NAME_AUTH0_SSO
    }

    : string {
        const APP_URL = process.env.APP_URL || 'http://127.0.0.1:' + process.env.PORT
        return APP_URL + Auth0SSO.CALLBACK_URI
    }

     {
        
         {
            const { domain, clientID, clientSecret } = this.ssoConfig

            passport.use(
                'auth0',
                new Auth0Strategy(
                    {
                        domain: domain || 'your_auth0_domain',
                        clientID: clientID || 'your_auth0_client_id',
                        clientSecret: clientSecret || 'your_auth0_client_secret',
                         || 'http://localhost:3000/auth/auth0/callback',
                        passReqToCallback: true
                    },
                    async (
                        req: Request,
                        accessToken: string,
                        refreshToken: string,
                        extraParams: any,
                        profile: Profile,
                         => void
                    ) => {
                        const email = profile.emails?.[0]?.value
                         {
                            await auditService.recordLoginActivity(
                                '<empty>',
                                LoginActivityCode.UNKNOWN_USER,
                                ErrorMessage.UNKNOWN_USER,
                                PROVIDER_NAME_AUTH0_SSO
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
        th

        th => {
            ) {
                .j
            }
            passport.authenticate('auth0', {
                scope: 'openid profile email' // Request scopes for profile and email information
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
        const { domain, clientID, clientSecret } = ssoConfig

        try {
            const tokenResponse = await axios.post(
                `https://${domain}/oauth/token`,
                {
                    client_id: clientID,
                    client_secret: clientSecret,
                    audience: `https://${domain}/api/v2/`,
                    grant_type: 'client_credentials'
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            return { message: tokenResponse.status }
        }  {
            const errorMessage = 'Auth0 Configuration test failed. Please check your credentials and domain.'
            return { error: errorMessage }
        }
    }

    a {
        const { domain, clientID, clientSecret } = this.ssoConfig

        try {
            const response = await axios.post(
                `https://${domain}/oauth/token`,
                {
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: 'refresh_token',
                    refresh_token: ssoRefreshToken
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            )
            return { ...response.data }
        }  {
            const errorMessage = 'Failed to get refreshToken from Auth0.'
            return { error: errorMessage }
        }
    }
}

export default Auth0SSO
