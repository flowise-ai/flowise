import { cloneDeep, set } from 'lodash'
import { memo, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { FullPageChat } from 'flowise-embed-react'
import PropTypes from 'prop-types'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// Material-UI
import { IconButton, Avatar, ButtonBase, Toolbar, Box, Button, Grid, OutlinedInput, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
    IconCode,
    IconArrowLeft,
    IconDeviceFloppy,
    IconSettings,
    IconX,
    IconTrash,
    IconWand,
    IconArrowsMaximize
} from '@tabler/icons-react'

// Project import
import MainCard from '@/ui-component/cards/MainCard'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { StyledFab } from '@/ui-component/button/StyledFab'
import ErrorBoundary from '@/ErrorBoundary'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'
import APICodeDialog from '@/views/chatflows/APICodeDialog'
import ViewMessagesDialog from '@/ui-component/dialog/ViewMessagesDialog'
import ChatflowConfigurationDialog from '@/ui-component/dialog/ChatflowConfigurationDialog'
import ViewLeadsDialog from '@/ui-component/dialog/ViewLeadsDialog'
import Settings from '@/views/settings'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import PromptGeneratorDialog from '@/ui-component/dialog/PromptGeneratorDialog'
import { Available } from '@/ui-component/rbac/available'
import ExpandTextDialog from '@/ui-component/dialog/ExpandTextDialog'
import { SwitchInput } from '@/ui-component/switch/Switch'

// API
import assistantsApi from '@/api/assistants'
import chatflowsApi from '@/api/chatflows'
import nodesApi from '@/api/nodes'
import documentstoreApi from '@/api/documentstore'

// Const
import { baseURL } from '@/store/constant'
import { SET_CHATFLOW, closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'

// Utils
import { initNode, showHideInputParams } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'
import { toolAgentFlow } from './toolAgentFlow'

// ===========================|| CustomAssistantConfigurePreview ||=========================== //

const MemoizedFullPageChat = memo(
    ({ ...p => (
        <div>
            <FullPageChat {...props}></FullPageChat>
        </div>
    ),
    (p => prevProps.chatflow === nextProps.chatflow
)

MemoizedFullPageChat.displayName = 'MemoizedFullPageChat'

MemoizedFullPageChat.propTypes = {
    chatflow: PropTypes.object
}

 => {
    
    
    
     => 
     => 

    
    
    
    
    

    

    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    

    
    

    // ==============================|| Snackbar ||============================== //
    u
     => )
     => )

     => {
         => {
            const updatedData = { ...prevData }
            updatedData.inputs[inputParam.name] = newValue
            up
            return updatedData
        })
    }

    const handleToolDataChange =
        (t =>
        ({  => {
             => {
                const updatedTools = [...prevTools]
                const updatedTool = { ...updatedTools[toolIndex] }
                updatedTool.inputs[inputParam.name] = newValue
                up
                updatedTools[toolIndex] = updatedTool
                return updatedTools
            })
        }

     => {
        enqueueSnackbar({
            message: 'Please fill in all mandatory fields.',
            options: {
                key: new .getT + Math.,
                variant: 'warning',
                a => (
                    <Butt => }>
                        <IconX />
                    </Button>
                )
            }
        })
    }

     => {
        let canSubmit = true

        .f => 
        f {
            ) {
                 {
                    canSubmit = false
                    break
                } el {
                    canSubmit = false
                    break
                }
            }
        }

         {
            f {
                const tool = selectedTools[i]
                .f => 
                f {
                    ) {
                         {
                            canSubmit = false
                            break
                        } el {
                            canSubmit = false
                            break
                        }
                    }
                }
            }
        }

        return canSubmit
    }

     => {
        let canSubmit = true

         {
            canSubmit = false
        }

        

        // check if any of the description is empty
         {
            f {
                 {
                    canSubmit = false
                    break
                }
            }
        }

         {
            
        }
        return canSubmit
    }

     => {
        ) {
            
            
             return
            const saveObj = {
                id: customAssistantId,
                name: selectedCustomAssistant.name,
                fl,
                type: 'ASSISTANT'
            }
            try {
                let saveResp
                 {
                    
                } else {
                    
                }

                 {
                    
                    

                    const assistantDetails = {
                        ...selectedCustomAssistant,
                        chatModel: selectedChatModel,
                        instruction: customAssistantInstruction,
                        flowId: saveResp.data.id,
                        documentStores: selectedDocumentStores,
                        tools: selectedTools
                    }

                    const saveAssistantResp = await assistantsApi.updateAssistant(customAssistantId, {
                        
                    })

                     {
                        
                        enqueueSnackbar({
                            message: 'Assistant saved successfully',
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
                }
            }  {
                
                enqueueSnackbar({
                    message: `Failed to save assistant: ${
                        typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                    }`,
                    options: {
                        key: new .getT + Math.,
                        variant: 'error',
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
        const nodes = []
        const edges = []

        f {
            try {
                const tool = selectedTools[i]
                const toolId = `${tool.name}_${i}`
                
                

                const toolNodeObj = {
                    id: toolId,
                    data: {
                        ...toolNodeData,
                        id: toolId
                    }
                }
                n

                const toolEdge = {
                    source: toolId,
                    sourceHandle: `${toolId}-output-${tool.name}-Tool`,
                    target: toolAgentId,
                    targetHandle: `${toolAgentId}-input-tools-Tool`,
                    type: 'buttonedge',
                    id: `${toolId}-${toolId}-output-${tool.name}-Tool-${toolAgentId}-${toolAgentId}-input-tools-Tool`
                }
                e
            }  {
                
            }
        }

        return { nodes, edges }
    }

     => {
        
        

        const nodes = []
        const edges = []

        f {
            try {
                const docStoreVSId = `documentStoreVS_${i}`
                const retrieverToolId = `retrieverTool_${i}`

                )
                )

                
                

                 => 
                // convert to small case and replace space with underscore
                
                    .t
                    .
                    .
                const desc = selectedDocumentStores[i].description || docStoreOption?.description || ''

                set(retrieverToolNodeData, 'inputs', {
                    name,
                    description: desc,
                    retriever: `{{${docStoreVSId}.data.instance}}`,
                    returnSourceDocuments: selectedDocumentStores[i].returnSourceDocuments ?? false
                })

                const docStoreVS = {
                    id: docStoreVSId,
                    data: {
                        ...docStoreVSNodeData,
                        id: docStoreVSId
                    }
                }
                n

                const retrieverTool = {
                    id: retrieverToolId,
                    data: {
                        ...retrieverToolNodeData,
                        id: retrieverToolId
                    }
                }
                n

                const docStoreVSEdge = {
                    source: docStoreVSId,
                    sourceHandle: `${docStoreVSId}-output-retriever-BaseRetriever`,
                    target: retrieverToolId,
                    targetHandle: `${retrieverToolId}-input-retriever-BaseRetriever`,
                    type: 'buttonedge',
                    id: `${docStoreVSId}-${docStoreVSId}-output-retriever-BaseRetriever-${retrieverToolId}-${retrieverToolId}-input-retriever-BaseRetriever`
                }
                e

                const retrieverToolEdge = {
                    source: retrieverToolId,
                    sourceHandle: `${retrieverToolId}-output-retrieverTool-RetrieverTool|DynamicTool|Tool|StructuredTool|Runnable`,
                    target: toolAgentId,
                    targetHandle: `${toolAgentId}-input-tools-Tool`,
                    type: 'buttonedge',
                    id: `${retrieverToolId}-${retrieverToolId}-output-retrieverTool-RetrieverTool|DynamicTool|Tool|StructuredTool|Runnable-${toolAgentId}-${toolAgentId}-input-tools-Tool`
                }
                e
            }  {
                
            }
        }

        return { nodes, edges }
    }

     => {
        try {
            const config = {}

            const nodes = toolAgentFlow.nodes
            const edges = toolAgentFlow.edges
            const chatModelId = `${selectedChatModel.name}_0`
             => n?.id

            // Replace Chat Model
            let f => n
            const toBeReplaceNode = {
                id: chatModelId,
                data: {
                    ...selectedChatModel,
                    id: chatModelId
                }
            }
            f

            // Replace Tool Agent inputs
             => n
            const toolAgentId = toolAgentNode.id
            
            

            const agentTools = []
             {
                 => `{{
                agentT
            }
             {
                 => `{{${
                agentT
            }
            

            f => (n)

            // Go through each edge and loop through each key. Check if the string value of each key includes/contains existingChatModelId, if yes replace with chatModelId
            let f => {
                const newEdge = { ...edge }
                Obje.f => {
                    ) {
                        newE
                    }
                })
                return newEdge
            })

            // Add Doc Store
             {
                
                filteredNodes = [...filteredNodes, ...newNodes]
                filteredEdges = [...filteredEdges, ...newEdges]
            }

            // Add Tools
             {
                
                filteredNodes = [...filteredNodes, ...newNodes]
                filteredEdges = [...filteredEdges, ...newEdges]
            }

            config.nodes = filteredNodes
            config.edges = filteredEdges

            return config
        }  {
            
            enqueueSnackbar({
                message: `Failed to save assistant: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
            return undefined
        }
    }

     => {
        

         {
            han
        } el {
            setViewMessagesDialogProps({
                title: 'View Messages',
                chatflow: canvas.chatflow,
                isChatflow: false
            })
            
        } el {
            setViewLeadsDialogProps({
                title: 'View Leads',
                chatflow: canvas.chatflow
            })
            
        } el {
            setChatflowConfigurationDialogProps({
                title: `Assistant Configuration`,
                chatflow: canvas.chatflow
            })
            
        }
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${selectedCustomAssistant.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    awa
                }
                nav
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
        const dialogProps = {
            value,
            inputParam: {
                label: 'Instructions',
                name: 'instructions',
                type: 'string'
            },
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
    }

     => {
        
         {
            
            return
        }

        try {
            
            const selectedChatModelObj = {
                name: selectedChatModel.name,
                inputs: selectedChatModel.inputs
            }
            

             {
                
                const content = resp.data?.content || resp.data.kwargs?.content
                // replace the description of the selected document store
                 => {
                     {
                        return {
                            ...ds,
                            description: content
                        }
                    }
                    return ds
                })
                
                enqueueSnackbar({
                    message: 'Document Store Tool Description generated successfully',
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
            
            return
        }

        setAssistantPromptGeneratorDialogProps({
            title: 'Generate Instructions',
            description: 'You can generate a prompt template by sharing basic details about your task.',
            data: { selectedChatModel }
        })
        
    }

     => {
        setAPIDialogProps({
            title: 'Embed in website or use as API',
            chatflowid: customAssistantFlowId,
            chatflowApiKeyId: canvas.chatflow.apikeyid,
            isSessionMemory: true
        })
        
    }

     => {
        
        const newSelectedDocumentStores = []
        f {
             => 
             => 

            const newDocStore = {
                id: docStoreId,
                name: foundDocumentStoreOption?.label || '',
                description: foundSelectedDocumentStore?.description || foundDocumentStoreOption?.description || '',
                returnSourceDocuments: foundSelectedDocumentStore?.returnSourceDocuments ?? false
            }

            newSele
        }
        
    }

     => {
         => 
        
    }

    u => {
        getChatM
        get
        getT

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            // Set options
             => ({
                label: ds.label,
                name: ds.name,
                description: ds.description
            }))
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            

            // Set options
             => ({
                label: ds.label,
                name: ds.name,
                description: ds.description
            }))
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            

            // Set options
             => ({
                label: chatModel.label,
                name: chatModel.name,
                imageSrc: `${baseURL}/api/v1/node-icon/${chatModel.name}`
            }))
            

             {
                
                getSpe
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            try {
                
                

                 {
                    
                }

                 {
                    
                }

                 {
                    
                    getSpe
                }

                 {
                    
                }

                 {
                    
                }
            }  {
                
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const chatflow = getSpecificChatflowApi.data
            
        } el {
            
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
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
         {
            return 6
        }
        return 12
    }

     => {
        return window.innerHeight - 130
    }

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column'>
                        <Box>
                            <Grid container spacing='2'>
                                <G} lg={} }>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingRight: 15
                                        }}
                                    >
                                        <Box sx={{ flexGrow: 1, py: 1.25, width: '100%' }}>
                                            <Toolbar
                                                disableGutters={true}
                                                sx={{
                                                    p: 0,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    width: '100%'
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                                    <StyledFab
                                                        size='small'
                                                        color='secondary'
                                                        aria-label='back'
                                                        title='Back'
                                                         => nav}
                                                    >
                                                        <IconArrowLeft />
                                                    </StyledFab>
                                                    <Typography sx={{ ml: 2, mr: 2 }} variant='h3'>
                                                        {selectedCustomAssistant?.name ?? ''}
                                                    </Typography>
                                                </Box>
                                                <div style={{ flex: 1 }}></div>
                                                {customAssistantFlowId && !loadingAssistant && (
                                                    <ButtonBase title='API Endpoint' sx={{ borderRadius: '50%', mr: 2 }}>
                                                        <Avatar
                                                            variant='rounded'
                                                            sx={{
                                                                ...theme.typography.commonAvatar,
                                                                ...theme.typography.mediumAvatar,
                                                                transition: 'all .2s ease-in-out',
                                                                background: theme.palette.canvasHeader.deployLight,
                                                                color: theme.palette.canvasHeader.deployDark,
                                                                '&:hover': {
                                                                    background: theme.palette.canvasHeader.deployDark,
                                                                    color: theme.palette.canvasHeader.deployLight
                                                                }
                                                            }}
                                                            color='inherit'
                                                            onClick={onAPIDialogClick}
                                                        >
                                                            <IconCode stroke={1.5} size='1.3rem' />
                                                        </Avatar>
                                                    </ButtonBase>
                                                )}
                                                <Available permission={'assistants:create'}>
                                                    <ButtonBase title={`Save`} sx={{ borderRadius: '50%', mr: 2 }}>
                                                        <Avatar
                                                            variant='rounded'
                                                            sx={{
                                                                ...theme.typography.commonAvatar,
                                                                ...theme.typography.mediumAvatar,
                                                                transition: 'all .2s ease-in-out',
                                                                background: theme.palette.canvasHeader.saveLight,
                                                                color: theme.palette.canvasHeader.saveDark,
                                                                '&:hover': {
                                                                    background: theme.palette.canvasHeader.saveDark,
                                                                    color: theme.palette.canvasHeader.saveLight
                                                                }
                                                            }}
                                                            color='inherit'
                                                            onClick={onSaveAndProcess}
                                                        >
                                                            <IconDeviceFloppy stroke={1.5} size='1.3rem' />
                                                        </Avatar>
                                                    </ButtonBase>
                                                </Available>
                                                {customAssistantFlowId && !loadingAssistant && (
                                                    <ButtonBase ref={settingsRef} title='Settings' sx={{ borderRadius: '50%' }}>
                                                        <Avatar
                                                            variant='rounded'
                                                            sx={{
                                                                ...theme.typography.commonAvatar,
                                                                ...theme.typography.mediumAvatar,
                                                                transition: 'all .2s ease-in-out',
                                                                background: theme.palette.canvasHeader.settingsLight,
                                                                color: theme.palette.canvasHeader.settingsDark,
                                                                '&:hover': {
                                                                    background: theme.palette.canvasHeader.settingsDark,
                                                                    color: theme.palette.canvasHeader.settingsLight
                                                                }
                                                            }}
                                                             => }
                                                        >
                                                            <IconSettings stroke={1.5} size='1.3rem' />
                                                        </Avatar>
                                                    </ButtonBase>
                                                )}
                                                {!customAssistantFlowId && !loadingAssistant && (
                                                    <Available permission={'assistants:delete'}>
                                                        <ButtonBase ref={settingsRef} title='Delete Assistant' sx={{ borderRadius: '50%' }}>
                                                            <Avatar
                                                                variant='rounded'
                                                                sx={{
                                                                    ...theme.typography.commonAvatar,
                                                                    ...theme.typography.mediumAvatar,
                                                                    transition: 'all .2s ease-in-out',
                                                                    background: theme.palette.error.light,
                                                                    color: theme.palette.error.dark,
                                                                    '&:hover': {
                                                                        background: theme.palette.error.dark,
                                                                        color: theme.palette.error.light
                                                                    }
                                                                }}
                                                                onClick={handleDeleteFlow}
                                                            >
                                                                <IconTrash stroke={1.5} size='1.3rem' />
                                                            </Avatar>
                                                        </ButtonBase>
                                                    </Available>
                                                )}
                                            </Toolbar>
                                        </Box>
                                        <Box
                                            sx={{
                                                p: 2,
                                                mt: 1,
                                                mb: 1,
                                                border: 1,
                                                borderColor: theme.palette.grey[900] + 25,
                                                borderRadius: 2
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <Typography>
                                                    Select Model<span style={{ color: 'red' }}>&nbsp;*</span>
                                                </Typography>
                                            </div>
                                            <Dropdown
                                                key={JSON.}
                                                name={'chatModel'}
                                                options={chatModelsOptions ?? []}
                                                 => {
                                                     {
                                                        
                                                    } else {
                                                        const foundChatComponent = chatModelsComponents.find(
                                                            ( => chatModel.name === newValue
                                                        )
                                                         {
                                                            const chatModelId = `${foundChatComponent.name}_0`
                                                            
                                                            
                                                            
                                                        }
                                                    }
                                                }}
                                                value={selectedChatModel ? selectedChatModel?.name : 'choose an option'}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                p: 2,
                                                mt: 1,
                                                mb: 1,
                                                border: 1,
                                                borderColor: theme.palette.grey[900] + 25,
                                                borderRadius: 2
                                            }}
                                        >
                                            <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                <Typography>
                                                    Instructions<span style={{ color: 'red' }}>&nbsp;*</span>
                                                </Typography>
                                                <div style={{ flex: 1 }}></div>
                                                <IconButton
                                                    size='small'
                                                    sx={{
                                                        height: 25,
                                                        width: 25
                                                    }}
                                                    title='Expand'
                                                    color='secondary'
                                                     => }
                                                >
                                                    <IconArrowsMaximize />
                                                </IconButton>
                                                {selectedChatModel?.name && (
                                                    <Button
                                                        title='Generate instructions using model'
                                                        sx={{ borderRadius: 20 }}
                                                        size='small'
                                                        variant='text'
                                                         => gene}
                                                        startIcon={<IconWand size={20} />}
                                                    >
                                                        Generate
                                                    </Button>
                                                )}
                                            </Stack>
                                            <OutlinedInput
                                                sx={{ mt: 1, width: '100%' }}
                                                type={'text'}
                                                multiline={true}
                                                rows={6}
                                                value={customAssistantInstruction}
                                                 => }
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                p: 2,
                                                mt: 1,
                                                mb: 1,
                                                border: 1,
                                                borderColor: theme.palette.grey[900] + 25,
                                                borderRadius: 2
                                            }}
                                        >
                                            <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                <Typ</Typography>
                                                <TooltipWithParser title='Give your assistant context about different document sources. Document stores must be upserted in advance.' />
                                            </Stack>
                                            <MultiDropdown
                                                key={JSON.}
                                                name={JSON.}
                                                options={documentStoreOptions ?? []}
                                                 => {
                                                     {
                                                        
                                                    } else {
                                                        
                                                    }
                                                }}
                                                value={ =>  ?? 'choose an option'}
                                            />
                                            {selectedDocumentStores.length > 0 && (
                                                <Stack sx={{ mt: 3, position: 'relative', alignItems: 'center' }} direction='row'>
                                                    <Typography>
                                                        Describe Knowledge<span style={{ color: 'red' }}>&nbsp;*</span>
                                                    </Typography>
                                                    <TooltipWithParser title='Describe what the knowledge base is about, this is useful for the AI to know when and how to search for correct information' />
                                                </Stack>
                                            )}
                                            { => {
                                                return (
                                                    <Box sx={{ mt: 1, mb: 2 }} key={index}>
                                                        <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                            <div
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
                                                                <', marginRight: 10 }}>{ds.name}</span>
                                                                <IconButton
                                                                    sx={{ height: 15, width: 15, p: 0 }}
                                                                     => }
                                                                >
                                                                    <IconX />
                                                                </IconButton>
                                                            </div>
                                                            <div style={{ flex: 1 }}></div>
                                                            {selectedChatModel?.name && (
                                                                <Button
                                                                    title='Generate description using model'
                                                                    sx={{ borderRadius: 20 }}
                                                                    size='small'
                                                                    variant='text'
                                                                     => gene}
                                                                    startIcon={<IconWand size={20} />}
                                                                >
                                                                    Generate
                                                                </Button>
                                                            )}
                                                        </Stack>
                                                        <OutlinedInput
                                                            sx={{ mt: 1, width: '100%' }}
                                                            type={'text'}
                                                            multiline={true}
                                                            rows={3}
                                                            value={ds.description}
                                                             => {
                                                                const newSelectedDocumentStores = [...selectedDocumentStores]
                                                                newSelectedDocumentStores[index].description = event.target.value
                                                                
                                                            }}
                                                        />
                                                        <Stack sx={{ mt: 2, position: 'relative', alignItems: 'center' }} direction='row'>
                                                            <Typography>Return Source Documents</Typography>
                                                            <TooltipWithParser title='Return the actual source documents that were used to answer the question' />
                                                        </Stack>
                                                        <SwitchInput
                                                            value={ds.returnSourceDocuments ?? false}
                                                             => {
                                                                const newSelectedDocumentStores = [...selectedDocumentStores]
                                                                newSelectedDocumentStores[index].returnSourceDocuments = newValue
                                                                
                                                            }}
                                                        />
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                        {.length > 0 && (
                                            <Box
                                                sx={{
                                                    p: 0,
                                                    mt: 1,
                                                    mb: 1,
                                                    border: 1,
                                                    borderColor: theme.palette.grey[900] + 25,
                                                    borderRadius: 2
                                                }}
                                            >
                                                {
                                                    .f => 
                                                    .map(( => (
                                                        <DocStoreInputHandler
                                                            key={index}
                                                            inputParam={inputParam}
                                                            data={selectedChatModel}
                                                            onNodeDataChange={handleChatModelDataChange}
                                                        />
                                                    ))}
                                            </Box>
                                        )}
                                        <Box
                                            sx={{
                                                p: 2,
                                                mt: 1,
                                                mb: 1,
                                                border: 1,
                                                borderColor: theme.palette.grey[900] + 25,
                                                borderRadius: 2
                                            }}
                                        >
                                            <Stack sx={{ position: 'relative', alignItems: 'center' }} direction='row'>
                                                <Typography>Tools</Typography>
                                                <TooltipWithParser title='Tools are actions that your assistant can perform' />
                                            </Stack>
                                            { => {
                                                return (
                                                    <Box
                                                        sx={{
                                                            border: 1,
                                                            borderColor: theme.palette.grey[900] + 25,
                                                            borderRadius: 2,
                                                            mt: 2,
                                                            mb: 2
                                                        }}
                                                        key={index}
                                                    >
                                                        <Box sx={{ pl: 2, pr: 2, pt: 2, pb: 0 }}>
                                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                                <Typography>
                                                                    Tool<span style={{ color: 'red' }}>&nbsp;*</span>
                                                                </Typography>
                                                                <div style={{ flex: 1 }}></div>
                                                                <IconButton
                                                                    color='error'
                                                                    sx={{ height: 15, width: 15, p: 0 }}
                                                                     => {
                                                                         => 
                                                                        
                                                                    }}
                                                                >
                                                                    <IconTrash />
                                                                </IconButton>
                                                            </div>
                                                            <Dropdown
                                                                key={JSON.}
                                                                name={tool.name}
                                                                options={toolOptions ?? []}
                                                                 => {
                                                                     {
                                                                        const newSelectedTools = [...selectedTools]
                                                                        newSelectedTools[index] = {}
                                                                        
                                                                    } else {
                                                                        const foundToolComponent = toolComponents.find(
                                                                            (t => tool.name === newValue
                                                                        )
                                                                         {
                                                                            const toolId = `${foundToolComponent.name}_${index}`
                                                                            
                                                                            
                                                                            const newSelectedTools = [...selectedTools]
                                                                            newSelectedTools[index] = initToolData
                                                                            
                                                                        }
                                                                    }
                                                                }}
                                                                value={tool?.name || 'choose an option'}
                                                            />
                                                        </Box>
                                                        {t.length === 0 && (
                                                            <Box sx={{ pl: 2, pr: 2, pt: 0, pb: 2 }} />
                                                        )}
                                                        {t.length > 0 && (
                                                            <Box
                                                                sx={{
                                                                    p: 0,
                                                                    mt: 2,
                                                                    mb: 1
                                                                }}
                                                            >
                                                                {
                                                                    .filter(
                                                                        ( => !inputParam.hidden && inputParam.display !== false
                                                                    )
                                                                    .map(( => (
                                                                        <DocStoreInputHandler
                                                                            key={inputIndex}
                                                                            inputParam={inputParam}
                                                                            data={tool}
                                                                            }
                                                                        />
                                                                    ))}
                                                            </Box>
                                                        )}
                                                    </Box>
                                                )
                                            })}
                                            <Button
                                                fullWidth
                                                title='Add Tool'
                                                sx={{ mt: 1, mb: 1, borderRadius: 20 }}
                                                variant='outlined'
                                                 => }
                                            >
                                                Add Tool
                                            </Button>
                                        </Box>
                                        {.length > 0 && (
                                            <Available permission={'assistants:create'}>
                                                <Button
                                                    fullWidth
                                                    title='Save Assistant'
                                                    sx={{
                                                        mt: 1,
                                                        mb: 1,
                                                        borderRadius: 20,
                                                        ba'
                                                    }}
                                                    variant='contained'
                                                    onClick={onSaveAndProcess}
                                                >
                                                    Save Assistant
                                                </Button>
                                            </Available>
                                        )}
                                    </div>
                                </Grid>
                                {customAssistantFlowId && !loadingAssistant && (
                                    <Grid item xs={12} md={6} lg={6} sm={6}>
                                        <Box sx={{ mt: 2 }}>
                                            {customization.isDarkMode && (
                                                <MemoizedFullPageChat
                                                    chatflowid={customAssistantFlowId}
                                                    chatflow={canvas.chatflow}
                                                    apiHost={baseURL}
                                                    chatflowConfig={{}}
                                                    theme={{
                                                        button: {
                                                            backgroundColor: '#32353b',
                                                            iconColor: '#ffffff'
                                                        },
                                                        chatWindow: {
                                                            he,
                                                            showTitle: true,
                                                            backgroundColor: '#23262c',
                                                            title: '  Preview',
                                                            botMessage: {
                                                                backgroundColor: '#32353b',
                                                                textColor: '#ffffff'
                                                            },
                                                            userMessage: {
                                                                backgroundColor: '#191b1f',
                                                                textColor: '#ffffff'
                                                            },
                                                            textInput: {
                                                                backgroundColor: '#32353b',
                                                                textColor: '#ffffff'
                                                            },
                                                            footer: {
                                                                showFooter: false
                                                            }
                                                        }
                                                    }}
                                                />
                                            )}
                                            {!customization.isDarkMode && (
                                                <MemoizedFullPageChat
                                                    chatflowid={customAssistantFlowId}
                                                    chatflow={canvas.chatflow}
                                                    apiHost={baseURL}
                                                    chatflowConfig={{}}
                                                    theme={{
                                                        button: {
                                                            backgroundColor: '#eeeeee',
                                                            iconColor: '#333333'
                                                        },
                                                        chatWindow: {
                                                            he,
                                                            showTitle: true,
                                                            backgroundColor: '#fafafa',
                                                            title: '  Preview',
                                                            botMessage: {
                                                                backgroundColor: '#ffffff',
                                                                textColor: '#303235'
                                                            },
                                                            userMessage: {
                                                                backgroundColor: '#f7f8ff',
                                                                textColor: '#303235'
                                                            },
                                                            textInput: {
                                                                backgroundColor: '#ffffff',
                                                                textColor: '#303235'
                                                            },
                                                            footer: {
                                                                showFooter: false
                                                            }
                                                        }
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Stack>
                )}
            </MainCard>
            {loading && <BackdropLoader open={loading} />}
            {ap => } />}
            {isSettingsOpen && (
                <Settings
                    chatflow={canvas.chatflow}
                    isSettingsOpen={isSettingsOpen}
                    anchorEl={settingsRef.current}
                     => }
                    onSettingsItemClick={onSettingsItemClick}
                    isCustomAssistant={true}
                />
            )}
            <ViewMessagesDialog
                show={viewMessagesDialogOpen}
                dialogProps={viewMessagesDialogProps}
                 => }
            />
            <V => } />
            <ChatflowConfigurationDialog
                key='chatflowConfiguration'
                show={chatflowConfigurationDialogOpen}
                dialogProps={chatflowConfigurationDialogProps}
                 => }
            />
            <PromptGeneratorDialog
                show={assistantPromptGeneratorDialogOpen}
                dialogProps={assistantPromptGeneratorDialogProps}
                 => }
                 => {
                    
                    
                }}
            />
            <ExpandTextDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => }
                 => {
                    
                    
                }}
            ></ExpandTextDialog>
            <ConfirmDialog />
        </>
    )
}

export default CustomAssistantConfigurePreview
