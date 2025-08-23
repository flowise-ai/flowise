import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid'

exp => {
     => {
        
        return newRow
    }

    return (
        <>
            {rows && columns && (
                <div style={{ marginTop: 10, height: 300, width: '100%', ...style }}>
                    <DataGrid
                        processRowUpdate={handleProcessRowUpdate}
                         => {
                            return !disabled
                        }}
                         => }
                        rows={rows}
                        columns={columns}
                    />
                </div>
            )}
        </>
    )
}

Grid.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    style: PropTypes.any,
    disabled: PropTypes.bool,
    onRowUpdate: PropTypes.func
}
