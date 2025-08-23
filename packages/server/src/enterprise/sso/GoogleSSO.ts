// GoogleSSO.ts
import SSOBase from './SSOBase'
import passport from 'passport'
import { Profile, Strategy as OpenIDConnectStrategy, VerifyCallback } from 'passport-openidconnect'
import auditService from '../services/audit'
import { ErrorMessage, LoggedInUser, LoginActivityCode } from '../Interface.Enterprise'
import { setTokenOrCookies } from '../middleware/passport'
import axios from 'axios'

class GoogleSSO extends SSOBase {
    static LOGIN_URI = '/api/v1/google/login'
    static CALLBACK_URI = '/api/v1/google/callback'
    static LOGOUT_URI = '/api/v1/google/logout'

    getP: string {
        return 'Google SSO'
    }

    : string {
        const APP_URL = process.env.APP_URL || 'http://127.0.0.1:' + process.env.PORT
        return APP_URL + GoogleSSO.CALLBACK_URI
    }

     {
        
         {
            const clientID = this.ssoConfig.clientID
            const clientSecret = this.ssoConfig.clientSecret

            passport.use(
                'google',
                new OpenIDConnectStrategy(
                    {
                        issuer: 'https://accounts.google.com',
                        authorizationURL: 'https://accounts.google.com/o/oauth2/v2/auth',
                        tokenURL: 'https://oauth2.googleapis.com/token',
                        userInfoURL: 'https://openidconnect.googleapis.com/v1/userinfo',
                        clientID: clientID || 'your_google_client_id',
                        clientSecret: clientSecret || 'your_google_client_secret',
                         || 'http://localhost:3000/auth/google/callback',
                        scope: 'openid profile email'
                    },
                    async (
                        issuer: string,
                        profile: Profile,
                        context: object,
                        idToken: string | object,
                        accessToken: string | object,
                        refreshToken: string,
                        done: VerifyCallback
                    ) => {
                         {
                            const email = profile.emails[0].value
                            
                        } else {
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
         {
            th
        }

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
        const { clientID, redirectURL } = ssoConfig

        try {
            const authorizationUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
                client_id: clientID,
                redirect_uri: redirectURL,
                response_type: 'code',
                scope: 'openid email profile'
            }).t}`

            
            return { message: tokenResponse.statusText }
        }  {
            const errorMessage = 'Google Configuration test failed. Please check your credentials.'
            return { error: errorMessage }
        }
    }

    a {
        const { clientID, clientSecret } = this.ssoConfig

        try {
            const response = await axios.post(
                `https://oauth2.googleapis.com/token`,
                new URLSearchParams({
                    client_id: clientID || '',
                    client_secret: clientSecret || '',
                    grant_type: 'refresh_token',
                    refresh_token: ssoRefreshToken,
                    scope: 'refresh_token'
                }).t,
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            )
            return { ...response.data }
        }  {
            const errorMessage = 'Failed to get refreshToken from Google.'
            return { error: errorMessage }
        }
    }
}

export default GoogleSSO
