import { useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

 => {
    
     => 

     => {
         {
            case 'STALE':
                return customization.isDarkMode
                    ? [theme.palette.grey[400], theme.palette.grey[600], theme.palette.grey[800]]
                    : [theme.palette.grey[300], theme.palette.grey[500], theme.palette.grey[700]]
            case 'EMPTY':
                return customization.isDarkMode
                    ? ['#4a148c', '#6a1b9a', '#ffffff'] // Deep Purple
                    : ['#d1c4e9', '#9575cd', '#673ab7']
            case 'SYNCING':
                return customization.isDarkMode
                    ? ['#ff6f00', '#ff8f00', '#ffffff'] // Amber
                    : ['#fff8e1', '#ffe57f', '#ffc107']
            case 'UPSERTING':
                return customization.isDarkMode
                    ? ['#01579b', '#0277bd', '#ffffff'] // Light Blue
                    : ['#e1f5fe', '#4fc3f7', '#0288d1']
            case 'SYNC':
                return customization.isDarkMode
                    ? ['#1b5e20', '#2e7d32', '#ffffff'] // Green
                    : ['#e8f5e9', '#81c784', '#43a047']
            case 'UPSERTED':
                return customization.isDarkMode
                    ? ['#004d40', '#00695c', '#ffffff'] // Teal
                    : ['#e0f2f1', '#4db6ac', '#00897b']
            case 'NEW':
                return customization.isDarkMode
                    ? ['#0d47a1', '#1565c0', '#ffffff'] // Blue
                    : ['#e3f2fd', '#64b5f6', '#1e88e5']
            default:
                return customization.isDarkMode
                    ? [theme.palette.grey[300], theme.palette.grey[500], theme.palette.grey[700]]
                    : [theme.palette.grey[200], theme.palette.grey[400], theme.palette.grey[600]]
        }
    }

    return (
        <>
            {!isTableView && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        ba[0],
                        border: status === 'EMPTY' ? '1px solid' : 'none',
                        b[0] : 'transparent',
                        borderRadius: '25px',
                        paddingTop: '3px',
                        paddingBottom: '3px',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        width: 'fit-content'
                    }}
                >
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            ba[1],
                            border: status === 'EMPTY' ? '3px solid' : 'none',
                            b[1] : 'transparent'
                        }}
                    />
                    <[2], marginLeft: 5 }}>{status}</span>
                </div>
            )}
            {isTableView && (
                <div
                    style={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        ba[1],
                        border: status === 'EMPTY' ? '3px solid' : 'none',
                        b[1] : 'transparent'
                    }}
                    title={status}
                ></div>
            )}
        </>
    )
}

DocumentStoreStatus.propTypes = {
    status: PropTypes.string,
    isTableView: PropTypes.bool
}

export default DocumentStoreStatus
