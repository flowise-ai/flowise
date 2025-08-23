import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { JsonEditorInput } from '@/ui-component/json/JsonEditor'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    
     => 
    

    u => {
         
        el
         => 
    }, 

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='sm'
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.inputParam.label ?? 'Format Prompt Values'}
            </DialogTitle>
            <DialogContent>
                <PerfectScrollbar
                    style={{
                        height: '100%',
                        maxHe',
                        overflowX: 'hidden'
                    }}
                >
                    <JsonEditorInput
                         => }
                        value={dialogProps.value}
                        isDarkMode={customization.isDarkMode}
                        inputParam={dialogProps.inputParam}
                        nodes={dialogProps.nodes}
                        edges={dialogProps.edges}
                        nodeId={dialogProps.nodeId}
                        isSequentialAgent={dialogProps.data.category === 'Sequential Agents'}
                    />
                </PerfectScrollbar>
            </DialogContent>
        </Dialog>
    ) : null

    
}

FormatPromptValuesDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onChange: PropTypes.func,
    onCancel: PropTypes.func
}

export default FormatPromptValuesDialog
