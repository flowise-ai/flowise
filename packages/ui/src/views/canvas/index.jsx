import { useEffect, useRef, useState, useCallback, useContext } from 'react'
import ReactFlow, { addEdge, Controls, Background, useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'

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
import CanvasNode from './CanvasNode'
import ButtonEdge from './ButtonEdge'
import StickyNote from './StickyNote'
import CanvasHeader from './CanvasHeader'
import AddNodes from './AddNodes'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ChatPopUp from '@/views/chatmessage/ChatPopUp'
import VectorStorePopUp from '@/views/vectorstore/VectorStorePopUp'
import { flowContext } from '@/store/context/ReactFlowContext'

// API
import nodesApi from '@/api/nodes'
import chatflowsApi from '@/api/chatflows'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'
import { useAuth } from '@/hooks/useAuth'

// icons
import { IconX, IconRefreshAlert, IconMagnetFilled, IconMagnetOff } from '@tabler/icons-react'

// utils
import {
    getUniqueNodeId,
    initNode,
    rearrangeToolsOrdering,
    getUpsertDetails,
    updateOutdatedNodeData,
    updateOutdatedNodeEdge
} from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import { usePrompt } from '@/utils/usePrompt'

// const
import { FLOWISE_CREDENTIAL_ID } from '@/store/constant'

const nodeTypes = { customNode: CanvasNode, stickyNote: StickyNote }
const edgeTypes = { buttonedge: ButtonEdge }

// ==============================|| CANVAS ||============================== //

 => {
    
    
    

    
    const templateFlowData = state ? state.templateFlowData : ''

    .
    const chatflowId =
        URLpath[URLpath.length - 1] === 'canvas' || URLpath[URLpath.length - 1] === 'agentcanvas' ? '' : URLpath[URLpath.length - 1]
     ? true : false
     ? 'Agent' : 'Chatflow'

    

    
     => 
     => 
    
    
    

    // ==============================|| Snackbar ||============================== //

    u
     => )
     => )

    // ==============================|| ReactFlow ||============================== //

    
    

    
    
    
    

    

    
    
    

    // ==============================|| Chatflow API ||============================== //

    
    
    
    
    

    // ==============================|| Events & Actions ||============================== //

     => {
        const newEdge = {
            ...params,
            type: 'buttonedge',
            id: `${params.source}-${params.sourceHandle}-${params.target}-${params.targetHandle}`
        }

        [0]
        [0]
        [2]

         =>
            n => {
                 {
                     => , 0)
                    let value
                     => an
                     => pa

                     {
                        const newValues = node.data.inputs[targetInput] || []
                         {
                            
                        } else {
                            newValue
                        }
                        value = newValues
                    } el {
                        value = node.data.inputs[targetInput] || ''
                    } else {
                        value = `{{${sourceNodeId}.data.instance}}`
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
                    selected: false
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
                    type: isAgentCanvas ? 'MULTIAGENT' : 'CHATFLOW'
                }
                
            } else {
                
                
                getHa
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

            )

            const newNode = {
                id: newNodeId,
                position,
                type: nodeData.type !== 'StickyNote' ? 'customNode' : 'stickyNote',
                
            }

            
             =>
                n.map((n => {
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
        
         
        el
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
            const workspaceId = chatflow.workspaceId
            ) {
                nav
                return
            }
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

    // check if chatflow has changed before saving
    u => {
         => {
             {
                const confirmPayload = {
                    title: `Confirm Change`,
                    description: `${canvasTitle} ${chatflow.name} has changed since you have opened, overwrite changes?`,
                    confirmButtonName: 'Confirm',
                    cancelButtonName: 'Cancel'
                }
                

                 {
                    return
                }
            }
            const updateBody = {
                name: chatflowName,
                flowData
            }
            up
        }

         {
            
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

    return (
        <>
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
                            isAgentCanvas={isAgentCanvas}
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
                                minZoom={0.1}
                                snapGrid={[25, 25]}
                                snapToGrid={isSnappingEnabled}
                                className='chatflow-canvas'
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
                                <Background color='#aaa' gap={16} />
                                <AddNodes isAgentCanvas={isAgentCanvas} nodesData={getNodesApi.data} node={selectedNode} />
                                {isSyncNodesButtonEnabled && (
                                    <Fab
                                        sx={{
                                            left: 40,
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
                                {isUpsertButtonEnabled && <VectorStorePopUp chatflowid={chatflowId} />}
                                <ChatPopUp isAgentCanvas={isAgentCanvas} chatflowid={chatflowId} />
                            </ReactFlow>
                        </div>
                    </div>
                </Box>
                <ConfirmDialog />
            </Box>
        </>
    )
}

export default Canvas
