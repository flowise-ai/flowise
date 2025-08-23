import { styled } from '@mui/material/styles'
import { TableCell, TableRow } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'

exp(({ theme }) => ({
    borderColor: theme.palette.grey[900] + 25,

    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.grey[900]
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: 64
    }
}))

exp(() => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))
