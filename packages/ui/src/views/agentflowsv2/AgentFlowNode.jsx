import PropTypes from 'prop-types'
import { useContext, memo, useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Handle, Position, useUpdateNodeInternals, NodeToolbar } from 'reactflow'

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
    IconLoader,
    IconAlertCircleFilled,
    IconCode,
    IconWorldWww,
    IconPhoto
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

// ===========================|| CANVAS NODE ||=========================== //

 => {
    
     => 
     => 
    
    
    // eslint-disable-next-line
    
    
    
    
    
    

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

     => {
         {
            case 'web_search_preview':
                return <IconWorldWww size={14} color={'white'} />
            case 'code_interpreter':
                return <IconCode size={14} color={'white'} />
            case 'image_generation':
                return <IconPhoto size={14} color={'white'} />
            default:
                return null
        }
    }

    u => {
         {
             => {
                
                up
            }, 10)
        }
    }, 

    u => {
         =>
            `Node version ${oldVersion} outdated\nUpdate to latest version ${newVersion}`
         => `Node outdated\nUpdate to latest version ${newVersion}`

         => n
         {
             {
                )
            } el {
                )
            } el {
                setWarningMessage(
                    componentNode?.deprecateMessage ??
                        'This node will be deprecated in the next release. Change to a new node tagged with NEW'
                )
            } else {
                
            }
        }
    }, 

    return (
        < => }  => }>
            <StyledNodeToolbar>
                <ButtonGroup sx={{ gap: 1 }} variant='outlined' aria-label='Basic button group'>
                    {data.name !== 'startAgentflow' && (
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
                    )}
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
            <CardWrapper
                content={false}
                sx={{
                    b,
                    borderWidth: '1px',
                    b} !important` : 'none',
                    m,
                    height: 'auto',
                    ba,
                    display: 'flex',
                    alignItems: 'center',
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

                {warningMessage && (
                    <Tooltip placement='right-start' title={<span style={{ whiteSpace: 'pre-line' }}>{warningMessage}</span>}>
                        <Avatar
                            variant='rounded'
                            sx={{
                                ...theme.typography.smallAvatar,
                                borderRadius: '50%',
                                background: 'white',
                                position: 'absolute',
                                top: -10,
                                left: -10
                            }}
                        >
                            <IconAlertCircleFilled color='orange' />
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
                        <Box item style={{ width: 50 }}>
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
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '0.85rem',
                                    fontWeight: 500
                                }}
                            >
                                {data.label}
                            </Typography>

                            {(() => {
                                // Array of model configs to check and render
                                const modelConfigs = [
                                    { model: data.inputs?.llmModel, config: data.inputs?.llmModelConfig },
                                    { model: data.inputs?.agentModel, config: data.inputs?.agentModelConfig },
                                    { model: data.inputs?.conditionAgentModel, config: data.inputs?.conditionAgentModelConfig }
                                ]

                                // Filter out undefined models and render each valid one
                                return modelConfigs
                                    .f => 
                                    .map(( => (
                                        <Box key={`model-${index}`} sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                            <Box
                                                sx={{
                                                    backgroundColor: customization.isDarkMode
                                                        ? ''
                                                        : '',
                                                    borderRadius: '16px',
                                                    width: 'max-content',
                                                    height: 24,
                                                    pl: 1,
                                                    pr: 1,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <img
                                                    style={{ width: 20, height: 20, objectFit: 'contain' }}
                                                    src={`${baseURL}/api/v1/node-icon/${item.model}`}
                                                    alt={item.model}
                                                />
                                                <Typography sx={{ fontSize: '0.7rem', ml: 0.5 }}>
                                                    {item.config.modelName || item.config.model}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))
                            })()}

                            {(() => {
                                // Array of tool configurations to check and render
                                const toolConfigs = [
                                    { tools: data.inputs?.llmTools, toolProperty: 'llmSelectedTool' },
                                    { tools: data.inputs?.agentTools, toolProperty: 'agentSelectedTool' },
                                    {
                                        tools:
                                            data.inputs?.selectedTool ?? data.inputs?.toolAgentflowSelectedTool
                                                ? [{ selectedTool: data.inputs?.selectedTool ?? data.inputs?.toolAgentflowSelectedTool }]
                                                : [],
                                        toolProperty: ['selectedTool', 'toolAgentflowSelectedTool']
                                    },
                                    { tools: data.inputs?.agentKnowledgeVSEmbeddings, toolProperty: ['vectorStore', 'embeddingModel'] },
                                    {
                                        tools: data.inputs?.agentToolsBuiltInOpenAI
                                            ? (typeof data.inputs.agentToolsBuiltInOpenAI === 'string'
                                                  ? JSON.pa
                                                  : data.inputs.agentToolsBuiltInOpenAI
                                              ).map((t => ({ bu)
                                            : [],
                                        toolProperty: 'builtInTool',
                                        isBuiltInOpenAI: true
                                    }
                                ]

                                // Filter out undefined tools and render each valid collection
                                return toolConfigs
                                    .f => 
                                    .map(( => (
                                        <Box key={`tools-${configIndex}`} sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                            { => {
                                                ) {
                                                    return config.toolProperty
                                                        .f => t
                                                        .map((p => {
                                                            const toolName = tool[prop]
                                                            return (
                                                                <Box
                                                                    key={`tool-${configIndex}-${toolIndex}-${propIndex}`}
                                                                    component='img'
                                                                    src={`${baseURL}/api/v1/node-icon/${toolName}`}
                                                                    alt={toolName}
                                                                    sx={{
                                                                        width: 20,
                                                                        height: 20,
                                                                        borderRadius: '50%',
                                                                        ba',
                                                                        padding: 0.3
                                                                    }}
                                                                />
                                                            )
                                                        })
                                                } else {
                                                    const toolName = tool[config.toolProperty]
                                                     return []

                                                    // Handle built-in OpenAI tools with icons
                                                     {
                                                        
                                                         return []

                                                        return [
                                                            <Box
                                                                key={`tool-${configIndex}-${toolIndex}`}
                                                                sx={{
                                                                    width: 20,
                                                                    height: 20,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: customization.isDarkMode
                                                                        ? 
                                                                        : ,
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    padding: 0.2
                                                                }}
                                                            >
                                                                {icon}
                                                            </Box>
                                                        ]
                                                    }

                                                    return [
                                                        <Box
                                                            key={`tool-${configIndex}-${toolIndex}`}
                                                            component='img'
                                                            src={`${baseURL}/api/v1/node-icon/${toolName}`}
                                                            alt={toolName}
                                                            sx={{
                                                                width: 20,
                                                                height: 20,
                                                                borderRadius: '50%',
                                                                ba',
                                                                padding: 0.3
                                                            }}
                                                        />
                                                    ]
                                                }
                                            })}
                                        </Box>
                                    ))
                            })()}
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

AgentFlowNode.propTypes = {
    data: PropTypes.object
}

exp
