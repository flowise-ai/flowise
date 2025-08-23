import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

// MUI
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'

// Project Import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { CodeEditor } from '@/ui-component/editor/CodeEditor'

// Store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

// API
import nodesApi from '@/api/nodes'
import useApi from '@/hooks/useApi'

import './ExpandTextDialog.css'

 => {
    

    
    
     => 

    
    
    
    
    

    

    u => {
         {
            
        }
         {
            
             {
                
            }
        }
         {
            
        }

         => {
            
            
            
            
            
        }
    }, 

    u => {
         
        el
         => 
    }, 

    u => {
        
    }, 

    u => {
         {
             {
                )
            } else {
                
            }
        }
    }, 

    u => {
         {
             {
                
            } el {
                
            }
        }
    }, 

    const component = show ? (
        <Dialog open={show} fullWidth maxWidth='md' aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogContent>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    { && (
                        <div style={{ flex: 70 }}>
                            <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row' }}>
                                <Typography variant='h4'>{inputParam.label}</Typography>
                                <div style={{ flex: 1 }} />
                                {inputParam.hint && (
                                    <Button
                                        sx={{ p: 0, px: 2 }}
                                        color='secondary'
                                        variant='text'
                                         => {
                                            
                                        }}
                                    >
                                        {inputParam.hint.label}
                                    </Button>
                                )}
                            </div>
                            <PerfectScrollbar
                                style={{
                                    border: '1px solid',
                                    borderColor: theme.palette.grey['500'],
                                    borderRadius: '12px',
                                    height: '100%',
                                    maxHe' : '',
                                    overflowX: 'hidden',
                                    backgroundColor: 'white'
                                }}
                            >
                                <CodeEditor
                                    disabled={dialogProps.disabled}
                                    value={inputValue}
                                    he' : ''}
                                    theme={customization.isDarkMode ? 'dark' : 'light'}
                                    lang={languageType}
                                    placeholder={inputParam.placeholder}
                                    basicSetup={
                                        languageType !== 'js'
                                            ? {
                                                  lineNumbers: false,
                                                  foldGutter: false,
                                                  autocompletion: false,
                                                  highlightActiveLine: false
                                              }
                                            : {}
                                    }
                                     => }
                                />
                            </PerfectScrollbar>
                        </div>
                    )}
                </div>
                {languageType === 'js' && !inputParam.hideCodeExecute && (
                    <LoadingButton
                        sx={{
                            mt: 2,
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                ba 0 0)`
                            },
                            '&:disabled': {
                                backgroundColor: theme.palette.secondary.main,
                                ba 0 0)`
                            }
                        }}
                        loading={loading}
                        variant='contained'
                        fullWidth
                        color='secondary'
                         => {
                            
                            exe
                        }}
                    >
                        Execute
                    </LoadingButton>
                )}
                {codeExecutedResult && (
                    <div style={{ marginTop: '15px' }}>
                        <CodeEditor
                            disabled={true}
                            value={
                                type : codeExecutedResult
                            }
                            height='max-content'
                            theme={customization.isDarkMode ? 'dark' : 'light'}
                            lang={'js'}
                            basicSetup={{ lineNumbers: false, foldGutter: false, autocompletion: false, highlightActiveLine: false }}
                        />
                    </div>
                )}
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

ExpandTextDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onInputHintDialogClicked: PropTypes.func
}

export default ExpandTextDialog
