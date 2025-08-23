import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent } from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar'
import NodeInputHandler from '@/views/canvas/NodeInputHandler'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    
    

    
    

    u => {
         
         

         => {
            
            
        }
    }, 

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
            <DialogContent>
                <PerfectScrollbar
                    style={{
                        height: '100%',
                        maxHe',
                        overflowX: 'hidden'
                    }}
                >
                    {inputParams
                        .f => 
                        .map(( => (
                            <NodeInputHandler
                                disabled={dialogProps.disabled}
                                key={index}
                                inputParam={inputParam}
                                data={data}
                                isAdditionalParams={true}
                            />
                        ))}
                </PerfectScrollbar>
            </DialogContent>
        </Dialog>
    ) : null

    
}

AdditionalParamsDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default AdditionalParamsDialog
