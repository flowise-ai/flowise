import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// material-ui
import { Stack, useTheme, Typography, Box, Alert, Button, Divider, Icon } from '@mui/material'
import { IconExclamationCircle } from '@tabler/icons-react'
import { LoadingButton } from '@mui/lab'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import { Input } from '@/ui-component/input/Input'

// Hooks
import useApi from '@/hooks/useApi'
import { useConfig } from '@/store/context/ConfigContext'

// API
import authApi from '@/api/auth'
import accountApi from '@/api/account.api'
import loginMethodApi from '@/api/loginmethod'
import ssoApi from '@/api/sso'

// utils
import useNotifier from '@/utils/useNotifier'

// store
import { loginSuccess, logoutSuccess } from '@/store/reducers/authSlice'
import { store } from '@/store'

// icons
import AzureSSOLoginIcon from '@/assets/images/microsoft-azure.svg'
import GoogleSSOLoginIcon from '@/assets/images/google.svg'
import Auth0SSOLoginIcon from '@/assets/images/auth0.svg'
import GithubSSOLoginIcon from '@/assets/images/github.svg'

// ==============================|| SignInPage ||============================== //

 => {
    
    u => 
    u
    

    const usernameInput = {
        label: 'Username',
        name: 'username',
        type: 'email',
        placeholder: 'user@company.com'
    }
    const passwordInput = {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: '********'
    }
    
    
    
    
    
    
    

    
    
    
    
    
    

     => {
        event.p
        
        const body = {
            email: usernameVal,
            password: passwordVal
        }
        l
    }

    u => {
         {
            
             {
                window.location.href = loginApi.error.response.data.data.redirectUrl
            } else {
                
            }
        }
    }, 

    u => {
        )
         {
            get
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        // Parse the "user" query parameter from the URL
        
        
         return
        )
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            )
            nav
            //nav
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            )
            nav
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
             {
                window.location.href = ssoLoginApi.error.response.data.redirectUrl
            } else {
                
            }
        }
    }, 

    u => {
         {
            //data is an array of objects, store only the provider attribute
             => p)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        } else {
            
        }
    }, 

     => {
        window.location.href = `/api/v1/${ssoProvider}/login`
    }

     => {
        try {
            awa
            
            
            
        }  {
            
        }
    }

    return (
        <>
            <MainCard maxWidth='sm'>
                <Stack flexDirection='column' sx={{ width: '480px', gap: 3 }}>
                    {successMessage && (
                        <Ale => }>
                            {successMessage}
                        </Alert>
                    )}
                    {authError && (
                        <Alert icon={<IconExclamationCircle />} variant='filled' severity='error'>
                            {authError}
                        </Alert>
                    )}
                    {showResendButton && (
                        <Stack sx={{ gap: 1 }}>
                            <Button variant='text' onClick={handleResendVerification}>
                                Resend Verification Email
                            </Button>
                        </Stack>
                    )}
                    <Stack sx={{ gap: 1 }}>
                        <Typography variant='h1'>Sign In</Typography>
                        {isCloud && (
                            <Typography variant='body2' sx={{ color: theme.palette.grey[600] }}>
                                Don&apos;t have an account?{' '}
                                <Link style={{ color: `${theme.palette.primary.main}` }} to='/register'>
                                    Sign up for free
                                </Link>
                                .
                            </Typography>
                        )}
                        {isEnterpriseLicensed && (
                            <Typography variant='body2' sx={{ color: theme.palette.grey[600] }}>
                                Have an invite code?{' '}
                                <Link style={{ color: `${theme.palette.primary.main}` }} to='/register'>
                                    Sign up for an account
                                </Link>
                                .
                            </Typography>
                        )}
                    </Stack>
                    <form onSubmit={doLogin}>
                        <Stack sx={{ width: '100%', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', gap: 2 }}>
                            <Box sx={{ p: 0 }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography>
                                        Email<span style={{ color: 'red' }}>&nbsp;*</span>
                                    </Typography>
                                    <div style={{ flexGrow: 1 }}></div>
                                </div>
                                <Input
                                    inputParam={usernameInput}
                                     => }
                                    value={usernameVal}
                                    showDialog={false}
                                />
                            </Box>
                            <Box sx={{ p: 0 }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography>
                                        Password<span style={{ color: 'red' }}>&nbsp;*</span>
                                    </Typography>
                                    <div style={{ flexGrow: 1 }}></div>
                                </div>
                                <Input  => } value={passwordVal} />
                                <Typography variant='body2' sx={{ color: theme.palette.grey[600], mt: 1, textAlign: 'right' }}>
                                    <Link style={{ color: theme.palette.primary.main }} to='/forgot-password'>
                                        Forgot password?
                                    </Link>
                                </Typography>
                                {isCloud && (
                                    <Typography variant='body2' sx={{ color: theme.palette.grey[600], mt: 1, textAlign: 'right' }}>
                                        <a
                                            href='https://docs.flowise-ai.github.io/migration-guide/cloud-migration'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={{ color: theme.palette.primary.main }}
                                        >
                                            Migrate from existing account?
                                        </a>
                                    </Typography>
                                )}
                            </Box>
                            <LoadingButton
                                loading={loading}
                                variant='contained'
                                style={{ borderRadius: 12, height: 40, marginRight: 5 }}
                                type='submit'
                            >
                                Login
                            </LoadingButton>
                            {configuredSsoProviders && configuredSsoProviders.length > 0 && <Divider sx={{ width: '100%' }}>OR</Divider>}
                            {configuredSsoProviders &&
                                configuredSsoProviders.map(
                                    ( =>
                                        //https://learn.microsoft.com/en-us/entra/identity-platform/howto-add-branding-in-apps
                                        ssoProvider === 'azure' && (
                                            <Button
                                                key={ssoProvider}
                                                variant='outlined'
                                                style={{ borderRadius: 12, height: 45, marginRight: 5, lineHeight: 0 }}
                                                 => }
                                                startIcon={
                                                    <Icon>
                                                        <img src={AzureSSOLoginIcon} alt={'MicrosoftSSO'} width={20} height={20} />
                                                    </Icon>
                                                }
                                            >
                                                Sign In With Microsoft
                                            </Button>
                                        )
                                )}
                            {configuredSsoProviders &&
                                configuredSsoProviders.map(
                                    ( =>
                                        ssoProvider === 'google' && (
                                            <Button
                                                key={ssoProvider}
                                                variant='outlined'
                                                style={{ borderRadius: 12, height: 45, marginRight: 5, lineHeight: 0 }}
                                                 => }
                                                startIcon={
                                                    <Icon>
                                                        <img src={GoogleSSOLoginIcon} alt={'GoogleSSO'} width={20} height={20} />
                                                    </Icon>
                                                }
                                            >
                                                Sign In With Google
                                            </Button>
                                        )
                                )}
                            {configuredSsoProviders &&
                                configuredSsoProviders.map(
                                    ( =>
                                        ssoProvider === 'auth0' && (
                                            <Button
                                                key={ssoProvider}
                                                variant='outlined'
                                                style={{ borderRadius: 12, height: 45, marginRight: 5, lineHeight: 0 }}
                                                 => }
                                                startIcon={
                                                    <Icon>
                                                        <img src={Auth0SSOLoginIcon} alt={'Auth0SSO'} width={20} height={20} />
                                                    </Icon>
                                                }
                                            >
                                                Sign In With Auth0 by Okta
                                            </Button>
                                        )
                                )}
                            {configuredSsoProviders &&
                                configuredSsoProviders.map(
                                    ( =>
                                        ssoProvider === 'github' && (
                                            <Button
                                                key={ssoProvider}
                                                variant='outlined'
                                                style={{ borderRadius: 12, height: 45, marginRight: 5, lineHeight: 0 }}
                                                 => }
                                                startIcon={
                                                    <Icon>
                                                        <img src={GithubSSOLoginIcon} alt={'GithubSSO'} width={20} height={20} />
                                                    </Icon>
                                                }
                                            >
                                                Sign In With Github
                                            </Button>
                                        )
                                )}
                        </Stack>
                    </form>
                </Stack>
            </MainCard>
        </>
    )
}

export default SignInPage
