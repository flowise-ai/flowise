import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment/moment'

// MUI
import {
    Stack,
    Box,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ListItemButton,
    Collapse,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Checkbox
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconChevronsUp, IconChevronsDown, IconTrash, IconX } from '@tabler/icons-react'

// Project imports
import { TableViewOnly } from '@/ui-component/table/Table'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import HistoryEmptySVG from '@/assets/images/upsert_history_empty.svg'

// Api
import vectorstoreApi from '@/api/vectorstore'
import useApi from '@/hooks/useApi'

// Store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { baseURL } from '@/store/constant'
import useNotifier from '@/utils/useNotifier'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

 {
    return (
        <ListItemButton style={{ borderRadius: 15, border: '1px solid #e0e0e0' }} onClick={onClick} ref={ref}>
            {value}
        </ListItemButton>
    )
})

DatePickerCustomInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}

fun {
    
    

     => (event,  => {
        const accordianNodes = { ...nodeConfigExpanded }
        accordianNodes[nodeLabel] = isExpanded
        
    }

     !== -1

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding='checkbox'>
                    <Checkbox
                        color='primary'
                        checked={isItemSelected}
                         => p}
                        inputProps={{
                            'aria-labelledby': props.upsertHistory.id
                        }}
                    />
                </TableCell>
                <TableCell>{m.f}</TableCell>
                <TableCell>{props.upsertHistory.result?.numAdded ?? '0'}</TableCell>
                <TableCell>{props.upsertHistory.result?.numUpdated ?? '0'}</TableCell>
                <TableCell>{props.upsertHistory.result?.numSkipped ?? '0'}</TableCell>
                <TableCell>{props.upsertHistory.result?.numDeleted ?? '0'}</TableCell>
                <TableCell>
                    <I => }>
                        {open ? <IconChevronsUp /> : <IconChevronsDown />}
                    </IconButton>
                </TableCell>
            </TableRow>
            {open && (
                <TableRow sx={{ '& td': { border: 0 } }}>
                    <TableCell sx={{ pb: 0, pt: 0 }} colSpan={6}>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Box sx={{ mt: 1, mb: 2 }}>
                                {(p.map((n => {
                                    return (
                                        <Accordion
                                            expanded={nodeConfigExpanded[node.id] || false}
                                            }
                                            key={index}
                                            disableGutters
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`nodes-accordian-${node.name}`}
                                                id={`nodes-accordian-header-${node.name}`}
                                            >
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div
                                                        style={{
                                                            width: 40,
                                                            height: 40,
                                                            marginRight: 10,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'white'
                                                        }}
                                                    >
                                                        <img
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                padding: 7,
                                                                borderRadius: '50%',
                                                                objectFit: 'contain'
                                                            }}
                                                            alt={node.name}
                                                            src={`${baseURL}/api/v1/node-icon/${node.name}`}
                                                        />
                                                    </div>
                                                    <Typography variant='h5'>{node.label}</Typography>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            width: 'max-content',
                                                            borderRadius: 15,
                                                            ba',
                                                            padding: 5,
                                                            paddingLeft: 10,
                                                            paddingRight: 10,
                                                            marginLeft: 10
                                                        }}
                                                    >
                                                        <', fontSize: '0.825rem' }}>{node.id}</span>
                                                    </div>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {node.paramValues[0] && (
                                                    <TableViewOnly
                                                        sx={{ minWidth: 150 }}
                                                        rows={node.paramValues}
                                                        }
                                                    />
                                                )}
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}

UpsertHistoryRow.propTypes = {
    upsertHistory: PropTypes.object,
    theme: PropTypes.any,
    isDarkMode: PropTypes.bool,
    selected: PropTypes.array,
    handleSelect: PropTypes.func
}

 => {
    
    
     => 
    
    

    u
     => )
     => )

    
    ..getM - 1)))
    )
    

     => {
         {
             => n.
            
            return
        }
        
    }

     => {
        
        up
        
        getUpsertHistoryApi.request(dialogProps.chatflow.id, {
            startDate: updatedDate,
            endDate: endDate
        })
    }

     => {
        
        up
        
        getUpsertHistoryApi.request(dialogProps.chatflow.id, {
            endDate: updatedDate,
            startDate: startDate
        })
    }

     => {
        
        let newSelected = []

         {
            newSele
        } el {
            newSele)
        } el {
            newSele)
        } el {
            newSele, )
        }
        
    }

     => {
        try {
            awa
            enqueueSnackbar({
                message: 'Succesfully deleted upsert history',
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
             => ))
            
        }  {
            enqueueSnackbar({
                message: `Failed to delete Upsert History: ${
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

    u => {
         {
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            getUp
        }

         => {
            
            ..getM - 1)))
            )
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='lg'
            aria-labelledby='upsert-history-dialog-title'
            aria-describedby='upsert-history-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='upsert-history-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent>
                <>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 10 }}>
                        <div style={{ marginRight: 10 }}>
                            <b style={{ marginRight: 10 }}>From Date</b>
                            <DatePicker
                                selected={startDate}
                                 => }
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                customInput={<DatePickerCustomInput />}
                            />
                        </div>
                        <div style={{ marginRight: 10 }}>
                            <b style={{ marginRight: 10 }}>To Date</b>
                            <DatePicker
                                selected={endDate}
                                 => }
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                max}
                                customInput={<DatePickerCustomInput />}
                            />
                        </div>
                    </div>
                    {selected.length > 0 && (
                        <Button
                            sx={{ mt: 1, mb: 2 }}
                            variant='outlined'
                            onClick={handleRemoveHistory}
                            color='error'
                            startIcon={<IconTrash />}
                        >
                            Delete {selected.length} {selected.length === 1 ? 'row' : 'rows'}
                        </Button>
                    )}
                    {chatflowUpsertHistory.length <= 0 && (
                        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                            <Box sx={{ p: 7, height: 'auto' }}>
                                <img
                                    style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                    src={HistoryEmptySVG}
                                    alt='HistoryEmptySVG'
                                />
                            </Box>
                            <div>No Upsert History Yet</div>
                        </Stack>
                    )}
                    {chatflowUpsertHistory.length > 0 && (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                color='primary'
                                                checked={selected.length === chatflowUpsertHistory.length}
                                                onChange={onSelectAllClick}
                                                inputProps={{
                                                    'aria-label': 'select all'
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>
                                            Added{' '}
                                            <TooltipWithParser
                                                style={{ marginBottom: 2, marginLeft: 10 }}
                                                title={'Number of vector embeddings added to Vector Store'}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            Updated{' '}
                                            <TooltipWithParser
                                                style={{ marginBottom: 2, marginLeft: 10 }}
                                                title={
                                                    'Updated existing vector embeddings. Only works when a Record Manager is connected to the Vector Store'
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            Skipped{' '}
                                            <TooltipWithParser
                                                style={{ marginBottom: 2, marginLeft: 10 }}
                                                title={
                                                    'Number of same vector embeddings that exists, and were skipped re-upserting again. Only works when a Record Manager is connected to the Vector Store'
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            Deleted{' '}
                                            <TooltipWithParser
                                                style={{ marginBottom: 2, marginLeft: 10 }}
                                                title={
                                                    'Deleted vector embeddings. Only works when a Record Manager with a Cleanup method is connected to the Vector Store'
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>Details</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { => (
                                        <UpsertHistoryRow
                                            key={index}
                                            upsertHistory={upsertHistory}
                                            theme={theme}
                                            isDarkMode={customization.isDarkMode}
                                            selected={selected}
                                            handleSelect={handleSelect}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Close</Button>
            </DialogActions>
        </Dialog>
    ) : null

    
}

UpsertHistoryDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default UpsertHistoryDialog
