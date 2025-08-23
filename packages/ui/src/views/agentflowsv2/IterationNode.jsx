import PropTypes from 'prop-types'
import { useContext, memo, useRef, useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Background, Handle, Position, useUpdateNodeInternals, NodeToolbar, NodeResizer } from 'reactflow'

// material-ui
import { styled, useTheme, alpha, darken, lighten } from '@mui/material/styles'
import { ButtonGroup, Avatar, Box, Typography, IconButton, Tooltip } from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import { flowContext } from '@/store/context/ReactFlowContext'
import NodeInfoDialog from '@/ui-component/dialog/NodeInfoDialog'

// icons
import {
    IconCheck,
    IconExclamationMark,
    IconCircleChevronRightFilled,
    IconCopy,
    IconTrash,
    IconInfoCircle,
    IconLoader
} from '@tabler/icons-react'
import StopCircleIcon from '@mui/icons-material/StopCircle'
import CancelIcon from '@mui/icons-material/Cancel'

// const
import { baseURL, AGENTFLOW_ICONS } from '@/store/constant'

(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    border: 'solid 1px',
    width: 'max-content',
    height: 'auto',
    padding: '10px',
    boxShadow: 'none'
}))

(({ theme }) => ({
    backgroundColor: theme.palette.card.main,
    color: theme.darkTextPrimary,
    padding: '5px',
    borderRadius: '10px',
    b'
}))

// ===========================|| ITERATION NODE ||=========================== //

 => {
    
     => 
    
    

    
    // eslint-disable-next-line
    
    
    
    
    

    const [cardDimensions, setCardDimensions] = useState({
        width: '300px',
        height: '250px'
    })

    // Add useEffect to update dimensions when reactFlowInstance becomes available
    u => {
         {
            .f => n
             {
                setCardDimensions({
                    width: `${node.width}px`,
                    height: `${node.height}px`
                })
            }
        }
    }, 

    const defaultColor = '#666666' // fallback color if data.color is not present
    const nodeColor = data.color || defaultColor

    // Get different shades of the color based on state
     => {
         return nodeColor
         
        
    }

     => {
        return data.outputAnchors ?? []
    }

     => {
        const currentHeight = ref.current?.clientHeight || 0
        .length + 1)
        

        // Update node internals when we get a non-zero position
         {
            up
        }

        return position
    }

     => {
        .length
        // Use exactly 60px as minimum height
        
    }

     => {
         {
             : 
        }
         : l
    }

     => {
         {
            case 'ERROR':
                return theme.palette.error.dark
            case 'INPROGRESS':
                return theme.palette.warning.dark
            case 'STOPPED':
            case 'TERMINATED':
                return theme.palette.error.main
            case 'FINISHED':
                return theme.palette.success.dark
            default:
                return theme.palette.primary.dark
        }
    }

     => {
         => 

         return null
        return <foundIcon.icon size={24} color={'white'} />
    }

    u => {
         {
             => {
                
                up
            }, 10)
        }
    }, 

    const onResizeEnd = useCallback(
        (e, pa => {
             return

            // Set the card dimensions directly from resize params
            setCardDimensions({
                width: `${params.width}px`,
                height: `${params.height}px`
            })
        },
        [ref, setCardDimensions]
    )

    return (
        < => }  => }>
            <NodeToolbar align='start' isVisible={true}>
                <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    {data.color && !data.icon ? (
                        <div
                            style={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.largeAvatar,
                                borderRadius: '15px',
                                backgroundColor: data.color,
                                cursor: 'grab',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: data.color
                            }}
                        >
                            {}
                        </div>
                    ) : (
                        <div
                            style={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.largeAvatar,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                cursor: 'grab'
                            }}
                        >
                            <img
                                style={{ width: '100%', height: '100%', padding: 5, objectFit: 'contain' }}
                                src={`${baseURL}/api/v1/node-icon/${data.name}`}
                                alt={data.name}
                            />
                        </div>
                    )}
                    <Typography
                        sx={{
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            ml: 1
                        }}
                    >
                        {data.label}
                    </Typography>
                </Box>
            </NodeToolbar>
            <StyledNodeToolbar align='end'>
                <ButtonGroup sx={{ gap: 1 }} variant='outlined' aria-label='Basic button group'>
                    <IconButton
                        size={'small'}
                        title='Duplicate'
                         => {
                            
                        }}
                        sx={{
                            color: customization.isDarkMode ? 'white' : 'inherit',
                            '&:hover': {
                                color: theme.palette.primary.main
                            }
                        }}
                    >
                        <IconCopy size={20} />
                    </IconButton>
                    <IconButton
                        size={'small'}
                        title='Delete'
                         => {
                            
                        }}
                        sx={{
                            color: customization.isDarkMode ? 'white' : 'inherit',
                            '&:hover': {
                                color: theme.palette.error.main
                            }
                        }}
                    >
                        <IconTrash size={20} />
                    </IconButton>
                    <IconButton
                        size={'small'}
                        title='Info'
                         => {
                            
                            
                        }}
                        sx={{
                            color: customization.isDarkMode ? 'white' : 'inherit',
                            '&:hover': {
                                color: theme.palette.info.main
                            }
                        }}
                    >
                        <IconInfoCircle size={20} />
                    </IconButton>
                </ButtonGroup>
            </StyledNodeToolbar>
            <N, 250)} onResizeEnd={onResizeEnd} />
            <CardWrapper
                content={false}
                sx={{
                    b,
                    borderWidth: '1px',
                    b} !important` : 'none',
                    m, 250),
                    minWidth: 300,
                    width: cardDimensions.width,
                    height: cardDimensions.height,
                    ba,
                    display: 'flex',
                    '&:hover': {
                        b} !important` : 'none'
                    }
                }}
                border={false}
            >
                {data && data.status && (
                    <Tooltip title={data.status === 'ERROR' ? data.error || 'Error' : ''}>
                        <Avatar
                            variant='rounded'
                            sx={{
                                ...theme.typography.smallAvatar,
                                borderRadius: '50%',
                                background:
                                    data.status === 'STOPPED' || data.status === 'TERMINATED'
                                        ? 'white'
                                        : getStatu,
                                color: 'white',
                                ml: 2,
                                position: 'absolute',
                                top: -10,
                                right: -10
                            }}
                        >
                            {data.status === 'INPROGRESS' ? (
                                <IconLoader className='spin-animation' />
                            ) : data.status === 'ERROR' ? (
                                <IconExclamationMark />
                            ) : data.status === 'TERMINATED' ? (
                                <Can }} />
                            ) : data.status === 'STOPPED' ? (
                                <St }} />
                            ) : (
                                <IconCheck />
                            )}
                        </Avatar>
                    </Tooltip>
                )}

                <Box sx={{ width: '100%' }}>
                    {!data.hideInput && (
                        <Handle
                            type='target'
                            position={Position.Left}
                            id={data.id}
                            style={{
                                width: 5,
                                height: 20,
                                backgroundColor: 'transparent',
                                border: 'none',
                                position: 'absolute',
                                left: -2
                            }}
                        >
                            <div
                                style={{
                                    width: 5,
                                    height: 20,
                                    backgroundColor: nodeColor,
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    t'
                                }}
                            />
                        </Handle>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box
                            sx={{
                                he`,
                                width: `${cardDimensions.width}`,
                                overflow: 'hidden',
                                position: 'relative',
                                borderRadius: '10px'
                            }}
                        >
                            <div
                                ref={reactFlowWrapper}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: theme.palette.background.default
                                }}
                            >
                                <Background color='#aaa' gap={16} />
                            </div>
                        </Box>
                    </div>
                    {getOutputAn.map(( => {
                        return (
                            <Handle
                                type='source'
                                position={Position.Right}
                                key={outputAnchor.id}
                                id={outputAnchor.id}
                                style={{
                                    height: 20,
                                    width: 20,
                                    t,
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    position: 'absolute',
                                    right: -10,
                                    opacity: isHovered ? 1 : 0,
                                    transition: 'opacity 0.2s'
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.background.paper, // or 'white'
                                        pointerEvents: 'none'
                                    }}
                                />
                                <IconCircleChevronRightFilled
                                    size={20}
                                    color={nodeColor}
                                    style={{
                                        pointerEvents: 'none',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />
                            </Handle>
                        )
                    })}
                </Box>
            </CardWrapper>
            <N => }></NodeInfoDialog>
        </div>
    )
}

IterationNode.propTypes = {
    data: PropTypes.object
}

exp
