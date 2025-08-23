import { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { getUniqueNodeId, showHideInputParams } from '@/utils/genericHelper'
import { cloneDeep, isEqual } from 'lodash'
import { SET_DIRTY } from '@/store/actions'

const initialValue = {
    reactFlowInstance: null,
     => {},
     => {},
     => {},
     => {},
     => {}
}

exp

exp => {
    
    

     => {
         =>
            n => {
                 {
                    node.data = {
                        ...node.data,
                        status,
                        error
                    }
                }
                return node
            })
        )
    }

     => {
         =>
            n => {
                node.data = {
                    ...node.data,
                    status: undefined,
                    error: undefined
                }
                return node
            })
        )
    }

     => {
        .map((n => {
             {
                const updatedInputs = { ...node.data.inputs }

                updatedInputs[inputParam.name] = newValue

                const updatedInputParams = showHideInputParams({
                    ...node.data,
                    inputs: updatedInputs
                })

                // Remove inputs with display set to false
                Obje.f => {
                     => pa
                     {
                        delete updatedInputs[key]
                    }
                })

                return {
                    ...node,
                    data: {
                        ...node.data,
                        inputParams: updatedInputParams,
                        inputs: updatedInputs
                    }
                }
            }
            return node
        })

        // Check if any node's inputParams have changed before updating
        const hasChanges = updatedNodes.some(
            (n => 
        )

         {
            
        }
    }

     => {
        

        // Gathe
        

        // Helper function to collect all descendant nodes recursively
         => {
            .f => n

             => {
                n
                
            })
        }

        // Collect all descendants first
        

        // Add the parent node itself last
        n

        // Clean up inputs for all nodes to be deleted
        n => {
             {
                // Skip parent node as it's already processed at the beginning
                
            }
        })

        // Filter out all nodes and edges in a single operation
         => n => ))

        // Remove all edges connected to any of the deleted nodes
         => e =>  && ))

        
    }

     => {
        
        .f => e)
        
    }

     => {
        const connectedEdges =
            type === 'node'
                ? .f => e
                : .f => e

        f {
            const targetNodeId = edge.target
            const sourceNodeId = edge.source
            [2]

             =>
                n => {
                     {
                        let value
                         => an
                         => pa

                         {
                            const values = node.data.inputs[targetInput] || []
                            value = value => )
                        } el {
                            value = n || ''
                        } else {
                            value = ''
                        }
                        node.data = {
                            ...node.data,
                            inputs: {
                                ...node.data.inputs,
                                [targetInput]: value
                            }
                        }
                    }
                    return node
                })
            )
        }
    }

     => {
        
         => n.
         {
            
            

            const duplicatedNode = {
                ...clonedNode,
                id: newNodeId,
                position: {
                    x: clonedNode.position.x + clonedNode.width + distance,
                    y: clonedNode.position.y
                },
                positionAbsolute: {
                    x: clonedNode.positionAbsolute.x + clonedNode.width + distance,
                    y: clonedNode.positionAbsolute.y
                },
                data: {
                    ...clonedNode.data,
                    id: newNodeId,
                    label: .p})`
                },
                selected: false
            }

            const inputKeys = ['inputParams', 'inputAnchors']
            f {
                f {
                     {
                        
                    }
                }
            }

            const outputKeys = ['outputAnchors']
            f {
                f {
                     {
                        
                    }
                     {
                        f {
                            
                        }
                    }
                }
            }

            // Clear connected inputs
            f {
                if (
                    typeof duplicatedNode.data.inputs[inputName] === 'string' &&
                     &&
                    
                ) {
                    duplicatedNode.data.inputs[inputName] = ''
                } el) {
                    duplicatedNode.data.inputs[inputName] = duplicatedNode.data.inputs[inputName].filter(
                        ( =>  && )
                    )
                }
            }

            
            
        }
    }

    return (
        <flowContext.Provider
            value={{
                reactFlowInstance,
                setReactFlowInstance,
                deleteNode,
                deleteEdge,
                duplicateNode,
                onAgentflowNodeStatusUpdate,
                clearAgentflowNodeStatus,
                onNodeDataChange
            }}
        >
            {children}
        </flowContext.Provider>
    )
}

ReactFlowContext.propTypes = {
    children: PropTypes.any
}
