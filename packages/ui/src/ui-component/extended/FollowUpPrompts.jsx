import PropTypes from 'prop-types'
import { Box, Button, FormControl, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from '@mui/material/styles'

// Project Imports
import { StyledButton } from '@/ui-component/button/StyledButton'
import { SwitchInput } from '@/ui-component/switch/Switch'
import chatflowsApi from '@/api/chatflows'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction, SET_CHATFLOW } from '@/store/actions'
import useNotifier from '@/utils/useNotifier'
import anthropicIcon from '@/assets/images/anthropic.svg'
import azureOpenAiIcon from '@/assets/images/azure_openai.svg'
import mistralAiIcon from '@/assets/images/mistralai.svg'
import openAiIcon from '@/assets/images/openai.svg'
import groqIcon from '@/assets/images/groq.png'
import geminiIcon from '@/assets/images/gemini.png'
import ollamaIcon from '@/assets/images/ollama.svg'
import { TooltipWithParser } from '@/ui-component/tooltip/TooltipWithParser'
import CredentialInputHandler from '@/views/canvas/CredentialInputHandler'
import { Input } from '@/ui-component/input/Input'
import { AsyncDropdown } from '@/ui-component/dropdown/AsyncDropdown'

// Icons
import { IconX } from '@tabler/icons-react'
import { Dropdown } from '@/ui-component/dropdown/Dropdown'

const promptDescription =
    'Prompt to generate questions based on the conversation history. You can use variable {history} to refer to the conversation history.'
const defaultPrompt =
    'Given the following conversations: {history}. Please help me predict the three most likely questions that human would ask and keeping each question short and concise.'

// update when adding new providers
const FollowUpPromptProviders = {
    ANTHROPIC: 'chatAnthropic',
    AZURE_OPENAI: 'azureChatOpenAI',
    GOOGLE_GENAI: 'chatGoogleGenerativeAI',
    GROQ: 'groqChat',
    MISTRALAI: 'chatMistralAI',
    OPENAI: 'chatOpenAI',
    OLLAMA: 'ollama'
}

const followUpPromptsOptions = {
    [FollowUpPromptProviders.ANTHROPIC]: {
        label: 'Anthropic Claude',
        name: FollowUpPromptProviders.ANTHROPIC,
        icon: anthropicIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['anthropicApi']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.AZURE_OPENAI]: {
        label: 'Azure ChatOpenAI',
        name: FollowUpPromptProviders.AZURE_OPENAI,
        icon: azureOpenAiIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['azureOpenAIApi']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.GOOGLE_GENAI]: {
        label: 'Google Gemini',
        name: FollowUpPromptProviders.GOOGLE_GENAI,
        icon: geminiIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['googleGenerativeAI']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.GROQ]: {
        label: 'Groq',
        name: FollowUpPromptProviders.GROQ,
        icon: groqIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['groqApi']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.MISTRALAI]: {
        label: 'Mistral AI',
        name: FollowUpPromptProviders.MISTRALAI,
        icon: mistralAiIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['mistralAIApi']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.OPENAI]: {
        label: 'OpenAI',
        name: FollowUpPromptProviders.OPENAI,
        icon: openAiIcon,
        inputs: [
            {
                label: 'Connect Credential',
                name: 'credential',
                type: 'credential',
                credentialNames: ['openAIApi']
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.9
            }
        ]
    },
    [FollowUpPromptProviders.OLLAMA]: {
        label: 'Ollama',
        name: FollowUpPromptProviders.OLLAMA,
        icon: ollamaIcon,
        inputs: [
            {
                label: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                placeholder: 'http://127.0.0.1:11434',
                description: 'Base URL of your Ollama instance',
                default: 'http://127.0.0.1:11434'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                placeholder: 'llama2',
                description: 'Name of the Ollama model to use',
                default: 'llama3.2-vision:latest'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'string',
                rows: 4,
                description: promptDescription,
                optional: true,
                default: defaultPrompt
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                optional: true,
                default: 0.7
            }
        ]
    }
}

 => {
    

    u
    

     => )
     => )

    
    
    

     => {
        setFollowUpPromptsConfig({
            ...followUpPromptsConfig,
            [key]: value
        })
    }

     => {
        const selectedProvider = event.target.value
        
        han
    }

     => {
        let newVal = {}
        ) {
            newVal = { ...followUpPromptsConfig, [providerName]: {} }
        } else {
            newVal = { ...followUpPromptsConfig }
        }

        newVal[providerName][inputParamName] = value
         {
            // ensure that the others are turned off
            Obje.f => {
                const provider = followUpPromptsOptions[key]
                 {
                    newVal[provider.name] = { ...followUpPromptsConfig[provider.name], status: false }
                }
            })
        }
        
        return newVal
    }

     => {
        // TODO: saving without changing the prompt will not save the prompt
        try {
            let value = {
                followUpPrompts: { status: followUpPromptsConfig.status }
            }
            chatbotConfig.followUpPrompts = value.followUpPrompts

            // if the prompt is not set, save the default prompt
            const selectedProvider = followUpPromptsConfig.selectedProvider

             {
                 {
                    followUpPromptsConfig[selectedProvider].prompt = followUpPromptsOptions[selectedProvider].inputs.find(
                        ( => input.name === 'prompt'
                    )?.default
                }

                 {
                    followUpPromptsConfig[selectedProvider].temperature = followUpPromptsOptions[selectedProvider].inputs.find(
                        ( => input.name === 'temperature'
                    )?.default
                }
            }

            const saveResp = await chatflowsApi.updateChatflow(dialogProps.chatflow.id, {
                ,
                f
            })
             {
                enqueueSnackbar({
                    message: 'Follow-up Prompts configuration saved',
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
            const errorData = error.response.data || `${error.response.status}: ${error.response.statusText}`
            enqueueSnackbar({
                message: `Failed to save follow-up prompts configuration: ${errorData}`,
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
            let 
            let f
            
             {
                
                
            }
        }

         => {}
    }, 

     => {
         {
             {
                return true
            }
            const provider = followUpPromptsOptions[selectedProvider]
            f {
                 {
                    const param = inputParam.name === 'credential' ? 'credentialId' : inputParam.name
                    if (
                        !followUpPromptsConfig[selectedProvider] ||
                        !followUpPromptsConfig[selectedProvider][param] ||
                        followUpPromptsConfig[selectedProvider][param] === ''
                    ) {
                        return true
                    }
                }
            }
        }
        return false
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'start',
                    gap: 3,
                    mb: 2
                }}
            >
                <SwitchInput
                    label='Enable Follow-up Prompts'
                     => han}
                    value={followUpPromptsConfig.status}
                />
                {followUpPromptsConfig && followUpPromptsConfig.status && (
                    <>
                        <Typography variant='h5'>Providers</Typography>
                        <FormControl fullWidth>
                            <Select
                                size='small'
                                value={selectedProvider}
                                onChange={handleSelectedProviderChange}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: theme?.customization?.isDarkMode ? '#fff' : 'inherit'
                                    }
                                }}
                            >
                                {Obje.map((p => (
                                    <MenuItem key={provider.name} value={provider.name}>
                                        {provider.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {selectedProvider !== 'none' && (
                            <>
                                <ListItem sx={{ p: 0 }} alignItems='center'>
                                    <ListItemAvatar>
                                        <div
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: '50%',
                                                backgroundColor: 'white'
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    padding: 10,
                                                    objectFit: 'contain'
                                                }}
                                                alt='AI'
                                                src={followUpPromptsOptions[selectedProvider].icon}
                                            />
                                        </div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={followUpPromptsOptions[selectedProvider].label}
                                        secondary={
                                            <a target='_blank' rel='noreferrer' href={followUpPromptsOptions[selectedProvider].url}>
                                                {followUpPromptsOptions[selectedProvider].url}
                                            </a>
                                        }
                                    />
                                </ListItem>
                                {f => (
                                    <Box key={index} sx={{ px: 2, width: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Typography>
                                                {inputParam.label}
                                                {!inputParam.optional && <span style={{ color: 'red' }}>&nbsp;*</span>}
                                                {inputParam.description && (
                                                    <TooltipWithParser style={{ marginLeft: 10 }} title={inputParam.description} />
                                                )}
                                            </Typography>
                                        </div>
                                        {inputParam.type === 'credential' && (
                                            <CredentialInputHandler
                                                key={`${selectedProvider}-${inputParam.name}`}
                                                data={
                                                    followUpPromptsConfig[selectedProvider]?.credentialId
                                                        ? { credential: followUpPromptsConfig[selectedProvider].credentialId }
                                                        : {}
                                                }
                                                inputParam={inputParam}
                                                 => }
                                            />
                                        )}

                                        {(inputParam.type === 'string' ||
                                            inputParam.type === 'password' ||
                                             && (
                                            <Input
                                                key={`${selectedProvider}-${inputParam.name}`}
                                                inputParam={inputParam}
                                                 => }
                                                value={
                                                    followUpPromptsConfig[selectedProvider] &&
                                                    followUpPromptsConfig[selectedProvider][inputParam.name]
                                                        ? followUpPromptsConfig[selectedProvider][inputParam.name]
                                                        : inputParam.default ?? ''
                                                }
                                            />
                                        )}

                                        {inputParam.type === 'asyncOptions' && (
                                            <>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <AsyncDropdown
                                                        key={`${selectedProvider}-${inputParam.name}`}
                                                        name={inputParam.name}
                                                        nodeData={{
                                                            name: followUpPromptsOptions[selectedProvider].name,
                                                            inputParams: followUpPromptsOptions[selectedProvider].inputs
                                                        }}
                                                        value={
                                                            followUpPromptsConfig[selectedProvider] &&
                                                            followUpPromptsConfig[selectedProvider][inputParam.name]
                                                                ? followUpPromptsConfig[selectedProvider][inputParam.name]
                                                                : inputParam.default ?? 'choose an option'
                                                        }
                                                         => }
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {inputParam.type === 'options' && (
                                            <Dropdown
                                                name={inputParam.name}
                                                options={inputParam.options}
                                                 => }
                                                value={
                                                    followUpPromptsConfig[selectedProvider] &&
                                                    followUpPromptsConfig[selectedProvider][inputParam.name]
                                                        ? followUpPromptsConfig[selectedProvider][inputParam]
                                                        : inputParam.default ?? 'choose an option'
                                                }
                                            />
                                        )}
                                    </Box>
                                ))}
                            </>
                        )}
                    </>
                )}
            </Box>
            <Style} variant='contained' onClick={onSave}>
                Save
            </StyledButton>
        </>
    )
}

FollowUpPrompts.propTypes = {
    dialogProps: PropTypes.object
}

export default FollowUpPrompts
