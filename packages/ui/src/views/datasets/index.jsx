import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/moment'
import { useNavigate } from 'react-router-dom'

// material-ui
import {
    Skeleton,
    Box,
    Stack,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Button
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import AddEditDatasetDialog from './AddEditDatasetDialog'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { StyledTableCell, StyledTableRow } from '@/ui-component/table/TableStyles'
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import { Available } from '@/ui-component/rbac/available'
import TablePagination, { DEFAULT_ITEMS_PER_PAGE } from '@/ui-component/pagination/TablePagination'

// API
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import useConfirm from '@/hooks/useConfirm'
import datasetsApi from '@/api/dataset'

// Hooks
import useApi from '@/hooks/useApi'
import useNotifier from '@/utils/useNotifier'

// icons
import empty_datasetSVG from '@/assets/images/empty_datasets.svg'
import { IconTrash, IconEdit, IconPlus, IconX } from '@tabler/icons-react'

// Utils
import { truncateString } from '@/utils/genericHelper'

import { useError } from '@/store/context/ErrorContext'

// ==============================|| Datasets ||============================== //

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
        getAll
    }

     => {
        nav
    }

     => {
        
    }

     => {
        const dialogProp = {
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            data: {}
        }
        
        
    }

     => {
        const dialogProp = {
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Save',
            data: dataset
        }
        
        
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete dataset ${dataset.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Dataset deleted',
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
                    message: `Failed to delete dataset: ${
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

    fun {
        .) > -1
    }

    u => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
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
                            isBackButton={false}
                            isEditButton={false}
                            onSearchChange={onSearchChange}
                            search={true}
                            title='Datasets'
                            description=''
                        >
                            <StyledPermissionButton
                                permissionId={'datasets:create'}
                                variant='contained'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={addNew}
                                startIcon={<IconPlus />}
                            >
                                Add New
                            </StyledPermissionButton>
                        </ViewHeader>
                        {!isLoading && datasets.length <= 0 ? (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                <Box sx={{ p: 2, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                        src={empty_datasetSVG}
                                        alt='empty_datasetSVG'
                                    />
                                </Box>
                                <div>No Datasets Yet</div>
                            </Stack>
                        ) : (
                            <>
                                <TableContainer
                                    sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }}
                                    component={Paper}
                                >
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableHead
                                            sx={{
                                                backgroundColor: customization.isDarkMode
                                                    ? theme.palette.common.black
                                                    : theme.palette.grey[100],
                                                height: 56
                                            }}
                                        >
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Rows</TableCell>
                                                <TableCell>Last Updated</TableCell>
                                                <Available permission={'datasets:update,datasets:create'}>
                                                    <TableCell> </TableCell>
                                                </Available>
                                                <Available permission={'datasets:delete'}>
                                                    <TableCell> </TableCell>
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
                                                        <Available permission={'datasets:update,datasets:create'}>
                                                            <Skeleton variant='text' />
                                                        </Available>
                                                        <Available permission={'datasets:delete'}>
                                                            <Skeleton variant='text' />
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
                                                        <Available permission={'datasets:update,datasets:create'}>
                                                            <Skeleton variant='text' />
                                                        </Available>
                                                        <Available permission={'datasets:delete'}>
                                                            <Skeleton variant='text' />
                                                        </Available>
                                                    </StyledTableRow>
                                                </>
                                            ) : (
                                                <>
                                                    {.map(( => (
                                                        <StyledTableRow
                                                            hover
                                                            key={index}
                                                            sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell  => g} component='th' scope='row'>
                                                                {ds.name}
                                                            </TableCell>
                                                            <TableCell
                                                                 => g}
                                                                style={{ wordWrap: 'break-word', flexWrap: 'wrap', width: '40%' }}
                                                            >
                                                                {t}
                                                            </TableCell>
                                                            <TableCell  => g}>{ds?.rowCount}</TableCell>
                                                            <TableCell  => g}>
                                                                {m.f}
                                                            </TableCell>
                                                            <Available permission={'datasets:update,datasets:create'}>
                                                                <TableCell>
                                                                    <I => e}>
                                                                        <IconEdit />
                                                                    </IconButton>
                                                                </TableCell>
                                                            </Available>
                                                            <Available permission={'datasets:delete'}>
                                                                <TableCell>
                                                                    <IconButton
                                                                        title='Delete'
                                                                        color='error'
                                                                         => }
                                                                    >
                                                                        <IconTrash />
                                                                    </IconButton>
                                                                </TableCell>
                                                            </Available>
                                                        </StyledTableRow>
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
            <AddEditDatasetDialog
                show={showDatasetDialog}
                dialogProps={datasetDialogProps}
                 => }
                onConfirm={onConfirm}
            ></AddEditDatasetDialog>
            <ConfirmDialog />
        </>
    )
}

export default EvalDatasets
