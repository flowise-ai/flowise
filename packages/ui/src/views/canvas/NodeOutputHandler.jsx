import PropTypes from 'prop-types'
import { Handle, Position, useUpdateNodeInternals } from 'reactflow'
import { useEffect, useRef, useState, useContext } from 'react'

// material-ui
import { useTheme, styled } from '@mui/material/styles'
import { Box, Typography, Tooltip } from '@mui/material'
import { tooltipClasses } from '@mui/material/Tooltip'
import { flowContext } from '@/store/context/ReactFlowContext'
import { isValidConnection } from '@/utils/genericHelper'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'

 => <T({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500
    }
})

// ===========================|| NodeOutputHandler ||=========================== //

 => {
    
    
    
    
    
    
    
    

     => {
         => 
    }

     => {
         => 
    }

     => {
        .length + 1)
        
    }

    u => {
         {
             => {
                
                
                
                up
            }, 0)
        }
    }, 

    u => {
         => {
            up
        }, 0)
    }, 

    u => {
         {
             => {
                up
            }, 0)
        }
    }, 

    return (
        <div ref={ref}>
            {outputAnchor.type !== 'options' && !outputAnchor.options && (
                <>
                    <CustomWidthTooltip placement='right' title={outputAnchor.type}>
                        <Handle
                            type='source'
                            position={Position.Right}
                            key={outputAnchor.id}
                            id={outputAnchor.id}
                             => }
                            style={{
                                height: 10,
                                width: 10,
                                backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                top: position
                            }}
                        />
                    </CustomWidthTooltip>
                    <Box sx={{ p: 2, textAlign: 'end' }}>
                        <Typography>{outputAnchor.label}</Typography>
                    </Box>
                </>
            )}
            {data.name !== 'ifElseFunction' &&
                outputAnchor.type === 'options' &&
                outputAnchor.options &&
                getAn.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {getAn.map(( => {
                            return (
                                <div key={option.id} style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CustomWidthTooltip placement='right' title={option.type}>
                                        <Handle
                                            type='source'
                                            position={Position.Right}
                                            key={index}
                                            id={option?.id}
                                             => }
                                            style={{
                                                height: 10,
                                                width: 10,
                                                backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                                t
                                            }}
                                        />
                                    </CustomWidthTooltip>
                                    <div style={{ flex: 1 }}></div>
                                    <Box sx={{ p: 2, textAlign: 'end' }}>
                                        <Typography>{option.label}</Typography>
                                    </Box>
                                </div>
                            )
                        })}
                    </div>
                )}
            {data.name === 'ifElseFunction' && outputAnchor.type === 'options' && outputAnchor.options && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <CustomWidthTooltip
                            placement='right'
                            title={
                                 => ?.type ??
                                outputAnchor.type
                            }
                        >
                            <Handle
                                type='source'
                                position={Position.Right}
                                key={ => ?.id ?? ''}
                                 => ?.id ?? ''}
                                 => }
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                    top: position - 25
                                }}
                            />
                        </CustomWidthTooltip>
                        <div style={{ flex: 1 }}></div>
                        <Box sx={{ p: 2, textAlign: 'end' }}>
                            <Typography>True</Typography>
                        </Box>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <CustomWidthTooltip
                            placement='right'
                            title={
                                 => ?.type ??
                                outputAnchor.type
                            }
                        >
                            <Handle
                                type='source'
                                position={Position.Right}
                                key={ => ?.id ?? ''}
                                 => ?.id ?? ''}
                                 => }
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                    top: position + 25
                                }}
                            />
                        </CustomWidthTooltip>
                        <div style={{ flex: 1 }}></div>
                        <Box sx={{ p: 2, textAlign: 'end' }}>
                            <Typography>False</Typography>
                        </Box>
                    </div>
                </div>
            )}
            {data.name !== 'ifElseFunction' &&
                outputAnchor.type === 'options' &&
                outputAnchor.options &&
                getAva.length > 0 && (
                    <>
                        <CustomWidthTooltip
                            placement='right'
                            title={
                                 => ?.type ??
                                outputAnchor.type
                            }
                        >
                            <Handle
                                type='source'
                                position={Position.Right}
                                 => ?.id ?? ''}
                                 => }
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                    top: position
                                }}
                            />
                        </CustomWidthTooltip>
                        <Box sx={{ p: 2, textAlign: 'end' }}>
                            <Dropdown
                                disabled={disabled}
                                disableClearable={true}
                                name={outputAnchor.name}
                                }
                                 => {
                                    
                                    data.outputs[outputAnchor.name] = newValue
                                }}
                                value={data.outputs[outputAnchor.name] ?? outputAnchor.default ?? 'choose an option'}
                            />
                        </Box>
                    </>
                )}
        </div>
    )
}

NodeOutputHandler.propTypes = {
    outputAnchor: PropTypes.object,
    data: PropTypes.object,
    disabled: PropTypes.bool
}

export default NodeOutputHandler
