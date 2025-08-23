import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

// Material
import { Box, Typography, OutlinedInput, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

// Project imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// Icons
import { IconX, IconUser } from '@tabler/icons-react'

// API
import authApi from '@/api/auth'
import roleApi from '@/api/role'

// Hooks
import useApi from '@/hooks/useApi'
import { useConfig } from '@/store/context/ConfigContext'

// utils
import useNotifier from '@/utils/useNotifier'

// const
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

import './CreateEditRoleDialog.css'

 => {
    

    
    

    // ==============================|| Snackbar ||============================== //

    u

     => )
     => )

    
    
    
    
    

    
     => 

     => {
        
    }
     => {
        
    }

     => {
         => {
            const updatedCategoryPermissions = {
                ...prevPermissions[category],
                [key]: !prevPermissions[category]?.[key]
            }

             {
                 {
                    updatedCategoryPermissions['templates:marketplace'] = true
                    updatedCategoryPermissions['templates:custom'] = true
                }
            } else {
                const viewPermissionKey = `${category}:view`
                 {
                    .some(
                        ( => permissionKey !== viewPermissionKey && isEnabled
                    )
                     {
                        updatedCategoryPermissions[viewPermissionKey] = true
                    }
                } else {
                    .some(
                        ( => permissionKey === viewPermissionKey && isEnabled
                    )
                     {
                        updatedCategoryPermissions[key] = true
                    }
                }
            }

            return {
                ...prevPermissions,
                [category]: updatedCategoryPermissions
            }
        })
    }

     => {
         {
            // For templates, disable marketplace and custom view if any other permission is enabled
             {
                .some(
                    ( => permKey !== 'templates:marketplace' && permKey !== 'templates:custom' && isEnabled
                )
            }
        } else {
            const viewPermissionKey = `${category}:view`
             {
                // Disable the view permission if any other permission is enabled
                .some(
                    ( => permKey !== viewPermissionKey && isEnabled
                )
            }
        }

        // Non-view permissions are never disabled
        return false
    }

     => {
         => 
         => ({
            ...prevPermissions,
             => )
        }))
    }

    u => {
         &&  {
            
        }
        getAllPe
         => {
            
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

    u => {
         {
            
            
            const permissions = getAllPermissionsApi.data
            // Filter out enterprise permissions if not licensed
             {
                Obje.f => {
                    pe => 
                })
                // Remove categories that have no permissions left
                Obje.f => {
                     {
                        delete permissions[category]
                    }
                })
            }
            
             &&  {
                
                 {
                    Obje.f => {
                        Obje.f => {
                             => {
                                 {
                                     {
                                        selectedPermissions[category] = {}
                                    }
                                    selectedPermissions[category][perm] = true
                                }
                            })
                        })
                    })
                    
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        try {
            // if roleName has a space, raise an error
             > -1) {
                enqueueSnackbar({
                    message: `Role Name cannot contain spaces.`,
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
                return
            }
            const saveObj = {
                name: roleName,
                description: roleDescription,
                createdBy: currentUser.id,
                organizationId: currentUser.activeOrganizationId
            }
            
                .map(( => {
                    .map((key) => {
                         {
                            return key
                        }
                    })
                })
                .flat()
            
            let saveResp
             {
                saveObj.id = dialogProps.data.id
                saveObj.updatedBy = currentUser.id
                
            } else {
                
            }
             {
                enqueueSnackbar({
                    message: dialogProps.type === 'EDIT' ? 'Role Updated Successfully' : 'New Role Created!',
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
                message: `Failed : ${typeof error.response.data === 'object' ? error.response.data.message : error.response.data}`,
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

     => {
         {
            return true
        }
         {
            return true
        }
        .length || ) {
            return true
        }
        return false
    }

     => {
        f {
             {
                // Recursively check nested objects
                ) {
                    return true
                }
            } el {
                return true
            }
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
                    {dialogProps.type === 'EDIT' ? 'Edit Role' : dialogProps.type === 'VIEW' ? 'View Role' : 'Create New Role'}
                </div>
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: 'transparent' }}>
                <div className='role-editor'>
                    <Box>
                        <Typography sx={{ mb: 1 }} variant='h5'>
                            <span style={{ color: 'red' }}>*&nbsp;&nbsp;</span>Role Name
                        </Typography>
                        <OutlinedInput
                            id='roleName'
                            type='string'
                            size='small'
                            fullWidth
                            disabled={dialogProps.type === 'EDIT' || dialogProps.type === 'VIEW'}
                            placeholder='Enter role name'
                            value={roleName}
                            name='roleName'
                            onChange={handleRoleNameChange}
                        />
                    </Box>
                    <Box>
                        <Typography sx={{ mb: 1 }} variant='h5'>
                            Role Description
                        </Typography>
                        <OutlinedInput
                            id='roleDesc'
                            type='string'
                            size='small'
                            fullWidth
                            disabled={dialogProps.type === 'VIEW'}
                            placeholder='Description of the role'
                            value={roleDescription}
                            name='roleDesc'
                            onChange={handleRoleDescChange}
                        />
                    </Box>
                    <div className='permissions-container'>
                        <p>Permissions</p>
                        <div className='permissions-list-wrapper'>
                            {permissions &&
                                Obje.map(( => (
                                    <div key={category} className='permission-category'>
                                        <div className='category-header'>
                                            <h3>
                                                {category
                                                    ./g, ' $1')
                                                    .t
                                                    .t}
                                            </h3>
                                            <button
                                                type='button'
                                                hidden={dialogProps.type === 'VIEW'}
                                                 => han}
                                            >
                                                Select All
                                            </button>
                                        </div>
                                        <div className='permissions-list'>
                                            {pe => (
                                                <div
                                                    key={permission.key}
                                                    className={`permission-item ${index % 2 === 0 ? 'left-column' : 'right-column'}`}
                                                >
                                                    <label>
                                                        <input
                                                            type='checkbox'
                                                            checked={selectedPermissions[category]?.[permission.key] || false}
                                                            disabled={
                                                                dialogProps.type === 'VIEW' ||
                                                                
                                                            }
                                                             => han}
                                                        />
                                                        {permission.value}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={onCancel}>
                    {dialogProps.type !== 'VIEW' ? 'Cancel' : 'Close'}
                </Button>
                {dialogProps.type !== 'VIEW' && (
                    <Style} variant='contained' onClick={createRole}>
                        {dialogProps.type !== 'EDIT' ? 'Create Role' : 'Update Role'}
                    </StyledButton>
                )}
            </DialogActions>
            <ConfirmDialog />
        </Dialog>
    ) : null

    
}

CreateEditRoleDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    setError: PropTypes.func
}

export default CreateEditRoleDialog
