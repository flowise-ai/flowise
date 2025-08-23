import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import { validate as uuidValidate, v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ReactJson from 'flowise-react-json-view'

// Hooks
import useApi from '@/hooks/useApi'
import { useAuth } from '@/hooks/useAuth'

// Material-UI
import { Skeleton, Toolbar, Box, Button, Card, CardContent, Grid, OutlinedInput, Stack, Typography, TextField } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { IconScissors, IconArrowLeft, IconDatabaseImport, IconBook, IconX, IconEye } from '@tabler/icons-react'

// Project import
import MainCard from '@/ui-component/cards/MainCard'
import { StyledButton } from '@/ui-component/button/StyledButton'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import { StyledFab } from '@/ui-component/button/StyledFab'
import ErrorBoundary from '@/ErrorBoundary'
import ExpandedChunkDialog from './ExpandedChunkDialog'

// API
import nodesApi from '@/api/nodes'
import documentStoreApi from '@/api/documentstore'
import documentsApi from '@/api/documentstore'

// Const
import { baseURL, gridSpacing } from '@/store/constant'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { useError } from '@/store/context/ErrorContext'

// Utils
import { initNode, showHideInputParams } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'

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

// ===========================|| DOCUMENT LOADER CHUNKS ||=========================== //

 => {
     => 
    
    
    
    

    
    
    

    

    

    
    

    
    
    

    
    

    
    
    

    
    

    

    // ==============================|| Snackbar ||============================== //
    u
     => )
     => )

     => {
         => {
            const updatedData = { ...prevData }
            updatedData.inputs[inputParam.name] = newValue
            up
            return updatedData
        })
    }

     => {
         => {
            const updatedData = { ...prevData }
            updatedData.inputs[inputParam.name] = newValue
            up
            return updatedData
        })
    }

     => {
        .f => 
         {
            
        } else {
            
        }
    }

     => {
        const dialogProps = {
            data: {
                selectedChunk,
                selectedChunkNumber
            }
        }
        
        
    }

     => {
        let canSubmit = true
        const missingFields = []
        .f => 
        f {
            ) {
                if (
                    inputParam.type === 'credential' &&
                    !selectedDocumentLoader.credential &&
                    !selectedDocumentLoader.inputs['FLOWISE_CREDENTIAL_ID']
                ) {
                    canSubmit = false
                    m
                } el {
                    canSubmit = false
                    m
                }
            }
        }
         {
            
            enqueueSnackbar({
                message: `Please fill in the following mandatory fields: ${fieldsList}`,
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
        return canSubmit
    }

     => {
        ) {
            
            
            config.previewChunkCount = previewChunkCount

            try {
                
                 {
                    
                     ? p
                    
                }
                
            }  {
                
                enqueueSnackbar({
                    message: `Failed to preview chunks: ${
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

     => {
        ) {
            
            
            try {
                
                
                 {
                    enqueueSnackbar({
                        message: 'File submitted for processing. Redirecting to Document Store..',
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
                    // don't wait for the process to complete, redirect to document store
                    
                    nav
                }
            }  {
                
                enqueueSnackbar({
                    message: `Failed to process chunking: ${
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

     => {
        const config = {}

        // Set loader id & name
         {
            config.loaderId = existingLoaderFromDocStoreTable.loaderId
            config.id = existingLoaderFromDocStoreTable.id
        } else {
            config.loaderId = docLoaderNodeName
        }

        // Set store id & loader name
        config.storeId = storeId
        config.loaderName = loaderName || selectedDocumentLoader?.label

        // Set loader config
         {
            config.loaderConfig = {}
            Obje.map((key) => {
                config.loaderConfig[key] = selectedDocumentLoader.inputs[key]
            })
        }

        // If Text splitter is set
        .length > 0) {
            config.splitterId = selectedTextSplitter.name
            config.splitterConfig = {}

            Obje.map((key) => {
                config.splitterConfig[key] = selectedTextSplitter.inputs[key]
            })
             => 
             config.splitterName = textSplitter.label
        }

         {
            config.credential = selectedDocumentLoader.credential
        }

        return config
    }

    u => {
        ) {
            // this is a document store edit config
            getSpe
        } else {
            getN
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            ))
            // If this is a document store edit config, set the existing input values
             {
                nodeData.inputs = existingLoaderFromDocStoreTable.loaderConfig
                
            }
            

            // Check if the loader has a text splitter, if yes, get the text splitter nodes
             => 
             {
                getN
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            // Set available text splitter nodes
            const nodes = []
            f {
                n)))
            }
            

            // Set options
             => ({
                label: splitter.label,
                name: splitter.name
            }))
            
            

            // If this is a document store edit config, set the existing input values
            if (
                existingLoaderFromDocStoreTable &&
                existingLoaderFromDocStoreTable.splitterConfig &&
                existingLoaderFromDocStoreTable.splitterId
            ) {
                 => 
                 {
                    textSpl
                    
                } else {
                    
                }
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const workspaceId = getSpecificDocumentStoreApi.data.workspaceId
            ) {
                nav
                return
            }
             {
                 => l
                 {
                    
                    getN
                }
            }
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
                        <Box sx={{ flexGrow: 1, py: 1.25, width: '100%' }}>
                            <Toolbar
                                disableGutters={true}
                                sx={{
                                    p: 0,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <Style => nav}>
                                        <IconArrowLeft />
                                    </StyledFab>
                                    <Typography sx={{ ml: 2, mr: 2 }} variant='h3'>
                                        {selectedDocumentLoader?.label}
                                    </Typography>
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'white',
                                            b'
                                        }}
                                    >
                                        {selectedDocumentLoader?.name ? (
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    padding: 7,
                                                    borderRadius: '50%',
                                                    objectFit: 'contain'
                                                }}
                                                alt={selectedDocumentLoader?.name ?? 'docloader'}
                                                src={`${baseURL}/api/v1/node-icon/${selectedDocumentLoader?.name}`}
                                            />
                                        ) : (
                                            <IconBook color='black' />
                                        )}
                                    </div>
                                </Box>
                                <Box>
                                    <StyledButton
                                        variant='contained'
                                        onClick={onSaveAndProcess}
                                        sx={{ borderRadius: 2, height: '100%' }}
                                        startIcon={<IconDatabaseImport />}
                                    >
                                        Process
                                    </StyledButton>
                                </Box>
                            </Toolbar>
                        </Box>
                        <Box>
                            <Grid container spacing='2'>
                                <Grid item xs={4} md={6} lg={6} sm={4}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingRight: 15
                                        }}
                                    >
                                        <Box sx={{ p: 2 }}>
                                            <TextField
                                                fullWidth
                                                sx={{ mt: 1 }}
                                                size='small'
                                                label={
                                                    .
                                                        ? selectedDocumentLoader.label + ' name'
                                                        : selectedDocumentLoader?.label + ' Loader Name'
                                                }
                                                value={loaderName}
                                                 => }
                                            />
                                        </Box>
                                        {selectedDocumentLoader &&
                                            Obje.length > 0 &&
                                            
                                                .f => 
                                                .map(( => (
                                                    <DocStoreInputHandler
                                                        key={index}
                                                        inputParam={inputParam}
                                                        data={selectedDocumentLoader}
                                                        onNodeDataChange={handleDocumentLoaderDataChange}
                                                    />
                                                ))}
                                        {textSplitterNodes && textSplitterNodes.length > 0 && (
                                            <>
                                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', p: 2, mt: 5 }}>
                                                    <Typography sx={{ mr: 2 }} variant='h3'>
                                                        {(.find(
                                                            ( => splitter.name === selectedTextSplitter?.name
                                                        )?.label ?? 'Select Text Splitter'}
                                                    </Typography>
                                                    <div
                                                        style={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'white',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            b'
                                                        }}
                                                    >
                                                        {selectedTextSplitter?.name ? (
                                                            <img
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    padding: 7,
                                                                    borderRadius: '50%',
                                                                    objectFit: 'contain'
                                                                }}
                                                                alt={selectedTextSplitter?.name ?? 'textsplitter'}
                                                                src={`${baseURL}/api/v1/node-icon/${selectedTextSplitter?.name}`}
                                                            />
                                                        ) : (
                                                            <IconScissors color='black' />
                                                        )}
                                                    </div>
                                                </Box>
                                                <Box sx={{ p: 2 }}>
                                                    <Typography>Splitter</Typography>
                                                    <Dropdown
                                                        key={JSON.}
                                                        name='textSplitter'
                                                        options={splitterOptions}
                                                         => }
                                                        value={selectedTextSplitter?.name ?? 'none'}
                                                    />
                                                </Box>
                                            </>
                                        )}
                                        {Obje.length > 0 &&
                                            
                                                .f => 
                                                .map(( => (
                                                    <DocStoreInputHandler
                                                        key={index}
                                                        data={selectedTextSplitter}
                                                        inputParam={inputParam}
                                                        onNodeDataChange={handleTextSplitterDataChange}
                                                    />
                                                ))}
                                    </div>
                                </Grid>
                                <Grid item xs={8} md={6} lg={6} sm={8}>
                                    {!documentChunks ||
                                        (documentChunks.length === 0 && (
                                            <div style={{ position: 'relative' }}>
                                                <B' gap={gridSpacing}>
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                    <Skeleton
                                                        animation={false}
                                                        sx={{ bgcolor: customization.isDarkMode ? '#23262c' : '#fafafa' }}
                                                        variant='rounded'
                                                        height={160}
                                                    />
                                                </Box>
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        ba`,
                                                        background: `transparent`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <StyledFab
                                                        color='secondary'
                                                        aria-label='preview'
                                                        title='Preview'
                                                        variant='extended'
                                                        onClick={onPreviewChunks}
                                                    >
                                                        <IconEye style={{ marginRight: '5px' }} />
                                                        Preview Chunks
                                                    </StyledFab>
                                                </div>
                                            </div>
                                        ))}
                                    {documentChunks && documentChunks.length > 0 && (
                                        <>
                                            <Typography sx={{ wordWrap: 'break-word', textAlign: 'left', mb: 2 }} variant='h3'>
                                                {currentPreviewCount} of {totalChunks} Chunks
                                            </Typography>
                                            <Box sx={{ mb: 3 }}>
                                                <Typography>Show Chunks in Preview</Typography>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <OutlinedInput
                                                        size='small'
                                                        multiline={false}
                                                        sx={{ mt: 1, flex: 1, mr: 2 }}
                                                        type='number'
                                                        key='previewChunkCount'
                                                         => }
                                                        value={previewChunkCount ?? 25}
                                                    />
                                                    <StyledFab
                                                        color='secondary'
                                                        aria-label='preview'
                                                        title='Preview'
                                                        variant='extended'
                                                        onClick={onPreviewChunks}
                                                    >
                                                        <IconEye style={{ marginRight: '5px' }} />
                                                        Preview
                                                    </StyledFab>
                                                </div>
                                            </Box>
                                            <div style={{ height: '800px', overflow: 'scroll', padding: '5px' }}>
                                                <Grid container spacing={2}>
                                                    { => (
                                                        <Grid item lg={6} md={6} sm={6} xs={6} key={index}>
                                                            <CardWrapper
                                                                content={false}
                                                                 => }
                                                                sx={{
                                                                    border: 1,
                                                                    borderColor: theme.palette.grey[900] + 25,
                                                                    borderRadius: 2
                                                                }}
                                                            >
                                                                <Card>
                                                                    <CardContent sx={{ p: 1 }}>
                                                                        <Typography sx={{ wordWrap: 'break-word', mb: 1 }} variant='h5'>
                                                                            {`#${index + 1}. Characters: ${row.pageContent.length}`}
                                                                        </Typography>
                                                                        <Typography sx={{ wordWrap: 'break-word' }} variant='body2'>
                                                                            {row.pageContent}
                                                                        </Typography>
                                                                        <ReactJson
                                                                            theme={customization.isDarkMode ? 'ocean' : 'rjv-default'}
                                                                            style={{ paddingTop: 10 }}
                                                                            src={row.metadata}
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
                                        </>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                )}
            </MainCard>
            <ExpandedChunkDialog
                show={showExpandedChunkDialog}
                isReadOnly={true}
                dialogProps={expandedChunkDialogProps}
                 => }
            ></ExpandedChunkDialog>
            {loading && <BackdropLoader open={loading} />}
        </>
    )
}

export default LoaderConfigPreviewChunks
