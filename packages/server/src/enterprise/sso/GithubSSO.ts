import SSOBase from './SSOBase'
import passport from 'passport'
import { LoggedInUser } from '../Interface.Enterprise'
import { setTokenOrCookies } from '../middleware/passport'
import { Strategy as GitHubStrategy, Profile } from 'passport-github'

class GithubSSO extends SSOBase {
    static LOGIN_URI = '/api/v1/github/login'
    static CALLBACK_URI = '/api/v1/github/callback'
    static LOGOUT_URI = '/api/v1/github/logout'

    getP: string {
        return 'Github SSO'
    }

    : string {
        const APP_URL = process.env.APP_URL || 'http://127.0.0.1:' + process.env.PORT
        return APP_URL + GithubSSO.CALLBACK_URI
    }

     {
        
         {
            const clientID = this.ssoConfig.clientID
            const clientSecret = this.ssoConfig.clientSecret

            // Configure Passport to use the GitHub strategy
            passport.use(
                new GitHubStrategy(
                    {
                        clientID: clientID,
                        clientSecret: clientSecret,
                        callbackURL: GithubSSO.CALLBACK_URI,
                        scope: ['user:email']
                    },
                    a => {
                        // Fetch emails from GitHub API using the access token.
                        const emailResponse = await fetch('https://api.github.com/user/emails', {
                            headers: {
                                Authorization: `token ${accessToken}`,
                                'User-Agent': 'Node.js'
                            }
                        })
                        
                        // Look for a verified primary email.
                        let p => ema?.email
                         && ema {
                            primaryEmail = emails[0].email
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
        const { clientID, clientSecret } = ssoConfig

        try {
            const response = await fetch('https://github.com/login/oauth/access_token', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: clientID,
                    client_secret: clientSecret,
                    code: 'dummy_code_for_testing'
                })
            })
            
             {
                return { message: 'ClientID and clientSecret are valid.' }
            } else {
                return { error: `Invalid credentials. Received error: ${data.error || 'unknown'}` }
            }
        }  {
            return { error: 'Github Configuration test failed. Please check your credentials.' }
        }
    }

    a {
        const { clientID, clientSecret } = this.ssoConfig

        try {
            const response = await fetch('https://github.com/login/oauth/access_token', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: 'refresh_token',
                    refresh_token: currentRefreshToken
                })
            })
            
             {
                return { error: 'Failed to get refreshToken from Github.' }
            } else {
                return data
            }
        }  {
            return { error: 'Failed to get refreshToken from Github.' }
        }
    }
}

export default GithubSSO
