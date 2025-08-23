import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, OutlinedInput } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// Icons
import { IconX, IconUsersGroup } from '@tabler/icons-react'

// API
import workspaceApi from '@/api/workspace'

// utils
import useNotifier from '@/utils/useNotifier'

// Store
import { store } from '@/store'
import { workspaceNameUpdated } from '@/store/reducers/authSlice'

// const
import {
    enqueueSnackbar as enqueueSnackbarAction,
    closeSnackbar as closeSnackbarAction,
    HIDE_CANVAS_DIALOG,
    SHOW_CANVAS_DIALOG
} from '@/store/actions'

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    
    
    
     => 

    u => {
         {
            
            
            
            
        } el {
            
            
            
            
        }

         => {
            
            
            
            
        }
    }, 

    u => {
         
        el
         => 
    }, 

     => {
         {
            enqueueSnackbar({
                message: 'Workspace name cannot be Default Workspace or Personal Workspace - this is a reserved name',
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
        try {
            const obj = {
                name: workspaceName,
                description: workspaceDescription,
                createdBy: currentUser.id,
                organizationId: currentUser.activeOrganizationId,
                existingWorkspaceId: currentUser.activeWorkspaceId // this is used to inherit the current role
            }
            
             {
                enqueueSnackbar({
                    message: 'New Workspace added',
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
                message: `Failed to add new Workspace: ${
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
                id: workspace.id,
                name: workspaceName,
                description: workspaceDescription,
                updatedBy: currentUser.id
            }

            
             {
                )
                enqueueSnackbar({
                    message: 'Workspace saved',
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
                message: `Failed to save Workspace: ${
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
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconUsersGroup style={{ marginRight: '10px' }} />
                    {dialogProps.type === 'ADD' ? 'Add Workspace' : 'Edit Workspace'}
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>
                            Name<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <OutlinedInput
                        size='small'
                        sx={{ mt: 1 }}
                        type='string'
                        fullWidth
                        key='workspaceName'
                         => }
                        value={workspaceName ?? ''}
                    />
                </Box>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>Description</Typography>
                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <OutlinedInput
                        size='small'
                        sx={{ mt: 1 }}
                        type='string'
                        fullWidth
                        multiline={true}
                        rows={4}
                        key='workspaceDescription'
                         => }
                        value={workspaceDescription ?? ''}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledButton
                    disabled={!workspaceName}
                    variant='contained'
                     => ( : )}
                >
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

AddEditWorkspaceDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default AddEditWorkspaceDialog
