import { convertMultiOptionsToStringArray, getCredentialData, getCredentialParam, refreshOAuth2Token } from '../../../src/utils'
import { createGmailTools } from './core'
import type { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'

class Gmail_Tools implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Gmail'
        this.name = 'gmail'
        this.version = 1.0
        this.type = 'Gmail'
        this.icon = 'gmail.svg'
        this.category = 'Tools'
        this.description = 'Perform Gmail operations for drafts, messages, labels, and threads'
        this.baseClasses = [this.type, 'Tool']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['gmailOAuth2']
        }
        this.inputs = [
            {
                label: 'Type',
                name: 'gmailType',
                type: 'options',
                options: [
                    {
                        label: 'Drafts',
                        name: 'drafts'
                    },
                    {
                        label: 'Messages',
                        name: 'messages'
                    },
                    {
                        label: 'Labels',
                        name: 'labels'
                    },
                    {
                        label: 'Threads',
                        name: 'threads'
                    }
                ]
            },
            // Draft Actions
            {
                label: 'Draft Actions',
                name: 'draftActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Drafts',
                        name: 'listDrafts'
                    },
                    {
                        label: 'Create Draft',
                        name: 'createDraft'
                    },
                    {
                        label: 'Get Draft',
                        name: 'getDraft'
                    },
                    {
                        label: 'Update Draft',
                        name: 'updateDraft'
                    },
                    {
                        label: 'Send Draft',
                        name: 'sendDraft'
                    },
                    {
                        label: 'Delete Draft',
                        name: 'deleteDraft'
                    }
                ],
                show: {
                    gmailType: ['drafts']
                }
            },
            // Message Actions
            {
                label: 'Message Actions',
                name: 'messageActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Messages',
                        name: 'listMessages'
                    },
                    {
                        label: 'Get Message',
                        name: 'getMessage'
                    },
                    {
                        label: 'Send Message',
                        name: 'sendMessage'
                    },
                    {
                        label: 'Modify Message',
                        name: 'modifyMessage'
                    },
                    {
                        label: 'Trash Message',
                        name: 'trashMessage'
                    },
                    {
                        label: 'Untrash Message',
                        name: 'untrashMessage'
                    },
                    {
                        label: 'Delete Message',
                        name: 'deleteMessage'
                    }
                ],
                show: {
                    gmailType: ['messages']
                }
            },
            // Label Actions
            {
                label: 'Label Actions',
                name: 'labelActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Labels',
                        name: 'listLabels'
                    },
                    {
                        label: 'Get Label',
                        name: 'getLabel'
                    },
                    {
                        label: 'Create Label',
                        name: 'createLabel'
                    },
                    {
                        label: 'Update Label',
                        name: 'updateLabel'
                    },
                    {
                        label: 'Delete Label',
                        name: 'deleteLabel'
                    }
                ],
                show: {
                    gmailType: ['labels']
                }
            },
            // Thread Actions
            {
                label: 'Thread Actions',
                name: 'threadActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Threads',
                        name: 'listThreads'
                    },
                    {
                        label: 'Get Thread',
                        name: 'getThread'
                    },
                    {
                        label: 'Modify Thread',
                        name: 'modifyThread'
                    },
                    {
                        label: 'Trash Thread',
                        name: 'trashThread'
                    },
                    {
                        label: 'Untrash Thread',
                        name: 'untrashThread'
                    },
                    {
                        label: 'Delete Thread',
                        name: 'deleteThread'
                    }
                ],
                show: {
                    gmailType: ['threads']
                }
            },
            // DRAFT PARAMETERS
            // List Drafts Parameters
            {
                label: 'Max Results',
                name: 'draftMaxResults',
                type: 'number',
                description: 'Maximum number of drafts to return',
                default: 100,
                show: {
                    draftActions: ['listDrafts']
                },
                additionalParams: true,
                optional: true
            },
            // Create Draft Parameters
            {
                label: 'To',
                name: 'draftTo',
                type: 'string',
                , comma-separated',
                placeholder: 'user1@example.com,user2@example.com',
                show: {
                    draftActions: ['createDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Subject',
                name: 'draftSubject',
                type: 'string',
                description: 'Email subject',
                placeholder: 'Email Subject',
                show: {
                    draftActions: ['createDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Body',
                name: 'draftBody',
                type: 'string',
                description: 'Email body content',
                placeholder: 'Email content',
                rows: 4,
                show: {
                    draftActions: ['createDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'CC',
                name: 'draftCc',
                type: 'string',
                , comma-separated',
                placeholder: 'cc1@example.com,cc2@example.com',
                show: {
                    draftActions: ['createDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'BCC',
                name: 'draftBcc',
                type: 'string',
                , comma-separated',
                placeholder: 'bcc1@example.com,bcc2@example.com',
                show: {
                    draftActions: ['createDraft']
                },
                additionalParams: true,
                optional: true
            },
            // Draft ID for Get/Update/Send/Delete
            {
                label: 'Draft ID',
                name: 'draftId',
                type: 'string',
                description: 'ID of the draft',
                show: {
                    draftActions: ['getDraft', 'updateDraft', 'sendDraft', 'deleteDraft']
                },
                additionalParams: true,
                optional: true
            },
            // Update Draft Parameters
            {
                label: 'T',
                name: 'draftUpdateTo',
                type: 'string',
                , comma-separated',
                placeholder: 'user1@example.com,user2@example.com',
                show: {
                    draftActions: ['updateDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Subje',
                name: 'draftUpdateSubject',
                type: 'string',
                description: 'Email subject',
                placeholder: 'Email Subject',
                show: {
                    draftActions: ['updateDraft']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'B',
                name: 'draftUpdateBody',
                type: 'string',
                description: 'Email body content',
                placeholder: 'Email content',
                rows: 4,
                show: {
                    draftActions: ['updateDraft']
                },
                additionalParams: true,
                optional: true
            },
            // MESSAGE PARAMETERS
            // List Messages Parameters
            {
                label: 'Max Results',
                name: 'messageMaxResults',
                type: 'number',
                description: 'Maximum number of messages to return',
                default: 100,
                show: {
                    messageActions: ['listMessages']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Query',
                name: 'messageQuery',
                type: 'string',
                ',
                placeholder: 'is:unread from:example@gmail.com',
                show: {
                    messageActions: ['listMessages']
                },
                additionalParams: true,
                optional: true
            },
            // Send Message Parameters
            {
                label: 'To',
                name: 'messageTo',
                type: 'string',
                , comma-separated',
                placeholder: 'user1@example.com,user2@example.com',
                show: {
                    messageActions: ['sendMessage']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Subject',
                name: 'messageSubject',
                type: 'string',
                description: 'Email subject',
                placeholder: 'Email Subject',
                show: {
                    messageActions: ['sendMessage']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Body',
                name: 'messageBody',
                type: 'string',
                description: 'Email body content',
                placeholder: 'Email content',
                rows: 4,
                show: {
                    messageActions: ['sendMessage']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'CC',
                name: 'messageCc',
                type: 'string',
                , comma-separated',
                placeholder: 'cc1@example.com,cc2@example.com',
                show: {
                    messageActions: ['sendMessage']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'BCC',
                name: 'messageBcc',
                type: 'string',
                , comma-separated',
                placeholder: 'bcc1@example.com,bcc2@example.com',
                show: {
                    messageActions: ['sendMessage']
                },
                additionalParams: true,
                optional: true
            },
            // Message ID for Get/Modify/Trash/Untrash/Delete
            {
                label: 'Message ID',
                name: 'messageId',
                type: 'string',
                description: 'ID of the message',
                show: {
                    messageActions: ['getMessage', 'modifyMessage', 'trashMessage', 'untrashMessage', 'deleteMessage']
                },
                additionalParams: true,
                optional: true
            },
            // Message Label Modification
            {
                label: 'Add Label IDs',
                name: 'messageAddLabelIds',
                type: 'string',
                description: 'Comma-separated label IDs to add',
                placeholder: 'INBOX,STARRED',
                show: {
                    messageActions: ['modifyMessage']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Remove Label IDs',
                name: 'messageRemoveLabelIds',
                type: 'string',
                description: 'Comma-separated label IDs to remove',
                placeholder: 'UNREAD,SPAM',
                show: {
                    messageActions: ['modifyMessage']
                },
                additionalParams: true,
                optional: true
            },
            // LABEL PARAMETERS
            // Create Label Parameters
            {
                label: 'Label Name',
                name: 'labelName',
                type: 'string',
                description: 'Name of the label',
                placeholder: 'Important',
                show: {
                    labelActions: ['createLabel', 'updateLabel']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Label Color',
                name: 'labelColor',
                type: 'string',
                ',
                placeholder: '#ff0000',
                show: {
                    labelActions: ['createLabel', 'updateLabel']
                },
                additionalParams: true,
                optional: true
            },
            // Label ID for Get/Update/Delete
            {
                label: 'Label ID',
                name: 'labelId',
                type: 'string',
                description: 'ID of the label',
                show: {
                    labelActions: ['getLabel', 'updateLabel', 'deleteLabel']
                },
                additionalParams: true,
                optional: true
            },
            // THREAD PARAMETERS
            // List Threads Parameters
            {
                label: 'Max Results',
                name: 'threadMaxResults',
                type: 'number',
                description: 'Maximum number of threads to return',
                default: 100,
                show: {
                    threadActions: ['listThreads']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Query',
                name: 'threadQuery',
                type: 'string',
                ',
                placeholder: 'is:unread from:example@gmail.com',
                show: {
                    threadActions: ['listThreads']
                },
                additionalParams: true,
                optional: true
            },
            // Thread ID for Get/Modify/Trash/Untrash/Delete
            {
                label: 'Thread ID',
                name: 'threadId',
                type: 'string',
                description: 'ID of the thread',
                show: {
                    threadActions: ['getThread', 'modifyThread', 'trashThread', 'untrashThread', 'deleteThread']
                },
                additionalParams: true,
                optional: true
            },
            // Thread Label Modification
            {
                label: 'Add Label IDs',
                name: 'threadAddLabelIds',
                type: 'string',
                description: 'Comma-separated label IDs to add',
                placeholder: 'INBOX,STARRED',
                show: {
                    threadActions: ['modifyThread']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Remove Label IDs',
                name: 'threadRemoveLabelIds',
                type: 'string',
                description: 'Comma-separated label IDs to remove',
                placeholder: 'UNREAD,SPAM',
                show: {
                    threadActions: ['modifyThread']
                },
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        let 
        
        

         {
            th
        }

        // Get all actions based on type
        const gmailType = nodeData.inputs?.gmailType as string
        let actions: string[] = []

         {
            a
        } el {
            a
        } el {
            a
        } el {
            a
        }

        

        // Create and return tools based on selected actions
        const tools = createGmailTools({
            actions,
            accessToken,
            defaultParams
        })

        return tools
    }

    t: Record<string, any> {
        // Collect default parameters from inputs
        const defaultParams: Record<string, any> = {}

        // Draft parameters
         defaultParams.draftMaxResults = nodeData.inputs.draftMaxResults
         defaultParams.draftTo = nodeData.inputs.draftTo
         defaultParams.draftSubject = nodeData.inputs.draftSubject
         defaultParams.draftBody = nodeData.inputs.draftBody
         defaultParams.draftCc = nodeData.inputs.draftCc
         defaultParams.draftBcc = nodeData.inputs.draftBcc
         defaultParams.draftId = nodeData.inputs.draftId
         defaultParams.draftUpdateTo = nodeData.inputs.draftUpdateTo
         defaultParams.draftUpdateSubject = nodeData.inputs.draftUpdateSubject
         defaultParams.draftUpdateBody = nodeData.inputs.draftUpdateBody

        // Message parameters
         defaultParams.messageMaxResults = nodeData.inputs.messageMaxResults
         defaultParams.messageQuery = nodeData.inputs.messageQuery
         defaultParams.messageTo = nodeData.inputs.messageTo
         defaultParams.messageSubject = nodeData.inputs.messageSubject
         defaultParams.messageBody = nodeData.inputs.messageBody
         defaultParams.messageCc = nodeData.inputs.messageCc
         defaultParams.messageBcc = nodeData.inputs.messageBcc
         defaultParams.messageId = nodeData.inputs.messageId
         defaultParams.messageAddLabelIds = nodeData.inputs.messageAddLabelIds
         defaultParams.messageRemoveLabelIds = nodeData.inputs.messageRemoveLabelIds

        // Label parameters
         defaultParams.labelName = nodeData.inputs.labelName
         defaultParams.labelColor = nodeData.inputs.labelColor
         defaultParams.labelId = nodeData.inputs.labelId

        // Thread parameters
         defaultParams.threadMaxResults = nodeData.inputs.threadMaxResults
         defaultParams.threadQuery = nodeData.inputs.threadQuery
         defaultParams.threadId = nodeData.inputs.threadId
         defaultParams.threadAddLabelIds = nodeData.inputs.threadAddLabelIds
         defaultParams.threadRemoveLabelIds = nodeData.inputs.threadRemoveLabelIds

        return defaultParams
    }
}

module.exports = { nodeClass: Gmail_Tools }
