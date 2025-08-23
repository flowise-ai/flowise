import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'

// material-ui
import {
    Box,
    Stack,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip,
    Menu,
    MenuItem,
    Divider,
    Button,
    Skeleton
} from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import AddDocStoreDialog from '@/views/docstore/AddDocStoreDialog'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import DocumentLoaderListDialog from '@/views/docstore/DocumentLoaderListDialog'
import ErrorBoundary from '@/ErrorBoundary'
import { StyledButton } from '@/ui-component/button/StyledButton'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import DeleteDocStoreDialog from './DeleteDocStoreDialog'
import { Available } from '@/ui-component/rbac/available'
import { PermissionIconButton, StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import DocumentStoreStatus from '@/views/docstore/DocumentStoreStatus'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import DocStoreAPIDialog from './DocStoreAPIDialog'

// API
import documentsApi from '@/api/documentstore'

// Hooks
import useApi from '@/hooks/useApi'
import useNotifier from '@/utils/useNotifier'
import { useAuth } from '@/hooks/useAuth'
import { getFileName } from '@/utils/genericHelper'
import useConfirm from '@/hooks/useConfirm'

// icons
import { IconPlus, IconRefresh, IconX, IconVectorBezier2 } from '@tabler/icons-react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FileDeleteIcon from '@mui/icons-material/Delete'
import FileEditIcon from '@mui/icons-material/Edit'
import FileChunksIcon from '@mui/icons-material/AppRegistration'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import CodeIcon from '@mui/icons-material/Code'
import doc_store_details_emptySVG from '@/assets/images/doc_store_details_empty.svg'

// store
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { useError } from '@/store/context/ErrorContext'

// ==============================|| DOCUMENTS ||============================== //

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

 => {
    
     => 
    
    
    
    u
    

     => )
     => )
    
    

    

    
    
    
    
    
    
    
    
    
    
    

    
    

    

     => {
        nav
    }

     => {
        nav
    }

     => {
        nav
    }

     => {
        
        nav
    }

     => {
        nav
    }

     => {
        const dialogProp = {
            title: 'Select Document Loader'
        }
        
        
    }

     => {
        try {
            awa
        }  {
            
        }
    }

     => {
        
        
         {
             {
                awa
            }
            try {
                
                
                 {
                    enqueueSnackbar({
                        message: 'Store, Loader and associated document chunks deleted',
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
                    nav
                }
            }  {
                
                
                enqueueSnackbar({
                    message: `Failed to delete Document Store: ${
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
        } el {
            try {
                
                
                 {
                    enqueueSnackbar({
                        message: 'Loader and associated document chunks deleted',
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
                    message: `Failed to delete Document Loader: ${
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
        const props = {
            title: `Delete`,
            description: `Delete Loader ${file.loaderName} ? This will delete all the associated document chunks.`,
            vectorStoreConfig,
            recordManagerConfig,
            type: 'LOADER',
            file
        }

        
        
    }

     => {
        const props = {
            title: `Delete`,
            description: `Delete Store ${getSpecificDocumentStore.data?.name} ? This will delete all the associated loaders and document chunks.`,
            vectorStoreConfig,
            recordManagerConfig,
            type: 'STORE'
        }

        
        
    }

     => {
        const confirmPayload = {
            title: `Refresh all loaders and upsert all chunks?`,
            description: `This will re-process all loaders and upsert all chunks. This action might take some time.`,
            confirmButtonName: 'Refresh',
            cancelButtonName: 'Cancel'
        }
        

         {
            
            
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Document store refresh successfully!',
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
                    message: `Failed to refresh document store: ${
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
        const data = {
            name: documentStore.name,
            description: documentStore.description,
            id: documentStore.id
        }
        const dialogProp = {
            title: 'Edit Document Store',
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Update',
            data: data
        }
        
        
    }

     => {
        
        getSpe
    }

     => {
        event.p
        event.
        
    }

     => {
        const props = {
            title: `Upsert API`,
            storeId,
            loaderId
        }
        
        
    }

     => {
        
    }

    u => {
        getSpe

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const workspaceId = getSpecificDocumentStore.data.workspaceId
            ) {
                nav
                return
            }
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 3 }}>
                        <ViewHeader
                            isBackButton={true}
                            }
                            search={false}
                            title={documentStore?.name}
                            description={documentStore?.description}
                             => nav}
                             => }
                        >
                            {( && (
                                <PermissionIconButton
                                    permissionId={'documentStores:view'}
                                    onClick={onConfirm}
                                    size='small'
                                    color='primary'
                                    title='Refresh Document Store'
                                >
                                    <IconRefresh />
                                </PermissionIconButton>
                            )}
                            <StyledPermissionButton
                                permissionId={'documentStores:add-loader'}
                                variant='contained'
                                sx={{ ml: 2, minWidth: 200, borderRadius: 2, height: '100%', color: 'white' }}
                                startIcon={<IconPlus />}
                                onClick={listLoaders}
                            >
                                Add Document Loader
                            </StyledPermissionButton>
                            <Button
                                id='document-store-header-action-button'
                                aria-controls={open ? 'document-store-header-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                variant='outlined'
                                disableElevation
                                color='secondary'
                                onClick={handleClick}
                                sx={{ minWidth: 150 }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                More Actions
                            </Button>
                            <StyledMenu
                                id='document-store-header-menu'
                                MenuListProps={{
                                    'aria-labelledby': 'document-store-header-menu-button'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    disabled={documentStore?.totalChunks <= 0 || documentStore?.status === 'UPSERTING'}
                                     => }
                                    disableRipple
                                >
                                    <FileChunksIcon />
                                    View & Edit Chunks
                                </MenuItem>
                                <Available permission={'documentStores:upsert-config'}>
                                    <MenuItem
                                        disabled={documentStore?.totalChunks <= 0 || documentStore?.status === 'UPSERTING'}
                                         => }
                                        disableRipple
                                    >
                                        <NoteAddIcon />
                                        Upsert All Chunks
                                    </MenuItem>
                                </Available>
                                <MenuItem
                                    disabled={documentStore?.totalChunks <= 0 || documentStore?.status !== 'UPSERTED'}
                                     => }
                                    disableRipple
                                >
                                    <SearchIcon />
                                    Retrieval Query
                                </MenuItem>
                                <Available permission={'documentStores:upsert-config'}>
                                    <MenuItem
                                        disabled={documentStore?.totalChunks <= 0 || documentStore?.status !== 'UPSERTED'}
                                         => }
                                        disableRipple
                                        title='Re-process all loaders and upsert all chunks'
                                    >
                                        <RefreshIcon />
                                        Refresh
                                    </MenuItem>
                                </Available>
                                <Divider sx={{ my: 0.5 }} />
                                <MenuItem
                                     => }
                                    disableRipple
                                >
                                    <FileDeleteIcon />
                                    Delete
                                </MenuItem>
                            </StyledMenu>
                        </ViewHeader>
                        <DocumentStoreStatus status={documentStore?.status} />
                        {getSpecificDocumentStore.data?.whereUsed?.length > 0 && (
                            <Stack flexDirection='row' sx={{ gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                <div
                                    style={{
                                        paddingLeft: '15px',
                                        paddingRight: '15px',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        fontSize: '0.9rem',
                                        width: 'max-content',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <IconVectorBezier2 style={{ marginRight: 5 }} size={17} />
                                    Chatflows Used:
                                </div>
                                {getSpe => (
                                    <Chip
                                        key={index}
                                        clickable
                                        style={{
                                            width: 'max-content',
                                            borderRadius: '25px',
                                            boxShadow: customization.isDarkMode
                                                ? '0 2px 14px 0 '
                                                : '0 2px 14px 0 '
                                        }}
                                        label={chatflowUsed.name}
                                         => nav}
                                    ></Chip>
                                ))}
                            </Stack>
                        )}
                        {!isLoading && documentStore && !documentStore?.loaders?.length ? (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                <Box sx={{ p: 2, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '16vh', width: 'auto' }}
                                        src={doc_store_details_emptySVG}
                                        alt='doc_store_details_emptySVG'
                                    />
                                </Box>
                                <div>No Document Added Yet</div>
                                <StyledButton
                                    variant='contained'
                                    sx={{ borderRadius: 2, height: '100%', mt: 2, color: 'white' }}
                                    startIcon={<IconPlus />}
                                    onClick={listLoaders}
                                >
                                    Add Document Loader
                                </StyledButton>
                            </Stack>
                        ) : (
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
                                            <StyledTableCell>&nbsp;</StyledTableCell>
                                            <StyledTableCell>Loader</StyledTableCell>
                                            <StyledTableCell>Splitter</StyledTableCell>
                                            <Style</StyledTableCell>
                                            <StyledTableCell>Chunks</StyledTableCell>
                                            <StyledTableCell>Chars</StyledTableCell>
                                            <Available permission={'documentStores:preview-process,documentStores:delete-loader'}>
                                                <StyledTableCell>Actions</StyledTableCell>
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
                                                    <StyledTableCell>
                                                        <Skeleton variant='text' />
                                                    </StyledTableCell>
                                                    <StyledTableCell>
                                                        <Skeleton variant='text' />
                                                    </StyledTableCell>
                                                    <Available permission={'documentStores:preview-process,documentStores:delete-loader'}>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
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
                                                    <StyledTableCell>
                                                        <Skeleton variant='text' />
                                                    </StyledTableCell>
                                                    <StyledTableCell>
                                                        <Skeleton variant='text' />
                                                    </StyledTableCell>
                                                    <Available permission={'documentStores:preview-process,documentStores:delete-loader'}>
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                    </Available>
                                                </StyledTableRow>
                                            </>
                                        ) : (
                                            <>
                                                {documentStore?.loaders &&
                                                    documentStore?.loaders.length > 0 &&
                                                     => (
                                                        <LoaderRow
                                                            key={index}
                                                            index={index}
                                                            loader={loader}
                                                            theme={theme}
                                                             => }
                                                             => }
                                                             =>
                                                                onLoaderDelete(
                                                                    loader,
                                                                    documentStore?.vectorStoreConfig,
                                                                    documentStore?.recordManagerConfig
                                                                )
                                                            }
                                                             =>
                                                                nav
                                                            }
                                                             => }
                                                        />
                                                    ))}
                                            </>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                        {getSpecificDocumentStore.data?.status === 'STALE' && (
                            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                                <Typography
                                    color='warning'
                                    style={{ color: 'darkred', fontWeight: 500, fontStyle: 'italic', fontSize: 12 }}
                                >
                                    Some files are pending processing. Please Refresh to get the latest status.
                                </Typography>
                            </div>
                        )}
                    </Stack>
                )}
            </MainCard>
            {showDialog && (
                <AddDocStoreDialog
                    dialogProps={dialogProps}
                    show={showDialog}
                     => }
                    onConfirm={onConfirm}
                />
            )}
            {showDocumentLoaderListDialog && (
                <DocumentLoaderListDialog
                    show={showDocumentLoaderListDialog}
                    dialogProps={documentLoaderListDialogProps}
                     => }
                    onDocLoaderSelected={onDocLoaderSelected}
                />
            )}
            {showDeleteDocStoreDialog && (
                <DeleteDocStoreDialog
                    show={showDeleteDocStoreDialog}
                    dialogProps={deleteDocStoreDialogProps}
                     => }
                    onDelete={onDocStoreDelete}
                />
            )}
            {showDocStoreAPIDialog && (
                <DocStoreAPIDialog
                    show={showDocStoreAPIDialog}
                    dialogProps={docStoreAPIDialogProps}
                     => }
                />
            )}
            {isBackdropLoading && <BackdropLoader open={isBackdropLoading} />}
            <ConfirmDialog />
        </>
    )
}

fun {
    
    

     => {
        event.p
        event.
        
    }

     => {
        
    }

     => {
        // Prefer files.name when files array exists and has items
         && f {
             => f.j
        }

        // Fallback to original source logic
        ) {
            
        }
         && ) {
            .j
        }
        return source || 'No source'
    }

    return (
        <>
            <TableRow hover key={props.index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
                <StyledTableCell onClick={props.onViewChunksClick} scope='row' style={{ width: '5%' }}>
                    <div
                        style={{
                            display: 'flex',
                            width: '20px',
                            height: '20px',
                            backgroundColor: props.loader?.status === 'SYNC' ? '#00e676' : '#ffe57f',
                            borderRadius: '50%'
                        }}
                    ></div>
                </StyledTableCell>
                <StyledTableCell onClick={props.onViewChunksClick} scope='row'>
                    {props.loader.loaderName}
                </StyledTableCell>
                <StyledTableCell onClick={props.onViewChunksClick}>{props.loader.splitterName ?? 'None'}</StyledTableCell>
                <StyledTableCell onClick={props.onViewChunksClick}>
                    {f}
                </StyledTableCell>
                <StyledTableCell onClick={props.onViewChunksClick}>
                    {p} />}
                </StyledTableCell>
                <StyledTableCell onClick={props.onViewChunksClick}>
                    {p} />}
                </StyledTableCell>
                <Available permission={'documentStores:preview-process,documentStores:delete-loader'}>
                    <StyledTableCell>
                        <div>
                            <Button
                                id='document-store-action-button'
                                aria-controls={open ? 'document-store-action-customized-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                disableElevation
                                 => han}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Options
                            </Button>
                            <StyledMenu
                                id='document-store-actions-customized-menu'
                                MenuListProps={{
                                    'aria-labelledby': 'document-store-actions-customized-button'
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                <Available permission={'documentStores:preview-process'}>
                                    <MenuItem onClick={props.onEditClick} disableRipple>
                                        <FileEditIcon />
                                        Preview & Process
                                    </MenuItem>
                                </Available>
                                <Available permission={'documentStores:preview-process'}>
                                    <MenuItem onClick={props.onViewChunksClick} disableRipple>
                                        <FileChunksIcon />
                                        View & Edit Chunks
                                    </MenuItem>
                                </Available>
                                <Available permission={'documentStores:preview-process'}>
                                    <MenuItem onClick={props.onChunkUpsert} disableRipple>
                                        <NoteAddIcon />
                                        Upsert Chunks
                                    </MenuItem>
                                </Available>
                                <Available permission={'documentStores:preview-process'}>
                                    <MenuItem onClick={props.onViewUpsertAPI} disableRipple>
                                        <CodeIcon />
                                        View API
                                    </MenuItem>
                                </Available>
                                <Divider sx={{ my: 0.5 }} />
                                <Available permission={'documentStores:delete-loader'}>
                                    <MenuItem onClick={props.onDeleteClick} disableRipple>
                                        <FileDeleteIcon />
                                        Delete
                                    </MenuItem>
                                </Available>
                            </StyledMenu>
                        </div>
                    </StyledTableCell>
                </Available>
            </TableRow>
        </>
    )
}

LoaderRow.propTypes = {
    loader: PropTypes.any,
    index: PropTypes.number,
    open: PropTypes.bool,
    theme: PropTypes.any,
    onViewChunksClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
    onChunkUpsert: PropTypes.func,
    onViewUpsertAPI: PropTypes.func
}
export default DocumentStoreDetails
