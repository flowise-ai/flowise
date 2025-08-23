import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction, SET_CHATFLOW } from '@/store/actions'

// material-ui
import { Button, IconButton, OutlinedInput, Box, InputAdornment, Stack, Typography } from '@mui/material'
import { IconX, IconTrash, IconPlus } from '@tabler/icons-react'

// Project import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'

// store
import useNotifier from '@/utils/useNotifier'

// API
import chatflowsApi from '@/api/chatflows'

 => {
    

    u

     => )
     => )

    
    

    

     => {
        
    }
     => {
        const rows = [...inputFields]
        
        
    }

     => {
        const { value } = evnt.target
        const list = [...inputFields]
        list[index] = value
        
    }

     => {
        try {
            let value = {
                allowedOrigins: [...inputFields],
                allowedOriginsError: errorMessage
            }
            chatbotConfig.allowedOrigins = value.allowedOrigins
            chatbotConfig.allowedOriginsError = value.allowedOriginsError

            const saveResp = await chatflowsApi.updateChatflow(dialogProps.chatflow.id, {
                
            })
             {
                enqueueSnackbar({
                    message: 'Allowed Origins Saved',
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
                message: `Failed to save Allowed Origins: ${
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

    u => {
         {
            try {
                let 
                
                 {
                    let inputFields = [...chatbotConfig.allowedOrigins]
                    
                } else {
                    
                }
                 {
                    
                } else {
                    
                }
            }  {
                
                
            }
        }

         => {}
    }, 

    return (
        <Stack direction='column' spacing={2} sx={{ alignItems: 'start' }}>
            <Typography variant='h3'>
                Allowed Domains
                <TooltipWithParser
                    style={{ mb: 1, mt: 2, marginLeft: 10 }}
                    title={'Your chatbot will only work when used from the following domains.'}
                />
            </Typography>
            <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
                <Stack direction='column' spacing={2}>
                    <Typography>Domains</Typography>
                    { => {
                        return (
                            <div key={index} style={{ display: 'flex', width: '100%' }}>
                                <Box sx={{ width: '100%', mb: 1 }}>
                                    <OutlinedInput
                                        sx={{ width: '100%' }}
                                        key={index}
                                        type='text'
                                         => han}
                                        size='small'
                                        value={origin}
                                        name='origin'
                                        placeholder='https://example.com'
                                        endAdornment={
                                            <InputAdornment position='end' sx={{ padding: '2px' }}>
                                                {inputFields.length > 1 && (
                                                    <IconButton
                                                        sx={{ height: 30, width: 30 }}
                                                        size='small'
                                                        color='error'
                                                        disabled={inputFields.length === 1}
                                                         => }
                                                        edge='end'
                                                    >
                                                        <IconTrash />
                                                    </IconButton>
                                                )}
                                            </InputAdornment>
                                        }
                                    />
                                </Box>
                                <Box sx={{ width: '5%', mb: 1 }}>
                                    {index === inputFields.length - 1 && (
                                        <IconButton color='primary' onClick={addInputField}>
                                            <IconPlus />
                                        </IconButton>
                                    )}
                                </Box>
                            </div>
                        )
                    })}
                </Stack>
                <Stack direction='column' spacing={1}>
                    <Typography>
                        Error Message
                        <TooltipWithParser
                            style={{ mb: 1, mt: 2, marginLeft: 10 }}
                            title={'Custom error message that will be shown when for unauthorized domain'}
                        />
                    </Typography>
                    <OutlinedInput
                        sx={{ width: '100%' }}
                        type='text'
                        size='small'
                        fullWidth
                        placeholder='Unauthorized domain!'
                        value={errorMessage}
                         => {
                            
                        }}
                    />
                </Stack>
            </Stack>
            <StyledButton variant='contained' onClick={onSave}>
                Save
            </StyledButton>
        </Stack>
    )
}

AllowedDomains.propTypes = {
    dialogProps: PropTypes.object
}

export default AllowedDomains
