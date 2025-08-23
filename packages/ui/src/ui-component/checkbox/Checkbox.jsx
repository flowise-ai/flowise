import { useState } from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from '@mui/material'

exp => {
    

    return (
        <>
            <FormControlLabel
                sx={{ mt: 1, width: '100%' }}
                size='small'
                control={
                    <Checkbox
                        disabled={disabled}
                        checked={myValue}
                         => {
                            
                            
                        }}
                    />
                }
                label={label}
            />
        </>
    )
}

CheckboxInput.propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
