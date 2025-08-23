import { useContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { cloneDeep } from 'lodash'

// Material
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconSettings } from '@tabler/icons-react'

// Project imports
import NodeInputHandler from '../canvas/NodeInputHandler'

// API
import nodesApi from '@/api/nodes'

// const
import { initNode, showHideInputParams, initializeDefaultNodeData } from '@/utils/genericHelper'
import { flowContext } from '@/store/context/ReactFlowContext'
import { FLOWISE_CREDENTIAL_ID } from '@/store/constant'

exp => {
    
    

    
    

    // Track the last processed input values to prevent infinite loops using useState
    const [lastProcessedInputs, setLastProcessedInputs] = useState({
        mainValue: null,
        configValue: null,
        arrayValue: null
    })

     => {
        
    }

     => {
        let n

        const updatedInputs = { ...nodeData.inputs }
        updatedInputs[inputParam.name] = newValue

        const updatedInputParams = showHideInputParams({
            ...nodeData,
            inputs: updatedInputs
        })

        // Remove inputs with display set to false
        Obje.f => {
             => pa
             {
                delete updatedInputs[key]
            }
        })

        const credential = updatedInputs.credential || updatedInputs[FLOWISE_CREDENTIAL_ID]

        nodeData = {
            ...nodeData,
            inputParams: updatedInputParams,
            inputs: updatedInputs,
            credential: credential ? credential : undefined
        }

        
    }

    // Memoize current input values for reliable comparison
    const currentInputValues = useMemo(
        () => ({
            mainValue: data.inputs[inputParam.name],
            configValue: data.inputs[`${inputParam.name}Config`],
            arrayValue: parentParamForArray ? data.inputs[parentParamForArray.name] : null
        }),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data.inputs, inputParam.name, parentParamForArray?.name]
    )

    // Load initial component data when the component mounts
    u => {
         => {
            // Get the node name from inputs
            const nodeName = data.inputs[inputParam.name]
            

             return

            // Initialize component node with basic data
            )

            // Helper function to check if array-based configuration exists
             => {
                return parentParamForArray && data.inputs[parentParamForArray.name]
            }

             => {
                return (
                    parentParamForArray &&
                    data.inputs[parentParamForArray.name] &&
                    A &&
                    data.inputs[parentParamForArray.name][arrayIndex] &&
                    data.inputs[parentParamForArray.name][arrayIndex][`${inputParam.name}Config`]
                )
            }

            // Helper function to get current input value
             => {
                 ? data.inputs[parentParamForArray.name][arrayIndex][inputParam.name] : data.inputs[inputParam.name]
            }

            // Helper function to get config data
             => {
                
                    ? data.inputs[parentParamForArray.name][arrayIndex][`${inputParam.name}Config`]
                    : data.inputs[`${inputParam.name}Config`]
            }

            // Update component inputs based on configuration
             ||  {
                
                

                // If stored config value doesn't match current input, reset to defaults
                 {
                    
                    componentNodeData.inputs = { ...defaultInput, [inputParam.name]: currentValue }
                } else {
                    // Use existing config with current input value
                    componentNodeData.inputs = { ...configData, [inputParam.name]: currentValue }
                }
            } else {
                
                    ? data.inputs[parentParamForArray.name][arrayIndex][inputParam.name]
                    : data.inputs[inputParam.name]
                componentNodeData.inputs = {
                    ...componentNodeData.inputs,
                    [inputParam.name]: currentValue
                }
            }

            // Update input parameters visibility based on current inputs
            componentNodeData.inputParams = showHideInputParams({
                ...componentNodeData,
                inputs: componentNodeData.inputs
            })

            const credential = componentNodeData.inputs.credential || componentNodeData.inputs[FLOWISE_CREDENTIAL_ID]
            componentNodeData.credential = credential ? credential : undefined

            

            // Store the processed inputs to track changes
            setLastProcessedInputs({
                mainValue: data.inputs[inputParam.name],
                configValue: data.inputs[`${inputParam.name}Config`],
                arrayValue: parentParamForArray ? data.inputs[parentParamForArray.name] : null
            })
        }

        l

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Handle external changes to data.inputs
    u => {
         return

        // Check if relevant inputs have changed using strict equality comparison
        const hasMainValueChanged = lastProcessedInputs.mainValue !== currentInputValues.mainValue
        const hasConfigValueChanged = lastProcessedInputs.configValue !== currentInputValues.configValue
        const hasArrayValueChanged = lastProcessedInputs.arrayValue !== currentInputValues.arrayValue

         {
            return // No relevant changes
        }

        // Update selectedComponentNodeData with new input values
         => {
            

            // Helpe
             => {
                return (
                    parentParamForArray &&
                    data.inputs[parentParamForArray.name] &&
                    A &&
                    data.inputs[parentParamForArray.name][arrayIndex] &&
                    data.inputs[parentParamForArray.name][arrayIndex][`${inputParam.name}Config`]
                )
            }

             => {
                 ? data.inputs[parentParamForArray.name][arrayIndex][inputParam.name] : data.inputs[inputParam.name]
            }

             => {
                
                    ? data.inputs[parentParamForArray.name][arrayIndex][`${inputParam.name}Config`]
                    : data.inputs[`${inputParam.name}Config`]
            }

            // Update the main input value in component data
            
             {
                updatedComponentData.inputs[inputParam.name] = currentValue
            }

            // If there's config data and it matches the current value, use it
             ||  {
                
                 {
                    // Config is still valid, merge it with current value
                    updatedComponentData.inputs = { ...configData, [inputParam.name]: currentValue }
                } el {
                    // Main value changed but config doesn't match, reset to defaults with new value
                    
                    updatedComponentData.inputs = { ...defaultInput, [inputParam.name]: currentValue }
                }
            }

            // Update input parameters visibility
            updatedComponentData.inputParams = showHideInputParams({
                ...updatedComponentData,
                inputs: updatedComponentData.inputs
            })

            const credential = updatedComponentData.inputs.credential || updatedComponentData.inputs[FLOWISE_CREDENTIAL_ID]
            updatedComponentData.credential = credential ? credential : undefined

            

            // Update the tracked values
            setLastProcessedInputs({
                mainValue: currentInputValues.mainValue,
                configValue: currentInputValues.configValue,
                arrayValue: currentInputValues.arrayValue
            })
        }

        up

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Update node configuration when selected component data changes
    u => {
         return

         =>
            n => {
                 return node

                // Handle array-based configuration
                 {
                    // Initialize array if it doesn't exist
                     {
                        node.data.inputs[parentParamForArray.name] = []
                    }
                    // Initialize array element if it doesn't exist
                     {
                        node.data.inputs[parentParamForArray.name][arrayIndex] = {}
                    }
                    // Store config in array
                    node.data.inputs[parentParamForArray.name][arrayIndex][`${inputParam.name}Config`] = selectedComponentNodeData.inputs
                } else {
                    // Store config directly
                    node.data.inputs[`${inputParam.name}Config`] = selectedComponentNodeData.inputs
                }
                return node
            })
        )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
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
                <Accordion sx={{ background: 'transparent' }} expanded={expanded} onChange={handleAccordionChange}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ background: 'transparent' }}>
                        <IconSettings stroke={1.5} size='1.3rem' />
                        <Typography sx={{ ml: 1 }}>{selectedComponentNodeData?.label} Parameters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {(
                            .f => 
                            .f => 
                            .map(( => (
                                <NodeInputHandler
                                    disabled={disabled}
                                    key={index}
                                    inputParam={inputParam}
                                    data={selectedComponentNodeData}
                                    isAdditionalParams={true}
                                    onCustomDataChange={onCustomDataChange}
                                />
                            ))}
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    )
}

ConfigInput.propTypes = {
    name: PropTypes.string,
    inputParam: PropTypes.object,
    data: PropTypes.object,
    disabled: PropTypes.bool,
    arrayIndex: PropTypes.number,
    parentParamForArray: PropTypes.object
}
