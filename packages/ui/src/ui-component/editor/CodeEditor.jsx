import PropTypes from 'prop-types'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { EditorView } from '@codemirror/view'
import { useTheme } from '@mui/material/styles'

export const CodeEditor = ({
    value,
    height,
    theme,
    lang,
    placeholder,
    disabled = false,
    autoFocus = false,
    basicSetup = {},
    onValueChange
}) => {
    

    const customStyle = EditorView.baseTheme({
        '&': {
            color: '#191b1f',
            padding: '10px'
        },
        '.cm-placeholder': {
            '
        },
        '.cm-content':
            lang !== 'js'
                ? {
                      fontFamily: `'Inter', 'Roboto', 'Arial', sans-serif`,
                      fontSize: '0.95rem',
                      letterSpacing: '0em',
                      fontWeight: 400,
                      lineHeight: '1.5em',
                      color: colorTheme.darkTextPrimary
                  }
                : {}
    })

    return (
        <CodeMirror
            placeholder={placeholder}
            value={value}
            he'}
            theme={theme === ' : 'none'}
            exten : j, EditorView.lineWrapping, customStyle]}
            onChange={onValueChange}
            readOnly={disabled}
            editable={!disabled}
            // eslint-disable-next-line
            autoFocus={autoFocus}
            basicSetup={basicSetup}
        />
    )
}

CodeEditor.propTypes = {
    value: PropTypes.string,
    height: PropTypes.string,
    theme: PropTypes.string,
    lang: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    basicSetup: PropTypes.object,
    onValueChange: PropTypes.func
}
