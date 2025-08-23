import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction, SET_CHATFLOW } from '@/store/actions'
import { SketchPicker } from 'react-color'
import PropTypes from 'prop-types'

import { Card, Box, Typography, Button, Switch, OutlinedInput, Popover, Stack, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Project import
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { Available } from '@/ui-component/rbac/available'
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'

// Icons
import { IconX, IconCopy, IconArrowUpRightCircle } from '@tabler/icons-react'

// API
import chatflowsApi from '@/api/chatflows'

// utils
import useNotifier from '@/utils/useNotifier'

// Const
import { baseURL } from '@/store/constant'

const defaultConfig = {
    backgroundColor: '#ffffff',
    fontSize: 16,
    poweredByTextColor: '#303235',
    titleBackgroundColor: '#3B81F6',
    titleTextColor: '#ffffff',
    botMessage: {
        backgroundColor: '#f7f8ff',
        textColor: '#303235'
    },
    userMessage: {
        backgroundColor: '#3B81F6',
        textColor: '#ffffff'
    },
    textInput: {
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#3B81F6'
    }
}

 => {
    
    
     => 
    const chatflowid = chatflow.id
     : {}

    u

     => )
     => )

    
    
    

    
    
    const [titleBackgroundColor, setTitleBackgroundColor] = useState(
        chatbotConfig?.titleBackgroundColor ?? defaultConfig.titleBackgroundColor
    )
    

    
    
    
    
    

     => {
         {
            return chatbotConfig?.showAgentMessages
        } else {
            return isAgentCanvas ? true : undefined
        }
    }
    )

    const [botMessageBackgroundColor, setBotMessageBackgroundColor] = useState(
        chatbotConfig?.botMessage?.backgroundColor ?? defaultConfig.botMessage.backgroundColor
    )
    const [botMessageTextColor, setBotMessageTextColor] = useState(
        chatbotConfig?.botMessage?.textColor ?? defaultConfig.botMessage.textColor
    )
    
    

    const [userMessageBackgroundColor, setUserMessageBackgroundColor] = useState(
        chatbotConfig?.userMessage?.backgroundColor ?? defaultConfig.userMessage.backgroundColor
    )
    const [userMessageTextColor, setUserMessageTextColor] = useState(
        chatbotConfig?.userMessage?.textColor ?? defaultConfig.userMessage.textColor
    )
    
    

    const [textInputBackgroundColor, setTextInputBackgroundColor] = useState(
        chatbotConfig?.textInput?.backgroundColor ?? defaultConfig.textInput.backgroundColor
    )
    
    
    const [textInputSendButtonColor, setTextInputSendButtonColor] = useState(
        chatbotConfig?.textInput?.sendButtonColor ?? defaultConfig.textInput.sendButtonColor
    )

    
    
    
    

    
    

     => {
        const obj = {
            botMessage: {
                showAvatar: false
            },
            userMessage: {
                showAvatar: false
            },
            textInput: {}
        }
         obj.title = title
         obj.titleAvatarSrc = titleAvatarSrc
         obj.titleBackgroundColor = titleBackgroundColor
         obj.titleTextColor = titleTextColor

         obj.welcomeMessage = welcomeMessage
         obj.errorMessage = errorMessage
         obj.backgroundColor = backgroundColor
         obj.fontSize = fontSize
         obj.poweredByTextColor = poweredByTextColor

         obj.botMessage.backgroundColor = botMessageBackgroundColor
         obj.botMessage.textColor = botMessageTextColor
         obj.botMessage.avatarSrc = botMessageAvatarSrc
         obj.botMessage.showAvatar = botMessageShowAvatar

         obj.userMessage.backgroundColor = userMessageBackgroundColor
         obj.userMessage.textColor = userMessageTextColor
         obj.userMessage.avatarSrc = userMessageAvatarSrc
         obj.userMessage.showAvatar = userMessageShowAvatar

         obj.textInput.backgroundColor = textInputBackgroundColor
         obj.textInput.textColor = textInputTextColor
         obj.textInput.placeholder = textInputPlaceholder
         obj.textInput.sendButtonColor = textInputSendButtonColor

         obj.generateNewSession = generateNewSession

         {
            obj.renderHTML = true
        } else {
            obj.renderHTML = false
        }

         {
            // if showAgentMessages is undefined, default to true
             {
                obj.showAgentMessages = true
            } else {
                obj.showAgentMessages = showAgentMessages
            }
        }

        return {
            ...chatbotConfig,
            ...obj
        }
    }

     => {
        try {
            const saveResp = await chatflowsApi.updateChatflow(chatflowid, {
                )
            })
             {
                enqueueSnackbar({
                    message: 'Chatbot Configuration Saved',
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
                
            }
        }  {
            enqueueSnackbar({
                message: `Failed to save Chatbot Configuration: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        try {
            
             {
                enqueueSnackbar({
                    message: 'Chatbot Configuration Saved',
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
                
            }
        }  {
            enqueueSnackbar({
                message: `Failed to save Chatbot Configuration: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        
    }

     => {
        
    }

     => {
         {
            case 'backgroundColor':
                
                break
            case 'poweredByTextColor':
                
                break
            case 'botMessageBackgroundColor':
                
                break
            case 'botMessageTextColor':
                
                break
            case 'userMessageBackgroundColor':
                
                break
            case 'userMessageTextColor':
                
                break
            case 'textInputBackgroundColor':
                
                break
            case 'textInputTextColor':
                
                break
            case 'textInputSendButtonColor':
                
                break
            case 'titleBackgroundColor':
                
                break
            case 'titleTextColor':
                
                break
        }
        
    }

     => {
         {
            case 'title':
                
                break
            case 'titleAvatarSrc':
                
                break
            case 'welcomeMessage':
                
                break
            case 'errorMessage':
                
                break
            case 'fontSize':
                
                break
            case 'botMessageAvatarSrc':
                
                break
            case 'userMessageAvatarSrc':
                
                break
            case 'textInputPlaceholder':
                
                break
        }
    }

     => {
         {
            case 'botMessageShowAvatar':
                
                break
            case 'userMessageShowAvatar':
                
                break
            case 'generateNewSession':
                
                break
            case 'showAgentMessages':
                
                break
            case 'renderHTML':
                
                break
        }
    }

     => {
        return (
            <Box sx={{ pt: 2, pb: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ mb: 1 }}>{fieldLabel}</Typography>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            width: '30px',
                            height: '30px',
                            border: '1px solid #616161',
                            marginRight: '10px',
                            backgroundColor: color ?? '#ffffff',
                            borderRadius: '5px'
                        }}
                         => {
                            
                            
                            
                        }}
                    ></Box>
                </div>
            </Box>
        )
    }

     => {
        return (
            <Box sx={{ pt: 2, pb: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ mb: 1 }}>{fieldLabel}</Typography>
                    <Switch
                        id={fieldName}
                        checked={value}
                         => {
                            
                        }}
                    />
                </div>
            </Box>
        )
    }

     => {
        return (
            <Box sx={{ pt: 2, pb: 2 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ mb: 1 }}>{fieldLabel}</Typography>
                    <OutlinedInput
                        id={fieldName}
                        type={fieldType}
                        fullWidth
                        value={message}
                        placeholder={placeholder}
                        name={fieldName}
                         => {
                            
                        }}
                    />
                </div>
            </Box>
        )
    }

    return (
        <>
            <Stack direction='row'>
                <Typography
                    sx={{
                        p: 1,
                        borderRadius: 10,
                        backgroundColor: theme.palette.primary.light,
                        width: 'max-content',
                        height: 'max-content'
                    }}
                    variant='h5'
                >
                    {`${baseURL}/chatbot/${chatflowid}`}
                </Typography>
                <IconButton
                    title='Copy Link'
                    color='success'
                     => {
                        nav
                        
                         => {
                            han
                        }, 1500)
                    }}
                >
                    <IconCopy />
                </IconButton>
                <I => w}>
                    <IconArrowUpRightCircle />
                </IconButton>
                <div style={{ flex: 1 }} />
                <Available permission={'chatflows:update,agentflows:update'}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Switch
                            checked={isPublicChatflow}
                             => {
                                
                                
                            }}
                        />
                        <Typography>Make Public</Typography>
                        <TooltipWithParser
                            style={{ marginLeft: 10 }}
                            title={'Making public will allow anyone to access the chatbot without authentication'}
                        />
                    </div>
                </Available>
            </Stack>

            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 3, mt: 2 }} variant='outlined'>
                <Stack sx={{ mt: 1, mb: 2, alignItems: 'center' }} direction='row' spacing={2}>
                    <Typography variant='h4'>Title Settings</Typography>
                </Stack>
                {textF}
                {textField(
                    titleAvatarSrc,
                    'titleAvatarSrc',
                    'Title Avatar Link',
                    'string',
                    `https://raw.githubusercontent.com/flowise-ai/flowise/main/assets/FloWiseAI_dark.png`
                )}
                {}
                {}
            </Card>

            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 3, mt: 2 }} variant='outlined'>
                <Stack sx={{ mt: 1, mb: 2, alignItems: 'center' }} direction='row' spacing={2}>
                    <Typography variant='h4'>General Settings</Typography>
                </Stack>
                {textF}
                {textF}
                {}
                {textF}
                {}
                {}
                {b}
                {isSessionMemory &&
                    b}
            </Card>

            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 3, mt: 2 }} variant='outlined'>
                <Stack sx={{ mt: 1, mb: 2, alignItems: 'center' }} direction='row' spacing={2}>
                    <Typography variant='h4'>Bot Message</Typography>
                </Stack>
                {}
                {}
                {textField(
                    botMessageAvatarSrc,
                    'botMessageAvatarSrc',
                    'Avatar Link',
                    'string',
                    `https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png`
                )}
                {b}
            </Card>

            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 3, mt: 2 }} variant='outlined'>
                <Stack sx={{ mt: 1, mb: 2, alignItems: 'center' }} direction='row' spacing={2}>
                    <Typography variant='h4'>User Message</Typography>
                </Stack>
                {}
                {}
                {textField(
                    userMessageAvatarSrc,
                    'userMessageAvatarSrc',
                    'Avatar Link',
                    'string',
                    `https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png`
                )}
                {b}
            </Card>

            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 3, mt: 2 }} variant='outlined'>
                <Stack sx={{ mt: 1, mb: 2, alignItems: 'center' }} direction='row' spacing={2}>
                    <Typography variant='h4'>Text Input</Typography>
                </Stack>
                {}
                {}
                {textF}
                {}
            </Card>

            <StyledPermissionButton
                permissionId={'chatflows:update,agentflows:update'}
                fullWidth
                style={{
                    borderRadius: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    ba'
                }}
                variant='contained'
                 => }
            >
                Save Changes
            </StyledPermissionButton>
            <Popover
                open={openColorPopOver}
                anchorEl={colorAnchorEl}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <Sket => } />
            </Popover>
            <Popover
                open={openCopyPopOver}
                anchorEl={copyAnchorEl}
                onClose={handleCloseCopyPopOver}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <Typography variant='h6' sx={{ pl: 1, pr: 1, color: 'white', background: theme.palette.success.dark }}>
                    Copied!
                </Typography>
            </Popover>
        </>
    )
}

ShareChatbot.propTypes = {
    isSessionMemory: PropTypes.bool,
    isAgentCanvas: PropTypes.bool
}

export default ShareChatbot
