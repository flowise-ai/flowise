import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import { cloneDeep } from 'lodash'

// Material
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography, OutlinedInput, Button, Stack } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'

// Project imports
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ExpandTextDialog from '@/ui-component/dialog/ExpandTextDialog'
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { Grid } from '@/ui-component/grid/Grid'
import SamplePromptDialog from '@/views/evaluators/SamplePromptDialog'

// Icons
import { IconBulb, IconArrowsMaximize, IconPlus, IconPuzzle, IconX, IconNotes } from '@tabler/icons-react'
import DeleteIcon from '@mui/icons-material/Delete'

// API
import evaluatorsApi from '@/api/evaluators'

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { evaluators, evaluatorTypes, numericOperators } from './evaluatorConstant'

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    
    
    
    
    
    

    
    

    
    

    
    

    const deleteItem = useCallback(
        ( => () => {
             => {
                 => p => )
            })
        },
        []
    )

     => {
        
        
        
    }

     => {
        const dialogProps = {
            value: prompt,
            inputParam,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
    }
     => {
        const dialogProps = {
            value: prompt,
            inputParam,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
    }

     => {
        
        
    }

     => {
         => {
             => {
                let allR]
                const lastRowId = allRows.length ? allRows[allRows.length - 1].id + 1 : 1
                allRows.push({
                    id: lastRowId,
                    property: '',
                    description: '',
                    type: '',
                    required: false
                })
                return allRows
            })
        })
    }

     => {
         => {
             => {
                let allR]
                 => 
                 {
                    allRows[indexToUpdate] = { ...newRow }
                }
                return allRows
            })
        })
    }

    const columns = useMemo(
        () => [
            { field: 'property', headerName: 'Property', editable: true, flex: 1 },
            {
                field: 'type',
                headerName: 'Type',
                type: 'singleSelect',
                valueOptions: ['string', 'number', 'boolean'],
                editable: true,
                width: 120
            },
            { field: 'description', headerName: 'Description', editable: true, flex: 1 },
            { field: 'required', headerName: 'Required', type: 'boolean', editable: true, width: 80 },
            {
                field: 'actions',
                type: 'actions',
                width: 80,
                getA => [
                    <G} />
                ]
            }
        ],
        [deleteItem]
    )

     => {
        
         => )
        
        
    }

     => {
         {
            // return the description of the selected evaluator
             => 
             {
                return e.description
            }
        }
        return ''
    }

     => {
         {
            return true
        }
         {
            return !selectedEvaluator || !selectedValue
        } el {
            return !selectedEvaluator || !selectedMetricOperator || !selectedMetricValue
        } el {
            return !prompt || outputSchema.length === 0
        }
    }

     => {
        try {
            

            
             {
                enqueueSnackbar({
                    message: `Evaluator ${name} updated`,
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
                message: `Failed to update Evaluator ${name}: ${
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
        const data = {
            name: name,
            type: evaluatorType
        }
         {
            data.operator = selectedMetricOperator
            data.value = selectedMetricValue
            data.measure = selectedEvaluator
        } el {
            data.operator = selectedEvaluator
            data.value = selectedValue
        } el {
            data.outputSchema = outputSchema
            data.prompt = prompt
        }
        return data
    }

     => {
        try {
            

            
             {
                enqueueSnackbar({
                    message: 'New Evaluator added',
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
                message: `Failed to add new Evaluator: ${
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
            const data = dialogProps.data
            
            

             {
                
                
            } el {
                
                
                
                
            } el {
                
                
            }
        } el {
            const data = dialogProps.data
            
            
            
        }

         => {
            // reset all values
            
            
            
            
            
            
            
            
        }
    }, 

    u => {
         
        el
         => 
    }, 

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
                    <IconPuzzle style={{ marginRight: '10px' }} />
                    {dialogProps.type === 'ADD' ? 'Add Evaluator' : 'Edit Evaluator'}
                </div>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ pb: 2 }}>
                    <Typography variant='overline'>Name</Typography>
                    <OutlinedInput
                        size='small'
                        multiline={false}
                        type='string'
                        fullWidth
                        key='name'
                         => }
                        value={name ?? ''}
                    />
                </Box>
                <Box sx={{ pb: 2 }}>
                    <Typography variant='overline'>Evaluator Type</Typography>
                    <Dropdown
                        key={evaluatorType}
                        name='evaluatorType'
                        defaultOption='Select Type'
                        options={evaluatorTypes}
                         => }
                        value={evaluatorType}
                    />
                </Box>
                {evaluatorType && evaluatorType !== 'llm' && (
                    <Box sx={{ pb: 2 }}>
                        <Typography variant='overline'>Available Evaluators</Typography>
                        <Dropdown
                            key={selectedEvaluator}
                            name='availableEvaluators'
                            defaultOption='Select Dataset'
                            options={availableEvaluators}
                             => }
                            value={selectedEvaluator}
                        />
                    </Box>
                )}
                {evaluatorType === 'numeric' && selectedEvaluator && (
                    <>
                        <Box sx={{ pb: 2 }}>
                            <Typography variant='overline'>Select Operator</Typography>
                            <Dropdown
                                key={selectedMetricOperator}
                                name='metric'
                                defaultOption='equals'
                                options={numericOperators}
                                 => }
                                value={selectedMetricOperator}
                            />
                        </Box>
                        <Box sx={{ pb: 2 }}>
                            <Typography variant='overline'>Value</Typography>
                            <OutlinedInput
                                size='small'
                                type='number'
                                fullWidth
                                key='selectedValue'
                                 => }
                                value={selectedMetricValue ?? '0'}
                            />
                            <Typography variant='caption' style={{ fontStyle: 'italic' }}>
                                {getCapt}
                            </Typography>
                        </Box>
                    </>
                )}
                {evaluatorType === 'text' && selectedEvaluator && (
                    <>
                        <Box sx={{ pb: 2 }}>
                            <Typography variant='overline'>Value</Typography>
                            <OutlinedInput
                                size='small'
                                multiline={true}
                                type='string'
                                rows={4}
                                fullWidth
                                key='selectedValue'
                                 => }
                                value={selectedValue}
                                sx={{ mb: 2 }}
                            />
                            <Typography variant='caption' style={{ opacity: 0.9, fontStyle: 'italic' }}>
                                {getCapt}
                            </Typography>
                        </Box>
                    </>
                )}
                {evaluatorType === 'llm' && (
                    <>
                        <Box sx={{ pb: 2 }}>
                            <Stack style={{ position: 'relative', justifyContent: 'space-between' }} direction='row'>
                                <Stack style={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                    <Typography variant='overline'>Output Schema</Typography>
                                    <TooltipWithParser title={'What is the output format in JSON?'} />
                                </Stack>
                                <Stack style={{ position: 'relative', alignItems: 'right' }} direction='row'>
                                    <Button variant='outlined' onClick={onShowPromptDialogClicked} startIcon={<IconNotes />} sx={{ mr: 1 }}>
                                        Load from Pre defined Samples
                                    </Button>
                                    <Button variant='outlined' onClick={addNewRow} startIcon={<IconPlus />}>
                                        Add Item
                                    </Button>
                                </Stack>
                            </Stack>
                            <Grid columns={columns} rows={outputSchema} onRowUpdate={onRowUpdate} />
                        </Box>
                        <Box sx={{ pb: 2 }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography variant='overline'>Prompt</Typography>
                                <div style={{ flexGrow: 1 }}></div>
                                {prompt && (
                                    <IconButton
                                        size='small'
                                        sx={{
                                            height: 25,
                                            width: 25
                                        }}
                                        title='Expand'
                                        color='primary'
                                         =>
                                            onExpandDialogClicked({
                                                label: 'Evaluation Prompt',
                                                name: 'evaluationPrompt',
                                                type: 'string'
                                            })
                                        }
                                    >
                                        <IconArrowsMaximize />
                                    </IconButton>
                                )}
                            </div>
                            <OutlinedInput
                                size='small'
                                multiline={true}
                                type='string'
                                rows={6}
                                fullWidth
                                key='prompt'
                                 => }
                                value={prompt}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: 10,
                                    background: '#d8f3dc',
                                    padding: 10,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <IconBulb size={25} color='#2d6a4f' />
                                    <span style={{ color: '#2d6a4f', marginLeft: 10, fontWeight: 400 }}>
                                        You can use <strong>&#123;question&#125;</strong> <strong>&#123;actualOutput&#125;</strong>{' '}
                                        <strong>&#123;expectedOutput&#125;</strong> to inject runtime values into your prompt.
                                    </span>
                                </div>
                            </div>
                        </Box>
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Butt => }>{dialogProps.cancelButtonName}</Button>
                <StyledPermissionButton
                    permissionId={'evaluators:create,evaluators:update'}
                    }
                    variant='contained'
                     => ( : up)}
                >
                    {dialogProps.confirmButtonName}
                </StyledPermissionButton>
            </DialogActions>
            <ConfirmDialog />
            <ExpandTextDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => }
                 => }
            ></ExpandTextDialog>
            <SamplePromptDialog
                show={showSamplePromptDialog}
                dialogProps={samplePromptDialogProps}
                 => }
                 => }
            ></SamplePromptDialog>
        </Dialog>
    ) : null

    
}

AddEditEvaluatorDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default AddEditEvaluatorDialog
