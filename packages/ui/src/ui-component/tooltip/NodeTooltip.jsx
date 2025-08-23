import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

 => <T(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.nodeToolTip.background,
        color: theme.palette.nodeToolTip.color,
        boxShadow: theme.shadows[1]
    }
}))

export default NodeTooltip
