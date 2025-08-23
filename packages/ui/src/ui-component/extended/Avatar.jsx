import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import MuiAvatar from '@mui/material/Avatar'

// ==============================|| AVATAR ||============================== //

 => {
    

    const colorSX = color && !outline && { color: theme.palette.background.paper, bgcolor: `${color}.main` }
    const outlineSX = outline && {
        color: color ? `${color}.main` : `primary.main`,
        bgcolor: theme.palette.background.paper,
        border: '2px solid',
        borderColor: color ? `${color}.main` : `primary.main`
    }
    let sizeSX = {}
     {
        case 'badge':
            sizeSX = {
                w,
                he
            }
            break
        case 'xs':
            sizeSX = {
                w,
                he
            }
            break
        case 'sm':
            sizeSX = {
                w,
                he
            }
            break
        case 'lg':
            sizeSX = {
                w,
                he
            }
            break
        case 'xl':
            sizeSX = {
                w,
                he
            }
            break
        case 'md':
            sizeSX = {
                w,
                he
            }
            break
        default:
            sizeSX = {}
    }

    return <MuiAvatar sx={{ ...colorSX, ...outlineSX, ...sizeSX, ...sx }} {...others} />
}

Avatar.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.string,
    sx: PropTypes.object
}

export default Avatar
