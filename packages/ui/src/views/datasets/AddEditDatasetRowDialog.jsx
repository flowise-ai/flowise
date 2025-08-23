import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, OutlinedInput } from '@mui/material'

// Project imports
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// Icons
import { IconX, IconDatabase } from '@tabler/icons-react'

// API
import datasetApi from '@/api/dataset'

// Hooks

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    
    
    
    
    

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
        try {
            const obj = {
                datasetId: datasetId,
                input: input,
                output: output
            }
            
             {
                enqueueSnackbar({
                    message: 'New Row added for the given Dataset',
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
                message: `Failed to add new row in the Dataset: ${
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
                input: input,
                output: output
            }

            
             {
                enqueueSnackbar({
                    message: 'Dataset Row saved',
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
                message: `Failed to save Dataset Row: ${
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
                    <IconDatabase style={{ marginRight: '10px' }} />
                    {dialogProps.type === 'ADD' ? `Add Item to ${datasetName} Dataset` : `Edit Item in ${datasetName} Dataset`}
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>
                            Input<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>

                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <OutlinedInput
                        size='small'
                        sx={{ mt: 1 }}
                        multiline={true}
                        rows={4}
                        type='string'
                        fullWidth
                        key='input'
                         => }
                        value={input ?? ''}
                    />
                </Box>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>
                            Anticipated Output<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>

                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <OutlinedInput
                        size='small'
                        sx={{ mt: 1 }}
                        multiline={true}
                        rows={4}
                        type='string'
                        fullWidth
                        key='output'
                         => }
                        value={output ?? ''}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledPermissionButton
                    permissionId={'datasets:create,datasets:update'}
                    disabled={!input || !output}
                    variant='contained'
                     => ( : )}
                >
                    {dialogProps.confirmButtonName}
                </StyledPermissionButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

AddEditDatasetRowDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default AddEditDatasetRowDialog
