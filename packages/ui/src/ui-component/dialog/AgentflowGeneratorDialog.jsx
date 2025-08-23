import { createPortal } from 'react-dom'
import { cloneDeep } from 'lodash'
import { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Box, Typography, OutlinedInput, DialogActions, Button, Dialog, DialogContent, DialogTitle, LinearProgress } from '@mui/material'
import chatflowsApi from '@/api/chatflows'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { IconX, IconSparkles, IconArrowLeft } from '@tabler/icons-react'
import useNotifier from '@/utils/useNotifier'
import { LoadingButton } from '@mui/lab'
import generatorGIF from '@/assets/images/agentflow-generator.gif'
import { flowContext } from '@/store/context/ReactFlowContext'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { useTheme } from '@mui/material/styles'
import assistantsApi from '@/api/assistants'
import { baseURL } from '@/store/constant'
import { initNode, showHideInputParams } from '@/utils/genericHelper'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'
import useApi from '@/hooks/useApi'

const defaultInstructions = [
    {
        text: 'An agent that can autonomously search the web and generate report'
    },
    {
        text: 'Summarize a document'
    },
    {
        text: 'Generate response to user queries and send it to Slack'
    },
    {
        text: 'A team of agents that can handle all customer queries'
    }
]

 => {
    
    
    
    
    
    
    
    
     => 

    
    
    

    // ==============================|| Snackbar ||============================== //
    
    u
     => )
     => )

     => {
         => {
            const updatedData = { ...prevData }
            updatedData.inputs[inputParam.name] = newValue
            up
            return updatedData
        })
    }

    u => {
         {
            

            // Set options
             => ({
                label: chatModel.label,
                name: chatModel.name,
                imageSrc: `${baseURL}/api/v1/node-icon/${chatModel.name}`
            }))
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Simulate progress for the fake progress bar
    u => {
        let timer
         {
            
            t => {
                 => {
                    // Slowly increase to 95% to give the impression of work happening
                    // Last 5% will complete when the actual work is done
                     {
                        
                        return 95
                    }
                    // Speed up in the middle, slow at the beginning and end
                    const increment = prevProgress < 30 ? 3 : prevProgress < 60 ? 5 : prevProgress < 80 ? 2 : 0.5
                    
                })
            }, 500)
        } else {
            // When loading is done, immediately set to 100%
            
        }

         => {
             {
                
            }
        }
    }, 

     => {
        ) return

        try {
            

            const response = await chatflowsApi.generateAgentflow({
                que,
                selectedChatModel: selectedChatModel
            })

             {
                
                
                
            } else {
                enqueueSnackbar({
                    message: response.error || 'Failed to generate agentflow',
                    options: {
                        key: new .getT + Math.,
                        variant: 'error',
                        persist: false,
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
                message: error.response?.data?.message || 'Failed to generate agentflow',
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: false,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        } finally {
            
        }
    }

    // clear the state when dialog is closed
    u => {
         {
            
            
            
        } else {
            getChatM
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    const component = show ? (
        <>
            <Dialog
                fullWidth
                maxWidth={loading ? 'sm' : 'md'}
                open={show}
                onClose={loading ? null : onCancel}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                    {dialogProps.title}
                </DialogTitle>
                <DialogContent>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={generatorGIF} alt='Generating Agentflow' style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography variant='h5' sx={{ mt: 2 }}>
                                Generating your Agentflow...
                            </Typography>
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <LinearProgress
                                    variant='determinate'
                                    value={progress}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                        '& .MuiLinearProgress-bar': {
                                            ba',
                                            borderRadius: 5
                                        }
                                    }}
                                />
                                <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 1 }}>
                                    {`${Math.}%`}
                                </Typography>
                            </Box>
                        </div>
                    ) : (
                        <>
                            <span>{dialogProps.description}</span>
                            <div
                                style={{
                                    display: 'block',
                                    flexDirection: 'row',
                                    width: '100%',
                                    marginTop: '25px'
                                }}
                            >
                                { => {
                                    return (
                                        <Button
                                            size='small'
                                            key={index}
                                            sx={{
                                                textTransform: 'none',
                                                mr: 1,
                                                mb: 1,
                                                borderRadius: '16px',
                                                border: 'none',
                                                ba' : '',
                                                b',
                                                '&:hover': {
                                                    backgroundColor: customization.isDarkMode
                                                        ? ''
                                                        : '',
                                                    b'
                                                }
                                            }}
                                            variant='contained'
                                            color='inherit'
                                             => {
                                                
                                                
                                            }}
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
                                    placeholder={'Describe your agent here'}
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
                            <Box sx={{ mt: 2 }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography>
                                        Select model to generate agentflow<span style={{ color: 'red' }}>&nbsp;*</span>
                                    </Typography>
                                </div>
                                <Dropdown
                                    key={JSON.}
                                    name={'chatModel'}
                                    options={chatModelsOptions ?? []}
                                     => {
                                         {
                                            
                                        } else {
                                             => 
                                             {
                                                const chatModelId = `${foundChatComponent.name}_0`
                                                
                                                
                                                
                                            }
                                        }
                                    }}
                                    value={selectedChatModel ? selectedChatModel?.name : 'choose an option'}
                                />
                            </Box>
                            {.length > 0 && (
                                <Box
                                    sx={{
                                        p: 0,
                                        mt: 1,
                                        mb: 1,
                                        border: 1,
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: 2
                                    }}
                                >
                                    {
                                        .f => 
                                        .map(( => (
                                            <DocStoreInputHandler
                                                key={index}
                                                inputParam={inputParam}
                                                data={selectedChatModel}
                                                onNodeDataChange={handleChatModelDataChange}
                                            />
                                        ))}
                                </Box>
                            )}
                        </>
                    )}
                </DialogContent>
                <DialogActions sx={{ pb: 3, pr: 3 }}>
                    {loading ? null : (
                        <>
                            {!generatedInstruction && (
                                <LoadingButton
                                    loading={loading}
                                    variant='contained'
                                     => {
                                        
                                    }}
                                    sx={{
                                        ba',
                                        '&:h' }
                                    }}
                                    startIcon={<IconSparkles size={20} />}
                                    disabled={
                                        loading ||
                                         ||
                                        !selectedChatModel ||
                                        .length
                                    }
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
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </>
    ) : null

    
}

AgentflowGeneratorDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
}

export default AgentflowGeneratorDialog
