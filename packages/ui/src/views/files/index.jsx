import { useEffect, useState } from 'react'

// material-ui
import { Box, Button, Stack } from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import WorkflowEmptySVG from '@/assets/images/workflow_empty.svg'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { FilesTable } from '@/ui-component/table/FilesTable'
import useConfirm from '@/hooks/useConfirm'
import useNotifier from '@/utils/useNotifier'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'

// API
import filesApi from '@/api/files'

// Hooks
import useApi from '@/hooks/useApi'

// icons
import { IconX } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { useError } from '@/store/context/ErrorContext'

// ==============================|| CHATFLOWS ||============================== //

 => {
    

    
    
    
    

    

    

    u
     => )
     => )

     => {
        
    }

    fun {
        return (
            .) > -1 ||
            (.) > -1)
        )
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete ${file.name}? This process cannot be undone.`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'File deleted',
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
                awa
            }  {
                
                enqueueSnackbar({
                    message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
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

    u => {
        getAllF

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            try {
                const files = getAllFilesApi.data
                
            }  {
                
            }
        }
    }, 

    return (
        <MainCard>
            {error ? (
                <ErrorBoundary error={error} />
            ) : (
                <Stack flexDirection='column' sx={{ gap: 3 }}>
                    <ViewHeader onSearchChange={onSearchChange} search={true} searchPlaceholder='Search File' title='Files' />
                    <FilesTable data={files} filterFunction={filterFiles} handleDelete={handleDeleteFile} isLoading={isLoading} />
                    { && (
                        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                            <Box sx={{ p: 2, height: 'auto' }}>
                                <img
                                    style={{ objectFit: 'cover', height: '25vh', width: 'auto' }}
                                    src={WorkflowEmptySVG}
                                    alt='WorkflowEmptySVG'
                                />
                            </Box>
                            <div>No Files Yet</div>
                        </Stack>
                    )}
                </Stack>
            )}

            <ConfirmDialog />
        </MainCard>
    )
}

export default Files
