import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import parser from 'html-react-parser'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Stack, OutlinedInput, Typography } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import CredentialInputHandler from './CredentialInputHandler'

// Icons
import { IconHandStop, IconX } from '@tabler/icons-react'

// API
import credentialsApi from '@/api/credentials'
import oauth2Api from '@/api/oauth2'

// Hooks
import useApi from '@/hooks/useApi'

// utils
import useNotifier from '@/utils/useNotifier'
import { initializeDefaultNodeData } from '@/utils/genericHelper'

// const
import { baseURL, REDACTED_CREDENTIAL_VALUE } from '@/store/constant'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import keySVG from '@/assets/images/key.svg'

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    

    
    
    
    
    

    u => {
         {
            const shared = getSpecificCredentialApi.data.shared
            
             {
                
                 {
                    
                }
                 {
                    
                }
                getSpe
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            // When credential dialog is opened from Credentials dashboard
            getSpe
        } el {
            // When credential dialog is opened from node in canvas
            getSpe
        } el {
            // When credential dialog is to add a new credential
            
            
            
            
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

     => {
        try {
            const obj = {
                name,
                credentialName: componentCredential.name,
                plainDataObj: credentialData
            }
            
             {
                enqueueSnackbar({
                    message: 'New Credential added',
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
                message: `Failed to add new Credential: ${
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
            const saveObj = {
                name,
                credentialName: componentCredential.name
            }

            let plainDataObj = {}
            f {
                 {
                    plainDataObj[key] = credentialData[key]
                }
            }
            .length) saveObj.plainDataObj = plainDataObj

            
             {
                enqueueSnackbar({
                    message: 'Credential saved',
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
                message: `Failed to save Credential: ${
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
            let credentialId = null

            // First save or add the credential
             {
                // Add new credential first
                const obj = {
                    name,
                    credentialName: componentCredential.name,
                    plainDataObj: credentialData
                }
                
                 {
                    credentialId = createResp.data.id
                }
            } else {
                // Save existing credential first
                const saveObj = {
                    name,
                    credentialName: componentCredential.name
                }

                let plainDataObj = {}
                f {
                     {
                        plainDataObj[key] = credentialData[key]
                    }
                }
                .length) saveObj.plainDataObj = plainDataObj

                
                 {
                    credentialId = credential.id
                }
            }

             {
                th
            }

            

             {
                // Open the authorization URL in a new window/tab
                const authWindow = window.open(
                    authResponse.data.authorizationUrl,
                    '_blank',
                    'width=600,height=700,scrollbars=yes,resizable=yes'
                )

                 {
                    th
                }

                // Listen for messages from the popup window
                 => {
                    // Ve
                    ) {
                        w

                         {
                            enqueueSnackbar({
                                message: 'OAuth2 authorization completed successfully',
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
                            
                        } el {
                            enqueueSnackbar({
                                message: event.data.message || 'OAuth2 authorization failed',
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

                        // Close the auth window if it's still open
                         {
                            authW
                        }
                    }
                }

                // Add message listener
                w

                // Fallback: Monitor the auth window and handle if it closes manually
                 => {
                     {
                        
                        w

                        // If no message was received, assume user closed window manually
                        // Don't show error in this case, just close dialog
                        
                    }
                }, 1000)

                // Cleanup afte
                 => {
                    
                    w
                     {
                        authW
                    }
                }, 300000) // 5 minutes
            } else {
                th
            }
        }  {
            
             
            enqueueSnackbar({
                message: `OAuth2 authorization failed: ${error.response?.data?.message || error.message || 'Unknown error'}`,
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

    const component = show ? (
        <Dialog
            fullWidth
            maxWidth='sm'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {!shared && componentCredential && componentCredential.label && (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                marginRight: 10,
                                borderRadius: '50%',
                                backgroundColor: 'white'
                            }}
                        >
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: 7,
                                    borderRadius: '50%',
                                    objectFit: 'contain'
                                }}
                                alt={componentCredential.name}
                                src={`${baseURL}/api/v1/components-credentials-icon/${componentCredential.name}`}
                                 => {
                                    e.target.onerror = null
                                    e.target.style.padding = '5px'
                                    e.target.src = keySVG
                                }}
                            />
                        </div>
                        {componentCredential.label}
                    </div>
                )}
            </DialogTitle>
            <DialogContent>
                {shared && (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 10,
                            background: '#f37a97',
                            padding: 10,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <IconHandStop size={25} color='white' />
                            <span style={{ color: 'white', marginLeft: 10, fontWeight: 400 }}>Cannot edit shared credential.</span>
                        </div>
                    </div>
                )}
                {!shared && componentCredential && componentCredential.description && (
                    <Box sx={{ pl: 2, pr: 2 }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                borderRadius: 10,
                                ba',
                                padding: 10,
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        >
                            <' }}>{pa}</span>
                        </div>
                    </Box>
                )}
                {!shared && componentCredential && componentCredential.label && (
                    <Box sx={{ p: 2 }}>
                        <Stack sx={{ position: 'relative' }} direction='row'>
                            <Typography variant='overline'>
                                Credential Name
                                <span style={{ color: 'red' }}>&nbsp;*</span>
                            </Typography>
                        </Stack>
                        <OutlinedInput
                            id='credName'
                            type='string'
                            fullWidth
                            placeholder={componentCredential.label}
                            value={name}
                            name='name'
                             => }
                        />
                    </Box>
                )}
                { && (
                    <Box sx={{ p: 2 }}>
                        <Stack sx={{ position: 'relative' }} direction='row'>
                            <Typography variant='overline'>OAuth Redirect URL</Typography>
                        </Stack>
                        <OutlinedInput
                            id='oauthRedirectUrl'
                            type='string'
                            disabled
                            fullWidth
                            value={`${baseURL}/api/v1/oauth2-credential/callback`}
                        />
                    </Box>
                )}
                {!shared &&
                    componentCredential &&
                    componentCredential.inputs &&
                    componentCredential.inputs
                        .f => 
                        .map(( => <C}

                { && (
                    <Box sx={{ p: 2 }}>
                        <Butt => }>
                            Authenticate
                        </Button>
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                {!shared && (
                    <StyledButton
                        disabled={!name}
                        variant='contained'
                         => ( : )}
                    >
                        {dialogProps.confirmButtonName}
                    </StyledButton>
                )}
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

AddEditCredentialDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    setError: PropTypes.func
}

export default AddEditCredentialDialog
