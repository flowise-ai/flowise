import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormControl, Popover } from '@mui/material'
import ReactJson from 'flowise-react-json-view'
import SelectVariable from './SelectVariable'
import { cloneDeep } from 'lodash'
import { getAvailableNodesForVariable } from '@/utils/genericHelper'

export const JsonEditorInput = ({
    value,
    onChange,
    inputParam,
    nodes,
    edges,
    nodeId,
    disabled = false,
    isDarkMode = false,
    isSequentialAgent = false
}) => {
     : {})
    
    

    
    

     => {
        
    }

     => {
        
        newVal[mouseUpKey] = val
        )
         => ({
            ...params,
            [mouseUpKey]: val
        }))
    }

     => {
        const src = e.src
         || type {
            nav)
        } else {
            nav
        }
    }

    u => {
         {
             : []
            
        }
    }, 

    return (
        <>
            <FormControl sx={{ mt: 1, width: '100%' }} size='small'>
                {disabled && (
                    <ReactJson
                        theme={isDarkMode ? 'ocean' : 'rjv-default'}
                        style={{ padding: 10, borderRadius: 10 }}
                        src={myValue}
                        name={null}
                        enableCl => }
                        quotesOnKeys={false}
                        displayDataTypes={false}
                    />
                )}
                {!disabled && (
                    <div
                         => e.}
                         => {
                             {
                                e.
                            }
                        }}
                        role='button'
                        aria-label='JSON Editor'
                        tabIndex={0}
                        key={JSON.}
                    >
                        <ReactJson
                            theme={isDarkMode ? 'ocean' : 'rjv-default'}
                            style={{ padding: 10, borderRadius: 10 }}
                            src={myValue}
                            name={null}
                            quotesOnKeys={false}
                            displayDataTypes={false}
                            enableCl => }
                             => {
                                 {
                                    
                                    
                                }
                            }}
                             => {
                                
                                )
                            }}
                             => {
                                //
                            }}
                             => {
                                
                                )
                            }}
                        />
                    </div>
                )}
            </FormControl>
            {inputParam?.acceptVariable && (
                <Popover
                    open={openPopOver}
                    anchorEl={anchorEl}
                    onClose={handleClosePopOver}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                >
                    <SelectVariable
                        disabled={disabled}
                        availableNodesForVariable={availableNodesForVariable}
                         => {
                            
                            han
                        }}
                        isSequentialAgent={isSequentialAgent}
                    />
                </Popover>
            )}
        </>
    )
}

JsonEditorInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    isDarkMode: PropTypes.bool,
    inputParam: PropTypes.object,
    nodes: PropTypes.array,
    edges: PropTypes.array,
    nodeId: PropTypes.string,
    isSequentialAgent: PropTypes.bool
}
