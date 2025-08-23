import { z } from 'zod'
import { CallbackManagerForToolRun } from '@langchain/core/callbacks/manager'
import { DynamicStructuredTool, DynamicStructuredToolInput } from '../OpenAPIToolkit/core'
import { TOOL_ARGS_PREFIX } from '../../../src/agents'

interface TeamsToolOptions {
    accessToken: string
    actions: string[]
    defaultParams: any
    type: string
}

const BASE_URL = 'https://graph.microsoft.com/v1.0'

// Helper function to make Graph API requests
async function makeGraphRequest(
    endpoint: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
    body?: any,
    accessToken?: string
): Promise<any> {
    const headers: Record<string, string> = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }

    const config: RequestInit = {
        method,
        headers
    }

    ) {
        
    }

    try {
        

         {
            
            th
        }

        // Handle empty responses for DELETE operations
         {
            return { success: true, message: 'Operation completed successfully' }
        }

        
    }  {
        th
    }
}

// Base Teams Tool class
abstract class BaseTeamsTool extends DynamicStructuredTool {
    accessToken = ''
    protected defaultParams: any

     {
        
        this.accessToken = args.accessToken ?? ''
        this.defaultParams = args.defaultParams || {}
    }

    p {
        
    }

    p: string {
         + TOOL_ARGS_PREFIX + JSON.
    }

    // Abstract method that must be implemented by subclasses
    p: Promise<string>
}

// CHANNEL TOOLS

class ListChannelsTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'list_channels',
            description: 'List all channels in a team',
            schema: z.object({
                teamI.,
                maxRe...
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, maxResults = 50 } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels`
            

            // Filter results to maxResults on client side since $top is not supported
            const channels = result.value || []
            

            const responseData = {
                success: true,
                channels: limitedChannels,
                count: limitedChannels.length,
                total: channels.length
            }

            
        }  {
            return `Error listing channels: ${error}`
        }
    }
}

class GetChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'get_channel',
            description: 'Get details of a specific channel',
            schema: z.object({
                teamI.,
                .
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels/${channelId}`
            

            return this.formatResponse(
                {
                    success: true,
                    channel: result
                },
                params
            )
        }  {
            
        }
    }
}

class CreateChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'create_channel',
            description: 'Create a new channel in a team',
            schema: z.object({
                teamI.,
                .,
                ..,
                membershipType: z
                    .enum(
                    .
                    .
                    .
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, displayName, description, membershipType = 'standard' } = params

         {
            th
        }

        try {
            const body = {
                displayName,
                membershipType,
                ...(
            }

            const endpoint = `/teams/${teamId}/channels`
            

            return this.formatResponse(
                {
                    success: true,
                    channel: result,
                    message: `Channel "${displayName}" created successfully`
                },
                params
            )
        }  {
            
        }
    }
}

class UpdateChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'update_channel',
            description: 'Update an existing channel',
            schema: z.object({
                teamI.,
                .,
                ..,
                ..
            }),
            baseUrl: BASE_URL,
            method: 'PATCH',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId, displayName, description } = params

         {
            th
        }

        try {
            const body: any = {}
             body.displayName = displayName
             body.description = description

            .length === 0) {
                th
            }

            const endpoint = `/teams/${teamId}/channels/${channelId}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Channel updated successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class DeleteChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'delete_channel',
            description: 'Delete a channel from a team',
            schema: z.object({
                teamI.,
                .
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels/${channelId}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Channel deleted successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class ArchiveChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'archive_channel',
            description: 'Archive a channel in a team',
            schema: z.object({
                teamI.,
                .
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels/${channelId}/archive`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Channel archived successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class UnarchiveChannelTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'unarchive_channel',
            description: 'Unarchive a channel in a team',
            schema: z.object({
                teamI.,
                .
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels/${channelId}/unarchive`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Channel unarchived successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class ListChannelMembersTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'list_channel_members',
            description: 'List members of a channel',
            schema: z.object({
                teamI.,
                .
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId } = params

         {
            th
        }

        try {
            const endpoint = `/teams/${teamId}/channels/${channelId}/members`
            

            return this.formatResponse(
                {
                    success: true,
                    members: result.value || [],
                    count: result.value?.length || 0
                },
                params
            )
        }  {
            
        }
    }
}

class AddChannelMemberTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'add_channel_member',
            description: 'Add a member to a channel',
            schema: z.object({
                teamI.,
                .,
                u.
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId, userId } = params

         {
            th
        }

        try {
            const body = {
                '@odata.type': '#microsoft.graph.aadUserConversationMember',
                'u`
            }

            const endpoint = `/teams/${teamId}/channels/${channelId}/members`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Member added to channel successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class RemoveChannelMemberTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'remove_channel_member',
            description: 'Remove a member from a channel',
            schema: z.object({
                teamI.,
                .,
                u.
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { teamId, channelId, userId } = params

         {
            th
        }

        try {
            // First get the membership ID
            const membersEndpoint = `/teams/${teamId}/channels/${channelId}/members`
            

             => m.u
             {
                th
            }

            const endpoint = `/teams/${teamId}/channels/${channelId}/members/${member.id}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Member removed from channel successfully'
                },
                params
            )
        }  {
            
        }
    }
}

// CHAT TOOLS

class ListChatsTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'list_chats',
            description: 'List all chats for the current user',
            schema: z.object({
                maxRe...
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { maxResults = 50 } = params

        try {
            const endpoint = `/me/chats?$top=${maxResults}`
            

            return this.formatResponse(
                {
                    success: true,
                    chats: result.value || [],
                    count: result.value?.length || 0
                },
                params
            )
        }  {
            
        }
    }
}

class GetChatTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'get_chat',
            description: 'Get details of a specific chat',
            schema: z.object({
                .
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId } = params

         {
            th
        }

        try {
            const endpoint = `/chats/${chatId}`
            

            return this.formatResponse(
                {
                    success: true,
                    chat: result
                },
                params
            )
        }  {
            
        }
    }
}

class CreateChatTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'create_chat',
            description: 'Create a new chat',
            schema: z.object({
                ...,
                t..'),
                membe.
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatType = 'group', topic, members } = params

         {
            th
        }

        try {
            .map(( => )
             => ({
                '@odata.type': '#microsoft.graph.aadUserConversationMember',
                'u`
            }))

            const body: any = {
                chatType,
                members: chatMembers
            }

             {
                body.topic = topic
            }

            const endpoint = '/chats'
            

            return this.formatResponse(
                {
                    success: true,
                    chat: result,
                    message: 'Chat created successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class UpdateChatTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'update_chat',
            description: 'Update an existing chat',
            schema: z.object({
                .,
                t.
            }),
            baseUrl: BASE_URL,
            method: 'PATCH',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId, topic } = params

         {
            th
        }

         {
            th
        }

        try {
            const body = { topic }
            const endpoint = `/chats/${chatId}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Chat updated successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class DeleteChatTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'delete_chat',
            description: 'Delete a chat',
            schema: z.object({
                .
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId } = params

         {
            th
        }

        try {
            const endpoint = `/chats/${chatId}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Chat deleted successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class ListChatMembersTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'list_chat_members',
            description: 'List members of a chat',
            schema: z.object({
                .
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId } = params

         {
            th
        }

        try {
            const endpoint = `/chats/${chatId}/members`
            

            return this.formatResponse(
                {
                    success: true,
                    members: result.value || [],
                    count: result.value?.length || 0
                },
                params
            )
        }  {
            
        }
    }
}

class AddChatMemberTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'add_chat_member',
            description: 'Add a member to a chat',
            schema: z.object({
                .,
                u.
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId, userId } = params

         {
            th
        }

        try {
            const body = {
                '@odata.type': '#microsoft.graph.aadUserConversationMember',
                'u`
            }

            const endpoint = `/chats/${chatId}/members`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Member added to chat successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class RemoveChatMemberTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'remove_chat_member',
            description: 'Remove a member from a chat',
            schema: z.object({
                .,
                u.
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId, userId } = params

         {
            th
        }

        try {
            // First get the membership ID
            const membersEndpoint = `/chats/${chatId}/members`
            

             => m.u
             {
                th
            }

            const endpoint = `/chats/${chatId}/members/${member.id}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Member removed from chat successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class PinMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'pin_message',
            description: 'Pin a message in a chat',
            schema: z.object({
                .,
                me.
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId, messageId } = params

         {
            th
        }

        try {
            const body = {
                message: {
                    '@/me`
                }
            }

            const endpoint = `/chats/${chatId}/pinnedMessages`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Message pinned successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class UnpinMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'unpin_message',
            description: 'Unpin a message from a chat',
            schema: z.object({
                .,
                me.
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatId, messageId } = params

         {
            th
        }

        try {
            // First get the pinned messages to find the pinned message ID
            const pinnedEndpoint = `/chats/${chatId}/pinnedMessages`
            

             => pm.me
             {
                th
            }

            const endpoint = `/chats/${chatId}/pinnedMessages/${pinnedMessage.id}`
            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Message unpinned successfully'
                },
                params
            )
        }  {
            
        }
    }
}

// CHAT MESSAGE TOOLS

class ListMessagesTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'list_messages',
            description: 'List messages in a chat or channel',
            schema: z.object({
                .,
                teamI..'),
                maxRe...
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, maxResults = 50 } = params

         {
            th
        }

        try {
            let endpoint: string
             {
                // Channel messages
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages?$top=${maxResults}`
            } else {
                // Chat messages
                endpoint = `/chats/${chatChannelId}/messages?$top=${maxResults}`
            }

            

            return this.formatResponse(
                {
                    success: true,
                    messages: result.value || [],
                    count: result.value?.length || 0,
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class GetMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'get_message',
            description: 'Get details of a specific message',
            schema: z.object({
                .,
                teamI..'),
                me.
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId } = params

         {
            th
        }

        try {
            let endpoint: string
             {
                // Channel message
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}`
            } else {
                // Chat message
                endpoint = `/chats/${chatChannelId}/messages/${messageId}`
            }

            

            return this.formatResponse(
                {
                    success: true,
                    message: result,
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class SendMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'send_message',
            description: 'Send a message to a chat or channel',
            schema: z.object({
                .,
                teamI..'),
                me.,
                ...
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageBody, contentType = 'text' } = params

         {
            th
        }

        try {
            const body = {
                body: {
                    contentType,
                    content: messageBody
                }
            }

            let endpoint: string
             {
                // Channel message
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages`
            } else {
                // Chat message
                endpoint = `/chats/${chatChannelId}/messages`
            }

            

            return this.formatResponse(
                {
                    success: true,
                    message: result,
                    context: teamId ? 'channel' : 'chat',
                    messageText: 'Message sent successfully'
                },
                params
            )
        }  {
            
        }
    }
}

class UpdateMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'update_message',
            description: 'Update an existing message',
            schema: z.object({
                .,
                teamI..'),
                me.
            }),
            baseUrl: BASE_URL,
            method: 'PATCH',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId } = params

         {
            th
        }

        try {
            // Note: Message update is primarily for policy violations in Teams
            const body = {
                policyViolation: null
            }

            let endpoint: string
             {
                // Channel message
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}`
            } else {
                // Chat message
                endpoint = `/chats/${chatChannelId}/messages/${messageId}`
            }

            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Message updated successfully',
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class DeleteMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'delete_message',
            description: 'Delete a message',
            schema: z.object({
                .,
                teamI..'),
                me.
            }),
            baseUrl: BASE_URL,
            method: 'DELETE',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId } = params

         {
            th
        }

        try {
            let endpoint: string
             {
                // Channel message - use soft delete
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}/softDelete`
            } else {
                // Chat message - use soft delete
                endpoint = `/chats/${chatChannelId}/messages/${messageId}/softDelete`
            }

            awa

            return this.formatResponse(
                {
                    success: true,
                    message: 'Message deleted successfully',
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class ReplyToMessageTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'reply_to_message',
            description: 'Reply to a message in a chat or channel',
            schema: z.object({
                .,
                teamI..'),
                me.,
                .,
                ...
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId, replyBody, contentType = 'text' } = params

         {
            th
        }

        try {
            const body = {
                body: {
                    contentType,
                    content: replyBody
                }
            }

            let endpoint: string
             {
                // Channel message reply
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}/replies`
            } else {
                // For chat messages, replies are just new messages
                endpoint = `/chats/${chatChannelId}/messages`
            }

            

            return this.formatResponse(
                {
                    success: true,
                    reply: result,
                    message: 'Reply sent successfully',
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class SetReactionTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'set_reaction',
            description: 'Set a reaction to a message',
            schema: z.object({
                .,
                teamI..'),
                me.,
                reactionType: z
                    .enum(
                    .
                    .
                    .
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId, reactionType = 'like' } = params

         {
            th
        }

        try {
            let endpoint: string
             {
                // Channel message
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}/setReaction`
            } else {
                // Chat message
                endpoint = `/chats/${chatChannelId}/messages/${messageId}/setReaction`
            }

            const body = {
                reactionType
            }

            awa

            return this.formatResponse(
                {
                    success: true,
                    message: `Reaction "${reactionType}" set successfully`,
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class UnsetReactionTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'unset_reaction',
            description: 'Remove a reaction from a message',
            schema: z.object({
                .,
                teamI..'),
                me.,
                reactionType: z
                    .enum(
                    .
                    .
                    .
            }),
            baseUrl: BASE_URL,
            method: 'POST',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { chatChannelId, teamId, messageId, reactionType = 'like' } = params

         {
            th
        }

        try {
            let endpoint: string
             {
                // Channel message
                endpoint = `/teams/${teamId}/channels/${chatChannelId}/messages/${messageId}/unsetReaction`
            } else {
                // Chat message
                endpoint = `/chats/${chatChannelId}/messages/${messageId}/unsetReaction`
            }

            const body = {
                reactionType
            }

            awa

            return this.formatResponse(
                {
                    success: true,
                    message: `Reaction "${reactionType}" removed successfully`,
                    context: teamId ? 'channel' : 'chat'
                },
                params
            )
        }  {
            
        }
    }
}

class GetAllMessagesTool extends BaseTeamsTool {
     {
        const toolInput: DynamicStructuredToolInput<any> = {
            name: 'get_all_messages',
            description: 'Get messages across all chats and channels for the user',
            schema: z.object({
                maxRe...
            }),
            baseUrl: BASE_URL,
            method: 'GET',
            headers: {}
        }

        
    }

    p: Promise<string> {
        const params = { ...arg, ...this.defaultParams }
        const { maxResults = 50 } = params

        try {
            // Get messages from all chats
            const chatEndpoint = `/me/chats/getAllMessages?$top=${maxResults}`
            

            return this.formatResponse(
                {
                    success: true,
                    messages: chatResult.value || [],
                    count: chatResult.value?.length || 0,
                    source: 'all_chats_and_channels'
                },
                params
            )
        }  {
            
        }
    }
}

// Main function to create Teams tools
exp: DynamicStructuredTool[] {
    const tools: DynamicStructuredTool[] = []
    const actions = options.actions || []
    const accessToken = options.accessToken || ''
    const defaultParams = options.defaultParams || {}

    // Channel tools
    ) {
        const listTool = new ListChannelsTool({
            accessToken,
            defaultParams: defaultParams.listChannels
        })
        t
    }

    ) {
        const getTool = new GetChannelTool({
            accessToken,
            defaultParams: defaultParams.getChannel
        })
        t
    }

    ) {
        const createTool = new CreateChannelTool({
            accessToken,
            defaultParams: defaultParams.createChannel
        })
        t
    }

    ) {
        const updateTool = new UpdateChannelTool({
            accessToken,
            defaultParams: defaultParams.updateChannel
        })
        t
    }

    ) {
        const deleteTool = new DeleteChannelTool({
            accessToken,
            defaultParams: defaultParams.deleteChannel
        })
        t
    }

    ) {
        const archiveTool = new ArchiveChannelTool({
            accessToken,
            defaultParams: defaultParams.archiveChannel
        })
        t
    }

    ) {
        const unarchiveTool = new UnarchiveChannelTool({
            accessToken,
            defaultParams: defaultParams.unarchiveChannel
        })
        t
    }

    ) {
        const listMembersTool = new ListChannelMembersTool({
            accessToken,
            defaultParams: defaultParams.listChannelMembers
        })
        t
    }

    ) {
        const addMemberTool = new AddChannelMemberTool({
            accessToken,
            defaultParams: defaultParams.addChannelMember
        })
        t
    }

    ) {
        const removeMemberTool = new RemoveChannelMemberTool({
            accessToken,
            defaultParams: defaultParams.removeChannelMember
        })
        t
    }

    // Chat tools
    ) {
        const listTool = new ListChatsTool({
            accessToken,
            defaultParams: defaultParams.listChats
        })
        t
    }

    ) {
        const getTool = new GetChatTool({
            accessToken,
            defaultParams: defaultParams.getChat
        })
        t
    }

    ) {
        const createTool = new CreateChatTool({
            accessToken,
            defaultParams: defaultParams.createChat
        })
        t
    }

    ) {
        const updateTool = new UpdateChatTool({
            accessToken,
            defaultParams: defaultParams.updateChat
        })
        t
    }

    ) {
        const deleteTool = new DeleteChatTool({
            accessToken,
            defaultParams: defaultParams.deleteChat
        })
        t
    }

    ) {
        const listMembersTool = new ListChatMembersTool({
            accessToken,
            defaultParams: defaultParams.listChatMembers
        })
        t
    }

    ) {
        const addMemberTool = new AddChatMemberTool({
            accessToken,
            defaultParams: defaultParams.addChatMember
        })
        t
    }

    ) {
        const removeMemberTool = new RemoveChatMemberTool({
            accessToken,
            defaultParams: defaultParams.removeChatMember
        })
        t
    }

    ) {
        const pinTool = new PinMessageTool({
            accessToken,
            defaultParams: defaultParams.pinMessage
        })
        t
    }

    ) {
        const unpinTool = new UnpinMessageTool({
            accessToken,
            defaultParams: defaultParams.unpinMessage
        })
        t
    }

    // Chat message tools
    ) {
        const listTool = new ListMessagesTool({
            accessToken,
            defaultParams: defaultParams.listMessages
        })
        t
    }

    ) {
        const getTool = new GetMessageTool({
            accessToken,
            defaultParams: defaultParams.getMessage
        })
        t
    }

    ) {
        const sendTool = new SendMessageTool({
            accessToken,
            defaultParams: defaultParams.sendMessage
        })
        t
    }

    ) {
        const updateTool = new UpdateMessageTool({
            accessToken,
            defaultParams: defaultParams.updateMessage
        })
        t
    }

    ) {
        const deleteTool = new DeleteMessageTool({
            accessToken,
            defaultParams: defaultParams.deleteMessage
        })
        t
    }

    ) {
        const replyTool = new ReplyToMessageTool({
            accessToken,
            defaultParams: defaultParams.replyToMessage
        })
        t
    }

    ) {
        const reactionTool = new SetReactionTool({
            accessToken,
            defaultParams: defaultParams.setReaction
        })
        t
    }

    ) {
        const unsetReactionTool = new UnsetReactionTool({
            accessToken,
            defaultParams: defaultParams.unsetReaction
        })
        t
    }

    ) {
        const getAllTool = new GetAllMessagesTool({
            accessToken,
            defaultParams: defaultParams.getAllMessages
        })
        t
    }

    return tools
}
