import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import { PermissionMenuItem } from '@/ui-component/button/RBACButtons'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import FileDownloadIcon from '@mui/icons-material/Downloading'
import FileDeleteIcon from '@mui/icons-material/Delete'
import FileCategoryIcon from '@mui/icons-material/Category'
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt'
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined'
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import ExportTemplateOutlinedIcon from '@mui/icons-material/BookmarksOutlined'
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { IconX } from '@tabler/icons-react'

import chatflowsApi from '@/api/chatflows'

import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'
import { uiBaseURL } from '@/store/constant'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'

import SaveChatflowDialog from '@/ui-component/dialog/SaveChatflowDialog'
import TagDialog from '@/ui-component/dialog/TagDialog'
import StarterPromptsDialog from '@/ui-component/dialog/StarterPromptsDialog'

import { generateExportFlowData } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import ChatFeedbackDialog from '../dialog/ChatFeedbackDialog'
import AllowedDomainsDialog from '../dialog/AllowedDomainsDialog'
import SpeechToTextDialog from '../dialog/SpeechToTextDialog'
import ExportAsTemplateDialog from '@/ui-component/dialog/ExportAsTemplateDialog'

 => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        ma,
        minWidth: 180,
        boxShadow:
            ' 0px 0px 0px 0px,  0px 0px 0px 1px,  0px 10px 15px -3px,  0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                ma
            },
            '&:active': {
                ba
            }
        }
    }
}))

exp {
    
    
    

    u
     => )
     => )

    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

    const title = isAgentCanvas ? 'Agents' : 'Chatflow'

     => {
        
    }

     => {
        
    }

     => {
        
        
    }

     => {
        
        setConversationStartersDialogProps({
            title: 'Starter Prompts - ' + chatflow.name,
            chatflow: chatflow
        })
        
    }

     => {
        
        setExportTemplateDialogProps({
            chatflow: chatflow
        })
        
    }

     => {
        
        setChatFeedbackDialogProps({
            title: 'Chat Feedback - ' + chatflow.name,
            chatflow: chatflow
        })
        
    }

     => {
        
        setAllowedDomainsDialogProps({
            title: 'Allowed Domains - ' + chatflow.name,
            chatflow: chatflow
        })
        
    }

     => {
        
        setSpeechToTextDialogProps({
            title: 'Speech To Text - ' + chatflow.name,
            chatflow: chatflow
        })
        
    }

     => {
        const updateBody = {
            name: chatflowName,
            chatflow
        }
        try {
            awa
             {
                awa
            } else {
                awa
            }
        }  {
             
            enqueueSnackbar({
                message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        }
    }

     => {
        
         {
            setCategoryDialogProps({
                
            })
        }
        
    }

     => {
        
        // save categories as string
        
        const updateBody = {
            category: categoryTags,
            chatflow
        }
        try {
            awa
            awa
        }  {
             
            enqueueSnackbar({
                message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        }
    }

     => {
        
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${title} ${chatflow.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                awa
                 {
                    awa
                } else {
                    awa
                }
            }  {
                 
                enqueueSnackbar({
                    message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
                    options: {
                        key: new .getT + Math.,
                        variant: 'error',
                        persist: true,
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
            }
        }
    }

     => {
        
        try {
            l
             {
                w
            } el {
                w
            } else {
                w
            }
        }  {
            
        }
    }

     => {
        
        try {
            
            let , null, 2)
            //let 
            
            

            let exportFileDefaultName = `${chatflow.name} ${title}.json`

            let l
            l
            l
            l
        }  {
            
        }
    }

    return (
        <div>
            <Button
                id='demo-customized-button'
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Options
            </Button>
            <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:update' : 'chatflows:update'}
                    onClick={handleFlowRename}
                    disableRipple
                >
                    <EditIcon />
                    Rename
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:duplicate' : 'chatflows:duplicate'}
                    onClick={handleDuplicate}
                    disableRipple
                >
                    <FileCopyIcon />
                    Duplicate
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:export' : 'chatflows:export'}
                    onClick={handleExport}
                    disableRipple
                >
                    <FileDownloadIcon />
                    Export
                </PermissionMenuItem>
                <PermissionMenuItem permissionId={'templates:flowexport'} onClick={handleExportTemplate} disableRipple>
                    <ExportTemplateOutlinedIcon />
                    Save As Template
                </PermissionMenuItem>
                <Divider sx={{ my: 0.5 }} />
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:config' : 'chatflows:config'}
                    onClick={handleFlowStarterPrompts}
                    disableRipple
                >
                    <PictureInPictureAltIcon />
                    Starter Prompts
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:config' : 'chatflows:config'}
                    onClick={handleFlowChatFeedback}
                    disableRipple
                >
                    <ThumbsUpDownOutlinedIcon />
                    Chat Feedback
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:domains' : 'chatflows:domains'}
                    onClick={handleAllowedDomains}
                    disableRipple
                >
                    <VpnLockOutlinedIcon />
                    Allowed Domains
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:config' : 'chatflows:config'}
                    onClick={handleSpeechToText}
                    disableRipple
                >
                    <MicNoneOutlinedIcon />
                    Speech To Text
                </PermissionMenuItem>
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:update' : 'chatflows:update'}
                    onClick={handleFlowCategory}
                    disableRipple
                >
                    <FileCategoryIcon />
                    Update Category
                </PermissionMenuItem>
                <Divider sx={{ my: 0.5 }} />
                <PermissionMenuItem
                    permissionId={isAgentCanvas ? 'agentflows:delete' : 'chatflows:delete'}
                    onClick={handleDelete}
                    disableRipple
                >
                    <FileDeleteIcon />
                    Delete
                </PermissionMenuItem>
            </StyledMenu>
            <SaveChatflowDialog
                show={flowDialogOpen}
                dialogProps={{
                    title: `Rename ${title}`,
                    confirmButtonName: 'Rename',
                    cancelButtonName: 'Cancel'
                }}
                 => }
                onConfirm={saveFlowRename}
            />
            <TagDialog
                isOpen={categoryDialogOpen}
                dialogProps={categoryDialogProps}
                 => }
                onSubmit={saveFlowCategory}
            />
            <StarterPromptsDialog
                show={conversationStartersDialogOpen}
                dialogProps={conversationStartersDialogProps}
                 => }
            />
            <ChatFeedbackDialog
                show={chatFeedbackDialogOpen}
                dialogProps={chatFeedbackDialogProps}
                 => }
            />
            <AllowedDomainsDialog
                show={allowedDomainsDialogOpen}
                dialogProps={allowedDomainsDialogProps}
                 => }
            />
            <SpeechToTextDialog
                show={speechToTextDialogOpen}
                dialogProps={speechToTextDialogProps}
                 => }
            />
            {exportTemplateDialogOpen && (
                <ExportAsTemplateDialog
                    show={exportTemplateDialogOpen}
                    dialogProps={exportTemplateDialogProps}
                     => }
                />
            )}
        </div>
    )
}

FlowListMenu.propTypes = {
    chatflow: PropTypes.object,
    isAgentCanvas: PropTypes.bool,
    isAgentflowV2: PropTypes.bool,
    setError: PropTypes.func,
    updateFlowsApi: PropTypes.object
}
