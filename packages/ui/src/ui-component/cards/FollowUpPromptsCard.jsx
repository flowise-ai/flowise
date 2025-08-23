import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import { Chip } from '@mui/material'
import './StarterPromptsCard.css'
import { useSelector } from 'react-redux'

 => {
     => 

    return (
        <Box
            className={'button-container'}
            sx={{ width: '100%', maxWidth: isGrid ? 'inherit' : '400px', p: 1.5, display: 'flex', gap: 1, ...sx }}
        >
            {A &&
                f => (
                    <Chip
                        label={fp}
                        className={'button'}
                        key={index}
                         => }
                        sx={{
                            backgroundColor: 'transparent',
                            border: '1px solid',
                            b',
                            color: '#2196f3',
                            t 0ms',
                            '&:hover': {
                                ba' : '',
                                border: '1px solid'
                            }
                        }}
                    />
                ))}
        </Box>
    )
}

FollowUpPromptsCard.propTypes = {
    isGrid: PropTypes.bool,
    followUpPrompts: PropTypes.array,
    sx: PropTypes.object,
    onPromptClick: PropTypes.func
}

export default FollowUpPromptsCard
