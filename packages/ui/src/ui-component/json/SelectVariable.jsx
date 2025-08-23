import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Box, List, ListItemButton, ListItem, ListItemAvatar, ListItemText, Typography, Stack } from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar'
import robotPNG from '@/assets/images/robot.png'
import chatPNG from '@/assets/images/chathistory.png'
import diskPNG from '@/assets/images/floppy-disc.png'
import fileAttachmentPNG from '@/assets/images/fileAttachment.png'
import { baseURL } from '@/store/constant'

const sequentialStateMessagesSelection = [
    {
        primary: '$flow.state.messages',
        secondary: `All messages from the start of the conversation till now`
    },
    {
        primary: '$flow.state.<replace-with-key>',
        secondary: `Current value of the state variable with specified key`
    },
    {
        primary: '$flow.state.messages[0].content',
        secondary: `First message content`
    },
    {
        primary: '$flow.state.messages[-1].content',
        secondary: `Last message content`
    }
]

 => {
     => 

     => {
        let variablePath = node ? `${node.id}.data.instance` : prefix
        const newInput = `{{${variablePath}}}`
        
    }

    return (
        <>
            {!disabled && (
                <div style={{ flex: 30 }}>
                    <Stack flexDirection='row' sx={{ mb: 1, ml: 2, mt: 2 }}>
                        <Typography variant='h5'>Select Variable</Typography>
                    </Stack>
                    <Pe', overflowX: 'hidden' }}>
                        <Box sx={{ pl: 2, pr: 2 }}>
                            <List>
                                <ListItemButton
                                    sx={{
                                        p: 0,
                                        borderRadius: `${customization.borderRadius}px`,
                                        b',
                                        mb: 1
                                    }}
                                    disabled={disabled}
                                     => }
                                >
                                    <ListItem alignItems='center'>
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
                                                    src={robotPNG}
                                                />
                                            </div>
                                        </ListItemAvatar>
                                        <ListItemText sx={{ ml: 1 }} primary='question' secondary={`User's question from chatbox`} />
                                    </ListItem>
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        p: 0,
                                        borderRadius: `${customization.borderRadius}px`,
                                        b',
                                        mb: 1
                                    }}
                                    disabled={disabled}
                                     => }
                                >
                                    <ListItem alignItems='center'>
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
                                                    alt='chatHistory'
                                                    src={chatPNG}
                                                />
                                            </div>
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ ml: 1 }}
                                            primary='chat_history'
                                            secondary={`Past conversation history between user and AI`}
                                        />
                                    </ListItem>
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        p: 0,
                                        borderRadius: `${customization.borderRadius}px`,
                                        b',
                                        mb: 1
                                    }}
                                    disabled={disabled}
                                     => }
                                >
                                    <ListItem alignItems='center'>
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
                                                    alt='fileAttachment'
                                                    src={fileAttachmentPNG}
                                                />
                                            </div>
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ ml: 1 }}
                                            primary='file_attachment'
                                            secondary={`Files uploaded from the chat when Full File Upload is enabled on the Configuration`}
                                        />
                                    </ListItem>
                                </ListItemButton>
                                {availableNodesForVariable &&
                                    availableNodesForVariable.length > 0 &&
                                    ava => {
                                        const selectedOutputAnchor =
                                            node.data.outputAnchors.length &&
                                            node.data.outputAnchors[0].options &&
                                            n => an
                                        return (
                                            <ListItemButton
                                                key={index}
                                                sx={{
                                                    p: 0,
                                                    borderRadius: `${customization.borderRadius}px`,
                                                    b',
                                                    mb: 1
                                                }}
                                                disabled={disabled}
                                                 => }
                                            >
                                                <ListItem alignItems='center'>
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
                                                                alt={node.data.name}
                                                                src={`${baseURL}/api/v1/node-icon/${node.data.name}`}
                                                            />
                                                        </div>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        sx={{ ml: 1 }}
                                                        primary={
                                                            node.data.inputs.chainName ??
                                                            node.data.inputs.functionName ??
                                                            node.data.inputs.variableName ??
                                                            node.data.id
                                                        }
                                                        secondary={
                                                            node.data.name === 'ifElseFunction'
                                                                ? `${node.data.description}`
                                                                : `${selectedOutputAnchor?.label ?? 'output'} from ${node.data.label}`
                                                        }
                                                    />
                                                </ListItem>
                                            </ListItemButton>
                                        )
                                    })}
                                {isSequentialAgent &&
                                    (.map(( => (
                                        <ListItemButton
                                            key={index}
                                            sx={{
                                                p: 0,
                                                borderRadius: `${customization.borderRadius}px`,
                                                b',
                                                mb: 1
                                            }}
                                            disabled={disabled}
                                             => }
                                        >
                                            <ListItem alignItems='center'>
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
                                                            alt='state'
                                                            src={diskPNG}
                                                        />
                                                    </div>
                                                </ListItemAvatar>
                                                <ListItemText sx={{ ml: 1 }} primary={item.primary} secondary={item.secondary} />
                                            </ListItem>
                                        </ListItemButton>
                                    ))}
                            </List>
                        </Box>
                    </PerfectScrollbar>
                </div>
            )}
        </>
    )
}

SelectVariable.propTypes = {
    availableNodesForVariable: PropTypes.array,
    disabled: PropTypes.bool,
    onSelectAndReturnVal: PropTypes.func,
    isSequentialAgent: PropTypes.bool
}

export default SelectVariable
