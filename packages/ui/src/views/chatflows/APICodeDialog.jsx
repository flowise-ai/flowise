import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import {
    Tabs,
    Tab,
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Stack,
    Card
} from '@mui/material'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from '@mui/material/styles'
import { useAuth } from '@/hooks/useAuth'

// Project import
import { Dropdown } from '@/ui-component/dropdown/Dropdown'
import ShareChatbot from './ShareChatbot'
import EmbedChat from './EmbedChat'
import { Available } from '@/ui-component/rbac/available'

// Const
import { baseURL } from '@/store/constant'
import { SET_CHATFLOW } from '@/store/actions'

// Images
import pythonSVG from '@/assets/images/python.svg'
import javascriptSVG from '@/assets/images/javascript.svg'
import cURLSVG from '@/assets/images/cURL.svg'
import EmbedSVG from '@/assets/images/embed.svg'
import ShareChatbotSVG from '@/assets/images/sharing.png'
import settingsSVG from '@/assets/images/settings.svg'
import { IconBulb, IconBox, IconVariable, IconExclamationCircle } from '@tabler/icons-react'

// API
import apiKeyApi from '@/api/apikey'
import chatflowsApi from '@/api/chatflows'
import configApi from '@/api/config'
import variablesApi from '@/api/variables'

// Hooks
import useApi from '@/hooks/useApi'
import { CheckboxInput } from '@/ui-component/checkbox/Checkbox'
import { TableViewOnly } from '@/ui-component/table/Table'

// Helpers
import { unshiftFiles, getConfigExamplesForJS, getConfigExamplesForPython, getConfigExamplesForCurl } from '@/utils/genericHelper'

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
    
    
    
    
     => 
     : {}
    const overrideConfigStatus = apiConfig?.overrideConfig?.status !== undefined ? apiConfig.overrideConfig.status : false

    const codes = ['Embed', 'Python', 'JavaScript', 'cURL', 'Share Chatbot']
    
    
    
    
    
    
    
    
    

    
    
    
    
    
     => 
    

    // Memoize keyOptions to prevent recreation on hover
     => {
         return []

        const options = [
            {
                label: 'No Authorization',
                name: ''
            }
        ]

        f {
            options.push({
                label: key.keyName,
                name: key.id
            })
        }

        ) {
            options.push({
                label: '- Add New Key -',
                name: 'addnewkey'
            })
        }

        return options
    }, 

     => {
        
         {
            getC
            getAllVa
        }
    }

     => {
         {
            nav
            return
        }
        
         => key.
        
        const updateBody = {
            apikeyid: keyValue
        }
        up
    }

     => {
        const result = {}
        const newNodeOverrides = {}
        

        n => {
            const { node, nodeId, label, name, type } = item
            

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

            const param = { label, name, type }

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
        
        
    }

     => {
        const newVariables = []
        

        va => {
            const { id, name, type } = item
            

            const param = { id, name, type }

            // If overrideConfigStatus is true, look for existing variable config
            // Otherwise, create new default config
             {
                 => ex
                 {
                     => va) {
                        newVa
                    }
                } else {
                     => va) {
                        newVa
                    }
                }
            } else {
                // When no override config exists, create default values
                 => va) {
                    newVa
                }
            }
        })

        // If overrideConfigStatus is true, clean up any variables that no longer exist
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

     => (event,  => {
        const accordianNodes = { ...nodeConfigExpanded }
        accordianNodes[nodeLabel] = isExpanded
        
    }

    u => {
         {
            
        }
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

     => {
        
    }

     => {
         {
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"

:
    
    
    
output = query({
    "question": "Hey, how are you?",
})
`
        } el {
             {
    const response = await fetch(
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
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

que.then(( => {
    ;
});
`
        } el {
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\
     -d '{"question": "Hey, how are you?"}' \\
     -H "Content-Type: application/json"`
        }
        return ''
    }

     => {
         {
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"
headers = {"Authorization": "Bearer ${selectedApiKey?.apiKey}"}

:
    
    
    
output = query({
    "question": "Hey, how are you?",
})
`
        } el {
             {
    const response = await fetch(
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
        {
            headers: {
                Authorization: "Bearer ${selectedApiKey?.apiKey}",
                "Content-Type": "application/json"
            },
            method: "POST",
            b
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
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\
     -d '{"question": "Hey, how are you?"}' \\
     -H "Content-Type: application/json" \\
     -H "Authorization: Bearer ${selectedApiKey?.apiKey}"`
        }
        return ''
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

    // ----------------------------CONFIG FORM DATA --------------------------//

     => {
         {
            
            let fileType = configData[0].type
            ) f[0]
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"

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
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
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
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\${getC} \\
     -H "Content-Type: multipart/form-data"`
        }
        return ''
    }

    // ----------------------------CONFIG FORM DATA with AUTH--------------------------//

     => {
         {
            
            let fileType = configData[0].type
            ) f[0]
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"
headers = {"Authorization": "Bearer ${selectedApiKey?.apiKey}"}

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
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
        {
            headers: { Authorization: "Bearer ${selectedApiKey?.apiKey}" },
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
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\${getC} \\
     -H "Content-Type: multipart/form-data" \\
     -H "Authorization: Bearer ${selectedApiKey?.apiKey}"`
        }
        return ''
    }

    // ----------------------------CONFIG JSON--------------------------//

     => {
         {
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"

:
    
    

output = query({
    "question": "Hey, how are you?",
    "}
    }
})
`
        } el {
             {
    const response = await fetch(
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
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
  "question": "Hey, how are you?",
  "}
  }
}).then(( => {
    ;
});
`
        } el {
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\
     -}}' \\
     -H "Content-Type: application/json"`
        }
        return ''
    }

    // ----------------------------CONFIG JSON with AUTH--------------------------//

     => {
         {
            return `import requests

API_URL = "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}"
headers = {"Authorization": "Bearer ${selectedApiKey?.apiKey}"}

:
    
    

output = query({
    "question": "Hey, how are you?",
    "}
    }
})
`
        } el {
             {
    const response = await fetch(
        "${baseURL}/api/v1/prediction/${dialogProps.chatflowid}",
        {
            headers: {
                Authorization: "Bearer ${selectedApiKey?.apiKey}",
                "Content-Type": "application/json"
            },
            method: "POST",
            b
        }
    );
    ;
    return result;
}

query({
  "question": "Hey, how are you?",
  "}
  }
}).then(( => {
    ;
});
`
        } el {
            return `curl ${baseURL}/api/v1/prediction/${dialogProps.chatflowid} \\
     -X POST \\
     -}}' \\
     -H "Content-Type: application/json" \\
     -H "Authorization: Bearer ${selectedApiKey?.apiKey}"`
        }
        return ''
    }

     => {
         {
             {
                return `# Specify multiple values for a config parameter by specifying the node id
body_data = {
    "agentModelConfig": {
        "agentAgentflow_0": {
            "openAIApiKey": "sk-my-openai-1st-key"
        },
        "agentAgentflow_1": {
            "openAIApiKey": "sk-my-openai-2nd-key"
        }
    }
}`
            } el {
                return `// Specify multiple values for a config parameter by specifying the node id
f
f`
            } el {
                return `-F "agentModelConfig[agentAgentflow_0][openAIApiKey]=sk-my-openai-1st-key" \\
-F "agentModelConfig[agentAgentflow_1][openAIApiKey]=sk-my-openai-2nd-key" \\`
            }
        } else {
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
    }

     => {
         {
            return `{
    "overrideConfig": {
        "agentModelConfig": {
            "agentAgentflow_0": {
                "openAIApiKey": "sk-my-openai-1st-key"
            },
            "agentAgentflow_1": {
                "openAIApiKey": "sk-my-openai-2nd-key"
            }
        }
    }
}`
        } else {
            return `{
    "overrideConfig": {
        "openAIApiKey": {
            "chatOpenAI_0": "sk-my-openai-1st-key",
            "openAIEmbeddings_0": "sk-my-openai-2nd-key"
        }
    }
}`
        }
    }

    u => {
         {
            

             {
                
                 => key.)
            }
        }
    }, 

    u => {
         {
            getAllAPIKey
            getI
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    const component = show ? (
        <Dialog
            open={show}
            fullWidth
            maxWidth='md'
            onClose={onCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ flex: 80 }}>
                        <Tabs value={value} onChange={handleChange} aria-label='tabs'>
                            { => (
                                <Tab
                                    icon={
                                        <} alt='code' />
                                    }
                                    iconPosition='start'
                                    key={index}
                                    label={codeLang}
                                    {...a11yP}
                                ></Tab>
                            ))}
                        </Tabs>
                    </div>
                    <div style={{ flex: 20 }}>
                        <Available permission={'chatflows:update,agentflows:update'}>
                            <Dropdown
                                name='SelectKey'
                                disableClearable={true}
                                options={keyOptions}
                                 => }
                                value={dialogProps.chatflowApiKeyId ?? chatflowApiKeyId ?? 'Choose an API key'}
                            />
                        </Available>
                    </div>
                </div>
                <div style={{ marginTop: 10 }}></div>
                { => (
                    <TabPanel key={index} value={value} index={index}>
                        {( && chatflowApiKeyId && (
                            <>
                                <p>You cannot use API key while embedding/sharing chatbot.</p>
                                <p>
                                    Please select <b>&quot;No Authorization&quot;</b> from the dropdown at the top right corner.
                                </p>
                            </>
                        )}
                        {codeLang === 'Embed' && !chatflowApiKeyId && <EmbedChat chatflowid={dialogProps.chatflowid} />}
                        {codeLang !== 'Embed' && codeLang !== 'Share Chatbot' && codeLang !== 'Configuration' && (
                            <>
                                <CopyBlock
                                    theme={atomOneDark}
                                    text={ : getC}
                                    language={getLang(}
                                    showLineNumbers={false}
                                    wrapLines
                                />
                                <CheckboxInput label='Show Override Config' value={checkboxVal} onChange={onCheckBoxChanged} />
                                {checkboxVal && getConfigApi.data && getConfigApi.data.length > 0 && (
                                    <>
                                        <Typography sx={{ mt: 2 }}>
                                            You can override existing input configuration of the chatflow with overrideConfig property.
                                        </Typography>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                borderRadius: 10,
                                                ba',
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
                                                <I' />
                                                <', marginLeft: 10, fontWeight: 500 }}>
                                                    {
                                                        'For security reason, override config is disabled by default. You can change this by going into Chatflow Configuration -> Security tab, and enable the property you want to override.'
                                                    }
                                                    &nbsp;Refer{' '}
                                                    <a
                                                        rel='noreferrer'
                                                        target='_blank'
                                                        href='https://docs.flowise-ai.github.io/using-flowise/prediction#configuration-override'
                                                    >
                                                        here
                                                    </a>{' '}
                                                    for more details
                                                </span>
                                            </div>
                                        </div>
                                        <Stack direction='column' spacing={2} sx={{ width: '100%', my: 2 }}>
                                            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 2 }} variant='outlined'>
                                                <Stack sx={{ mt: 1, mb: 2, ml: 1, alignItems: 'center' }} direction='row' spacing={2}>
                                                    <IconBox />
                                                    <Typography variant='h4'>Nodes</Typography>
                                                </Stack>
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
                                                                <Stack
                                                                    flexDirection='row'
                                                                    sx={{ gap: 2, alignItems: 'center', flexWrap: 'wrap' }}
                                                                >
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
                                                            <AccordionDetails>
                                                                <TableViewOnly
                                                                    rows={nodeOverrides[nodeLabel]}
                                                                    columns={
                                                                        nodeOverrides[nodeLabel].length > 0
                                                                            ? Obje.filter(
                                                                                  (key) => key !== 'schema'
                                                                              )
                                                                            : []
                                                                    }
                                                                />
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    ))}
                                            </Card>
                                            <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 2 }} variant='outlined'>
                                                <Stack sx={{ mt: 1, mb: 2, ml: 1, alignItems: 'center' }} direction='row' spacing={2}>
                                                    <IconVariable />
                                                    <Typography variant='h4'>Variables</Typography>
                                                </Stack>
                                                <TableViewOnly rows={variableOverrides} columns={['name', 'type', 'enabled']} />
                                            </Card>
                                        </Stack>
                                        <CopyBlock
                                            theme={atomOneDark}
                                            text={
                                                chatflowApiKeyId
                                                    ? dialogProps.isFormDataRequired
                                                        ? getC
                                                        : getC
                                                    : dialogProps.isFormDataRequired
                                                    ? getC
                                                    : getC
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
                                                    You can also specify multiple values for a config parameter by specifying the node id
                                                </span>
                                            </div>
                                            <div style={{ padding: 10 }}>
                                                <CopyBlock
                                                    theme={atomOneDark}
                                                    text={
                                                        dialogProps.isFormDataRequired
                                                            ? getMult
                                                            : getMult
                                                    }
                                                    language={getLang(}
                                                    showLineNumbers={false}
                                                    wrapLines
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {getIsChatflowStreamingApi.data?.isStreaming && (
                                    <p>
                                        Read&nbsp;
                                        <a rel='noreferrer' target='_blank' href='https://docs.flowise-ai.github.io/using-flowise/streaming'>
                                            here
                                        </a>
                                        &nbsp;on how to stream response back to application
                                    </p>
                                )}
                            </>
                        )}
                        {codeLang === 'Share Chatbot' && !chatflowApiKeyId && (
                            <ShareChatbot isSessionMemory={dialogProps.isSessionMemory} isAgentCanvas={dialogProps.isAgentCanvas} />
                        )}
                    </TabPanel>
                ))}
            </DialogContent>
        </Dialog>
    ) : null

    
}

APICodeDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default APICodeDialog
