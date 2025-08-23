import * as React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// material-ui
import {
    Box,
    Stack,
    Badge,
    ToggleButton,
    InputLabel,
    FormControl,
    Select,
    OutlinedInput,
    Checkbox,
    ListItemText,
    Skeleton,
    FormControlLabel,
    ToggleButtonGroup,
    MenuItem,
    Button,
    Tabs,
    Autocomplete,
    TextField,
    Chip,
    Tooltip
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { IconLayoutGrid, IconList, IconX } from '@tabler/icons-react'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ItemCard from '@/ui-component/cards/ItemCard'
import WorkflowEmptySVG from '@/assets/images/workflow_empty.svg'
import ToolDialog from '@/views/tools/ToolDialog'
import { MarketplaceTable } from '@/ui-component/table/MarketplaceTable'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { TabPanel } from '@/ui-component/tabs/TabPanel'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import { PermissionTab } from '@/ui-component/button/RBACButtons'
import { Available } from '@/ui-component/rbac/available'
import ShareWithWorkspaceDialog from '@/ui-component/dialog/ShareWithWorkspaceDialog'

// API
import marketplacesApi from '@/api/marketplaces'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'
import { useAuth } from '@/hooks/useAuth'

// Utils
import useNotifier from '@/utils/useNotifier'

// const
import { baseURL, AGENTFLOW_ICONS } from '@/store/constant'
import { gridSpacing } from '@/store/constant'
import { useError } from '@/store/context/ErrorContext'

const badges = ['POPULAR', 'NEW']
const types = ['Chatflow', 'AgentflowV2', 'Tool']
const framework = ['Langchain', 'LlamaIndex']
const MenuProps = {
    PaperProps: {
        style: {
            width: 160
        }
    }
}

// ==============================|| Marketplace ||============================== //

 => {
    
    
    u

    
    

    
    
    
    
    
    

    
    

    

     || '
    
    
    
    

    
    
    
    
    
    
    
     => )
     => )
    
    

    
    

     => {
        const dialogProps = {
            type: 'EDIT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Share',
            data: {
                id: template.id,
                name: template.name,
                title: 'Share Custom Template',
                itemType: 'custom_template'
            }
        }
        
        
    }

     => ({
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: 2,
            borderColor: borderColor
        },
        '& .MuiSvgIcon-root': {
            color: isDarkMode ? '#fff' : 'inherit'
        }
    })

     => {
         {
            getAllCu
        }
        
    }

     => {
         
        el
    }

     => {
        const {
            target: { value }
        } = event
        setBadgeFilter(
            // On autofill we get a stringified value.
            type : value
        )
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeFilter,
            ba : value,
            frameworkFilter,
            search
        })
    }

     => {
        const {
            target: { value }
        } = event
        setTypeFilter(
            // On autofill we get a stringified value.
            type : value
        )
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeF : value,
            badgeFilter,
            frameworkFilter,
            search
        })
    }

     => {
        const {
            target: { value }
        } = event
        setFrameworkFilter(
            // On autofill we get a stringified value.
            type : value
        )
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeFilter,
            badgeFilter,
            f : value,
            search
        })
    }

     => {
         return
        l
        
    }

     => {
        
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data

        getEl
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete Custom Template ${template.name}?`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Custom Template deleted successfully!',
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
                    getAllCu
                }
            }  {
                enqueueSnackbar({
                    message: `Failed to delete custom template: ${
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

    fun {
        return (
            ( : '').t.) > -1 ||
            .) > -1 ||
            (.) > -1)
        )
    }

    fun {
         : true
    }

    fun {
         : true
    }

    fun {
        . => f) : true
    }

    fun {
        
            . => ) : true
        else
            return selectedTemplateUsecases.length > 0
                ? (. => )
                : true
    }

     => {
         return

        let filteredData = data
         f => f)
         f => f)
        
            f => (. => f))
         {
            filteredData = filteredData.filter(
                ( =>
                    ( : '').t.) > -1 ||
                    .) > -1 ||
                    (.) > -1)
            )
        }

        const usecases = []
        f {
             {
                u
            }
        }
         ).)
        el).)
    }

     => {
        const dialogProp = {
            title: 'Add New Tool',
            type: 'IMPORT',
            cancelButtonName: 'Cancel',
            confirmButtonName: 'Add',
            data: selectedTool
        }
        
        
    }

     => {
        const dialogProp = {
            title: selectedTool.templateName,
            type: 'TEMPLATE',
            data: selectedTool
        }
        
        
    }

     => {
         {
            nav
        } else {
            nav
        }
    }

    u => {
        ) {
            getAllTemplate
        } el) {
            
            getAllCu
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            try {
                const flows = getAllTemplatesMarketplacesApi.data
                const usecases = []
                const images = {}
                const icons = {}
                f {
                     {
                        const flowDataStr = flows[i].flowData
                        
                        u
                        const nodes = flowData.nodes || []
                        images[flows[i].id] = []
                        icons[flows[i].id] = []
                        f {
                             continue
                             => 
                             {
                                
                            } else {
                                const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
                                 => ) {
                                    images[flows[i].id].push({
                                        imageSrc,
                                        label: nodes[j].data.name
                                    })
                                }
                            }
                        }
                    }
                }
                
                
                ).)
                ).)
            }  {
                
            }
        }
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            try {
                const flows = getAllCustomTemplatesApi.data
                const usecases = []
                const tImages = {}
                const tIcons = {}
                f {
                     {
                        const flowDataStr = flows[i].flowData
                        
                        u
                         {
                            flows[i].framework = [flows[i].framework] || []
                        }
                        const nodes = flowData.nodes || []
                        tImages[flows[i].id] = []
                        tIcons[flows[i].id] = []
                        f {
                             => 
                             {
                                tI
                            } else {
                                const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
                                ) {
                                    tImage
                                }
                            }
                        }
                    }
                }
                
                
                ).)
                ).)
            }  {
                
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column'>
                        <ViewHeader
                            filters={
                                <>
                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 120
                                        }}
                                    >
                                        <InputLabel size='small' id='filter-badge-label'>
                                            Tag
                                        </InputLabel>
                                        <Select
                                            labelId='filter-badge-label'
                                            id='filter-badge-checkbox'
                                            size='small'
                                            multiple
                                            value={badgeFilter}
                                            onChange={handleBadgeFilterChange}
                                            input={<OutlinedInput label='Tag' />}
                                             => }
                                            MenuProps={MenuProps}
                                            }
                                        >
                                            {ba => (
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
                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 120
                                        }}
                                    >
                                        <InputLabel size='small' id='type-badge-label'>
                                            Type
                                        </InputLabel>
                                        <Select
                                            size='small'
                                            labelId='type-badge-label'
                                            id='type-badge-checkbox'
                                            multiple
                                            value={typeFilter}
                                            onChange={handleTypeFilterChange}
                                            input={<OutlinedInput label='Type' />}
                                             => }
                                            MenuProps={MenuProps}
                                            }
                                        >
                                            {type => (
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
                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 120
                                        }}
                                    >
                                        <InputLabel size='small' id='type-fw-label'>
                                            Framework
                                        </InputLabel>
                                        <Select
                                            size='small'
                                            labelId='type-fw-label'
                                            id='type-fw-checkbox'
                                            multiple
                                            value={frameworkFilter}
                                            onChange={handleFrameworkFilterChange}
                                            input={<OutlinedInput label='Framework' />}
                                             => }
                                            MenuProps={MenuProps}
                                            }
                                        >
                                            {f => (
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
                                </>
                            }
                            onSearchChange={onSearchChange}
                            search={true}
                            searchPlaceholder='Search Name/Description/Node'
                            title='Marketplace'
                            description='Explore and use pre-built templates'
                        >
                            <ToggleButtonGroup
                                sx={{ borderRadius: 2, height: '100%' }}
                                value={view}
                                color='primary'
                                exclusive
                                onChange={handleViewChange}
                            >
                                <ToggleButton
                                    sx={{
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: 2,
                                        color: theme?.customization?.isDarkMode ? 'white' : 'inherit'
                                    }}
                                    variant='contained'
                                    value='card'
                                    title='Card View'
                                >
                                    <IconLayoutGrid />
                                </ToggleButton>
                                <ToggleButton
                                    sx={{
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: 2,
                                        color: theme?.customization?.isDarkMode ? 'white' : 'inherit'
                                    }}
                                    variant='contained'
                                    value='list'
                                    title='List View'
                                >
                                    <IconList />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </ViewHeader>
                        {ha && ha && (
                            <Stack direction='row' justifyContent='space-between' sx={{ mb: 2 }}>
                                <Tabs value={activeTabValue} onChange={handleTabChange} textColor='primary' aria-label='tabs'>
                                    <PermissionTab permissionId='templates:marketplace' value={0} label='Community Templates' />
                                    <PermissionTab permissionId='templates:custom' value={1} label='My Templates' />
                                </Tabs>
                                <Autocomplete
                                    id='useCases'
                                    multiple
                                    size='small'
                                    options={usecases}
                                    value={selectedUsecases}
                                     => }
                                    disableCloseOnSelect
                                    getOpt => option}
                                     => option === value}
                                     => {
                                        

                                        return (
                                            <li {...props} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
                                                <Checkbox checked={selected} color='success' disabled={isDisabled} />
                                                <ListItemText primary={option} />
                                            </li>
                                        )
                                    }}
                                     => <TextField {...params} label='Usecases' />}
                                    sx={{
                                        width: 300
                                    }}
                                    limitTags={2}
                                     => {
                                        const totalTags = value.length
                                        const limitTags = 2

                                        return (
                                            <>
                                                {value..map(( => (
                                                    <Chip
                                                        {...getTagP}
                                                        key={index}
                                                        label={option}
                                                        sx={{
                                                            height: 24,
                                                            '& .MuiSvgIcon-root': {
                                                                fontSize: 16,
                                                                background: 'None'
                                                            }
                                                        }}
                                                    />
                                                ))}

                                                {totalTags > limitTags && (
                                                    <Tooltip
                                                        title={
                                                            <ol style={{ paddingLeft: '20px' }}>
                                                                {value..map(( => (
                                                                    <li key={i}>{item}</li>
                                                                ))}
                                                            </ol>
                                                        }
                                                        placement='top'
                                                    >
                                                        +{totalTags - limitTags}
                                                    </Tooltip>
                                                )}
                                            </>
                                        )
                                    }}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                b'
                                            }
                                        }
                                    }}
                                />
                            </Stack>
                        )}
                        <Available permission='templates:marketplace'>
                            <TabPanel value={activeTabValue} index={0}>
                                {!view || view === 'card' ? (
                                    <>
                                        {isLoading ? (
                                            <B' gap={gridSpacing}>
                                                <Skeleton variant='rounded' height={160} />
                                                <Skeleton variant='rounded' height={160} />
                                                <Skeleton variant='rounded' height={160} />
                                            </Box>
                                        ) : (
                                            <B' gap={gridSpacing}>
                                                {getAllTemplatesMarketplacesApi.data
                                                    ?.f
                                                    .f
                                                    .f
                                                    .f
                                                    .f
                                                    .map(( => (
                                                        <Box key={index}>
                                                            {data.badge && (
                                                                <Badge
                                                                    sx={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        '& .MuiBadge-badge': {
                                                                            right: 20
                                                                        }
                                                                    }}
                                                                    badgeContent={data.badge}
                                                                    color={data.badge === 'POPULAR' ? 'primary' : 'error'}
                                                                >
                                                                    {(data.type === 'Chatflow' ||
                                                                        data.type === 'Agentflow' ||
                                                                         && (
                                                                        <ItemCard
                                                                             => g}
                                                                            data={data}
                                                                            images={images[data.id]}
                                                                            icons={icons[data.id]}
                                                                        />
                                                                    )}
                                                                    {data.type === 'Tool' && (
                                                                        <ItemCa => g} />
                                                                    )}
                                                                </Badge>
                                                            )}
                                                            {!data.badge &&
                                                                (data.type === 'Chatflow' ||
                                                                    data.type === 'Agentflow' ||
                                                                     && (
                                                                    <ItemCard
                                                                         => g}
                                                                        data={data}
                                                                        images={images[data.id]}
                                                                        icons={icons[data.id]}
                                                                    />
                                                                )}
                                                            {!data.badge && data.type === 'Tool' && (
                                                                <ItemCa => g} />
                                                            )}
                                                        </Box>
                                                    ))}
                                            </Box>
                                        )}
                                    </>
                                ) : (
                                    <MarketplaceTable
                                        data={getAllTemplatesMarketplacesApi.data}
                                        filterFunction={filterFlows}
                                        filterByType={filterByType}
                                        filterByBadge={filterByBadge}
                                        filterByFramework={filterByFramework}
                                        filterByUsecases={filterByUsecases}
                                        goToTool={goToTool}
                                        goToCanvas={goToCanvas}
                                        isLoading={isLoading}
                                        setError={setError}
                                    />
                                )}

                                {!isLoading &&
                                    ( && (
                                        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                            <Box sx={{ p: 2, height: 'auto' }}>
                                                <img
                                                    style={{ objectFit: 'cover', height: '25vh', width: 'auto' }}
                                                    src={WorkflowEmptySVG}
                                                    alt='WorkflowEmptySVG'
                                                />
                                            </Box>
                                            <div>No Marketplace Yet</div>
                                        </Stack>
                                    )}
                            </TabPanel>
                        </Available>
                        <Available permission='templates:custom'>
                            <TabPanel value={activeTabValue} index={1}>
                                <Stack direction='row' sx={{ gap: 2, my: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                    {templateU => (
                                        <FormControlLabel
                                            key={index}
                                            size='small'
                                            control={
                                                <Checkbox
                                                    disabled={
                                                        eligibleTemplateUsecases.length === 0
                                                            ? true
                                                            : 
                                                    }
                                                    color='success'
                                                    }
                                                     => {
                                                        setSelectedTemplateUsecases(
                                                            event.target.checked
                                                                ? [...selectedTemplateUsecases, usecase]
                                                                :  => 
                                                        )
                                                    }}
                                                />
                                            }
                                            label={usecase}
                                        />
                                    ))}
                                </Stack>
                                {selectedTemplateUsecases.length > 0 && (
                                    <Button
                                        sx={{ width: 'max-content', mb: 2, borderRadius: '20px' }}
                                        variant='outlined'
                                         => }
                                        startIcon={<IconX />}
                                    >
                                        Clear All
                                    </Button>
                                )}
                                {!view || view === 'card' ? (
                                    <>
                                        {isLoading ? (
                                            <B' gap={gridSpacing}>
                                                <Skeleton variant='rounded' height={160} />
                                                <Skeleton variant='rounded' height={160} />
                                                <Skeleton variant='rounded' height={160} />
                                            </Box>
                                        ) : (
                                            <B' gap={gridSpacing}>
                                                {getAllCustomTemplatesApi.data
                                                    ?.f
                                                    .f
                                                    .f
                                                    .f
                                                    .f
                                                    .map(( => (
                                                        <Box key={index}>
                                                            {data.badge && (
                                                                <Badge
                                                                    sx={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        '& .MuiBadge-badge': {
                                                                            right: 20
                                                                        }
                                                                    }}
                                                                    badgeContent={data.badge}
                                                                    color={data.badge === 'POPULAR' ? 'primary' : 'error'}
                                                                >
                                                                    {(data.type === 'Chatflow' ||
                                                                        data.type === 'Agentflow' ||
                                                                         && (
                                                                        <ItemCard
                                                                             => g}
                                                                            data={data}
                                                                            images={templateImages[data.id]}
                                                                            icons={templateIcons[data.id]}
                                                                        />
                                                                    )}
                                                                    {data.type === 'Tool' && (
                                                                        <ItemCa => g} />
                                                                    )}
                                                                </Badge>
                                                            )}
                                                            {!data.badge &&
                                                                (data.type === 'Chatflow' ||
                                                                    data.type === 'Agentflow' ||
                                                                     && (
                                                                    <ItemCard
                                                                         => g}
                                                                        data={data}
                                                                        images={templateImages[data.id]}
                                                                        icons={templateIcons[data.id]}
                                                                    />
                                                                )}
                                                            {!data.badge && data.type === 'Tool' && (
                                                                <ItemCa => g} />
                                                            )}
                                                        </Box>
                                                    ))}
                                            </Box>
                                        )}
                                    </>
                                ) : (
                                    <MarketplaceTable
                                        data={getAllCustomTemplatesApi.data}
                                        filterFunction={filterFlows}
                                        filterByType={filterByType}
                                        filterByBadge={filterByBadge}
                                        filterByFramework={filterByFramework}
                                        filterByUsecases={filterByUsecases}
                                        goToTool={goToTool}
                                        goToCanvas={goToCanvas}
                                        isLoading={isLoading}
                                        setError={setError}
                                         ? onDeleteCustomTemplate : null}
                                         ? share : null}
                                    />
                                )}
                                { && (
                                    <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                        <Box sx={{ p: 2, height: 'auto' }}>
                                            <img
                                                style={{ objectFit: 'cover', height: '25vh', width: 'auto' }}
                                                src={WorkflowEmptySVG}
                                                alt='WorkflowEmptySVG'
                                            />
                                        </Box>
                                        <div>No Saved Custom Templates</div>
                                    </Stack>
                                )}
                            </TabPanel>
                        </Available>
                    </Stack>
                )}
            </MainCard>
            <ToolDialog
                show={showToolDialog}
                dialogProps={toolDialogProps}
                 => }
                 => }
                 => }
            ></ToolDialog>
            {showShareTemplateDialog && (
                <ShareWithWorkspaceDialog
                    show={showShareTemplateDialog}
                    dialogProps={shareTemplateDialogProps}
                     => }
                    setError={setError}
                ></ShareWithWorkspaceDialog>
            )}
            <ConfirmDialog />
        </>
    )
}

export default Marketplace
