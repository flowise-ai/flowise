import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// material-ui
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    Divider,
    Chip,
    Paper,
    Stack,
    ButtonGroup,
    Button,
    Grid,
    ListItem,
    Box,
    IconButton,
    TableRow,
    Skeleton,
    TableCell
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import moment from 'moment'
import PaidIcon from '@mui/icons-material/Paid'
import { IconHierarchy, IconUsersGroup, IconRobot } from '@tabler/icons-react'
import LLMIcon from '@mui/icons-material/ModelTraining'
import AlarmIcon from '@mui/icons-material/AlarmOn'
import TokensIcon from '@mui/icons-material/AutoAwesomeMotion'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import MetricsItemCard from '@/views/evaluations/MetricsItemCard'
import { ChartLatency } from '@/views/evaluations/ChartLatency'
import { ChartPassPrnt } from '@/views/evaluations/ChartPassPrnt'
import { ChartTokens } from '@/views/evaluations/ChartTokens'
import EvaluationResultSideDrawer from '@/views/evaluations/EvaluationResultSideDrawer'
import ErrorBoundary from '@/ErrorBoundary'
import { StyledTableCell, StyledTableRow } from '@/ui-component/table/TableStyles'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import EvaluationResultVersionsSideDrawer from '@/views/evaluations/EvaluationResultVersionsSideDrawer'
import EvalsResultDialog from '@/views/evaluations/EvalsResultDialog'
import { PermissionButton } from '@/ui-component/button/RBACButtons'

// API
import useNotifier from '@/utils/useNotifier'
import useApi from '@/hooks/useApi'
import evaluationApi from '@/api/evaluations'

// Hooks
import useConfirm from '@/hooks/useConfirm'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'

// icons
import {
    IconPercentage,
    IconVectorBezier2,
    IconMaximize,
    IconClock,
    IconAlertTriangle,
    IconRun,
    IconEye,
    IconEyeOff,
    IconX
} from '@tabler/icons-react'

//const
import { useError } from '@/store/context/ErrorContext'

// ==============================|| EvaluationResults ||============================== //

 => {
    
    
     => 
    
    
    u
    

     => )
     => )

    
    
    

    
    
    
    
    

    
    
    
    

    
    

    
    

    

    
    
    

    

    
    
    

    

     => {
        setSideDrawerDialogProps({
            type: 'View',
            data: item,
            additionalConfig: additionalConfig,
            evaluationType: evaluation.evaluationType,
            evaluationChatflows: evaluation.chatflowName
        })
        
    }

     => {
        
    }

     => {
        setVersionDrawerDialogProps({
            id: evaluation?.id
        })
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }

     => {
        
    }
     => {
        
    }

     => {
        setExpandTableProps({
            data: {
                evaluation,
                rows,
                customEvalsDefined,
                showCustomEvals,
                showTokenMetrics,
                showLatencyMetrics,
                showCostMetrics,
                additionalConfig
            }
        })
        
    }

     => {
        const confirmPayload = {
            title: `Run Again`,
            description: `Initiate Rerun for Evaluation ${evaluation.name}?`,
            confirmButtonName: 'Yes',
            cancelButtonName: 'No'
        }
        

         {
            
            enqueueSnackbar({
                message: "Evaluation '" + evaluation.name + "' is running. Redirecting to evaluations page.",
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
            nav
        }
    }

    .
    const evalId = URLpath[URLpath.length - 1] === 'evaluation_rows' ? '' : URLpath[URLpath.length - 1]

     => {
        nav
    }

     => {
        let colSpan = 1
         colSpan++
         colSpan++
        return colSpan
    }

    u => {
        getEvaluat
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
             {
                
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const data = getEvaluation.data
            
            getI
             {
                )
            }
            
            
            const rows = getEvaluation.data.rows
            const latencyChartData = []
            const tokensChartData = []
            let totalTokens = 0
            f {
                
                
                
                const latencyObj = {
                    y: i + 1
                }
                const tokensObj = {
                    y: i + 1
                }
                f {
                     {
                        laten
                    }
                     {
                        totalTokens += rows[i].metrics[m]?.totalTokens
                        tokensObj[data.chatflowName[m] + ' Prompt'] = rows[i].metrics[m]?.promptTokens
                        tokensObj[data.chatflowName[m] + ' Completion'] = rows[i].metrics[m]?.completionTokens
                    }
                }
                laten
                t
                 {
                    rows[i].llmEvaluators =
                        type
                }
                if (
                    rows[i].errors &&
                    typeof rows[i].errors === 'string' &&
                     &&
                    
                ) {
                     || []
                }
            }
            
            
            
            const evaluation = data
            evaluation.average_metrics =
                type
            const passPntData = []
            
            
             {
                passPntData.push({
                    name: 'Pass',
                    value: data.average_metrics.passCount
                })
            }
             {
                passPntData.push({
                    name: 'Fail',
                    value: data.average_metrics.failCount
                })
            }
             {
                passPntData.push({
                    name: 'Error',
                    value: data.average_metrics.errorCount
                })
            }
            
            .t)
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
         {
            return undefined
        }
        const id = evaluation.chatflowId[index]
        // this is to check if the evaluation is deleted!
         => e.) {
            return undefined
        }
         {
             {
                case 'Chatflow':
                    return '/canvas/' + evaluation.chatflowId[index]
                case 'Custom Assistant':
                    return '/assistants/custom/' + evaluation.chatflowId[index]
                case 'Agentflow v2':
                    return '/v2/agentcanvas/' + evaluation.chatflowId[index]
            }
        }
        return '/canvas/' + evaluation.chatflowId[index]
    }

     => {
        
         {
            w, '_blank')
        }
    }

     => {
         {
            return <IconHierarchy size={17} />
        }
         {
             {
                case 'Chatflow':
                    return <IconHierarchy size={17} />
                case 'Custom Assistant':
                    return <IconRobot size={17} />
                case 'Agentflow v2':
                    return <IconUsersGroup size={17} />
            }
        }
        return <IconHierarchy />
    }
    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column' sx={{ gap: 3 }}>
                        <ViewHeader
                            isBackButton={true}
                            isEditButton={false}
                            onBack={goBack}
                            search={false}
                            title={'Evaluation: ' + selectedEvaluationName}
                            .f : ''}
                        >
                            {evaluation?.versionCount > 1 && (
                                <Chip
                                    variant='outlined'
                                    size='small'
                                    label={'Version: ' + evaluation.versionNo + '/' + evaluation.versionCount}
                                />
                            )}
                            {evaluation?.versionCount > 1 && (
                                <Button
                                    sx={{ borderRadius: 2 }}
                                    startIcon={<IconClock />}
                                    variant='outlined'
                                    color='primary'
                                    onClick={openVersionsDrawer}
                                >
                                    Version history
                                </Button>
                            )}
                            <PermissionButton
                                permissionId={'evaluations:run'}
                                sx={{ borderRadius: 2 }}
                                startIcon={<IconRun />}
                                variant='contained'
                                color='primary'
                                disabled={outdated?.errors?.length > 0}
                                onClick={runAgain}
                            >
                                Re-run Evaluation
                            </PermissionButton>
                        </ViewHeader>

                        <Divider />
                        {outdated && (
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    ba',
                                    padding: 10,
                                    paddingTop: 15,
                                    marginTop: 10,
                                    marginBottom: 10
                                }}
                            >
                                <Box sx={{ p: 2 }}>
                                    <IconAlertTriangle size={25} color='orange' />
                                </Box>
                                <Stack flexDirection='column'>
                                    <' }}>
                                        {outdated?.errors?.length > 0 && (
                                            <b>This evaluation cannot be re-run, due to the following errors</b>
                                        )}
                                        {outdated?.errors?.length === 0 && (
                                            <b>The following items are outdated, re-run the evaluation for the latest results.</b>
                                        )}
                                    </span>
                                    {outdated.dataset && outdated?.errors?.length === 0 && (
                                        <>
                                            <br />
                                            <b ' }}>Dataset:</b>
                                            <Chip
                                                clickable
                                                sx={{
                                                    ',
                                                    mt: 1,
                                                    width: 'max-content',
                                                    borderRadius: '25px',
                                                    boxShadow: customization.isDarkMode
                                                        ? '0 2px 14px 0 '
                                                        : '0 2px 14px 0 '
                                                }}
                                                variant='outlined'
                                                label={outdated.dataset.name}
                                                 => w}
                                            ></Chip>
                                        </>
                                    )}
                                    {outdated.chatflows && outdated?.errors?.length === 0 && outdated.chatflows.length > 0 && (
                                        <>
                                            <br />
                                            <b ' }}>Flows:</b>
                                            <Stack sx={{ mt: 1, alignItems: 'center', flexWrap: 'wrap' }} flexDirection='row' gap={1}>
                                                { => (
                                                    <Chip
                                                        key={index}
                                                        clickable
                                                        style={{
                                                            ',
                                                            mt: 1,
                                                            width: 'max-content',
                                                            borderRadius: '25px',
                                                            boxShadow: customization.isDarkMode
                                                                ? '0 2px 14px 0 '
                                                                : '0 2px 14px 0 '
                                                        }}
                                                        variant='outlined'
                                                        label={chatflow.chatflowName}
                                                         =>
                                                            window.open(
                                                                chatflow.chatflowType === 'Chatflow'
                                                                    ? '/canvas/' + chatflow.chatflowId
                                                                    : chatflow.chatflowType === 'Custom Assistant'
                                                                    ? '/assistants/custom/' + chatflow.chatflowId
                                                                    : '/v2/agentcanvas/' + chatflow.chatflowId,
                                                                '_blank'
                                                            )
                                                        }
                                                    ></Chip>
                                                ))}
                                            </Stack>
                                        </>
                                    )}
                                    {outdated.errors.length > 0 &&
                                         => <L}
                                    <IconButton
                                        style={{ position: 'absolute', top: 10, right: 10 }}
                                        size='small'
                                        color='inherit'
                                         => }
                                    >
                                        <I'} />
                                    </IconButton>
                                </Stack>
                            </div>
                        )}
                        <ButtonGroup>
                            <Button
                                variant='outlined'
                                value={showCharts}
                                title='Show Charts'
                                onClick={handleShowChartsChange}
                                startIcon={showCharts ? <IconEyeOff /> : <IconEye />}
                            >
                                {'Charts'}
                            </Button>
                            {customEvalsDefined && (
                                <Button
                                    variant='outlined'
                                    value={showCustomEvals}
                                    disabled={!customEvalsDefined}
                                    title='Show Custom Evaluator'
                                    onClick={handleCustomEvalsChange}
                                    startIcon={showCustomEvals ? <IconEyeOff /> : <IconEye />}
                                >
                                    {'Custom Evaluator'}
                                </Button>
                            )}
                            <Button
                                variant='outlined'
                                value={showCostMetrics}
                                title='Show Cost Metrics'
                                onClick={handleDisplayCostChange}
                                startIcon={showCostMetrics ? <IconEyeOff /> : <IconEye />}
                            >
                                {'Cost Metrics'}
                            </Button>
                            <Button
                                variant='outlined'
                                value={showTokenMetrics}
                                title='Show Metrics'
                                onClick={handleShowTokenChange}
                                startIcon={showTokenMetrics ? <IconEyeOff /> : <IconEye />}
                            >
                                {'Token Metrics'}
                            </Button>
                            <Button
                                variant='outlined'
                                value={showCustomEvals}
                                title='Show Latency Metrics'
                                onClick={handleLatencyMetricsChange}
                                startIcon={showLatencyMetrics ? <IconEyeOff /> : <IconEye />}
                            >
                                {'Latency Metrics'}
                            </Button>
                        </ButtonGroup>
                        {showCharts && (
                            <Grid container={true} spacing={2}>
                                {customEvalsDefined && (
                                    <Grid item={true} xs={12} sm={12} md={4} lg={4}>
                                        <MetricsItemCard
                                            data={{
                                                header: 'PASS RATE',
                                                value: (evaluat + '%',
                                                icon: <IconPercentage />
                                            }}
                                            component={<ChartPassPrnt data={passPrntChartData} sx={{ pt: 2 }} />}
                                        />
                                    </Grid>
                                )}
                                {avgT && (
                                    <Grid item={true} xs={12} sm={12} md={4} lg={4}>
                                        <MetricsItemCard
                                            data={{
                                                header: 'TOKENS USED',
                                                value: avgTokensUsed,
                                                icon: <TokensIcon />
                                            }}
                                            component={
                                                <ChartTokens
                                                    data={tokensChartData}
                                                    flowNames={evaluation.chatflowName || []}
                                                    sx={{ pt: 2 }}
                                                />
                                            }
                                        />
                                    </Grid>
                                )}
                                {evaluation.average_metrics?.averageLatency !== undefined && (
                                    <Grid item={true} xs={12} sm={12} md={4} lg={4}>
                                        <MetricsItemCard
                                            data={{
                                                hea',
                                                value: (evaluat + ' ms',
                                                icon: <AlarmIcon />
                                            }}
                                            component={
                                                <ChartLatency
                                                    data={latencyChartData}
                                                    flowNames={evaluation.chatflowName || []}
                                                    sx={{ pt: 2 }}
                                                />
                                            }
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        )}
                        <Stack direction='row' justifyContent={'space-between'}>
                            <Stack flexDirection='row' sx={{ gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                                <div
                                    style={{
                                        paddingLeft: '15px',
                                        paddingRight: '15px',
                                        paddingTop: '10px',
                                        paddingBottom: '10px',
                                        fontSize: '0.9rem',
                                        width: 'max-content',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <IconVectorBezier2 style={{ marginRight: 5 }} size={17} />
                                    Flows Used:
                                </div>
                                {(evaluat.map(( => (
                                    <Chip
                                        key={index}
                                        }
                                        clickable
                                        style={{
                                            width: 'max-content',
                                            borderRadius: '25px',
                                            boxShadow: customization.isDarkMode
                                                ? '0 2px 14px 0 '
                                                : '0 2px 14px 0 '
                                        }}
                                        label={chatflowUsed}
                                         => }
                                    ></Chip>
                                ))}
                            </Stack>
                            <Button
                                variant='outlined'
                                sx={{ width: 'max-content' }}
                                startIcon={<IconMaximize />}
                                 => }
                            >
                                Expand
                            </Button>
                        </Stack>
                        <TableContainer sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }} component={Paper}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead
                                    sx={{
                                        backgroundColor: customization.isDarkMode ? theme.palette.common.black : theme.palette.grey[100]
                                    }}
                                >
                                    <TableRow>
                                        <TableCell rowSpan='2'>&nbsp;</TableCell>
                                        <TableCell rowSpan='2'>Input</TableCell>
                                        <TableCell rowSpan='2'>Expected Output</TableCell>
                                        {evaluat => (
                                            <React.Fragment key={index}>
                                                <TableCell
                                                    colSpan={getColSpan(
                                                        customEvalsDefined && showCustomEvals,
                                                        evaluation?.evaluationType === 'llm'
                                                    )}
                                                    style={{ borderLeftStyle: 'dotted', borderLeftColor: 'lightgrey', borderLeftWidth: 1 }}
                                                >
                                                    {evaluation.chatflowName[index]}
                                                    {rows.length > 0 && rows[0].metrics[index].model && (
                                                        <Chip
                                                            variant='outlined'
                                                            icon={<LLMIcon />}
                                                            color={'info'}
                                                            size='small'
                                                            label={
                                                                rows[0].metrics[index].model +
                                                                (rows[0].metrics[index].provider
                                                                    ? ' [' + rows[0].metrics[index].provider + ']'
                                                                    : '')
                                                            }
                                                            sx={{ ml: 2 }}
                                                        />
                                                    )}
                                                </TableCell>
                                            </React.Fragment>
                                        ))}
                                    </TableRow>
                                    <TableRow>
                                        {evaluat => (
                                            <React.Fragment key={index}>
                                                <TableCell
                                                    style={{ borderLeftStyle: 'dashed', borderLeftColor: 'lightgrey', borderLeftWidth: 1 }}
                                                >
                                                    Actual Output
                                                </TableCell>
                                                {customEvalsDefined && showCustomEvals && <TableCell>Evaluator</TableCell>}
                                                {evaluation?.evaluationType === 'llm' && <TableCell>LLM Evaluation</TableCell>}
                                            </React.Fragment>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {isTableLoading ? (
                                        <>
                                            <StyledTableRow>
                                                <StyledTableCell sx={{ width: 2 }}>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell sx={{ width: 2 }}>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <Skeleton variant='text' />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </>
                                    ) : (
                                        <>
                                            {rows.length > 0 &&
                                                 => (
                                                    <TableRow
                                                         => }
                                                        hover
                                                        key={index}
                                                        sx={{ cursor: 'pointer', '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell style={{ width: 2 }}>{index + 1}</TableCell>
                                                        <TableCell style={{ minWidth: '250px' }}>{item.input}</TableCell>
                                                        <TableCell style={{ minWidth: '250px' }}>{item.expectedOutput}</TableCell>
                                                        {evaluat => (
                                                            <React.Fragment key={index}>
                                                                <TableCell
                                                                    style={{
                                                                        minWidth: '350px',
                                                                        borderLeftStyle: 'dashed',
                                                                        borderLeftColor: 'lightgrey',
                                                                        borderLeftWidth: 1
                                                                    }}
                                                                >
                                                                    {item.errors[index] === '' ? (
                                                                        <>
                                                                            <div style={{ padding: 2, marginBottom: 5 }}>
                                                                                {item.actualOutput[index]}
                                                                            </div>
                                                                            <Stack
                                                                                flexDirection='row'
                                                                                sx={{ mt: 2, alignItems: 'center', flexWrap: 'wrap' }}
                                                                            >
                                                                                <Chip
                                                                                    variant='outlined'
                                                                                    icon={<PaidIcon />}
                                                                                    size='small'
                                                                                    label={
                                                                                        item.metrics[index]?.totalCost
                                                                                            ? 'Total Cost: ' +
                                                                                              item.metrics[index]?.totalCost
                                                                                            : 'Total Cost: N/A'
                                                                                    }
                                                                                    sx={{ mr: 1, mb: 1 }}
                                                                                />
                                                                                <Chip
                                                                                    variant='outlined'
                                                                                    size='small'
                                                                                    icon={<TokensIcon />}
                                                                                    label={
                                                                                        item.metrics[index]?.totalTokens
                                                                                            ? 'Total Tokens: ' +
                                                                                              item.metrics[index]?.totalTokens
                                                                                            : 'Total Tokens: N/A'
                                                                                    }
                                                                                    sx={{ mr: 1, mb: 1 }}
                                                                                />
                                                                                {showTokenMetrics && (
                                                                                    <>
                                                                                        <Chip
                                                                                            variant='outlined'
                                                                                            size='small'
                                                                                            icon={<TokensIcon />}
                                                                                            label={
                                                                                                item.metrics[index]?.promptTokens
                                                                                                    ? 'Prompt Tokens: ' +
                                                                                                      item.metrics[index]?.promptTokens
                                                                                                    : 'Prompt Tokens: N/A'
                                                                                            }
                                                                                            sx={{ mr: 1, mb: 1 }}
                                                                                        />{' '}
                                                                                        <Chip
                                                                                            variant='outlined'
                                                                                            size='small'
                                                                                            icon={<TokensIcon />}
                                                                                            label={
                                                                                                item.metrics[index]?.completionTokens
                                                                                                    ? 'Completion Tokens: ' +
                                                                                                      item.metrics[index]?.completionTokens
                                                                                                    : 'Completion Tokens: N/A'
                                                                                            }
                                                                                            sx={{ mr: 1, mb: 1 }}
                                                                                        />{' '}
                                                                                    </>
                                                                                )}
                                                                                {showCostMetrics && (
                                                                                    <>
                                                                                        <Chip
                                                                                            variant='outlined'
                                                                                            size='small'
                                                                                            icon={<PaidIcon />}
                                                                                            label={
                                                                                                item.metrics[index]?.promptCost
                                                                                                    ? 'Prompt Cost: ' +
                                                                                                      item.metrics[index]?.promptCost
                                                                                                    : 'Prompt Cost: N/A'
                                                                                            }
                                                                                            sx={{ mr: 1, mb: 1 }}
                                                                                        />{' '}
                                                                                        <Chip
                                                                                            variant='outlined'
                                                                                            size='small'
                                                                                            icon={<PaidIcon />}
                                                                                            label={
                                                                                                item.metrics[index]?.completionCost
                                                                                                    ? 'Completion Cost: ' +
                                                                                                      item.metrics[index]?.completionCost
                                                                                                    : 'Completion Cost: N/A'
                                                                                            }
                                                                                            sx={{ mr: 1, mb: 1 }}
                                                                                        />{' '}
                                                                                    </>
                                                                                )}
                                                                                <Chip
                                                                                    variant='outlined'
                                                                                    size='small'
                                                                                    icon={<AlarmIcon />}
                                                                                    label={
                                                                                        item.metrics[index]?.apiLatency
                                                                                            ? 'API Latency: ' +
                                                                                              item.metrics[index]?.apiLatency
                                                                                            : 'API Latency: N/A'
                                                                                    }
                                                                                    sx={{ mr: 1, mb: 1 }}
                                                                                />{' '}
                                                                                {showLatencyMetrics && (
                                                                                    <>
                                                                                        {item.metrics[index]?.chain && (
                                                                                            <Chip
                                                                                                variant='outlined'
                                                                                                size='small'
                                                                                                icon={<AlarmIcon />}
                                                                                                label={
                                                                                                    item.metrics[index]?.chain
                                                                                                        ? 'Chain Latency: ' +
                                                                                                          item.metrics[index]?.chain
                                                                                                        : 'Chain Latency: N/A'
                                                                                                }
                                                                                                sx={{ mr: 1, mb: 1 }}
                                                                                            />
                                                                                        )}{' '}
                                                                                        {item.metrics[index]?.retriever && (
                                                                                            <Chip
                                                                                                variant='outlined'
                                                                                                icon={<AlarmIcon />}
                                                                                                size='small'
                                                                                                sx={{ mr: 1, mb: 1 }}
                                                                                                label={
                                                                                                    'Retriever Latency: ' +
                                                                                                    item.metrics[index]?.retriever
                                                                                                }
                                                                                            />
                                                                                        )}{' '}
                                                                                        {item.metrics[index]?.tool && (
                                                                                            <Chip
                                                                                                variant='outlined'
                                                                                                icon={<AlarmIcon />}
                                                                                                size='small'
                                                                                                sx={{ mr: 1, mb: 1 }}
                                                                                                label={
                                                                                                    'Tool Latency: ' +
                                                                                                    item.metrics[index]?.tool
                                                                                                }
                                                                                            />
                                                                                        )}{' '}
                                                                                        <Chip
                                                                                            variant='outlined'
                                                                                            icon={<AlarmIcon />}
                                                                                            size='small'
                                                                                            label={
                                                                                                item.metrics[index]?.llm
                                                                                                    ? 'LLM Latency: ' +
                                                                                                      item.metrics[index]?.llm
                                                                                                    : 'LLM Latency: N/A'
                                                                                            }
                                                                                            sx={{ mr: 1, mb: 1 }}
                                                                                        />{' '}
                                                                                    </>
                                                                                )}
                                                                            </Stack>
                                                                        </>
                                                                    ) : (
                                                                        <Chip
                                                                            sx={{
                                                                                height: 'auto',
                                                                                backgroundColor: customization.isDarkMode
                                                                                    ? '#4a1c1c'
                                                                                    : '#ffebee',
                                                                                color: customization.isDarkMode ? '#ffdbd3' : '#d32f2f',
                                                                                '& .MuiChip-label': {
                                                                                    display: 'block',
                                                                                    whiteSpace: 'normal'
                                                                                },
                                                                                p: 1,
                                                                                border: 'none'
                                                                            }}
                                                                            variant='outlined'
                                                                            size='small'
                                                                            label={item.errors[index]}
                                                                        />
                                                                    )}
                                                                </TableCell>
                                                                {customEvalsDefined && showCustomEvals && (
                                                                    <TableCell>
                                                                        {(.map((evaluat => (
                                                                            <Stack
                                                                                key={index}
                                                                                sx={{ mt: 1, alignItems: 'center', flexWrap: 'wrap' }}
                                                                                flexDirection='row'
                                                                                gap={1}
                                                                            >
                                                                                <Chip
                                                                                    sx={{
                                                                                        width: 'max-content',
                                                                                        color:
                                                                                            evaluator.result === 'Error'
                                                                                                ? 'black'
                                                                                                : 'white',
                                                                                        backgroundColor:
                                                                                            evaluator.result === 'Pass'
                                                                                                ? '#00c853'
                                                                                                : evaluator.result === 'Fail'
                                                                                                ? '#ff1744'
                                                                                                : '#ffe57f'
                                                                                    }}
                                                                                    variant={'contained'}
                                                                                    size='small'
                                                                                    label={`${evaluator.name}`}
                                                                                ></Chip>
                                                                            </Stack>
                                                                        ))}
                                                                    </TableCell>
                                                                )}
                                                                {evaluation?.evaluationType === 'llm' && (
                                                                    <TableCell sx={{ minWidth: '350px' }}>
                                                                        {item.llmEvaluators[index] && (
                                                                            <Stack
                                                                                flexDirection='row'
                                                                                gap={1}
                                                                                sx={{ alignItems: 'center', flexWrap: 'wrap' }}
                                                                            >
                                                                                {Obje.map(
                                                                                    ( => (
                                                                                        <Chip
                                                                                            key={index}
                                                                                            variant='outlined'
                                                                                            size='small'
                                                                                            color={'primary'}
                                                                                            sx={{
                                                                                                height: 'auto',
                                                                                                '& .MuiChip-label': {
                                                                                                    display: 'block',
                                                                                                    whiteSpace: 'normal'
                                                                                                },
                                                                                                p: 0.5
                                                                                            }}
                                                                                            label={
                                                                                                <span>
                                                                                                    <b>{key.t}</b>: {value}
                                                                                                </span>
                                                                                            }
                                                                                        />
                                                                                    )
                                                                                )}
                                                                            </Stack>
                                                                        )}
                                                                    </TableCell>
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </TableRow>
                                                ))}
                                        </>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {showSideDrawer && (
                            <EvaluationResultSideDrawer
                                show={showSideDrawer}
                                dialogProps={sideDrawerDialogProps}
                                onClickFunction={closeDetailsDrawer}
                            />
                        )}
                        {showVersionSideDrawer && (
                            <EvaluationResultVersionsSideDrawer
                                show={showVersionSideDrawer}
                                dialogProps={versionDrawerDialogProps}
                                onClickFunction={closeVersionsDrawer}
                                 => {
                                    
                                    nav
                                    nav
                                }}
                            />
                        )}
                    </Stack>
                )}
            </MainCard>
            <ConfirmDialog />
            <EvalsResultDialog
                show={showExpandTableDialog}
                dialogProps={expandTableProps}
                 => }
                 => {
                    
                }}
            />
        </>
    )
}

export default EvalEvaluationRows
