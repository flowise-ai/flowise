import { useState, useRef, useEffect, useCallback, Fragment, useContext, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { cloneDeep } from 'lodash'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { EventStreamContentType, fetchEventSource } from '@microsoft/fetch-event-source'

import {
    Box,
    Button,
    Card,
    CardMedia,
    Chip,
    CircularProgress,
    Divider,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Typography,
    Stack,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material'
import { darken, useTheme } from '@mui/material/styles'
import {
    IconCircleDot,
    IconDownload,
    IconSend,
    IconMicrophone,
    IconPhotoPlus,
    IconTrash,
    IconX,
    IconTool,
    IconSquareFilled,
    IconCheck,
    IconPaperclip,
    IconSparkles
} from '@tabler/icons-react'
import robotPNG from '@/assets/images/robot.png'
import userPNG from '@/assets/images/account.png'
import multiagent_supervisorPNG from '@/assets/images/multiagent_supervisor.png'
import multiagent_workerPNG from '@/assets/images/multiagent_worker.png'
import audioUploadSVG from '@/assets/images/wave-sound.jpg'

// project import
import NodeInputHandler from '@/views/canvas/NodeInputHandler'
import { MemoizedReactMarkdown } from '@/ui-component/markdown/MemoizedReactMarkdown'
import { SafeHTML } from '@/ui-component/safe/SafeHTML'
import SourceDocDialog from '@/ui-component/dialog/SourceDocDialog'
import ChatFeedbackContentDialog from '@/ui-component/dialog/ChatFeedbackContentDialog'
import StarterPromptsCard from '@/ui-component/cards/StarterPromptsCard'
import AgentReasoningCard from './AgentReasoningCard'
import AgentExecutedDataCard from './AgentExecutedDataCard'
import { ImageButton, ImageSrc, ImageBackdrop, ImageMarked } from '@/ui-component/button/ImageButton'
import CopyToClipboardButton from '@/ui-component/button/CopyToClipboardButton'
import ThumbsUpButton from '@/ui-component/button/ThumbsUpButton'
import ThumbsDownButton from '@/ui-component/button/ThumbsDownButton'
import { cancelAudioRecording, startAudioRecording, stopAudioRecording } from './audio-recording'
import './audio-recording.css'
import './ChatMessage.css'

// api
import chatmessageApi from '@/api/chatmessage'
import chatflowsApi from '@/api/chatflows'
import predictionApi from '@/api/prediction'
import vectorstoreApi from '@/api/vectorstore'
import attachmentsApi from '@/api/attachments'
import chatmessagefeedbackApi from '@/api/chatmessagefeedback'
import leadsApi from '@/api/lead'
import executionsApi from '@/api/executions'

// Hooks
import useApi from '@/hooks/useApi'
import { flowContext } from '@/store/context/ReactFlowContext'

// Const
import { baseURL, maxScroll } from '@/store/constant'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// Utils
import { isValidURL, removeDuplicateURL, setLocalStorageChatflow, getLocalStorageChatflow } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import FollowUpPromptsCard from '@/ui-component/cards/FollowUpPromptsCard'

// History
import { ChatInputHistory } from './ChatInputHistory'

const messageImageStyle = {
    width: '128px',
    height: '128px',
    objectFit: 'cover'
}

 => {
    
    ' : 'transparent'

    return (
        <div
             => }
             => }
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <Card
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: '48px',
                    width: 'max-content',
                    p: 2,
                    mr: 1,
                    flex: '0 0 auto',
                    transition: 'opacity 0.3s',
                    opacity: isHovered ? 1 : 1,
                    ba' : defaultBackgroundColor
                }}
                variant='outlined'
            >
                <I' : 'none' }} />
                <span
                    style={{
                        marginLeft: '5px',
                        color: customization.isDarkMode ? 'white' : 'inherit',
                        transition: 'filter 0.3s',
                        f' : 'none'
                    }}
                >
                    {item.name}
                </span>
            </Card>
            {isHovered && !disabled && (
                <Button
                    disabled={disabled}
                     => }
                    startIcon={<IconTrash color='white' size={22} />}
                    title='Remove attachment'
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent'
                        }
                    }}
                ></Button>
            )}
        </div>
    )
}

CardWithDeleteOverlay.propTypes = {
    item: PropTypes.object,
    customization: PropTypes.object,
    disabled: PropTypes.bool,
    onDelete: PropTypes.func
}

 => {
    
     => 

    

    
    

    u
     => )
     => )

    
    
    const [messages, setMessages] = useState([
        {
            message: 'Hi there! How can I help?',
            type: 'apiMessage'
        }
    ])
    
    
    
    
    )
    
    
    
    
    )

    
    
    
    
    
    

    

    // full file upload
    
    

    // feedback
    
    
    

    // leads
    
    
    
    
    
    

    // follow-up prompts
    
    

    // drag & drop and file input
    
    
    
    
    
    

    // recording
    
    
    

    
    
    
    

    // start input type
    
    
    
    
    

    

     => {
        const constraints = getAllowChatFlowUploads.data
        /**
         * {isImageUploadAllowed: boolean, imgUploadSizeAndTypes: Array<{ fileTypes: string[], maxUploadSize: number }>}
         */
        let acceptFile = false

        // Early return if constraints are not available yet
         {
            
            return false
        }

         {
            const fileType = file.type
            const sizeInMB = file.size / 1024 / 1024
            ) {
                 => {
                     &&  {
                        acceptFile = true
                    }
                })
            }
        }

         {
            return true
        } el {
            .p
            ) {
                 => {
                     {
                        acceptFile = true
                    } el) {
                        acceptFile = true
                    }
                })
            }
        }
         {
            ale
        }
        return acceptFile
    }

     => {
         {
            return
        }
        e.p
        
        let files = []
        let uploadedFiles = []

         {
            f {
                 === fal {
                    return
                }
                
                const { name } = file
                // Only add files
                ) {
                    upl
                }
                files.push(
                    new P => {
                         => {
                             {
                                return
                            }
                            const { result } = evt.target
                            let previewUrl
                            ) {
                                previewUrl = audioUploadSVG
                            } else {
                                p
                            }
                            resolve({
                                data: result,
                                preview: previewUrl,
                                type: 'file',
                                name: name,
                                mime: file.type
                            })
                        }
                        
                    })
                )
            }

            
            
             => 
        }

         {
            //TODO set files
            f {
                ) {
                     => {
                        let upload = {
                            data: s,
                            preview: s,
                            type: 'url',
                            name:  + 1) : ''
                        }
                         => 
                    })
                } el) {
                     => {
                         === -1) return
                        //extract href
                        let  + 6) : ''
                        let h)

                        let upload = {
                            data: hrefStr,
                            preview: hrefStr,
                            type: 'url',
                            name: h + 1) : ''
                        }
                         => 
                    })
                }
            }
        }
    }

     => {
        const fileObj = event.target.files && event.target.files[0]
         {
            return
        }
        let files = []
        let uploadedFiles = []
        f {
             === fal {
                return
            }
            // Only add files
            ) {
                upl
            }
            
            const { name } = file
            files.push(
                new P => {
                     => {
                         {
                            return
                        }
                        const { result } = evt.target
                        resolve({
                            data: result,
                            p,
                            type: 'file',
                            name: name,
                            mime: file.type
                        })
                    }
                    
                })
            )
        }

        
        
         => 
        // 👇️ reset file input
        event.target.value = null
    }

     => {
        let mimeType = ''
        
         {
            mimeType = blob.type
        } else {
            m : ''
        }
        // read blob and add to previews
        
        
         => {
            const base64data = reader.result
            const upload = {
                data: base64data,
                preview: audioUploadSVG,
                type: 'audio',
                name: `au}.wav`,
                mime: mimeType
            }
             => 
        }
    }

     => {
         {
            e.p
            e.
             {
                
            } el {
                
            }
        }
    }

     => {
        
        try {
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
         {
            URL. // Clean up for file
        }
         => )
    }

     => {
        // 👇️ open file input box on click of another element
        f
    }

     => {
        // 👇️ open file input box on click of another element
        
    }

     => {
        // Revoke the data uris to avoid memory leaks
        p => URL.)
        
    }

     => {
        
        
    }

     => {
         
        
        
    }

     => {
        
        
    }

     => {
        
        
    }

     => {
        w
    }

     => {
         {
            p
        }
    }

     => , 

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].message += text
            allMessages[allMessages.length - 1].feedback = null
            return allMessages
        })
    }

     => {
         => {
            let allMe]
            allMe
            return allMessages
        })
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].sourceDocuments = sourceDocuments
            return allMessages
        })
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].agentReasoning = agentReasoning
            return allMessages
        })
    }

     => {
         {
             => 
        } else {
             => {
                let allMe]
                 return allMessages
                allMessages[allMessages.length - 1].agentFlowEventStatus = event
                return allMessages
            })
        }
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].agentFlowExecutedData = agentFlowExecutedData
            return allMessages
        })
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].action = action
            return allMessages
        })
    }

     => {
        a => {
             {
                artifact.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatflowid}&chatId=${chatId}&fileName=${artifact.data.replace(
                    'FILE-STORAGE::',
                    ''
                )}`
            }
        })
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].artifacts = artifacts
            return allMessages
        })
    }

     => {
         => {
            let allMe]
             return allMessages
            const lastAgentReasoning = allMessages[allMessages.length - 1].agentReasoning
             {
                la
            }
            allMessages[allMessages.length - 1].agentReasoning = lastAgentReasoning
            return allMessages
        })
    }

     => {
        
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].usedTools = usedTools
            return allMessages
        })
    }

     => {
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].fileAnnotations = fileAnnotations
            return allMessages
        })
    }

     => {
        
         => {
            let allMe]
             return allMessages
            const lastAgentReasoning = allMessages[allMessages.length - 1].agentReasoning
             {
                allMe => 
            }
            return allMessages
        })
         => {
            
        }, 100)
        enqueueSnackbar({
            message: 'Message stopped',
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

     => {
        me
         => 
        
        
        
         => {
            
        }, 100)
    }

     => {
        
        han
    }

     => {
        
        
        han
    }

     => {
        let fbType = feedbackType
         {
            fbType = type
        }
        .t + fbType.
        handleSubmit(undefined, question, undefined, {
            type: fbType,
            startNodeId: actionData?.nodeId,
            feedback
        })
    }

     => {
         {
            
            
            
            
            
        }
    }

     => {
        
         => {
            let allMe]
             return allMessages
            allMessages[allMessages.length - 1].action = null
            return allMessages
        })
        ) {
             ? 'proceed' : 'reject'
            

             {
                
                
            } else {
                
            }
        } else {
            han
        }
    }

     => {
        // set message id that is needed for feedback
         {
             => {
                let allMe]
                 {
                    allMessages[allMessages.length - 1].id = data.chatMessageId
                }
                return allMessages
            })
        }

         {
            
        }

         {
            // the response contains the question even if it was in an audio format
            // so if input is empty but the response contains the question, update the user message to show the question
             => {
                let allMe]
                 return allMessages
                allMessages[allMessages.length - 2].message = data.question
                return allMessages
            })
        }

         {
            
             {
                )
            } else {
                
            }
        }
    }

     => {
         return uploads

         {
             => f
             {
                
                f {
                    f
                }
                f

                
                const data = response.data

                f {
                    const content = extractedFileData.content
                    const fileName = extractedFileData.name

                    // find matching name in previews and replace data with content
                     => upl

                     {
                        uploads[uploadIndex] = {
                            ...uploads[uploadIndex],
                            data: content,
                            name: fileName,
                            type: 'file:full'
                        }
                    }
                }
            }
        } el {
             => f

             {
                
                f {
                    f
                }
                f

                awa

                // delay for vector store to be updated
                 => {
                     => )
                }
                awa //TODO: check if embeddings can be retrieved using file name as metadata filter

                upl => {
                    return {
                        ...upload,
                        type: 'file:rag'
                    }
                })
            }
        }
        return uploads
    }

    // Handle form submission
     => {
         e.p

         === '') {
             =>  && .length > 0
            ) {
                return
            }
        }

        let input = userInput

         {
              input = selectedInput

            ) {
                
            }
        } el {
            
                .map(( => `${key}: ${value}`)
                .j
        }

        
        

        let upl => {
            return {
                data: item.data,
                type: item.type,
                name: item.name,
                mime: item.mime
            }
        })

        try {
            upl
        }  {
            han
            return
        }

        
         => 

        // Send user question to Prediction Internal API
        try {
            const params = {
                question: input,
                chatId
            }
             {
                params.form = selectedInput
                delete params.question
            }
             params.uploads = uploads
             params.leadEmail = leadEmail
             params.action = action
             params.humanInput = humanInput

             {
                fet
            } else {
                
                 {
                    const data = response.data

                    up

                    let text = ''
                     text = data.text
                    el text = '```j
                    el

                     => [
                        ...prevMessages,
                        {
                            message: text,
                            id: data?.chatMessageId,
                            sourceDocuments: data?.sourceDocuments,
                            usedTools: data?.usedTools,
                            calledTools: data?.calledTools,
                            fileAnnotations: data?.fileAnnotations,
                            agentReasoning: data?.agentReasoning,
                            agentFlowExecutedData: data?.agentFlowExecutedData,
                            action: data?.action,
                            artifacts: data?.artifacts,
                            type: 'apiMessage',
                            feedback: null
                        }
                    ])

                    
                    
                    
                    
                     => {
                        
                        
                    }, 100)
                }
            }
        }  {
            han
            return
        }
    }

     => {
        const chatId = params.chatId
        const input = params.question
        params.streaming = true
        await fetchEventSource(`${baseURL}/api/v1/internal-prediction/${chatflowid}`, {
            openWhenHidden: true,
            method: 'POST',
            b,
            headers: {
                'Content-Type': 'application/json',
                'x-request-from': 'internal'
            },
            a {
                 === EventSt {
                    //
                }
            },
            a {
                
                 {
                    case 'start':
                         => 
                        break
                    case 'token':
                        up
                        break
                    case 'sourceDocuments':
                        up
                        break
                    case 'usedTools':
                        up
                        break
                    case 'fileAnnotations':
                        up
                        break
                    case 'agentReasoning':
                        up
                        break
                    case 'agentFlowEvent':
                        up
                        break
                    case 'agentFlowExecutedData':
                        up
                        break
                    case 'artifacts':
                        up
                        break
                    case 'action':
                        up
                        break
                    case 'nextAgent':
                        up
                        break
                    case 'nextAgentFlow':
                        up
                        break
                    case 'metadata':
                        up
                        break
                    case 'error':
                        up
                        break
                    case 'abort':
                        ab
                        
                        break
                    case 'end':
                        
                        
                        break
                }
            },
            a {
                
            },
            a {
                
                
                throw err
            }
        })
    }

     => {
        
        
        
         => {
            
            
        }, 100)
    }
    // Prevent blank submissions and allow for multiline input
     => {
        // Check if IME composition is in progress
        const isIMEComposition = e.isComposing || e.keyCode === 229
         {
            e.p
            
            
        } el {
            e.p
            
            
        } el {
             {
                han
            }
        } el {
            e.p
        }
    }

     => {
         {
             {
                 === '/') {
                    return URL.host || ''
                } else {
                    }...`
                }
            } el {
                return URL.host
            }
        }

         {
            }...`
        }

        return ''
    }

     => {
         {
            return fullFileUploadAllowedTypes === '' ? '*' : fullFileUploadAllowedTypes
        }
         ? '*' : fileUploadAllowedTypes || '*'
    }

     => {
        try {
            const response = await axios.post(
                `${baseURL}/api/v1/openai-assistants-file/download`,
                { fileName: fileAnnotation.fileName, chatflowId: chatflowid, chatId: chatId },
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
         {
            return `${baseURL}/api/v1/node-icon/${nodeName}`
        } el {
            return multiagent_supervisorPNG
        } else {
            return multiagent_workerPNG
        }
    }

    // Get chatmessages successful
    u => {
         {
            const chatId = getChatmessageApi.data[0]?.chatId
            
             => {
                const obj = {
                    id: message.id,
                    message: message.content,
                    feedback: message.feedback,
                    type: message.role
                }
                 obj.sourceDocuments = message.sourceDocuments
                 obj.usedTools = message.usedTools
                 obj.fileAnnotations = message.fileAnnotations
                 obj.agentReasoning = message.agentReasoning
                 obj.action = message.action
                 {
                    obj.artifacts = message.artifacts
                     => {
                         {
                            artifact.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatflowid}&chatId=${chatId}&fileName=${artifact.data.replace(
                                'FILE-STORAGE::',
                                ''
                            )}`
                        }
                    })
                }
                 {
                    obj.fileUploads = message.fileUploads
                     => {
                         {
                            file.data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatflowid}&chatId=${chatId}&fileName=${file.name}`
                        }
                    })
                }
                 
                
                    
                return obj
            })
             => 
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const chatId = getAllExecutionsApi.data[0]?.sessionId
            
             => {
                const executionData =
                    type : execution.executionData
                const obj = {
                    id: execution.id,
                    agentFlow: executionData
                }
                return obj
            })
             => 
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Get chatflow streaming capability
    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    // Get chatflow uploads capability
    u => {
         {
            
            
            
             => all.j)
             => all.j)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
             {
                let n.nodes ?? []
                 => n
                 {
                    const startInputType = startNode.data.inputs?.startInputType
                    

                    const formInputTypes = startNode.data.inputs?.formInputTypes
                     {
                        f {
                             {
                                f => ({
                                    label: option.option,
                                    name: option.option
                                }))
                            }
                        }
                        
                        setFormInputsData({
                            id: 'formInput',
                            inputs: {},
                            inputParams: formInputTypes
                        })
                        
                        
                    }

                    getAllExe
                }
            }

            ) {
                let 
                 {
                    let inputFields = []
                    Obje.f => {
                         {
                            
                        }
                    })
                     => f)
                }
                 {
                    
                }

                 {
                    
                    .lea {
                         => {
                            const leadCaptureMessage = {
                                message: '',
                                type: 'leadCaptureMessage'
                            }

                            return [...prevMessages, leadCaptureMessage]
                        })
                    }
                }

                 {
                    
                }

                 {
                    
                     {
                        
                    }
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        } el {
            
        } else {
            
        }
    }, 

    // Auto scroll chat to bottom
    u => {
        
    }, 

    u => {
         {
             => {
                
            }, 100)
        }
    }, 

    u => {
         {
            // API request
            getChatme
            getI
            getAll
            getChatfl

            // Add a small delay to ensure content is rendered before scrolling
             => {
                
            }, 100)

            
            

            // leads
            ?.lead
             {
                
                
            }
        }

         => {
            
            
            
            setMessages([
                {
                    message: 'Hi there! How can I help?',
                    type: 'apiMessage'
                }
            ])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        // wait for audio recording to load and then send
         => .length > 0
         {
            
            
            han
        }
        // eslint-disable-next-line
    }, 

    u => {
         {
            const lastMessage = messages[messages.length - 1]
             {
                ) {
                    
                }
                 {
                    
                    
                }
            } el {
                
            }
        }
    }, 

     => {
        try {
            awa
        }  {
            
        }
    }

     => {
        const body = {
            chatflowid,
            chatId,
            messageId,
            rating: 'THUMBS_UP',
            content: ''
        }
        
         {
            const data = result.data
            let id = ''
             id = data.id
             => {
                ]
                 => {
                     {
                        message.feedback = {
                            rating: 'THUMBS_UP'
                        }
                    }
                    return message
                })
            })
            
            
        }
    }

     => {
        const body = {
            chatflowid,
            chatId,
            messageId,
            rating: 'THUMBS_DOWN',
            content: ''
        }
        
         {
            const data = result.data
            let id = ''
             id = data.id
             => {
                ]
                 => {
                     {
                        message.feedback = {
                            rating: 'THUMBS_DOWN'
                        }
                    }
                    return message
                })
            })
            
            
        }
    }

     => {
        const body = {
            content: text
        }
        
         {
            
            
        }
    }

     => {
         event.p
        

        const body = {
            chatflowid,
            chatId,
            name: leadName,
            email: leadEmail,
            phone: leadPhone
        }

        
         {
            const data = result.data
            
            
            
            
             => {
                let allMe]
                 return allMessages
                allMessages[allMessages.length - 1].message =
                    leadsConfig.successMessage || 'Thank you for submitting your contact information.'
                return allMessages
            })
        }
        
    }

     => {
        return (
            loading ||
            !chatflowid ||
            (lea ||
            (me.length > 0)
        )
    }

     => {
        ) {
            return (
                <ImageButton
                    focusRipple
                    style={{
                        width: '48px',
                        height: '48px',
                        marginRight: '10px',
                        flex: '0 0 auto'
                    }}
                    }
                     => han}
                >
                    <ImageS` }} />
                    <ImageBackdrop className='MuiImageBackdrop-root' />
                    <ImageMarked className='MuiImageMarked-root'>
                        <IconTrash size={20} color='white' />
                    </ImageMarked>
                </ImageButton>
            )
        } el) {
            return (
                <Card
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        height: '48px',
                        width: isDialog ? ps?.current?.offsetWidth / 4 : ps?.current?.offsetWidth / 2,
                        p: 0.5,
                        mr: 1,
                        backgroundColor: theme.palette.grey[500],
                        flex: '0 0 auto'
                    }}
                    variant='outlined'
                >
                    <CardMedia component='audio' sx={{ color: 'transparent' }} controls src={item.data} />
                    <I}  => han} size='small'>
                        <IconTrash size={20} color='white' />
                    </IconButton>
                </Card>
            )
        } else {
            return (
                <CardWithDeleteOverlay
                    }
                    item={item}
                    customization={customization}
                     => han}
                />
            )
        }
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

     => {
        
        f {
            const artifact = newArtifacts[i]
            ) {
                const data = artifact.data
                newArtifacts[i].data = `${baseURL}/api/v1/get-upload-file?chatflowId=${chatflowid}&chatId=${chatId}&fileName=${data.replace(
                    'FILE-STORAGE::',
                    ''
                )}`
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
            return (
                <MemoizedReactMarkdown chatflowid={chatflowid} isFullWidth={isDialog}>
                    {item.data}
                </MemoizedReactMarkdown>
            )
        }
    }

     {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    backgroundColor: theme.palette.background.paper
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        t'
                    }}
                >
                    <CircularProgress />
                </Box>
            </Box>
        )
    }

     {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    backgroundColor: theme.palette.background.paper
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            t',
                            width: '100%',
                            maxWidth: '600px',
                            maxHeight: '90%', // Limit height to 90% of parent
                            p: 3,
                            backgroundColor: customization.isDarkMode
                                ? 
                                : theme.palette.background.paper,
                            b' : theme.shadows[3],
                            borderRadius: 2,
                            overflowY: 'auto' // Enable vertical scrolling if content overflows
                        }}
                    >
                        <Typography variant='h4' sx={{ mb: 1, textAlign: 'center' }}>
                            {formTitle || 'Please Fill Out The Form'}
                        </Typography>
                        <Typography variant='body1' sx={{ mb: 3, textAlign: 'center', color: theme.palette.text.secondary }}>
                            {formDescription || 'Complete all fields below to continue'}
                        </Typography>

                        {/* Form inputs */}
                        <Box sx={{ mb: 3 }}>
                            {formInputParams &&
                                f => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <NodeInputHandler
                                            inputParam={inputParam}
                                            data={formInputsData}
                                            isAdditionalParams={true}
                                             => {
                                                 => ({
                                                    ...prev,
                                                    inputs: {
                                                        ...prev.inputs,
                                                        [inputParam.name]: newValue
                                                    }
                                                }))
                                            }}
                                        />
                                    </Box>
                                ))}
                        </Box>

                        <Button
                            variant='contained'
                            fullWidth
                            disabled={loading}
                             => han}
                            sx={{
                                mb: 2,
                                borderRadius: 20,
                                ba'
                            }}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <div onDragEnter={handleDrag}>
            {isDragActive && (
                <div
                    className='image-dropzone'
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragEnd={handleDrag}
                    onDrop={handleDrop}
                />
            )}
            {isDragActive &&
                (getAll && (
                    <Box className='drop-overlay'>
                        <Typography variant='h2'>Drop here to upload</Typography>
                        {[
                            ...getAllowChatFlowUploads.data.imgUploadSizeAndTypes,
                            ...getAllowChatFlowUploads.data.fileUploadSizeAndTypes
                        ].map((all => {
                            return (
                                <>
                                    <Typ}</Typography>
                                    {allowed.maxUploadSize && (
                                        <Typography variant='subtitle1'>Max Allowed Size: {allowed.maxUploadSize} MB</Typography>
                                    )}
                                </>
                            )
                        })}
                    </Box>
                )}
            <div ref={ps} className={`${isDialog ? 'cloud-dialog' : 'cloud'}`}>
                <div id='messagelist' className={'messagelist'}>
                    {messages &&
                        me => {
                            return (
                                // The latest message sent by the user will be animated while waiting for a response
                                <Box
                                    sx={{
                                        background:
                                            message.type === 'apiMessage' || message.type === 'leadCaptureMessage'
                                                ? theme.palette.asyncSelect.main
                                                : ''
                                    }}
                                    key={index}
                                    style={{ display: 'flex' }}
                                    className={
                                        message.type === 'userMessage' && loading && index === messages.length - 1
                                            ? customization.isDarkMode
                                                ? 'usermessagewaiting-dark'
                                                : 'usermessagewaiting-light'
                                            : message.type === 'usermessagewaiting'
                                            ? 'apimessage'
                                            : 'usermessage'
                                    }
                                >
                                    {/* Display the correct icon depending on the message type */}
                                    {message.type === 'apiMessage' || message.type === 'leadCaptureMessage' ? (
                                        <img src={robotPNG} alt='AI' width='30' height='30' className='boticon' />
                                    ) : (
                                        <img src={userPNG} alt='Me' width='30' height='30' className='usericon' />
                                    )}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            width: '100%'
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
                                        {message.agentReasoning && message.agentReasoning.length > 0 && (
                                            <div style={{ display: 'block', flexDirection: 'row', width: '100%' }}>
                                                {me => (
                                                    <AgentReasoningCard
                                                        key={index}
                                                        agent={agent}
                                                        index={index}
                                                        customization={customization}
                                                        chatflowid={chatflowid}
                                                        isDialog={isDialog}
                                                        onSourceDialogClick={onSourceDialogClick}
                                                        renderArtifacts={renderArtifacts}
                                                        agentReasoningArtifacts={agentReasoningArtifacts}
                                                        getAgentIcon={getAgentIcon}
                                                        removeDuplicateURL={removeDuplicateURL}
                                                        isValidURL={isValidURL}
                                                        onURLClick={onURLClick}
                                                        getLabel={getLabel}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {message.agentFlowExecutedData &&
                                            A &&
                                            message.agentFlowExecutedData.length > 0 && (
                                                <AgentExecutedDataCard
                                                    status={message.agentFlowEventStatus}
                                                    execution={message.agentFlowExecutedData}
                                                    agentflowId={chatflowid}
                                                    sessionId={chatId}
                                                />
                                            )}
                                        {message.usedTools && (
                                            <div
                                                style={{
                                                    display: 'block',
                                                    flexDirection: 'row',
                                                    width: '100%'
                                                }}
                                            >
                                                {me => {
                                                    return tool ? (
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
                                                                    color={tool.error ? theme.palette.error.main : undefined}
                                                                />
                                                            }
                                                             => }
                                                        />
                                                    ) : null
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
                                                    }</> : null
                                                })}
                                            </div>
                                        )}
                                        <div className='markdownanswer'>
                                            {message.type === 'leadCaptureMessage' &&
                                            ?.lead &&
                                            leadsConfig.status ? (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: 2,
                                                        marginTop: 2
                                                    }}
                                                >
                                                    <Typography sx={{ lineHeight: '1.5rem', whiteSpace: 'pre-line' }}>
                                                        {leadsConfig.title || 'Let us know where we can reach you:'}
                                                    </Typography>
                                                    <form
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '8px',
                                                            width: isDialog ? '50%' : '100%'
                                                        }}
                                                        onSubmit={handleLeadCaptureSubmit}
                                                    >
                                                        {leadsConfig.name && (
                                                            <OutlinedInput
                                                                id='leadName'
                                                                type='text'
                                                                fullWidth
                                                                placeholder='Name'
                                                                name='leadName'
                                                                value={leadName}
                                                                // eslint-disable-next-line
                                                                autoFocus={true}
                                                                 => }
                                                            />
                                                        )}
                                                        {leadsConfig.email && (
                                                            <OutlinedInput
                                                                id='leadEmail'
                                                                type='email'
                                                                fullWidth
                                                                placeholder='Email Address'
                                                                name='leadEmail'
                                                                value={leadEmail}
                                                                 => }
                                                            />
                                                        )}
                                                        {leadsConfig.phone && (
                                                            <OutlinedInput
                                                                id='leadPhone'
                                                                type='number'
                                                                fullWidth
                                                                placeholder='Phone Number'
                                                                name='leadPhone'
                                                                value={leadPhone}
                                                                 => }
                                                            />
                                                        )}
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                            }}
                                                        >
                                                            <Button
                                                                variant='outlined'
                                                                fullWidth
                                                                type='submit'
                                                                sx={{ borderRadius: '20px' }}
                                                            >
                                                                {isLeadSaving ? 'Saving...' : 'Save'}
                                                            </Button>
                                                        </Box>
                                                    </form>
                                                </Box>
                                            ) : (
                                                <>
                                                    <MemoizedReactMarkdown chatflowid={chatflowid} isFullWidth={isDialog}>
                                                        {message.message}
                                                    </MemoizedReactMarkdown>
                                                </>
                                            )}
                                        </div>
                                        {message.fileAnnotations && (
                                            <div
                                                style={{
                                                    display: 'block',
                                                    flexDirection: 'row',
                                                    width: '100%',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                {me => {
                                                    return (
                                                        <Button
                                                            sx={{
                                                                fontSize: '0.85rem',
                                                                textTransform: 'none',
                                                                mb: 1
                                                            }}
                                                            key={index}
                                                            variant='outlined'
                                                             => }
                                                            endIcon={<IconDownload color={theme.palette.primary.main} />}
                                                        >
                                                            {fileAnnotation.fileName}
                                                        </Button>
                                                    )
                                                })}
                                            </div>
                                        )}
                                        {message.sourceDocuments && (
                                            <div
                                                style={{
                                                    display: 'block',
                                                    flexDirection: 'row',
                                                    width: '100%',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                {.map(( => {
                                                    const URL =
                                                        source.metadata && source.metadata.source
                                                            ? 
                                                            : undefined
                                                    return (
                                                        <Chip
                                                            size='small'
                                                            key={index}
                                                            label={getLabel(URL,  || ''}
                                                            component='a'
                                                            sx={{ mr: 1, mb: 1 }}
                                                            variant='outlined'
                                                            clickable
                                                             =>
                                                                URL ?  : 
                                                            }
                                                        />
                                                    )
                                                })}
                                            </div>
                                        )}
                                        {message.action && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    flexDirection: 'row',
                                                    width: '100%',
                                                    gap: '8px',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                {(me.map((elem,  => {
                                                    return (
                                                        <>
                                                            {(elem.type === 'app ||
                                                            elem.type === 'agentflowv2-approve-button' ? (
                                                                <Button
                                                                    sx={{
                                                                        width: 'max-content',
                                                                        borderRadius: '20px',
                                                                        background: customization.isDarkMode ? 'transparent' : 'white'
                                                                    }}
                                                                    variant='outlined'
                                                                    color='success'
                                                                    key={index}
                                                                    startIcon={<IconCheck />}
                                                                     => han}
                                                                >
                                                                    {elem.label}
                                                                </Button>
                                                            ) : (elem.type === ' ||
                                                              elem.type === 'agentflowv2-reject-button' ? (
                                                                <Button
                                                                    sx={{
                                                                        width: 'max-content',
                                                                        borderRadius: '20px',
                                                                        background: customization.isDarkMode ? 'transparent' : 'white'
                                                                    }}
                                                                    variant='outlined'
                                                                    color='error'
                                                                    key={index}
                                                                    startIcon={<IconX />}
                                                                     => han}
                                                                >
                                                                    {elem.label}
                                                                </Button>
                                                            ) : (
                                                                <Button
                                                                    sx={{ width: 'max-content', borderRadius: '20px', background: 'white' }}
                                                                    variant='outlined'
                                                                    key={index}
                                                                     => han}
                                                                >
                                                                    {elem.label}
                                                                </Button>
                                                            )}
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        )}
                                        {message.type === 'apiMessage' && message.id && chatFeedbackStatus ? (
                                            <>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'start',
                                                        gap: 1
                                                    }}
                                                >
                                                    <C => } />
                                                    {!message.feedback ||
                                                    message.feedback.rating === '' ||
                                                    message.feedback.rating === 'THUMBS_UP' ? (
                                                        <ThumbsUpButton
                                                            isDisabled={message.feedback && message.feedback.rating === 'THUMBS_UP'}
                                                            rating={message.feedback ? message.feedback.rating : ''}
                                                             => }
                                                        />
                                                    ) : null}
                                                    {!message.feedback ||
                                                    message.feedback.rating === '' ||
                                                    message.feedback.rating === 'THUMBS_DOWN' ? (
                                                        <ThumbsDownButton
                                                            isDisabled={message.feedback && message.feedback.rating === 'THUMBS_DOWN'}
                                                            rating={message.feedback ? message.feedback.rating : ''}
                                                             => }
                                                        />
                                                    ) : null}
                                                </Box>
                                            </>
                                        ) : null}
                                    </div>
                                </Box>
                            )
                        })}
                </div>
            </div>

            {messages && messages.length === 1 && starterPrompts.length > 0 && (
                <div style={{ position: 'relative' }}>
                    <StarterPromptsCard
                        sx={{ bottom: previews && previews.length > 0 ? 70 : 0 }}
                        starterPrompts={starterPrompts || []}
                        onPromptClick={handlePromptClick}
                        isGrid={isDialog}
                    />
                </div>
            )}

            {messages && messages.length > 2 && followUpPromptsStatus && followUpPrompts.length > 0 && (
                <>
                    <Divider sx={{ width: '100%' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', pt: 1.5 }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', px: 1.5, gap: 0.5 }}>
                            <IconSparkles size={12} />
                            <Typography sx={{ fontSize: '0.75rem' }} variant='body2'>
                                Try these prompts
                            </Typography>
                        </Stack>
                        <FollowUpPromptsCard
                            sx={{ bottom: previews && previews.length > 0 ? 70 : 0 }}
                            followUpPrompts={followUpPrompts || []}
                            onPromptClick={handleFollowUpPromptClick}
                            isGrid={isDialog}
                        />
                    </Box>
                </>
            )}

            <Divider sx={{ width: '100%' }} />

            <div className='center'>
                {previews && previews.length > 0 && (
                    <Box sx={{ width: '100%', mb: 1.5, display: 'flex', alignItems: 'center' }}>
                        {p => (
                            <F}</Fragment>
                        ))}
                    </Box>
                )}
                {isRecording ? (
                    <>
                        {recordingNotSupported ? (
                            <div className='overlay'>
                                <div className='browser-not-supporting-audio-recording-box'>
                                    <Typography variant='body1'>
                                        To record audio, use modern browsers like Chrome or Firefox that support audio recording.
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        color='error'
                                        size='small'
                                        type='button'
                                         => }
                                    >
                                        Okay
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '54px',
                                    px: 2,
                                    border: '1px solid',
                                    borderRadius: 3,
                                    backgroundColor: customization.isDarkMode ? '#32353b' : '#fafafa',
                                    b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <div className='recording-elapsed-time'>
                                    <span className='red-recording-dot'>
                                        <IconCircleDot />
                                    </span>
                                    <Typography id='elapsed-time'>00:00</Typography>
                                    {isLoadingRecording && <Typography ml={1.5}>Sending...</Typography>}
                                </div>
                                <div className='recording-control-buttons-container'>
                                    <IconButton onClick={onRecordingCancelled} size='small'>
                                        <IconX
                                            color={loading || !chatflowid ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                        />
                                    </IconButton>
                                    <IconButton onClick={onRecordingStopped} size='small'>
                                        <IconSend
                                            color={loading || !chatflowid ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                        />
                                    </IconButton>
                                </div>
                            </Box>
                        )}
                    </>
                ) : (
                    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <OutlinedInput
                            inputRef={inputRef}
                            // eslint-disable-next-line
                            autoFocus
                            sx={{ width: '100%' }}
                            }
                            onKeyDown={handleEnter}
                            id='userInput'
                            name='userInput'
                            placeholder={loading ? 'Waiting for response...' : 'Type your question...'}
                            value={userInput}
                            onChange={onChange}
                            multiline={true}
                            maxRows={isDialog ? 7 : 2}
                            startAdornment={
                                <>
                                    {isChatFlowAvailableForImageUploads && !isChatFlowAvailableForFileUploads && (
                                        <InputAdornment position='start' sx={{ ml: 2 }}>
                                            <IconButton
                                                onClick={handleImageUploadClick}
                                                type='button'
                                                }
                                                edge='start'
                                            >
                                                <IconPhotoPlus
                                                     ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                    {!isChatFlowAvailableForImageUploads && isChatFlowAvailableForFileUploads && (
                                        <InputAdornment position='start' sx={{ ml: 2 }}>
                                            <IconButton
                                                onClick={handleFileUploadClick}
                                                type='button'
                                                }
                                                edge='start'
                                            >
                                                <IconPaperclip
                                                     ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                    {isChatFlowAvailableForImageUploads && isChatFlowAvailableForFileUploads && (
                                        <InputAdornment position='start' sx={{ ml: 2 }}>
                                            <IconButton
                                                onClick={handleImageUploadClick}
                                                type='button'
                                                }
                                                edge='start'
                                            >
                                                <IconPhotoPlus
                                                     ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                                />
                                            </IconButton>
                                            <IconButton
                                                sx={{ ml: 0 }}
                                                onClick={handleFileUploadClick}
                                                type='button'
                                                }
                                                edge='start'
                                            >
                                                <IconPaperclip
                                                     ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                    {!isChatFlowAvailableForImageUploads && !isChatFlowAvailableForFileUploads && <Box sx={{ pl: 1 }} />}
                                </>
                            }
                            endAdornment={
                                <>
                                    {isChatFlowAvailableForSpeech && (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                 => }
                                                type='button'
                                                }
                                                edge='end'
                                            >
                                                <IconMicrophone
                                                    className={'start-recording-button'}
                                                     ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'}
                                                />
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                    {!isAgentCanvas && (
                                        <InputAdornment position='end' sx={{ paddingRight: '15px' }}>
                                            <I} edge='end'>
                                                {loading ? (
                                                    <div>
                                                        <CircularProgress color='inherit' size={20} />
                                                    </div>
                                                ) : (
                                                    // Send icon SVG in input field
                                                    <IconSend
                                                        color={
                                                            getInput ? '#9e9e9e' : customization.isDarkMode ? 'white' : '#1e88e5'
                                                        }
                                                    />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )}
                                    {isAgentCanvas && (
                                        <>
                                            {!loading && (
                                                <InputAdornment position='end' sx={{ paddingRight: '15px' }}>
                                                    <I} edge='end'>
                                                        <IconSend
                                                            color={
                                                                getInput
                                                                    ? '#9e9e9e'
                                                                    : customization.isDarkMode
                                                                    ? 'white'
                                                                    : '#1e88e5'
                                                            }
                                                        />
                                                    </IconButton>
                                                </InputAdornment>
                                            )}
                                            {loading && (
                                                <InputAdornment position='end' sx={{ padding: '15px', mr: 1 }}>
                                                    <IconButton
                                                        edge='end'
                                                        title={isMessageStopping ? 'Stopping...' : 'Stop'}
                                                        style={{ border: !isMessageStopping ? '2px solid red' : 'none' }}
                                                         => han}
                                                        disabled={isMessageStopping}
                                                    >
                                                        {isMessageStopping ? (
                                                            <div>
                                                                <CircularProgress color='error' size={20} />
                                                            </div>
                                                        ) : (
                                                            <IconSquareFilled size={15} color='red' />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            )}
                                        </>
                                    )}
                                </>
                            }
                        />
                        {isChatFlowAvailableForImageUploads && (
                            <input
                                style={{ display: 'none' }}
                                multiple
                                ref={imgUploadRef}
                                type='file'
                                onChange={handleFileChange}
                                accept={imageUploadAllowedTypes || '*'}
                            />
                        )}
                        {isChatFlowAvailableForFileUploads && (
                            <input
                                style={{ display: 'none' }}
                                multiple
                                ref={fileUploadRef}
                                type='file'
                                onChange={handleFileChange}
                                a}
                            />
                        )}
                    </form>
                )}
            </div>
            <S => } />
            <ChatFeedbackContentDialog
                show={showFeedbackContentDialog}
                 => }
                onConfirm={submitFeedbackContent}
            />
            <Dialog
                maxWidth='md'
                fullWidth
                open={openFeedbackDialog}
                 => {
                    
                    
                    
                }}
            >
                <DialogTitle variant='h5'>Provide Feedback</DialogTitle>
                <DialogContent>
                    <TextField
                        // eslint-disable-next-line
                        autoFocus
                        margin='dense'
                        label='Feedback'
                        fullWidth
                        multiline
                        rows={4}
                        value={feedback}
                         => }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmitFeedback}>Cancel</Button>
                    <Button onClick={handleSubmitFeedback} variant='contained'>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

ChatMessage.propTypes = {
    open: PropTypes.bool,
    chatflowid: PropTypes.string,
    isAgentCanvas: PropTypes.bool,
    isDialog: PropTypes.bool,
    previews: PropTypes.array,
    setPreviews: PropTypes.func
}

exp
