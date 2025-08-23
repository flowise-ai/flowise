import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// material-ui
import {
    Checkbox,
    Skeleton,
    Box,
    TableRow,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableBody,
    Button,
    Stack,
    Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import { StyledTableCell, StyledTableRow } from '@/ui-component/table/TableStyles'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import AddEditDatasetRowDialog from './AddEditDatasetRowDialog'
import UploadCSVFileDialog from '@/views/datasets/UploadCSVFileDialog'
import ErrorBoundary from '@/ErrorBoundary'
import { useError } from '@/store/context/ErrorContext'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import { PermissionButton, StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import AddEditDatasetDialog from '@/views/datasets/AddEditDatasetDialog'
import TablePagination, { DEFAULT_ITEMS_PER_PAGE } from '@/ui-component/pagination/TablePagination'

// API
import datasetsApi from '@/api/dataset'

// Hooks
import useApi from '@/hooks/useApi'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import useNotifier from '@/utils/useNotifier'
import useConfirm from '@/hooks/useConfirm'
import { useAuth } from '@/hooks/useAuth'

// icons
import empty_datasetSVG from '@/assets/images/empty_datasets.svg'
import { IconTrash, IconPlus, IconX, IconUpload, IconArrowsDownUp } from '@tabler/icons-react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

// ==============================|| Dataset Items ||============================== //

 => {
    
     => 
    
    u
    

    
    
    
    
    

    
    
    

     => )
     => )

    

    
    

    .
    const datasetId = URLpath[URLpath.length - 1] === 'dataset_rows' ? '' : URLpath[URLpath.length - 1]

    

    
    
    
    
    

    /* Table Pagination */
    
    
    
     => {
        
        
        
    }

     => {
        
        const params = {
            page: page || currentPage,
            limit: limit || pageLimit
        }
        get
    }

     => {
        draggingItem.current = position
        
        
    }
     => {
        
        dragOverItem.current = position
    }

     => {
        dragOverItem.current = position
        const updatedDataset = { ...dataset }
        up
        
        e.p
        const updatedRows = []

         => {
            updatedRows.push({
                id: item.id,
                sequenceNo: index
            })
        })
        
    }

     => {
         {
            .map((n) => n.
            
            return
        }
        
    }

     => {
        
        let newSelected = []

         {
            newSele
        } el {
            newSele)
        } el {
            newSele)
        } el {
            newSele, )
        }
        
    }

     => {
        const dialogProp = {
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            data: {
                datasetId: datasetId,
                datasetName: dataset.name
            }
        }
        
        
    }

     => {
        const dialogProp = {
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Upload',
            data: {
                datasetId: datasetId,
                datasetName: dataset.name
            }
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
        const dialogProp = {
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Save',
            data: {
                datasetName: dataset.name,
                ...item
            }
        }
        
        
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${selected.length} dataset items?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Dataset Items deleted',
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
                    message: `Failed to delete dataset items: ${
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
         {
            const dataset = getDatasetRows.data
            
            
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
                            onEdit={editDs}
                             => w}
                            search={false}
                            title={`Dataset : ${dataset?.name || ''}`}
                            description={dataset?.description}
                        >
                            <StyledPermissionButton
                                permissionId={'datasets:create,datasets:update'}
                                variant='outlined'
                                color='secondary'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={uploadCSV}
                                startIcon={<IconUpload />}
                            >
                                Upload CSV
                            </StyledPermissionButton>
                            <StyledPermissionButton
                                permissionId={'datasets:create,datasets:update'}
                                variant='contained'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={addNew}
                                startIcon={<IconPlus />}
                            >
                                New Item
                            </StyledPermissionButton>
                        </ViewHeader>
                        {selected.length > 0 && (
                            <PermissionButton
                                permissionId={'datasets:delete'}
                                sx={{ mt: 1, mb: 2, width: 'max-content' }}
                                variant='outlined'
                                onClick={deleteDatasetItems}
                                color='error'
                                startIcon={<IconTrash />}
                            >
                                Delete {selected.length} {selected.length === 1 ? 'item' : 'items'}
                            </PermissionButton>
                        )}
                        {!isLoading && dataset?.rows?.length <= 0 ? (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                <Box sx={{ p: 2, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                        src={empty_datasetSVG}
                                        alt='empty_datasetSVG'
                                    />
                                </Box>
                                <div>No Dataset Items Yet</div>
                                <StyledPermissionButton
                                    permissionId={'datasets:create,datasets:update'}
                                    variant='contained'
                                    sx={{ borderRadius: 2, height: '100%', mt: 2, color: 'white' }}
                                    startIcon={<IconPlus />}
                                    onClick={addNew}
                                >
                                    New Item
                                </StyledPermissionButton>
                            </Stack>
                        ) : (
                            <React.Fragment>
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
                                                <StyledTableCell padding='checkbox'>
                                                    <Checkbox
                                                        color='primary'
                                                        .length}
                                                        onChange={onSelectAllClick}
                                                        inputProps={{
                                                            'aria-label': 'select all'
                                                        }}
                                                    />
                                                </StyledTableCell>
                                                <StyledTableCell>Input</StyledTableCell>
                                                <StyledTableCell>Expected Output</StyledTableCell>
                                                <StyledTableCell style={{ width: '1%' }}>
                                                    <IconArrowsDownUp />
                                                </StyledTableCell>
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
                                                    </StyledTableRow>
                                                </>
                                            ) : (
                                                <>
                                                    {(.map(( => (
                                                        <StyledTableRow
                                                            draggable={Draggable}
                                                             => han}
                                                             => e.p}
                                                             => han}
                                                             => han}
                                                            hover
                                                            key={index}
                                                            sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <StyledTableCell
                                                                padding='checkbox'
                                                                 => }
                                                                 => }
                                                            >
                                                                <Checkbox
                                                                    color='primary'
                                                                     !== -1}
                                                                     => han}
                                                                    inputProps={{
                                                                        'aria-labelledby': item.id
                                                                    }}
                                                                />
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                 => e}
                                                                 => }
                                                                 => }
                                                            >
                                                                {item.input}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                 => e}
                                                                 => }
                                                                 => }
                                                            >
                                                                {item.output}
                                                            </StyledTableCell>
                                                            <StyledTableCell style={{ width: '1%' }}>
                                                                <DragIndicatorIcon
                                                                     => }
                                                                     => }
                                                                />
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Typography sx={{ color: theme.palette.grey[600], marginTop: -2 }} variant='subtitle2'>
                                    < to reorder the dataset items</i>
                                </Typography>
                                {/* Pagination and Page Size Controls */}
                                <TablePagination currentPage={currentPage} limit={pageLimit} total={total} onChange={onChange} />
                            </React.Fragment>
                        )}
                    </Stack>
                )}
            </MainCard>
            <AddEditDatasetRowDialog
                show={showRowDialog}
                dialogProps={rowDialogProps}
                 => }
                onConfirm={onConfirm}
            ></AddEditDatasetRowDialog>
            {showUploadDialog && (
                <UploadCSVFileDialog
                    show={showUploadDialog}
                    dialogProps={rowDialogProps}
                     => }
                    onConfirm={onConfirm}
                ></UploadCSVFileDialog>
            )}
            {showDatasetDialog && (
                <AddEditDatasetDialog
                    show={showDatasetDialog}
                    dialogProps={datasetDialogProps}
                     => }
                    onConfirm={onConfirm}
                ></AddEditDatasetDialog>
            )}
            <ConfirmDialog />
        </>
    )
}

export default EvalDatasetRows
