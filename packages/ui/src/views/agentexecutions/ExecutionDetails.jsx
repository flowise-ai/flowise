import { useEffect, useState, useCallback, forwardRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'

// MUI
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import { Typography, Box, Drawer, Chip, Button, Tooltip } from '@mui/material'
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
import DragHandleIcon from '@mui/icons-material/DragHandle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StopCircleIcon from '@mui/icons-material/StopCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { IconButton } from '@mui/material'
import {
    IconRefresh,
    IconExternalLink,
    IconCopy,
    IconLoader,
    IconCircleXFilled,
    IconRelationOneToManyFilled,
    IconShare,
    IconWorld,
    IconX
} from '@tabler/icons-react'

// Project imports
import { useTheme } from '@mui/material/styles'
import { FLOWISE_CREDENTIAL_ID, AGENTFLOW_ICONS } from '@/store/constant'
import { NodeExecutionDetails } from '@/views/agentexecutions/NodeExecutionDetails'
import ShareExecutionDialog from './ShareExecutionDialog'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// API
import executionsApi from '@/api/executions'

// Hooks
import useApi from '@/hooks/useApi'

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
    // Check if this is an iteration node
    const isIterationNode = name === 'iterationAgentflow'

    return (
        <TreeItem2Label
            {...other}
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
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

            {I} sx={{ ml: 1, fontSize: '1.2rem' }} />}
        </TreeItem2Label>
    )
}

CustomLabel.propTypes = {
    icon: PropTypes.func,
    itemStatus: PropTypes.string,
    children: PropTypes.node,
    name: PropTypes.string
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
             => {
                 => <IconCircleXFilled {...props} color={theme.palette.error.main} />
                IconWrapper.displayName = 'TerminatedIcon'
                return <IconWrapper {...props} />
            }
        case 'STOPPED':
            return StopCircleIcon
        case 'INPROGRESS':
            // eslint-disable-next-line react/display-name
             => {
                 => (
                    // eslint-disable-next-line
                    <IconLoader {...props} color={theme.palette.warning.dark} className={`spin-animation ${props.className || ''}`} />
                )
                IconWrapper.displayName = 'InProgressIcon'
                return <IconWrapper {...props} />
            }
    }
}

 {
    const { id, itemId, label, disabled, children, ...other } = props
    

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
                            name: [0]
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
    className: PropTypes.string
}

const MIN_DRAWER_WIDTH = 400
const DEFAULT_DRAWER_WIDTH = window.innerWidth - 400
const MAX_DRAWER_WIDTH = window.innerWidth

exp => {
    )
    
    
    
    
    
    
    
     => 
    

    

    // useEffect to initialize localMetadata when metadata changes
    u => {
         {
            
        }
    }, 

     => {
        nav
        

        // Show success message
        dispatch(
            enqueueSnackbarAction({
                message: 'ID copied to clipboard',
                options: {
                    key: new .getT + Math.,
                    variant: 'success',
                    a => (
                        <Butt => )}>
                            <IconX />
                        </Button>
                    )
                }
            })
        )

        // Reset copied state after 2 seconds
         => {
            
        }, 2000)
    }

     => {
        
        
    }

     => {
        const newWidth = document.body.offsetWidth - e.clientX
         {
            
        }
    }, 

     => {
        
        
    }

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

     => {
        const newIsPublic = !localMetadata.isPublic
        up.then(() => {
            // Update local metadata to reflect the change
             => ({
                ...prev,
                isPublic: newIsPublic
            }))

            // Show success message
            dispatch(
                enqueueSnackbarAction({
                    message: newIsPublic ? 'Execution shared publicly' : 'Execution is no longer public',
                    options: {
                        key: new .getT + Math.,
                        variant: 'success',
                        a => (
                            <Butt => )}>
                                <IconX />
                            </Button>
                        )
                    }
                })
            )

            // Notify parent component to refresh data
             {
                
            }
        })
    }

    u => {
         {
            

            // Find first stopped item if metadata state is STOPPED
             {
                 => {
                    f {
                         return node
                         {
                            
                             return found
                        }
                    }
                    return null
                }
                

                 {
                    )
                    
                } else {
                    )
                    // Set the first item as default selected item
                     {
                        
                    }
                }
            } else {
                )
                // Set the first item as default selected item
                 {
                    
                }
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

    // Content to be rendered in both drawer and full page modes
    const contentComponent = (
        <Box sx={{ display: 'flex', height: '100%', flexDirection: 'row' }}>
            <Box
                sx={{
                    flex: '1 1 35%',
                    padding: 2,
                    borderRight: 1,
                    borderColor: 'divider',
                    overflow: 'auto'
                }}
            >
                <Box
                    sx={{
                        pb: 1,
                        mb: 2,
                        ba => theme.palette.background.paper,
                        borderBottom: 1,
                        borderColor: 'divider'
                    }}
                >
                    <Box>
                        {!isPublic && (
                            <Chip
                                sx={{ pl: 1 }}
                                icon={<IconExternalLink size={15} />}
                                variant='outlined'
                                label={localMetadata?.agentflow?.name || localMetadata?.agentflow?.id || 'Go to AgentFlow'}
                                className={'button'}
                                 => w}
                            />
                        )}

                        {!isPublic && (
                            <Tooltip
                                title={`Execution ID: ${localMetadata?.id || ''}`}
                                placement='top'
                                disableHoverListener={!localMetadata?.id}
                            >
                                <Chip
                                    sx={{ ml: 1, pl: 1 }}
                                    icon={<IconCopy size={15} />}
                                    variant='outlined'
                                    label={copied ? 'Copied!' : 'Copy ID'}
                                    className={'button'}
                                    onClick={copyToClipboard}
                                />
                            </Tooltip>
                        )}

                        {!isPublic && !localMetadata.isPublic && (
                            <Chip
                                sx={{ ml: 1, pl: 1 }}
                                icon={
                                    updateExecutionApi.loading ? (
                                        <IconLoader size={15} className='spin-animation' />
                                    ) : (
                                        <IconShare size={15} />
                                    )
                                }
                                variant='outlined'
                                label={updateExecutionApi.loading ? 'Updating...' : 'Share'}
                                className={'button'}
                                 => }
                                disabled={updateExecutionApi.loading}
                            />
                        )}

                        {!isPublic && localMetadata.isPublic && (
                            <Chip
                                sx={{ ml: 1, pl: 1 }}
                                icon={
                                    updateExecutionApi.loading ? (
                                        <IconLoader size={15} className='spin-animation' />
                                    ) : (
                                        <IconWorld size={15} />
                                    )
                                }
                                variant='outlined'
                                label={updateExecutionApi.loading ? 'Updating...' : 'Public'}
                                className={'button'}
                                 => }
                                disabled={updateExecutionApi.loading}
                            />
                        )}

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                            <Typography sx={{ flex: 1, mt: 1 }} color='text.primary'>
                                {meta.f : 'N/A'}
                            </Typography>
                            <IconButton
                                 => }
                                size='small'
                                sx={{
                                    color: theme.palette.text.primary,
                                    '&:hover': {
                                        ba => theme.palette.primary.main + '20'
                                    }
                                }}
                                title='Refresh execution data'
                            >
                                <IconRefresh size={20} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <RichTreeView
                    expandedItems={expandedItems}
                    onExpandedItemsChange={handleExpandedItemsChange}
                    selectedItems={selectedItem ? [selectedItem.id] : []}
                    onSelectedItemsChange={handleNodeSelect}
                    items={executionTree}
                    slots={{
                        item: CustomTreeItem
                    }}
                />
            </Box>
            <Box
                sx={{
                    flex: '1 1 65%',
                    padding: 2,
                    overflow: 'auto'
                }}
            >
                {selectedItem && selectedItem.data ? (
                    <NodeExecutionDetails
                        data={selectedItem.data}
                        label={selectedItem.label}
                        status={selectedItem.status}
                        metadata={metadata}
                        isPublic={isPublic}
                        onProceedSuccess={onProceedSuccess}
                    />
                ) : (
                    <Typography color='text.secondary'>No data available for this item</Typography>
                )}
            </Box>
        </Box>
    )

    // Re
    const resizeHandle = (
        <button
            aria-label='Resize drawer'
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '8px',
                cursor: 'ew-resize',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                border: 'none',
                background: 'transparent',
                '&:hover': {
                    ba'
                }
            }}
            onMouseDown={handleMouseDown}
             => {
                 {
                    e.p
                    // Start resize mode
                    han
                }
            }}
        >
            <DragHandleIcon
                sx={{
                    t',
                    fontSize: '20px',
                    color: customization.isDarkMode ? 'white' : 'action.disabled'
                }}
            />
        </button>
    )

    // Render as full page component if isPublic is true
     {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1300,
                    ba => theme.palette.background.paper
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}
                >
                    {contentComponent}
                </Box>
            </Box>
        )
    }

    // Ren
    return (
        <>
            <Drawer
                variant='temporary'
                anchor='right'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        height: '100%'
                    }
                }}
                open={open}
                onClose={onClose}
            >
                {resizeHandle}
                {contentComponent}
            </Drawer>
            <ShareExecutionDialog
                show={showShareDialog}
                executionId={localMetadata?.id}
                 => }
                 => {
                    up.then(() => {
                        // Update local metadata to reflect the change
                         => ({
                            ...prev,
                            isPublic: false
                        }))
                        

                        // Notify parent component to refresh data
                         {
                            
                        }
                    })
                }}
            />
        </>
    )
}

ExecutionDetails.propTypes = {
    open: PropTypes.bool,
    isPublic: PropTypes.bool,
    execution: PropTypes.array,
    metadata: PropTypes.object,
    onClose: PropTypes.func,
    onProceedSuccess: PropTypes.func,
    onUpdateSharing: PropTypes.func,
    onRefresh: PropTypes.func
}

ExecutionDetails.displayName = 'ExecutionDetails'
