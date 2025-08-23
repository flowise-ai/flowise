import { useEffect, useState } from 'react'
import { FullPageChat } from 'flowise-embed-react'

// API
import chatflowsApi from '@/api/chatflows'

// Hooks
import useApi from '@/hooks/useApi'

// MUI
import { Box, Card, Stack, Typography, useTheme } from '@mui/material'
import { IconCircleXFilled } from '@tabler/icons-react'
import { alpha } from '@mui/material/styles'

//Const
import { baseURL } from '@/store/constant'

// ==============================|| Chatbot ||============================== //

 => {
    .
    const chatflowId = URLpath[URLpath.length - 1] === 'chatbot' ? '' : URLpath[URLpath.length - 1]
    

    
    
    
    

    
    

    u => {
        getSpe

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            const chatflowData = getSpecificChatflowFromPublicApi.data || getSpecificChatflowApi.data
            

            const chatflowType = chatflowData.type
             {
                let parsedConfig = {}
                 {
                    parsedConfig.showAgentMessages = true
                }

                try {
                    pa }
                    
                     {
                        
                    }

                     {
                        l
                    }
                }  {
                    
                    
                    
                }
            } el {
                
            }
        }
    }, 

    u => {
        
    }, 

    return (
        <>
            {!isLoading ? (
                <>
                    {!chatflow || chatflow.apikeyid ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                            <Box sx={{ maxWidth: '500px', width: '100%' }}>
                                <Card
                                    variant='outlined'
                                    sx={{
                                        border: `1px solid ${theme.palette.error.main}`,
                                        borderRadius: 2,
                                        padding: '20px',
                                        b}`
                                    }}
                                >
                                    <Stack spacing={2} alignItems='center'>
                                        <IconCircleXFilled size={50} color={theme.palette.error.main} />
                                        <Typography variant='h3' color='error.main' align='center'>
                                            Invalid Chatbot
                                        </Typography>
                                        <Typography variant='body1' color='text.secondary' align='center'>
                                            {`The chatbot you're looking for doesn't exist or requires API key authentication.`}
                                        </Typography>
                                    </Stack>
                                </Card>
                            </Box>
                        </Box>
                    ) : (
                        <FullPageChat
                            chatflowid={chatflow.id}
                            apiHost={baseURL}
                            chatflowConfig={chatbotOverrideConfig}
                            theme={{ chatWindow: chatbotTheme }}
                        />
                    )}
                </>
            ) : null}
        </>
    )
}

export default ChatbotFull
