import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Divider, List, Typography } from '@mui/material'

// project imports
import NavItem from '../NavItem'
import NavCollapse from '../NavCollapse'
import { useAuth } from '@/hooks/useAuth'
import { Available } from '@/ui-component/rbac/available'

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

 => {
    
    

     => {
        // Filter based on display and permission
        ) return null

        // Handle item and group types
         {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={level} />
            case 'item':
                return <NavItem key={menu.id} item={menu} level={level} navType='MENU' />
            default:
                return (
                    <Typography key={menu.id} variant='h6' color='error' align='center'>
                        Menu Items Error
                    </Typography>
                )
        }
    }

     => {
        // Handle permission check
        ) {
            return false // Do not render if permission is lacking
        }

        // If `display` is defined, check against cloud/enterprise conditions
         {
            
            return shouldsiplay
        }

        // If `display` is not defined, display by default
        return true
    }

     => {
         => 
        return primaryGroup.children
    }

     => {
        let n => 
        // Display chilren based on permission and display
        n => {
             => )
            return { ...group, children }
        })
        // Get rid of group with empty children
        n => g
        return nonprimaryGroups
    }

    return (
        <>
            <List
                subheader={
                    item.title && (
                        <Typography variant='caption' sx={{ ...theme.typography.menuCaption }} display='block' gutterBottom>
                            {item.title}
                            {item.caption && (
                                <Typography variant='caption' sx={{ ...theme.typography.subMenuCaption }} display='block' gutterBottom>
                                    {item.caption}
                                </Typography>
                            )}
                        </Typography>
                    )
                }
                sx={{ p: '16px', py: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
            >
                {.map((menu) => l)}
            </List>

            {.map((g => {
                 => menu.pe.j
                return (
                    <Available key={group.id} permission={groupPermissions}>
                        <>
                            <Divider sx={{ height: '1px', borderColor: theme.palette.grey[900] + 25, my: 0 }} />
                            <List
                                subheader={
                                    <Typography variant='caption' sx={{ ...theme.typography.subMenuCaption }} display='block' gutterBottom>
                                        {group.title}
                                    </Typography>
                                }
                                sx={{ p: '16px', py: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
                            >
                                {g => l)}
                            </List>
                        </>
                    </Available>
                )
            })}
        </>
    )
}

NavGroup.propTypes = {
    item: PropTypes.object
}

export default NavGroup
