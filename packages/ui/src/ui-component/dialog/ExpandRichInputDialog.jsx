import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

// MUI
import { Button, Dialog, DialogActions, DialogContent, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

// Project Import
import { StyledButton } from '@/ui-component/button/StyledButton'

// TipTap
import { useEditor, EditorContent } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import { mergeAttributes } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Mention from '@tiptap/extension-mention'
import { suggestionOptions } from '@/ui-component/input/suggestionOption'
import { getAvailableNodesForVariable } from '@/utils/genericHelper'

// Store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

// Add styled component for editor wrapper
(({ theme,  => ({
    '& .ProseMirror': {
        padding: '0px 14px',
        height: rows ? `${rows * 1.4375}rem` : '2.4rem',
        overflowY: rows ? 'auto' : 'hidden',
        overflowX: rows ? 'auto' : 'hidden',
        lineHeight: rows ? '1.4375em' : '0.875em',
        fontWeight: 500,
        color: theme.palette.grey[900],
        border: `1px solid ${theme.palette.textBackground.border}`,
        borderRadius: '10px',
        backgroundColor: theme.palette.textBackground.main,
        boxSizing: 'border-box',
        whiteSpace: rows ? 'pre-wrap' : 'nowrap',
        '&:hover': {
            borderColor: theme.palette.text.primary,
            cursor: 'text'
        },
        '&:focus': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 0px ${theme.palette.primary.main}`,
            outline: 'none'
        },
        '&[disabled]': {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.action.disabled
        },
        // Placeholder for first paragraph when editor is empty
        '& p.is-editor-empty:first-of-type::before': {
            ',
            float: 'left',
            color: theme.palette.text.primary,
            opacity: 0.4,
            pointerEvents: 'none',
            height: 0
        }
    }
}))

// define your extension array
 => [
    StarterKit,
    Mention.configure({
        HTMLAttributes: {
            class: 'variable'
        },
         {
            return [
                'span',
                me,
                `${options.suggestion.char} ${node.attrs.label ?? node.attrs.id} }}`
            ]
        },
        suggestion: suggestionOptions(
            availableNodesForVariable,
            availableState,
            acceptNodeOutputAsVariable,
            nodes,
            nodeData,
            isNodeInsideInteration
        ),
        deleteTriggerWithBackspace: true
    })
]

 => {
    

    

    
    
    
    
    
    

    u => {
         {
            
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
         {
            const nodesForVariable = inputParam?.acceptVariable
                ? getAva
                : []
            

             => n
            const state = startAgentflowNode?.data?.inputs?.startState
            

             => n
            

             => n?.extent === 'pa
        }
    }, 

    const editor = useEditor(
        {
            extensions: [
                ...extensions(
                    availableNodesForVariable,
                    availableState,
                    inputParam?.acceptNodeOutputAsVariable,
                    dialogProps.nodes,
                    nodeData,
                    isNodeInsideInteration
                ),
                Pla
            ],
            content: inputValue,
             => {
                )
            },
            editable: !dialogProps.disabled
        },
        [availableNodesForVariable]
    )

    // Focus the editor when dialog opens
    u => {
         {
             => {
                e
            }, 100)
        }
    }, 

    const component = show ? (
        <Dialog open={show} fullWidth maxWidth='md' aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogContent>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {inputParam && (
                        <div style={{ flex: 70, width: '100%' }}>
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
                                    borderRadius: '12px',
                                    height: '100%',
                                    maxHe',
                                    overflowX: 'hidden'
                                }}
                            >
                                <Box sx={{ mt: 1, border: '' }}>
                                    <StyledEditorContent editor={editor} rows={15} />
                                </Box>
                            </PerfectScrollbar>
                        </div>
                    )}
                </div>
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

ExpandRichInputDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onInputHintDialogClicked: PropTypes.func
}

export default ExpandRichInputDialog
