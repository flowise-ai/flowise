import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

// Material
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    Chip,
    OutlinedInput,
    Divider,
    Stack,
    DialogContentText,
    Button,
    Stepper,
    Step,
    Switch,
    StepLabel,
    IconButton,
    FormControlLabel,
    Checkbox
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import CredentialInputHandler from '@/views/canvas/CredentialInputHandler'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'

// Icons
import { IconArrowLeft, IconAlertTriangle, IconTestPipe2 } from '@tabler/icons-react'

// API
import chatflowsApi from '@/api/chatflows'
import useApi from '@/hooks/useApi'
import datasetsApi from '@/api/dataset'
import evaluatorsApi from '@/api/evaluators'
import nodesApi from '@/api/nodes'
import assistantsApi from '@/api/assistants'

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { evaluators as evaluatorsOptions } from '../evaluators/evaluatorConstant'

const steps = ['Datasets', 'Evaluators', 'LLM Graded Metrics']

 => {
    
    
    u

    
    

    
    
    
    
    

    
    
    
    

    
    
    
    
    
    
    
    

    
    

    

    
    
    
    

    u => {
         {
            const evaluation = dialogProps.data
            const evalChatFlows = []
            JSON.pa.map((f) => {
                evalChatFl
            })
            
            
            
            
            
            
            
            
            
            
            
        } else {
            
        }

         => {
            
        }
    }, 

     => {
        
        
        
        
        
        
        
        
        
        
        
    }

     => {
         {
            return evaluationName && dataset && chatflow.length > 0
        } el {
            return true
        } el {
             {
                return credentialId && selectedLLM && selectedModel
            } else {
                return true
            }
        }
        return false
    }

     => {
        
        
         {
             {
                
            } else {
                 => p
            }
        }
    }

     => {
         => p
    }

     => {
        
        const selectedChatflowNames = []
        f {
             => f.name === ?.label)
        }
        const selectedChatflowTypes = []
        f {
             => f.name === ?.type)
        }
        
         => f.name === ?.label
        const obj = {
            name: evaluationName,
            evaluationType: credentialId ? 'llm' : 'benchmarking',
            credentialId: credentialId,
            datasetId: dataset,
            datasetName: datasetName,
            chatflowId: chatflow,
            chatflowName: chatflowName,
            ,
            selectedSimpleEvaluators: selectedSimpleEvaluators,
            selectedLLMEvaluators: selectedLLMEvaluators,
            model: selectedModel,
            llm: selectedLLM,
            datasetAsOneConversation: datasetAsOneConversation
        }
        
    }

     => {
         {
            return !evaluationName || !dataset || chatflow.length === 0
        } el {
             {
                 {
                    return true
                }
                 => llm.name === ?. {
                    return true
                }
            }
            return false
        }
    }

     => {
        return (
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    { => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        )
    }

    u => {
        getN
         {
            getAllChatfl
            getA
            getAllAgentfl
        }
         {
            getAll
        }
        getAllEvaluat
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            try {
                
                
                
                
                
            }  {
                
            }
        }
    }, 

    u => {
         {
            const llmNodes = []
            try {
                const nodes = getNodesByCategoryApi.data
                llmNodes.push({
                    label: 'No Grading',
                    name: 'no_grading',
                    credential: {}
                })
                f {
                    const node = nodes[i]
                     === -1) {
                        llmNodes.push({
                            label: node.label,
                            name: node.name,
                            credential: node.credential
                        })
                    }
                }
                
                
                
                
            }  {
                
            }
        }
    }, 

    u => {
         {
            try {
                const models = getModelsApi.data
                
            }  {
                
            }
        }
    }, 

    u => {
         {
            try {
                const simpleEvaluators = []
                const llmEvaluators = []
                // iterate over the evaluators and add a new property label that is the name of the evaluator
                // also set the name to the id
                f {
                    const evaluator = getAllEvaluatorsApi.data[i]
                    evaluator.label = evaluator.name
                    evaluator.name = evaluator.id
                     {
                        llmEvaluat
                    } else {
                        
                    }
                }
                
                
            }  {
                
            }
        }
    }, 

    u => {
         {
            try {
                const datasets = getAllDatasetsApi.data
                let dsNames = []
                f {
                    const ds = datasets[i]
                    dsNames.push({
                        label: ds.name,
                        name: ds.id
                    })
                }
                
            }  {
                
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        
        
        
        
         getM
    }

     => {
        const selected = flowType.target.checked
        const flowTypeValue = flowType.target.value
         {
            
        } else {
             => f )
        }
    }

     => {
        let flowNames = []
        f {
            const flow = data[i]
            flowNames.push({
                label: flow.name,
                name: flow.id,
                type: type,
                description: type
            })
        }
        return flowNames
    }

     => {
        let assistantNames = []
        f {
            const assistant = assistants[i]
            assistantNames.push({
                label: JSON.pa.name || '',
                name: assistant.id,
                type: 'Custom Assistant',
                description: 'Custom Assistant'
            })
        }
        return assistantNames
    }

    const component = show ? (
        <Dialog
            fullWidth
            maxWidth='md'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconTestPipe2 style={{ marginRight: '10px' }} />
                    {'Start New Evaluation'}
                </div>
            </DialogTitle>
            <DialogContent>
                <Stack direction='column' spacing={2}>
                    <Divider />
                    {validationFailed && (
                        <div
                            style={{
                                display: 'flex',
                                minHeight: 40,
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'lightcoral',
                                color: 'white',
                                padding: 10
                            }}
                        >
                            <div
                                style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: 10,
                                    borderRadius: '50%'
                                }}
                            >
                                <IconAlertTriangle
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            Fill all the mandatory fields
                        </div>
                    )}
                    <EvalWizard />
                    <DialogContentText align={'center'}>
                        {activeStep === 0 && (
                            <>
                                <Typography sx={{ mt: 2 }} variant='h4'>
                                    Select dataset to be tested on flows
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant='body2'>
                                    Uses the <span style={{ fontStyle: 'italic' }}>input</span> column from the dataset to execute selected
                                    Chatfl, and compares the results with the output column.
                                </Typography>
                                <Typography variant='body2'>The following metrics will be computed:</Typography>
                                <Stack
                                    flexDirection='row'
                                    sx={{ mt: 2, gap: 1, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
                                >
                                    {evaluatorsOptions
                                        .f => 
                                        .map((evaluat => (
                                            <Chip key={index} variant='outlined' label={evaluator.label} />
                                        ))}
                                </Stack>
                            </>
                        )}
                        {activeStep === 1 && (
                            <>
                                <Typography sx={{ mt: 2 }} variant='h4'>
                                    Unit Test your flows by adding custom evaluators
                                </Typography>
                                <Typography sx={{ mt: 2, mb: 2 }} variant='body2'>
                                    Post execution, all the chosen evaluators will be executed on the results. Each evaluator will grade the
                                    results based on the criteria defined and return a pass/fail indicator.
                                </Typography>
                                <Chip
                                    variant='contained'
                                    color='success'
                                    sx={{ background: theme.palette.teal.main, color: 'white' }}
                                    label={'pass'}
                                />
                                <Chip variant='contained' color='error' style={{ margin: 5 }} label={'fail'} />
                            </>
                        )}
                        {activeStep === 2 && (
                            <>
                                <Typography sx={{ mt: 2 }} variant='h4'>
                                    Grade flows using an LLM
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant='body2'>
                                    Post execution, grades the answers by using an LLM. Used to generate comparative scores or reasoning or
                                    other custom defined criteria.
                                </Typography>
                            </>
                        )}
                    </DialogContentText>
                    {activeStep === 0 && (
                        <>
                            <Box>
                                <Typography variant='overline'>
                                    Name<span style={{ color: 'red' }}>&nbsp;*</span>
                                </Typography>
                                <TooltipWithParser style={{ marginLeft: 10 }} title={'Friendly name to tag this run.'} />
                                <OutlinedInput
                                    id='evaluationName'
                                    type='string'
                                    size='small'
                                    fullWidth
                                    placeholder='Evaluation'
                                    value={evaluationName}
                                    name='evaluationName'
                                     => }
                                />
                            </Box>
                            <Box>
                                <Typography variant='overline'>
                                    Dataset to use<span style={{ color: 'red' }}>&nbsp;*</span>
                                </Typography>
                                <Dropdown
                                    name='dataset'
                                    defaultOption='Select Dataset'
                                    options={datasets}
                                     => }
                                    value={dataset}
                                />
                            </Box>
                            <Box>
                                <Typography variant='overline' sx={{ mr: 2 }}>
                                    Treat all dataset rows as one conversation ?
                                </Typography>
                                <FormControlLabel
                                    label=''
                                    control={<Switch />}
                                    value={datasetAsOneConversation}
                                     => }
                                />
                            </Box>
                            <Box>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='overline'>
                                        Select your flows to Evaluate
                                        <span style={{ color: 'red' }}>&nbsp;*</span>
                                    </Typography>
                                    <Typography variant='overline'>
                                        <Checkbox defaultChecked size='small' label='All' value='Chatflow' onChange={onChangeFlowType} />{' '}
                                        Chatflows
                                        <Checkbox
                                            defaultChecked
                                            size='small'
                                            label='All'
                                            value='Agentflow v2'
                                            onChange={onChangeFlowType}
                                        />{' '}
                                        Agentfl
                                        <Checkbox
                                            defaultChecked
                                            size='small'
                                            label='All'
                                            value='Custom Assistant'
                                            onChange={onChangeFlowType}
                                        />{' '}
                                        Custom Assistants
                                    </Typography>
                                </div>
                                <MultiDropdown
                                    name={'chatflow1'}
                                     => fl)}
                                     => }
                                    value={chatflow ?? chatflow ?? 'choose an option'}
                                />
                            </Box>
                        </>
                    )}
                    {activeStep === 1 && (
                        <>
                            <Box>
                                <Typography variant='overline'>Select the Evaluators</Typography>
                                <MultiDropdown
                                    name={'selectEvals'}
                                    options={availableSimpleEvaluators}
                                     => }
                                    value={selectedSimpleEvaluators}
                                />
                            </Box>
                        </>
                    )}
                    {activeStep === 2 && (
                        <>
                            <Box>
                                <Typography variant='overline' sx={{ mr: 2 }}>
                                    Use an LLM to grade the results ?
                                </Typography>
                                <Dropdown
                                    name='chatLLM'
                                    defaultOption='no_grading'
                                    options={chatLLMs}
                                    value={selectedLLM}
                                     => }
                                />
                            </Box>
                            {useLLM && availableModels.length > 0 && (
                                <Box>
                                    <Typography variant='overline'>Select Model</Typography>
                                    <Dropdown
                                        name='selectedModel'
                                        defaultOption=''
                                        options={availableModels}
                                        value={selectedModel}
                                         => }
                                    />
                                </Box>
                            )}
                            {useLLM && availableModels.length === 0 && (
                                <Box>
                                    <Typography variant='overline'>Enter the Model Name</Typography>
                                    <OutlinedInput
                                        id='selectedModel'
                                        type='string'
                                        size='small'
                                        fullWidth
                                        placeholder='Model Name'
                                        value={selectedModel}
                                        name='selectedModel'
                                         => }
                                    />
                                </Box>
                            )}
                            {u => llm.name === ?.credential && (
                                <Box>
                                    <Typography variant='overline'>Select Credential</Typography>
                                    <CredentialInputHandler
                                        key={selectedLLM}
                                        size='small'
                                        sx={{ flexGrow: 1, marginBottom: 3 }}
                                        data={credentialId ? { credential: credentialId } : {}}
                                        inputParam={{
                                            label: 'Connect Credential',
                                            name: 'credential',
                                            type: 'credential',
                                            credentialNames: [
                                                 => llm.name === ?.credential.credentialNames[0]
                                            ]
                                        }}
                                         => {
                                            
                                        }}
                                    />
                                </Box>
                            )}
                            {useLLM && (
                                <Box>
                                    <Typography variant='overline'>Select Evaluators</Typography>
                                    <MultiDropdown
                                        name={'selectLLMEvals'}
                                        options={availableLLMEvaluators}
                                         => }
                                        value={selectedLLMEvaluators}
                                    />
                                </Box>
                            )}
                        </>
                    )}
                    <Divider />
                </Stack>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'space-between', marginBottom: 10 }}>
                {activeStep > 0 && (
                    <I => g}>
                        <IconArrowLeft />
                    </IconButton>
                )}
                <div style={{ flex: 1 }}></div>
                {activeStep === 1 && selectedSimpleEvaluators.length === 0 && (
                    <Button
                        title='Skip Evaluators'
                        color='primary'
                        sx={{ mr: 2, borderRadius: 25 }}
                        variant='outlined'
                         => g}
                    >
                        {'Skip'}
                    </Button>
                )}
                {activeStep === 1 && selectedSimpleEvaluators.length > 0 && (
                    <Butt => g}>
                        {'Next'}
                    </Button>
                )}
                {activeStep !== 1 && (
                    <StyledButton
                        }
                        sx={{ mr: 2, borderRadius: 25 }}
                        variant='contained'
                         => g}
                    >
                        {activeStep === steps.length - 1 ? 'Start Evaluation' : 'Next'}
                    </StyledButton>
                )}
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

CreateEvaluationDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default CreateEvaluationDialog
