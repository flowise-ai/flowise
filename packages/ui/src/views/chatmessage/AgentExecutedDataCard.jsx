import { useEffect, useState, useCallback, forwardRef, memo } from 'react'
import PropTypes from 'prop-types'

// MUI
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import {
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
    Button,
    Dialog,
    DialogContent,
    DialogActions
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2'
import {
    TreeItem2Content,
    TreeItem2IconContainer,
    TreeItem2GroupTransition,
    TreeItem2Label,
    TreeItem2Root,
    TreeItem2Checkbox
} from '@mui/x-tree-view/TreeItem2'
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon'
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider'
import { TreeItem2DragAndDropOverlay } from '@mui/x-tree-view/TreeItem2DragAndDropOverlay'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StopCircleIcon from '@mui/icons-material/StopCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconArrowsMaximize, IconLoader, IconCircleXFilled, IconRelationOneToManyFilled } from '@tabler/icons-react'

// Project imports
import { useTheme } from '@mui/material/styles'
import { FLOWISE_CREDENTIAL_ID, AGENTFLOW_ICONS } from '@/store/constant'
import { NodeExecutionDetails } from '@/views/agentexecutions/NodeExecutionDetails'

 => {
     {
        case 'FINISHED':
            return 'success.dark'
        case 'ERROR':
        case 'TIMEOUT':
            return 'error.main'
        case 'TERMINATED':
        case 'STOPPED':
            return 'error.main'
        case 'INPROGRESS':
            return 'warning.dark'
    }
}

(({ theme }) => ({
    color: theme.palette.grey[400]
}))

(({ theme }) => ({
    flexDirection: 'row-reverse',
    b,
    ma,
    ma,
    pa,
    pa,
    fontWeight: 500,
    [`&.Mui-expanded `]: {
        '&:n .labelIcon': {
            color: theme.palette.primary.dark,
            ...theme.applyStyles('light', {
                color: theme.palette.primary.main
            })
        },
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: '16px',
            top: '44px',
            he',
            width: '1.5px',
            backgroundColor: theme.palette.grey[700],
            ...theme.applyStyles('light', {
                backgroundColor: theme.palette.grey[300]
            })
        }
    },
    '&:hover': {
        ba,
        color: 'white',
        ...theme.applyStyles('light', {
            color: theme.palette.primary.main
        })
    },
    [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        ...theme.applyStyles('light', {
            backgroundColor: theme.palette.primary.main
        })
    }
}))

(({ theme }) => ({
    color: theme.palette.text.primary
}))

fun {
    

     => {
        // Stop propagation to prevent parent elements from capturing the click
        event.
        
    }

     => 

    // Check if this is an iteration node
    const isIterationNode = name === 'iterationAgentflow'

    return (
        <TreeItem2Label
            {...other}
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {(() => {
                    // Display iteration icon for iteration nodes
                     {
                        return (
                            <Box
                                sx={{
                                    mr: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <IconRelationOneToManyFilled size={20} color={'#9C89B8'} />
                            </Box>
                        )
                    }

                    // Otherwise display the node icon
                     => 
                     {
                        return (
                            <Box
                                sx={{
                                    mr: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <foundIcon.icon size={20} color={foundIcon.color} />
                            </Box>
                        )
                    }
                    return null
                })()}

                <StyledTreeItemLabelText sx={{ flex: 1 }}>{children}</StyledTreeItemLabelText>
                <IconButton
                    onClick={handleOpenDialog}
                    size='small'
                    title='View Details'
                    sx={{
                        ml: 2,
                        zIndex: 10 // Increase z-index to ensure the button is clickable
                    }}
                >
                    <IconArrowsMaximize size={15} color={'teal'} />
                </IconButton>
                {I} sx={{ ml: 1, fontSize: '1.2rem' }} />}
            </Box>
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth='md' fullWidth disableBackdropClick={true}>
                < => e.}>
                    {data ? (
                        <NodeExecutionDetails data={data} label={label} metadata={metadata} />
                    ) : (
                        <Typography color='text.secondary'>No data available for this item</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </TreeItem2Label>
    )
}

CustomLabel.propTypes = {
    icon: PropTypes.elementType,
    itemStatus: PropTypes.string,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    name: PropTypes.string,
    label: PropTypes.string,
    status: PropTypes.object,
    data: PropTypes.object,
    metadata: PropTypes.object
}

CustomLabel.displayName = 'CustomLabel'

 => {
    ) {
        
    }
    
}

 => {
     {
        case 'FINISHED':
            return CheckCircleIcon
        case 'ERROR':
        case 'TIMEOUT':
            return ErrorIcon
        case 'TERMINATED':
            // eslint-disable-next-line react/display-name
             => <IconCircleXFilled {...props} color={theme.palette.error.main} />
        case 'STOPPED':
            return StopCircleIcon
        case 'INPROGRESS':
            // eslint-disable-next-line react/display-name
             => (
                // eslint-disable-next-line
                <IconLoader {...props} color={theme.palette.warning.dark} className={`spin-animation ${props.className || ''}`} />
            )
    }
}

 {
    const { id, itemId, label, disabled, children, agentflowId, sessionId, ...other } = props
    

    const {
        getRootProps,
        getContentProps,
        getIconContainerProps,
        getCheckboxProps,
        getLabelProps,
        getGroupTransitionProps,
        getDragAndDropOverlayProps,
        status,
        publicAPI
    } = u

    
    
    let icon
     {
        
    }

    return (
        <TreeItem2Provider itemId={itemId}>
            <Style}>
                <Cu}>
                    <T}>
                        <TreeItem2Icon status={status} />
                    </TreeItem2IconContainer>
                    <T} />
                    <CustomLabel
                        {...getLabelProps({
                            icon,
                            itemStatus: item.status,
                            expandable: expandable && status.expanded,
                            name: [0],
                            label: item.label,
                            status,
                            data: item.data,
                            metadata: { agentflowId, sessionId }
                        })}
                    />
                    <T} />
                </CustomTreeItemContent>
                {children && (
                    <TreeItem2GroupTransition
                        {...getG}
                        style={{
                            b => {
                                [0]
                                 => 
                                return foundIcon ? foundIcon.color : theme.palette.primary.main
                            })()}`,
                            marginLeft: '13px',
                            paddingLeft: '8px'
                        }}
                    />
                )}
            </StyledTreeItemRoot>
        </TreeItem2Provider>
    )
})

CustomTreeItem.propTypes = {
    id: PropTypes.string,
    itemId: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    agentflowId: PropTypes.string,
    sessionId: PropTypes.string,
    className: PropTypes.string
}

CustomTreeItem.displayName = 'CustomTreeItem'

 => {
    
    
    
    

     => {
        let ids = []
        n => {
            
             {
                ]
            }
        })
        return ids
    }

    // Transform the execution data into a tree structure
     => {
        // for each node, loop through each and every nested key of node.data, and remove the key if it is equal to FLOWISE_CREDENTIAL_ID
        n => {
             => {
                f {
                     {
                        delete data[key]
                    }
                     {
                        
                    }
                }
            }
            
        })

        // Create a map for quick node lookup
        // Use execution index to make each node instance unique
        
        n => {
            const uniqueNodeId = `${node.nodeId}_${index}`
            n
        })

        // Identify iteration nodes and their children
         // parentId -> Map of iterationIndex -> nodes

        // Group iteration child nodes by their parent and iteration index
        n => {
             {
                const parentId = node.data.parentNodeId
                const iterationIndex = node.data.iterationIndex

                ) {
                    )
                }

                
                ) {
                    
                }

                .pu
            }
        })

        // Create virtual iteration container nodes
         => {
             => {
                // Find the parent iteration node
                let parentNode = null
                f {
                     {
                        parentNode = nodes[i]
                        break
                    }
                }

                 return

                // Get iteration context from first child node
                const firstChildId = nodeIds[0]
                
                const iterationContext = firstChild?.data?.iterationContext || { index: iterationIndex }

                // Create a virtual node for this iteration
                const iterationNodeId = `${parentId}_${iterationIndex}`
                const iterationLabel = `Iteration #${iterationIndex}`

                // Determine status based on child nodes
                 => n)
                 => n.
                    ? 'ERROR'
                    :  => n.
                    ? 'INPROGRESS'
                    :  => n.
                    ? 'FINISHED'
                    : 'UNKNOWN'

                // Create the virtual node and add to nodeMap
                const virtualNode = {
                    nodeId: iterationNodeId,
                    nodeLabel: iterationLabel,
                    data: {
                        name: 'iterationAgentflow',
                        iterationIndex,
                        iterationContext,
                        isVirtualNode: true,
                        parentIterationId: parentId
                    },
                    previousNodeIds: [], // Will be handled in the main tree building
                    status: iterationStatus,
                    uniqueNodeId: iterationNodeId,
                    children: [],
                    executionIndex: -1 // Flag as a virtual node
                }

                n

                // Set this virtual node as the parent for all nodes in this iteration
                n => {
                    
                     {
                        childNode.virtualParentId = iterationNodeId
                    }
                })
            })
        })

        // Root nodes have no previous nodes
        const rootNodes = []
        

        // F
        n => {
            const uniqueNodeId = `${node.nodeId}_${index}`
            

            // Sk
             {
                return
            }

             {
                
            } else {
                // F parent node among all previous nodes
                let mostRecentParentIndex = -1
                let mostRecentParentId = null

                n => {
                    // Find the most recent instance of this parent node
                    f {
                         {
                            mostRecentParentIndex = i
                            mostRecentParentId = parentId
                        }
                    }
                })

                // Only add to the most recent parent
                 {
                    const parentUniqueId = `${mostRecentParentId}_${mostRecentParentIndex}`
                    
                     {
                        pa
                        p
                    }
                }
            }
        })

        // Second pass: Build the iteration sub-trees
         => {
            // Find all instances of the parent node
            const parentInstances = []
            n => {
                 {
                    pa
                }
            })

            // Find the latest instance of the parent node that exists in the tree
            let latestParent = null
            f {
                const parentId = parentInstances[i]
                
                 {
                    latestParent = parent
                    break
                }
            }

             return

            // Add all virtual iteration nodes to the parent
             => {
                const iterationNodeId = `${parentId}_${iterationIndex}`
                
                 {
                    late
                }
            })
        })

        // Third pass: Build the structure inside each virtual iteration node
        n => {
             {
                
                 {
                     {
                        // This is a root node within the iteration
                        v
                    } else {
                        // Find its parent within the same iteration
                        let parentFound = false
                        f {
                            // Look for nodes with the same previous node ID in the same iteration
                            n => {
                                if (
                                    potentialParent.nodeId === prevNodeId &&
                                    potentialParent.data?.iterationIndex === node.data?.iterationIndex &&
                                    potentialParent.data?.parentNodeId === node.data?.parentNodeId &&
                                    !parentFound
                                ) {
                                    p
                                    parentFound = true
                                }
                            })
                        }

                        // If no parent was found within the iteration, add directly to virtual parent
                         {
                            v
                        }
                    }
                }
            }
        })

        // Final pass: Sort all children arrays to ensure iteration nodes appear first
         => {
             {
                // Sort children: iteration nodes first, then others by their original execution order
                n => {
                    // Check if a is an iteration node
                    const aIsIteration = a.data?.name === 'iterationAgentflow' || a.data?.isVirtualNode
                    // Check if b is an iteration node
                    const bIsIteration = b.data?.name === 'iterationAgentflow' || b.data?.isVirtualNode

                    // If both are iterations or both are not iterations, preserve original order
                     {
                        return a.executionIndex - b.executionIndex
                    }

                    // Otherwise, put iterations first
                    return aIsIteration ? -1 : 1
                })

                // Recursively sort children's children
                n
            }
        }

        // Apply sorting to all root nodes and their children
        

        // Transform to the required format
         => ({
            id: node.uniqueNodeId,
            label: node.nodeLabel,
            name: node.data?.name,
            status: node.status,
            data: node.data,
            
        })

        
    }

     => {
        
    }

    u => {
         {
            

            
            )
            // Set the first item as default selected item
             {
                
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
         => {
            f {
                 return node
                 {
                    
                     return found
                }
            }
            return null
        }

        
        
    }

     => {
         => {
            let statuses = []
            n => {
                 
                 {
                    ]
                }
            })
            return statuses
        }

        
        ) return 'ERROR'
        ) return 'INPROGRESS'
        ) return 'STOPPED'
         => ) return 'FINISHED'
        return null
    }, 

    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%', mt: 2 }}>
            <Accordion
                sx={{
                    width: '100%'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        '& .MuiAccordionSummary-content': {
                            alignItems: 'center'
                        }
                    }}
                >
                    {executionTree.length > 0 &&
                        (() => {
                            
                            return (
                                <Box sx={{ mr: 1, fontSize: '1.2rem' }}>
                                    <Box
                                        }
                                        sx={{
                                            mr: 1,
                                            fontSize: '1.2rem',
                                            
                                        }}
                                    />
                                </Box>
                            )
                        })()}
                    <Typography>Process Flow</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <RichTreeView
                        expandedItems={expandedItems}
                        onExpandedItemsChange={handleExpandedItemsChange}
                        selectedItems={selectedItem ? [selectedItem.id] : []}
                        onSelectedItemsChange={handleNodeSelect}
                        items={executionTree}
                        slots={{
                             => <CustomTreeItem {...treeItemProps} agentflowId={agentflowId} sessionId={sessionId} />
                        }}
                        sx={{ width: '100%' }}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

AgentExecutedDataCard.propTypes = {
    status: PropTypes.string,
    execution: PropTypes.array,
    agentflowId: PropTypes.string,
    sessionId: PropTypes.string
}

exp
