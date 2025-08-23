import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Card
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Project import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import { SwitchInput } from '@/ui-component/switch/Switch'
import useNotifier from '@/utils/useNotifier'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction, SET_CHATFLOW } from '@/store/actions'

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconX, IconBox, IconVariable } from '@tabler/icons-react'

// API
import useApi from '@/hooks/useApi'
import chatflowsApi from '@/api/chatflows'
import configApi from '@/api/config'
import variablesApi from '@/api/variables'

// utils

 => {
     => {
        
    }

     => {
         {
             => han} value={row.enabled} />
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
        } else {
            return row[key]
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table size='small' sx={{ minWidth: 650, ...sx }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        { => (
                            <TableCell key={.t + }</TableCell>
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
    )
}

OverrideConfigTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    sx: PropTypes.object,
    onToggle: PropTypes.func
}

 => {
    
     => 
    const chatflowid = chatflow.id
     : {}

    u
    

     => )
     => )

    
    
    const [overrideConfigStatus, setOverrideConfigStatus] = useState(
        apiConfig?.overrideConfig?.status !== undefined ? apiConfig.overrideConfig.status : false
    )
    
    const [variableOverrides, setVariableOverrides] = useState(
        apiConfig?.overrideConfig?.variables !== undefined ? apiConfig.overrideConfig.variables : []
    )

    
    

     => (event,  => {
        const accordianNodes = { ...nodeConfigExpanded }
        accordianNodes[nodeLabel] = isExpanded
        
    }

     => {
        let ap
         {
            apiConfig = {}
        }

        let overrideConfig = { status: overrideConfigStatus }
         {
            const filteredNodeOverrides = {}
            f {
                f => n
            }

            overrideConfig = {
                ...overrideConfig,
                nodes: filteredNodeOverrides,
                va => n
            }
        }
        apiConfig.overrideConfig = overrideConfig

        return apiConfig
    }

     => {
         => {
            const newConfig = { ...prev }
            newC => {
                 {
                    item.enabled = status
                }
                return item
            })
            return newConfig
        })
    }

     => {
         => {
             => {
                 {
                    item.enabled = status
                }
                return item
            })
        })
    }

     => {
        const result = {}
        const newNodeOverrides = {}
        

        n => {
            const { node, nodeId, label, name, type, schema } = item
            

             {
                result[node] = {
                    nodeIds: [],
                    params: []
                }
            }

             {
                // If overrideConfigStatus is true, copy existing config for this node
                newN] : []
            }

            ) 

            const param = { label, name, type, schema }

             => JSON. === JSON.)) {
                
                const paramExists = newNodeOverrides[node].some(
                    (ex => existingParam.label === label && existingParam.name === name && existingParam.type === type
                )
                 {
                    newN
                }
            }
        })

        // Sort the nodeIds array
        f {
            
        }
        

         {
            
        } else {
            const updatedNodeOverrides = { ...newNodeOverrides }

            Obje.f => {
                ) {
                    delete updatedNodeOverrides[node]
                }
            })

             => {
                 {
                    updatedNodeOverrides[node] = newNodeOverrides[node]
                }
            })

            
        }
    }

     => {
        const newVariables = []
        

        va => {
            const { id, name, type } = item
            

            const param = { id, name, type }
             => ex

             {
                 => ex) {
                    newVa
                }
            } else {
                 => ex) {
                    newVa
                }
            }
        })

         {
            va => {
                ) {
                     => newVa
                     {
                        newVa
                    }
                }
            })
        }

        
    }

     => {
        try {
            const saveResp = await chatflowsApi.updateChatflow(chatflowid, {
                ap)
            })
             {
                enqueueSnackbar({
                    message: 'Override Configuration Saved',
                    options: {
                        key: new .getT + Math.,
                        variant: 'success',
                        a => (
                            <Butt => }>
                                <IconX />
                            </Button>
                        )
                    }
                })
                
            }
        }  {
            enqueueSnackbar({
                message: `Failed to save Override Configuration: ${
                    typeof error.response.data === 'object' ? error.response.data.message : error.response.data
                }`,
                options: {
                    key: new .getT + Math.,
                    variant: 'error',
                    persist: true,
                    a => (
                        <Butt => }>
                            <IconX />
                        </Button>
                    )
                }
            })
        }
    }

    u => {
         {
            getC
            getAllVa
        }

         => {}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            g
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            g
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    return (
        <Stack direction='column' spacing={2} sx={{ alignItems: 'start' }}>
            <Typography variant='h3'>
                Override Configuration
                <TooltipWithParser
                    style={{ mb: 1, mt: 2, marginLeft: 10 }}
                    title={
                        'Enable or disable which properties of the flow configuration can be overridden. Refer to the <a href="https://docs.flowise-ai.github.io/using-flowise/api#override-config" target="_blank">documentation</a> for more information.'
                    }
                />
            </Typography>
            <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
                <SwitchInput label='Enable Override Configuration' onChange={setOverrideConfigStatus} value={overrideConfigStatus} />
                {overrideConfigStatus && (
                    <>
                        {nodeOverrides && nodeConfig && (
                            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 2 }} variant='outlined'>
                                <Stack sx={{ mt: 1, mb: 2, ml: 1, alignItems: 'center' }} direction='row' spacing={2}>
                                    <IconBox />
                                    <Typography variant='h4'>Nodes</Typography>
                                </Stack>
                                <Stack direction='column'>
                                    {Obje
                                        .
                                        .map((n => (
                                            <Accordion
                                                expanded={nodeConfigExpanded[nodeLabel] || false}
                                                }
                                                key={nodeLabel}
                                                disableGutters
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls={`nodes-accordian-${nodeLabel}`}
                                                    id={`nodes-accordian-header-${nodeLabel}`}
                                                >
                                                    <Stack flexDirection='row' sx={{ gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                                        <Typography variant='h5'>{nodeLabel}</Typography>
                                                        {nodeConfig[nodeLabel].nodeIds.length > 0 &&
                                                            n => (
                                                                <div
                                                                    key={index}
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'row',
                                                                        width: 'max-content',
                                                                        borderRadius: 15,
                                                                        ba',
                                                                        padding: 5,
                                                                        paddingLeft: 10,
                                                                        paddingRight: 10
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            ',
                                                                            fontSize: '0.825rem'
                                                                        }}
                                                                    >
                                                                        {nodeId}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                    </Stack>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ p: 0 }}>
                                                    <OverrideConfigTable
                                                        rows={nodeOverrides[nodeLabel]}
                                                        columns={
                                                            nodeOverrides[nodeLabel].length > 0
                                                                ? Obje.filter(
                                                                      (key) => key !== 'schema' && key !== 'id'
                                                                  )
                                                                : []
                                                        }
                                                         =>
                                                            
                                                        }
                                                    />
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                </Stack>
                            </Card>
                        )}
                        {variableOverrides && variableOverrides.length > 0 && (
                            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 2 }} variant='outlined'>
                                <Stack sx={{ mt: 1, mb: 2, ml: 1, alignItems: 'center' }} direction='row' spacing={2}>
                                    <IconVariable />
                                    <Typography variant='h4'>Variables</Typography>
                                </Stack>
                                <OverrideConfigTable
                                    rows={variableOverrides}
                                    columns={['name', 'type', 'enabled']}
                                     => }
                                />
                            </Card>
                        )}
                    </>
                )}
            </Stack>
            <StyledButton variant='contained' onClick={onOverrideConfigSave}>
                Save
            </StyledButton>
        </Stack>
    )
}

OverrideConfig.propTypes = {
    dialogProps: PropTypes.object
}

export default OverrideConfig
