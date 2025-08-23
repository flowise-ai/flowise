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
import { File } from '@/ui-component/file/File'
import { SwitchInput } from '@/ui-component/switch/Switch'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'

// Icons
import { IconX, IconDatabase } from '@tabler/icons-react'

// API
import datasetApi from '@/api/dataset'

// Hooks

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
const CSVFORMAT = `Only the first 2 columns will be considered:
----------------------------
| Input      | Output      |
----------------------------
| test input | test output |
----------------------------
`

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
                name: datasetName,
                description: datasetDescription
            }
             {
                obj.firstRowHeaders = firstRowHeaders
                obj.csvFile = selectedFile
            }
            
             {
                enqueueSnackbar({
                    message: 'New Dataset added',
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
                message: `Failed to add new Dataset: ${
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
                name: datasetName,
                description: datasetDescription
            }

            
             {
                enqueueSnackbar({
                    message: 'Dataset saved',
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
                message: `Failed to save Dataset: ${
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
                    {dialogProps.type === 'ADD' ? 'Add Dataset' : 'Edit Dataset'}
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
                        key='datasetName'
                         => }
                        value={datasetName ?? ''}
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
                        key='datasetDescription'
                         => }
                        value={datasetDescription ?? ''}
                    />
                </Box>
                {dialogType === 'ADD' && (
                    <Box sx={{ p: 2 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>
                                Upload CSV
                                <TooltipWithParser style={{ mb: 1, mt: 2 }} title={`<pre>${CSVFORMAT}</pre>`} />
                            </Typography>
                            <div style={{ flexGrow: 1 }}></div>
                        </div>
                        <File
                            disabled={false}
                            fileType='.csv'
                             => }
                            value={selectedFile ?? 'Choose a file to upload'}
                        />
                        <SwitchInput
                            value={firstRowHeaders}
                            onChange={setFirstRowHeaders}
                            label={'Treat First Row as headers in the upload file?'}
                        />
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledButton
                    disabled={!datasetName}
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

AddEditDatasetDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default AddEditDatasetDialog
