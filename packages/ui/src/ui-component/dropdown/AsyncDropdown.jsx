import { useState, useEffect, useContext, Fragment } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

// Material
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete'
import { Popper, CircularProgress, TextField, Box, Typography, Tooltip } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

// API
import credentialsApi from '@/api/credentials'

// const
import { baseURL } from '@/store/constant'
import { flowContext } from '@/store/context/ReactFlowContext'
import { getAvailableNodesForVariable } from '@/utils/genericHelper'

({
    b, 0px 16px 24px 2px , 0px 6px 30px 5px ',
    borderRadius: '10px',
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 10,
            margin: 10
        }
    }
})

 => {
     => pa
    const loadMethod = selectedParam?.loadMethod

    let credentialId = nodeData.credential
    ) {
        credentialId = nodeData.inputs.credential || nodeData.inputs?.['FLOWISE_CREDENTIAL_ID']
    }

    let config = {
        headers: {
            'x-request-from': 'internal',
            'Content-type': 'application/json'
        },
        withCredentials: true
    }

    let lists = await axios
        .post(
            `${baseURL}/api/v1/node-load-method/${nodeData.name}`,
            { ...nodeData, loadMethod, previousNodes, currentNode, credential: credentialId },
            config
        )
        .then(a {
            return response.data
        })
        . {
            
        })
    return lists
}

export const AsyncDropdown = ({
    name,
    nodeData,
    value,
    onSelect,
    isCreateNewOption,
    onCreateNew,
    credentialNames = [],
    disabled = false,
    freeSolo = false,
    disableClearable = false,
    multiple = false,
    fullWidth = false
}) => {
     => 
    

    
    
    
     => {
         {
            let values = []
             {
                value
            } else {
                values = value
            }
             => value)
        }
         => 
    }
     => (mult
    const addNewOption = [{ label: '- Create New -', name: '-create-' }]
    let 
    

     => {
        try {
            let names = ''
             {
                name
            } else {
                names = credentialNames[0]
            }
            
             {
                const returnList = []
                f {
                    const data = {
                        label: resp.data[i].name,
                        name: resp.data[i].id
                    }
                    
                }
                return returnList
            }
        }  {
            
        }
    }

    u => {
        
        ;(a => {
             => {
                let response = []
                 {
                    
                } else {
                    const body = {
                        name,
                        nodeData
                    }
                     {
                        const previousNodes = getAvailableNodesForVariable(
                            ,
                            ,
                            nodeData.id,
                            `${n => pa?.type || ''}`,
                            true
                        ).map((n => ({ )

                        let .f => n
                         {
                            currentNode = {
                                id: currentNode.id,
                                name: currentNode.data.name,
                                label: currentNode.data.label,
                                inputs: currentNode.data.inputs
                            }
                            body.currentNode = currentNode
                        }

                        body.previousNodes = previousNodes
                    }

                    
                }
                f {
                     {
                        const imageSrc = `${baseURL}/api/v1/node-icon/${response[j].name}`
                        response[j].imageSrc = imageSrc
                    }
                }
                 
                el
                
            }
            fet
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <>
            <Autocomplete
                id={name}
                freeSolo={freeSolo}
                disabled={disabled}
                disableClearable={disableClearable}
                multiple={multiple}
                filterSelectedOptions={multiple}
                size='small'
                sx={{ mt: 1, width: fullWidth ? '100%' : multiple ? '90%' : '100%' }}
                open={open}
                 => {
                    
                }}
                 => {
                    
                }}
                options={options}
                value={f || get}
                 => {
                     {
                        let value = ''
                         {
                             => 
                            value = JSON.
                        }
                        
                        
                    } else {
                        const value = selection ? selection.name : ''
                         {
                            
                        } else {
                            
                            
                        }
                    }
                }}
                PopperComponent={StyledPopper}
                loading={loading}
                 => {
                    const matchingOptions = multiple
                        ? f
                        : ].f

                    const textField = (
                        <TextField
                            {...params}
                            value={internalValue}
                            sx={{
                                height: '100%',
                                '& .MuiInputBase-root': {
                                    height: '100%',
                                    '& fieldset': {
                                        borderColor: theme.palette.grey[900] + 25
                                    }
                                }
                            }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        {mat =>
                                            option?.imageSrc ? (
                                                <Box
                                                    key={option.name}
                                                    component='img'
                                                    src={option.imageSrc}
                                                    alt={option.label || 'Selected Option'}
                                                    sx={{
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: '50%',
                                                        marginRight: 0.5
                                                    }}
                                                />
                                            ) : null
                                        )}
                                        {params.InputProps.startAdornment}
                                    </>
                                ),
                                endAdornment: (
                                    <Fragment>
                                        {loading ? <CircularProgress color='inherit' size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </Fragment>
                                )
                            }}
                        />
                    )

                    return !multiple ? (
                        textField
                    ) : (
                        <Tooltip
                            title={
                                type. : internalValue
                            }
                            placement='top'
                            arrow
                        >
                            {textField}
                        </Tooltip>
                    )
                }}
                 => (
                    <Box component='li' {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {option.imageSrc && (
                            <img
                                src={option.imageSrc}
                                alt={option.description}
                                style={{
                                    width: 30,
                                    height: 30,
                                    padding: 1,
                                    borderRadius: '50%'
                                }}
                            />
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h5'>{option.label}</Typography>
                            {option.description && (
                                <Typography sx={{ color: customization.isDarkMode ? '#9e9e9e' : '' }}>{option.description}</Typography>
                            )}
                        </div>
                    </Box>
                )}
            />
        </>
    )
}

AsyncDropdown.propTypes = {
    name: PropTypes.string,
    nodeData: PropTypes.object,
    value: PropTypes.string,
    onSelect: PropTypes.func,
    onCreateNew: PropTypes.func,
    disabled: PropTypes.bool,
    freeSolo: PropTypes.bool,
    credentialNames: PropTypes.array,
    disableClearable: PropTypes.bool,
    isCreateNewOption: PropTypes.bool,
    multiple: PropTypes.bool,
    fullWidth: PropTypes.bool
}
