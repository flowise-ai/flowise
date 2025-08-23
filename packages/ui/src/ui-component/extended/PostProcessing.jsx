import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// material-ui
import { IconButton, Button, Box, Typography } from '@mui/material'
import { IconArrowsMaximize, IconBulb, IconX } from '@tabler/icons-react'
import { useTheme } from '@mui/material/styles'

// Project import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { SwitchInput } from '@/ui-component/switch/Switch'
import { CodeEditor } from '@/ui-component/editor/CodeEditor'
import ExpandTextDialog from '@/ui-component/dialog/ExpandTextDialog'

// store
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction, SET_CHATFLOW } from '@/store/actions'
import useNotifier from '@/utils/useNotifier'

// API
import chatflowsApi from '@/api/chatflows'

const sampleFunction = `return $flow.rawOutput + " This is a post processed response!";`

 => {
    

    u
    
     => 

     => )
     => )

    
    
    
    
    

     => {
        
    }

     => {
        const dialogProps = {
            value,
            inputParam: {
                label: 'Post Processing Function',
                name: 'postProcessingFunction',
                type: 'code',
                placeholder: sampleFunction,
                hideCodeExecute: true
            },
            languageType: 'js',
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
    }

     => {
        try {
            let value = {
                postProcessing: {
                    enabled: postProcessingEnabled,
                    
                }
            }
            chatbotConfig.postProcessing = value.postProcessing
            const saveResp = await chatflowsApi.updateChatflow(dialogProps.chatflow.id, {
                
            })
             {
                enqueueSnackbar({
                    message: 'Post Processing Settings Saved',
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
                message: `Failed to save Post Processing Settings: ${
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
            let 
            
             {
                
                 {
                    )
                }
            }
        }

         => {}
    }, 

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <SwitchInput label='Enable Post Processing' onChange={handleChange} value={postProcessingEnabled} />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Typography>JS Function</Typography>
                    <Button
                        sx={{ ml: 2 }}
                        variant='outlined'
                         => {
                            
                        }}
                    >
                        See Example
                    </Button>
                    <div style={{ flex: 1 }} />
                    <IconButton
                        size='small'
                        sx={{
                            height: 25,
                            width: 25
                        }}
                        title='Expand'
                        color='primary'
                         => }
                    >
                        <IconArrowsMaximize />
                    </IconButton>
                </Box>

                <div
                    style={{
                        marginTop: '10px',
                        border: '1px solid',
                        borderColor: theme.palette.grey['300'],
                        borderRadius: '6px',
                        height: '200px',
                        width: '100%'
                    }}
                >
                    <CodeEditor
                        value={postProcessingFunction}
                        height='200px'
                        theme={customization.isDarkMode ? 'dark' : 'light'}
                        lang={'js'}
                        placeholder={sampleFunction}
                         => }
                        basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
                    />
                </div>
            </Box>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 10,
                    background: '#d8f3dc',
                    padding: 10,
                    marginTop: 10
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 10
                    }}
                >
                    <IconBulb size={30} color='#2d6a4f' />
                    <span style={{ color: '#2d6a4f', marginLeft: 10, fontWeight: 500 }}>
                        The following variables are available to use in the custom function:{' '}
                        <pre>$flow.rawOutput, $flow.input, $flow.chatflowId, $flow.sessionId, $flow.chatId</pre>
                    </span>
                </div>
            </div>
            <StyledButton
                style={{ marginBottom: 10, marginTop: 10 }}
                variant='contained'
                .length === 0}
                onClick={onSave}
            >
                Save
            </StyledButton>
            <ExpandTextDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => }
                 => {
                    
                    
                }}
            ></ExpandTextDialog>
        </>
    )
}

PostProcessing.propTypes = {
    dialogProps: PropTypes.object
}

export default PostProcessing
