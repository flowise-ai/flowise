import PropTypes from 'prop-types'
import { Handle, Position, useUpdateNodeInternals } from 'reactflow'
import { useEffect, useRef, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cloneDeep } from 'lodash'
import showdown from 'showdown'
import parser from 'html-react-parser'

// material-ui
import { useTheme, styled } from '@mui/material/styles'
import {
    Popper,
    Box,
    Typography,
    Tooltip,
    IconButton,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material'
import { useGridApiContext } from '@mui/x-data-grid'
import IconAutoFixHigh from '@mui/icons-material/AutoFixHigh'
import { tooltipClasses } from '@mui/material/Tooltip'
import { IconWand, IconVariable, IconArrowsMaximize, IconEdit, IconAlertTriangle, IconBulb, IconRefresh, IconX } from '@tabler/icons-react'
import { Tabs } from '@mui/base/Tabs'
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete'

// project import
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'
import { AsyncDropdown } from '@/ui-component/dropdown/AsyncDropdown'
import { Input } from '@/ui-component/input/Input'
import { RichInput } from '@/ui-component/input/RichInput'
import { DataGrid } from '@/ui-component/grid/DataGrid'
import { File } from '@/ui-component/file/File'
import { SwitchInput } from '@/ui-component/switch/Switch'
import { flowContext } from '@/store/context/ReactFlowContext'
import { JsonEditorInput } from '@/ui-component/json/JsonEditor'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { CodeEditor } from '@/ui-component/editor/CodeEditor'
import { TabPanel } from '@/ui-component/tabs/TabPanel'
import { TabsList } from '@/ui-component/tabs/TabsList'
import { ArrayRenderer } from '@/ui-component/array/ArrayRenderer'
import { Tab } from '@/ui-component/tabs/Tab'
import { ConfigInput } from '@/views/agentflowsv2/ConfigInput'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'

import ToolDialog from '@/views/tools/ToolDialog'
import AssistantDialog from '@/views/assistants/openai/AssistantDialog'
import FormatPromptValuesDialog from '@/ui-component/dialog/FormatPromptValuesDialog'
import ExpandTextDialog from '@/ui-component/dialog/ExpandTextDialog'
import ExpandRichInputDialog from '@/ui-component/dialog/ExpandRichInputDialog'
import ConditionDialog from '@/ui-component/dialog/ConditionDialog'
import PromptLangsmithHubDialog from '@/ui-component/dialog/PromptLangsmithHubDialog'
import ManageScrapedLinksDialog from '@/ui-component/dialog/ManageScrapedLinksDialog'
import CredentialInputHandler from './CredentialInputHandler'
import InputHintDialog from '@/ui-component/dialog/InputHintDialog'
import NvidiaNIMDialog from '@/ui-component/dialog/NvidiaNIMDialog'
import PromptGeneratorDialog from '@/ui-component/dialog/PromptGeneratorDialog'

// API
import assistantsApi from '@/api/assistants'
import documentstoreApi from '@/api/documentstore'

// utils
import {
    initNode,
    getInputVariables,
    getCustomConditionOutputs,
    isValidConnection,
    getAvailableNodesForVariable
} from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'

// const
import { baseURL, FLOWISE_CREDENTIAL_ID } from '@/store/constant'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'

const EDITABLE_OPTIONS = ['selectedTool', 'selectedAssistant']

 => <T({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500
    }
})

({
    b, 0px 16px 24px 2px , 0px 6px 30px 5px ',
    borderRadius: '10px',
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 10,
            margin: 10
        }
    }
})

const markdownConverter = new showdown.Converter({
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
    tasklists: true
})

// ===========================|| NodeInputHandler ||=========================== //

const NodeInputHandler = ({
    inputAnchor,
    inputParam,
    data,
    disabled = false,
    isAdditionalParams = false,
    disablePadding = false,
    parentParamForArray = null,
    arrayIndex = null,
    onHideNodeInfoDialog,
    onCustomDataChange
}) => {
    
     => 
    
    
    

    u
    
     => )
     => )

    
    
    
    
    
    
    
    .t)
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    

    
    

     => {
        data.inputs[inputParam.name] = newValue
        const allowedShowHideInputTypes = ['boolean', 'asyncOptions', 'asyncMultiOptions', 'options', 'multiOptions']
        ) {
             {
                
            } else {
                
            }
        }
    }

     => {
        const dialogProps = {
            ...hint
        }
        
        
    }

     => {
        const dialogProps = {
            value,
            inputParam,
            disabled,
            languageType,
            n || [],
            e || [],
            nodeId: data.id,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
         {
            
            
        } else {
            
            
        }
    }

     => {
        const dialogProps = {
            data,
            inputParam,
            disabled,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
        
    }

     => {
        
    }

     => {
        
        f {
            ) {
                data.inputs[t.type] = t.template
            }
        }
    }

     => {
        const dialogProps = {
            url,
            relativeLinksMethod,
            limit,
            selectedLinks,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
        }
        
        
    }

     => {
        
        data.inputs.url = url
        data.inputs.selectedLinks = links
    }

     => {
         return ''
        const obj = {}
        
        f {
            obj[inputVariable] = ''
        }
        .length) 
        return ''
    }

     => {
        const colDef = []
        f {
            .f => n : null
            ) {
                 {
                     => pa
                     {
                        const selectedTabIdentifier = tabParam.tabIdentifier

                        const selectedTab =
                            stateNode.data.inputs[`${selectedTabIdentifier}_${stateNode.data.id}`] ||
                            tabParam.default ||
                            tabParam.tabs[0].name

                        const datagridValues = stateNode.data.inputs[selectedTab]
                         {
                            try {
                                
                                
                                    ? pa => 
                                    : Obje
                                colDef.push({
                                    ...column,
                                    field: column.field,
                                    headerName: column.headerName,
                                    type: 'singleSelect',
                                    editable: true,
                                    valueOptions: keys
                                })
                            }  {
                                
                            }
                        }
                    }
                } else {
                    colDef.push({
                        ...column,
                        field: column.field,
                        headerName: column.headerName,
                        type: 'singleSelect',
                        editable: true,
                        valueOptions: []
                    })
                }
            } el {
                const preLoadOptions = []
                ) {
                    const nodes = getAvailableNodesForVariable(
                         || [],
                         || [],
                        data.id,
                        inputParam.id
                    )
                    f {
                        preLoadOptions.push({
                            value: `$${node.id}`,
                            label: `Output from ${node.data.id}`
                        })
                    }
                }
                ) {
                     {
                         => pa
                         {
                            const selectedTabIdentifier = tabParam.tabIdentifier

                            const selectedTab =
                                stateNode.data.inputs[`${selectedTabIdentifier}_${stateNode.data.id}`] ||
                                tabParam.default ||
                                tabParam.tabs[0].name

                            const datagridValues = stateNode.data.inputs[selectedTab]
                             {
                                try {
                                    
                                    
                                        ? pa => 
                                        : Obje
                                    f {
                                        preLoadOptions.push({
                                            value: `$flow.state.${key}`,
                                            label: `Value from ${key}`
                                        })
                                    }
                                }  {
                                    
                                }
                            }
                        }
                    }
                }
                colDef.push({
                    ...column,
                    field: column.field,
                    headerName: column.headerName,
                     => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        
                        return (
                            <Autocomplete
                                id={column.field}
                                freeSolo
                                fullWidth
                                options={[...preLoadOptions, ...column.valueOptions]}
                                value={value}
                                PopperComponent={StyledPopper}
                                 => <TextField {...params} />}
                                 => (
                                    <li {...props}>
                                        <div>
                                            <strong>{option.value}</strong>
                                            <br />
                                            <small>{option.label}</small>
                                        </div>
                                    </li>
                                )}
                                getOpt => {
                                    return typeof option === 'string' ? option : option.value
                                }}
                                 => {
                                    ap
                                }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '50px' // Adjust this value as needed
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        border: 'none'
                                    },
                                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                        border: 'none'
                                    }
                                }}
                            />
                        )
                    }
                })
            } else {
                
            }
        }
        return colDef
    }

     => {
        const preLoadOptions = []
         {
            const nodes = getAvailableNodesForVariable(
                 || [],
                 || [],
                data.id,
                inputParam.id
            )
            f {
                preLoadOptions.push({
                    name: `{{ ${node.data.id} }}`,
                    label: `{{ ${node.data.id} }}`,
                    description: `Output from ${node.data.id}`
                })
            }
        }
        return [...preLoadOptions, ...inputParam.options]
    }

     => {
         =>  >= 0
            ?  => 
            : tabValue
    }

     => {
        // Preset values if the field is format prompt values
        let inputValue = value
         {
            const templateValue =
                ( +
                ( +
                ( +
                (
            
        }
        const dialogProp = {
            value: inputValue,
            inputParam,
            n || [],
            e || [],
            nodeId: data.id,
            data
        }
        
        
    }

     => {
        data.inputs[inputParamName] = newValue
        
    }

     => {
        data.inputs[inputParamName] = newValue
        
    }

     => {
        data.inputs[`${inputParam.tabIdentifier}_${data.id}`] = inputParam.tabs[tabValue].name

        .f => e || []
        const { outputAnchors, toBeRemovedEdgeIds } = getCustomConditionOutputs(
            newData.inputs[inputParam.tabs[tabValue].name],
            data.id,
            existingEdges,
            inputParam.tabs[tabValue].type === 'datagrid'
        )
         return
        data.outputAnchors = outputAnchors
        f {
            
        }
        
        
    }

     => {
         {
            setAsyncOptionEditDialogProps({
                title: 'Edit Tool',
                type: 'EDIT',
                cancelButtonName: 'Cancel',
                confirmButtonName: 'Save',
                toolId: inputValue
            })
        } el {
            setAsyncOptionEditDialogProps({
                title: 'Edit Assistant',
                type: 'EDIT',
                cancelButtonName: 'Cancel',
                confirmButtonName: 'Save',
                assistantId: inputValue
            })
        }
        
    }

     => {
         {
            setAsyncOptionEditDialogProps({
                title: 'Add New Tool',
                type: 'ADD',
                cancelButtonName: 'Cancel',
                confirmButtonName: 'Add'
            })
        } el {
            setAsyncOptionEditDialogProps({
                title: 'Add New Assistant',
                type: 'ADD',
                cancelButtonName: 'Cancel',
                confirmButtonName: 'Add'
            })
        }
        
    }

     => {
         {
            data.inputs[showAsyncOptionDialog] = ''
            han
        } else {
            data.inputs[showAsyncOptionDialog] = selectedOptionId
            han
            .t)
        }
        
        
    }

     => {
         {
            data.inputs['basePath'] = containerData.baseUrl
            data.inputs['modelName'] = containerData.image
        }
    }

     => {
        try {
            
             {
                const chatModels = resp.data ?? []
                 => ({
                    name: model.name,
                    label: model.label,
                    description: model.description,
                    imageSrc: `${baseURL}/api/v1/node-icon/${model.name}`
                }))
                
                
            }
        }  {
            
        }
    }

     => {
        let canSubmit = true

        .length > 0) {
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

        return canSubmit
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
         {
            enqueueSnackbar({
                message: 'Please select a knowledge base',
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
            return
        }
        [0]
        
         {
            
            return
        }

        // Check if model is already selected in the node
        .f => n
        const currentNodeInputs = currentNode?.data?.inputs

        const existingModel = currentNodeInputs?.llmModel || currentNodeInputs?.agentModel || currentNodeInputs?.humanInputModel
         {
            try {
                
                const selectedChatModelObj = {
                    name: existingModel,
                    inputs:
                        currentNodeInputs?.llmModelConfig || currentNodeInputs?.agentModelConfig || currentNodeInputs?.humanInputModelConfig
                }
                
                 {
                    
                    const content = resp.data?.content || resp.data.kwargs?.content
                    // Update the input value directly
                    data.inputs[inputParam.name] = content
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
            return
        }

        // If no model selected, load chat models and open model selection dialog
        awa
         => a => {
            try {
                
                const selectedChatModelObj = {
                    name: selectedModel.name,
                    inputs: selectedModel.inputs
                }
                
                 {
                    
                    const content = resp.data?.content || resp.data.kwargs?.content
                    // Update the input value directly
                    data.inputs[inputParam.name] = content
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
        })
        
    }

     => {
        
         {
            
            return
        }

        .f => n
        const currentNodeInputs = currentNode?.data?.inputs

        // Check if model is already selected in the node
        const existingModel = currentNodeInputs?.llmModel || currentNodeInputs?.agentModel || currentNodeInputs?.humanInputModel
         {
            // Open prompt generator dialog directly with existing model
            setPromptGeneratorDialogProps({
                title: 'Generate Instructions',
                description: 'You can generate a prompt template by sharing basic details about your task.',
                data: {
                    selectedChatModel: {
                        name: existingModel,
                        inputs:
                            currentNodeInputs?.llmModelConfig ||
                            currentNodeInputs?.agentModelConfig ||
                            currentNodeInputs?.humanInputModelConfig
                    }
                }
            })
            
            return
        }

        // If no model selected, load chat models and open model selection dialog
        awa
         => a => {
            // After model selection, open prompt generator dialog
            setPromptGeneratorDialogProps({
                title: 'Generate Instructions',
                description: 'You can generate a prompt template by sharing basic details about your task.',
                data: { selectedChatModel: selectedModel }
            })
            
        })
        
    }

    u => {
         {
            
            up
        }
    }, 

    u => {
        up
    }, 

    return (
        <div ref={ref}>
            {inputAnchor && (
                <>
                    <CustomWidthTooltip placement='left' title={inputAnchor.type}>
                        <Handle
                            type='target'
                            position={Position.Left}
                            key={inputAnchor.id}
                            id={inputAnchor.id}
                             => }
                            style={{
                                height: 10,
                                width: 10,
                                backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                top: position
                            }}
                        />
                    </CustomWidthTooltip>
                    <Box sx={{ p: 2 }}>
                        <Typography>
                            {inputAnchor.label}
                            {!inputAnchor.optional && <span style={{ color: 'red' }}>&nbsp;*</span>}
                            {inputAnchor.description && <TooltipWithParser style={{ marginLeft: 10 }} title={inputAnchor.description} />}
                        </Typography>
                    </Box>
                </>
            )}

            {(( ||  && (
                <>
                    {inputParam.acceptVariable && !isAdditionalParams && (
                        <CustomWidthTooltip placement='left' title={inputParam.type}>
                            <Handle
                                type='target'
                                position={Position.Left}
                                key={inputParam.id}
                                id={inputParam.id}
                                 => }
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary,
                                    top: position
                                }}
                            />
                        </CustomWidthTooltip>
                    )}
                    <Box sx={{ p: disablePadding ? 0 : 2 }}>
                        {( &&
                            ( && (
                                <>
                                    <Button
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%'
                                        }}
                                        disabled={disabled}
                                        sx={{ borderRadius: 25, width: '100%', mb: 2, mt: 0 }}
                                        variant='outlined'
                                         => }
                                        endIcon={<IconAutoFixHigh />}
                                    >
                                        Langchain Hub
                                    </Button>
                                    <PromptLangsmithHubDialog
                                        promptType={inputParam.name}
                                        show={showPromptHubDialog}
                                         => }
                                        onSubmit={onShowPromptHubButtonSubmit}
                                    ></PromptLangsmithHubDialog>
                                </>
                            )}
                        {data.name === 'chatNvidiaNIM' && inputParam.name === 'modelName' && (
                            <>
                                <Button
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: '100%'
                                    }}
                                    sx={{ borderRadius: '12px', width: '100%', mb: 2, mt: -1 }}
                                    variant='outlined'
                                     => }
                                >
                                    Setup NIM Locally
                                </Button>
                            </>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Typography>
                                {inputParam.label}
                                {!inputParam.optional && <span style={{ color: 'red' }}>&nbsp;*</span>}
                                {inputParam.description && <TooltipWithParser style={{ marginLeft: 10 }} title={inputParam.description} />}
                            </Typography>
                            <div style={{ flexGrow: 1 }}></div>
                            {inputParam.hint && !isAdditionalParams && (
                                <IconButton
                                    size='small'
                                    sx={{
                                        height: 25,
                                        width: 25
                                    }}
                                    title={inputParam.hint.label}
                                    color='secondary'
                                     => }
                                >
                                    <IconBulb />
                                </IconButton>
                            )}
                            {inputParam.hint && isAdditionalParams && (
                                <Button
                                    sx={{ p: 0, px: 2 }}
                                    color='secondary'
                                    variant='text'
                                     => {
                                        
                                    }}
                                    startIcon={<IconBulb size={17} />}
                                >
                                    {inputParam.hint.label}
                                </Button>
                            )}
                            {inputParam.acceptVariable && inputParam.type === 'string' && (
                                <Tooltip title='Type {{ to select variables'>
                                    <IconVariable size={20} style={{ color: 'teal' }} />
                                </Tooltip>
                            )}
                            {inputParam.generateDocStoreDescription && (
                                <IconButton
                                    title='Generate knowledge base description'
                                    sx={{
                                        height: 25,
                                        width: 25
                                    }}
                                    size='small'
                                    color='secondary'
                                     => gene}
                                >
                                    <IconWand />
                                </IconButton>
                            )}
                            {inputParam.generateInstruction && (
                                <IconButton
                                    title='Generate instructions'
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        ml: 0.5
                                    }}
                                    size='small'
                                    color='secondary'
                                     => gene}
                                >
                                    <IconWand />
                                </IconButton>
                            )}
                            {(( ||  && (
                                <IconButton
                                    size='small'
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        ml: 0.5
                                    }}
                                    title='Expand'
                                    color='primary'
                                     =>
                                        
                                    }
                                >
                                    <IconArrowsMaximize />
                                </IconButton>
                            )}
                        </div>
                        {inputParam.warning && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    ba',
                                    padding: 10,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}
                            >
                                <IconAlertTriangle size={30} color='orange' />
                                <', ma}</span>
                            </div>
                        )}
                        {inputParam.type === 'credential' && (
                            <CredentialInputHandler
                                disabled={disabled}
                                data={data}
                                inputParam={inputParam}
                                 => {
                                    data.credential = newValue
                                    data.inputs[FLOWISE_CREDENTIAL_ID] = newValue // in case data.credential is not updated
                                }}
                            />
                        )}
                        {inputParam.type === 'tabs' && (
                            <>
                                <Tabs
                                    value={getTabValue(}
                                     => {
                                        
                                        data.inputs[`${inputParam.tabIdentifier}_${data.id}`] = inputParam.tabs[val].name
                                    }}
                                    aria-label='tabs'
                                    variant='fullWidth'
                                    }
                                >
                                    <TabsList>
                                        { => (
                                            <Tab key={index}>{inputChildParam.label}</Tab>
                                        ))}
                                    </TabsList>
                                </Tabs>
                                {inputParam.tabs
                                    .f => 
                                    .map(( => (
                                        <TabPanel key={} index={index}>
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
                        {inputParam.type === 'file' && (
                            <File
                                disabled={disabled}
                                fileType={inputParam.fileType || '*'}
                                 => (}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? 'Choose a file to upload'}
                            />
                        )}
                        {inputParam.type === 'boolean' && (
                            <SwitchInput
                                disabled={disabled}
                                 => han}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? false}
                            />
                        )}
                        {inputParam.type === 'datagrid' && (
                            <DataGrid
                                disabled={disabled}
                                }
                                hideFooter={true}
                                 ?? []}
                                 => (}
                            />
                        )}
                        {inputParam.type === 'code' && (
                            <>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    {inputParam.codeExample && (
                                        <Button
                                            variant='outlined'
                                             => {
                                                data.inputs[inputParam.name] = inputParam.codeExample
                                                .t)
                                            }}
                                        >
                                            See Example
                                        </Button>
                                    )}
                                </div>
                                <div
                                    key={`${reloadTimestamp}_${data.id}}`}
                                    style={{
                                        marginTop: '10px',
                                        border: '1px solid',
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: '6px',
                                        height: inputParam.rows ? '100px' : '200px'
                                    }}
                                >
                                    <CodeEditor
                                        disabled={disabled}
                                        value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                        height={inputParam.rows ? '100px' : '200px'}
                                        theme={customization.isDarkMode ? 'dark' : 'light'}
                                        lang={'js'}
                                        placeholder={inputParam.placeholder}
                                         => (}
                                        basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
                                    />
                                </div>
                            </>
                        )}

                        {( &&
                            (inputParam?.acceptVariable &&
                            (w || w) ? (
                                <RichInput
                                    key={data.inputs[inputParam.name]}
                                    placeholder={inputParam.placeholder}
                                    disabled={disabled}
                                    inputParam={inputParam}
                                     => (}
                                    value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                    n : []}
                                    e : []}
                                    nodeId={data.id}
                                />
                            ) : (
                                <Input
                                    key={data.inputs[inputParam.name]}
                                    placeholder={inputParam.placeholder}
                                    disabled={disabled}
                                    inputParam={inputParam}
                                     => (}
                                    value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                    nodes={[]}
                                    edges={[]}
                                    nodeId={data.id}
                                />
                            ))}
                        {inputParam.type === 'json' && (
                            <>
                                {!inputParam?.acceptVariable && (
                                    <JsonEditorInput
                                        disabled={disabled}
                                         => (}
                                        value={
                                            data.inputs[inputParam.name] ||
                                            inputParam.default ||
                                            getJSONValue( ||
                                            ''
                                        }
                                        isSequentialAgent={data.category === 'Sequential Agents'}
                                        isDarkMode={customization.isDarkMode}
                                    />
                                )}
                                {inputParam?.acceptVariable && (
                                    <>
                                        <Button
                                            sx={{
                                                borderRadius: 25,
                                                width: '100%',
                                                mb: 0,
                                                mt: 2
                                            }}
                                            variant='outlined'
                                            disabled={disabled}
                                             => }
                                        >
                                            {inputParam.label}
                                        </Button>
                                        <FormatPromptValuesDialog
                                            show={showFormatPromptValuesDialog}
                                            dialogProps={formatPromptValuesDialogProps}
                                             => }
                                             => (}
                                        ></FormatPromptValuesDialog>
                                    </>
                                )}
                            </>
                        )}
                        {inputParam.type === 'options' && (
                            <}`}>
                                <Dropdown
                                    disabled={disabled}
                                    name={inputParam.name}
                                    }
                                    freeSolo={inputParam.freeSolo}
                                     => han}
                                    value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                                />
                            </div>
                        )}
                        {inputParam.type === 'multiOptions' && (
                            <}`}>
                                <MultiDropdown
                                    disabled={disabled}
                                    name={inputParam.name}
                                    }
                                     => han}
                                    value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                                />
                            </div>
                        )}
                        {( && (
                            <>
                                {data.inputParams.length === 1 && <div style={{ marginTop: 10 }} />}
                                <div
                                    key={`${}`}
                                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}
                                >
                                    <AsyncDropdown
                                        disabled={disabled}
                                        name={inputParam.name}
                                        nodeData={data}
                                        value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                                        freeSolo={inputParam.freeSolo}
                                        multiple={inputParam.type === 'asyncMultiOptions'}
                                        }
                                         => {
                                             .t)
                                            han
                                        }}
                                         => a}
                                    />
                                    {E && data.inputs[inputParam.name] && (
                                        <IconButton
                                            title='Edit'
                                            color='primary'
                                            size='small'
                                             => e}
                                        >
                                            <IconEdit />
                                        </IconButton>
                                    )}
                                    {inputParam.refresh && (
                                        <IconButton
                                            title='Refresh'
                                            color='primary'
                                            size='small'
                                             => .t)}
                                        >
                                            <IconRefresh />
                                        </IconButton>
                                    )}
                                </div>
                            </>
                        )}
                        {inputParam.type === 'array' && <ArrayRenderer inputParam={inputParam} data={data} disabled={disabled} />}
                        {/* CUSTOM INPUT LOGIC */}
                        { && (
                            <>
                                <Button
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: '100%'
                                    }}
                                    sx={{ borderRadius: '12px', width: '100%', mt: 1 }}
                                    variant='outlined'
                                     => }
                                >
                                    {inputParam.label}
                                </Button>
                            </>
                        )}
                        {(data.name === 'cheerioWebScraper' ||
                            data.name === 'puppeteerWebScraper' ||
                             &&
                            inputParam.name === 'url' && (
                                <>
                                    <Button
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%'
                                        }}
                                        disabled={disabled}
                                        sx={{ borderRadius: '12px', width: '100%', mt: 1 }}
                                        variant='outlined'
                                         =>
                                            onManageLinksDialogClicked(
                                                data.inputs[inputParam.name] ?? inputParam.default ?? '',
                                                data.inputs.selectedLinks,
                                                data.inputs['relativeLinksMethod'] ?? 'webCrawl',
                                                pa ?? 0
                                            )
                                        }
                                    >
                                        Manage Links
                                    </Button>
                                    <ManageScrapedLinksDialog
                                        show={showManageScrapedLinksDialog}
                                        dialogProps={manageScrapedLinksDialogProps}
                                         => }
                                        onSave={onManageLinksDialogSave}
                                    />
                                </>
                            )}
                        {inputParam.loadConfig && data && data.inputs && data.inputs[inputParam.name] && (
                            <>
                                <ConfigInput
                                    key={`${}_${arrayIndex}_${
                                        parentParamForArray?.name
                                    }`}
                                    data={data}
                                    inputParam={inputParam}
                                    disabled={disabled}
                                    arrayIndex={arrayIndex}
                                    parentParamForArray={parentParamForArray}
                                />
                            </>
                        )}
                    </Box>
                </>
            )}
            <ToolDialog
                show={showAsyncOptionDialog === 'selectedTool'}
                dialogProps={asyncOptionEditDialogProps}
                 => }
                onConfirm={onConfirmAsyncOption}
            ></ToolDialog>
            <AssistantDialog
                show={showAsyncOptionDialog === 'selectedAssistant'}
                dialogProps={asyncOptionEditDialogProps}
                 => }
                onConfirm={onConfirmAsyncOption}
            ></AssistantDialog>
            <ExpandTextDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => }
                 => }
                onInputHintDialogClicked={onInputHintDialogClicked}
            ></ExpandTextDialog>
            <ExpandRichInputDialog
                show={showExpandRichDialog}
                dialogProps={expandRichDialogProps}
                 => }
                 => }
                onInputHintDialogClicked={onInputHintDialogClicked}
            ></ExpandRichInputDialog>
            <ConditionDialog
                show={showConditionDialog}
                dialogProps={conditionDialogProps}
                 => {
                    
                    
                }}
                 => }
            ></ConditionDialog>
            <InputHintDialog
                show={showInputHintDialog}
                dialogProps={inputHintDialogProps}
                 => }
            ></InputHintDialog>
            <NvidiaNIMDialog
                open={isNvidiaNIMDialogOpen}
                 => }
                onComplete={handleNvidiaNIMDialogComplete}
            ></NvidiaNIMDialog>
            <Dialog
                open={modelSelectionDialogOpen}
                 => {
                    
                    
                }}
                aria-labelledby='model-selection-dialog-title'
                maxWidth='sm'
                fullWidth
            >
                <DialogTitle id='model-selection-dialog-title'>Select Model</DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{ px: 2 }}>
                            <Dropdown
                                name={'chatModel'}
                                options={availableChatModelsOptions ?? []}
                                 => {
                                     {
                                        
                                    } else {
                                         => 
                                         {
                                            const chatModelId = `${foundChatComponent.name}_0`
                                            
                                            
                                            
                                        }
                                    }
                                }}
                                value={selectedTempChatModel?.name ?? 'choose an option'}
                            />
                        </Box>
                        {.length > 0 && (
                            <Box sx={{ mt: 2 }}>
                                {(
                                    .f => 
                                    .map(( => (
                                        <DocStoreInputHandler key={index} inputParam={inputParam} data={selectedTempChatModel} />
                                    ))}
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button
                         => {
                            
                            
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        .length === 0}
                         => {
                            
                             {
                                awa
                            }
                            
                        }}
                        variant='contained'
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <PromptGeneratorDialog
                show={promptGeneratorDialogOpen}
                dialogProps={promptGeneratorDialogProps}
                 => }
                 => {
                    try {
                        ) {
                            
                            data.inputs[inputParam.name] = htmlContent
                        } else {
                            data.inputs[inputParam.name] = generatedInstruction
                        }
                        
                    }  {
                        enqueueSnackbar({
                            message: 'Error setting generated instruction',
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
                }}
            />
            {loading && <BackdropLoader open={loading} />}
        </div>
    )
}

NodeInputHandler.propTypes = {
    inputAnchor: PropTypes.object,
    inputParam: PropTypes.object,
    data: PropTypes.object,
    disabled: PropTypes.bool,
    isAdditionalParams: PropTypes.bool,
    disablePadding: PropTypes.bool,
    parentParamForArray: PropTypes.object,
    arrayIndex: PropTypes.number,
    onCustomDataChange: PropTypes.func,
    onHideNodeInfoDialog: PropTypes.func
}

export default NodeInputHandler
