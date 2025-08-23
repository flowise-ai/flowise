import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

// MUI
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { Tabs } from '@mui/base/Tabs'

// Project Import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { TabPanel } from '@/ui-component/tabs/TabPanel'
import { TabsList } from '@/ui-component/tabs/TabsList'
import { Tab } from '@/ui-component/tabs/Tab'
import NodeInputHandler from '@/views/canvas/NodeInputHandler'

// Store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    

    

    
    
    

    u => {
         {
            
        }

         

         => {
            
            
        }
    }, 

    u => {
         
        el
         => 
    }, 

    const component = show ? (
        <Dialog open={show} fullWidth maxWidth='md' aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogContent>
                <>
                    { && (
                        <>
                            <Tab => } aria-label='tabs' variant='fullWidth'>
                                <TabsList>
                                    { => (
                                        <Tab key={index}>{inputChildParam.label}</Tab>
                                    ))}
                                </TabsList>
                            </Tabs>
                            {inputParam.tabs
                                .f => 
                                .map(( => (
                                    <TabPanel key={index} value={tabValue} index={index}>
                                        <NodeInputHandler
                                            disabled={inputChildParam.disabled}
                                            inputParam={inputChildParam}
                                            data={data}
                                            isAdditionalParams={true}
                                            disablePadding={true}
                                        />
                                    </TabPanel>
                                ))}
                        </>
                    )}
                </>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{dialogProps.cancelButtonName}</Button>
                <Style => }>
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
        </Dialog>
    ) : null

    
}

ConditionDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default ConditionDialog
