import * as React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { StyledToggleButton } from '../button/StyledButton'

exp {
    

     => {
        
    }

    return (
        <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
            <StyledToggleButton variant='contained' value='list' aria-label='list'>
                <ViewListIcon />
            </StyledToggleButton>
            <StyledToggleButton variant='contained' value='module' aria-label='module'>
                <ViewModuleIcon />
            </StyledToggleButton>
        </ToggleButtonGroup>
    )
}
