import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import { v4 as uuidv4 } from 'uuid'

import {
    Chip,
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    OutlinedInput
} from '@mui/material'

import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'
import CredentialInputHandler from '@/views/canvas/CredentialInputHandler'
import { File } from '@/ui-component/file/File'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import DeleteConfirmDialog from './DeleteConfirmDialog'
import AssistantVectorStoreDialog from './AssistantVectorStoreDialog'
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'

// Icons
import { IconX, IconPlus } from '@tabler/icons-react'

// API
import assistantsApi from '@/api/assistants'

// Hooks
import useApi from '@/hooks/useApi'

// utils
import useNotifier from '@/utils/useNotifier'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { maxScroll } from '@/store/constant'

const assistantAvailableModels = [
    {
        label: 'gpt-4.1',
        name: 'gpt-4.1'
    },
    {
        label: 'gpt-4.1-mini',
        name: 'gpt-4.1-mini'
    },
    {
        label: 'gpt-4.1-nano',
        name: 'gpt-4.1-nano'
    },
    {
        label: 'gpt-4.5-preview',
        name: 'gpt-4.5-preview'
    },
    {
        label: 'gpt-4o-mini',
        name: 'gpt-4o-mini'
    },
    {
        label: 'gpt-4o',
        name: 'gpt-4o'
    },
    {
        label: 'gpt-4-turbo',
        name: 'gpt-4-turbo'
    },
    {
        label: 'gpt-4-turbo-preview',
        name: 'gpt-4-turbo-preview'
    },
    {
        label: 'gpt-4-1106-preview',
        name: 'gpt-4-1106-preview'
    },
    {
        label: 'gpt-4-0613',
        name: 'gpt-4-0613'
    },
    {
        label: 'gpt-4',
        name: 'gpt-4'
    },
    {
        label: 'gpt-3.5-turbo',
        name: 'gpt-3.5-turbo'
    },
    {
        label: 'gpt-3.5-turbo-0125',
        name: 'gpt-3.5-turbo-0125'
    },
    {
        label: 'gpt-3.5-turbo-1106',
        name: 'gpt-3.5-turbo-1106'
    },
    {
        label: 'gpt-3.5-turbo-0613',
        name: 'gpt-3.5-turbo-0613'
    },
    {
        label: 'gpt-3.5-turbo-16k',
        name: 'gpt-3.5-turbo-16k'
    },
    {
        label: 'gpt-3.5-turbo-16k-0613',
        name: 'gpt-3.5-turbo-16k-0613'
    }
]

 => {
    
    u
    
     => )
     => )
     => 
    

    
    

    
    
    
    
    }`)
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    u => {
         
        el
         => 
    }, 

    u => {
         {
            
            
            

            
            
            
            
            
            
            
            
            
            
        }
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            let errMsg = 'Internal Server Error'
            let error = getAssistantObjApi.error
             {
                errMsg = typeof error.response.data === 'object' ? error.response.data.message : error.response.data
            }
            enqueueSnackbar({
                message: `Failed to get assistant: ${errMsg}`,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const error = getSpecificAssistantApi.error
            let errMsg = ''
             {
                errMsg = typeof error.response.data === 'object' ? error.response.data.message : error.response.data
            }
            enqueueSnackbar({
                message: `Failed to get assistant: ${errMsg}`,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            // When assistant dialog is opened from Assistants dashboard
            
            
            

            
            
            
            
            
            
            
            
            
            
        } el {
            // When assistant dialog is opened from OpenAIAssistant node in canvas
            getSpe
        } el {
            // When assistant dialog is to add new assistant from existing
            
            }`)
            

            getA
        } el {
            // When assistant dialog is to add a blank new assistant
            
            }`)
            

            
            
            
            
            
            
            
            
            
            
            
        }

         => {
            
            }`)
            

            
            
            
            
            
            
            
            
            
            
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        
        
        
        
        
        
        
        

        let tools = []
         {
            f {
                t
            }
        }
        
    }

     => {
        const dialogProp = {
            title: `Edit ${vectorStoreObject.name ? vectorStoreObject.name : vectorStoreObject.id}`,
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Save',
            data: vectorStoreObject,
            credential: assistantCredential
        }
        
        
    }

     => {
        const dialogProp = {
            title: `Add Vector Store`,
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            credential: assistantCredential
        }
        
        
    }

     => {
        
        try {
            const assistantDetails = {
                id: openAIAssistantId,
                name: assistantName,
                description: assistantDesc,
                model: assistantModel,
                instructions: assistantInstructions,
                tempe : null,
                t : null,
                tools: assistantTools,
                tool_resources: toolResources
            }
            const obj = {
                ,
                iconSrc: assistantIcon,
                credential: assistantCredential,
                type: 'OPENAI'
            }

            
             {
                enqueueSnackbar({
                    message: 'New Assistant added',
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
                message: `Failed to add new Assistant: ${
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
            const assistantDetails = {
                name: assistantName,
                description: assistantDesc,
                model: assistantModel,
                instructions: assistantInstructions,
                tempe : null,
                t : null,
                tools: assistantTools,
                tool_resources: toolResources
            }
            const obj = {
                ,
                iconSrc: assistantIcon,
                credential: assistantCredential
            }
            
             {
                enqueueSnackbar({
                    message: 'Assistant saved',
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
                message: `Failed to save Assistant: ${
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
                    message: 'Assistant successfully synced!',
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
                message: `Failed to sync Assistant: ${
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
            const vectorStoreId = toolResources.file_search?.vector_store_ids?.length ? toolResources.file_search.vector_store_ids[0] : ''
            
             {
                enqueueSnackbar({
                    message: 'File uploaded successfully!',
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

                const uploadedFiles = uploadResp.data
                const existingFiles = toolResources?.file_search.files ?? []

                setToolResources({
                    ...toolResources,
                    file_search: {
                        ...toolResources?.file_search,
                        files: [...existingFiles, ...uploadedFiles]
                    }
                })
            }
            
        }  {
            enqueueSnackbar({
                message: `Failed to upload file: ${
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
                    message: 'File uploaded successfully!',
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

                const uploadedFiles = uploadResp.data
                const existingFiles = toolResources?.code_interpreter?.files ?? []
                const existingFileIds = toolResources?.code_interpreter?.file_ids ?? []

                setToolResources({
                    ...toolResources,
                    code_interpreter: {
                        ...toolResources?.code_interpreter,
                        files: [...existingFiles, ...uploadedFiles],
                        f => f]
                    }
                })
            }
            
        }  {
            enqueueSnackbar({
                message: `Failed to upload file: ${
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
        setToolResources({
            ...toolResources,
            file_search: {
                files: [],
                vector_store_object: null,
                vector_store_ids: []
            }
        })
    }

     => {
        setDeleteDialogProps({
            title: `Delete Assistant`,
            description: `Select delete method for ${assistantName}`,
            cancelButtonName: 'Cancel'
        })
        
    }

     => {
        
        try {
            
             {
                enqueueSnackbar({
                    message: 'Assistant deleted',
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
                message: `Failed to delete Assistant: ${
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
         {
            setToolResources({
                ...toolResources,
                code_interpreter: {
                    ...toolResources.code_interpreter,
                    f => f,
                    f => f
                }
            })
        } el {
            // Remove from toolResources
            setToolResources({
                ...toolResources,
                file_search: {
                    ...toolResources.file_search,
                    f => f
                }
            })
            // Remove files from vector store
            try {
                const vectorStoreId = toolResources.file_search?.vector_store_ids?.length
                    ? toolResources.file_search.vector_store_ids[0]
                    : ''
                awa
            }  {
                
            }
        }
    }

    const component = show ? (
        <Dialog
            fullWidth
            maxWidth='md'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem', p: 3, pb: 0 }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent
                ref={dialogRef}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxHeight: '75vh', position: 'relative', px: 3, pb: 3 }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
                    <Box>
                        <Stack sx={{ position: 'relative' }} direction='row'>
                            <Typography variant='overline'>
                                OpenAI Credential
                                <span style={{ color: 'red' }}>&nbsp;*</span>
                            </Typography>
                        </Stack>
                        <CredentialInputHandler
                            key={assistantCredential}
                            data={assistantCredential ? { credential: assistantCredential } : {}}
                            inputParam={{
                                label: 'Connect Credential',
                                name: 'credential',
                                type: 'credential',
                                credentialNames: ['openAIApi']
                            }}
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative' }} direction='row'>
                            <Typography variant='overline'>
                                Assistant Model
                                <span style={{ color: 'red' }}>&nbsp;*</span>
                            </Typography>
                        </Stack>
                        <Dropdown
                            key={assistantModel}
                            name={assistantModel}
                            options={assistantAvailableModels}
                             => }
                            value={assistantModel ?? 'choose an option'}
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                            <Typography variant='overline'>Assistant Name</Typography>
                            <TooltipWithParser title={'The name of the assistant. The maximum length is 256 characters.'} />
                        </Stack>
                        <OutlinedInput
                            id='assistantName'
                            type='string'
                            size='small'
                            fullWidth
                            placeholder='My New Assistant'
                            value={assistantName}
                            name='assistantName'
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                            <Typography variant='overline'>Assistant Description</Typography>
                            <TooltipWithParser title={'The description of the assistant. The maximum length is 512 characters.'} />
                        </Stack>
                        <OutlinedInput
                            id='assistantDesc'
                            type='string'
                            size='small'
                            fullWidth
                            placeholder='Description of what the Assistant does'
                            multiline={true}
                            rows={3}
                            value={assistantDesc}
                            name='assistantDesc'
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative' }} direction='row'>
                            <Typography variant='overline'>Assistant Icon Src</Typography>
                        </Stack>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                backgroundColor: 'white'
                            }}
                        >
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: 5,
                                    borderRadius: '50%',
                                    objectFit: 'contain'
                                }}
                                alt={assistantName}
                                src={assistantIcon}
                            />
                        </div>
                        <OutlinedInput
                            id='assistantIcon'
                            type='string'
                            size='small'
                            fullWidth
                            pla}`}
                            value={assistantIcon}
                            name='assistantIcon'
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                            <Typography variant='overline'>Assistant Instruction</Typography>
                            <TooltipWithParser
                                title={'The system instructions that the assistant uses. The maximum length is 32768 characters.'}
                            />
                        </Stack>
                        <OutlinedInput
                            id='assistantInstructions'
                            type='string'
                            size='small'
                            fullWidth
                            placeholder='You are a personal math tutor. When asked a question, write and run Python code to answer the question.'
                            multiline={true}
                            rows={3}
                            value={assistantInstructions}
                            name='assistantInstructions'
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                            <Typography variant='overline'>Assistant Temperature</Typography>
                            <TooltipWithParser
                                title={
                                    'Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.'
                                }
                            />
                        </Stack>
                        <OutlinedInput
                            id='assistantTemp'
                            type='number'
                            size='small'
                            fullWidth
                            value={temperature}
                            name='assistantTemp'
                             => }
                        />
                    </Box>
                    <Box>
                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                            <Typography variant='overline'>Assistant Top P</Typography>
                            <TooltipWithParser
                                title={
                                    'Controls diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered.'
                                }
                            />
                        </Stack>
                        <OutlinedInput
                            id='assistantTopP'
                            type='number'
                            fullWidth
                            size='small'
                            value={topP}
                            name='assistantTopP'
                            min='0'
                            max='1'
                             => }
                        />
                    </Box>
                    {assistantCredential && (
                        <>
                            <Box>
                                <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                    <Typography variant='overline'>Assistant Tools</Typography>
                                    <TooltipWithParser title='A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant.' />
                                </Stack>
                                <MultiDropdown
                                    key={JSON.}
                                    name={JSON.}
                                    options={[
                                        {
                                            label: 'Code Interpreter',
                                            name: 'code_interpreter'
                                        },
                                        {
                                            label: 'File Search',
                                            name: 'file_search'
                                        }
                                    ]}
                                     => {
                                        newValue ? ) : 
                                         => {
                                            
                                        }, 100)
                                    }}
                                    value={assistantTools ?? 'choose an option'}
                                />
                            </Box>
                            <Box>
                                {a && (
                                    <Card sx={{ mb: 2, border: '1px solid #e0e0e0', borderRadius: `${customization.borderRadius}px` }}>
                                        <CardContent>
                                            <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                <Typography variant='overline'>Code Interpreter Files</Typography>
                                                <TooltipWithParser title='Code Interpreter enables the assistant to write and run code. This tool can process files with diverse data and formatting, and generate files such as graphs' />
                                            </Stack>
                                            {toolResources?.code_interpreter?.files?.length > 0 && (
                                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                    {t => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                width: 'max-content',
                                                                height: 'max-content',
                                                                borderRadius: 15,
                                                                ba',
                                                                paddingLeft: 15,
                                                                paddingRight: 15,
                                                                paddingTop: 5,
                                                                paddingBottom: 5,
                                                                marginRight: 10,
                                                                marginBottom: 10
                                                            }}
                                                        >
                                                            <', marginRight: 10 }}>
                                                                {file.filename}
                                                            </span>
                                                            <IconButton
                                                                sx={{ height: 15, width: 15, p: 0 }}
                                                                 => }
                                                            >
                                                                <IconX />
                                                            </IconButton>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            <File
                                                key={uploadCodeInterpreterFiles}
                                                fileType='*'
                                                formDataUpload={true}
                                                value={uploadCodeInterpreterFiles ?? 'Choose a file to upload'}
                                                 => }
                                                 => upl}
                                            />
                                        </CardContent>
                                    </Card>
                                )}
                                {a && (
                                    <Card sx={{ mb: 2, border: '1px solid #e0e0e0', borderRadius: `${customization.borderRadius}px` }}>
                                        <CardContent>
                                            <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                <Typography variant='overline'>File Search Files</Typography>
                                                <TooltipWithParser title='File search enables the assistant with knowledge from files that you or your users upload. Once a file is uploaded, the assistant automatically decides when to retrieve content based on user requests' />
                                            </Stack>
                                            {toolResources?.file_search?.vector_store_object && (
                                                <Chip
                                                    label={
                                                        toolResources?.file_search?.vector_store_object?.name
                                                            ? toolResources?.file_search?.vector_store_object?.name
                                                            : toolResources?.file_search?.vector_store_object?.id
                                                    }
                                                    component='a'
                                                    sx={{ mb: 2, mt: 1 }}
                                                    variant='outlined'
                                                    clickable
                                                    color='primary'
                                                    onDelete={detachVectorStore}
                                                     =>
                                                        
                                                    }
                                                />
                                            )}
                                            {toolResources?.file_search?.files?.length > 0 && (
                                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                                    {t => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                width: 'max-content',
                                                                height: 'max-content',
                                                                borderRadius: 15,
                                                                ba',
                                                                paddingLeft: 15,
                                                                paddingRight: 15,
                                                                paddingTop: 5,
                                                                paddingBottom: 5,
                                                                marginRight: 10,
                                                                marginBottom: 10
                                                            }}
                                                        >
                                                            <', marginRight: 10 }}>
                                                                {file.filename}
                                                            </span>
                                                            <IconButton
                                                                sx={{ height: 15, width: 15, p: 0 }}
                                                                 => }
                                                            >
                                                                <IconX />
                                                            </IconButton>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {!toolResources.file_search || !toolResources.file_search?.vector_store_ids?.length ? (
                                                <Button
                                                    variant='outlined'
                                                    component='label'
                                                    fullWidth
                                                    startIcon={<IconPlus />}
                                                    sx={{ marginRight: '1rem' }}
                                                     => }
                                                >
                                                    Add Vector Store
                                                </Button>
                                            ) : (
                                                <File
                                                    key={uploadVectorStoreFiles}
                                                    fileType='*'
                                                    formDataUpload={true}
                                                    value={uploadVectorStoreFiles ?? 'Choose a file to upload'}
                                                     => }
                                                     => upl}
                                                />
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </Box>
                        </>
                    )}
                </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
                {dialogProps.type === 'EDIT' && (
                    <StyledPermissionButton
                        permissionId={'assistants:create,assistants:update'}
                        color='secondary'
                        variant='contained'
                         => }
                    >
                        Sync
                    </StyledPermissionButton>
                )}
                {dialogProps.type === 'EDIT' && (
                    <StyledPermissionButton
                        permissionId={'assistants:delete'}
                        color='error'
                        variant='contained'
                         => }
                    >
                        Delete
                    </StyledPermissionButton>
                )}
                <StyledPermissionButton
                    permissionId={'assistants:create,assistants:update'}
                    }
                    variant='contained'
                     => ( : )}
                >
                    {dialogProps.confirmButtonName}
                </StyledPermissionButton>
            </DialogActions>
            <DeleteConfirmDialog
                show={deleteDialogOpen}
                dialogProps={deleteDialogProps}
                 => }
                 => }
                 => }
            />
            <AssistantVectorStoreDialog
                show={assistantVectorStoreDialogOpen}
                dialogProps={assistantVectorStoreDialogProps}
                 => }
                 => {
                    setToolResources({
                        ...toolResources,
                        file_search: {
                            vector_store_object: null,
                            files: [],
                            ve => ve
                        }
                    })
                    
                }}
                 => {
                    setToolResources({
                        ...toolResources,
                        file_search: {
                            ...toolResources.file_search,
                            vector_store_object: vectorStoreObj,
                            files: files ? files : toolResources.file_search?.files,
                            vector_store_ids: [vectorStoreObj.id]
                        }
                    })
                    
                }}
                setError={setError}
            />
            {loading && <BackdropLoader open={loading} />}
        </Dialog>
    ) : null

    
}

AssistantDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default AssistantDialog
