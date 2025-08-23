import { z } from 'zod'
import fetch from 'node-fetch'
import { DynamicStructuredTool } from '../OpenAPIToolkit/core'
import { TOOL_ARGS_PREFIX } from '../../../src/agents'

export const desc = `Use this when you want to access Jira API for managing issues, comments, and users`

export interface Headers {
    [key: string]: string
}

export interface Body {
    [key: string]: any
}

export interface RequestParameters {
    headers?: Headers
    body?: Body
    url?: string
    description?: string
    maxOutputLength?: number
    name?: string
    actions?: string[]
    username?: string
    accessToken?: string
    jiraHost?: string
    defaultParams?: any
}

// Define schemas for different Jira operations

// Issue Schemas
const ListIssuesSchema = z.object({
    p..,
    jql: z...,
    maxRe...,
    ...
})

const CreateIssueSchema = z.object({
    p.,
    .'),
    .,
    ..,
    p..'),
    a..,
    label)..
})

const GetIssueSchema = z.object({
    .')
})

const UpdateIssueSchema = z.object({
    .'),
    ..,
    ..,
    p..,
    a..
})

const AssignIssueSchema = z.object({
    .'),
    a.
})

const TransitionIssueSchema = z.object({
    .'),
    t.
})

// Comment Schemas
const ListCommentsSchema = z.object({
    .,
    maxRe...,
    ...
})

const CreateCommentSchema = z.object({
    .,
    text: z..,
    visibility: z
        .object({
            type: z..,
            value: z..
        })
        .
        .
})

const GetCommentSchema = z.object({
    .,
    .
})

const UpdateCommentSchema = z.object({
    .,
    .,
    text: z..
})

const DeleteCommentSchema = z.object({
    .,
    .
})

// User Schemas
const SearchUsersSchema = z.object({
    que.,
    maxRe...,
    ...
})

const GetUserSchema = z.object({
    a.
})

const CreateUserSchema = z.object({
    ema.,
    .,
    u..')
})

const UpdateUserSchema = z.object({
    a.,
    ema..,
    ..
})

const DeleteUserSchema = z.object({
    a.
})

class BaseJiraTool extends DynamicStructuredTool {
    protected username: string = ''
    protected accessToken: string = ''
    protected jiraHost: string = ''

     {
        
        this.username = args.username ?? ''
        this.accessToken = args.accessToken ?? ''
        this.jiraHost = args.jiraHost ?? ''
    }

    async makeJiraRequest({
        endpoint,
        method = 'GET',
        body,
        params
    }: {
        endpoint: string
        method?: string
        body?: any
        params?: any
    }): Promise<string> {
        const url = `${this.jiraHost}/rest/api/3/${endpoint}`
        .t

        const headers = {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...this.headers
        }

        const response = await fetch(url, {
            method,
            headers,
            b : undefined
        })

         {
            
            th
        }

        
        
    }
}

// Issue Tools
class ListIssuesTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'list_issues',
            description: 'List issues from Jira using JQL query',
            schema: ListIssuesSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        

        let jql = params.jql || ''
        ) {
            jql = jql ? `p` : `project = ${params.projectKey}`
        }

         que
         que)
         que)

        }`

        try {
            
            return response
        }  {
            return `Error listing issues: ${error}`
        }
    }
}

class CreateIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'create_issue',
            description: 'Create a new issue in Jira',
            schema: CreateIssueSchema,
            baseUrl: '',
            method: 'POST',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const issueData: any = {
                fields: {
                    project: {
                        key: params.projectKey
                    },
                    issuetype: {
                        name: params.issueType
                    },
                    summary: params.summary
                }
            }

             {
                issueData.fields.description = {
                    type: 'doc',
                    version: 1,
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: params.description
                                }
                            ]
                        }
                    ]
                }
            }

             {
                issueData.fields.priority = {
                    name: params.priority
                }
            }

             {
                issueData.fields.assignee = {
                    accountId: params.assigneeAccountId
                }
            }

             {
                issueData.fields.labels = params.labels
            }

            
            return response
        }  {
            return `Error creating issue: ${error}`
        }
    }
}

class GetIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'get_issue',
            description: 'Get a specific issue from Jira',
            schema: GetIssueSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const endpoint = `issue/${params.issueKey}`
            
            return response
        }  {
            return `Error getting issue: ${error}`
        }
    }
}

class UpdateIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'update_issue',
            description: 'Update an existing issue in Jira',
            schema: UpdateIssueSchema,
            baseUrl: '',
            method: 'PUT',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const updateData: any = {
                fields: {}
            }

             updateData.fields.summary = params.summary
             {
                updateData.fields.description = {
                    type: 'doc',
                    version: 1,
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: params.description
                                }
                            ]
                        }
                    ]
                }
            }
             {
                updateData.fields.priority = {
                    name: params.priority
                }
            }
             {
                updateData.fields.assignee = {
                    accountId: params.assigneeAccountId
                }
            }

            const endpoint = `issue/${params.issueKey}`
            
            return response || 'Issue updated successfully'
        }  {
            return `Error updating issue: ${error}`
        }
    }
}

class DeleteIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'delete_issue',
            description: 'Delete an issue from Jira',
            schema: GetIssueSchema,
            baseUrl: '',
            method: 'DELETE',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const endpoint = `issue/${params.issueKey}`
            
            return response || 'Issue deleted successfully'
        }  {
            return `Error deleting issue: ${error}`
        }
    }
}

class AssignIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'assign_issue',
            description: 'Assign an issue to a user in Jira',
            schema: AssignIssueSchema,
            baseUrl: '',
            method: 'PUT',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const assignData = {
                accountId: params.assigneeAccountId
            }

            const endpoint = `issue/${params.issueKey}/assignee`
            
            return response || 'Issue assigned successfully'
        }  {
            return `Error assigning issue: ${error}`
        }
    }
}

class TransitionIssueTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'transition_issue',
            description: 'Transition an issue to a different status in Jira',
            schema: TransitionIssueSchema,
            baseUrl: '',
            method: 'POST',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const transitionData = {
                transition: {
                    id: params.transitionId
                }
            }

            const endpoint = `issue/${params.issueKey}/transitions`
            
            return response || 'Issue transitioned successfully'
        }  {
            return `Error transitioning issue: ${error}`
        }
    }
}

// Comment Tools
class ListCommentsTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'list_comments',
            description: 'List comments for a Jira issue',
            schema: ListCommentsSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        

         que)
         que)

        }`

        try {
            
            return response
        }  {
            return `Error listing comments: ${error}`
        }
    }
}

class CreateCommentTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'create_comment',
            description: 'Create a comment on a Jira issue',
            schema: CreateCommentSchema,
            baseUrl: '',
            method: 'POST',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const commentData: any = {
                body: {
                    type: 'doc',
                    version: 1,
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: params.text
                                }
                            ]
                        }
                    ]
                }
            }

             {
                commentData.visibility = params.visibility
            }

            const endpoint = `issue/${params.issueKey}/comment`
            
            return response
        }  {
            return `Error creating comment: ${error}`
        }
    }
}

class GetCommentTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'get_comment',
            description: 'Get a specific comment from a Jira issue',
            schema: GetCommentSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const endpoint = `issue/${params.issueKey}/comment/${params.commentId}`
            
            return response
        }  {
            return `Error getting comment: ${error}`
        }
    }
}

class UpdateCommentTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'update_comment',
            description: 'Update a comment on a Jira issue',
            schema: UpdateCommentSchema,
            baseUrl: '',
            method: 'PUT',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const commentData = {
                body: {
                    type: 'doc',
                    version: 1,
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: params.text
                                }
                            ]
                        }
                    ]
                }
            }

            const endpoint = `issue/${params.issueKey}/comment/${params.commentId}`
            
            return response || 'Comment updated successfully'
        }  {
            return `Error updating comment: ${error}`
        }
    }
}

class DeleteCommentTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'delete_comment',
            description: 'Delete a comment from a Jira issue',
            schema: DeleteCommentSchema,
            baseUrl: '',
            method: 'DELETE',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const endpoint = `issue/${params.issueKey}/comment/${params.commentId}`
            
            return response || 'Comment deleted successfully'
        }  {
            return `Error deleting comment: ${error}`
        }
    }
}

// User Tools
class SearchUsersTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'search_users',
            description: 'Search for users in Jira',
            schema: SearchUsersSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        

         que
         que)
         que)

        }`

        try {
            
            return response
        }  {
            return `Error searching users: ${error}`
        }
    }
}

class GetUserTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'get_user',
            description: 'Get a specific user from Jira',
            schema: GetUserSchema,
            baseUrl: '',
            method: 'GET',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        

        que

        }`

        try {
            
            return response
        }  {
            return `Error getting user: ${error}`
        }
    }
}

class CreateUserTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'create_user',
            description: 'Create a new user in Jira',
            schema: CreateUserSchema,
            baseUrl: '',
            method: 'POST',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const userData: any = {
                emailAddress: params.emailAddress,
                displayName: params.displayName
            }

             {
                userData.username = params.username
            }

            const endpoint = 'user'
            
            return response
        }  {
            return `Error creating user: ${error}`
        }
    }
}

class UpdateUserTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'update_user',
            description: 'Update an existing user in Jira',
            schema: UpdateUserSchema,
            baseUrl: '',
            method: 'PUT',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            const userData: any = {}

             userData.emailAddress = params.emailAddress
             userData.displayName = params.displayName

            
            que

            }`
            
            return response || 'User updated successfully'
        }  {
            return `Error updating user: ${error}`
        }
    }
}

class DeleteUserTool extends BaseJiraTool {
    defaultParams: any

     {
        const toolInput = {
            name: 'delete_user',
            description: 'Delete a user from Jira',
            schema: DeleteUserSchema,
            baseUrl: '',
            method: 'DELETE',
            headers: {}
        }
        super({
            ...toolInput,
            username: args.username,
            accessToken: args.accessToken,
            jiraHost: args.jiraHost,
            maxOutputLength: args.maxOutputLength
        })
        this.defaultParams = args.defaultParams || {}
    }

    a: Promise<string> {
        const params = { ...arg, ...this.defaultParams }

        try {
            
            que

            }`
            
            return response || 'User deleted successfully'
        }  {
            return `Error deleting user: ${error}`
        }
    }
}

exp: DynamicStructuredTool[] => {
    const tools: DynamicStructuredTool[] = []
    const actions = args?.actions || []
    const username = args?.username || ''
    const accessToken = args?.accessToken || ''
    const jiraHost = args?.jiraHost || ''
    const maxOutputLength = args?.maxOutputLength || Infinity
    const defaultParams = args?.defaultParams || {}

    // Issue tools
    ) {
        tools.push(
            new ListIssuesTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.listIssues
            })
        )
    }

    ) {
        tools.push(
            new CreateIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.createIssue
            })
        )
    }

    ) {
        tools.push(
            new GetIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.getIssue
            })
        )
    }

    ) {
        tools.push(
            new UpdateIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.updateIssue
            })
        )
    }

    ) {
        tools.push(
            new DeleteIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.deleteIssue
            })
        )
    }

    ) {
        tools.push(
            new AssignIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.assignIssue
            })
        )
    }

    ) {
        tools.push(
            new TransitionIssueTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.transitionIssue
            })
        )
    }

    // Comment tools
    ) {
        tools.push(
            new ListCommentsTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.listComments
            })
        )
    }

    ) {
        tools.push(
            new CreateCommentTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.createComment
            })
        )
    }

    ) {
        tools.push(
            new GetCommentTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.getComment
            })
        )
    }

    ) {
        tools.push(
            new UpdateCommentTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.updateComment
            })
        )
    }

    ) {
        tools.push(
            new DeleteCommentTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.deleteComment
            })
        )
    }

    // User tools
    ) {
        tools.push(
            new SearchUsersTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.searchUsers
            })
        )
    }

    ) {
        tools.push(
            new GetUserTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.getUser
            })
        )
    }

    ) {
        tools.push(
            new CreateUserTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.createUser
            })
        )
    }

    ) {
        tools.push(
            new UpdateUserTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.updateUser
            })
        )
    }

    ) {
        tools.push(
            new DeleteUserTool({
                username,
                accessToken,
                jiraHost,
                maxOutputLength,
                defaultParams: defaultParams.deleteUser
            })
        )
    }

    return tools
}
