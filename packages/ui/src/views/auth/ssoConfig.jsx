import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'

// material-ui
import { Popover, IconButton, Stack, Typography, Box, OutlinedInput, Button, Tabs, Tab, Divider } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import { SwitchInput } from '@/ui-component/switch/Switch'
import { PermissionButton, StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import { TabPanel } from '@/ui-component/tabs/TabPanel'

// API
import loginMethodApi from '@/api/loginmethod'
import useApi from '@/hooks/useApi'

// utils
import useNotifier from '@/utils/useNotifier'
import { useError } from '@/store/context/ErrorContext'

// Icons
import { IconAlertTriangle, IconX, IconCopy } from '@tabler/icons-react'
import MicrosoftSVG from '@/assets/images/microsoft-azure.svg'
import GoogleSVG from '@/assets/images/google.svg'
import Auth0SVG from '@/assets/images/auth0.svg'
import GithubSVG from '@/assets/images/github.svg'

// const
import { gridSpacing } from '@/store/constant'

 => {
    u
    
    

    
     => )
     => )

    
    
    
    
    

    
    
    
    

    
    
    
    

    
    
    
    
    

    
    

    
    

    
    

     => 

     => {
        
    }

     => {
         {
            val
        }
         {
            val
        }
         {
            val
        }
    }
     => {
         {
            val
        }
         {
            val
        }
    }

     => {
         {
            val
        }
         {
            val
        }
    }

     => {
         {
            val
        }
         {
            val
        }
         {
            val
        }
    }

     => {
        const validationErrors = []
        
         {
            val
        }
         {
            val
        }
         {
            val
        }
         {
            val
        }
        return validationErrors
    }

    fun {
        const body = {
            organizationId: currentUser.activeOrganizationId,
            userId: currentUser.id,
            providers: [
                {
                    providerLabel: 'Microsoft',
                    providerName: 'azure',
                    config: {
                        tenantID: azureTenantID,
                        clientID: azureClientID,
                        clientSecret: azureClientSecret
                    },
                    status: azureConfigEnabled ? 'enable' : 'disable'
                },
                {
                    providerLabel: 'Google',
                    providerName: 'google',
                    config: {
                        clientID: googleClientID,
                        clientSecret: googleClientSecret
                    },
                    status: googleConfigEnabled ? 'enable' : 'disable'
                },
                {
                    providerLabel: 'Auth0',
                    providerName: 'auth0',
                    config: {
                        domain: auth0Domain,
                        clientID: auth0ClientID,
                        clientSecret: auth0ClientSecret
                    },
                    status: auth0ConfigEnabled ? 'enable' : 'disable'
                },
                {
                    providerLabel: 'Github',
                    providerName: 'github',
                    config: {
                        clientID: githubClientID,
                        clientSecret: githubClientSecret
                    },
                    status: githubConfigEnabled ? 'enable' : 'disable'
                }
            ]
        }
        return body
    }

     => {
        
         {
            
            return
        }
        
        try {
            )
            
            
             {
                enqueueSnackbar({
                    message: 'SSO Configuration Updated!',
                    options: {
                        key: new .getT + Math.,
                        variant: 'success',
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
            }
        }  {
            
            
            enqueueSnackbar({
                message: `Failed to update SSO Configuration.`,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        }
    }

     => {
        let validationErrors = []
         {
            case 'Azure':
                val
                break
            case 'Google':
                val
                break
            case 'Auth0':
                val
                break
            case 'Gtihub':
                val
                break
        }
         {
            
            return
        }
        
        // depending on the tab value, we need to set the provider name and remove the other provider
        body.providers = [body.providers[tabValue]]
        b
        
        try {
            
            
            
             {
                enqueueSnackbar({
                    me} SSO Configuration is Valid!`,
                    options: {
                        key: new .getT + Math.,
                        variant: 'success',
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
            }
             {
                enqueueSnackbar({
                    message: `${updateResponse.data.error}`,
                    options: {
                        key: new .getT + Math.,
                        variant: 'error',
                        persist: true,
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
            }
        }  {
            
            
            enqueueSnackbar({
                me} SSO Configuration.`,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        }
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
         {
            case 0:
                return 'Azure'
            case 1:
                return 'Google'
            case 2:
                return 'Auth0'
            case 3:
                return 'Github'
        }
    }

    u => {
         {
            const data = getLoginMethodsApi.data
             => p
             => 
             {
                
            }
             {
                
                
                
                
            }
             => p
             => 
             {
                
            }
             {
                
                
                
            }
             => p
             => 
             {
                
            }

             {
                
                
                
                
            }

             => p
             => 
             {
                
            }
             {
                
                
                
            }
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
        getL
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 3 }}>
                        <ViewHeader search={false} title='Configure SSO' />
                        {authErrors && authErrors.length > 0 && (
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    ba',
                                    padding: 10,
                                    paddingTop: 15,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}
                            >
                                <Box sx={{ pl: 2 }}>
                                    <IconAlertTriangle size={25} color='orange' />
                                </Box>
                                <Stack flexDirection='column'>
                                    <' }}>
                                        <ul>
                                            {authE => (
                                                <strong key={key}>
                                                    <li>{msg}</li>
                                                </strong>
                                            ))}
                                        </ul>
                                    </span>
                                </Stack>
                            </div>
                        )}
                        <Tab => } aria-label='tabs'>
                            <Tab
                                iconPosition='start'
                                icon={<img alt='MS_SSO' src={MicrosoftSVG} width={24} height={24} />}
                                sx={{
                                    minHeight: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1
                                }}
                                value={0}
                                label={
                                    <>
                                        Microsoft
                                        {azureConfigEnabled && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#d8f3dc',
                                                    borderRadius: 15,
                                                    padding: 3,
                                                    paddingLeft: 7,
                                                    paddingRight: 7,
                                                    marginRight: 7,
                                                    marginLeft: 7
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#70e000'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </>
                                }
                            />
                            <Tab
                                iconPosition='start'
                                icon={<img alt='Google_SSO' src={GoogleSVG} width={24} height={24} />}
                                sx={{
                                    minHeight: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1
                                }}
                                value={1}
                                label={
                                    <>
                                        Google
                                        {googleConfigEnabled && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#d8f3dc',
                                                    borderRadius: 15,
                                                    padding: 3,
                                                    paddingLeft: 7,
                                                    paddingRight: 7,
                                                    marginRight: 7,
                                                    marginLeft: 7
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#70e000'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </>
                                }
                            />
                            <Tab
                                iconPosition='start'
                                icon={<img alt='Auth0_SSO' src={Auth0SVG} width={24} height={24} />}
                                sx={{
                                    minHeight: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1
                                }}
                                value={2}
                                label={
                                    <>
                                        Auth0
                                        {auth0ConfigEnabled && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#d8f3dc',
                                                    borderRadius: 15,
                                                    padding: 3,
                                                    paddingLeft: 7,
                                                    paddingRight: 7,
                                                    marginRight: 7,
                                                    marginLeft: 7
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#70e000'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </>
                                }
                            />
                            <Tab
                                iconPosition='start'
                                icon={<img alt='Github_SSO' src={GithubSVG} width={24} height={24} />}
                                sx={{
                                    minHeight: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 1
                                }}
                                value={3}
                                label={
                                    <>
                                        Github
                                        {githubConfigEnabled && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    background: '#d8f3dc',
                                                    borderRadius: 15,
                                                    padding: 3,
                                                    paddingLeft: 7,
                                                    paddingRight: 7,
                                                    marginRight: 7,
                                                    marginLeft: 7
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#70e000'
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </>
                                }
                            />
                        </Tabs>
                        <TabPanel index={0} value={tabValue}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: gridSpacing
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography style={{ verticalAlign: 'middle', width: '50%' }}> Enable SSO Login</Typography>
                                    <SwitchInput
                                        style={{ verticalAlign: 'middle', width: '50%' }}
                                        onChange={handleAzureChange}
                                        value={azureConfigEnabled}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Stack direction='row'>
                                        <Typography
                                            sx={{
                                                p: 1,
                                                borderRadius: 10,
                                                backgroundColor: theme.palette.primary.light,
                                                width: 'max-content',
                                                height: 'max-content'
                                            }}
                                            variant='h5'
                                        >
                                            {azureCallbackURL}
                                        </Typography>
                                        <IconButton
                                            title='Copy Callback URL'
                                            color='success'
                                             => {
                                                nav
                                                
                                                 => {
                                                    han
                                                }, 1500)
                                            }}
                                        >
                                            <IconCopy />
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>Tenant ID</Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='email'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Tenant ID'
                                        name='azureTenantID'
                                         => }
                                        value={azureTenantID}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client ID<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Client ID'
                                        name='azureClientID'
                                         => }
                                        value={azureClientID}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client Secret<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='password'
                                        fullWidth
                                        size='small'
                                        placeholder='Client Secret'
                                        name='azureClientSecret'
                                         => }
                                        value={azureClientSecret}
                                    />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel index={1} value={tabValue}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: gridSpacing
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography style={{ verticalAlign: 'middle', width: '50%' }}> Enable SSO Login</Typography>
                                    <SwitchInput
                                        style={{ verticalAlign: 'middle', width: '50%' }}
                                        onChange={handleGoogleChange}
                                        value={googleConfigEnabled}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Stack direction='row'>
                                        <Typography
                                            sx={{
                                                p: 1,
                                                borderRadius: 10,
                                                backgroundColor: theme.palette.primary.light,
                                                width: 'max-content',
                                                height: 'max-content'
                                            }}
                                            variant='h5'
                                        >
                                            {googleCallbackURL}
                                        </Typography>
                                        <IconButton
                                            title='Copy Callback URL'
                                            color='success'
                                             => {
                                                nav
                                                
                                                 => {
                                                    han
                                                }, 1500)
                                            }}
                                        >
                                            <IconCopy />
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client ID<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Client ID'
                                        name='googleClientID'
                                         => }
                                        value={googleClientID}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client Secret<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='password'
                                        fullWidth
                                        size='small'
                                        placeholder='Client Secret'
                                        name='googleClientSecret'
                                         => }
                                        value={googleClientSecret}
                                    />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel index={2} value={tabValue}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: gridSpacing
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography style={{ verticalAlign: 'middle', width: '50%' }}> Enable SSO Login</Typography>
                                    <SwitchInput
                                        style={{ verticalAlign: 'middle', width: '50%' }}
                                        onChange={handleAuth0Change}
                                        value={auth0ConfigEnabled}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Stack direction='row'>
                                        <Typography
                                            sx={{
                                                p: 1,
                                                borderRadius: 10,
                                                backgroundColor: theme.palette.primary.light,
                                                width: 'max-content',
                                                height: 'max-content'
                                            }}
                                            variant='h5'
                                        >
                                            {auth0CallbackURL}
                                        </Typography>
                                        <IconButton
                                            title='Copy Callback URL'
                                            color='success'
                                             => {
                                                nav
                                                
                                                 => {
                                                    han
                                                }, 1500)
                                            }}
                                        >
                                            <IconCopy />
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>Auth0 Domain</Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='email'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Auth0 Domain'
                                        name='auth0Domain'
                                         => }
                                        value={auth0Domain}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client ID<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Client ID'
                                        name='auth0ClientID'
                                         => }
                                        value={auth0ClientID}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client Secret<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='password'
                                        fullWidth
                                        size='small'
                                        placeholder='Client Secret'
                                        name='auth0ClientSecret'
                                         => }
                                        value={auth0ClientSecret}
                                    />
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel index={3} value={tabValue}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: gridSpacing
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography style={{ verticalAlign: 'middle', width: '50%' }}> Enable SSO Login</Typography>
                                    <SwitchInput
                                        style={{ verticalAlign: 'middle', width: '50%' }}
                                        onChange={handleGithubChange}
                                        value={githubConfigEnabled}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Stack direction='row'>
                                        <Typography
                                            sx={{
                                                p: 1,
                                                borderRadius: 10,
                                                backgroundColor: theme.palette.primary.light,
                                                width: 'max-content',
                                                height: 'max-content'
                                            }}
                                            variant='h5'
                                        >
                                            {githubCallbackURL}
                                        </Typography>
                                        <IconButton
                                            title='Copy Callback URL'
                                            color='success'
                                             => {
                                                nav
                                                
                                                 => {
                                                    han
                                                }, 1500)
                                            }}
                                        >
                                            <IconCopy />
                                        </IconButton>
                                    </Stack>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client ID<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='string'
                                        fullWidth
                                        size='small'
                                        placeholder='Client ID'
                                        name='githubClientID'
                                         => }
                                        value={githubClientID}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography>
                                            Client Secret<span style={{ color: 'red' }}>&nbsp;*</span>
                                        </Typography>
                                        <div style={{ flexGrow: 1 }}></div>
                                    </div>
                                    <OutlinedInput
                                        id='name'
                                        type='password'
                                        fullWidth
                                        size='small'
                                        placeholder='Client Secret'
                                        name='githubClientSecret'
                                         => }
                                        value={githubClientSecret}
                                    />
                                </Box>
                            </Box>
                        </TabPanel>

                        <Divider />
                        <Box sx={{ gridColumn: 'span 2 / span 2' }}>
                            <PermissionButton
                                permissionId={'sso:manage'}
                                variant='outlined'
                                style={{ marginBottom: 10, marginTop: 10, marginRight: 10 }}
                                 => val)}
                            >
                                {'Te + ' Configuration'}
                            </PermissionButton>

                            <StyledPermissionButton
                                permissionId={'sso:manage'}
                                style={{ marginBottom: 10, marginTop: 10 }}
                                variant='contained'
                                 => val}
                            >
                                Save
                            </StyledPermissionButton>
                        </Box>
                    </Stack>
                )}
            </MainCard>
            {loading && <BackdropLoader open={loading} />}
            <Popover
                open={openCopyPopOver}
                anchorEl={copyAnchorEl}
                onClose={handleCloseCopyPopOver}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <Typography variant='h6' sx={{ pl: 1, pr: 1, color: 'white', background: theme.palette.success.dark }}>
                    Copied!
                </Typography>
            </Popover>
        </>
    )
}

export default SSOConfigPage
