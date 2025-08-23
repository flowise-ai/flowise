import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// Material
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, Stack } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import { File } from '@/ui-component/file/File'

// Icons
import { IconFileUpload, IconX } from '@tabler/icons-react'

// API
import apikeyAPI from '@/api/apikey'

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'

const importModes = [
    {
        label: 'Add & Overwrite',
        name: 'overwriteIfExist',
        description: 'Add keys and overwrite existing keys with the same name'
    },
    {
        label: 'Add & Ignore',
        name: 'ignoreIfExist',
        description: 'Add keys and ignore existing keys with the same name'
    },
    {
        label: 'Add & Verify',
        name: 'errorIfExist',
        description: 'Add Keys and throw error if key with same name exists'
    },
    {
        label: 'Replace All',
        name: 'replaceAll',
        description: 'Replace all keys with the imported keys'
    }
]

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    

    u => {
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
                importMode: importMode,
                jsonFile: selectedFile
            }
            
             {
                enqueueSnackbar({
                    message: 'Imported keys successfully!',
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
                message: `Failed to import keys: ${
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
                    <IconFileUpload style={{ marginRight: '10px' }} />
                    Import API Keys
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ p: 2 }}>
                    <Stack sx={{ position: 'relative' }} direction='row'>
                        <Typography variant='overline'>
                            Import api.json file
                            <span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                    </Stack>
                    <File
                        disabled={false}
                        fileType='.json'
                         => }
                        value={selectedFile ?? 'Choose a file to upload'}
                    />
                </Box>
                <Box sx={{ p: 2 }}>
                    <Stack sx={{ position: 'relative' }} direction='row'>
                        <Typography variant='overline'>
                            Import Mode
                            <span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                    </Stack>
                    <Dropdown
                        key={importMode}
                        name={importMode}
                        options={importModes}
                         => }
                        value={importMode ?? 'choose an option'}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledButton disabled={!selectedFile} variant='contained' onClick={importKeys}>
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

UploadJSONFileDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default UploadJSONFileDialog
