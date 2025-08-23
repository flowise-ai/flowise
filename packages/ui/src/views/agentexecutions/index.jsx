import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// material-ui
import {
    Box,
    Stack,
    TextField,
    MenuItem,
    Button,
    Grid,
    FormControl,
    InputLabel,
    Select,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Tooltip,
    useTheme
} from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ErrorBoundary from '@/ErrorBoundary'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import { Available } from '@/ui-component/rbac/available'

// API
import useApi from '@/hooks/useApi'
import executionsApi from '@/api/executions'
import { useSelector } from 'react-redux'

// icons
import execution_empty from '@/assets/images/executions_empty.svg'
import { IconTrash } from '@tabler/icons-react'

// const
import { ExecutionsListTable } from '@/ui-component/table/ExecutionsListTable'
import { ExecutionDetails } from './ExecutionDetails'
import { omit } from 'lodash'
import TablePagination, { DEFAULT_ITEMS_PER_PAGE } from '@/ui-component/pagination/TablePagination'

// ==============================|| AGENT EXECUTIONS ||============================== //

 => {
    
     => 
    const borderColor = theme.palette.grey[900] + 25

    
    
    

    
    
    
    
    
    
    
    
    const [filters, setFilters] = useState({
        state: '',
        startDate: null,
        endDate: null,
        agentflowId: '',
        sessionId: ''
    })

     => {
        setFilters({
            ...filters,
            [field]: value
        })
    }

     => {
        
        up

        setFilters({
            ...filters,
            [field]: updatedDate
        })
    }

    /* Table Pagination */
    
    
    
     => {
        
        
        applyF
    }

     => {
        
        // Ensure page and limit are numbers, not objects
        const pageNum = typeof page === 'number' ? page : currentPage
        const limitNum = typeof limit === 'number' ? limit : pageLimit

        const params = {
            page: pageNum,
            limit: limitNum
        }

         params.state = filters.state

        // Create date strings that preserve the exact date values
         {
            
            // Format date as YYYY-MM-DD and set to start of day in UTC
            // This ensures the server sees the same date we've selected regardless of timezone
            
             + 1).pa
            ).pa
            params.startDate = `${year}-${month}-${day}T00:00:00.000Z`
        }

         {
            
            // Format date as YYYY-MM-DD and set to end of day in UTC
            
             + 1).pa
            ).pa
            params.endDate = `${year}-${month}-${day}T23:59:59.999Z`
        }

         params.agentflowId = filters.agentflowId
         params.sessionId = filters.sessionId

        getAllExe
    }

     => {
        setFilters({
            state: '',
            startDate: null,
            endDate: null,
            agentflowId: '',
            sessionId: ''
        })
        
        getAllExe
    }

     => {
        
    }

     => {
         {
            
        }
    }

     => {
        
    }

     => {
        
        
    }

    u => {
        getAllExe

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            try {
                const { data, total } = getAllExecutions.data
                ) return
                
                
            }  {
                
            }
        }
    }, 

    u => {
        
    }, 

    u => {
        
    }, 

    u => {
         {
            // Refresh the executions list
            getAllExecutions.request({
                page: currentPage,
                limit: pageLimit
            })
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const execution = getExecutionByIdApi.data
            const executionDetails =
                type : execution.executionData
            
            const newMetadata = {
                ...,
                agentflow: {
                    ...selectedMetadata.agentflow
                }
            }
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <MainCard>
            {error ? (
                <ErrorBoundary error={error} />
            ) : (
                <Stack flexDirection='column' sx={{ gap: 3 }}>
                    <ViewHeader title='Agent Executions' description='Monitor and manage agentflows executions' />

                    {/* Filter Section */}
                    <Box sx={{ mb: 2, width: '100%' }}>
                        <Grid container spacing={2} alignItems='center'>
                            <Grid item xs={12} md={2}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id='state-select-label'>State</InputLabel>
                                    <Select
                                        labelId='state-select-label'
                                        value={filters.state}
                                        label='State'
                                         => han}
                                        size='small'
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: borderColor
                                            },
                                            '& .MuiSvgIcon-root': {
                                                color: customization.isDarkMode ? '#fff' : 'inherit'
                                            }
                                        }}
                                    >
                                        <MenuItem value=''>All</MenuItem>
                                        <MenuItem value='INPROGRESS'>In Progress</MenuItem>
                                        <MenuItem value='FINISHED'>Finished</MenuItem>
                                        <MenuItem value='ERROR'>Error</MenuItem>
                                        <MenuItem value='TERMINATED'>Terminated</MenuItem>
                                        <MenuItem value='TIMEOUT'>Timeout</MenuItem>
                                        <MenuItem value='STOPPED'>Stopped</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <DatePicker
                                    selected={filters.startDate}
                                     => }
                                    selectsStart
                                    startDate={filters.startDate}
                                    className='form-control'
                                    wrapperClassName='datePicker'
                                    max}
                                    customInput={
                                        <TextField
                                            size='small'
                                            label='Start date'
                                            fullWidth
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: borderColor
                                                }
                                            }}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid sx={{ ml: -1 }} item xs={12} md={2}>
                                <DatePicker
                                    selected={filters.endDate}
                                     => }
                                    selectsEnd
                                    endDate={filters.endDate}
                                    className='form-control'
                                    wrapperClassName='datePicker'
                                    minDate={filters.startDate}
                                    max}
                                    customInput={
                                        <TextField
                                            size='small'
                                            label='End date'
                                            fullWidth
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: borderColor
                                                }
                                            }}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid sx={{ ml: -1 }} item xs={12} md={2}>
                                <TextField
                                    fullWidth
                                    label='Session ID'
                                    value={filters.sessionId}
                                     => han}
                                    size='small'
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: borderColor
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Stack direction='row' spacing={1}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                         => applyF}
                                        size='small'
                                    >
                                        Apply
                                    </Button>
                                    <Button variant='outlined' onClick={resetFilters} size='small'>
                                        Reset
                                    </Button>
                                    <Available permissions={['executions:delete']}>
                                        <Tooltip title='Delete selected executions'>
                                            <span>
                                                <IconButton
                                                    sx={{ height: 30, width: 30 }}
                                                    size='small'
                                                    color='error'
                                                    onClick={handleDeleteDialogOpen}
                                                    edge='end'
                                                    disabled={selectedExecutionIds.length === 0}
                                                >
                                                    <IconTrash />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    </Available>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>

                    {executions?.length > 0 && (
                        <>
                            <ExecutionsListTable
                                data={executions}
                                isLoading={isLoading}
                                onSelectionChange={handleExecutionSelectionChange}
                                 => {
                                    
                                    const executionDetails =
                                        typeof execution.executionData === 'string'
                                            ? JSON.pa
                                            : execution.executionData
                                    
                                    )
                                }}
                            />

                            {/* Pagination and Page Size Controls */}
                            {!isLoading && total > 0 && (
                                <TablePagination currentPage={currentPage} limit={pageLimit} total={total} onChange={onChange} />
                            )}

                            <ExecutionDetails
                                open={openDrawer}
                                execution={selectedExecutionData}
                                metadata={selectedMetadata}
                                 => }
                                 => {
                                    
                                    getAllExe
                                }}
                                 => {
                                    getAllExe
                                }}
                                 => {
                                    getAllExe
                                    getExe
                                }}
                            />
                        </>
                    )}

                    {/* Delete Confirmation Dialog */}
                    <Dialog
                        open={openDeleteDialog}
                        onClose={handleDeleteDialogClose}
                        aria-labelledby='alert-dialog-title'
                        aria-describedby='alert-dialog-description'
                    >
                        <DialogTitle id='alert-dialog-title'>Confirm Deletion</DialogTitle>
                        <DialogContent>
                            <DialogContentText id='alert-dialog-description'>
                                Are you sure you want to delete {selectedExecutionIds.length} execution
                                {selectedExecutionIds.length !== 1 ? 's' : ''}? This action cannot be undone.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDeleteDialogClose} color='primary'>
                                Cancel
                            </Button>
                            <Button onClick={handleDeleteExecutions} color='error'>
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>

                    { && (
                        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                            <Box sx={{ p: 2, height: 'auto' }}>
                                <img
                                    style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                    src={execution_empty}
                                    alt='execution_empty'
                                />
                            </Box>
                            <div>No Executions Yet</div>
                        </Stack>
                    )}
                </Stack>
            )}
        </MainCard>
    )
}

export default AgentExecutions
