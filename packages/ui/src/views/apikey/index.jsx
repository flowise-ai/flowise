import * as PropTypes from 'prop-types'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// material-ui
import {
    Button,
    Box,
    Chip,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Popover,
    Collapse,
    Typography
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { useTheme, styled } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import APIKeyDialog from './APIKeyDialog'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { PermissionButton, StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import { Available } from '@/ui-component/rbac/available'
import UploadJSONFileDialog from '@/views/apikey/UploadJSONFileDialog'
import TablePagination, { DEFAULT_ITEMS_PER_PAGE } from '@/ui-component/pagination/TablePagination'

// API
import apiKeyApi from '@/api/apikey'
import { useError } from '@/store/context/ErrorContext'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// utils
import useNotifier from '@/utils/useNotifier'

// Icons
import {
    IconTrash,
    IconEdit,
    IconCopy,
    IconChevronsUp,
    IconChevronsDown,
    IconX,
    IconPlus,
    IconEye,
    IconEyeOff,
    IconFileUpload
} from '@tabler/icons-react'
import APIEmptySVG from '@/assets/images/api_empty.svg'

// ==============================|| APIKey ||============================== //

(({ theme }) => ({
    borderColor: theme.palette.grey[900] + 25,
    padding: '6px 16px',

    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.grey[900]
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: 64
    }
}))

(() => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))

fun {
    
    

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <StyledTableCell scope='row' style={{ width: '15%' }}>
                    {props.apiKey.keyName}
                </StyledTableCell>
                <StyledTableCell style={{ width: '40%' }}>
                    {p
                        ? props.apiKey.apiKey
                        : `${p}${'•'.}${props.apiKey.apiKey.substring(
                              props.apiKey.apiKey.length - 5
                          )}`}
                    <IconButton title='Copy' color='success' onClick={props.onCopyClick}>
                        <IconCopy />
                    </IconButton>
                    <IconButton title='Show' color='inherit' onClick={props.onShowAPIClick}>
                        {p ? <IconEyeOff /> : <IconEye />}
                    </IconButton>
                    <Popover
                        open={props.open}
                        anchorEl={props.anchorEl}
                        onClose={props.onClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                    >
                        <Typography variant='h6' sx={{ pl: 1, pr: 1, color: 'white', background: props.theme.palette.success.dark }}>
                            Copied!
                        </Typography>
                    </Popover>
                </StyledTableCell>
                <StyledTableCell>
                    {props.apiKey.chatFlows.length}{' '}
                    {props.apiKey.chatFlows.length > 0 && (
                        <I => }>
                            {props.apiKey.chatFlows.length > 0 && open ? <IconChevronsUp /> : <IconChevronsDown />}
                        </IconButton>
                    )}
                </StyledTableCell>
                <Style.f}</StyledTableCell>
                <Available permission={'apikeys:update,apikeys:create'}>
                    <StyledTableCell>
                        <IconButton title='Edit' color='primary' onClick={props.onEditClick}>
                            <IconEdit />
                        </IconButton>
                    </StyledTableCell>
                </Available>
                <Available permission={'apikeys:delete'}>
                    <StyledTableCell>
                        <IconButton title='Delete' color='error' onClick={props.onDeleteClick}>
                            <IconTrash />
                        </IconButton>
                    </StyledTableCell>
                </Available>
            </TableRow>
            {open && (
                <TableRow sx={{ '& td': { border: 0 } }}>
                    <StyledTableCell sx={{ p: 2 }} colSpan={6}>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Box sx={{ borderRadius: 2, border: 1, borderColor: theme.palette.grey[900] + 25, overflow: 'hidden' }}>
                                <Table aria-label='chatflow table'>
                                    <TableHead sx={{ height: 48 }}>
                                        <TableRow>
                                            <StyledTableCell sx={{ width: '30%' }}>Chatflow Name</StyledTableCell>
                                            <StyledTableCell sx={{ width: '20%' }}>Modified On</StyledTableCell>
                                            <StyledTableCell sx={{ width: '50%' }}>Category</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {p => (
                                            <TableRow key={index}>
                                                <StyledTableCell>{flow.flowName}</StyledTableCell>
                                                <Style.f}</StyledTableCell>
                                                <StyledTableCell>
                                                    &nbsp;
                                                    {flow.category &&
                                                        flow.category
                                                            .
                                                            .map((tag,  => (
                                                                <Chip key={index} label={tag} style={{ marginRight: 5, marginBottom: 5 }} />
                                                            ))}
                                                </StyledTableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </StyledTableCell>
                </TableRow>
            )}
        </>
    )
}

APIKeyRow.propTypes = {
    apiKey: PropTypes.any,
    ,
    onCopyClick: PropTypes.func,
    onShowAPIClick: PropTypes.func,
    open: PropTypes.bool,
    anchorEl: PropTypes.any,
    onClose: PropTypes.func,
    theme: PropTypes.any,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func
}
 => {
    
     => 

    
    u
    

     => )
     => )

    
    
    
    
    
    
    

    
    

    

    /* Table Pagination */
    
    
    

     => {
        
        
        
    }

     => {
        const params = {
            page: page || currentPage,
            limit: limit || pageLimit
        }
        getAllAPIKey
    }

     => {
        
    }
    fun {
        .) > -1
    }

    

    

     => {
        
         {
            //
             {
                return item !== apikey
            })
            
        } else {
             => 
        }
    }

     => {
        
    }

     => {
        const dialogProp = {
            title: 'Add New API Key',
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            customBtnId: 'btn_confirmAddingApiKey'
        }
        
        
    }

     => {
        const dialogProp = {
            title: 'Edit API Key',
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Save',
            customBtnId: 'btn_confirmEditingApiKey',
            key
        }
        
        
    }

     => {
        const dialogProp = {
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Upload',
            data: {}
        }
        
        
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description:
                key.chatFlows.length === 0
                    ? `Delete key [${key.keyName}] ? `
                    : `Delete key [${key.keyName}] ?\n There are ${key.chatFlows.length} chatflows using this key.`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel',
            customBtnId: 'btn_initiateDeleteApiKey'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'API key deleted',
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
                    message: `Failed to delete API key: ${
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
    }

     => {
        
        
        
    }

    u => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            
            
        }
    }, 

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 3 }}>
                        <ViewHeader
                            onSearchChange={onSearchChange}
                            search={true}
                            searchPlaceholder='Search API Keys'
                            title='API Keys'
                            description='Flowise API & SDK authentication keys'
                        >
                            <PermissionButton
                                permissionId={'apikeys:import'}
                                variant='outlined'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={uploadDialog}
                                startIcon={<IconFileUpload />}
                                id='btn_importApiKeys'
                            >
                                Import
                            </PermissionButton>
                            <StyledPermissionButton
                                permissionId={'apikeys:create'}
                                variant='contained'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={addNew}
                                startIcon={<IconPlus />}
                                id='btn_createApiKey'
                            >
                                Create Key
                            </StyledPermissionButton>
                        </ViewHeader>
                        {!isLoading && apiKeys?.length <= 0 ? (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                <Box sx={{ p: 2, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                        src={APIEmptySVG}
                                        alt='APIEmptySVG'
                                    />
                                </Box>
                                <div>No API Keys Yet</div>
                            </Stack>
                        ) : (
                            <>
                                <TableContainer
                                    sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }}
                                    component={Paper}
                                >
                                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                                        <TableHead
                                            sx={{
                                                backgroundColor: customization.isDarkMode
                                                    ? theme.palette.common.black
                                                    : theme.palette.grey[100],
                                                height: 56
                                            }}
                                        >
                                            <TableRow>
                                                <StyledTableCell>Key Name</StyledTableCell>
                                                <StyledTableCell>API Key</StyledTableCell>
                                                <StyledTableCell>Usage</StyledTableCell>
                                                <StyledTableCell>Updated</StyledTableCell>
                                                <Available permission={'apikeys:update,apikeys:create'}>
                                                    <StyledTableCell> </StyledTableCell>
                                                </Available>
                                                <Available permission={'apikeys:delete'}>
                                                    <StyledTableCell> </StyledTableCell>
                                                </Available>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {isLoading ? (
                                                <>
                                                    <StyledTableRow>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <Available permission={'apikeys:update,apikeys:create'}>
                                                            <StyledTableCell> </StyledTableCell>
                                                        </Available>
                                                        <Available permission={'apikeys:delete'}>
                                                            <StyledTableCell> </StyledTableCell>
                                                        </Available>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <Available permission={'apikeys:update,apikeys:create'}>
                                                            <StyledTableCell> </StyledTableCell>
                                                        </Available>
                                                        <Available permission={'apikeys:delete'}>
                                                            <StyledTableCell> </StyledTableCell>
                                                        </Available>
                                                    </StyledTableRow>
                                                </>
                                            ) : (
                                                <>
                                                    {ap.map((key,  => (
                                                        <APIKeyRow
                                                            key={index}
                                                            apiKey={key}
                                                            showApiKeys={showApiKeys}
                                                             => {
                                                                nav
                                                                
                                                                 => {
                                                                    han
                                                                }, 1500)
                                                            }}
                                                             => }
                                                            open={openPopOver}
                                                            anchorEl={anchorEl}
                                                            onClose={handleClosePopOver}
                                                            theme={theme}
                                                             => e}
                                                             => }
                                                        />
                                                    ))}
                                                </>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                {/* Pagination and Page Size Controls */}
                                <TablePagination currentPage={currentPage} limit={pageLimit} total={total} onChange={onChange} />
                            </>
                        )}
                    </Stack>
                )}
            </MainCard>
            <APIKeyDialog
                show={showDialog}
                dialogProps={dialogProps}
                 => }
                onConfirm={onConfirm}
                setError={setError}
            ></APIKeyDialog>
            {showUploadDialog && (
                <UploadJSONFileDialog
                    show={showUploadDialog}
                    dialogProps={uploadDialogProps}
                     => }
                    onConfirm={onConfirm}
                ></UploadJSONFileDialog>
            )}
            <ConfirmDialog />
        </>
    )
}

export default APIKey
