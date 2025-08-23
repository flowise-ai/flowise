import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { OutlinedInput, DialogActions, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { StyledButton } from '@/ui-component/button/StyledButton'
import assistantsApi from '@/api/assistants'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { IconX, IconWand, IconArrowLeft, IconNotebook, IconLanguage, IconMail, IconCode, IconReport, IconWorld } from '@tabler/icons-react'
import useNotifier from '@/utils/useNotifier'
import { LoadingButton } from '@mui/lab'

const defaultInstructions = [
    {
        text: 'Summarize a document',
        img: <IconNotebook />
    },
    {
        text: 'Translate the language',
        img: <IconLanguage />
    },
    {
        text: 'Write me an email',
        img: <IconMail />
    },
    {
        text: 'Convert the code to another language',
        img: <IconCode />
    },
    {
        text: 'Research and generate a report',
        img: <IconReport />
    },
    {
        text: 'Plan a trip',
        img: <IconWorld />
    }
]

 => {
    
    
    
    

    // ==============================|| Snackbar ||============================== //
    
    u
     => )
     => )

     => {
        try {
            
            const selectedChatModelObj = {
                name: dialogProps.data.selectedChatModel.name,
                inputs: dialogProps.data.selectedChatModel.inputs
            }
            const resp = await assistantsApi.generateAssistantInstruction({
                selectedChatModel: selectedChatModelObj,
                task: customAssistantInstruction
            })

             {
                
                 {
                    
                }
            }
        }  {
            
            enqueueSnackbar({
                message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
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

    // clear the state when dialog is closed
    u => {
         {
            
            
        }
    }, 

    const component = show ? (
        <>
            <Dialog
                fullWidth
                maxWidth='md'
                open={show}
                onClose={onCancel}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                    {dialogProps.title}
                </DialogTitle>
                <DialogContent>
                    <span>{dialogProps.description}</span>
                    <div
                        style={{
                            display: 'block',
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: '15px'
                        }}
                    >
                        { => {
                            return (
                                <Button
                                    size='small'
                                    key={index}
                                    sx={{ textTransform: 'none', mr: 1, mb: 1, borderRadius: '16px' }}
                                    variant='outlined'
                                    color='inherit'
                                     => {
                                        
                                        
                                    }}
                                    startIcon={instruction.img}
                                >
                                    {instruction.text}
                                </Button>
                            )
                        })}
                    </div>
                    {!generatedInstruction && (
                        <OutlinedInput
                            sx={{ mt: 2, width: '100%' }}
                            type={'text'}
                            multiline={true}
                            rows={12}
                            disabled={loading}
                            value={customAssistantInstruction}
                            placeholder={'Describe your task here'}
                             => }
                        />
                    )}
                    {generatedInstruction && (
                        <OutlinedInput
                            sx={{ mt: 2, width: '100%' }}
                            type={'text'}
                            multiline={true}
                            rows={12}
                            value={generatedInstruction}
                             => }
                        />
                    )}
                </DialogContent>
                <DialogActions sx={{ pb: 3, pr: 3 }}>
                    {!generatedInstruction && (
                        <LoadingButton
                            loading={loading}
                            variant='contained'
                             => {
                                
                            }}
                            startIcon={<IconWand size={20} />}
                        >
                            Generate
                        </LoadingButton>
                    )}
                    {generatedInstruction && (
                        <Button
                            variant='outlined'
                            startIcon={<IconArrowLeft size={20} />}
                             => {
                                
                            }}
                        >
                            Back
                        </Button>
                    )}
                    {generatedInstruction && (
                        <Style => }>
                            Apply
                        </StyledButton>
                    )}
                </DialogActions>
            </Dialog>
        </>
    ) : null

    
}

AssistantPromptGenerator.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

export default AssistantPromptGenerator
