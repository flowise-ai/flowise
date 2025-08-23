import { Box, FormControl, MenuItem, Pagination, Select, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const DEFAULT_ITEMS_PER_PAGE = 12

 => {
    
     => 
    const borderColor = theme.palette.grey[900] + 25

    
    
    

    u => {
        
    }, 

    u => {
        
    }, 

    u => {
        
    }, 

     => {
        
        
    }

     => {
        
        
        
        
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant='body2'>Items per page:</Typography>
                <FormControl
                    variant='outlined'
                    size='small'
                    sx={{
                        minWidth: 80,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: borderColor
                        },
                        '& .MuiSvgIcon-root': {
                            color: customization.isDarkMode ? '#fff' : 'inherit'
                        }
                    }}
                >
                    <Select value={itemsPerPage} onChange={handleLimitChange} displayEmpty>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={48}>48</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {totalItems > 0 && (
                <Typography variant='body2'>
                    Items {activePage * itemsPerPage - itemsPerPage + 1} to{' '}
                    {activePage * itemsPerPage > totalItems ? totalItems : activePage * itemsPerPage} of {totalItems}
                </Typography>
            )}
            <Pag} onChange={handlePageChange} page={activePage} color='primary' />
        </Box>
    )
}

TablePagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number
}

export default TablePagination
