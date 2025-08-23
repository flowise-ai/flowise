import { useEffect, useRef, useState, useCallback, useContext } from 'react'
import ReactFlow, { addEdge, Controls, MiniMap, Background, useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'
import './index.css'
import { useReward } from 'react-rewards'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    REMOVE_DIRTY,
    SET_DIRTY,
    SET_CHATFLOW,
    enqueueSnackbar as enqueueSnackbarAction,
    closeSnackbar as closeSnackbarAction
} from '@/store/actions'
import { omit, cloneDeep } from 'lodash'

// material-ui
import { Toolbar, Box, AppBar, Button, Fab } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import CanvasNode from './AgentFlowNode'
import IterationNode from './IterationNode'
import AgentFlowEdge from './AgentFlowEdge'
import ConnectionLine from './ConnectionLine'
import StickyNote from './StickyNote'
import CanvasHeader from '@/views/canvas/CanvasHeader'
import AddNodes from '@/views/canvas/AddNodes'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import EditNodeDialog from '@/views/agentflowsv2/EditNodeDialog'
import ChatPopUp from '@/views/chatmessage/ChatPopUp'
import ValidationPopUp from '@/views/chatmessage/ValidationPopUp'
import { flowContext } from '@/store/context/ReactFlowContext'

// API
import nodesApi from '@/api/nodes'
import chatflowsApi from '@/api/chatflows'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// icons
import { IconX, IconRefreshAlert, IconMagnetFilled, IconMagnetOff } from '@tabler/icons-react'

// utils
import {
    getUniqueNodeLabel,
    getUniqueNodeId,
    initNode,
    updateOutdatedNodeData,
    updateOutdatedNodeEdge,
    isValidConnectionAgentflowV2
} from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import { usePrompt } from '@/utils/usePrompt'

// const
import { FLOWISE_CREDENTIAL_ID, AGENTFLOW_ICONS } from '@/store/constant'

const nodeTypes = { agentFlow: CanvasNode, stickyNote: StickyNote, iteration: IterationNode }
const edgeTypes = { agentFlow: AgentFlowEdge }

// ==============================|| CANVAS ||============================== //

 => {
    
    
     => 

    
    const templateFlowData = state ? state.templateFlowData : ''

    .
    const chatflowId =
        URLpath[URLpath.length - 1] === 'canvas' || URLpath[URLpath.length - 1] === 'agentcanvas' ? '' : URLpath[URLpath.length - 1]
     ? 'Agent' : 'Chatflow'

    

    
     => 
    
    
    

    // ==============================|| Snackbar ||============================== //

    u
     => )
     => )

    // ==============================|| ReactFlow ||============================== //

    
    

    
    
    
    
    

    

    // ==============================|| Chatflow API ||============================== //

    
    
    
    

    // ==============================|| Events & Actions ||============================== //

     => {
        ) {
            return
        }

        [0]
        [0]

         => ?.color ?? theme.palette.primary.main
         => ?.color ?? theme.palette.primary.main

        let edgeLabel = undefined
         {
            .p
            e ? 0 : _e.t
        }

         {
            e.p
            edgeLabel = edgeLabel === '0' ? 'proceed' : 'reject'
        }

        // Check if both source and target nodes are within the same iteration node
        .f => n
        .f => n
        const isWithinIterationNode = sourceNode?.parentNode && targetNode?.parentNode && sourceNode.parentNode === targetNode.parentNode

        const newEdge = {
            ...params,
            data: {
                ...params.data,
                sourceColor,
                targetColor,
                edgeLabel,
                isHumanInput: nodeName === 'humanInputAgentflow'
            },
            ...(,
            type: 'agentFlow',
            id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`
        }
         => a)
    }

     => {
        try {
            
            const nodes = flowData.nodes || []

            
            
             => , 0)
        }  {
            
        }
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${canvasTitle} ${chatflow.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                awa
                l
                nav
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
    }

     => {
         {
            .map((n => {
                
                ) {
                    nodeData.credential = nodeData.inputs[FLOWISE_CREDENTIAL_ID]
                    n
                }
                node.data = {
                    ...nodeData,
                    selected: false,
                    status: undefined
                }
                return node
            })

            
            rfInstanceObject.nodes = nodes
            

             {
                const newChatflowBody = {
                    name: chatflowName,
                    deployed: false,
                    isPublic: false,
                    flowData,
                    type: 'AGENTFLOW'
                }
                
            } else {
                const updateBody = {
                    name: chatflowName,
                    flowData
                }
                up
            }
        }
    }

    // eslint-disable-next-line
     => {
        
         =>
            n => {
                 {
                    node.data = {
                        ...node.data,
                        selected: true
                    }
                } else {
                    node.data = {
                        ...node.data,
                        selected: false
                    }
                }

                return node
            })
        )
    })

    // eslint-disable-next-line
     => {
         return
         {
            // dont show dialog
        } else {
            const dialogProps = {
                data: node.data,
                 => 
            }

            
            
        }
    })

     => {
        event.p
        event.dataTransfer.dropEffect = 'move'
    }, 

    const onDrop = useCallback(
        (event) => {
            event.p
            
            let n

            // check if the dropped element is valid
             {
                return
            }

            n

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left - 100,
                y: event.clientY - reactFlowBounds.top - 50
            })
            

             => n) {
                enqueueSnackbar({
                    message: 'Only one start node is allowed',
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
                return
            }

            )
            

            const newNode = {
                id: newNodeId,
                position,
                , label: newNodeLabel }
            }

             {
                newNode.type = 'iteration'
            } el {
                newNode.type = 'stickyNote'
            } else {
                newNode.type = 'agentFlow'
            }

            // Check if the dropped node is within any Iteration node's flowContainerSize
             => n
            let parentNode = null

            f {
                // Get the iteration node's position and dimensions
                const nodeWidth = iterationNode.width || 300
                const nodeHeight = iterationNode.height || 250

                // Calculate the boundaries of the iteration node
                const nodeLeft = iterationNode.position.x
                const nodeRight = nodeLeft + nodeWidth
                const nodeTop = iterationNode.position.y
                const nodeBottom = nodeTop + nodeHeight

                // Check if the dropped position is within these boundaries
                 {
                    parentNode = iterationNode

                    // We can't have nested iteration nodes
                     {
                        enqueueSnackbar({
                            message: 'Nested iteration node is not supported yet',
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
                        return
                    }

                    // We can't have human input node inside iteration node
                     {
                        enqueueSnackbar({
                            message: 'Human input node is not supported inside Iteration node',
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
                        return
                    }
                    break
                }
            }

            // If the node is dropped inside an iteration node, set its parent
             {
                newNode.parentNode = parentNode.id
                newNode.extent = 'parent'
                // Adjust position to be relative to the parent
                newNode.position = {
                    x: position.x - parentNode.position.x,
                    y: position.y - parentNode.position.y
                }
            }

            
             => {
                ..map((n => {
                     {
                        node.data = {
                            ...node.data,
                            selected: true
                        }
                    } else {
                        node.data = {
                            ...node.data,
                            selected: false
                        }
                    }

                    return node
                })
            })
             => , 0)
        },

        // eslint-disable-next-line
        [reactFlowInstance]
    )

     => {
        const componentNodes = canvas.componentNodes

        
        
        let toBeRemovedEdges = []

        f {
            const node = cloneNodes[i]
             => 
             {
                
                
                t)
            }
        }

        
         => ))
        
        
    }

    const { reward: confettiReward } = useReward('canvasConfetti', 'confetti', {
        elementCount: 150,
        spread: 80,
        lifetime: 300,
        startVelocity: 40,
        zIndex: 10000,
        decay: 0.92,
        position: 'fixed'
    })

     => {
         => {
            
        }, 50)
    }

     => {
        
        enqueueSnackbar({
            message: `${canvasTitle} saved`,
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

     => {
        enqueueSnackbar({
            message,
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

     => {
        
    }

     => {
        const componentNodes = canvas.componentNodes

        f {
            const node = nodes[i]
             => 
             {
                
                return
            }
        }

        
    }

    // ==============================|| useEffect ||============================== //

    // Get specific chatflow successful
    u => {
         {
            const chatflow = getSpecificChatflowApi.data
             : []
            
            
            
        } el {
            e
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Create new chatflow successful
    u => {
         {
            const chatflow = createNewChatflowApi.data
            
            
            w
        } el {
            e
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Update chatflow successful
    u => {
         {
            
            
        } el {
            e
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
         {
             : []
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Initialization
    u => {
        
         {
            getSpe
        } else {
            ) {
                han)
                 => l, 0)
            } else {
                
                
            }
            dispatch({
                type: SET_CHATFLOW,
                chatflow: {
                    name: `Untitled ${canvasTitle}`
                }
            })
        }

        getN

        // Clear dirty state before leaving and remove any ongoing test triggers and webhooks
         => {
             => , 0)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
        fun {
            
            //TODO: prevent paste event when input focused, temporary fix: catch chatflow syntax
             && pa) {
                han
            }
        }

        w

         => {
            w
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         && templateFl) {
            han
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u

    

    u => {
         && getN {
             => n
             {
                
                clonedStartNodeData.position = { x: 100, y: 100 }
                const startNode = {
                    id: 'startAgentflow_0',
                    type: 'agentFlow',
                    position: { x: 100, y: 100 },
                    data: {
                        ...,
                        label: 'Start'
                    }
                }
                
                
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <span
                id='canvasConfetti'
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    t',
                    width: '0',
                    height: '0',
                    zIndex: 9999,
                    pointerEvents: 'none',
                    background: 'transparent'
                }}
            />

            <Box>
                <AppBar
                    enableColorOnDark
                    position='fixed'
                    color='inherit'
                    elevation={1}
                    sx={{
                        bgcolor: theme.palette.background.default
                    }}
                >
                    <Toolbar>
                        <CanvasHeader
                            chatflow={chatflow}
                            handleSaveFlow={handleSaveFlow}
                            handleDeleteFlow={handleDeleteFlow}
                            handleLoadFlow={handleLoadFlow}
                            isAgentCanvas={true}
                            isAgentflowV2={true}
                        />
                    </Toolbar>
                </AppBar>
                <Box sx={{ pt: '70px', height: '100vh', width: '100%' }}>
                    <div className='reactflow-parent-wrapper'>
                        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
                            <ReactFlow
                                nodes={nodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onNodeClick={onNodeClick}
                                onNodeDoubleClick={onNodeDoubleClick}
                                onEdgesChange={onEdgesChange}
                                onDrop={onDrop}
                                onDragOver={onDragOver}
                                onNodeDragStop={setDirty}
                                nodeTypes={nodeTypes}
                                edgeTypes={edgeTypes}
                                onConnect={onConnect}
                                onInit={setReactFlowInstance}
                                fitView
                                deleteKeyCode={canvas.canvasDialogShow ? null : ['Delete']}
                                minZoom={0.5}
                                snapGrid={[25, 25]}
                                snapToGrid={isSnappingEnabled}
                                connectionLineComponent={ConnectionLine}
                            >
                                <Controls
                                    className={customization.isDarkMode ? 'dark-mode-controls' : ''}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        left: '50%',
                                        t'
                                    }}
                                >
                                    <button
                                        className='react-flow__controls-button react-flow__controls-interactive'
                                         => {
                                            
                                        }}
                                        title='toggle snapping'
                                        aria-label='toggle snapping'
                                    >
                                        {isSnappingEnabled ? <IconMagnetFilled /> : <IconMagnetOff />}
                                    </button>
                                </Controls>
                                <MiniMap
                                    nodeStrokeWidth={3}
                                    nodeColor={customization.isDarkMode ? '#2d2d2d' : '#e2e2e2'}
                                    nodeStrokeColor={customization.isDarkMode ? '#525252' : '#fff'}
                                    ma' : ''}
                                    style={{
                                        backgroundColor: customization.isDarkMode ? theme.palette.background.default : '#fff'
                                    }}
                                />
                                <Background color='#aaa' gap={16} />
                                <AddNodes
                                    isAgentCanvas={true}
                                    isAgentflowv2={true}
                                    nodesData={getNodesApi.data}
                                    node={selectedNode}
                                    onFlowGenerated={triggerConfetti}
                                />
                                <EditNodeDialog
                                    show={editNodeDialogOpen}
                                    dialogProps={editNodeDialogProps}
                                     => }
                                />
                                {isSyncNodesButtonEnabled && (
                                    <Fab
                                        sx={{
                                            left: 60,
                                            top: 20,
                                            color: 'white',
                                            background: 'orange',
                                            '&:hover': {
                                                background: 'orange',
                                                ba 0 0)`
                                            }
                                        }}
                                        size='small'
                                        aria-label='sync'
                                        title='Sync Nodes'
                                         => }
                                    >
                                        <IconRefreshAlert />
                                    </Fab>
                                )}
                                <ChatPopUp isAgentCanvas={true} chatflowid={chatflowId} onOpenChange={setChatPopupOpen} />
                                {!chatPopupOpen && <ValidationPopUp isAgentCanvas={true} chatflowid={chatflowId} />}
                            </ReactFlow>
                        </div>
                    </div>
                </Box>
                <ConfirmDialog />
            </Box>
        </>
    )
}

export default AgentflowCanvas
