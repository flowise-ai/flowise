import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// material-ui
import { Check } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
    Dialog,
    DialogContent,
    CircularProgress,
    Button,
    Select,
    Typography,
    Stack,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    DialogActions
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

// api
import userApi from '@/api/user'
import workspaceApi from '@/api/workspace'
import accountApi from '@/api/account.api'

// hooks
import useApi from '@/hooks/useApi'
import { useConfig } from '@/store/context/ConfigContext'

// store
import { store } from '@/store'
import { logoutSuccess, workspaceSwitchSuccess } from '@/store/reducers/authSlice'

// ==============================|| WORKSPACE SWITCHER ||============================== //

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
     => 
     => 

    

    
    
    

    
    
    
    
    
    

    
    
    
    

     => {
        
    }

     => {
        
    }

     => {
        
         {
            
            
        }
    }

     => {
        l
    }

    u => {
        // Fetch workspaces when component mounts
         {
            const WORKSPACE_FLAG = 'feat:workspaces'
            ) {
                const flag = features[WORKSPACE_FLAG] === 'true' || features[WORKSPACE_FLAG] === true
                 {
                     {
                        getW
                    } else {
                        getW
                    }
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
             => ({
                id: item.workspaceId,
                name: item.workspace.name
            }))

             => a.name.l)

            // Only check workspace availability after a short delay to allow store updates to complete
             => {
                 => ) {
                    
                }
            }, 500)

            )
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
             => ({
                id: item.workspaceId,
                name: item.workspace.name
            }))

             => a.name.l)

            // Only check workspace availability after a short delay to allow store updates to complete
             => {
                 => ) {
                    
                }
            }, 500)

            )
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            )

            // get the current path and navigate to the same after refresh
            nav
            nav
        }
    }, 

    u => {
         {
            
            

            // Set error message and show error dialog
            
            
        }
    }, 

    u => {
        try {
             {
                )
                window.location.href = logoutApi.data.redirectTo
            }
        }  {
            
        }
    }, 

    u => {
        

        prevOpen.current = open
    }, 

     => {
        // Sort workspaces alphabetically by name, with special characters last
        const sortedWorkspaces = assignedWorkspaces
            ?  => {
                  
                  

                  // If one has special char and other doesn't, special char goes last
                   return 1
                   return -1

                  // If both are special or both are not special, sort alphabetically
                  return a.name.localeCompare(b.name, undefined, {
                      numeric: true,
                      sensitivity: 'base'
                  })
              })
            : []
        return sortedWorkspaces
    }

    return (
        <>
            {isAuthenticated &&
            user &&
            assignedWorkspaces?.length > 1 &&
             ? (
                <>
                    <Button
                        sx={{ mr: 4 }}
                        id='workspace-switcher'
                        aria-controls={open ? 'workspace-switcher-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        {user.activeWorkspace}
                    </Button>
                    <StyledMenu
                        id='workspace-switcher-menu'
                        MenuListProps={{
                            'aria-labelledby': 'workspace-switcher'
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {a => (
                            <MenuItem
                                 => {
                                    
                                }}
                                key={index}
                                disableRipple
                            >
                                {item.id === user.activeWorkspaceId ? (
                                    <>
                                        <ListItemIcon>
                                            <Check />
                                        </ListItemIcon>
                                        <ListItemText>{item.name}</ListItemText>
                                    </>
                                ) : (
                                    <ListItemText inset>{item.name}</ListItemText>
                                )}
                            </MenuItem>
                        ))}
                    </StyledMenu>
                </>
            ) : null}
            <Dialog open={isSwitching} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                <DialogContent>
                    <Stack spacing={2} alignItems='center'>
                        <CircularProgress />
                        <Typography variant='body1' style={{ color: 'white' }}>
                            Switching workspace...
                        </Typography>
                    </Stack>
                </DialogContent>
            </Dialog>

            <Dialog
                open={showWorkspaceUnavailableDialog}
                disableEscapeKeyDown
                disableBackdropClick
                PaperProps={{
                    style: {
                        padding: '20px',
                        minWidth: '400px'
                    }
                }}
            >
                <DialogContent>
                    <Stack spacing={3}>
                        <Typography variant='h5'>Workspace Unavailable</Typography>
                        <Typography variant='body1'>
                            Your current workspace is no longer available. Please select another workspace to continue.
                        </Typography>
                        <Select
                            fullWidth
                            value=''
                             => {
                                
                                
                            }}
                            displayEmpty
                        >
                            <MenuItem disabled value=''>
                                <em>Select Workspace</em>
                            </MenuItem>
                            {a => (
                                <MenuItem key={index} value={workspace.id}>
                                    {workspace.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </DialogContent>
                {assignedWorkspaces.length === 0 && (
                    <DialogActions>
                        <Button onClick={handleLogout} variant='contained' color='primary'>
                            Logout
                        </Button>
                    </DialogActions>
                )}
            </Dialog>

            {/* Error Dialog */}
            <Dialog
                open={showErrorDialog}
                disableEscapeKeyDown
                disableBackdropClick
                PaperProps={{
                    style: {
                        padding: '20px',
                        minWidth: '400px'
                    }
                }}
            >
                <DialogContent>
                    <Stack spacing={3}>
                        <Typography variant='h5'>Workspace Switch Error</Typography>
                        <Typography variant='body1'>{errorMessage}</Typography>
                        {isEnterpriseLicensed && (
                            <Typography variant='body2' color='text.secondary'>
                                Please contact your administrator for assistance.
                            </Typography>
                        )}
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogout} variant='contained' color='primary'>
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

WorkspaceSwitcher.propTypes = {}

export default WorkspaceSwitcher
