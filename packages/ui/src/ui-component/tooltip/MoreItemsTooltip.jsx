import { Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

(() => ({
    paddingLeft: 20,
    margin: 0
}))

(() => ({
    paddingBottom: 4
}))

 => {
     return children

    return (
        <Tooltip
            title={
                <StyledOl>
                    { => (
                        <StyledLi key={img.imageSrc || img.label}>
                            <Typography>{img.label}</Typography>
                        </StyledLi>
                    ))}
                </StyledOl>
            }
            placement='top'
        >
            {children}
        </Tooltip>
    )
}

export default MoreItemsTooltip

MoreItemsTooltip.propTypes = {
    images: PropTypes.array,
    children: PropTypes.node
}
