import { convertMultiOptionsToStringArray, getCredentialData, getCredentialParam } from '../../../src/utils'
import { createJiraTools } from './core'
import type { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'

class Jira_Tools implements INode {
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
        this.label = 'Jira'
        this.name = 'jiraTool'
        this.version = 1.0
        this.type = 'Jira'
        this.icon = 'jira.svg'
        this.category = 'Tools'
        this.description = 'Perform Jira operations for issues, comments, and users'
        this.baseClasses = [this.type, 'Tool']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['jiraApi']
        }
        this.inputs = [
            {
                label: 'Host',
                name: 'jiraHost',
                type: 'string',
                placeholder: 'https://example.atlassian.net'
            },
            {
                label: 'Type',
                name: 'jiraType',
                type: 'options',
                options: [
                    {
                        label: 'Issues',
                        name: 'issues'
                    },
                    {
                        label: 'Issue Comments',
                        name: 'comments'
                    },
                    {
                        label: 'Users',
                        name: 'users'
                    }
                ]
            },
            // Issue Actions
            {
                label: 'Issue Actions',
                name: 'issueActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Issues',
                        name: 'listIssues'
                    },
                    {
                        label: 'Create Issue',
                        name: 'createIssue'
                    },
                    {
                        label: 'Get Issue',
                        name: 'getIssue'
                    },
                    {
                        label: 'Update Issue',
                        name: 'updateIssue'
                    },
                    {
                        label: 'Delete Issue',
                        name: 'deleteIssue'
                    },
                    {
                        label: 'Assign Issue',
                        name: 'assignIssue'
                    },
                    {
                        label: 'Transition Issue',
                        name: 'transitionIssue'
                    }
                ],
                show: {
                    jiraType: ['issues']
                }
            },
            // Comment Actions
            {
                label: 'Comment Actions',
                name: 'commentActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'List Comments',
                        name: 'listComments'
                    },
                    {
                        label: 'Create Comment',
                        name: 'createComment'
                    },
                    {
                        label: 'Get Comment',
                        name: 'getComment'
                    },
                    {
                        label: 'Update Comment',
                        name: 'updateComment'
                    },
                    {
                        label: 'Delete Comment',
                        name: 'deleteComment'
                    }
                ],
                show: {
                    jiraType: ['comments']
                }
            },
            // User Actions
            {
                label: 'User Actions',
                name: 'userActions',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Search Users',
                        name: 'searchUsers'
                    },
                    {
                        label: 'Get User',
                        name: 'getUser'
                    },
                    {
                        label: 'Create User',
                        name: 'createUser'
                    },
                    {
                        label: 'Update User',
                        name: 'updateUser'
                    },
                    {
                        label: 'Delete User',
                        name: 'deleteUser'
                    }
                ],
                show: {
                    jiraType: ['users']
                }
            },
            // ISSUE PARAMETERS
            {
                label: 'Project Key',
                name: 'projectKey',
                type: 'string',
                placeholder: 'PROJ',
                description: 'Project key for the issue',
                show: {
                    issueActions: ['listIssues', 'createIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Issue Type',
                name: 'issueType',
                type: 'string',
                placeholder: 'Bug, Task, Story',
                description: 'Type of issue to create',
                show: {
                    issueActions: ['createIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Summary',
                name: 'issueSummary',
                type: 'string',
                description: 'Issue summary/title',
                show: {
                    issueActions: ['createIssue', 'updateIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Description',
                name: 'issueDescription',
                type: 'string',
                description: 'Issue description',
                show: {
                    issueActions: ['createIssue', 'updateIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Priority',
                name: 'issuePriority',
                type: 'string',
                placeholder: 'Highest, High, Medium, Low, Lowest',
                description: 'Issue priority',
                show: {
                    issueActions: ['createIssue', 'updateIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Issue Key',
                name: 'issueKey',
                type: 'string',
                placeholder: 'PROJ-123',
                ',
                show: {
                    issueActions: ['getIssue', 'updateIssue', 'deleteIssue', 'assignIssue', 'transitionIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Assignee Account ID',
                name: 'assigneeAccountId',
                type: 'string',
                description: 'Account ID of the user to assign',
                show: {
                    issueActions: ['assignIssue', 'createIssue', 'updateIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Transition ID',
                name: 'transitionId',
                type: 'string',
                description: 'ID of the transition to execute',
                show: {
                    issueActions: ['transitionIssue']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'JQL Query',
                name: 'jqlQuery',
                type: 'string',
                placeholder: 'project = PROJ AND status = "To Do"',
                description: 'JQL query for filtering issues',
                show: {
                    issueActions: ['listIssues']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Max Results',
                name: 'issueMaxResults',
                type: 'number',
                default: 50,
                description: 'Maximum number of issues to return',
                show: {
                    issueActions: ['listIssues']
                },
                additionalParams: true,
                optional: true
            },
            // COMMENT PARAMETERS
            {
                label: 'I',
                name: 'commentIssueKey',
                type: 'string',
                placeholder: 'PROJ-123',
                description: 'Issue key for comment operations',
                show: {
                    commentActions: ['listComments', 'createComment']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Comment Text',
                name: 'commentText',
                type: 'string',
                description: 'Comment content',
                show: {
                    commentActions: ['createComment', 'updateComment']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Comment ID',
                name: 'commentId',
                type: 'string',
                description: 'ID of the comment',
                show: {
                    commentActions: ['getComment', 'updateComment', 'deleteComment']
                },
                additionalParams: true,
                optional: true
            },
            // USER PARAMETERS
            {
                label: 'Search Query',
                name: 'userQuery',
                type: 'string',
                placeholder: 'john.doe',
                description: 'Query string for user search',
                show: {
                    userActions: ['searchUsers']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Account ID',
                name: 'userAccountId',
                type: 'string',
                description: 'User account ID',
                show: {
                    userActions: ['getUser', 'updateUser', 'deleteUser']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Email Address',
                name: 'userEmail',
                type: 'string',
                placeholder: 'user@example.com',
                description: 'User email address',
                show: {
                    userActions: ['createUser', 'updateUser']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'Display Name',
                name: 'userDisplayName',
                type: 'string',
                description: 'User display name',
                show: {
                    userActions: ['createUser', 'updateUser']
                },
                additionalParams: true,
                optional: true
            },
            {
                label: 'User Max Results',
                name: 'userMaxResults',
                type: 'number',
                default: 50,
                description: 'Maximum number of users to return',
                show: {
                    userActions: ['searchUsers']
                },
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        let 
        
        
        const jiraHost = nodeData.inputs?.jiraHost as string

         {
            th
        }

         {
            th
        }

         {
            th
        }

        // Get all actions based on type
        const jiraType = nodeData.inputs?.jiraType as string
        let actions: string[] = []

         {
            a
        } el {
            a
        } el {
            a
        }

        

        // Create and return tools based on selected actions
        const tools = createJiraTools({
            actions,
            username,
            accessToken,
            jiraHost,
            defaultParams
        })

        return tools
    }

    t: Record<string, any> {
        // Collect default parameters from inputs
        const defaultParams: Record<string, any> = {}

        // Issue parameters
         defaultParams.projectKey = nodeData.inputs.projectKey
         defaultParams.issueType = nodeData.inputs.issueType
         defaultParams.issueSummary = nodeData.inputs.issueSummary
         defaultParams.issueDescription = nodeData.inputs.issueDescription
         defaultParams.issuePriority = nodeData.inputs.issuePriority
         defaultParams.issueKey = nodeData.inputs.issueKey
         defaultParams.assigneeAccountId = nodeData.inputs.assigneeAccountId
         defaultParams.transitionId = nodeData.inputs.transitionId
         defaultParams.jqlQuery = nodeData.inputs.jqlQuery
         defaultParams.issueMaxResults = nodeData.inputs.issueMaxResults

        // Comment parameters
         defaultParams.commentIssueKey = nodeData.inputs.commentIssueKey
         defaultParams.commentText = nodeData.inputs.commentText
         defaultParams.commentId = nodeData.inputs.commentId

        // User parameters
         defaultParams.userQuery = nodeData.inputs.userQuery
         defaultParams.userAccountId = nodeData.inputs.userAccountId
         defaultParams.userEmail = nodeData.inputs.userEmail
         defaultParams.userDisplayName = nodeData.inputs.userDisplayName
         defaultParams.userMaxResults = nodeData.inputs.userMaxResults

        return defaultParams
    }
}

module.exports = { nodeClass: Jira_Tools }
