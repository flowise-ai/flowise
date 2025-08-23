import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'
import { cloneDeep } from 'lodash'

// material-ui
import {
    Button,
    Tooltip,
    ListItemButton,
    Box,
    Stack,
    Dialog,
    DialogContent,
    DialogTitle,
    ListItem,
    ListItemText,
    Chip,
    Card,
    CardMedia,
    CardContent,
    FormControlLabel,
    Checkbox,
    DialogActions,
    Pagination,
    Typography,
    Menu,
    MenuItem,
    IconButton
} from '@mui/material'
import { useTheme, styled, alpha } from '@mui/material/styles'
import DatePicker from 'react-datepicker'

import robotPNG from '@/assets/images/robot.png'
import userPNG from '@/assets/images/account.png'
import msgEmptySVG from '@/assets/images/message_empty.svg'
import multiagent_supervisorPNG from '@/assets/images/multiagent_supervisor.png'
import multiagent_workerPNG from '@/assets/images/multiagent_worker.png'
import { IconTool, IconDeviceSdCard, IconFileExport, IconEraser, IconX, IconDownload, IconPaperclip, IconBulb } from '@tabler/icons-react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

// Project import
import { MemoizedReactMarkdown } from '@/ui-component/markdown/MemoizedReactMarkdown'
import { SafeHTML } from '@/ui-component/safe/SafeHTML'
import SourceDocDialog from '@/ui-component/dialog/SourceDocDialog'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'
import { StyledButton } from '@/ui-component/button/StyledButton'
import StatsCard from '@/ui-component/cards/StatsCard'
import Feedback from '@/ui-component/extended/Feedback'

// store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

// API
import chatmessageApi from '@/api/chatmessage'
import feedbackApi from '@/api/feedback'
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// Utils
import { getOS, isValidURL, removeDuplicateURL } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import { baseURL } from '@/store/constant'

import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

import '@/views/chatmessage/ChatMessage.css'
import 'react-datepicker/dist/react-datepicker.css'

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

 {
    return (
        <ListItemButton style={{ borderRadius: 15, border: '1px solid #e0e0e0' }} onClick={onClick} ref={ref}>
            {value}
        </ListItemButton>
    )
})

DatePickerCustomInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}

const messageImageStyle = {
    width: '128px',
    height: '128px',
    objectFit: 'cover'
}

 => {
    
    

     => {
        
    }

    const component = show ? (
        <Dialog
            fullWidth
            maxWidth='xs'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent>
                <span style={{ marginTop: '20px', marginBottom: '20px' }}>{dialogProps.description}</span>
                {dialogProps.isChatflow && (
                    <FormControlLabel
                         => } />}
                        label='Remove messages from 3rd party Memory Node'
                    />
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{dialogProps.cancelButtonName}</Button>
                <StyledButton variant='contained' onClick={onSubmit}>
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
        </Dialog>
    ) : null

    
}

ConfirmDeleteMessageDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

 => {
    
    
    
     => 
    

    u
     => )
     => )

    
    
    
    
    
    
    
    
    
    
    
    
    ..getM - 1)))
    )
    
    
    

    
    
    
    
    let storagePath = ''

    /* Table Pagination */
    
    
    
     => {
        
        
    }

     => {
        getChatmessageApi.request(dialogProps.chatflow.id, {
            chatType: chatTypes.length ? chatTypes : undefined,
            feedbackType: feedbackTypes.length ? feedbackTypes : undefined,
            startDate: startDate,
            endDate: endDate,
            order: 'DESC',
            page: page,
            limit: limit
        })
        getStatsApi.request(dialogProps.chatflow.id, {
            chatType: chatTypes.length ? chatTypes : undefined,
            feedbackType: feedbackTypes.length ? feedbackTypes : undefined,
            startDate: startDate,
            endDate: endDate
        })
        
    }

     => {
        
        up
        
        
    }

     => {
        
        up
        
        
    }

     => {
        // Parse the JSON string from MultiDropdown back to an array
        let parsedChatTypes = []
         && ) {
            pa
        } el) {
            parsedChatTypes = chatTypes
        }
        
        
    }

     => {
        // Parse the JSON string from MultiDropdown back to an array
        let parsedFeedbackTypes = []
         && fee) {
            pa
        } el) {
            parsedFeedbackTypes = feedbackTypes
        }
        
        
    }

     => {
        setHardDeleteDialogProps({
            title: 'Delete Messages',
            description: 'Are you sure you want to delete messages? This action cannot be undone.',
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel',
            isChatflow: dialogProps.isChatflow
        })
        
    }

     => {
        
        const chatflowid = dialogProps.chatflow.id
        try {
            const obj = { chatflowid, isClearFromViewMessageDialog: true }

            let _chatTypeFilter = chatTypeFilter
             && ) {
                _
            }
             {
                obj.chatType = _chatTypeFilter[0]
            }

            let _feedbackTypeFilter = feedbackTypeFilter
             && fee) {
                _fee
            }
             {
                obj.feedbackType = _feedbackTypeFilter[0]
            }

             obj.startDate = startDate
             obj.endDate = endDate
             obj.hardDelete = true

            awa
            enqueueSnackbar({
                message: 'Succesfully deleted messages',
                options: {
                    key: new .getT + Math.,
                    variant: 'success',
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
            
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
            return 'UI'
        } el {
            return 'Evaluation'
        }
        return 'API/Embed'
    }

     => {
         {
            storagePath = getStoragePathFromServer.data.storagePath
        }
        const obj = {}
        let fileSeparator = '/'
        ) {
            fileSeparator = '\\'
        }
        f {
            const chatmsg = allChatlogs[i]
            
            let filePaths = []
            ) {
                 => {
                     {
                        filePaths.push(
                            `${storagePath}${fileSeparator}${chatmsg.chatflowid}${fileSeparator}${chatmsg.chatId}${fileSeparator}${file.name}`
                        )
                    }
                })
            }
            const msg = {
                content: chatmsg.content,
                role: chatmsg.role === 'apiMessage' ? 'bot' : 'user',
                time: chatmsg.createdDate
            }
             msg.filePaths = filePaths
             msg.sourceDocuments = chatmsg.sourceDocuments
             msg.usedTools = chatmsg.usedTools
             msg.fileAnnotations = chatmsg.fileAnnotations
             msg.feedback = chatmsg.feedback?.content
             msg.agentReasoning = chatmsg.agentReasoning
             {
                msg.artifacts = chatmsg.artifacts
                m => {
                     {
                        artifact.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatmsg.chatflowid}&chatId=${
                            chatmsg.chatId
                        }&f}`
                    }
                })
            }
            ) {
                obj[chatPK] = {
                    id: chatmsg.chatId,
                    ,
                    sessionId: chatmsg.sessionId ?? null,
                    memoryType: chatmsg.memoryType ?? null,
                    email: chatmsg.leadEmail ?? null,
                    messages: [msg]
                }
            } el) {
                obj[chatPK].messages = [...obj[chatPK].messages, msg]
            }
        }

        const exportMessages = []
        f {
            exportMessages.push({
                ...obj[key]
            })
        }

        f {
            exp
        }

        
        //
        
        

        const exportFileDefaultName = `${dialogProps.chatflow.id}-Message.json`

        let l
        l
        l
        l
    }

     => {
        const description =
            chatmsg.sessionId && chatmsg.memoryType
                ? `Are you sure you want to clear session id: ${chatmsg.sessionId} from ${chatmsg.memoryType}?`
                : `Are you sure you want to clear messages?`
        const confirmPayload = {
            title: `Clear Session`,
            description,
            confirmButtonName: 'Clear',
            cancelButtonName: 'Cancel'
        }
        

        const chatflowid = dialogProps.chatflow.id
         {
            try {
                const obj = { chatflowid, isClearFromViewMessageDialog: true }
                 obj.chatId = chatmsg.chatId
                 obj.chatType = chatmsg.chatType
                 obj.memoryType = chatmsg.memoryType
                 obj.sessionId = chatmsg.sessionId

                awa
                const description =
                    chatmsg.sessionId && chatmsg.memoryType
                        ? `Succesfully cleared session id: ${chatmsg.sessionId} from ${chatmsg.memoryType}`
                        : `Succesfully cleared messages`
                enqueueSnackbar({
                    message: description,
                    options: {
                        key: new .getT + Math.,
                        variant: 'success',
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
                getChatmessageApi.request(chatflowid, {
                    startDate: startDate,
                    endDate: endDate,
                    chatType: chatTypeFilter.length ? chatTypeFilter : undefined,
                    feedbackType: feedbackTypeFilter.length ? feedbackTypeFilter : undefined
                })
                getStatsApi.request(chatflowid, {
                    startDate: startDate,
                    endDate: endDate,
                    chatType: chatTypeFilter.length ? chatTypeFilter : undefined,
                    feedbackType: feedbackTypeFilter.length ? feedbackTypeFilter : undefined
                })
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
        let prevDate = ''
        const loadedMessages = []
        f {
            const chatmsg = chatmessages[i]
            
             {
                p[0]
                loadedMessages.push({
                    message: chatmsg.createdDate,
                    type: 'timeMessage'
                })
            } else {
                [0]
                 {
                    prevDate = currentDate
                    loadedMessages.push({
                        message: chatmsg.createdDate,
                        type: 'timeMessage'
                    })
                }
            }
            ) {
                 => {
                     {
                        file.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatmsg.chatflowid}&chatId=${chatmsg.chatId}&fileName=${file.name}`
                    }
                })
            }
            const obj = {
                ...chatmsg,
                message: chatmsg.content,
                type: chatmsg.role
            }
             obj.sourceDocuments = chatmsg.sourceDocuments
             obj.usedTools = chatmsg.usedTools
             obj.fileAnnotations = chatmsg.fileAnnotations
             obj.agentReasoning = chatmsg.agentReasoning
             {
                obj.artifacts = chatmsg.artifacts
                 => {
                     {
                        artifact.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatmsg.chatflowid}&chatId=${
                            chatmsg.chatId
                        }&f}`
                    }
                })
            }
            l
        }
        
    }

     => {
        const chatId = chatmsg.chatId
        const memoryType = chatmsg.memoryType ?? 'null'
        const sessionId = chatmsg.sessionId ?? 'null'
        return `${chatId}_${memoryType}_${sessionId}`
    }

     => {
        let 
        const chatId = c1
        const memoryType = c2
        

        const params = { chatId }
         params.memoryType = memoryType
         params.sessionId = sessionId

        return params
    }

     => {
        const seen = {}
        const filteredChatLogs = []
        f {
            

            const item = allChatMessages[i]
            ) {
                seen[PK] = {
                    counter: 1,
                    item: allChatMessages[i]
                }
            } el &&  {
                // Properly identify user and API messages regardless of order
                const firstMessage = seen[PK].item
                const secondMessage = item

                let userContent = ''
                let apiContent = ''

                // Check both messages and assign based on role, not order
                 {
                    userContent = `User: ${firstMessage.content}`
                } el {
                    apiContent = `Bot: ${firstMessage.content}`
                }

                 {
                    userContent = `User: ${secondMessage.content}`
                } el {
                    apiContent = `Bot: ${secondMessage.content}`
                }

                seen[PK] = {
                    counter: 2,
                    item: {
                        ...seen[PK].item,
                        apiContent,
                        userContent
                    }
                }
                f
            }
        }

        // Sort by date to maintain chronological order
         => new  - new )
        
         
        return undefined
    }

     => {
        
         {
            getChatmessageFromPKApi.request(dialogProps.chatflow.id, {
                ...t),
                feedbackType: feedbackTypeFilter
            })
        } else {
            getChatme))
        }
    }

     => {
        w
    }

     => {
        try {
            const response = await axios.post(
                `${baseURL}/api/v1/openai-assistants-file/download`,
                { fileName: fileAnnotation.fileName, chatflowId: dialogProps.chatflow.id, chatId: selectedChatId },
                { responseType: 'blob' }
            )
            
            
            
            link.href = downloadUrl
            link.download = fileAnnotation.fileName
            
            l
            l
        }  {
            
        }
    }

     => {
        
        
    }

     => {
        
    }

     => {
        
    }

     => {
        ) {
            return (
                <Card
                    key={index}
                    sx={{
                        p: 0,
                        m: 0,
                        maxWidth: 128,
                        marginRight: '10px',
                        flex: '0 0 auto'
                    }}
                >
                    <CardMedia component='img' image={item.data} sx={{ height: 64 }} alt={'preview'} style={messageImageStyle} />
                </Card>
            )
        } el) {
            return (
                /* eslint-disable jsx-a11y/media-has-caption */
                <audio controls='controls'>
                    Your browser does not support the &lt;audio&gt; tag.
                    <source src={item.data} type={item.mime} />
                </audio>
            )
        } else {
            return (
                <Card
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        height: '48px',
                        width: 'max-content',
                        p: 2,
                        mr: 1,
                        flex: '0 0 auto',
                        ba' : 'transparent'
                    }}
                    variant='outlined'
                >
                    <IconPaperclip size={20} />
                    <span
                        style={{
                            marginLeft: '5px',
                            color: customization.isDarkMode ? 'white' : 'inherit'
                        }}
                    >
                        {item.name}
                    </span>
                </Card>
            )
        }
    }

    u => {
         => me
         {
            
        }
    }, 

    u => {
         {
            getChatMe
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            getSt

            
            
            
             {
                 {
                    getChatmessageFromPKApi.request(dialogProps.chatflow.id, {
                        ...t,
                        feedbackType: feedbackTypeFilter
                    })
                } else {
                    getChatme)
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
        }
    }, 

    u => {
         {
            
            getStatsApi.request(dialogProps.chatflow.id, {
                startDate: startDate,
                endDate: endDate
            })
        }

         => {
            
            
            
            
            
            
            
            ..getM - 1)))
            )
            
            
            
            
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

    u => {
         {
            // when the filter is cleared fetch all messages
             {
                
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        
        f {
            const artifact = newArtifacts[i]
            ) {
                const data = artifact.data
                newArtifacts[i].data = `${baseURL}/api/v1/get-upload-file?chatflowId=${
                    dialogProps.chatflow.id
                }&}`
            }
        }
        return newArtifacts
    }

     => {
         {
            return (
                <Card
                    key={index}
                    sx={{
                        p: 0,
                        m: 0,
                        mt: 2,
                        mb: 2,
                        flex: '0 0 auto'
                    }}
                >
                    <CardMedia
                        component='img'
                        image={item.data}
                        sx={{ height: 'auto' }}
                        alt={'artifact'}
                        style={{
                            width: isAgentReasoning ? '200px' : '100%',
                            height: isAgentReasoning ? '200px' : 'auto',
                            objectFit: 'cover'
                        }}
                    />
                </Card>
            )
        } el {
            return (
                <div style={{ marginTop: '20px' }}>
                    <SafeHTML html={item.data} />
                </div>
            )
        } else {
            return <MemoizedReactMarkdown chatflowid={dialogProps.chatflow.id}>{item.data}</MemoizedReactMarkdown>
        }
    }

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth={'xl'}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogContent>
                <>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 16,
                            marginLeft: 8,
                            marginRight: 8
                        }}
                    >
                        <div style={{ marginRight: 10 }}>
                            <b style={{ marginRight: 10 }}>From Date</b>
                            <DatePicker
                                selected={startDate}
                                 => }
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<DatePickerCustomInput />}
                            />
                        </div>
                        <div style={{ marginRight: 10 }}>
                            <b style={{ marginRight: 10 }}>To Date</b>
                            <DatePicker
                                selected={endDate}
                                 => }
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                max}
                                customInput={<DatePickerCustomInput />}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                minWidth: '200px',
                                marginRight: 10
                            }}
                        >
                            <b style={{ marginRight: 10 }}>Source</b>
                            <MultiDropdown
                                key={JSON.}
                                name='chatType'
                                options={[
                                    {
                                        label: 'UI',
                                        name: 'INTERNAL'
                                    },
                                    {
                                        label: 'API/Embed',
                                        name: 'EXTERNAL'
                                    },
                                    {
                                        label: 'Evaluations',
                                        name: 'EVALUATION'
                                    }
                                ]}
                                 => }
                                value={chatTypeFilter}
                                formControlSx={{ mt: 0 }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                minWidth: '200px',
                                marginRight: 10
                            }}
                        >
                            <b style={{ marginRight: 10 }}>Feedback</b>
                            <MultiDropdown
                                key={JSON.}
                                name='feedbackType'
                                options={[
                                    {
                                        label: 'Positive',
                                        name: 'THUMBS_UP'
                                    },
                                    {
                                        label: 'Negative',
                                        name: 'THUMBS_DOWN'
                                    }
                                ]}
                                 => }
                                value={feedbackTypeFilter}
                                formControlSx={{ mt: 0 }}
                            />
                        </div>
                        <div style={{ flex: 1 }}></div>
                        <Button
                            id='messages-dialog-action-button'
                            aria-controls={open ? 'messages-dialog-action-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            variant={customization.isDarkMode ? 'contained' : 'outlined'}
                            disableElevation
                            color='secondary'
                            onClick={handleClick}
                            sx={{
                                minWidth: 150,
                                '&:hover': {
                                    ba : undefined
                                }
                            }}
                            endIcon={
                                <KeyboardArrowDownIcon style={{ backgroundColor: customization.isDarkMode ? 'transparent' : 'inherit' }} />
                            }
                        >
                            More Actions
                        </Button>
                        <StyledMenu
                            id='messages-dialog-action-menu'
                            MenuListProps={{
                                'aria-labelledby': 'messages-dialog-action-button'
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem
                                 => {
                                    han
                                    exp
                                }}
                                disableRipple
                            >
                                <IconFileExport style={{ marginRight: 8 }} />
                                Export to JSON
                            </MenuItem>
                            {( > 0 && (
                                <MenuItem
                                     => {
                                        han
                                        
                                    }}
                                    disableRipple
                                >
                                    <IconEraser style={{ marginRight: 8 }} />
                                    Delete All
                                </MenuItem>
                            )}
                        </StyledMenu>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            g)',
                            gap: 10,
                            marginBottom: 25,
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 20
                        }}
                    >
                        <StatsCard title='Total Sessions' stat={`${stats.totalSessions ?? 0}`} />
                        <StatsCard title='Total Messages' stat={`${stats.totalMessages ?? 0}`} />
                        <StatsCard title='Total Feedback Received' stat={`${stats.totalFeedback ?? 0}`} />
                        <StatsCard
                            title='Positive Feedback'
                             / () * 100 || 0).t}%`}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', minWidth: 0 }}>
                        {chatlogs && chatlogs.length === 0 && (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} flexDirection='column'>
                                <Box sx={{ p: 5, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                        src={msgEmptySVG}
                                        alt='msgEmptySVG'
                                    />
                                </Box>
                                <div>No Messages</div>
                            </Stack>
                        )}
                        {chatlogs && chatlogs.length > 0 && (
                            <div style={{ flexBasis: '40%', minWidth: 0, overflow: 'hidden' }}>
                                <Box
                                    sx={{
                                        overflowY: 'auto',
                                        display: 'flex',
                                        flexGrow: 1,
                                        flexDirection: 'column',
                                        maxHe'
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            marginLeft: '15px',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 10
                                        }}
                                    >
                                        <Typography variant='h5'>
                                            Se + 1} - {Math.m} of{' '}
                                            {total}
                                        </Typography>
                                        <Pagination
                                            style={{ justifyItems: 'right', justifyContent: 'center' }}
                                            }
                                            onChange={onChange}
                                            page={currentPage}
                                            color='primary'
                                        />
                                    </div>
                                    { => (
                                        <ListItemButton
                                            key={index}
                                            sx={{
                                                p: 0,
                                                borderRadius: `${customization.borderRadius}px`,
                                                b',
                                                mt: 1,
                                                ml: 1,
                                                mr: 1,
                                                mb: index === chatlogs.length - 1 ? 1 : 0
                                            }}
                                            selected={selectedMessageIndex === index}
                                             => han}
                                        >
                                            <ListItem alignItems='center'>
                                                <ListItemText
                                                    primary={
                                                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                                                            <span>{chatmsg?.userContent}</span>
                                                            <div
                                                                style={{
                                                                    maxHeight: '100px',
                                                                    maxWidth: '400px',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis'
                                                                }}
                                                            >
                                                                {chatmsg?.apiContent}
                                                            </div>
                                                        </div>
                                                    }
                                                    .f}
                                                />
                                            </ListItem>
                                        </ListItemButton>
                                    ))}
                                </Box>
                            </div>
                        )}
                        {chatlogs && chatlogs.length > 0 && (
                            <div style={{ flexBasis: '60%', paddingRight: '30px', minWidth: 0, overflow: 'hidden' }}>
                                {chatMessages && chatMessages.length > 1 && (
                                    <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ flex: 1, marginLeft: '20px', marginBottom: '15px', marginTop: '10px' }}>
                                            {chatMessages[1].sessionId && (
                                                <div>
                                                    Session Id:&nbsp;<b>{chatMessages[1].sessionId}</b>
                                                </div>
                                            )}
                                            {chatMessages[1].chatType && (
                                                <div>
                                                    S}</b>
                                                </div>
                                            )}
                                            {chatMessages[1].memoryType && (
                                                <div>
                                                    Memory:&nbsp;<b>{chatMessages[1].memoryType}</b>
                                                </div>
                                            )}
                                            {leadEmail && (
                                                <div>
                                                    Email:&nbsp;<b>{leadEmail}</b>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignContent: 'center',
                                                alignItems: 'end'
                                            }}
                                        >
                                            <Tooltip title='Clear Message'>
                                                <I => }>
                                                    <IconEraser />
                                                </IconButton>
                                            </Tooltip>
                                            {chatMessages[1].sessionId && (
                                                <Tooltip
                                                    title={
                                                        'On the left 👈, you’ll see the Memory node used in this conversation. To delete the session conversations stored on that Memory node, you must have a matching Memory node with identical parameters in the canvas.'
                                                    }
                                                    placement='bottom'
                                                >
                                                    <IconButton color='primary'>
                                                        <IconBulb />
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                        </div>
                                    </div>
                                )}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginLeft: '20px',
                                        marginBottom: '5px',
                                        border: customization.isDarkMode ? 'none' : '1px solid #e0e0e0',
                                        b' : 'none',
                                        borderRadius: `10px`,
                                        overflow: 'hidden'
                                    }}
                                    className='cloud-message'
                                >
                                    <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                                        {chatMessages &&
                                             => {
                                                 {
                                                    return (
                                                        <Box
                                                            sx={{
                                                                background:
                                                                    message.type === 'apiMessage' ? theme.palette.asyncSelect.main : '',
                                                                py: '1rem',
                                                                px: '1.5rem'
                                                            }}
                                                            key={index}
                                                            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                                                        >
                                                            {/* Display the correct icon depending on the message type */}
                                                            {message.type === 'apiMessage' ? (
                                                                <img
                                                                    style={{ marginLeft: '10px' }}
                                                                    src={robotPNG}
                                                                    alt='AI'
                                                                    width='25'
                                                                    height='25'
                                                                    className='boticon'
                                                                />
                                                            ) : (
                                                                <img
                                                                    style={{ marginLeft: '10px' }}
                                                                    src={userPNG}
                                                                    alt='Me'
                                                                    width='25'
                                                                    height='25'
                                                                    className='usericon'
                                                                />
                                                            )}
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    width: '100%',
                                                                    minWidth: 0,
                                                                    overflow: 'hidden'
                                                                }}
                                                            >
                                                                {message.fileUploads && message.fileUploads.length > 0 && (
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexWrap: 'wrap',
                                                                            flexDirection: 'column',
                                                                            width: '100%',
                                                                            gap: '8px'
                                                                        }}
                                                                    >
                                                                        {me => {
                                                                            }</>
                                                                        })}
                                                                    </div>
                                                                )}
                                                                {message.agentReasoning && (
                                                                    <div style={{ display: 'block', flexDirection: 'row', width: '100%' }}>
                                                                        {me => {
                                                                            return (
                                                                                <Card
                                                                                    key={index}
                                                                                    sx={{
                                                                                        border: '1px solid #e0e0e0',
                                                                                        borderRadius: `${customization.borderRadius}px`,
                                                                                        mb: 1
                                                                                    }}
                                                                                >
                                                                                    <CardContent>
                                                                                        <Stack
                                                                                            sx={{
                                                                                                alignItems: 'center',
                                                                                                justifyContent: 'flex-start',
                                                                                                width: '100%'
                                                                                            }}
                                                                                            flexDirection='row'
                                                                                        >
                                                                                            <Box sx={{ height: 'auto', pr: 1 }}>
                                                                                                <img
                                                                                                    style={{
                                                                                                        objectFit: 'cover',
                                                                                                        height: '25px',
                                                                                                        width: 'auto'
                                                                                                    }}
                                                                                                    src={
                                                                                                        agent.instructions
                                                                                                            ? multiagent_supervisorPNG
                                                                                                            : multiagent_workerPNG
                                                                                                    }
                                                                                                    alt='agentPNG'
                                                                                                />
                                                                                            </Box>
                                                                                            <div>{agent.agentName}</div>
                                                                                        </Stack>
                                                                                        {agent.usedTools && agent.usedTools.length > 0 && (
                                                                                            <div
                                                                                                style={{
                                                                                                    display: 'block',
                                                                                                    flexDirection: 'row',
                                                                                                    width: '100%'
                                                                                                }}
                                                                                            >
                                                                                                {agent.u => {
                                                                                                    return tool !== null ? (
                                                                                                        <Chip
                                                                                                            size='small'
                                                                                                            key={index}
                                                                                                            label={tool.tool}
                                                                                                            component='a'
                                                                                                            sx={{
                                                                                                                mr: 1,
                                                                                                                mt: 1,
                                                                                                                borderColor: tool.error
                                                                                                                    ? 'error.main'
                                                                                                                    : undefined,
                                                                                                                color: tool.error
                                                                                                                    ? 'error.main'
                                                                                                                    : undefined
                                                                                                            }}
                                                                                                            variant='outlined'
                                                                                                            clickable
                                                                                                            icon={
                                                                                                                <IconTool
                                                                                                                    size={15}
                                                                                                                    color={
                                                                                                                        tool.error
                                                                                                                            ? theme.palette
                                                                                                                                  .error
                                                                                                                                  .main
                                                                                                                            : undefined
                                                                                                                    }
                                                                                                                />
                                                                                                            }
                                                                                                             =>
                                                                                                                onSourceDialogClick(
                                                                                                                    tool,
                                                                                                                    'Used Tools'
                                                                                                                )
                                                                                                            }
                                                                                                        />
                                                                                                    ) : null
                                                                                                })}
                                                                                            </div>
                                                                                        )}
                                                                                        {agent.state &&
                                                                                            Obje.length > 0 && (
                                                                                                <div
                                                                                                    style={{
                                                                                                        display: 'block',
                                                                                                        flexDirection: 'row',
                                                                                                        width: '100%'
                                                                                                    }}
                                                                                                >
                                                                                                    <Chip
                                                                                                        size='small'
                                                                                                        label={'State'}
                                                                                                        component='a'
                                                                                                        sx={{ mr: 1, mt: 1 }}
                                                                                                        variant='outlined'
                                                                                                        clickable
                                                                                                        icon={
                                                                                                            <IconDeviceSdCard size={15} />
                                                                                                        }
                                                                                                         =>
                                                                                                            onSourceDialogClick(
                                                                                                                agent.state,
                                                                                                                'State'
                                                                                                            )
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            )}
                                                                                        {agent.artifacts && (
                                                                                            <div
                                                                                                style={{
                                                                                                    display: 'flex',
                                                                                                    flexWrap: 'wrap',
                                                                                                    flexDirection: 'row',
                                                                                                    width: '100%',
                                                                                                    gap: '8px'
                                                                                                }}
                                                                                            >
                                                                                                {agentReasoningArtifacts(
                                                                                                    agent.artifacts
                                                                                                ).map(( => {
                                                                                                    return item !== null ? (
                                                                                                        <>
                                                                                                            {renderArtifacts(
                                                                                                                item,
                                                                                                                index,
                                                                                                                true
                                                                                                            )}
                                                                                                        </>
                                                                                                    ) : null
                                                                                                })}
                                                                                            </div>
                                                                                        )}
                                                                                        {agent.messages.length > 0 && (
                                                                                            <MemoizedReactMarkdown
                                                                                                chatflowid={dialogProps.chatflow.id}
                                                                                            >
                                                                                                {agent.messages.length > 1
                                                                                                    ? agent.me
                                                                                                    : agent.messages[0]}
                                                                                            </MemoizedReactMarkdown>
                                                                                        )}
                                                                                        {agent.instructions && <p>{agent.instructions}</p>}
                                                                                        {agent.messages.length === 0 &&
                                                                                            !agent.instructions && <p>Finished</p>}
                                                                                        {agent.sourceDocuments &&
                                                                                            agent.sourceDocuments.length > 0 && (
                                                                                                <div
                                                                                                    style={{
                                                                                                        display: 'block',
                                                                                                        flexDirection: 'row',
                                                                                                        width: '100%'
                                                                                                    }}
                                                                                                >
                                                                                                    {.map(
                                                                                                        ( => {
                                                                                                            const URL =
                                                                                                                source &&
                                                                                                                source.metadata &&
                                                                                                                source.metadata.source
                                                                                                                    ? isValidURL(
                                                                                                                          source.metadata
                                                                                                                              .source
                                                                                                                      )
                                                                                                                    : undefined
                                                                                                            return (
                                                                                                                <Chip
                                                                                                                    size='small'
                                                                                                                    key={index}
                                                                                                                    label={
                                                                                                                        URL
                                                                                                                            ? URL.pathname.substring(
                                                                                                                                  0,
                                                                                                                                  15
                                                                                                                              ) === '/'
                                                                                                                                ? URL.host
                                                                                                                                : `${URL.pathname.substring(
                                                                                                                                      0,
                                                                                                                                      15
                                                                                                                                  )}...`
                                                                                                                            : `${source.pageContent.substring(
                                                                                                                                  0,
                                                                                                                                  15
                                                                                                                              )}...`
                                                                                                                    }
                                                                                                                    component='a'
                                                                                                                    sx={{ mr: 1, mb: 1 }}
                                                                                                                    variant='outlined'
                                                                                                                    clickable
                                                                                                                     =>
                                                                                                                        URL
                                                                                                                            ? onURLClick(
                                                                                                                                  source
                                                                                                                                      .metadata
                                                                                                                                      .source
                                                                                                                              )
                                                                                                                            : onSourceDialogClick(
                                                                                                                                  source
                                                                                                                              )
                                                                                                                    }
                                                                                                                />
                                                                                                            )
                                                                                                        }
                                                                                                    )}
                                                                                                </div>
                                                                                            )}
                                                                                    </CardContent>
                                                                                </Card>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )}
                                                                {message.usedTools && (
                                                                    <div style={{ display: 'block', flexDirection: 'row', width: '100%' }}>
                                                                        {me => {
                                                                            return (
                                                                                <Chip
                                                                                    size='small'
                                                                                    key={index}
                                                                                    label={tool.tool}
                                                                                    component='a'
                                                                                    sx={{
                                                                                        mr: 1,
                                                                                        mt: 1,
                                                                                        borderColor: tool.error ? 'error.main' : undefined,
                                                                                        color: tool.error ? 'error.main' : undefined
                                                                                    }}
                                                                                    variant='outlined'
                                                                                    clickable
                                                                                    icon={
                                                                                        <IconTool
                                                                                            size={15}
                                                                                            color={
                                                                                                tool.error
                                                                                                    ? theme.palette.error.main
                                                                                                    : undefined
                                                                                            }
                                                                                        />
                                                                                    }
                                                                                     => }
                                                                                />
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )}
                                                                {message.artifacts && (
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexWrap: 'wrap',
                                                                            flexDirection: 'column',
                                                                            width: '100%'
                                                                        }}
                                                                    >
                                                                        {me => {
                                                                            return item !== null ? (
                                                                                <>{}</>
                                                                            ) : null
                                                                        })}
                                                                    </div>
                                                                )}
                                                                <div
                                                                    className='markdownanswer'
                                                                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                                                >
                                                                    <MemoizedReactMarkdown chatflowid={dialogProps.chatflow.id}>
                                                                        {message.message}
                                                                    </MemoizedReactMarkdown>
                                                                </div>
                                                                {message.fileAnnotations && (
                                                                    <div style={{ display: 'block', flexDirection: 'row', width: '100%' }}>
                                                                        {me => {
                                                                            return (
                                                                                <Button
                                                                                    sx={{
                                                                                        fontSize: '0.85rem',
                                                                                        textTransform: 'none',
                                                                                        mb: 1,
                                                                                        mr: 1
                                                                                    }}
                                                                                    key={index}
                                                                                    variant='outlined'
                                                                                     => }
                                                                                    endIcon={
                                                                                        <IconDownload color={theme.palette.primary.main} />
                                                                                    }
                                                                                >
                                                                                    {fileAnnotation.fileName}
                                                                                </Button>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )}
                                                                {message.sourceDocuments && (
                                                                    <div style={{ display: 'block', flexDirection: 'row', width: '100%' }}>
                                                                        {.map(( => {
                                                                            const URL =
                                                                                source.metadata && source.metadata.source
                                                                                    ? 
                                                                                    : undefined
                                                                            return (
                                                                                <Chip
                                                                                    size='small'
                                                                                    key={index}
                                                                                    label={
                                                                                        URL
                                                                                            ? URL.pathname. === '/'
                                                                                                ? URL.host
                                                                                                : `${URL.pathname.}...`
                                                                                            : `${}...`
                                                                                    }
                                                                                    component='a'
                                                                                    sx={{ mr: 1, mb: 1 }}
                                                                                    variant='outlined'
                                                                                    clickable
                                                                                     =>
                                                                                        URL
                                                                                            ? 
                                                                                            : 
                                                                                    }
                                                                                />
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )}
                                                                {message.type === 'apiMessage' && message.feedback ? (
                                                                    <Feedback
                                                                        content={message.feedback?.content || ''}
                                                                        rating={message.feedback?.rating}
                                                                    />
                                                                ) : null}
                                                            </div>
                                                        </Box>
                                                    )
                                                } else {
                                                    return (
                                                        <Box
                                                            sx={{
                                                                background: customization.isDarkMode
                                                                    ? theme.palette.divider
                                                                    : theme.palette.timeMessage.main,
                                                                p: 2
                                                            }}
                                                            key={index}
                                                            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                                                        >
                                                            {m.f}
                                                        </Box>
                                                    )
                                                }
                                            })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <S => } />
                    <ConfirmDeleteMessageDialog
                        show={hardDeleteDialogOpen}
                        dialogProps={hardDeleteDialogProps}
                         => }
                         => }
                    />
                </>
            </DialogContent>
        </Dialog>
    ) : null

    
}

ViewMessagesDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default ViewMessagesDialog
