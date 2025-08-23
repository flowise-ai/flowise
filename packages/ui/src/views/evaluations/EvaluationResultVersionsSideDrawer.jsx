import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/moment'

import { Button, Box, SwipeableDrawer } from '@mui/material'
import { IconSquareRoundedChevronsRight } from '@tabler/icons-react'
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    timelineOppositeContentClasses,
    TimelineSeparator
} from '@mui/lab'

import evaluationApi from '@/api/evaluations'
import useApi from '@/hooks/useApi'

 => {
     => {}
    

    

    u => {
        getVe
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

     => {
        
    }

    return (
        <Sw => } onOpen={onOpen}>
            <Butt => }>
                Close
            </Button>
            <Box style={{ width: 350, margin: 10 }} role='presentation' onClick={onClickFunction}>
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 1
                        }
                    }}
                >
                    {versions &&
                        ve => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent color='textSecondary'>
                                    {m.f}
                                </TimelineOppositeContent>
                                <TimelineSeparator style={{ marginTop: 5 }}>
                                    <TimelineDot />
                                    {index !== versions.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Butt => nav}>Version {version.version}</Button>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                </Timeline>
            </Box>
        </SwipeableDrawer>
    )
}

EvaluationResultVersionsSideDrawer.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onClickFunction: PropTypes.func,
    onSelectVersion: PropTypes.func
}

export default EvaluationResultVersionsSideDrawer
