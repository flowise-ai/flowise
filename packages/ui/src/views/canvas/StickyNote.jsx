import PropTypes from 'prop-types'
import { useContext, useState, memo } from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { useTheme, darken, lighten } from '@mui/material/styles'

// project imports
import NodeCardWrapper from '@/ui-component/cards/NodeCardWrapper'
import NodeTooltip from '@/ui-component/tooltip/NodeTooltip'
import { IconButton, Box } from '@mui/material'
import { IconCopy, IconTrash } from '@tabler/icons-react'
import { Input } from '@/ui-component/input/Input'

// const
import { flowContext } from '@/store/context/ReactFlowContext'

 => {
    
     => 
     => 
    
    const [inputParam] = data.inputParams

    

     => {
        
    }

     => {
        
    }

    const defaultColor = '#FFE770' // fallback color if data.color is not present
    const nodeColor = data.color || defaultColor

     => {
         return theme.palette.primary.main
        el return theme.palette.grey[700]
        else return theme.palette.grey[900] + 50
    }

     => {
         {
             : 
        } else {
             : l
        }
    }

    return (
        <>
            <NodeCardWrapper
                content={false}
                sx={{
                    padding: 0,
                    b,
                    ba
                }}
                border={false}
            >
                <NodeTooltip
                    open={!canvas.canvasDialogShow && open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    disableFocusListener={true}
                    title={
                        <div
                            style={{
                                background: 'transparent',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <IconButton
                                title='Duplicate'
                                 => {
                                    
                                }}
                                sx={{
                                    height: '35px',
                                    width: '35px',
                                    color: customization?.isDarkMode ? 'white' : 'inherit',
                                    '&:hover': { color: theme?.palette.primary.main }
                                }}
                            >
                                <IconCopy />
                            </IconButton>
                            <IconButton
                                title='Delete'
                                 => {
                                    
                                }}
                                sx={{
                                    height: '35px',
                                    width: '35px',
                                    color: customization?.isDarkMode ? 'white' : 'inherit',
                                    '&:hover': { color: theme?.palette.error.main }
                                }}
                            >
                                <IconTrash />
                            </IconButton>
                        </div>
                    }
                    placement='right-start'
                >
                    <Box>
                        <Input
                            key={data.id}
                            inputParam={inputParam}
                             => (}
                            value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                            n : []}
                            e : []}
                            nodeId={data.id}
                        />
                    </Box>
                </NodeTooltip>
            </NodeCardWrapper>
        </>
    )
}

StickyNote.propTypes = {
    data: PropTypes.object
}

exp
