import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// material-ui
import { Button, Avatar, Box, ButtonBase, Switch, Typography, Link } from '@mui/material'
import { useTheme, styled, darken } from '@mui/material/styles'

// project imports
import LogoSection from '../LogoSection'
import ProfileSection from './ProfileSection'
import WorkspaceSwitcher from '@/layout/MainLayout/Header/WorkspaceSwitcher'
import OrgWorkspaceBreadcrumbs from '@/layout/MainLayout/Header/OrgWorkspaceBreadcrumbs'
import PricingDialog from '@/ui-component/subscription/PricingDialog'

// assets
import { IconMenu2, IconX, IconSparkles } from '@tabler/icons-react'

// store
import { store } from '@/store'
import { SET_DARKMODE } from '@/store/actions'
import { useConfig } from '@/store/context/ConfigContext'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import { logoutSuccess } from '@/store/reducers/authSlice'

// API
import accountApi from '@/api/account.api'

// Hooks
import useApi from '@/hooks/useApi'
import useNotifier from '@/utils/useNotifier'

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        t',
        '&.Mui-checked': {
            color: '#fff',
            t',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" `
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
            }
        }
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" `
        }
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2
    }
}))

 => {
    

    

    return (
        <Link href='https://github.com/FlowiseAI/Flowise' target='_blank' underline='none' sx={{ display: 'inline-flex' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    b' : ''}`,
                    fontSize: '12px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    lineHeight: 1
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 10px',
                        ba : '#f6f8fa',
                        color: isDark ? '#c9d1d9' : '#24292e',
                        b' : ''}`
                    }}
                >
                    <svg height='16' width='16' viewBox='0 0 16 16' style={{ marginRight: '4px', fill: isDark ? '#c9d1d9' : '#24292e' }}>
                        <path
                            fillRule='evenodd'
                            d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
                        ></path>
                    </svg>
                    <Typography variant='caption' sx={{ fontWeight: 600, color: isDark ? 'white' : theme.palette.text.primary }}>
                        Star
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '3px 10px',
                        backgroundColor: isDark ? theme.palette.background.paper : 'white'
                    }}
                >
                    <Typography variant='caption' sx={{ fontWeight: 600, color: isDark ? 'white' : theme.palette.text.primary }}>
                        {formattedStarCount}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

GitHubStarButton.propTypes = {
    starCount: PropTypes.number.isRequired,
    isDark: PropTypes.bool.isRequired
}

 => {
    
    

     => 
    

    
    
    
     => 
     => 
    
    

    u

     => )
     => )

     => {
        
         => 
        l
    }

     => {
        l
        enqueueSnackbar({
            message: 'Logging out...',
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

    u => {
        try {
             {
                )
                window.location.href = logoutApi.data.redirectTo
            }
        }  {
            
        }
    }, 

    u => {
         {
             => {
                try {
                    
                    
                     {
                        
                    }
                }  {
                    
                }
            }

            fet
        }
    }, 

    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    ]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component='span' sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                {isAuthenticated && (
                    <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <Avatar
                            variant='rounded'
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.secondary.light,
                                color: theme.palette.secondary.dark,
                                '&:hover': {
                                    background: theme.palette.secondary.dark,
                                    color: theme.palette.secondary.light
                                }
                            }}
                            onClick={handleLeftDrawerToggle}
                            color='inherit'
                        >
                            <IconMenu2 stroke={1.5} size='1.3rem' />
                        </Avatar>
                    </ButtonBase>
                )}
            </Box>
            {isCloud || isOpenSource ? (
                <Box
                    sx={{
                        flexGrow: 1,
                        px: 4,
                        display: 'flex',
                        alignItems: 'center',
                        '& span': {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }}
                >
                    <GitHubStarButton starCount={starCount} isDark={isDark} />
                </Box>
            ) : (
                <Box sx={{ flexGrow: 1 }} />
            )}
            {isEnterpriseLicensed && isAuthenticated && <WorkspaceSwitcher />}
            {isCloud && isAuthenticated && <OrgWorkspaceBreadcrumbs />}
            {isCloud && currentUser?.isOrganizationAdmin && (
                <Button
                    variant='contained'
                    sx={{
                        mr: 1,
                        ml: 2,
                        borderRadius: 15,
                        ba =>
                            `l`,
                         => theme.palette.secondary.contrastText,
                        b',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            ba =>
                                `l} 10%, ${darken(
                                    theme.palette.secondary.main,
                                    0.1
                                )} 100%)`,
                            b'
                        }
                    }}
                     => }
                    startIcon={<IconSparkles size={20} />}
                >
                    Upgrade
                </Button>
            )}
            {isPricingOpen && isCloud && (
                <PricingDialog
                    open={isPricingOpen}
                     => {
                        
                         {
                            nav
                            nav
                        }
                    }}
                />
            )}
            <MaterialUISwitch checked={isDark} onChange={changeDarkMode} />
            <Box sx={{ ml: 2 }}></Box>
            <ProfileSection handleLogout={signOutClicked} />
        </>
    )
}

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
}

export default Header
