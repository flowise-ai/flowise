import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import {
    Breadcrumbs,
    Menu,
    MenuItem,
    Dialog,
    DialogContent,
    CircularProgress,
    Typography,
    Stack,
    Chip,
    ListItemText,
    ListItemIcon,
    Select
} from '@mui/material'
import { Check } from '@mui/icons-material'
import { alpha, styled, emphasize } from '@mui/material/styles'

import { IconChevronDown } from '@tabler/icons-react'

// api
import userApi from '@/api/user'
import workspaceApi from '@/api/workspace'

// hooks
import useApi from '@/hooks/useApi'

// store
import { store } from '@/store'
import { workspaceSwitchSuccess } from '@/store/reducers/authSlice'

// ==============================|| OrgWorkspaceBreadcrumbs ||============================== //

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

(({ theme,  => {
    const backgroundColor = isDarkMode ? theme.palette.grey[800] : theme.palette.grey[100]
    return {
        backgroundColor,
        he,
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            ba
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            ba
        }
    }
})

 => {
    

     => 
     => 
     => 

    
    
    
    

    
    
    
    
    
    
    

    
    
    

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
         {
            
            
            // Fetch workspaces for the new organization
            getW
        }
    }

     => {
        
        
        // Fetch workspaces for the new organization
        try {
            
            const workspaces = response.data
             => 
             => ({
                id: item.workspaceId,
                name: item.workspace.name
            }))

             => a.name.l)

            
        }  {
            
        }
    }

     => {
        
         {
            
            
        }
    }

    u => {
        // Fetch workspaces when component mounts
         {
            getO
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const filteredAssignedWorkspaces = getWorkspacesByUserIdApi.data.filter(
                ( => item.workspace.organizationId === activeOrganizationId
            )
             => ({
                id: item.workspaceId,
                name: item.workspace.name
            }))

             => a.name.l)

            // Only check workspace availability if we're not in the process of switching organizations
             {
                 => {
                     => ) {
                        
                    }
                }, 500)
            }

            

             {
                // After organization switch, switch to the first workspace in the list
                
            } else {
                
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
    }, 

    u => {
         {
             => ({
                id: organization.organizationId,
                name: `${organization.user.name || organization.user.email}'s Organization`
            }))

             => a.name.l)
            // Only check workspace availability after a short delay to allow store updates to complete
             => {
                 => ) {
                    
                    
                }
            }, 500)

            

            getW
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
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
            
            
        }
    }, 

    u => {
        
        
    }, 

    return (
        <>
            {isAuthenticated && user ? (
                <>
                    <StyledMenu anchorEl={orgAnchorEl} open={orgMenuOpen} onClose={handleOrgClose}>
                        {a => (
                            <MenuItem key={ => han} selected={org.id === activeOrganizationId}>
                                <ListItemText>{org.name}</ListItemText>
                                {org.id === activeOrganizationId && (
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <Check />
                                    </ListItemIcon>
                                )}
                            </MenuItem>
                        ))}
                    </StyledMenu>
                    <StyledMenu anchorEl={workspaceAnchorEl} open={workspaceMenuOpen} onClose={handleWorkspaceClose}>
                        {a => (
                            <MenuItem
                                key={workspace.id}
                                 => }
                                selected={workspace.id === activeWorkspaceId}
                            >
                                <ListItemText>{workspace.name}</ListItemText>
                                {workspace.id === activeWorkspaceId && (
                                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                                        <Check />
                                    </ListItemIcon>
                                )}
                            </MenuItem>
                        ))}
                    </StyledMenu>
                    <Breadcrumbs aria-label='breadcrumb'>
                        <StyledBreadcrumb
                            isDarkMode={customization.isDarkMode}
                            label={a => ?.name || 'Organization'}
                            deleteIcon={<IconChevronDown size={16} />}
                            onDelete={handleOrgClick}
                            onClick={handleOrgClick}
                        />
                        <StyledBreadcrumb
                            isDarkMode={customization.isDarkMode}
                            label={a => w?.name || 'Workspace'}
                            deleteIcon={<IconChevronDown size={16} />}
                            onDelete={handleWorkspaceClick}
                            onClick={handleWorkspaceClick}
                        />
                    </Breadcrumbs>
                </>
            ) : null}
            <Dialog open={isOrganizationSwitching} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                <DialogContent>
                    <Stack spacing={2} alignItems='center'>
                        <CircularProgress />
                        <Typography variant='body1' style={{ color: 'white' }}>
                            Switching organization...
                        </Typography>
                    </Stack>
                </DialogContent>
            </Dialog>
            <Dialog open={isWorkspaceSwitching} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
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
                        {assignedWorkspaces.length > 0 && !activeOrganizationId ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <Typography variant='body1'>
                                    Workspace is no longer available. Please select a different organization/workspace to continue.
                                </Typography>
                                <Select
                                    fullWidth
                                    value={activeOrganizationId || ''}
                                     => {
                                        han
                                    }}
                                    displayEmpty
                                >
                                    <MenuItem disabled value=''>
                                        <em>Select Organization</em>
                                    </MenuItem>
                                    {a => (
                                        <MenuItem key={index} value={org.id}>
                                            {org.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {activeOrganizationId && assignedWorkspaces.length > 0 && (
                                    <Select
                                        fullWidth
                                        value={activeWorkspaceId || ''}
                                         => {
                                            
                                            
                                        }}
                                        displayEmpty
                                        sx={{ mt: 2 }}
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
                                )}
                            </>
                        )}
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}

OrgWorkspaceBreadcrumbs.propTypes = {}

export default OrgWorkspaceBreadcrumbs
