import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MemoizedReactMarkdown } from '@/ui-component/markdown/MemoizedReactMarkdown'
import {
    Typography,
    Stack,
    Card,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Dialog,
    DialogContent,
    DialogTitle,
    Box
} from '@mui/material'
import { TableViewOnly } from '@/ui-component/table/Table'
import documentstoreApi from '@/api/documentstore'
import useApi from '@/hooks/useApi'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconInfoCircle } from '@tabler/icons-react'
import { baseURL } from '@/store/constant'

 => {
    
    
    
     => 
    

    

     => {
        return `With the Upsert API, you can choose an existing document and reuse the same configuration for upserting.

\`\`\`python
import requests
import json

API_URL = "${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId}"
API_KEY = "your_api_key_here"

# use form data to upload files
form_data = {
    "f)
}

body_data = {
    "docId": "${dialogProps.loaderId}",
    "metadata": {}, # Add additional metadata to the document chunks
    "replaceExisting": True, # Replace existing document with the new upserted chunks
    "createNewDocStore": False, # Create a new document store
    "loaderName": "Custom Loader Name", # Override the loader name
    " # Override existing configuration
    # "loader": "",
    # "vectorStore": "",
    # "embedding": "",
    # "recordManager": "",
    # "docStore": ""
}

headers = {
    "Authorization": f"Bearer {BEARER_TOKEN}"
}

:
    
    p
    


p
\`\`\`

\`\`\`javascript
// use FormData to upload files
let f;
f;
f;
f;
f);
// Add additional metadata to the document chunks
f;
// Replace existing document with the new upserted chunks
f;
// Create a new document store
f;
// Override existing configuration
// f;
// f;
// f;
// f;
// f;

a {
    const response = await fetch(
        "${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId}",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer <your_api_key_here>"
            },
            body: formData
        }
    );
    ;
    return result;
}

que.then(( => {
    ;
});
\`\`\`

\`\`\`bash
curl -X POST ${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId} \\
  -H "Authorization: Bearer <your_api_key_here>" \\
  -F "files=@<file-path>" \\
  -F "docId=${dialogProps.loaderId}" \\
  -F "loaderName=Custom Loader Name" \\
  -F "splitter={"config":{"chunkSize":20000}}" \\
  -F "metadata={}" \\
  -F "replaceExisting=true" \\
  -F "createNewDocStore=false" \\
  # Override existing configuration:
  # -F "loader=" \\
  # -F "embedding=" \\
  # -F "vectorStore=" \\
  # -F "recordManager=" \\
  # -F "docStore="
\`\`\`
`
    }

     => {
        return `With the Upsert API, you can choose an existing document and reuse the same configuration for upserting.
 
\`\`\`python
import requests

API_URL = "${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId}"
API_KEY = "your_api_key_here"

headers = {
    "Authorization": f"Bearer {BEARER_TOKEN}"
}

:
    
    

output = query({
    "docId": "${dialogProps.loaderId}",
    "metadata": "{}", # Add additional metadata to the document chunks
    "replaceExisting": True, # Replace existing document with the new upserted chunks
    "createNewDocStore": False, # Create a new document store
    "loaderName": "Custom Loader Name", # Override the loader name
    # Override existing configuration
    "loader": {
        "config": {
            "text": "This is a new text"
        }
    },
    "splitter": {
        "config": {
            "chunkSize": 20000
        }
    },
    # embedding: {},
    # vectorStore: {},
    # recordManager: {}
    # docStore: {}
})
p
\`\`\`

\`\`\`javascript
a {
    const response = await fetch(
        "${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId}",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer <your_api_key_here>"
            },
            b
        }
    );
    ;
    return result;
}

query({
    "docId": "${dialogProps.loaderId}",
    "metadata": "{}", // Add additional metadata to the document chunks
    "replaceExisting": true, // Replace existing document with the new upserted chunks
    "createNewDocStore": false, // Create a new document store
    "loaderName": "Custom Loader Name", // Override the loader name
    // Override existing configuration
    "loader": {
        "config": {
            "text": "This is a new text"
        }
    },
    "splitter": {
        "config": {
            "chunkSize": 20000
        }
    },
    // embedding: {},
    // vectorStore: {},
    // recordManager: {}
    // docStore: {}
}).then(( => {
    ;
});
\`\`\`

\`\`\`bash
curl -X POST ${baseURL}/api/v1/document-store/upsert/${dialogProps.storeId} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <your_api_key_here>" \\
  -d '{
        "docId": "${dialogProps.loaderId}",
        "metadata": "{}",
        "replaceExisting": true,
        "createNewDocStore": false,
        "loaderName": "Custom Loader Name",
        "loader": {
            "config": {
                "text": "This is a new text"
            }
        },
        "splitter": {
            "config": {
                "chunkSize": 20000
            }
        }
        // Override existing configuration
        // "embedding": {},
        // "vectorStore": {},
        // "recordManager": {}
        // "docStore": {}
      }'

\`\`\`
`
    }

     => {
        const result = {}
        
        let isFormDataBody = false

        n => {
            const { node, nodeId, label, name, type } = item
             isFormDataBody = true
            

             {
                result[node] = {
                    nodeIds: [],
                    params: []
                }
            }

            ) 

            const param = { label, name, type }

             => JSON. === JSON.)) {
                
            }
        })

        // Sort the nodeIds array
        f {
            
        }
        

         {
            )
        } else {
            )
        }
    }

     => (event,  => {
        const accordianNodes = { ...nodeConfigExpanded }
        accordianNodes[nodeLabel] = isExpanded
        
    }

    u => {
         {
            g
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            getC
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='lg'
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {dialogProps.title}
            </DialogTitle>
            <DialogContent>
                {/* Info Box */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        mb: 3,
                        background: customization.isDarkMode
                            ? 'l 0%,  100%)'
                            : 'l 0%,  100%)',
                        color: customization.isDarkMode ? 'white' : '#333333',
                        fontWeight: 400,
                        borderRadius: 2,
                        b' : ''}`,
                        gap: 1.5
                    }}
                >
                    <IconInfoCircle
                        size={20}
                        style={{
                            color: customization.isDarkMode ? '#64b5f6' : '#1976d2',
                            flexShrink: 0
                        }}
                    />
                    <Box sx={{ flex: 1 }}>
                        <strong>Note:</strong> Upsert API can only be used when the existing document loader has been upserted before.
                    </Box>
                </Box>

                {/** info */}

                <MemoizedReactMarkdown>{values}</MemoizedReactMarkdown>

                <Typography sx={{ mt: 3, mb: 1 }}>You can override existing configurations:</Typography>

                <Stack direction='column' spacing={2} sx={{ width: '100%', my: 2 }}>
                    <Card sx={{ borderColor: theme.palette.primary[200] + 75, p: 2 }} variant='outlined'>
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
                                    <AccordionDetails>
                                        <TableViewOnly
                                             => {
                                                // eslint-disable-next-line
                                                const { node, nodeId, ...rest } = obj
                                                return rest
                                            })}
                                            .}
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                    </Card>
                </Stack>
            </DialogContent>
        </Dialog>
    ) : null

    
}

DocStoreAPIDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default DocStoreAPIDialog
