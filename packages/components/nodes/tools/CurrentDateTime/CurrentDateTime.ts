import { z } from 'zod'
import { INode } from '../../../src/Interface'
import { DynamicStructuredTool } from '../CustomTool/core'

const code = `
;
                
// Format date as YYYY-MM-DD
.[0];

// Get time in HH:MM:SS format
.[0];

// Get day of week
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
];

// Get timezone information
..timeZone;
;
);
;
const timezoneOffsetFormatted = 
    (t + 
    t.pa + ':' + 
    t.pa;

return {
    date,
    time,
    day,
    timezone,
    timezoneOffset: timezoneOffsetFormatted,
    ,
    un / 1000)
};
`

class CurrentDateTime_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]

     {
        this.label = 'CurrentDateTime'
        this.name = 'currentDateTime'
        this.version = 1.0
        this.type = 'CurrentDateTime'
        this.icon = 'currentDateTime.svg'
        this.category = 'Tools'
        this.description = 'Get todays day, date and time.'
        this.baseClasses = [this.type, 'Tool']
    }

    a: Promise<any> {
        const obj = {
            name: 'current_date_time',
            description: 'Useful to get current day, date and time.',
            ,
            code: code
        }

        let 

        return dynamicStructuredTool
    }
}

module.exports = { nodeClass: CurrentDateTime_Tools }
