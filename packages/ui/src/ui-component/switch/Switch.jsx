import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, Switch, Typography } from '@mui/material'

exp => {
    

    u => {
        
    }, 

    return (
        <>
            <FormControl
                sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                size='small'
            >
                {label && <Typography>{label}</Typography>}
                <Switch
                    disabled={disabled}
                    checked={myValue}
                     => {
                        
                        
                    }}
                />
            </FormControl>
        </>
    )
}

SwitchInput.propTypes = {
    label: PropTypes.string,
    value: P,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
