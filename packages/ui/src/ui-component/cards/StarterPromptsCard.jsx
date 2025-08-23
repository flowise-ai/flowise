import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import { Chip } from '@mui/material'
import './StarterPromptsCard.css'

 => {
    return (
        <Box
            className={'button-container'}
            sx={{ width: '100%', maxWidth: isGrid ? 'inherit' : '400px', p: 1.5, display: 'flex', gap: 1, ...sx }}
        >
            { => (
                <Ch => } />
            ))}
        </Box>
    )
}

StarterPromptsCard.propTypes = {
    isGrid: PropTypes.bool,
    starterPrompts: PropTypes.array,
    sx: PropTypes.object,
    onPromptClick: PropTypes.func
}

export default StarterPromptsCard
