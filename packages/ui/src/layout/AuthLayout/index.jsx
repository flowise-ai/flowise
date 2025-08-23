import { Outlet } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'

// ==============================|| MINIMAL LAYOUT ||============================== //

 => {
    

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ]: {
                    alignItems: 'start',
                    overflowY: 'auto',
                    py: '64px'
                }
            }}
        >
            <Outlet />
        </Box>
    )
}

export default AuthLayout
