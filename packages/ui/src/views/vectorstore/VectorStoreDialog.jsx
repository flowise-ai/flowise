import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useContext, useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { CopyBlock, atomOneDark } from 'react-code-blocks'

import {
    Dialog,
    DialogContent,
    DialogTitle,
    Button,
    Box,
    Tabs,
    Tab,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material'

import { CheckboxInput } from '@/ui-component/checkbox/Checkbox'
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'
import { TableViewOnly } from '@/ui-component/table/Table'

import { IconX, IconBulb, IconExclamationCircle } from '@tabler/icons-react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import pythonSVG from '@/assets/images/python.svg'
import javascriptSVG from '@/assets/images/javascript.svg'
import cURLSVG from '@/assets/images/cURL.svg'

import useApi from '@/hooks/useApi'
import configApi from '@/api/config'
import vectorstoreApi from '@/api/vectorstore'

// Utils
import {
    getUpsertDetails,
    getFileName,
    unshiftFiles,
    getConfigExamplesForJS,
    getConfigExamplesForPython,
    getConfigExamplesForCurl
} from '@/utils/genericHelper'
import useNotifier from '@/utils/useNotifier'

// Store
import { flowContext } from '@/store/context/ReactFlowContext'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { baseURL } from '@/store/constant'
import { enqueueSnackbar as enqueueSnackbarAction, closeSnackbar as closeSnackbarAction } from '@/store/actions'

fun {
    const { children, value, index, ...other } = props
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`attachment-tabpanel-${index}`}
            aria-labelledby={`attachment-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

fun {
    return {
        id: `attachment-tab-${index}`,
        'aria-controls': `attachment-tabpanel-${index}`
    }
}

 => {
    
    
    

    u
     => )
     => )
    

    
    
    
    
    
    
    
    

     => {
         => n => )
    }

     => {
         {
            return `import requests

API_URL = "${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid}"

:
    
    

output = query({
    ${isMultiple ? `"stopNodeId": "${vectorNodeId}",\n    ` : ``}"overrideConfig": {${getConfigExamplesForPython(
                configData,
                'json',
                isMultiple,
                vectorNodeId
            )}
    }
})
`
        } el {
             {
    const response = await fetch(
        "${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid}",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            b
        }
    );
    ;
    return result;
}

query({
  ${isMultiple ? `"stopNodeId": "${vectorNodeId}",\n  ` : ``}"overrideConfig": {${getConfigExamplesForJS(
                configData,
                'json',
                isMultiple,
                vectorNodeId
            )}
  }
}).then(( => {
    ;
});
`
        } el {
            return `curl ${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid} \\
      -X POST \\
      ${
          isMultiple
              ? `-d '{"stopNodeId": "${vectorNodeId}", "overrideConfig": {${getConfigExamplesForCurl(
                    configData,
                    'json',
                    isMultiple,
                    vectorNodeId
                )}}' \\`
              : `-}}' \\`
      }
      -H "Content-Type: application/json"`
        }
        return ''
    }

     => {
         {
            
            let fileType = configData[0].type
            ) f[0]
            return `import requests

API_URL = "${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid}"

# use form data to upload files
form_data = {
    "f)`}
}
b}}

:
    
    


`
        } el {
            return `// use FormData to upload files
let f;
${getC}
a {
    const response = await fetch(
        "${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid}",
        {
            method: "POST",
            body: formData
        }
    );
    ;
    return result;
}

que.then(( => {
    ;
});
`
        } el {
            return `curl ${baseURL}/api/v1/vector/upsert/${dialogProps.chatflowid} \\
     -X POST \\${getC} \\
     -H "Content-Type: multipart/form-data"`
        }
        return ''
    }

     => {
         {
            return `# Specify multiple values for a config parameter by specifying the node id
body_data = {
    "openAIApiKey": {
        "chatOpenAI_0": "sk-my-openai-1st-key",
        "openAIEmbeddings_0": "sk-my-openai-2nd-key"
    }
}`
        } el {
            return `// Specify multiple values for a config parameter by specifying the node id
f
f`
        } el {
            return `-F "openAIApiKey[chatOpenAI_0]=sk-my-openai-1st-key" \\
-F "openAIApiKey[openAIEmbeddings_0]=sk-my-openai-2nd-key" \\`
        }
    }

     => {
        return `{
    "overrideConfig": {
        "openAIApiKey": {
            "chatOpenAI_0": "sk-my-openai-1st-key",
            "openAIEmbeddings_0": "sk-my-openai-2nd-key"
        }
    }
}`
    }

     => {
         {
            return 'python'
        } el {
            return 'javascript'
        } el {
            return 'bash'
        }
        return 'python'
    }

     => {
         {
            return pythonSVG
        } el {
            return javascriptSVG
        } el {
            return EmbedSVG
        } el {
            return cURLSVG
        } el {
            return ShareChatbotSVG
        } el {
            return settingsSVG
        }
        return pythonSVG
    }

     => (event,  => {
        const accordianNodes = { ...nodeConfigExpanded }
        accordianNodes[nodeLabel] = isExpanded
        
    }

     => {
        const checkboxNodes = { ...nodeCheckboxExpanded }
        .) checkboxNodes[vectorNodeId] = !checkboxNodes[vectorNodeId]
        else checkboxNodes[vectorNodeId] = true

         getC
        
        

        const newIsFormDataRequired = { ...isFormDataRequired }
        newIsFormDataRequired[vectorNodeId] = false
        
         => n?.nodes ?? []

        f {
             => pa) {
                newIsFormDataRequired[vectorNodeId] = true
                
                break
            }
        }
    }

     => {
        
        try {
            
            enqueueSnackbar({
                message: 'Succesfully upserted vector store. You can start chatting now!',
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
            
             
        }  {
            enqueueSnackbar({
                message: typeof error.response.data === 'object' ? error.response.data.message : error.response.data,
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

     => {
        const nodeDetails = []
        
        f {
            ) {
                nodeDetails.push({
                    label: node.data.inputParams[i].label,
                    name: node.data.inputParams[i].name,
                    type: node.data.inputParams[i].type,
                    value:
                        node.data.inputParams[i].type === 'file'
                            ? getF
                            : node.data.inputs[node.data.inputParams[i].name] ?? ''
                })
            }
        }
        return nodeDetails
    }

    u => {
         {
            const newConfigData = { ...configData }
            newConfigData[expandedVectorNodeId] = reformatConfigData(
                getConfigApi.data,
                n => n?.nodes ?? []
            )
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            
            )
        }

         => {
            
            
            
            
            
            
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         
        el
         => 
    }, 

    const component = show ? (
        <Dialog
            open={show}
            fullWidth
            maxWidth='md'
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            sx={{ overflow: 'visible' }}
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                <PerfectScrollbar
                    style={{
                        height: '100%',
                        maxHe',
                        overflowX: 'hidden'
                    }}
                >
                    {nodes.length > 0 &&
                        n => {
                            return (
                                <div key={index}>
                                    {data.nodes.length > 0 &&
                                         => {
                                            return (
                                                <Accordion
                                                    expanded={nodeConfigExpanded[node.data.id] || false}
                                                    }
                                                    key={index}
                                                    disableGutters
                                                >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls={`nodes-accordian-${node.data.name}`}
                                                        id={`nodes-accordian-header-${node.data.name}`}
                                                    >
                                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                            <div
                                                                style={{
                                                                    width: 40,
                                                                    height: 40,
                                                                    marginRight: 10,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: 'white'
                                                                }}
                                                            >
                                                                <img
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        padding: 7,
                                                                        borderRadius: '50%',
                                                                        objectFit: 'contain'
                                                                    }}
                                                                    alt={node.data.name}
                                                                    src={`${baseURL}/api/v1/node-icon/${node.data.name}`}
                                                                />
                                                            </div>
                                                            <Typography variant='h5'>{node.data.label}</Typography>
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    width: 'max-content',
                                                                    borderRadius: 15,
                                                                    ba',
                                                                    padding: 5,
                                                                    paddingLeft: 10,
                                                                    paddingRight: 10,
                                                                    marginLeft: 10
                                                                }}
                                                            >
                                                                <', fontSize: '0.825rem' }}>
                                                                    {node.data.id}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <TableViewOnly
                                                            sx={{ minWidth: 'max-content' }}
                                                            }
                                                            }
                                                        />
                                                    </AccordionDetails>
                                                </Accordion>
                                            )
                                        })}
                                    <Box sx={{ p: 2 }}>
                                        <CheckboxInput
                                            key={JSON.}
                                            label='Show API'
                                            value={nodeCheckboxExpanded[data.vectorNode.data.id]}
                                             => }
                                        />
                                        {nodeCheckboxExpanded[data.vectorNode.data.id] && (
                                            <div>
                                                <Tab => } aria-label='tabs'>
                                                    { => (
                                                        <Tab
                                                            icon={
                                                                <img
                                                                    style={{ objectFit: 'cover', height: 15, width: 'auto' }}
                                                                    }
                                                                    alt='code'
                                                                />
                                                            }
                                                            iconPosition='start'
                                                            key={index}
                                                            label={codeLang}
                                                            {...a11yP}
                                                        ></Tab>
                                                    ))}
                                                </Tabs>
                                            </div>
                                        )}
                                        {nodeCheckboxExpanded[data.vectorNode.data.id] &&
                                            isFormDataRequired[data.vectorNode.data.id] !== undefined &&
                                            configData[data.vectorNode.data.id] &&
                                            configData[data.vectorNode.data.id].length > 0 && (
                                                <>
                                                    <div style={{ marginTop: 10 }}>
                                                        { => (
                                                            <TabPanel key={index} value={tabValue} index={index}>
                                                                <CopyBlock
                                                                    theme={atomOneDark}
                                                                    text={
                                                                        isFormDataRequired[data.vectorNode.data.id]
                                                                            ? getCodeWithFormData(
                                                                                  codeLang,
                                                                                  data.vectorNode.data.id,
                                                                                  nodes.length > 1 ? true : false,
                                                                                  configData[data.vectorNode.data.id]
                                                                              )
                                                                            : getCode(
                                                                                  codeLang,
                                                                                  data.vectorNode.data.id,
                                                                                  nodes.length > 1 ? true : false,
                                                                                  configData[data.vectorNode.data.id]
                                                                              )
                                                                    }
                                                                    language={getLang(}
                                                                    showLineNumbers={false}
                                                                    wrapLines
                                                                />
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        borderRadius: 10,
                                                                        ba',
                                                                        padding: 10,
                                                                        marginTop: 20,
                                                                        marginBottom: 20
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'row',
                                                                            alignItems: 'center'
                                                                        }}
                                                                    >
                                                                        <I' />
                                                                        <span
                                                                            style={{
                                                                                ',
                                                                                marginLeft: 10,
                                                                                fontWeight: 500
                                                                            }}
                                                                        >
                                                                            {
                                                                                'For security reason, override config is disabled by default. You can change this by going into Chatflow Configuration -> Security tab, and enable the property you want to override.'
                                                                            }
                                                                            &nbsp;Refer{' '}
                                                                            <a
                                                                                rel='noreferrer'
                                                                                target='_blank'
                                                                                href='https://docs.flowise-ai.github.io/using-flowise/api#override-config'
                                                                            >
                                                                                here
                                                                            </a>{' '}
                                                                            for more details
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        borderRadius: 10,
                                                                        background: '#d8f3dc',
                                                                        padding: 10,
                                                                        marginTop: 10,
                                                                        marginBottom: 10
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'row',
                                                                            alignItems: 'center'
                                                                        }}
                                                                    >
                                                                        <IconBulb size={30} color='#2d6a4f' />
                                                                        <span style={{ color: '#2d6a4f', marginLeft: 10, fontWeight: 500 }}>
                                                                            You can also specify multiple values for a config parameter by
                                                                            specifying the node id
                                                                        </span>
                                                                    </div>
                                                                    <div style={{ padding: 10 }}>
                                                                        <CopyBlock
                                                                            theme={atomOneDark}
                                                                            text={
                                                                                isFormDataRequired
                                                                                    ? getMult
                                                                                    : getMult
                                                                            }
                                                                            language={getLang(}
                                                                            showLineNumbers={false}
                                                                            wrapLines
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </TabPanel>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                    </Box>
                                    <div style={{ marginBottom: '20px' }}>
                                        {loading && <BackdropLoader open={loading} />}
                                        {!loading && (
                                            <Button
                                                sx={{ color: 'white' }}
                                                fullWidth
                                                variant='contained'
                                                color='teal'
                                                title='Upsert'
                                                 => }
                                            >
                                                Upsert
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                </PerfectScrollbar>
            </DialogContent>
        </Dialog>
    ) : null

    
}

VectorStoreDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onIndexResult: PropTypes.func
}

export default VectorStoreDialog
