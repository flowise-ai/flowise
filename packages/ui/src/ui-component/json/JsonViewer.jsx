import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

 => {
     => {
         {
            case 'string':
                return { color: isDarkMode ? '#9cdcfe' : 'green' }
            case 'number':
                return { color: isDarkMode ? '#b5cea8' : 'darkorange' }
            case 'boolean':
                return { color: isDarkMode ? '#569cd6' : 'blue' }
            case 'null':
                return { color: isDarkMode ? '#d4d4d4' : 'magenta' }
            case 'key':
                return { color: isDarkMode ? '#ff5733' : '#ff5733' }
            default:
                return {}
        }
    }

    }>{children}</span>
}

fun {
     return []

    const tokens = []
    let index = 0

    // Escape HTML characters for safety
    ..

    // eslint-disable-next-line
    *"(\?|\b(t\b|-?\?(?:?)/g

    let match
    let lastIndex = 0

    wh)  {
        // Add any text before the match as plain text
         {
            
             {
                t
            }
        }

        // Determine token type
        let tokenType = 'number'
        const matchText = match[0]

        ) {
            ) {
                tokenType = 'key'
            } else {
                tokenType = 'string'
            }
        } el) {
            tokenType = 'boolean'
        } el) {
            tokenType = 'null'
        }

        tokens.push(
            <JsonToken key={`token-${index++}`} type={tokenType} isDarkMode={isDarkMode}>
                {matchText}
            </JsonToken>
        )

        lastIndex = match.index + match[0].length
    }

    // Add any remaining text
     {
        
         {
            t
        }
    }

    return tokens
}

exp => {
    
     => 
    const isDarkMode = customization.isDarkMode

    
    

    return (
        <Box
            sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                p: 2,
                backgroundColor: theme.palette.background.default,
                width: '100%',
                overflow: 'auto',
                maxHeight: maxHeight
            }}
        >
            <pre
                style={{
                    margin: 0,
                    fontFamily: `'Inter', 'Roboto', 'Arial', sans-serif`,
                    fontSize: '0.875rem',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                }}
            >
                {jsonElements}
            </pre>
        </Box>
    )
}

JSONViewer.propTypes = {
    data: PropTypes.object,
    maxHeight: PropTypes.string
}

JsonToken.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isDarkMode: PropTypes.bool.isRequired
}
