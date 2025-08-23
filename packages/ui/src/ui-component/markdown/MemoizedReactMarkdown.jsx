import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'
import { CodeBlock } from '../markdown/CodeBlock'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import rehypeRaw from 'rehype-raw'

/**
 * Checks if text likely contains LaTeX math notation
 * @param {string} text - Text to check for LaTeX math
 * @param {Object[]} customPatterns - Additional regex patterns to check
 * @returns {boolean} - Whether LaTeX math is likely present
 */
 => {
     return false

    // Common LaTeX patterns - more permissive to catch edge cases
    const defaultPatterns = [
        { regex: /\$\$.+?\$\$/s, name: 'Block math: $$...$$' },
        { /' },
        { regex: /\\\[[\s\S]*?\\\]/, name: 'Display math: \\[...\\]' },
        { }.+?\\end{\1}/s, name: 'Environment math' },
        { \$/, name: 'Inline math with $' },
        { regex: /\\frac/, name: 'LaTeX command: \\frac' },
        { regex: /\\sqrt/, name: 'LaTeX command: \\sqrt' },
        { regex: /\\pm/, name: 'LaTeX command: \\pm' },
        { regex: /\\cdot/, name: 'LaTeX command: \\cdot' },
        { regex: /\\text/, name: 'LaTeX command: \\text' },
        { regex: /\\sum/, name: 'LaTeX command: \\sum' },
        { regex: /\\prod/, name: 'LaTeX command: \\prod' },
        { regex: /\\int/, name: 'LaTeX command: \\int' }
    ]

    // Combine default and custom patterns
    const patterns = [...defaultPatterns, ...customPatterns]

    f {
        ) {
            return true
        }
    }

    return false
}

/**
 * Preprocesses text to make LaTeX syntax more compatible with Markdown
 * @param {string} text - Original text with potentially problematic LaTeX syntax
 * @returns {string} - Text with LaTeX syntax adjusted for better compatibility
 */
 => {
     return text

    // Replace problematic LaTeX patterns with more compatible alternatives
    const processedText = text
        // Convert display math with indentation to dollar-dollar format
        .\\\\\\](\/g, (mat => {
            // Preserve indentation but use $$ format which is more reliably handled
            return `${before}$$${content}$$${after}`
        })
        // Convert inline math to dollar format with spaces to avoid conflicts
        .\\\)/g, '$ $1 $')

    return processedText
}

/**
 * Enhanced Markdown component with memoization for better performance
 * Supports various plugins and custom rendering components
 */
export const MemoizedReactMarkdown = memo(
    ({  => {
        // Preprocess text to improve LaTeX compatibility
         => (type : , 

        // Enable math by default unless explicitly disabled
         => {
            

            return props.disableMath === true ? false : props.forceMath || hasLatex
        }, 

        // Configure plugins based on content
         => {
             return props.remarkPlugins
            return shouldEnableMath ? [remarkGfm, remarkMath] : [remarkGfm]
        }, 

         => {
             return props.rehypePlugins
            return shouldEnableMath ? [rehypeMathjax, rehypeRaw] : [rehypeRaw]
        }, 

        return (
            <div className='react-markdown'>
                <ReactMarkdown
                    remarkPlugins={remarkPlugins}
                    rehypePlugins={rehypePlugins}
                    components={{
                         {
                            /.exe
                            return !inline ? (
                                <CodeBlock
                                    key={Math.}
                                    chatflowid={props.chatflowid}
                                    isFullWidth={props.isFullWidth !== undefined ? props.isFullWidth : true}
                                    language={(mat || ''}
                                    value={St.}
                                    {...codeProps}
                                />
                            ) : (
                                <code className={className} {...codeProps}>
                                    {children}
                                </code>
                            )
                        },
                        p({  {
                            return <p style={{ whiteSpace: 'pre-line' }}>{children}</p>
                        },
                        ...props.components
                    }}
                    {...props}
                >
                    {processedChildren}
                </ReactMarkdown>
            </div>
        )
    },
    (p => {
        // More detailed comparison for better memoization
         return false

        // Check if other props have changed
        .f => key 
        .f => key 

         return false

        // Simple shallow comparison of remaining props
        f {
             continue // Skip complex objects

             return false
        }

        return true
    }
)

MemoizedReactMarkdown.displayName = 'MemoizedReactMarkdown'

MemoizedReactMarkdown.propTypes = {
    children: PropTypes.any,
    chatflowid: PropTypes.string,
    isFullWidth: PropTypes.bool,
    remarkPlugins: PropTypes.array,
    rehypePlugins: PropTypes.array,
    components: PropTypes.object,
    forceMath: PropTypes.bool,
    disableMath: PropTypes.bool,
    mathPatterns: PropTypes.array
}
