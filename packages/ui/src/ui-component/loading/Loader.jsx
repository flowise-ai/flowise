// material-ui
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

// styles
({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
})

// ==============================|| LOADER ||============================== //
 => (
    <LoaderWrapper>
        <LinearProgress color='primary' />
    </LoaderWrapper>
)

export default Loader
