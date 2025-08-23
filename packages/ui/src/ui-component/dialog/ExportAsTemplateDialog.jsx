import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// material-ui
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, OutlinedInput, Typography } from '@mui/material'

// store
import {
    closeSnackbar as closeSnackbarAction,
    enqueueSnackbar as enqueueSnackbarAction,
    HIDE_CANVAS_DIALOG,
    SHOW_CANVAS_DIALOG
} from '@/store/actions'
import useNotifier from '@/utils/useNotifier'
import { StyledButton } from '@/ui-component/button/StyledButton'
import Chip from '@mui/material/Chip'
import { IconX } from '@tabler/icons-react'

// API
import marketplacesApi from '@/api/marketplaces'
import useApi from '@/hooks/useApi'

// Project imports

 => {
    
    
    
    
    
    
    
    

    

     => )
     => )

    u

    u => {
         {
            
             {
                
            } el {
                
            } el {
                
            }
        }

         {
            
            
            
        }

         => {
            
            
            
            
            
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

     => {
        
    }

     => {
        ) {
            event.p
            ) {
                
                
            }
        }
    }

     => {
         => )
    }

     => {
         === '') {
            enqueueSnackbar({
                message: 'Template Name is mandatory!',
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

        const template = {
            name,
            description,
            ba : undefined,
            usecases,
            type: flowType
        }
         {
            template.chatflowId = dialogProps.chatflow.id
        }
         {
            template.tool = {
                iconSrc: dialogProps.tool.iconSrc,
                schema: dialogProps.tool.schema,
                func: dialogProps.tool.func
            }
        }
        
    }

    u => {
         {
            enqueueSnackbar({
                message: 'Saved as template successfully!',
                options: {
                    key: new .getT + Math.,
                    variant: 'success',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            enqueueSnackbar({
                message: 'Failed to save as template!',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='sm'
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title || 'Export As Template'}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ pt: 2, pb: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ mb: 1 }}>
                            Name<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                        <OutlinedInput
                            id={'name'}
                            type={'string'}
                            fullWidth
                            value={name}
                            name='name'
                            size='small'
                             => {
                                
                            }}
                        />
                    </div>
                </Box>
                <Box sx={{ pt: 2, pb: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ mb: 1 }}>Description</Typography>
                        <OutlinedInput
                            id={'description'}
                            type={'string'}
                            fullWidth
                            multiline
                            rows={2}
                            value={description}
                            name='description'
                            size='small'
                             => {
                                
                            }}
                        />
                    </div>
                </Box>
                <Box sx={{ pt: 2, pb: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ mb: 1 }}>Badge</Typography>
                        <OutlinedInput
                            id={'badge'}
                            type={'string'}
                            fullWidth
                            value={badge}
                            name='badge'
                            size='small'
                             => {
                                
                            }}
                        />
                    </div>
                </Box>
                <Box sx={{ pt: 2, pb: 2 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ mb: 1 }}>Usecases</Typography>
                        {usecases.length > 0 && (
                            <div style={{ marginBottom: 10 }}>
                                {u => (
                                    <Chip
                                        key={index}
                                        label={uc}
                                         => han}
                                        style={{ marginRight: 5, marginBottom: 5 }}
                                    />
                                ))}
                            </div>
                        )}
                        <OutlinedInput
                            fullWidth
                            value={usecaseInput}
                            onChange={handleUsecaseInputChange}
                            onKeyDown={handleUsecaseInputKeyDown}
                            variant='outlined'
                        />
                        <Typography variant='body2' sx={{ fontStyle: 'italic', mt: 1 }} color='text.secondary'>
                            Type a usecase and press enter to add it to the list. You can add as many items as you want.
                        </Typography>
                    </div>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{dialogProps.cancelButtonName || 'Cancel'}</Button>
                <StyledButton disabled={dialogProps.disabled} variant='contained' onClick={onConfirm}>
                    {dialogProps.confirmButtonName || 'Save Template'}
                </StyledButton>
            </DialogActions>
        </Dialog>
    ) : null

    
}

ExportAsTemplateDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default ExportAsTemplateDialog
