import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// MUI
import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Chip,
    Grid,
    InputLabel,
    List,
    ListItemButton,
    ListItemText,
    OutlinedInput,
    Select,
    Typography,
    Stack,
    IconButton,
    FormControl,
    Checkbox,
    MenuItem
} from '@mui/material'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import ClearIcon from '@mui/icons-material/Clear'
import { styled } from '@mui/material/styles'

//Project Import
import { StyledButton } from '@/ui-component/button/StyledButton'
import { MemoizedReactMarkdown } from '@/ui-component/markdown/MemoizedReactMarkdown'
import promptEmptySVG from '@/assets/images/prompt_empty.svg'

import useApi from '@/hooks/useApi'
import promptApi from '@/api/prompt'
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'

 => {
    . {
        
    }, 
}

 => <Mu(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:n': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}))

 => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
    ba' : '',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        t'
    },
    '& .MuiAccordionSummary-content': {
        ma
    }
}))

(({ theme }) => ({
    pa,
    b'
}))

 => {
    
    
     => 
    

    u => {
         {
            
        } el
         => 

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
            getAva
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
         {
            
             han
            
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    const ITEM_HEIGHT = 48
    const ITEM_PADDING_TOP = 8
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    }

    const models = [
        { id: 101, name: 'anthropic:claude-instant-1' },
        { id: 102, name: 'anthropic:claude-instant-1.2' },
        { id: 103, name: 'anthropic:claude-2' },
        { id: 104, name: 'google:palm-2-chat-bison' },
        { id: 105, name: 'google:palm-2-codechat-bison' },
        { id: 106, name: 'google:palm-2-text-bison' },
        { id: 107, name: 'meta:llama-2-13b-chat' },
        { id: 108, name: 'meta:llama-2-70b-chat' },
        { id: 109, name: 'openai:gpt-3.5-turbo' },
        { id: 110, name: 'openai:gpt-4' },
        { id: 111, name: 'openai:text-davinci-003' }
    ]
    

    const usecases = [
        { id: 201, name: 'Agents' },
        { id: 202, name: 'Agent Stimulation' },
        { id: 203, name: 'Autonomous agents' },
        { id: 204, name: 'Classification' },
        { id: 205, name: 'Chatbots' },
        { id: 206, name: 'Code understanding' },
        { id: 207, name: 'Code writing' },
        { id: 208, name: 'Evaluation' },
        { id: 209, name: 'Extraction' },
        { id: 210, name: 'Interacting with APIs' },
        { id: 211, name: 'Multi-modal' },
        { id: 212, name: 'QA over documents' },
        { id: 213, name: 'Self-checking' },
        { id: 214, name: 'SQL' },
        { id: 215, name: 'Summarization' },
        { id: 216, name: 'Tagging' }
    ]
    

    const languages = [
        { id: 301, name: 'Chinese' },
        { id: 302, name: 'English' },
        { id: 303, name: 'French' },
        { id: 304, name: 'German' },
        { id: 305, name: 'Russian' },
        { id: 306, name: 'Spanish' }
    ]
    
    
    

    
    

     => (event,  => {
        const accordians = [...accordionExpanded]
          => a)
        else {
            a
            
        }
    }

     => {
        const prompt = overridePromptNameList.length ? overridePromptNameList[index] : availablePrompNameList[index]

         {
            const createResp = await promptApi.getPrompt({
                promptName: prompt.full_name
            })
             {
                prompt.detailed = createResp.data.templates
            }
        }
        
    }

     => {
        let tags = promptType === 'template' ? 'StringPromptTemplate&' : 'ChatPromptTemplate&'
        m => {
            tags += `tags=${item.name}&`
        })
        u => {
            tags += `tags=${item.name}&`
        })
        language.f => {
            tags += `tags=${item.name}&`
        })
        
        getAva
    }

     => {
        let duplicateRemoved = []

        value.f => {
             => .length === 1) {
                
            }
        })
        return duplicateRemoved
    }

     => {
        const {
            target: { value }
        } = event

        )
    }

     => {
        const {
            target: { value }
        } = event

        )
    }
     => {
        const {
            target: { value }
        } = event

        )
    }

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth={'lg'}
            aria-labelledby='prompt-dialog-title'
            aria-describedby='prompt-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='prompt-dialog-title'>
                Lang
            </DialogTitle>
            <DialogContent dividers sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, pt: 1, alignItems: 'center' }}>
                    <FormControl sx={{ mr: 1, width: '30%' }}>
                        <InputLabel size='small' id='model-checkbox-label'>
                            Model
                        </InputLabel>
                        <Select
                            id='model-checkbox'
                            labelId='model-checkbox-label'
                            multiple
                            size='small'
                            value={modelName}
                            onChange={handleModelChange}
                            input={<OutlinedInput label='Model' />}
                             =>  => x.name).j}
                            endAdornment={
                                modelName.length ? (
                                    <I => }>
                                        <ClearIcon style={{ width: 20, height: 20 }} />
                                    </IconButton>
                                ) : (
                                    false
                                )
                            }
                            sx={{
                                '.MuiSvgIcon-root ': {
                                    fill: customization.isDarkMode ? 'white !important' : ''
                                }
                            }}
                            MenuProps={MenuProps}
                        >
                            {m => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Che =>  >= 0} />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ mr: 1, width: '30%' }}>
                        <InputLabel size='small' id='usecase-checkbox-label'>
                            Usecase
                        </InputLabel>
                        <Select
                            autoWidth={false}
                            labelId='usecase-checkbox-label'
                            id='usecase-checkbox'
                            multiple
                            size='small'
                            value={usecase}
                            onChange={handleUsecaseChange}
                            input={<OutlinedInput label='Usecase' />}
                             =>  => x.name).j}
                            endAdornment={
                                usecase.length ? (
                                    <I => }>
                                        <ClearIcon style={{ width: 20, height: 20 }} />
                                    </IconButton>
                                ) : (
                                    false
                                )
                            }
                            sx={{
                                '.MuiSvgIcon-root ': {
                                    fill: customization.isDarkMode ? 'white !important' : ''
                                }
                            }}
                            MenuProps={MenuProps}
                        >
                            {u => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Che =>  >= 0} />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ mr: 1, width: '30%' }}>
                        <InputLabel size='small' id='language-checkbox-label'>
                            Language
                        </InputLabel>
                        <Select
                            labelId='language-checkbox-label'
                            id='language-checkbox'
                            multiple
                            size='small'
                            value={language}
                            onChange={handleLanguageChange}
                            input={<OutlinedInput label='language' />}
                             =>  => x.name).j}
                            endAdornment={
                                language.length ? (
                                    <I => }>
                                        <ClearIcon style={{ width: 20, height: 20 }} />
                                    </IconButton>
                                ) : (
                                    false
                                )
                            }
                            sx={{
                                '.MuiSvgIcon-root ': {
                                    fill: customization.isDarkMode ? 'white !important' : ''
                                }
                            }}
                            MenuProps={MenuProps}
                        >
                            {language => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Che =>  >= 0} />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '10%' }}>
                        <Button disableElevation variant='outlined' onClick={fetchPrompts}>
                            Search
                        </Button>
                    </FormControl>
                </Box>

                {loading && (
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: '100%', pb: 3 }} flexDirection='column'>
                        <Box sx={{ p: 5, height: 'auto' }}>
                            <img style={{ objectFit: 'cover', height: '20vh', width: 'auto' }} src={promptEmptySVG} alt='promptEmptySVG' />
                        </Box>
                        <div>Please wait....loading Prompts</div>
                    </Stack>
                )}
                {!loading && availablePrompNameList && availablePrompNameList.length === 0 && (
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: '100%', pb: 3 }} flexDirection='column'>
                        <Box sx={{ p: 5, height: 'auto' }}>
                            <img style={{ objectFit: 'cover', height: '20vh', width: 'auto' }} src={promptEmptySVG} alt='promptEmptySVG' />
                        </Box>
                        <div>No Available Prompts</div>
                    </Stack>
                )}
                {!loading && availablePrompNameList && availablePrompNameList.length > 0 && (
                    <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }} flexDirection='column'>
                        <Box sx={{ width: '100%', p: 2 }}>
                            <Grid xs={12} container spacing={1} justifyContent='center' alignItems='center'>
                                <Grid xs={4} item sx={{ textAlign: 'left' }}>
                                    <Box sx={{ width: '100%', maxWidth: 360 }}>
                                        <Card variant='outlined' sx={{ height: 470, overflow: 'auto', borderRadius: 0 }}>
                                            <CardContent sx={{ p: 1 }}>
                                                <Typography sx={{ fontSize: 10 }} color='text.secondary' gutterBottom>
                                                    Available Prompts
                                                </Typography>
                                                <List component='nav' aria-label='secondary mailbox folder'>
                                                    {ava => (
                                                        <ListItemButton
                                                            key={item.id}
                                                            selected={item.id === selectedPrompt?.id}
                                                             => han}
                                                        >
                                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                                <Typography sx={{ fontSize: 16, p: 1, fontWeight: 500 }}>
                                                                    {item.full_name}
                                                                </Typography>
                                                                <div
                                                                    style={{
                                                                        display: 'flex',
                                                                        flexDirection: 'row',
                                                                        flexWrap: 'wrap',
                                                                        marginTop: 5
                                                                    }}
                                                                >
                                                                    { => (
                                                                        <Chip
                                                                            key={index}
                                                                            label={tag}
                                                                            style={{ marginRight: 5, marginBottom: 5 }}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Grid>
                                <Grid xs={8} item sx={{ textAlign: 'left' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Card sx={{ height: 470, overflow: 'auto' }}>
                                            <CardContent sx={{ p: 0.5 }}>
                                                <Accordion
                                                    expan}
                                                    }
                                                >
                                                    <AccordionSummary
                                                        aria-controls='panel2d-content'
                                                        expandIcon={<ExpandMoreIcon />}
                                                        id='panel2d-header'
                                                    >
                                                        <Typography>Prompt</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography sx={{ wordWrap: 'true' }} color='text.primary'>
                                                            { => (
                                                                <>
                                                                    <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
                                                                        {}
                                                                    </Typography>
                                                                    <Typography>
                                                                        <p
                                                                            style={{
                                                                                whiteSpace: 'pre-wrap -moz-pre-wrap -pre-wrap -o-pre-wrap',
                                                                                wordWrap: 'break-word',
                                                                                fontFamily: 'inherit',
                                                                                wordSpacing: '0.1rem',
                                                                                lineHeight: '1.5rem'
                                                                            }}
                                                                        >
                                                                            <NewLineToBr>{item.template}</NewLineToBr>
                                                                        </p>
                                                                    </Typography>
                                                                </>
                                                            ))}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion
                                                    expan}
                                                    }
                                                >
                                                    <AccordionSummary
                                                        aria-controls='panel1d-content'
                                                        expandIcon={<ExpandMoreIcon />}
                                                        id='panel1d-header'
                                                    >
                                                        <Typography>Description</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography
                                                            sx={{ wordWrap: 'true', wordSpacing: '0.1rem', lineHeight: '1.5rem' }}
                                                            color='text.primary'
                                                        >
                                                            {selectedPrompt?.description}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion
                                                    expan}
                                                    }
                                                >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls='panel3d-content'
                                                        id='panel3d-header'
                                                    >
                                                        <Typography>Readme</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div
                                                            style={{
                                                                lineHeight: 1.75,
                                                                '& a': {
                                                                    display: 'block',
                                                                    marginRight: '2.5rem',
                                                                    wordWrap: 'break-word',
                                                                    color: '#16bed7',
                                                                    fontWeight: 500
                                                                },
                                                                '& a:hover': { opacity: 0.8 },
                                                                '& code': {
                                                                    color: '#0ab126',
                                                                    fontWeight: 500,
                                                                    whiteSpace: 'pre-wrap !important'
                                                                }
                                                            }}
                                                        >
                                                            <MemoizedReactMarkdown>{selectedPrompt?.readme}</MemoizedReactMarkdown>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                )}
            </DialogContent>
            {availablePrompNameList && availablePrompNameList.length > 0 && (
                <DialogActions>
                    <Button onClick={onCancel}>Cancel</Button>
                    <StyledButton
                        disabled={!selectedPrompt?.detailed}
                         => }
                        variant='contained'
                    >
                        Load
                    </StyledButton>
                </DialogActions>
            )}
        </Dialog>
    ) : null

    
}

PromptLangsmithHubDialog.propTypes = {
    promptType: PropTypes.string,
    show: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
}

export default PromptLangsmithHubDialog
