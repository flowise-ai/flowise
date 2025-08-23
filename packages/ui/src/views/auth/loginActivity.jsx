import { forwardRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment/moment'
import PropTypes from 'prop-types'

// material-ui
import {
    Box,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    useTheme,
    Checkbox,
    Button,
    OutlinedInput,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    ListItemText,
    ListItemButton
} from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { StyledTableCell, StyledTableRow } from '@/ui-component/table/TableStyles'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// API
import auditApi from '@/api/audit'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'

// utils
import useNotifier from '@/utils/useNotifier'

// Icons
import { IconCircleX, IconChevronLeft, IconChevronRight, IconTrash, IconX, IconLogin, IconLogout } from '@tabler/icons-react'

// store
import { useError } from '@/store/context/ErrorContext'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'
import { PermissionButton } from '@/ui-component/button/RBACButtons'

const activityTypes = [
    'Login Success',
    'Logout Success',
    'Unknown User',
    'Incorrect Credential',
    'User Disabled',
    'No Assigned Workspace',
    'Unknown Activity'
]
const MenuProps = {
    PaperProps: {
        style: {
            width: 160
        }
    }
}
const SelectStyles = {
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: 2
    }
}

// ==============================|| Login Activity ||============================== //

 {
    return (
        <ListItemButton style={{ borderRadius: 15, border: '1px solid #e0e0e0' }} onClick={onClick} ref={ref}>
            {value}
        </ListItemButton>
    )
})

DatePickerCustomInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}
 => {
    
     => 
    
    u
    

     => )
     => )

    

    

    
    
    
    
    
    
    
    ..getM - 1)))
    )

    

     => {
        
        
    }

     => {
        
        
    }

     => {
         {
             => n.
            
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
        const activityCodes = []
         {
            _f => {
                a)
            })
        }
        getLoginActivityApi.request({
            pageNo: _page,
            startDate: _start,
            endDate: _end,
            activityCodes: activityCodes
        })
    }

     => {
        
        
        
    }

     => {
        const {
            target: { value }
        } = event
        let newVa : value
        
        
    }

    fun {
         {
            case 0:
                return 'Login Success'
            case 1:
                return 'Logout Success'
            case -1:
                return 'Unknown User'
            case -2:
                return 'Incorrect Credential'
            case -3:
                return 'User Disabled'
            case -4:
                return 'No Assigned Workspace'
            default:
                return 'Unknown Activity'
        }
    }

    fun {
         {
            case 'Login Success':
                return 0
            case 'Logout Success':
                return 1
            case 'Unknown User':
                return -1
            case 'Incorrect Credential':
                return -2
            case 'User Disabled':
                return -3
            case 'No Assigned Workspace':
                return -4
            default:
                return -99
        }
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${selected.length} ${selected.length > 1 ? 'records' : 'record'}? `,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        
        //
         {
            try {
                const deleteResp = await auditApi.deleteLoginActivity({
                    selected: selected
                })
                 {
                    enqueueSnackbar({
                        message: selected.length + ' Login Activity Records Deleted Successfully',
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
                    message: `Failed to delete records: ${
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
        getL
    }

    u => {
        getLoginActivityApi.request({
            pageNo: 1
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
            const data = getLoginActivityApi.data
            
            
            
            )
            
            
            
        }
    }, 

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 3 }}>
                        <ViewHeader search={false} title='Login Activity'></ViewHeader>
                        <Stack flexDirection='row'>
                            <Box sx={{ p: 2, height: 'auto', width: '100%' }}>
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        overflow: 'hidden',
                                        marginBottom: 10
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <div style={{ marginRight: 10 }}>
                                            <b style={{ marginRight: 10 }}>From: </b>
                                            <DatePicker
                                                selected={startDate}
                                                 => }
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                customInput={<DatePickerCustomInput />}
                                            />
                                        </div>
                                        <div style={{ marginRight: 10 }}>
                                            <b style={{ marginRight: 10 }}>To: </b>
                                            <DatePicker
                                                selected={endDate}
                                                 => }
                                                selectsEnd
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={startDate}
                                                max}
                                                customInput={<DatePickerCustomInput />}
                                            />
                                        </div>
                                        <div>
                                            <FormControl
                                                sx={{
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'end',
                                                    minWidth: 300,
                                                    maxWidth: 300
                                                }}
                                            >
                                                <InputLabel size='small' id='type-label'>
                                                    Filter By
                                                </InputLabel>
                                                <Select
                                                    size='small'
                                                    labelId='type-label'
                                                    multiple
                                                    value={typeFilter}
                                                    onChange={handleTypeFilterChange}
                                                    id='type-checkbox'
                                                    input={<OutlinedInput label='Badge' />}
                                                     => }
                                                    MenuProps={MenuProps}
                                                    sx={SelectStyles}
                                                >
                                                    {a => (
                                                        <MenuItem
                                                            key={name}
                                                            value={name}
                                                            sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}
                                                        >
                                                            <Che > -1} sx={{ p: 0 }} />
                                                            <ListItemText primary={name} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginRight: 10,
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <IconButton
                                                size='small'
                                                 => }
                                                style={{ marginRight: 10 }}
                                                variant='outlined'
                                                disabled={currentPage === 1}
                                            >
                                                <IconChevronLeft
                                                    color={
                                                        customization.isDarkMode
                                                            ? currentPage === 1
                                                                ? '#616161'
                                                                : 'white'
                                                            : currentPage === 1
                                                            ? '#e0e0e0'
                                                            : 'black'
                                                    }
                                                />
                                            </IconButton>
                                            Sh}-{end} of {totalRecords} Records
                                            <IconButton
                                                size='small'
                                                 => }
                                                style={{ marginLeft: 10 }}
                                                variant='outlined'
                                                disabled={end >= totalRecords}
                                            >
                                                <IconChevronRight
                                                    color={
                                                        customization.isDarkMode
                                                            ? end >= totalRecords
                                                                ? '#616161'
                                                                : 'white'
                                                            : end >= totalRecords
                                                            ? '#e0e0e0'
                                                            : 'black'
                                                    }
                                                />
                                            </IconButton>
                                        </div>
                                        <PermissionButton
                                            permissionId={'loginActivity:delete'}
                                            sx={{ mt: 1, mb: 2 }}
                                            variant='outlined'
                                            disabled={selected.length === 0}
                                            onClick={deleteLoginActivity}
                                            color='error'
                                            startIcon={<IconTrash />}
                                        >
                                            {'Delete Selected'}
                                        </PermissionButton>
                                    </div>
                                </div>
                                <TableContainer
                                    style={{ display: 'flex', flexDirection: 'row' }}
                                    sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }}
                                    component={Paper}
                                >
                                    <Table sx={{ minWidth: 650 }} aria-label='users table'>
                                        <TableHead
                                            sx={{
                                                backgroundColor: customization.isDarkMode
                                                    ? theme.palette.common.black
                                                    : theme.palette.grey[100],
                                                height: 40
                                            }}
                                        >
                                            <TableRow>
                                                <StyledTableCell style={{ width: '5%' }}>
                                                    <Checkbox
                                                        color='primary'
                                                        .length}
                                                        onChange={onSelectAllClick}
                                                    />
                                                </StyledTableCell>
                                                <StyledTableCell>Activity</StyledTableCell>
                                                <StyledTableCell>User</StyledTableCell>
                                                <StyledTableCell>Date</StyledTableCell>
                                                <StyledTableCell>Method</StyledTableCell>
                                                <StyledTableCell>Message</StyledTableCell>
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
                                                    {a => (
                                                        <StyledTableRow
                                                            hover
                                                            key={index}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <StyledTableCell component='th' scope='row' style={{ width: '5%' }}>
                                                                <Checkbox
                                                                    color='primary'
                                                                     !== -1}
                                                                     => han}
                                                                />
                                                            </StyledTableCell>
                                                            <StyledTableCell component='th' scope='row'>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'row',
                                                                        alignItems: 'left'
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: 25,
                                                                            height: 25,
                                                                            borderRadius: '50%',
                                                                            marginRight: 10
                                                                        }}
                                                                    >
                                                                        {item.activityCode === 0 && (
                                                                            <IconLogin
                                                                                style={{
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    borderRadius: '50%',
                                                                                    objectFit: 'contain',
                                                                                    color: theme.palette.success.dark
                                                                                }}
                                                                            />
                                                                        )}
                                                                        {item.activityCode === 1 && (
                                                                            <IconLogout
                                                                                style={{
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    borderRadius: '50%',
                                                                                    objectFit: 'contain',
                                                                                    color: theme.palette.secondary.dark
                                                                                }}
                                                                            />
                                                                        )}
                                                                        {item.activityCode < 0 && (
                                                                            <IconCircleX
                                                                                style={{
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    borderRadius: '50%',
                                                                                    objectFit: 'contain',
                                                                                    color: theme.palette.error.dark
                                                                                }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                    <}</div>
                                                                </div>
                                                            </StyledTableCell>
                                                            <StyledTableCell>{item.username}</StyledTableCell>
                                                            <StyledTableCell>
                                                                {m.f}
                                                            </StyledTableCell>
                                                            <StyledTableCell>
                                                                {item.loginMode ? item.loginMode : 'Email/Password'}
                                                            </StyledTableCell>
                                                            <StyledTableCell>{item.message}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Stack>
                    </Stack>
                )}
            </MainCard>
            <ConfirmDialog />
        </>
    )
}

export default LoginActivity
