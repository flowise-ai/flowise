import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Material
import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Box,
    Chip,
    Typography,
    TextField,
    Stack,
    Tooltip,
    styled,
    Popper,
    CircularProgress
} from '@mui/material'
import { autocompleteClasses } from '@mui/material/Autocomplete'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// Icons
import { IconX, IconCircleCheck, IconUser } from '@tabler/icons-react'

// API
import accountApi from '@/api/account.api'
import roleApi from '@/api/role'
import userApi from '@/api/user'
import workspaceApi from '@/api/workspace'

// Hooks
import useApi from '@/hooks/useApi'

// utils
import useNotifier from '@/utils/useNotifier'

// store
import {
    enqueueSnackbar as enqueueSnackbarAction,
    closeSnackbar as closeSnackbarAction,
    HIDE_CANVAS_DIALOG,
    SHOW_CANVAS_DIALOG
} from '@/store/actions'

(({ theme,  => {
    let backgroundColor, color
     {
        case 'new':
            backgroundColor = theme.palette.success.light
            color = theme.palette.success.contrastText
            break
        case 'existing':
            backgroundColor = theme.palette.primary.main
            color = theme.palette.primary.contrastText
            break
        case 'already-in-workspace':
            backgroundColor = theme.palette.grey[300]
            color = theme.palette.text.primary
            break
        default:
            backgroundColor = theme.palette.primary.main
            color = theme.palette.primary.contrastText
    }
    return {
        backgroundColor,
        color,
        '& .MuiChip-deleteIcon': {
            color
        }
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

 => {
    

    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

     => 

    
    
    
    
    
    
    
    
    
    

    
    
    

    u => {
         {
             => ({
                id: workspace.id,
                label: workspace.name,
                name: workspace.name,
                description: workspace.description
            }))
            
             {
                // when clicking on edit user in users page
                const userActiveWorkspace = workspaces.find(
                    (w => workspace.id === dialogProps.data.activeWorkspaceId || workspace.id === dialogProps.data.workspaceId
                )
                
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
             => ({
                id: role.id,
                name: role.name,
                label: role.name,
                description: role.description
            }))
            
            if (
                dialogProps.type === 'EDIT' &&
                dialogProps.data &&
                A &&
                dialogProps.data.assignedRoles.length > 0
            ) {
                 => 
                 
            }
             {
                 => 
                 
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const data = getWorkspacesByUserIdApi.data[0]
            const selectedRole = {
                id: data.role.id,
                label: data.role.name,
                name: data.role.name,
                description: data.role.description
            }
            const selectedWorkspace = {
                id: data.workspace.id,
                label: data.workspace.name,
                name: data.workspace.name,
                description: data.workspace.description
            }
            
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        getAllR
        getAllW
        
        
        
        fet
         {
            // when clicking on add user in workspace page
            const workspace = dialogProps.data
            setSelectedWorkspace({
                id: workspace.id,
                label: workspace.name,
                name: workspace.name,
                description: workspace.description
            })
        } el {
            // when clicking on add user in users page
            
        } el {
            getW
        }
         => {
            
            
            
            
            
            
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
             {
                 => 
                const selectedUserObj = {
                    ...selectedUser,
                    isNewUser: false,
                    alreadyInWorkspace: true
                }
                // when clicking on edit user in users page
                han
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

     => {
        try {
            
             {
                let existingUserIds = []

                 {
                    // If we'
                    // Get existing workspace users
                    
                    ex => u
                    
                } el {
                    // If we'
                    // The existing users are already in the response.data
                    ex => u .map((u => u
                    
                }

                // Filter out:
                // 1. Current user
                // 2. Organization owners
                // 3. U
                // 4. A
                const filteredUsers = response.data.filter(
                    (u => u
                )

                 => f
                 => f // Set original list only once
            }
        }  {
            
        }
    }

     => {
         {
            const existingEmails = []
            f {
                 => u) {
                    ex
                }
            }
             {
                enqueueSnackbar({
                    me}`,
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
        }
        
        try {
            const responses = await Promise.all(
                 => {
                    const saveObj = item.isNewUser
                        ? {
                              user: {
                                  email: item.email,
                                  createdBy: currentUser.id
                              },
                              workspace: {
                                  id: selectedWorkspace.id
                              },
                              role: {
                                  id: selectedRole.id
                              }
                          }
                        : {
                              user: {
                                  email: item.user.email,
                                  createdBy: currentUser.id
                              },
                              workspace: {
                                  id: selectedWorkspace.id
                              },
                              role: {
                                  id: selectedRole.id
                              }
                          }

                    
                    return response.data
                })
            )
             {
                enqueueSnackbar({
                    message: 'Users invited to workspace',
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
                 // Pass the first ID or modify as needed
            } else {
                th
            }
        }  {
            
            enqueueSnackbar({
                message: `Failed to invite users to workspace: ${error.response?.data?.message || error.message || 'Unknown error'}`,
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
        } finally {
            
        }
    }

     => {
        return email.match(
            /^((*)|(".+"))@((\|((+)$/
        )
    }

     => {
        const updatedUsers = newValue
            .f => {
                 {
                    // For new invites, validate the email
                    
                }
                return true // Keep all existing users
            })
            .map(( => {
                 {
                    // This is a new invite
                    return {
                        email: item.email,
                        isNewUser: true,
                        alreadyInWorkspace: false
                    }
                } else {
                    const existingUser =
                        userSearchResults.length > 0
                            ? u => 
                            :  => 
                    return {
                        ...existingUser,
                        isNewUser: false,
                        alreadyInWorkspace: selectedWorkspace
                            ? existingUser &&
                              existingUser.workspaceNames &&
                              ex => w
                            : false
                    }
                }
            })

        

        // If any invalid emails were filtered out, show a notification
         {
            enqueueSnackbar({
                message: 'One or more invalid emails were removed.',
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
    }

     => {
        
        
        const filteredUsers = allUsers.filter(
            ( => . || .
        )
        
         => {
            const newResults = [...prevResults]
            f => {
                 => ) {
                    newRe
                }
            })
            return newResults
        })
    }

     => {
         =>  ?? []

        // First filter out already selected users
         => .map((u => u

         => )

        const filterByNameOrEmail = unselectedOptions.filter(
            ( =>
                (.)) ||
                (.))
        )

        // Early email detection regex
        const partialEmailRegex = /^[^\s@]+@?[^\s@]*$/

        ) {
            // If , show the invite option
             ? inputValue : `${inputValue}@`
            // Check if this email is already in the selected users list
            const isAlreadySelected = selectedUsers.some(
                (u =>
                    (u || (
            )

             {
                return [{ name: `Invite ${inviteEmail}`, email: inviteEmail, isNewUser: true }]
            }
        }

         {
            return [{ name: 'No results found', email: '', isNoResult: true, disabled: true }]
        }

        return filterByNameOrEmail
    }

     => (
        <TextField {...params} variant='outlined' placeholder={selectedUsers.length > 0 ? '' : 'Invite users by name or email'} />
    )

     => {
        // Custom logic to determine if an option is selected, since state.selected seems unreliable
        const isOptionSelected = option.isNewUser
            ?  => u
            :  => 

        return (
            <l}>
                {option.isNoResult ? (
                    <Box
                        sx={{
                            width: '100%',
                            px: 1,
                            py: 0.5
                        }}
                    >
                        <Typography color='text.secondary'>No results found</Typography>
                    </Box>
                ) : option.isNewUser ? (
                    <Box
                        sx={{
                            width: '100%',
                            px: 1,
                            py: 0.5
                        }}
                    >
                        <Typography variant='h5' color='primary'>
                            {option.name}
                        </Typography>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 1,
                            py: 0.5
                        }}
                    >
                        <Stack flexDirection='column'>
                            <Typography variant='h5'>{option.user.name}</Typography>
                            <Typography>{option.user.email}</Typography>
                        </Stack>
                        {isOptionSelected ? <IconCircleCheck /> : null}
                    </Box>
                )}
            </li>
        )
    }

     => {
         => {
            
            let chipType = option.isNewUser ? 'new' : 'existing'
             {
                chipType = 'already-in-workspace'
            }
            const ChipComponent = option.isNewUser ? (
                <StyledChip label={option.name || option.email} {...chipProps} chiptype={chipType} />
            ) : (
                <StyledChip label={option.user.name || option.user.email} {...chipProps} chiptype={chipType} />
            )

            const tooltipTitle = option.alreadyInWorkspace
                ? `${option.user.name || option.user.email} is already a member of this workspace and won't be invited again.`
                : option.isNewUser
                ? 'An invitation will be sent to this email address'
                : ''

            return tooltipTitle ? (
                <Tooltip key={chipProps.key} title={tooltipTitle} arrow>
                    {ChipComponent}
                </Tooltip>
            ) : (
                ChipComponent
            )
        })
    }

     => {
        
         =>
            p => ({
                ...user,
                alreadyInWorkspace: newWorkspace
                    ? u => w
                    : false
            }))
        )
    }

     => {
        
    }

     => {
         {
            return selectedWorkspace || {}
        }
        return selectedWorkspace || null
    }

     => {
         {
            return selectedRole || {}
        }
        return selectedRole || null
    }

     => {
         {
            return true
        }
        return false
    }

     => {
         {
            
        } el {
            return dialogProps.disableWorkspaceSelection
        }
        return false
    }

    const component = show ? (
        <Dialog
            fullWidth
            maxWidth='md'
            open={show}
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IconUser style={{ marginRight: '10px' }} />
                    Invite Users
                </div>
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                    <Typography>
                        Select Users<span style={{ color: 'red' }}>&nbsp;*</span>
                    </Typography>
                    <Autocomplete
                        multiple
                        options={allUsers}
                        getOpt => option.userId}
                        getOpt => option.email || ''}
                        filterOptions={userSearchFilterOptions}
                        onChange={handleChange}
                        inputValue={searchString}
                        onInputChange={handleInputChange}
                         => {
                            // Compare based on user.email for existing users or email for new users
                             {
                                return option.email === value.email
                            } el {
                                return option.user?.email === value.user?.email
                            }
                            return false
                        }}
                        renderInput={renderUserSearchInput}
                        renderOption={renderUserSearchOptions}
                        renderTags={renderSelectedUsersTags}
                        sx={{ mt: 1 }}
                        value={selectedUsers}
                        PopperComponent={StyledPopper}
                    />
                </Box>
                <B', gap: 2 }}>
                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography>
                            Workspace<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                        <Autocomplete
                            }
                            getOpt => option.label || ''}
                            onChange={handleWorkspaceChange}
                            options={workspaces}
                             => <TextField {...params} variant='outlined' placeholder='Select Workspace' />}
                            sx={{ mt: 0.5 }}
                            value={getW}
                            PopperComponent={StyledPopper}
                        />
                    </Box>
                    <Box sx={{ gridColumn: 'span 1' }}>
                        <Typography>
                            Role to Assign<span style={{ color: 'red' }}>&nbsp;*</span>
                        </Typography>
                        <Autocomplete
                            getOpt => option.label || ''}
                            onChange={handleRoleChange}
                            options={availableRoles}
                             => <TextField {...params} variant='outlined' placeholder='Select Role' />}
                            sx={{ mt: 0.5 }}
                            value={getR}
                            PopperComponent={StyledPopper}
                        />
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Butt => } disabled={isSaving}>
                    {dialogProps.cancelButtonName}
                </Button>
                <StyledButton
                    }
                    variant='contained'
                    onClick={saveInvite}
                    startIcon={isSaving ? <CircularProgress size={20} color='inherit' /> : null}
                >
                    {dialogProps.confirmButtonName}
                </StyledButton>
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

InviteUsersDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default InviteUsersDialog
