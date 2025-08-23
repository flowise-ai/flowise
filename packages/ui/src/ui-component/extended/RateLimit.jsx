import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction, SET_CHATFLOW } from '@/store/actions'
import PropTypes from 'prop-types'

import { Typography, Button, OutlinedInput, Stack } from '@mui/material'

// Project import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { SwitchInput } from '@/ui-component/switch/Switch'

// Icons
import { IconX } from '@tabler/icons-react'

// API
import chatflowsApi from '@/api/chatflows'

// utils
import useNotifier from '@/utils/useNotifier'

 => {
    
     => 
    const chatflowid = chatflow.id
     : {}

    u

     => )
     => )

    
    
    
    

     => {
        let ap
         {
            apiConfig = {}
        }
        let obj = { status: rateLimitStatus }

         {
            const rateLimitValuesBoolean = [!limitMax, !limitDuration, !limitMsg]
             => value === fal
             {
                th
            } el {
                obj = {
                    ...obj,
                    limitMax,
                    limitDuration,
                    limitMsg
                }
            }
        }
        apiConfig.rateLimit = obj
        return apiConfig
    }

     => {
        
    }

     => {
         {
             {
                return true
            }
        }
        return false
    }

     => {
        try {
            const saveResp = await chatflowsApi.updateChatflow(chatflowid, {
                ap)
            })
             {
                enqueueSnackbar({
                    message: 'Rate Limit Configuration Saved',
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
                message: `Failed to save Rate Limit Configuration: ${
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
         {
            case 'limitMax':
                
                break
            case 'limitDuration':
                
                break
            case 'limitMsg':
                
                break
        }
    }

     => {
        return (
            <Stack direction='column' spacing={1}>
                <Typography>{fieldLabel}</Typography>
                <OutlinedInput
                    id={fieldName}
                    type={fieldType}
                    fullWidth
                    value={message}
                    placeholder={placeholder}
                    name={fieldName}
                    size='small'
                     => {
                        
                    }}
                />
            </Stack>
        )
    }

    return (
        <Stack direction='column' spacing={2} sx={{ alignItems: 'start' }}>
            <Typography variant='h3'>
                Rate Limit{' '}
                <TooltipWithParser
                    style={{ marginLeft: 10 }}
                    title={
                        'Visit <a target="_blank" href="https://docs.flowise-ai.github.io/configuration/rate-limit">Rate Limit Setup Guide</a> to set up Rate Limit correctly in your hosting environment.'
                    }
                />
            </Typography>
            <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
                <SwitchInput label='Enable Rate Limit' onChange={handleChange} value={rateLimitStatus} />
                {rateLimitStatus && (
                    <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
                        {textF}
                        {textF}
                        {textF}
                    </Stack>
                )}
            </Stack>
            <Style} va => } sx={{ width: 'auto' }}>
                Save
            </StyledButton>
        </Stack>
    )
}

RateLimit.propTypes = {
    isSessionMemory: PropTypes.bool,
    dialogProps: PropTypes.object
}

export default RateLimit
