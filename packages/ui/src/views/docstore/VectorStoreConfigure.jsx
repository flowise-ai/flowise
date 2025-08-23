import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment/moment'

// material-ui
import { Button, Stack, Grid, Box, Typography, IconButton, Stepper, Step, StepLabel } from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import ComponentsListDialog from '@/views/docstore/ComponentsListDialog'
import DocStoreInputHandler from '@/views/docstore/DocStoreInputHandler'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import ErrorBoundary from '@/ErrorBoundary'
import UpsertResultDialog from '@/views/vectorstore/UpsertResultDialog'
import UpsertHistorySideDrawer from './UpsertHistorySideDrawer'
import UpsertHistoryDetailsDialog from './UpsertHistoryDetailsDialog'

// API
import documentsApi from '@/api/documentstore'
import nodesApi from '@/api/nodes'

// Hooks
import useApi from '@/hooks/useApi'
import { useAuth } from '@/hooks/useAuth'

// Store
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import { baseURL } from '@/store/constant'
import { useError } from '@/store/context/ErrorContext'

// icons
import { IconX, IconEditCircle, IconRowInsertTop, IconDeviceFloppy, IconRefresh, IconClock } from '@tabler/icons-react'
import Embeddings from '@mui/icons-material/DynamicFeed'
import Storage from '@mui/icons-material/Storage'
import DynamicFeed from '@mui/icons-material/Filter1'

// utils
import { initNode, showHideInputParams } from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'

// const
const steps = ['Embeddings', 'Vector Store', 'Record Manager']

 => {
    
    
    
    u
    
     => 

    

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
         => {
            const updatedData = { ...prevData }
            updatedData.inputs[inputParam.name] = newValue
            up
            return updatedData
        })
    }

     => {
        ))
         {
            nodeData.inputs = documentStore.embeddingConfig.config
            nodeData.credential = documentStore.embeddingConfig.config.credential
        }
        
        
    }

     => {
        const dialogProp = {
            title: 'Select Embeddings Provider'
        }
        
        
    }

     => {
        ))
         => an) {
            
            
        } else {
            
        }
         {
            nodeData.inputs = documentStore.vectorStoreConfig.config
            nodeData.credential = documentStore.vectorStoreConfig.config.credential
        }
        
        
    }

     => {
        const dialogProp = {
            title: 'Select a Vector Store Provider'
        }
        
        
    }

     => {
        ))
         {
            nodeData.inputs = documentStore.recordManagerConfig.config
            nodeData.credential = documentStore.recordManagerConfig.config.credential
        }
        
        
    }

     => {
        const dialogProp = {
            title: 'Select a Record Manager'
        }
        
        
    }

     => {
        const dialogProp = {
            id: storeId
        }
        
        
    }

     => {
        const props = {
            t.f,
            numAdded: history.result.numAdded,
            numUpdated: history.result.numUpdated,
            numSkipped: history.result.numSkipped,
            numDeleted: history.result.numDeleted,
            flowData: history.flowData
        }
        
        
    }

     => {
        let canSubmit = true
        .f => 
        f {
            ) {
                 {
                    canSubmit = false
                    break
                } el {
                    canSubmit = false
                    break
                }
            }
        }

        .f => 
        f {
            ) {
                 {
                    canSubmit = false
                    break
                } el {
                    canSubmit = false
                    break
                }
            }
        }

         {
            enqueueSnackbar({
                message: 'Please fill in all mandatory fields.',
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
        const data = {
            storeId: storeId,
            docId: docId
        }
        // Set embedding config
         {
            data.embeddingConfig = {}
            data.embeddingName = selectedEmbeddingsProvider.name
            Obje.map((key) => {
                 {
                    data.embeddingConfig['credential'] = selectedEmbeddingsProvider.inputs[key]
                } else {
                    data.embeddingConfig[key] = selectedEmbeddingsProvider.inputs[key]
                }
            })
        } else {
            data.embeddingConfig = null
            data.embeddingName = ''
        }

        // Set vector store config
         {
            data.vectorStoreConfig = {}
            data.vectorStoreName = selectedVectorStoreProvider.name
            Obje.map((key) => {
                 {
                    data.vectorStoreConfig['credential'] = selectedVectorStoreProvider.inputs[key]
                } else {
                    data.vectorStoreConfig[key] = selectedVectorStoreProvider.inputs[key]
                }
            })
        } else {
            data.vectorStoreConfig = null
            data.vectorStoreName = ''
        }

        // Set record manager config
         {
            data.recordManagerConfig = {}
            data.recordManagerName = selectedRecordManagerProvider.name
            Obje.map((key) => {
                 {
                    data.recordManagerConfig['credential'] = selectedRecordManagerProvider.inputs[key]
                } else {
                    data.recordManagerConfig[key] = selectedRecordManagerProvider.inputs[key]
                }
            })
        } else {
            data.recordManagerConfig = null
            data.recordManagerName = ''
        }

        return data
    }

     => {
        ) {
            
            
            
        }
    }

     => {
        
        
        
    }

     => {
        
        
        
    }

     => {
        .length > 0) {
            return 3
        }
        .length > 0) {
            return 2
        }
        .length > 0) {
            return 1
        }
        return 0
    }

     => {
        return (
            <Box sx={{ width: '100%' }}>
                <Steppe} alternativeLabel>
                    { => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        )
    }

     => {
        .length === 0 || isRecordManagerUnavailable
    }

     => {
        .length === 0
    }

    u => {
         {
            
            enqueueSnackbar({
                message: 'Configuration saved successfully',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        getSpe

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const docStore = getSpecificDocumentStoreApi.data
            ) {
                nav
                return
            }
            
             {
                getEmbe
            }
             {
                getVe
            }
             {
                getRe
            }
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const node = getEmbeddingNodeDetailsApi.data
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const node = getVectorStoreNodeDetailsApi.data
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const node = getRecordManagerNodeDetailsApi.data
            
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
                    <>
                        {!storeId && <div></div>}
                        {storeId && (
                            <Stack flexDirection='column' sx={{ gap: 3 }}>
                                <ViewHeader
                                    isBackButton={true}
                                    search={false}
                                    title={getSpecificDocumentStoreApi.data?.name}
                                    description='Configure Embeddings, Vector Store and Record Manager'
                                     => nav}
                                >
                                    {(Obje.length > 0 ||
                                        Obje.length > 0) && (
                                        <Button
                                            variant='outlined'
                                            color='error'
                                            sx={{
                                                borderRadius: 2,
                                                height: '100%'
                                            }}
                                            startIcon={<IconRefresh />}
                                             => }
                                        >
                                            Reset
                                        </Button>
                                    )}
                                    {(Obje.length > 0 ||
                                        Obje.length > 0) && (
                                        <Button
                                            variant='outlined'
                                            color='secondary'
                                            sx={{
                                                borderRadius: 2,
                                                height: '100%'
                                            }}
                                            startIcon={<IconDeviceFloppy />}
                                             => }
                                        >
                                            Save Config
                                        </Button>
                                    )}
                                    {Obje.length > 0 &&
                                        Obje.length > 0 && (
                                            <Button
                                                variant='contained'
                                                sx={{
                                                    borderRadius: 2,
                                                    height: '100%',
                                                    ba`,
                                                    '&:hover': {
                                                        ba`
                                                    }
                                                }}
                                                startIcon={<IconRowInsertTop />}
                                                 => t}
                                            >
                                                Upsert
                                            </Button>
                                        )}
                                    <IconButton onClick={showUpsertHistoryDrawer} size='small' color='inherit' title='Upsert History'>
                                        <IconClock />
                                    </IconButton>
                                </ViewHeader>
                                <Steps />
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={4} md={4}>
                                        {Obje.length === 0 ? (
                                            <Button
                                                onClick={showEmbeddingsList}
                                                fullWidth={true}
                                                startIcon={<Embeddings style={{ background: 'transparent', height: 32, width: 32 }} />}
                                                sx={{
                                                    color: customization?.isDarkMode ? 'white' : 'inherit',
                                                    borderRadius: '10px',
                                                    minHeight: '200px',
                                                    b',
                                                    backgroundImage: customization?.isDarkMode
                                                        ? `l`
                                                        : `l`,
                                                    '&:hover': {
                                                        backgroundImage: customization?.isDarkMode
                                                            ? `l`
                                                            : `l`
                                                    }
                                                }}
                                            >
                                                Select Embeddings
                                            </Button>
                                        ) : (
                                            <Box>
                                                <Grid container spacing='2'>
                                                    <Grid item xs={12} md={12} lg={12} sm={12}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                paddingRight: 15
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    flexDirection: 'row',
                                                                    p: 1
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        width: 40,
                                                                        height: 40,
                                                                        borderRadius: '50%',
                                                                        backgroundColor: 'white',
                                                                        display: 'flex',
                                                                        b'
                                                                    }}
                                                                >
                                                                    {selectedEmbeddingsProvider.label ? (
                                                                        <img
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                padding: 7,
                                                                                borderRadius: '50%',
                                                                                objectFit: 'contain'
                                                                            }}
                                                                            alt={selectedEmbeddingsProvider.label ?? 'embeddings'}
                                                                            src={`${baseURL}/api/v1/node-icon/${selectedEmbeddingsProvider?.name}`}
                                                                        />
                                                                    ) : (
                                                                        <Embeddings color='black' />
                                                                    )}
                                                                </div>
                                                                <Typography sx={{ ml: 2 }} variant='h3'>
                                                                    {selectedEmbeddingsProvider.label}
                                                                </Typography>
                                                                <div style={{ flex: 1 }}></div>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignContent: 'center',
                                                                        flexDirection: 'row'
                                                                    }}
                                                                >
                                                                    {Obje.length > 0 && (
                                                                        <>
                                                                            <IconButton
                                                                                variant='outlined'
                                                                                sx={{ ml: 1 }}
                                                                                color='secondary'
                                                                                onClick={showEmbeddingsList}
                                                                            >
                                                                                <IconEditCircle />
                                                                            </IconButton>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </Box>
                                                            {selectedEmbeddingsProvider &&
                                                                Obje.length > 0 &&
                                                                
                                                                    .filter(
                                                                        ( => !inputParam.hidden && inputParam.display !== false
                                                                    )
                                                                    .map(( => (
                                                                        <DocStoreInputHandler
                                                                            key={index}
                                                                            data={selectedEmbeddingsProvider}
                                                                            inputParam={inputParam}
                                                                            isAdditionalParams={inputParam.additionalParams}
                                                                            onNodeDataChange={handleEmbeddingsProviderDataChange}
                                                                        />
                                                                    ))}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        {Obje.length === 0 ? (
                                            <Button
                                                onClick={showVectorStoreList}
                                                fullWidth={true}
                                                startIcon={<Storage style={{ background: 'transparent', height: 32, width: 32 }} />}
                                                sx={{
                                                    color: customization?.isDarkMode ? 'white' : 'inherit',
                                                    borderRadius: '10px',
                                                    minHeight: '200px',
                                                     ? 0.7 : 1,
                                                    b ? 'n',
                                                    backgroundImage: customization?.isDarkMode
                                                        ? `l`
                                                        : `l`,
                                                    '&:hover': {
                                                        backgroundImage: customization?.isDarkMode
                                                            ? `l`
                                                            : `l`
                                                    }
                                                }}
                                                }
                                            >
                                                Select Vector Store
                                            </Button>
                                        ) : (
                                            <Box>
                                                <Grid container spacing='2'>
                                                    <Grid item xs={12} md={12} lg={12} sm={12}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                paddingRight: 15
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    flexDirection: 'row',
                                                                    p: 1
                                                                }}
                                                            >
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
                                                                    {selectedVectorStoreProvider.label ? (
                                                                        <img
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                padding: 7,
                                                                                borderRadius: '50%',
                                                                                objectFit: 'contain'
                                                                            }}
                                                                            alt={selectedVectorStoreProvider.label ?? 'embeddings'}
                                                                            src={`${baseURL}/api/v1/node-icon/${selectedVectorStoreProvider?.name}`}
                                                                        />
                                                                    ) : (
                                                                        <Embeddings color='black' />
                                                                    )}
                                                                </div>
                                                                <Typography sx={{ ml: 2 }} variant='h3'>
                                                                    {selectedVectorStoreProvider.label}
                                                                </Typography>
                                                                <div style={{ flex: 1 }}></div>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignContent: 'center',
                                                                        flexDirection: 'row'
                                                                    }}
                                                                >
                                                                    {Obje.length > 0 && (
                                                                        <>
                                                                            <IconButton
                                                                                variant='outlined'
                                                                                sx={{ ml: 1 }}
                                                                                color='secondary'
                                                                                onClick={showVectorStoreList}
                                                                            >
                                                                                <IconEditCircle />
                                                                            </IconButton>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </Box>
                                                            {selectedVectorStoreProvider &&
                                                                Obje.length > 0 &&
                                                                
                                                                    .filter(
                                                                        ( => !inputParam.hidden && inputParam.display !== false
                                                                    )
                                                                    .map(( => (
                                                                        <DocStoreInputHandler
                                                                            key={index}
                                                                            data={selectedVectorStoreProvider}
                                                                            inputParam={inputParam}
                                                                            isAdditionalParams={inputParam.additionalParams}
                                                                            onNodeDataChange={handleVectorStoreProviderDataChange}
                                                                        />
                                                                    ))}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={4}>
                                        {Obje.length === 0 ? (
                                            <Button
                                                onClick={showRecordManagerList}
                                                fullWidth={true}
                                                startIcon={
                                                    isRecordManagerUnavailable ? (
                                                        <></>
                                                    ) : (
                                                        <DynamicFeed style={{ background: 'transparent', height: 32, width: 32 }} />
                                                    )
                                                }
                                                sx={{
                                                    color: customization?.isDarkMode ? 'white' : 'inherit',
                                                    borderRadius: '10px',
                                                    minHeight: '200px',
                                                     ? 0.7 : 1,
                                                    b ? 'n',
                                                    backgroundImage: customization?.isDarkMode
                                                        ? `l`
                                                        : `l`,
                                                    '&:hover': {
                                                        backgroundImage: customization?.isDarkMode
                                                            ? `l`
                                                            : `l`
                                                    }
                                                }}
                                                }
                                            >
                                                {isRecordManagerUnavailable
                                                    ? 'Record Manager is not applicable for selected Vector Store'
                                                    : 'Select Record Manager'}
                                            </Button>
                                        ) : (
                                            <Box>
                                                <Grid container spacing='2'>
                                                    <Grid item xs={12} md={12} lg={12} sm={12}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                paddingRight: 15
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    flexDirection: 'row',
                                                                    p: 1
                                                                }}
                                                            >
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
                                                                    {selectedRecordManagerProvider.label ? (
                                                                        <img
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                padding: 7,
                                                                                borderRadius: '50%',
                                                                                objectFit: 'contain'
                                                                            }}
                                                                            alt={selectedRecordManagerProvider.label ?? 'embeddings'}
                                                                            src={`${baseURL}/api/v1/node-icon/${selectedRecordManagerProvider?.name}`}
                                                                        />
                                                                    ) : (
                                                                        <Embeddings color='black' />
                                                                    )}
                                                                </div>
                                                                <Typography sx={{ ml: 2 }} variant='h3'>
                                                                    {selectedRecordManagerProvider.label}
                                                                </Typography>
                                                                <div style={{ flex: 1 }}></div>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignContent: 'center',
                                                                        flexDirection: 'row'
                                                                    }}
                                                                >
                                                                    {Obje.length > 0 && (
                                                                        <>
                                                                            <IconButton
                                                                                variant='outlined'
                                                                                sx={{ ml: 1 }}
                                                                                color='secondary'
                                                                                onClick={showRecordManagerList}
                                                                            >
                                                                                <IconEditCircle />
                                                                            </IconButton>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </Box>
                                                            {selectedRecordManagerProvider &&
                                                                Obje.length > 0 &&
                                                                
                                                                    .filter(
                                                                        ( => !inputParam.hidden && inputParam.display !== false
                                                                    )
                                                                    .map(( => (
                                                                        <DocStoreInputHandler
                                                                            key={index}
                                                                            data={selectedRecordManagerProvider}
                                                                            inputParam={inputParam}
                                                                            isAdditionalParams={inputParam.additionalParams}
                                                                            onNodeDataChange={handleRecordManagerProviderDataChange}
                                                                        />
                                                                    ))}
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                    </Grid>
                                </Grid>
                            </Stack>
                        )}
                    </>
                )}
            </MainCard>

            {showEmbeddingsListDialog && (
                <ComponentsListDialog
                    show={showEmbeddingsListDialog}
                    dialogProps={dialogProps}
                     => }
                    apiCall={documentsApi.getEmbeddingProviders}
                    onSelected={onEmbeddingsSelected}
                />
            )}
            {showVectorStoreListDialog && (
                <ComponentsListDialog
                    show={showVectorStoreListDialog}
                    dialogProps={dialogProps}
                     => }
                    apiCall={documentsApi.getVectorStoreProviders}
                    onSelected={onVectorStoreSelected}
                />
            )}
            {showRecordManagerListDialog && (
                <ComponentsListDialog
                    show={showRecordManagerListDialog}
                    dialogProps={dialogProps}
                     => }
                    apiCall={documentsApi.getRecordManagerProviders}
                    onSelected={onRecordManagerSelected}
                />
            )}
            {showUpsertHistoryDialog && (
                <UpsertResultDialog
                    show={showUpsertHistoryDialog}
                    dialogProps={upsertResultDialogProps}
                     => {
                        
                    }}
                     => nav}
                ></UpsertResultDialog>
            )}
            {showUpsertHistorySideDrawer && (
                <UpsertHistorySideDrawer
                    show={showUpsertHistorySideDrawer}
                    dialogProps={upsertHistoryDrawerDialogProps}
                     => }
                    onSelectHistoryDetails={onSelectHistoryDetails}
                />
            )}
            {showUpsertHistoryDetailsDialog && (
                <UpsertHistoryDetailsDialog
                    show={showUpsertHistoryDetailsDialog}
                    dialogProps={upsertDetailsDialogProps}
                     => }
                />
            )}
            <ConfirmDialog />
            {loading && <BackdropLoader open={loading} />}
        </>
    )
}

export default VectorStoreConfigure
