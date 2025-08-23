import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, OutlinedInput } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// Icons
import { IconX, IconVariable } from '@tabler/icons-react'

// API
import variablesApi from '@/api/variables'

// Hooks

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'

const variableTypes = [
    {
        label: 'Static',
        name: 'static',
        description: 'Variable value will be read from the value entered below'
    },
    {
        label: 'Runtime',
        name: 'runtime',
        description: 'Variable value will be read from .env file'
    }
]

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
                name: variableName,
                value: variableValue,
                type: variableType
            }
            
             {
                enqueueSnackbar({
                    message: 'New Variable added',
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
                message: `Failed to add new Variable: ${
                    typeof err.response.data === 'object' ? err.response.data.message : err.response.data
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
                name: variableName,
                value: variableValue,
                type: variableType
            }

            
             {
                enqueueSnackbar({
                    message: 'Variable saved',
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
                message: `Failed to save Variable: ${
                    typeof err.response.data === 'object' ? err.response.data.message : err.response.data
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
                    <IconVariable style={{ marginRight: '10px' }} />
                    {dialogProps.type === 'ADD' ? 'Add Variable' : 'Edit Variable'}
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>
                            Variable Name<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>

                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <OutlinedInput
                        size='small'
                        sx={{ mt: 1 }}
                        type='string'
                        fullWidth
                        key='variableName'
                         => }
                        value={variableName ?? ''}
                        id='txtInput_variableName'
                    />
                </Box>
                <Box sx={{ p: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography>
                            Type<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    <Dropdown
                        key={variableType}
                        name='variableType'
                        options={variableTypes}
                         => }
                        value={variableType ?? 'choose an option'}
                        id='dropdown_variableType'
                    />
                </Box>
                {variableType === 'static' && (
                    <Box sx={{ p: 2 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography>
                                Value<span style={{ color: 'red' }}>&nbsp;*</span>
                            </Typography>
                            <div style={{ flexGrow: 1 }}></div>
                        </div>
                        <OutlinedInput
                            size='small'
                            sx={{ mt: 1 }}
                            type='string'
                            fullWidth
                            key='variableValue'
                             => }
                            value={variableValue ?? ''}
                            id='txtInput_variableValue'
                        />
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <StyledButton
                    }
                    variant='contained'
                     => ( : )}
                    id='btn_confirmAddingNewVariable'
                >
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

AddEditVariableDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    setError: PropTypes.func
}

export default AddEditVariableDialog
