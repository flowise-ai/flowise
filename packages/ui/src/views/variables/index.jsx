import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import moment from 'moment'

// material-ui
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import {
    Button,
    Box,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
    useTheme
} from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import AddEditVariableDialog from './AddEditVariableDialog'
import HowToUseVariablesDialog from './HowToUseVariablesDialog'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { StyledPermissionButton } from '@/ui-component/button/RBACButtons'
import { Available } from '@/ui-component/rbac/available'
import { refreshVariablesCache } from '@/ui-component/input/suggestionOption'
import TablePagination, { DEFAULT_ITEMS_PER_PAGE } from '@/ui-component/pagination/TablePagination'

// API
import variablesApi from '@/api/variables'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// utils
import useNotifier from '@/utils/useNotifier'

// Icons
import { IconTrash, IconEdit, IconX, IconPlus, IconVariable } from '@tabler/icons-react'
import VariablesEmptySVG from '@/assets/images/variables_empty.svg'

// const
import { useError } from '@/store/context/ErrorContext'

(({ theme }) => ({
    borderColor: theme.palette.grey[900] + 25,

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

// ==============================|| Credentials ||============================== //

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
        getAllVa
    }

     => {
        
    }
    fun {
        .) > -1
    }

     => {
        const dialogProp = {
            type: 'ADD',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            customBtnId: 'btn_confirmAddingVariable',
            data: {}
        }
        
        
    }

     => {
        const dialogProp = {
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Save',
            data: variable
        }
        
        
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete variable ${variable.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Variable deleted',
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
                    message: `Failed to delete Variable: ${
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
                            searchPlaceholder='Search Variables'
                            title='Variables'
                            description='Create and manage global variables'
                        >
                            <Butt => }>
                                How To Use
                            </Button>
                            <StyledPermissionButton
                                permissionId={'variables:create'}
                                variant='contained'
                                sx={{ borderRadius: 2, height: '100%' }}
                                onClick={addNew}
                                startIcon={<IconPlus />}
                                id='btn_createVariable'
                            >
                                Add Variable
                            </StyledPermissionButton>
                        </ViewHeader>
                        {!isLoading && variables.length === 0 ? (
                            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                <Box sx={{ p: 2, height: 'auto' }}>
                                    <img
                                        style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                        src={VariablesEmptySVG}
                                        alt='VariablesEmptySVG'
                                    />
                                </Box>
                                <div>No Variables Yet</div>
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
                                                <StyledTableCell>Name</StyledTableCell>
                                                <StyledTableCell>Value</StyledTableCell>
                                                <StyledTableCell>Type</StyledTableCell>
                                                <StyledTableCell>Last Updated</StyledTableCell>
                                                <StyledTableCell>Created</StyledTableCell>
                                                <Available permissionId={'variables:update'}>
                                                    <StyledTableCell> </StyledTableCell>
                                                </Available>
                                                <Available permissionId={'variables:delete'}>
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
                                                        <StyledTableCell>
                                                            <Skeleton variant='text' />
                                                        </StyledTableCell>
                                                        <Available permission={'variables:create,variables:update'}>
                                                            <StyledTableCell>
                                                                <Skeleton variant='text' />
                                                            </StyledTableCell>
                                                        </Available>
                                                        <Available permission={'variables:delete'}>
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
                                                        <Available permission={'variables:create,variables:update'}>
                                                            <StyledTableCell>
                                                                <Skeleton variant='text' />
                                                            </StyledTableCell>
                                                        </Available>
                                                        <Available permission={'variables:delete'}>
                                                            <StyledTableCell>
                                                                <Skeleton variant='text' />
                                                            </StyledTableCell>
                                                        </Available>
                                                    </StyledTableRow>
                                                </>
                                            ) : (
                                                <>
                                                    {va.map((va => (
                                                        <StyledTableRow
                                                            key={index}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <StyledTableCell component='th' scope='row'>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'row',
                                                                        alignItems: 'center'
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: 25,
                                                                            height: 25,
                                                                            marginRight: 10,
                                                                            borderRadius: '50%'
                                                                        }}
                                                                    >
                                                                        <IconVariable
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                borderRadius: '50%',
                                                                                objectFit: 'contain'
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    {variable.name}
                                                                </div>
                                                            </StyledTableCell>
                                                            <StyledTableCell>{variable.value}</StyledTableCell>
                                                            <StyledTableCell>
                                                                <Chip
                                                                    color={variable.type === 'static' ? 'info' : 'secondary'}
                                                                    size='small'
                                                                    label={variable.type}
                                                                />
                                                            </StyledTableCell>
                                                            <StyledTableCell>
                                                                {m.f}
                                                            </StyledTableCell>
                                                            <StyledTableCell>
                                                                {m.f}
                                                            </StyledTableCell>
                                                            <Available permission={'variables:create,variables:update'}>
                                                                <StyledTableCell>
                                                                    <I => e}>
                                                                        <IconEdit />
                                                                    </IconButton>
                                                                </StyledTableCell>
                                                            </Available>
                                                            <Available permission={'variables:delete'}>
                                                                <StyledTableCell>
                                                                    <IconButton
                                                                        title='Delete'
                                                                        color='error'
                                                                         => }
                                                                    >
                                                                        <IconTrash />
                                                                    </IconButton>
                                                                </StyledTableCell>
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
            <AddEditVariableDialog
                show={showVariableDialog}
                dialogProps={variableDialogProps}
                 => }
                onConfirm={onConfirm}
                setError={setError}
            ></AddEditVariableDialog>
            <H => }></HowToUseVariablesDialog>
            <ConfirmDialog />
        </>
    )
}

export default Variables
