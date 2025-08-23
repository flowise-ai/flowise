import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import { cloneDeep } from 'lodash'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Stack, OutlinedInput, Typography } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import { Grid } from '@/ui-component/grid/Grid'

// Icons
import { IconX, IconShare } from '@tabler/icons-react'

// API
import workspaceApi from '@/api/workspace'
import userApi from '@/api/user'

// Hooks
import useApi from '@/hooks/useApi'

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u
    
    
     => )
     => )

     => 

    

    

     => {
         => {
             => {
                let allR]
                 => 
                 {
                    allRows[indexToUpdate] = { ...newRow }
                }
                return allRows
            })
        })
    }

    const columns = useMemo(
        () => [
            { field: 'workspaceName', headerName: 'Workspace', editable: false, flex: 1 },
            { field: 'shared', headerName: 'Share', type: 'boolean', editable: true, width: 180 }
        ],
        []
    )

    u => {
         {
            const data = getSharedWorkspacesForItemApi.data
             {
                 => {
                     => {
                         {
                            row.shared = true
                        }
                    })
                })
                
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
         {
            const workspaces = []
            getWorkspacesByOrganizationIdUserIdApi.data
                .f => w
                .map((w => {
                    workspaces.push({
                        id: ws.workspace.id,
                        workspaceName: ws.workspace.name,
                        shared: false
                    })
                })
            
        }
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            getW
        }
        
        getSha

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

     => {
        try {
            const obj = {
                itemType: dialogProps.data.itemType,
                workspaceIds: []
            }
             => {
                 {
                    
                }
            })
            
             {
                enqueueSnackbar({
                    message: 'Items Shared Successfully',
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
                message: `Failed to share Item: ${
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
            maxWidth='md'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconShare style={{ marginRight: '10px' }} />
                    {dialogProps.data.title}
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <Stack sx={{ position: 'relative' }} direction='row'>
                        <Typography variant='overline'>Name</Typography>
                    </Stack>
                    <OutlinedInput id='name' type='string' disabled={true} fullWidth placeholder={name} value={name} name='name' />
                </Box>
                <Box sx={{ p: 2 }}>
                    <Grid columns={columns} rows={outputSchema} onRowUpdate={onRowUpdate} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledButton onClick={shareItemRequest} variant='contained'>
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

ShareWithWorkspaceDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    setError: PropTypes.func
}

export default ShareWithWorkspaceDialog
