import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { StyledButton } from '@/ui-component/button/StyledButton'
import { CodeEditor } from '@/ui-component/editor/CodeEditor'

 => {
    
    
    

     => {
        try {
            
            ) th
             => ({
                id: index + 1,
                property: item.property || '',
                type: item.type || 'string',
                description: item.description || '',
                required: item.required || false
            }))
            
            
        }  {
            
        }
    }

    const exampleJSON = `[
    {
        "property": "name",
        "type": "string",
        "description": "User's name",
        "required": true
    },
    {
        "property": "age",
        "type": "number",
        "description": "User's age",
        "required": false
    }
]`

    const component = show ? (
        <Dialog fullWidth maxWidth='md' open={show} onClose={onCancel} aria-labelledby='paste-json-dialog-title'>
            <DialogTitle sx={{ fontSize: '1rem' }} id='paste-json-dialog-title'>
                Paste JSON Schema
            </DialogTitle>
            <DialogContent>
                <Box sx={{ mt: 2 }}>
                    <Butt => } sx={{ mb: 2 }}>
                        See Example
                    </Button>
                    <CodeEditor
                        value={jsonInput}
                        theme={customization.isDarkMode ? 'dark' : 'light'}
                        lang='json'
                         => {
                            
                            
                        }}
                    />
                    {error && <Box sx={{ color: 'error.main', mt: 1, fontSize: '0.875rem' }}>{error}</Box>}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <StyledButton variant='contained' onClick={handleConfirm}>
                    Confirm
                </StyledButton>
            </DialogActions>
        </Dialog>
    ) : null

    
}

PasteJSONDialog.propTypes = {
    show: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    customization: PropTypes.object
}

export default PasteJSONDialog
