import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import { useSelector } from 'react-redux'

// material-ui
import { Box, Typography, IconButton, Button } from '@mui/material'
import { IconArrowsMaximize, IconAlertTriangle, IconRefresh } from '@tabler/icons-react'

// project import
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { MultiDropdown } from '@/ui-component/dropdown/MultiDropdown'
import { AsyncDropdown } from '@/ui-component/dropdown/AsyncDropdown'
import { Input } from '@/ui-component/input/Input'
import { DataGrid } from '@/ui-component/grid/DataGrid'
import { File } from '@/ui-component/file/File'
import { SwitchInput } from '@/ui-component/switch/Switch'
import { JsonEditorInput } from '@/ui-component/json/JsonEditor'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { CodeEditor } from '@/ui-component/editor/CodeEditor'
import { ArrayRenderer } from '@/ui-component/array/ArrayRenderer'
import ExpandTextDialog from '@/ui-component/dialog/ExpandTextDialog'
import ManageScrapedLinksDialog from '@/ui-component/dialog/ManageScrapedLinksDialog'
import CredentialInputHandler from '@/views/canvas/CredentialInputHandler'
import { flowContext } from '@/store/context/ReactFlowContext'

// const
import { FLOWISE_CREDENTIAL_ID } from '@/store/constant'

// ===========================|| DocStoreInputHandler ||=========================== //

 => {
     => 
    
    const nodeDataChangeHandler = onNodeDataChange || flowContextValue?.onNodeDataChange

    
    
    
    
    .t)

     => {
        data.inputs[inputParam.name] = newValue
        const allowedShowHideInputTypes = ['boolean', 'asyncOptions', 'asyncMultiOptions', 'options', 'multiOptions']
         && n {
            n
        }
    }

     => {
        const dialogProps = {
            value,
            inputParam,
            disabled,
            confirmButtonName: 'Save',
            cancelButtonName: 'Cancel'
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
        
        data.inputs[inputParamName] = newValue
    }

     => {
        const credential = data.inputs.credential || data.inputs[FLOWISE_CREDENTIAL_ID]
         {
            return { credential }
        }
        return {}
    }

    return (
        <div>
            {inputParam && (
                <>
                    <Box sx={{ p: 2 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography>
                                {inputParam.label}
                                {!inputParam.optional && <span style={{ color: 'red' }}>&nbsp;*</span>}
                                {inputParam.description && <TooltipWithParser style={{ marginLeft: 10 }} title={inputParam.description} />}
                            </Typography>
                            <div style={{ flexGrow: 1 }}></div>
                            {(( ||  && (
                                <IconButton
                                    size='small'
                                    sx={{
                                        height: 25,
                                        width: 25
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
                                <', marginLeft: 10 }}>{inputParam.warning}</span>
                            </div>
                        )}
                        {inputParam.type === 'credential' && (
                            <CredentialInputHandler
                                key={JSON.}
                                disabled={disabled}
                                }
                                inputParam={inputParam}
                                 => {
                                    data.credential = newValue
                                    data.inputs[FLOWISE_CREDENTIAL_ID] = newValue // in case data.credential is not updated
                                }}
                            />
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
                                columns={inputParam.datagrid}
                                hideFooter={true}
                                 ?? []}
                                 => (}
                            />
                        )}
                        {inputParam.type === 'code' && (
                            <>
                                <div style={{ height: '5px' }}></div>
                                <div style={{ height: inputParam.rows ? '100px' : '200px' }}>
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
                        {( && (
                            <Input
                                key={data.inputs[inputParam.name]}
                                disabled={disabled}
                                inputParam={inputParam}
                                 => (}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                nodeId={data.id}
                            />
                        )}
                        {inputParam.type === 'json' && (
                            <JsonEditorInput
                                disabled={disabled}
                                 => (}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? ''}
                                isDarkMode={customization.isDarkMode}
                            />
                        )}
                        {inputParam.type === 'options' && (
                            <Dropdown
                                key={JSON.}
                                disabled={disabled}
                                name={inputParam.name}
                                options={inputParam.options}
                                 => han}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                            />
                        )}
                        {inputParam.type === 'multiOptions' && (
                            <MultiDropdown
                                key={JSON.}
                                disabled={disabled}
                                name={inputParam.name}
                                options={inputParam.options}
                                 => han}
                                value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                            />
                        )}
                        {( && (
                            <>
                                {data.inputParams?.length === 1 && <div style={{ marginTop: 10 }} />}
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div key={reloadTimestamp} style={{ flex: 1 }}>
                                        <AsyncDropdown
                                            key={JSON.}
                                            disabled={disabled}
                                            name={inputParam.name}
                                            nodeData={data}
                                            freeSolo={inputParam.freeSolo}
                                            multiple={inputParam.type === 'asyncMultiOptions'}
                                            value={data.inputs[inputParam.name] ?? inputParam.default ?? 'choose an option'}
                                             => han}
                                             => a}
                                            fullWidth={true}
                                        />
                                    </div>
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
                        {inputParam.type === 'array' && (
                            <ArrayRenderer inputParam={inputParam} data={data} disabled={disabled} isDocStore={true} />
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
                    </Box>
                </>
            )}
            <ExpandTextDialog
                show={showExpandDialog}
                dialogProps={expandDialogProps}
                 => }
                 => }
            ></ExpandTextDialog>
        </div>
    )
}

DocStoreInputHandler.propTypes = {
    inputParam: PropTypes.object,
    data: PropTypes.object,
    disabled: PropTypes.bool,
    onNodeDataChange: PropTypes.func
}

export default DocStoreInputHandler
