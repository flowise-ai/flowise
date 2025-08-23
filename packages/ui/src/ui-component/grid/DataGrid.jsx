import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import { DataGrid as MUIDataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { IconPlus } from '@tabler/icons-react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { cloneDeep } from 'lodash'
import { formatDataGridRows } from '@/utils/genericHelper'
import { styled } from '@mui/material/styles'

(({ theme }) => ({
    border: `1px solid ${theme.palette.mode === 'light' ? '#b4b4b4' : '#303030'}`,

    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none'
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
    },

    '& .MuiPaginationItem-root': {
        borderRadius: 0
    },
    '& .MuiDataGrid-columnHeader:last-child, .MuiDataGrid-cell:last-child': {
        borderRight: 'none'
    }
}))

exp => {
     ?? 

    const deleteItem = useCallback(
        ( => () => {
            let updatedRows = []
             => {
                let allR]
                allR => 
                updatedRows = allRows
                return allRows
            })
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

     => {
        return [
            ...columns,
            {
                field: 'actions',
                type: 'actions',
                width: 80,
                getA => [
                    <G} />
                ]
            }
        ]
    }

    

     => {
        let updatedRows = []
         => {
            let allR]
             => 
             {
                allRows[indexToUpdate] = { ...newRow }
            }
            updatedRows = allRows
            return allRows
        })
        )
        return newRow
    }

     => {
        const obj = {}
        f {
            obj[colValues[i]?.field] = ''
        }
        return obj
    }

     => {
         => {
            let allR]
            const lastRowId = allRows.length ? allRows[allRows.length - 1].id + 1 : 1
            allRows.push({
                ...getEmptyJ,
                id: lastRowId
            })
            return allRows
        })
    }

    return (
        <>
            {rowValues && colValues && (
                <div style={{ marginTop: 10, height: 210, width: '100%', ...style }}>
                    <StyledDataGrid
                        processRowUpdate={handleProcessRowUpdate}
                         => {
                            return !disabled
                        }}
                        hideFooter={hideFooter}
                         => }
                        rows={rowValues}
                        columns={colValues}
                    />
                </div>
            )}
            {!disabled && (
                <Button sx={{ mt: 1 }} variant='outlined' onClick={addNewRow} startIcon={<IconPlus />}>
                    Add Item
                </Button>
            )}
        </>
    )
}

DataGrid.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    style: PropTypes.any,
    disabled: PropTypes.bool,
    hideFooter: PropTypes.bool,
    onChange: PropTypes.func
}
