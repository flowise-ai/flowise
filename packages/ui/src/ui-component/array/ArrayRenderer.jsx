import { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Chip, Box, Button, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { IconTrash, IconPlus } from '@tabler/icons-react'
import NodeInputHandler from '@/views/canvas/NodeInputHandler'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'
import { showHideInputs } from '@/utils/genericHelper'
import { cloneDeep } from 'lodash'
import { flowContext } from '@/store/context/ReactFlowContext'

exp => {
     // these are the actual values. Ex: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]
     // these are the input parameters for each array item. Ex: [{label: 'Name', type: 'string', display: true}, {label: 'age', type: 'number', display: false}]
    
     => 
    
    const { reactFlowInstance } = flowContextValue || {}

    // Handler for when input values change within array items
     => {
        // Create deep copy to avoid mutating state directly
        let 

        // Update the specific array item that changed
        const updatedArrayItems = [...arrayItems]
        const updatedItem = { ...updatedArrayItems[itemIndex] }

        // Reset the value of fields which has show/hide rules, so the old values don't persist
        f {
            const fieldDef = inputParam.array[i]
             {
                updatedItem[fieldDef.name] = fieldDef.default || ''
            }
        }

        // Set the new value for the changed field
        updatedItem[changedParam.name] = newValue
        updatedArrayItems[itemIndex] = updatedItem

        // Update local state and parent data
        
        data.inputs[inputParam.name] = updatedArrayItems
        clonedData.inputs[inputParam.name] = updatedArrayItems

        // Recalculate display parameters based on new values
        , 

         {
            const updatedItemParams = [...itemParameters]
            updatedItemParams[itemIndex] = newItemParams
            
        }
    }

    // Initialize array items and parameters when component mounts or data changes
    u => {
        const initialArrayItems = data.inputs[inputParam.name] || []
        

        // Calculate initial display parameters for each array item
        const initialItemParameters = []
        f {
            , 
             {
                
            }
        }

        
    }, 

     => {
        // Skip output anchor updates for DocStore context
         return

         return

         => ({
            id: `${data.id}-output-${i}`,
            label: i,
            name: i,
            description: `Condition ${i}`
        }))

        // always append additional output anchor for ELSE for condition
         {
            updatedOutputs.push({
                id: `${data.id}-output-${items.length}`,
                label: items.length,
                name: items.length,
                description: 'Else'
            })
        }
        data.outputAnchors = updatedOutputs

        

        // Update the current node with new output anchors
         => {
             {
                return {
                    ...node,
                    data: {
                        ...node.data,
                        outputAnchors: updatedOutputs
                    }
                }
            }
            return node
        })

        

        // Update edges if an item is deleted
         {
            
             => {
                ) {
                    .p
                    ) {
                        return false
                    }
                }
                return true
            })
            
        }
    }

    // Handler for adding new array items
     => {
        // Initialize new item with default values
        let newItem = {}

        f {
            newItem[fieldDef.name] = fieldDef.default || ''
        }

        /* {
            newItem = inputParam.default[0]
        }*/

        // Update array items
        const updatedArrayItems = [...arrayItems, newItem]
        
        data.inputs[inputParam.name] = updatedArrayItems

        // Calculate display parameters for all items including new one
        const updatedItemParameters = []
        f {
            , 
             {
                up
            }
        }
        

        up
    }

    // Handler for deleting array items
     => {
         => 
        
        data.inputs[inputParam.name] = updatedArrayItems

         => 
        

        up
    }

     || arrayItems.length > 1

    return (
        <>
            {/* Render each array item */}
            {a => {
                // Create item data directly from parent data
                const itemData = {
                    ...data,
                    inputs: itemValues,
                    inputParams: itemParameters[index] || []
                }

                return (
                    <Box
                        sx={{
                            p: 2,
                            mt: 2,
                            mb: 1,
                            border: 1,
                            borderColor: theme.palette.grey[900] + 25,
                            borderRadius: 2,
                            position: 'relative'
                        }}
                        key={index}
                    >
                        {/* Delete button for array item */}
                        {isDeleteButtonVisible && (
                            <IconButton
                                title='Delete'
                                 => han}
                                sx={{
                                    position: 'absolute',
                                    height: '35px',
                                    width: '35px',
                                    right: 10,
                                    top: 10,
                                    color: customization?.isDarkMode ? theme.palette.grey[300] : 'inherit',
                                    '&:hover': { color: 'red' }
                                }}
                            >
                                <IconTrash />
                            </IconButton>
                        )}

                        <Chip
                            label={`${index}`}
                            size='small'
                            sx={{ position: 'absolute', right: isDeleteButtonVisible ? 45 : 10, top: 16 }}
                        />

                        {/* Render input fields for array item */}
                        {itemParameters[index]
                            .f => pa
                            .map((pa => {
                                 {
                                    return (
                                        <DocStoreInputHandler
                                            disabled={disabled}
                                            key={_index}
                                            inputParam={param}
                                            data={itemData}
                                             => {
                                                han
                                            }}
                                        />
                                    )
                                }
                                return (
                                    <NodeInputHandler
                                        disabled={disabled}
                                        key={_index}
                                        inputParam={param}
                                        data={itemData}
                                        isAdditionalParams={true}
                                        parentParamForArray={inputParam}
                                        arrayIndex={index}
                                         => {
                                            han
                                        }}
                                    />
                                )
                            })}
                    </Box>
                )
            })}

            {/* Add new item button */}
            <Button
                fullWidth
                size='small'
                variant='outlined'
                sx={{ borderRadius: '16px', mt: 2 }}
                startIcon={<IconPlus />}
                onClick={handleAddItem}
            >
                Add {inputParam.label}
            </Button>
        </>
    )
}

ArrayRenderer.propTypes = {
    inputParam: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    isDocStore: PropTypes.bool
}
