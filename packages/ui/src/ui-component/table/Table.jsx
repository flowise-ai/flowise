import PropTypes from 'prop-types'
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Paper, Chip, Stack, Typography } from '@mui/material'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'

exp => {
    // Helper function to safely render cell content
     => {
         {
            return ''
        } el {
            return row[key] ? <Chip label='Enabled' color='primary' /> : <Chip label='Disabled' />
        } el {
            // If there's schema information, add a tooltip
            let schemaContent
            ) {
                // Handle array format: [{ name: "field", type: "string" }, ...]
                schemaContent =
                    '[<br>' +
                    row.schema
                        .map(
                            ( =>
                                `&nbsp;&nbsp;${JSON.stringify(
                                    {
                                        [item.name]: item.type
                                    },
                                    null,
                                    2
                                )}`
                        )
                        .j +
                    '<br>]'
            } el {
                // Handle object format: { "field": "string", "field2": "number", ... }
                ..
            } else {
                schemaContent = 'No schema available'
            }

            return (
                <Stack direction='row' alignItems='center' spacing={1}>
                    <Typography>{row[key]}</Typography>
                    <TooltipWithParser title={`<div>Schema:<br/>${schemaContent}</div>`} />
                </Stack>
            )
        } el {
            // F
            
        } else {
            return row[key]
        }
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, ...sx }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            { => (
                                <TableCell key={index}>
                                    {col === 'enabled' ? (
                                        <>
                                            Override
                                            <TooltipWithParser
                                                style={{ mb: 1, mt: 2, marginLeft: 10 }}
                                                title={
                                                    'If enabled, this variable can be overridden in API calls and embeds. If disabled, any overrides will be ignored. To change this, go to Security settings in Chatflow Configuration.'
                                                }
                                            />
                                        </>
                                    ) : (
                                        .t + 
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {Obje.map((key,  => {
                                     {
                                        }</TableCell>
                                    }
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

TableViewOnly.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    sx: PropTypes.object
}
