import { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'
import PropTypes from 'prop-types'
import { DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'

 => {
    
    

     => {
        
    }

     => {
        ) {
            event.p
            ) {
                
                
            }
        }
    }

     => {
         => )
    }

     => {
        event.p
        let newCategories = [...categoryValues]
         && ) {
            newCategories = [...newCategories, inputValue]
            
        }
        
    }

    u => {
         

         => {
            
            
        }
    }, 

    return (
        <Dialog
            fullWidth
            maxWidth='xs'
            open={isOpen}
            onClose={onClose}
            aria-labelledby='category-dialog-title'
            aria-describedby='category-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                Set Chatflow Category Tags
            </DialogTitle>
            <DialogContent>
                <Box>
                    <form onSubmit={handleSubmit}>
                        {categoryValues.length > 0 && (
                            <div style={{ marginBottom: 10 }}>
                                { => (
                                    <Chip
                                        key={index}
                                        label={category}
                                         => han}
                                        style={{ marginRight: 5, marginBottom: 5 }}
                                    />
                                ))}
                            </div>
                        )}
                        <TextField
                            sx={{ mt: 2 }}
                            fullWidth
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyDown}
                            label='Add a tag'
                            variant='outlined'
                        />
                        <Typography variant='body2' sx={{ fontStyle: 'italic', mt: 1 }} color='text.secondary'>
                            Enter a tag and press enter to add it to the list. You can add as many tags as you want.
                        </Typography>
                    </form>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant='contained' onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

TagDialog.propTypes = {
    isOpen: PropTypes.bool,
    dialogProps: PropTypes.object,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
}

export default TagDialog
