import { useState, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import DatePicker from 'react-datepicker'
import { gridSpacing } from '@/store/constant'
import CodeMirror from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
import { markdown } from '@codemirror/lang-markdown'
import { sublime } from '@uiw/codemirror-theme-sublime'

// material-ui
import { Box, Skeleton, Stack, Select, MenuItem, ListItemButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ui
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'

import useApi from '@/hooks/useApi'
import logsApi from '@/api/log'
import { useError } from '@/store/context/ErrorContext'

import LogsEmptySVG from '@/assets/images/logs_empty.svg'
import 'react-datepicker/dist/react-datepicker.css'

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

const searchTimeRanges = [
    'Last hour',
    'Last 4 hours',
    'Last 24 hours',
    'Last 2 days',
    'Last 7 days',
    'Last 14 days',
    'Last 1 month',
    'Last 2 months',
    'Last 3 months',
    'Custom'
]

 => {
    
     n - value)
     n - value)
     n - value)
    return now
}

 => {
    
    
     + 1).t.pa // +1 be returns 0 for January, 1 for February, etc.
    .t.pa
    .t.pa

    return `${year}-${month}-${day}-${hour}`
}

 => {
    let 

     {
         - m
    } else {
        )
    }

     {
         - 
    } else {
        )
    }

     {
         - h
    } else {
        )
    }

    
     + 1).t.pa
    .t.pa
    .t.pa

    return `${year}-${month}-${day}-${hour}`
}

 => {
    

    const customStyle = EditorView.baseTheme({
        '&': {
            color: '#191b1f',
            padding: '10px',
            borderRadius: '15px'
        },
        '.cm-placeholder': {
            '
        },
        '.cm-content': {
            fontFamily: 'Roboto, sans-serif',
            fontSize: '0.95rem',
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: colorTheme.darkTextPrimary
        }
    })

    
    

    
    
    
    )
    )

     => {
        
         {
            case 'Last hour':
                getL, get)
                break
            case 'Last 4 hours':
                getL, get)
                break
            case 'Last 24 hours':
                getL, get)
                break
            case 'Last 2 days':
                getL, get)
                break
            case 'Last 7 days':
                getL, get)
                break
            case 'Last 14 days':
                getL, get)
                break
            case 'Last 1 month':
                getL, get)
                break
            case 'Last 2 months':
                getL, get)
                break
            case 'Last 3 months':
                getL, get)
                break
            case 'Custom':
                )
                )
                getL, get)
                break
            default:
                break
        }
    }

     => {
        
        getL, get)
    }

     => {
        
        getL, get)
    }

    u => {
        
        
        getL

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
    }, 

    u => {
         {
            let totalLogs = ''
            f {
                totalLogs += logData + '\n'
            }
            
        }
    }, 

    return (
        <MainCard>
            {error ? (
                <ErrorBoundary error={error} />
            ) : (
                <Stack flexDirection='column' sx={{ gap: 2 }}>
                    <ViewHeader title='Logs' />
                    {isLoading ? (
                        <Box display='flex' flexDirection='column' gap={gridSpacing}>
                            <Skeleton width='25%' height={32} />
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                            <Box display='flex' flexDirection='column' gap={2}>
                                <Skeleton width='20%' />
                                <Skeleton variant='rounded' height={56} />
                            </Box>
                        </Box>
                    ) : (
                        <>
                            <Stack sx={{ alignItems: 'center', justifyContent: 'flex-start', gap: 2 }} flexDirection='row'>
                                <Select
                                    size='small'
                                    sx={{ minWidth: '200px' }}
                                    value={selectedTimeSearch}
                                    onChange={handleTimeSelectionChange}
                                >
                                    { => (
                                        <MenuItem key={range} value={range}>
                                            {range}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {selectedTimeSearch === 'Custom' && (
                                    <>
                                        <Stack sx={{ alignItems: 'center', justifyContent: 'flex-start', gap: 2 }} flexDirection='row'>
                                            <b>From</b>
                                            <DatePicker
                                                selected={startDate}
                                                 => }
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                maxDate={endDate}
                                                showTimeSelect
                                                timeFormat='HH:mm'
                                                timeIntervals={60}
                                                dateFormat='yyyy MMMM d, h aa'
                                                customInput={<DatePickerCustomInput />}
                                            />
                                        </Stack>
                                        <Stack sx={{ alignItems: 'center', justifyContent: 'flex-start', gap: 2 }} flexDirection='row'>
                                            <b>To</b>
                                            <DatePicker
                                                selected={endDate}
                                                 => }
                                                selectsEnd
                                                showTimeSelect
                                                timeFormat='HH:mm'
                                                timeIntervals={60}
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={startDate}
                                                max}
                                                dateFormat='yyyy MMMM d, h aa'
                                                customInput={<DatePickerCustomInput />}
                                            />
                                        </Stack>
                                    </>
                                )}
                            </Stack>
                            {logData ? (
                                <CodeMirror
                                    value={logData}
                                    he'}
                                    theme={sublime}
                                    exten, EditorView.lineWrapping, customStyle]}
                                    readOnly={true}
                                    basicSetup={{
                                        searchKeymap: true,
                                        lineNumbers: false,
                                        foldGutter: false,
                                        autocompletion: false,
                                        highlightActiveLine: false
                                    }}
                                />
                            ) : (
                                <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                    <Box sx={{ p: 2, height: 'auto' }}>
                                        <img
                                            style={{ objectFit: 'cover', height: '20vh', width: 'auto' }}
                                            src={LogsEmptySVG}
                                            alt='LogsEmptySVG'
                                        />
                                    </Box>
                                    <div>No Logs Yet</div>
                                </Stack>
                            )}
                        </>
                    )}
                </Stack>
            )}
        </MainCard>
    )
}

export default Logs
