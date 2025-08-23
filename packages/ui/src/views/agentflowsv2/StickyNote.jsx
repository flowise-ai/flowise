import PropTypes from 'prop-types'
import { useRef, useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { NodeToolbar } from 'reactflow'

// material-ui
import { styled, useTheme, alpha, darken, lighten } from '@mui/material/styles'

// project imports
import { ButtonGroup, IconButton, Box } from '@mui/material'
import { IconCopy, IconTrash } from '@tabler/icons-react'
import { Input } from '@/ui-component/input/Input'
import MainCard from '@/ui-component/cards/MainCard'

// const
import { flowContext } from '@/store/context/ReactFlowContext'

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

 => {
    
     => 
    

    
    const [inputParam] = data.inputParams
    

    const defaultColor = '#666666' // fallback color if data.color is not present
    const nodeColor = data.color || defaultColor

    // Get different shades of the color based on state
     => {
         return nodeColor
         
        
    }

     => {
         {
             : 
        }
         : l
    }

    return (
        < => }  => }>
            <StyledNodeToolbar>
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
                </ButtonGroup>
            </StyledNodeToolbar>
            <CardWrapper
                content={false}
                sx={{
                    b,
                    borderWidth: '1px',
                    b} !important` : 'none',
                    minHeight: 60,
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
                <Box>
                    <Input
                        key={data.id}
                        placeholder={inputParam.placeholder}
                        inputParam={inputParam}
                         => (}
                        value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                        n : []}
                        e : []}
                        nodeId={data.id}
                    />
                </Box>
            </CardWrapper>
        </div>
    )
}

StickyNote.propTypes = {
    data: PropTypes.object
}

export default StickyNote
