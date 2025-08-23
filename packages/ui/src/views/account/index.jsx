import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// utils
import useNotifier from '@/utils/useNotifier'
import { validatePassword } from '@/utils/validation'

// material-ui
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    OutlinedInput,
    Skeleton,
    Stack,
    TextField,
    Typography
} from '@mui/material'
import { darken, useTheme } from '@mui/material/styles'

// project imports
import ErrorBoundary from '@/ErrorBoundary'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import { StyledButton } from '@/ui-component/button/StyledButton'
import MainCard from '@/ui-component/cards/MainCard'
import SettingsSection from '@/ui-component/form/settings'
import PricingDialog from '@/ui-component/subscription/PricingDialog'

// Icons
import { IconAlertCircle, IconCreditCard, IconExternalLink, IconSparkles, IconX } from '@tabler/icons-react'

// API
import accountApi from '@/api/account.api'
import pricingApi from '@/api/pricing'
import userApi from '@/api/user'

// Hooks
import useApi from '@/hooks/useApi'

// Store
import { store } from '@/store'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { gridSpacing } from '@/store/constant'
import { useConfig } from '@/store/context/ConfigContext'
import { useError } from '@/store/context/ErrorContext'
import { userProfileUpdated } from '@/store/reducers/authSlice'

// ==============================|| ACCOUNT SETTINGS ||============================== //

 => {
     * 100, 100)
}

 => {
    
    
    u
    

     => 
     => 

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

     => {
         : 0
    }, 
     => {
         : 0
    }, 

     => )
     => )

    
    
    
    
    
    
    

    u => {
         {
            getU
            getP
            getA
            getCu
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
        try {
             {
                
                
                
            }
        }  {
            
        }
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            
            getCu
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            const included = getAdditionalSeatsQuantityApi.data?.includedSeats || 1
            const purchased = getAdditionalSeatsQuantityApi.data?.quantity || 0
            const occupied = getAdditionalSeatsQuantityApi.data?.totalOrgUsers || 1

            
            
            
            
        }
    }, 

     => {
         return ''
         => plan.p
        return currentPlan?.title || ''
    }, 

     => {
        
        try {
            const obj = {
                email: migrateEmail
            }
            
             {
                enqueueSnackbar({
                    message: `Instruction to cancel subscription has been sent to ${migrateEmail}`,
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
                message: 'Failed to access billing portal',
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        } finally {
            
        }
    }

     => {
        
        try {
            
             {
                w
            }
        }  {
            enqueueSnackbar({
                message: 'Failed to access billing portal',
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        } finally {
            
        }
    }

     => {
        try {
            const obj = {
                id: currentUser.id,
                name: profileName,
                email: email
            }
            
             {
                )
                enqueueSnackbar({
                    message: 'Profile updated',
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
                message: `Failed to update profile: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        try {
            const validationErrors = []
             {
                val
            }
            
             {
                val
            }
             {
                enqueueSnackbar({
                    me,
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
                return
            }

            const obj = {
                id: currentUser.id,
                password: newPassword
            }
            
             {
                )
                enqueueSnackbar({
                    message: 'Password updated',
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
                message: `Failed to update password: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        try {
            

             {
                th
            }

            await updateAdditionalSeatsApi.request(
                currentUser?.activeOrganizationSubscriptionId,
                newSeatsAmount,
                prorationInfo.prorationDate
            )
            enqueueSnackbar({
                message: 'Seats updated successfully',
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
            // Refresh the seats quantity display
            getA
        }  {
            
            enqueueSnackbar({
                message: `Failed to update seats: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        } finally {
            
            
            
            
            
        }
    }

     => {
        
        // Calculate proration for the new quantity
        const totalAdditionalSeats = operation === 'add' ? purchasedSeats + value : purchasedSeats - value
         {
            getA
        }
    }

     => {
         {
            
            
            
        }
    }

     => {
         {
            
            
            
        }
    }

    // Calculate empty seats
    

    return (
        <MainCard maxWidth='md'>
            {error ? (
                <ErrorBoundary error={error} />
            ) : (
                <Stack flexDirection='column' sx={{ gap: 4 }}>
                    <ViewHeader title='Account Settings' />
                    {isLoading && !getUserByIdApi.data ? (
                        <Box display='flex' flexDirection='column' gap={gridSpacing}>
                            <Skeleton width='25%' height={32} />
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                        </Box>
                    ) : (
                        <>
                            <SettingsSection title='Subscription & Billing'>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        g'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            gridColumn: 'span 2 / span 2',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            justifyContent: 'center',
                                            gap: 1,
                                            px: 2.5,
                                            py: 2
                                        }}
                                    >
                                        {currentPlanTitle && (
                                            <Stack sx={{ alignItems: 'center' }} flexDirection='row'>
                                                <Typography variant='body2'>Current Organization Plan:</Typography>
                                                <Typography sx={{ ml: 1, color: theme.palette.success.dark }} variant='h3'>
                                                    {}
                                                </Typography>
                                            </Stack>
                                        )}
                                        <Typography
                                            sx={{ opacity: customization.isDarkMode ? 0.7 : 1 }}
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            Update your billing details and subscription
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'end',
                                            px: 2.5,
                                            py: 2,
                                            gap: 2
                                        }}
                                    >
                                        <Button
                                            variant='outlined'
                                            endIcon={!isBillingLoading && <IconExternalLink />}
                                            disabled={!currentUser.isOrganizationAdmin || isBillingLoading}
                                            onClick={handleBillingPortalClick}
                                            sx={{ borderRadius: 2, height: 40 }}
                                        >
                                            {isBillingLoading ? (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CircularProgress size={16} color='inherit' />
                                                    Loading
                                                </Box>
                                            ) : (
                                                'Billing'
                                            )}
                                        </Button>
                                        <Button
                                            variant='contained'
                                            sx={{
                                                mr: 1,
                                                ml: 2,
                                                minWidth: 160,
                                                height: 40,
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
                                            endIcon={<IconSparkles />}
                                            disabled={!currentUser.isOrganizationAdmin}
                                             => }
                                        >
                                            Change Plan
                                        </Button>
                                    </Box>
                                </Box>
                            </SettingsSection>
                            <SettingsSection title='Seats'>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        g'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            gridColumn: 'span 2 / span 2',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            justifyContent: 'center',
                                            gap: 1,
                                            px: 2.5,
                                            py: 2
                                        }}
                                    >
                                        <Stack sx={{ alignItems: 'center' }} flexDirection='row'>
                                            <Typography variant='body2'>Seats Included in Plan:</Typography>
                                            <Typography sx={{ ml: 1, color: 'inherit' }} variant='h3'>
                                                {getAdditionalSeatsQuantityApi.loading ? <CircularProgress size={16} /> : includedSeats}
                                            </Typography>
                                        </Stack>
                                        <Stack sx={{ alignItems: 'center' }} flexDirection='row'>
                                            <Typography variant='body2'>Additional Seats Purchased:</Typography>
                                            <Typography sx={{ ml: 1, color: theme.palette.success.dark }} variant='h3'>
                                                {getAdditionalSeatsQuantityApi.loading ? <CircularProgress size={16} /> : purchasedSeats}
                                            </Typography>
                                        </Stack>
                                        <Stack sx={{ alignItems: 'center' }} flexDirection='row'>
                                            <Typography variant='body2'>Occupied Seats:</Typography>
                                            <Typography sx={{ ml: 1, color: 'inherit' }} variant='h3'>
                                                {getAdditionalSeatsQuantityApi.loading ? (
                                                    <CircularProgress size={16} />
                                                ) : (
                                                    `${occupiedSeats}/${totalSeats}`
                                                )}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'end',
                                            gap: 2,
                                            px: 2.5,
                                            py: 2
                                        }}
                                    >
                                        {getA === 'PRO' && (
                                            <Button
                                                variant='outlined'
                                                disabled={!currentUser.isOrganizationAdmin || !getAdditionalSeatsQuantityApi.data?.quantity}
                                                 => {
                                                    
                                                }}
                                                color='error'
                                                sx={{ borderRadius: 2, height: 40 }}
                                            >
                                                Remove Seats
                                            </Button>
                                        )}
                                        <StyledButton
                                            variant='contained'
                                            disabled={!currentUser.isOrganizationAdmin}
                                             => {
                                                 === 'PRO') {
                                                    
                                                } else {
                                                    
                                                }
                                            }}
                                            title='Add Seats is available only for PRO plan'
                                            sx={{ borderRadius: 2, height: 40 }}
                                        >
                                            Add Seats
                                        </StyledButton>
                                    </Box>
                                </Box>
                            </SettingsSection>
                            <SettingsSection title='Usage'>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        g'
                                    }}
                                >
                                    <Box sx={{ p: 2.5, borderRight: 1, borderColor: theme.palette.grey[900] + 25 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography variant='h3'>Predictions</Typography>
                                            <Typography variant='body2' color='text.secondary'>
                                                {`${usage?.predictions?.usage || 0} / ${usage?.predictions?.limit || 0}`}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                            <Box sx={{ width: '100%', mr: 1 }}>
                                                <LinearProgress
                                                    sx={{
                                                        height: 10,
                                                        borderRadius: 5,
                                                        '& .MuiLinearProgress-bar': {
                                                            ba => {
                                                                 return theme.palette.error.main
                                                                 return theme.palette.warning.main
                                                                 return theme.palette.success.light
                                                                return theme.palette.success.main
                                                            }
                                                        }
                                                    }}
                                                    value={predictionsUsageInPercent > 100 ? 100 : predictionsUsageInPercent}
                                                    variant='determinate'
                                                />
                                            </Box>
                                            <Typography variant='body2' color='text.secondary'>{`${predictionsUsageInPercent.toFixed(
                                                2
                                            )}%`}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: 2.5 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Typography variant='h3'>Storage</Typography>
                                            <Typography variant='body2' color='text.secondary'>
                                                {`${(u.t}MB / ${(u.toFixed(
                                                    2
                                                )}MB`}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                            <Box sx={{ width: '100%', mr: 1 }}>
                                                <LinearProgress
                                                    sx={{
                                                        height: 10,
                                                        borderRadius: 5,
                                                        '& .MuiLinearProgress-bar': {
                                                            ba => {
                                                                 return theme.palette.error.main
                                                                 return theme.palette.warning.main
                                                                 return theme.palette.success.light
                                                                return theme.palette.success.main
                                                            }
                                                        }
                                                    }}
                                                    value={storageUsageInPercent > 100 ? 100 : storageUsageInPercent}
                                                    variant='determinate'
                                                />
                                            </Box>
                                            <Typography variant='body2' color='text.secondary'>{`${storageUsageInPercent.toFixed(
                                                2
                                            )}%`}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </SettingsSection>
                            <SettingsSection
                                action={
                                    <StyledButton onClick={saveProfileData} sx={{ borderRadius: 2, height: 40 }} variant='contained'>
                                        Save
                                    </StyledButton>
                                }
                                title='Profile'
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: gridSpacing,
                                        px: 2.5,
                                        py: 2
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Typography variant='body1'>Name</Typography>
                                        <OutlinedInput
                                            id='name'
                                            type='string'
                                            fullWidth
                                            placeholder='Your Name'
                                            name='name'
                                             => }
                                            value={profileName}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Typography variant='body1'>Email Address</Typography>
                                        <OutlinedInput
                                            id='email'
                                            type='string'
                                            fullWidth
                                            placeholder='Email Address'
                                            name='email'
                                             => }
                                            value={email}
                                        />
                                    </Box>
                                </Box>
                            </SettingsSection>
                            {!currentUser.isSSO && (
                                <SettingsSection
                                    action={
                                        <StyledButton
                                            disabled={!newPassword || !confirmPassword || newPassword !== confirmPassword}
                                            onClick={savePassword}
                                            sx={{ borderRadius: 2, height: 40 }}
                                            variant='contained'
                                        >
                                            Save
                                        </StyledButton>
                                    }
                                    title='Security'
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: gridSpacing,
                                            px: 2.5,
                                            py: 2
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                gridColumn: 'span 2 / span 2',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1
                                            }}
                                        >
                                            <Typography variant='body1'>New Password</Typography>
                                            <OutlinedInput
                                                id='newPassword'
                                                type='password'
                                                fullWidth
                                                placeholder='New Password'
                                                name='newPassword'
                                                 => }
                                                value={newPassword}
                                            />
                                            <Typography variant='caption'>
                                                <i>
                                                    Password must be at least 8 characters long and contain at least one lowercase letter,
                                                    one uppercase letter, one digit, and one special character.
                                                </i>
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                gridColumn: 'span 2 / span 2',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1
                                            }}
                                        >
                                            <Typography variant='body1'>Confirm Password</Typography>
                                            <OutlinedInput
                                                id='confirmPassword'
                                                type='password'
                                                fullWidth
                                                placeholder='Confirm Password'
                                                name='confirmPassword'
                                                 => }
                                                value={confirmPassword}
                                            />
                                        </Box>
                                    </Box>
                                </SettingsSection>
                            )}
                            <SettingsSection title='Cancel Previous Subscription'>
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        g'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            gridColumn: 'span 2 / span 2',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'start',
                                            justifyContent: 'center',
                                            gap: 1,
                                            px: 2.5,
                                            py: 2
                                        }}
                                    >
                                        <Typography variant='body2'>Migrate from existing cloud subscription?</Typography>
                                        <Typography variant='body2' color='text.secondary'>
                                            {`If you have an existing cloud app like <your-app>.app.flowise-ai.github.io, after finished migrating your work, you can cancel the previous subscription. We'll send you an email with a link to cancel your previous subscription.`}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                                            <OutlinedInput
                                                id='email'
                                                type='string'
                                                fullWidth
                                                placeholder='Email Address'
                                                name='email'
                                                 => }
                                                value={migrateEmail}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'end',
                                            px: 2.5,
                                            py: 2,
                                            gap: 2
                                        }}
                                    >
                                        <Button
                                            variant='outlined'
                                            disabled={!currentUser.isOrganizationAdmin || isMigrateLoading}
                                            onClick={handleMigrateEmail}
                                            sx={{ borderRadius: 2, height: 40 }}
                                        >
                                            {isMigrateLoading ? (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CircularProgress size={16} color='inherit' />
                                                    Loading
                                                </Box>
                                            ) : (
                                                'Send Instructions'
                                            )}
                                        </Button>
                                    </Box>
                                </Box>
                            </SettingsSection>
                        </>
                    )}
                </Stack>
            )}
            {openPricingDialog && isCloud && (
                <PricingDialog
                    open={openPricingDialog}
                     => {
                        
                         {
                            nav
                            nav
                        }
                    }}
                />
            )}
            {/* Remove Seats Dialog */}
            <Dialog fullWidth maxWidth='sm' open={openRemoveSeatsDialog} onClose={handleRemoveSeatsDialogClose}>
                <DialogTitle variant='h4'>Remove Additional Seats</DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {emptySeats === 0 ? (
                            <Typography
                                color='error'
                                sx={{
                                    p: 2,
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                }}
                            >
                                <IconAlertCircle size={20} />
                                You must remove users from your organization before removing seats.
                            </Typography>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 1,
                                    p: 2
                                }}
                            >
                                {/* Occupied Seats */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>Occupied Seats</Typography>
                                    <Typography variant='body2'>{occupiedSeats}</Typography>
                                </Box>

                                {/* Empty Seats */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>Empty Seats</Typography>
                                    <Typography variant='body2'>{emptySeats}</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>Number of Empty Seats to Remove</Typography>
                                    <TextField
                                        size='small'
                                        type='number'
                                        value={seatsQuantity}
                                         => {
                                             || 0))
                                            han
                                        }}
                                         => {
                                             {
                                                e.p
                                            }
                                        }}
                                        InputProps={{
                                            inputProps: {
                                                min: 0,
                                                max: emptySeats,
                                                step: 1
                                            }
                                        }}
                                        sx={{ width: '70px' }}
                                        disabled={!getCustomerDefaultSourceApi.data}
                                    />
                                </Box>

                                {/* Total Seats */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        pt: 1.5,
                                        borderTop: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    <Typography variant='h5'>New Total Seats</Typography>
                                    <Typography variant='h5'>{totalSeats - seatsQuantity}</Typography>
                                </Box>
                            </Box>
                        )}

                        {getAdditionalSeatsProrationApi.loading && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CircularProgress size={16} />
                            </Box>
                        )}

                        {getCustomerDefaultSourceApi.loading ? (
                            <CircularProgress size={20} />
                        ) : getCustomerDefaultSourceApi.data?.invoice_settings?.default_payment_method ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
                                <Typography variant='subtitle2'>Payment Method</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card && (
                                        <>
                                            <IconCreditCard size={20} stroke={1.5} color={theme.palette.primary.main} />
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography sx={{ textTransform: 'capitalize' }}>
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.brand}
                                                </Typography>
                                                <Typography>
                                                    ••••{' '}
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.last4}
                                                </Typography>
                                                <Typography color='text.secondary'>
                                                    (expires{' '}
                                                    {
                                                        getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card
                                                            .exp_month
                                                    }
                                                    /
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.exp_year}
                                                    )
                                                </Typography>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                                <Typography color='error' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconAlertCircle size={20} />
                                    No payment method found
                                </Typography>
                                <Button
                                    variant='contained'
                                    endIcon={<IconExternalLink />}
                                     => {
                                        
                                        han
                                    }}
                                >
                                    Add Payment Method in Billing Portal
                                </Button>
                            </Box>
                        )}

                        {/* Proration info */}
                        {prorationInfo && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 1,
                                    p: 2
                                }}
                            >
                                {/* Date Range */}
                                <Typography variant='body2' color='text.secondary'>
                                    {new .toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric'
                                    })}{' '}
                                    -{' '}
                                    {new .toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </Typography>

                                {/* Base Plan */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Typography variant='body2'>{currentPlanTitle}</Typography>
                                    <Typography variant='body2'>
                                        {p.t}
                                    </Typography>
                                </Box>

                                {/* Additional Seats */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box>
                                        <Typ</Typography>
                                        <Typography variant='caption' color='text.secondary'>
                                            Qty {purchasedSeats - seatsQuantity}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='body2'>
                                            {p.t}
                                        </Typography>
                                        <Typography variant='caption' color='text.secondary'>
                                            {p} each
                                        </Typography>
                                    </Box>
                                </Box>

                                {prorationInfo.prorationAmount < 0 && (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography variant='body2'>Credit balance</Typography>
                                        <Typography
                                            variant='body2'
                                            color={prorationInfo.prorationAmount < 0 ? 'success.main' : 'error.main'}
                                        >
                                            {prorationInfo.currency} {prorationInfo.prorationAmount < 0 ? '+' : ''}
                                            {Math.ab.t}
                                        </Typography>
                                    </Box>
                                )}

                                {/* Next Payment */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        pt: 1.5,
                                        borderTop: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    <Typography variant='h5'>Due today</Typography>
                                    <Typography variant='h5'>
                                        {p.t}
                                    </Typography>
                                </Box>

                                {prorationInfo.prorationAmount < 0 && (
                                    <Typography
                                        variant='body2'
                                        sx={{
                                            color: 'info.main',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        Your available credit will automatically apply to your next invoice.
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                {getCustomerDefaultSourceApi.data?.invoice_settings?.default_payment_method && (
                    <DialogActions>
                        <Button onClick={handleRemoveSeatsDialogClose} disabled={isUpdatingSeats}>
                            Cancel
                        </Button>
                        <Button
                            variant='outlined'
                             => han}
                            disabled={
                                getCustomerDefaultSourceApi.loading ||
                                !getCustomerDefaultSourceApi.data ||
                                getAdditionalSeatsProrationApi.loading ||
                                isUpdatingSeats ||
                                seatsQuantity === 0 ||
                                emptySeats === 0
                            }
                            color='error'
                        >
                            {isUpdatingSeats ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CircularProgress size={16} color='inherit' />
                                    Updating...
                                </Box>
                            ) : (
                                'Remove Seats'
                            )}
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
            {/* Add Seats Dialog */}
            <Dialog fullWidth maxWidth='sm' open={openAddSeatsDialog} onClose={handleAddSeatsDialogClose}>
                <DialogTitle variant='h4'>Add Additional Seats</DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                                p: 2
                            }}
                        >
                            {/* Occupied Seats */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>Occupied Seats</Typography>
                                <Typography variant='body2'>{occupiedSeats}</Typography>
                            </Box>

                            {/* Included Seats */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>Seats Included with Plan</Typography>
                                <Typography variant='body2'>{includedSeats}</Typography>
                            </Box>

                            {/* Additional Seats */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>Additional Seats Purchased</Typography>
                                <Typography variant='body2'>{purchasedSeats}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant='body2'>Number of Additional Seats to Add</Typography>
                                <TextField
                                    size='small'
                                    type='number'
                                    value={seatsQuantity}
                                     => {
                                         || 0)
                                        han
                                    }}
                                     => {
                                         {
                                            e.p
                                        }
                                    }}
                                    InputProps={{
                                        inputProps: {
                                            min: 0
                                        }
                                    }}
                                    sx={{ width: '70px' }}
                                    disabled={!getCustomerDefaultSourceApi.data}
                                />
                            </Box>

                            {/* Total Seats */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: 1.5,
                                    borderTop: `1px solid ${theme.palette.divider}`
                                }}
                            >
                                <Typography variant='h5'>New Total Seats</Typography>
                                <Typography variant='h5'>{totalSeats + seatsQuantity}</Typography>
                            </Box>
                        </Box>

                        {getAdditionalSeatsProrationApi.loading && (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CircularProgress size={16} />
                            </Box>
                        )}

                        {getCustomerDefaultSourceApi.loading ? (
                            <CircularProgress size={20} />
                        ) : getCustomerDefaultSourceApi.data?.invoice_settings?.default_payment_method ? (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2 }}>
                                <Typography variant='subtitle2'>Payment Method</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card && (
                                        <>
                                            <IconCreditCard size={20} stroke={1.5} color={theme.palette.primary.main} />
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography sx={{ textTransform: 'capitalize' }}>
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.brand}
                                                </Typography>
                                                <Typography>
                                                    ••••{' '}
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.last4}
                                                </Typography>
                                                <Typography color='text.secondary'>
                                                    (expires{' '}
                                                    {
                                                        getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card
                                                            .exp_month
                                                    }
                                                    /
                                                    {getCustomerDefaultSourceApi.data.invoice_settings.default_payment_method.card.exp_year}
                                                    )
                                                </Typography>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
                                <Typography color='error' sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconAlertCircle size={20} />
                                    No payment method found
                                </Typography>
                                <Button
                                    variant='contained'
                                    endIcon={<IconExternalLink />}
                                     => {
                                        
                                        han
                                    }}
                                >
                                    Add Payment Method in Billing Portal
                                </Button>
                            </Box>
                        )}

                        {/* Proration info */}
                        {prorationInfo && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 1,
                                    p: 2
                                }}
                            >
                                {/* Date Range */}
                                <Typography variant='body2' color='text.secondary'>
                                    {new .toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric'
                                    })}{' '}
                                    -{' '}
                                    {new .toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </Typography>

                                {/* Base Plan */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant='body2'>{currentPlanTitle}</Typography>
                                    <Typography variant='body2'>
                                        {p}
                                    </Typography>
                                </Box>

                                {/* Additional Seats */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typ</Typography>
                                        <Typography variant='caption' color='text.secondary'>
                                            Qty {seatsQuantity + purchasedSeats}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='body2'>
                                            {p}
                                        </Typography>
                                        <Typography variant='caption' color='text.secondary'>
                                            {p} each
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Credit Balance */}
                                {prorationInfo.creditBalance !== 0 && (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='body2'>Applied account balance</Typography>
                                        <Typography variant='body2' color={prorationInfo.creditBalance < 0 ? 'success.main' : 'error.main'}>
                                            {p}
                                        </Typography>
                                    </Box>
                                )}

                                {/* Next Payment */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        pt: 1.5,
                                        borderTop: `1px solid ${theme.palette.divider}`
                                    }}
                                >
                                    <Typography variant='h5'>Due today</Typography>
                                    <Typography variant='h5'>
                                        {prorationInfo.currency}{' '}
                                        {Math.max(0, p.t}
                                    </Typography>
                                </Box>

                                {prorationInfo.prorationAmount === 0 && prorationInfo.creditBalance < 0 && (
                                    <Typography
                                        variant='body2'
                                        sx={{
                                            color: 'info.main',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        Your available credit will automatically apply to your next invoice.
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                {getCustomerDefaultSourceApi.data?.invoice_settings?.default_payment_method && (
                    <DialogActions>
                        <Button onClick={handleAddSeatsDialogClose} disabled={isUpdatingSeats}>
                            Cancel
                        </Button>
                        <Button
                            variant='contained'
                             => han}
                            disabled={
                                getCustomerDefaultSourceApi.loading ||
                                !getCustomerDefaultSourceApi.data ||
                                getAdditionalSeatsProrationApi.loading ||
                                isUpdatingSeats ||
                                seatsQuantity === 0
                            }
                        >
                            {isUpdatingSeats ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CircularProgress size={16} color='inherit' />
                                    Updating...
                                </Box>
                            ) : (
                                'Add Seats'
                            )}
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </MainCard>
    )
}

export default AccountSettings
