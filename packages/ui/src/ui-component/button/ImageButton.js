import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'

exp(({ theme }) => ({
    position: 'relative',
    height: 200,
    borderRadius: '10px',
    ]: {
        width: '100% !important', // Overrides inline-style
        height: 100
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.4
        },
        '& .MuiImageMarked-root': {
            opacity: 1
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor'
        }
    }
}))

exp({
    position: 'absolute',
    borderRadius: '10px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
})

exp(({ theme }) => ({
    position: 'absolute',
    borderRadius: '10px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    t
}))

exp(() => ({
    height: 25,
    width: 25,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    opacity: 0
}))
