import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ReactJson from 'flowise-react-json-view'

// material-ui
import { Box, Card, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import { IconLanguage, IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import chunks_emptySVG from '@/assets/images/chunks_empty.svg'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ExpandedChunkDialog from './ExpandedChunkDialog'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'

// API
import documentsApi from '@/api/documentstore'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'
import useNotifier from '@/utils/useNotifier'
import { useAuth } from '@/hooks/useAuth'

// store
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { useError } from '@/store/context/ErrorContext'

(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    overflow: 'auto',
    position: 'relative',
    b',
    cursor: 'pointer',
    '&:hover': {
        background: theme.palette.card.hover,
        b'
    },
    maxHeight: '250px',
    minHeight: '250px',
    maxWidth: '100%',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-line',
    padding: 1
}))

 => {
     => 
    
    
    
    
    
    

    u
     => )
     => )

    

    

    
    
    
    
    
    
    
    
    

     => {
         => 
         =>  + start
        const dialogProps = {
            data: {
                selectedChunk,
                selectedChunkNumber
            }
        }
        
        
    }

     => {
        
        
        try {
            const editResp = await documentsApi.editChunkFromStore(
                chunk.storeId,
                chunk.docId,
                chunk.id,
                { pageContent: newPageContent, metadata: newMetadata },
                true
            )
             {
                enqueueSnackbar({
                    message: 'Document chunk successfully edited!',
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
                getChunk
            }
            
        }  {
            
            enqueueSnackbar({
                message: `Failed to edit chunk: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
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
        }
    }

     => {
        const confirmPayload = {
            title: `Delete`,
            description: `Delete chunk ${chunk.id} ? This action cannot be undone.`,
            confirmButtonName: 'Delete',
            cancelButtonName: 'Cancel'
        }
        

         {
            
            
            try {
                
                 {
                    enqueueSnackbar({
                        message: 'Document chunk successfully deleted!',
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
                    getChunk
                }
                
            }  {
                
                enqueueSnackbar({
                    message: `Failed to delete chunk: ${
                        typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                    }`,
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
            }
        }
    }

    u => {
        
        getChunk
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        
        
        getChunk
    }

    u => {
         {
            const data = getChunksApi.data
            const workspaceId = data.workspaceId
            ) {
                nav
                return
            }
            
            
            
            
            
            
             {
                const fileNames = []
                f {
                    f
                }
                
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <MainCard style={{ position: 'relative' }}>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 1 }}>
                        <ViewHeader
                            isBackButton={true}
                            search={false}
                            title={getChunksApi.data?.file?.loaderName || getChunksApi.data?.storeName}
                            description={getChunksApi.data?.file?.splitterName || getChunksApi.data?.description}
                             => nav}
                        ></ViewHeader>
                        <div style={{ width: '100%' }}>
                            {fileNames.length > 0 && (
                                <Grid sx={{ mt: 1 }} container>
                                    {f => (
                                        <div
                                            key={index}
                                            style={{
                                                paddingLeft: '15px',
                                                paddingRight: '15px',
                                                paddingTop: '10px',
                                                paddingBottom: '10px',
                                                fontSize: '0.9rem',
                                                width: 'max-content',
                                                borderRadius: '25px',
                                                boxShadow: customization.isDarkMode
                                                    ? '0 2px 14px 0 '
                                                    : '0 2px 14px 0 ',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginRight: '10px'
                                            }}
                                        >
                                            {fileName}
                                        </div>
                                    ))}
                                </Grid>
                            )}
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    overflow: 'hidden',
                                    marginTop: 15,
                                    marginBottom: 10
                                }}
                            >
                                <div style={{ marginRight: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
                                    Sh}-{end} of {totalChunks} chunks
                                    <IconButton
                                        size='small'
                                         => }
                                        style={{ marginLeft: 10 }}
                                        variant='outlined'
                                        disabled={end >= totalChunks}
                                    >
                                        <IconChevronRight
                                            color={
                                                customization.isDarkMode
                                                    ? end >= totalChunks
                                                        ? '#616161'
                                                        : 'white'
                                                    : end >= totalChunks
                                                    ? '#e0e0e0'
                                                    : 'black'
                                            }
                                        />
                                    </IconButton>
                                </div>
                                <div style={{ marginRight: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <IconLanguage style={{ marginRight: 10 }} size={20} />
                                    {getChunk} characters
                                </div>
                            </div>
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                {!documentChunks.length && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            width: '100%'
                                        }}
                                    >
                                        <Box sx={{ mt: 5, p: 2, height: 'auto' }}>
                                            <img
                                                style={{ objectFit: 'cover', height: '16vh', width: 'auto' }}
                                                src={chunks_emptySVG}
                                                alt='chunks_emptySVG'
                                            />
                                        </Box>
                                        <div>No Chunks</div>
                                    </div>
                                )}
                                {documentChunks.length > 0 &&
                                     => (
                                        <Grid item lg={4} md={4} sm={6} xs={6} key={index}>
                                            <CardWrapper
                                                content={false}
                                                 => }
                                                sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }}
                                            >
                                                <Card>
                                                    <CardContent sx={{ p: 2 }}>
                                                        <Typography sx={{ wordWrap: 'break-word', mb: 1 }} variant='h5'>
                                                            {`#${row.chunkNo}. Characters: ${row.pageContent.length}`}
                                                        </Typography>
                                                        <Typography sx={{ wordWrap: 'break-word' }} variant='body2'>
                                                            {row.pageContent}
                                                        </Typography>
                                                        <ReactJson
                                                            theme={customization.isDarkMode ? 'ocean' : 'rjv-default'}
                                                            style={{ paddingTop: 10 }}
                                                             : {}}
                                                            name={null}
                                                            quotesOnKeys={false}
                                                            enableClipboard={false}
                                                            displayDataTypes={false}
                                                            collapsed={1}
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </CardWrapper>
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>
                    </Stack>
                )}
            </MainCard>
            <ConfirmDialog />
            <ExpandedChunkDialog
                show={showExpandedChunkDialog}
                dialogProps={expandedChunkDialogProps}
                 => }
                 => }
                 => }
            ></ExpandedChunkDialog>
            {loading && <BackdropLoader open={loading} />}
        </>
    )
}

export default ShowStoredChunks
