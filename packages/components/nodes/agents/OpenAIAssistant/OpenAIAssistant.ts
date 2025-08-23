import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    IServerSideEventStreamer,
    IUsedTool
} from '../../../src/Interface'
import OpenAI from 'openai'
import { DataSource } from 'typeorm'
import { getCredentialData, getCredentialParam } from '../../../src/utils'
import fetch from 'node-fetch'
import { flatten, uniqWith, isEqual } from 'lodash'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { AnalyticHandler } from '../../../src/handler'
import { Moderation, checkInputs, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'
import { addSingleFileToStorage } from '../../../src/storageUtils'
import { DynamicStructuredTool } from '../../tools/OpenAPIToolkit/core'

const lenticularBracketRegex = /【[^】]*】/g
const imageRegex = /<img[^>]*\/>/g

class OpenAIAssistant_Agents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'OpenAI Assistant'
        this.name = 'openAIAssistant'
        this.version = 4.0
        this.type = 'OpenAIAssistant'
        this.category = 'Agents'
        this.icon = 'assistant.svg'
        this.description = `An agent that uses OpenAI Assistant API to pick the tool and args to call`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Select Assistant',
                name: 'selectedAssistant',
                type: 'asyncOptions',
                loadMethod: 'listAssistants'
            },
            {
                label: 'Allowed Tools',
                name: 'tools',
                type: 'Tool',
                list: true
            },
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            },
            {
                label: 'Tool Choice',
                name: 'toolChoice',
                type: 'string',
                description:
                    'C tool is called by the model. Can be "none", "auto", "required", or the name of a tool. Refer <a href="https://platform.openai.com/docs/api-reference/runs/createRun#runs-createrun-tool_choice" target="_blank">here</a> for more information',
                placeholder: 'file_search',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Parallel Tool Calls',
                name: 'parallelToolCalls',
                type: 'boolean',
                description: 'Whether to enable parallel function calling during tool use. Defaults to true',
                default: true,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Disable File Download',
                name: 'disableFileDownload',
                type: 'boolean',
                description:
                    'Messages can contain text, images, or files. In some cases, you may want to prevent others from downloading the files. Learn more from OpenAI File Annotation <a target="_blank" href="https://platform.openai.com/docs/assistants/how-it-works/managing-threads-and-messages">docs</a>',
                optional: true,
                additionalParams: true
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const returnData: INodeOptionsValue[] = []

            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity

             {
                return returnData
            }

            const searchOptions = options.searchOptions || {}
            .findBy({
                ...searchOptions,
                type: 'OPENAI'
            })

            f {
                
                const data = {
                    label: assistantDetails.name,
                    name: assistants[i].id,
                    description: assistantDetails.instructions
                } as INodeOptionsValue
                
            }
            return returnData
        }
    }

    a: Promise<any> {
        return null
    }

    a: Promise<void> {
        const selectedAssistantId = nodeData.inputs?.selectedAssistant as string
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const orgId = options.orgId

        .findOneBy({
            id: selectedAssistantId
        })

         {
            
            return
        }

         return

        let sessionId = ''
         {
            const chatId = sessionIdObj.id
            .findOneBy({
                chatId
            })
             {
                
                return
            }
            sessionId = chatmsg.sessionId
        } el {
            sessionId = sessionIdObj.id
        }

        
        
         {
            
            return
        }

        
        
        try {
            ) {
                awa
                
            } else {
                
            }
        }  {
            
        }
    }

    a: Promise<string | object> {
        const selectedAssistantId = nodeData.inputs?.selectedAssistant as string
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const disableFileDownload = nodeData.inputs?.disableFileDownload as boolean
        const moderations = nodeData.inputs?.inputModeration as Moderation[]
        const _toolChoice = nodeData.inputs?.toolChoice as string
        const parallelToolCalls = nodeData.inputs?.parallelToolCalls as boolean

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId
        const checkStorage = options.checkStorage
            ? ( => P
            : undefined
        const updateStorageUsage = options.updateStorageUsage
            ? (options.updateStorageUsage as (
                  orgId: string,
                  workspaceId: string,
                  totalSize: number,
                  usageCacheManager: any
              ) => P
            : undefined

         {
            try {
                
            }  {
                awa => )
                 {
                    
                }
                
            }
        }

        let tools = nodeData.inputs?.tools
        t
         => f) ?? []

        const usedTools: IUsedTool[] = []
        const fileAnnotations = []
        const artifacts = []

        .findOneBy({
            id: selectedAssistantId
        })

         th

        
        
         th

        

        // Start analytics
        
        awa
        

        try {
            
            const openAIAssistantId = assistantDetails.id

            // Retrieve assistant
            

             {
                let filteredTools = []
                f {
                     f
                }
                f
                // filter out tool with empty function
                f => .fun)
                awa
            } else {
                let f => t
                awa
            }

            .findOneBy({
                chatId: options.chatId,
                chatflowid: options.chatflowid
            })

            let threadId = ''
            let isNewThread = false
             {
                
                threadId = thread.id
                isNewThread = true
            } else {
                
                threadId = thread.id
            }

            // List all runs, in case existing thread is still running
             {
                 => {
                     => {
                        const maxWaitTime = 30000 // Maximum wait time of 30 seconds
                        
                        let delay = 500 // Initial delay between retries
                        const maxRetries = 10
                        let retries = 0

                         => {
                            try {
                                
                                 {
                                    const firstRunId = allRuns.data[0].id
                                     => ?.status
                                    if (
                                        runStatus &&
                                        (runStatus === 'cancelled' ||
                                            runStatus === 'completed' ||
                                            runStatus === 'expired' ||
                                            runStatus === 'failed' ||
                                            
                                    ) {
                                        
                                        
                                    }
                                } else {
                                    
                                    )
                                }
                            }  {
                                 {
                                    
                                    )
                                } el {
                                    retries++
                                    delay *= 2
                                    
                                } else {
                                    
                                    )
                                }
                            }

                            // Timeout condition to stop the loop if maxWaitTime is exceeded
                             -  {
                                
                                )
                            }
                        }, 
                    })
                }
                awa
            }

            // Add message to thread
            await openai.beta.threads.messages.create(threadId, {
                role: 'user',
                content: input
            })

            // Run assistant thread
            

            let text = ''
            let runThreadId = ''
            let isStreamingStarted = false

            let toolChoice: any
             {
                 {
                    toolChoice = { type: 'file_search' }
                } el {
                    toolChoice = { type: 'code_interpreter' }
                } el {
                    toolChoice = _toolChoice
                } else {
                    toolChoice = { type: 'function', function: { name: _toolChoice } }
                }
            }

             {
                const streamThread = await openai.beta.threads.runs.create(threadId, {
                    assistant_id: retrievedAssistant.id,
                    stream: true,
                    tool_choice: toolChoice,
                    parallel_tool_calls: parallelToolCalls
                })

                f {
                     {
                        runThreadId = event.data.id
                    }

                     {
                        const chunk = event.data.delta.content?.[0]

                         {
                             {
                                const message_content = chunk.text
                                const annotations = chunk.text?.annotations

                                // Iterate over the annotations
                                f {
                                    const annotation = annotations[index]
                                    let filePath = ''

                                    // Gather citations based on annotation attributes
                                    .file_citation
                                     {
                                        
                                        // eslint-disable-next-line no-useless-escape
                                        .p ?? cited_file.filename
                                         {
                                            
                                                awa

                                            const { path, totalSize } = await downloadFile(
                                                openAIApiKey,
                                                cited_file,
                                                fileName,
                                                options.orgId,
                                                options.chatflowid,
                                                options.chatId
                                            )
                                            filePath = path
                                            fileAnnotations.push({
                                                filePath,
                                                fileName
                                            })

                                            
                                                await updateStorageUsage(
                                                    options.orgId,
                                                    options.workspaceId,
                                                    totalSize,
                                                    options.usageCacheManager
                                                )
                                        }
                                    } else {
                                        .file_path
                                         {
                                            
                                            // eslint-disable-next-line no-useless-escape
                                            .p ?? cited_file.filename
                                             {
                                                
                                                    awa

                                                const { path, totalSize } = await downloadFile(
                                                    openAIApiKey,
                                                    cited_file,
                                                    fileName,
                                                    options.orgId,
                                                    options.chatflowid,
                                                    options.chatId
                                                )
                                                filePath = path
                                                fileAnnotations.push({
                                                    filePath,
                                                    fileName
                                                })

                                                
                                                    await updateStorageUsage(
                                                        options.orgId,
                                                        options.workspaceId,
                                                        totalSize,
                                                        options.usageCacheManager
                                                    )
                                            }
                                        }
                                    }

                                    // Replace the text with a footnote
                                    message_content.value = message_content.value?.replace(
                                        `${annotation.text}`,
                                        `${disableFileDownload ? '' : filePath}`
                                    )
                                }

                                // Remove lenticular brackets
                                me

                                text += message_content.value ?? ''

                                 {
                                     {
                                        isStreamingStarted = true
                                         {
                                            
                                        }
                                    }
                                     {
                                        
                                    }
                                }

                                 {
                                     {
                                        isStreamingStarted = true
                                         {
                                            
                                        }
                                    }
                                     {
                                        
                                    }
                                }
                            } else {
                                text += chunk.text?.value
                                 {
                                    isStreamingStarted = true
                                     {
                                        
                                    }
                                }
                                 {
                                    
                                }
                            }
                        }

                         {
                            const fileId = chunk.image_file.file_id
                            

                             awa

                            const { filePath, totalSize } = await downloadImg(
                                openai,
                                fileId,
                                `${fileObj.filename}.png`,
                                options.orgId,
                                options.chatflowid,
                                options.chatId
                            )
                            a

                            
                                awa

                             {
                                isStreamingStarted = true
                                 {
                                    
                                }
                            }
                             {
                                
                            }
                        }
                    }

                     {
                         {
                            const actions: ICommonObject[] = []
                            event. => {
                                const functionCall = item.function
                                let args = {}
                                try {
                                    a
                                }  {
                                    
                                }
                                actions.push({
                                    tool: functionCall.name,
                                    toolInput: args,
                                    toolCallId: item.id
                                })
                            })
                            const submitToolOutputs = []
                            f {
                                 => t
                                 continue

                                // Start tool analytics
                                

                                try {
                                    const toolOutput = await tool.call(actions[i].toolInput, undefined, undefined, {
                                        sessionId: threadId,
                                        chatId: options.chatId,
                                        input
                                    })
                                    awa
                                    submitToolOutputs.push({
                                        tool_call_id: actions[i].toolCallId,
                                        output: toolOutput
                                    })
                                    usedTools.push({
                                        tool: tool.name,
                                        toolInput: actions[i].toolInput,
                                        toolOutput
                                    })
                                }  {
                                    awa
                                    
                                    throw new Error(
                                        `Error executing tool. Tool: ${tool.name}. Thread ID: ${threadId}. Run ID: ${runThreadId}`
                                    )
                                }
                            }

                            try {
                                await handleToolSubmission({
                                    openai,
                                    threadId,
                                    runThreadId,
                                    submitToolOutputs,
                                    tools,
                                    analyticHandlers,
                                    parentIds,
                                    llmIds,
                                    sseStreamer,
                                    chatId,
                                    options,
                                    input,
                                    usedTools,
                                    text,
                                    isStreamingStarted
                                })
                            }  {
                                
                                awa

                                const errMsg = `Error submitting tool outputs. Thread ID: ${threadId}. Run ID: ${runThreadId}`

                                awa
                                awa

                                th
                            }
                        }
                    }
                }

                // List messages
                
                const messageData = messages.data ?? []
                 => m
                 return ''

                // Remove images from the logging text
                let llmOutput = text.
                llmOutput = llmOutput.

                awa
                awa

                return {
                    text,
                    usedTools,
                    artifacts,
                    fileAnnotations,
                    assistant: { assistantId: openAIAssistantId, threadId, runId: runThreadId, messages: messageData }
                }
            }

             => {
                 => {
                    const maxWaitTime = 30000 // Maximum wait time of 30 seconds
                    
                    let delay = 500 // Initial delay between retries
                    const maxRetries = 10
                    let retries = 0

                     => {
                        try {
                            
                            const state = run.status

                             {
                                
                                
                            } el {
                                 {
                                    
                                    const actions: ICommonObject[] = []
                                     => {
                                        const functionCall = item.function
                                        let args = {}
                                        try {
                                            a
                                        }  {
                                            
                                        }
                                        actions.push({
                                            tool: functionCall.name,
                                            toolInput: args,
                                            toolCallId: item.id
                                        })
                                    })
                                    const submitToolOutputs = []
                                    f {
                                         => t
                                         continue

                                        // Start tool analytics
                                        
                                         {
                                            
                                        }

                                        try {
                                            const toolOutput = await tool.call(actions[i].toolInput, undefined, undefined, {
                                                sessionId: threadId,
                                                chatId: options.chatId,
                                                input
                                            })
                                            awa
                                            submitToolOutputs.push({
                                                tool_call_id: actions[i].toolCallId,
                                                output: toolOutput
                                            })
                                            usedTools.push({
                                                tool: tool.name,
                                                toolInput: actions[i].toolInput,
                                                toolOutput
                                            })
                                        }  {
                                            awa
                                            
                                            
                                            reject(
                                                new Error(
                                                    `Error processing thread: ${state}, Thread ID: ${threadId}, Run ID: ${runId}, Tool: ${tool.name}`
                                                )
                                            )
                                            return
                                        }
                                    }

                                    
                                    const newStatus = newRun?.status

                                    try {
                                         {
                                            await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
                                                tool_outputs: submitToolOutputs
                                            })
                                            
                                        } else {
                                            awa
                                            
                                        }
                                    }  {
                                        
                                        reject(
                                            new E
                                        )
                                    }
                                }
                            } el {
                                
                                reject(
                                    new Error(
                                        `Error processing thread: ${state}, Thread ID: ${threadId}, Run ID: ${runId}, Status: ${state}`
                                    )
                                )
                            }
                        }  {
                             {
                                
                                )
                            } el {
                                retries++
                                delay *= 2 // Exponential backoff
                                
                            } else {
                                
                                )
                            }
                        }

                        // Stop the loop if maximum wait time is exceeded
                         -  {
                            
                            )
                        }
                    }, 
                })
            }

            // Polling run status
            const runThread = await openai.beta.threads.runs.create(threadId, {
                assistant_id: retrievedAssistant.id,
                tool_choice: toolChoice,
                parallel_tool_calls: parallelToolCalls
            })
            runThreadId = runThread.id
            let 
            wh {
                
            }

            let retries = 3
            wh {
                 {
                    retries -= 1
                    const newRunThread = await openai.beta.threads.runs.create(threadId, {
                        assistant_id: retrievedAssistant.id,
                        tool_choice: toolChoice,
                        parallel_tool_calls: parallelToolCalls
                    })
                    runThreadId = newRunThread.id
                    
                } else {
                    const errMsg = `Error processing thread: ${state}, Thread ID: ${threadId}`
                    awa
                    th
                }
            }

            // List messages
            
            const messageData = messages.data ?? []
             => m
             return ''

            let returnVal = ''
            f {
                 {
                    const content = assistantMessages[0].content[i] as OpenAI.Beta.Threads.Messages.TextContentBlock

                     {
                        const message_content = content.text
                        const annotations = message_content.annotations

                        // Iterate over the annotations
                        f {
                            const annotation = annotations[index]
                            let filePath = ''

                            // Gather citations based on annotation attributes
                            .file_citation

                             {
                                
                                // eslint-disable-next-line no-useless-escape
                                .p ?? cited_file.filename
                                 {
                                     awa

                                    const { path, totalSize } = await downloadFile(
                                        openAIApiKey,
                                        cited_file,
                                        fileName,
                                        options.orgId,
                                        options.chatflowid,
                                        options.chatId
                                    )
                                    filePath = path

                                    
                                        awa

                                    fileAnnotations.push({
                                        filePath,
                                        fileName
                                    })
                                }
                            } else {
                                .file_path
                                 {
                                    
                                    // eslint-disable-next-line no-useless-escape
                                    .p ?? cited_file.filename
                                     {
                                        
                                            awa

                                        const { path, totalSize } = await downloadFile(
                                            openAIApiKey,
                                            cited_file,
                                            fileName,
                                            options.orgId,
                                            options.chatflowid,
                                            options.chatId
                                        )
                                        filePath = path

                                        
                                            await updateStorageUsage(
                                                options.orgId,
                                                options.workspaceId,
                                                totalSize,
                                                options.usageCacheManager
                                            )

                                        fileAnnotations.push({
                                            filePath,
                                            fileName
                                        })
                                    }
                                }
                            }

                            // Replace the text with a footnote
                            message_content.value = message_content.value.replace(
                                `${annotation.text}`,
                                `${disableFileDownload ? '' : filePath}`
                            )
                        }

                        returnVal += message_content.value
                    } else {
                        returnVal += content.text.value
                    }

                    
                } else {
                    const content = assistantMessages[0].content[i] as OpenAI.Beta.Threads.Messages.ImageFileContentBlock
                    const fileId = content.image_file.file_id
                    

                     awa

                    const { filePath, totalSize } = await downloadImg(
                        openai,
                        fileId,
                        `${fileObj.filename}.png`,
                        options.orgId,
                        options.chatflowid,
                        options.chatId
                    )

                    
                        awa

                    a
                }
            }

            let llmOutput = 
            llmOutput = llmOutput.

            awa
            awa

            return {
                text: returnVal,
                usedTools,
                artifacts,
                fileAnnotations,
                assistant: { assistantId: openAIAssistantId, threadId, runId: runThreadId, messages: messageData }
            }
        }  {
            awa
            th
        }
    }
}

const downloadImg = async (
    openai: OpenAI,
    fileId: string,
    fileName: string,
    orgId: string,
    ...paths: string[]
): Promise<{ filePath: string; totalSize: number }> => {
    

    // Extract the binary data from the Response object
    

    // Convert the binary data to a Buffer
    
    const mime = 'image/png'

    

    return { filePath: path, totalSize }
}

const downloadFile = async (
    openAIApiKey: string,
    fileObj: any,
    fileName: string,
    orgId: string,
    ...paths: string[]
): Promise<{ path: string; totalSize: number }> => {
    try {
        const response = await fetch(`https://api.openai.com/v1/files/${fileObj.id}/content`, {
            method: 'GET',
            headers: { Accept: '*/*', Authorization: `Bearer ${openAIApiKey}` }
        })

         {
            th
        }

        // Extract the binary data from the Response object
        

        // Convert the binary data to a Buffer
        
        const mime = 'application/octet-stream'

        

        return { path, totalSize }
    }  {
        
        return { path: '', totalSize: 0 }
    }
}

interface ToolSubmissionParams {
    openai: OpenAI
    threadId: string
    runThreadId: string
    submitToolOutputs: any[]
    tools: any[]
    analyticHandlers: AnalyticHandler
    parentIds: ICommonObject
    llmIds: ICommonObject
    sseStreamer: IServerSideEventStreamer
    chatId: string
    options: ICommonObject
    input: string
    usedTools: IUsedTool[]
    text: string
    isStreamingStarted: boolean
}

interface ToolSubmissionResult {
    text: string
    isStreamingStarted: boolean
}

a: Promise<ToolSubmissionResult> {
    const {
        openai,
        threadId,
        runThreadId,
        submitToolOutputs,
        tools,
        analyticHandlers,
        parentIds,
        llmIds,
        sseStreamer,
        chatId,
        options,
        input,
        usedTools
    } = params

    let updatedText = params.text
    let updatedIsStreamingStarted = params.isStreamingStarted

    const stream = openai.beta.threads.runs.submitToolOutputsStream(threadId, runThreadId, {
        tool_outputs: submitToolOutputs
    })

    try {
        f {
             {
                const chunk = event.data.delta.content?.[0]
                 {
                    updatedText += chunk.text.value
                     {
                        updatedIsStreamingStarted = true
                         {
                            
                        }
                    }
                     {
                        
                    }
                }
            } el {
                 {
                    const actions: ICommonObject[] = []

                    event. => {
                        const functionCall = item.function
                        let args = {}
                        try {
                            a
                        }  {
                            
                        }
                        actions.push({
                            tool: functionCall.name,
                            toolInput: args,
                            toolCallId: item.id
                        })
                    })

                    const nestedToolOutputs = []
                    f {
                         => t
                         continue

                        

                        try {
                            const toolOutput = await tool.call(actions[i].toolInput, undefined, undefined, {
                                sessionId: threadId,
                                chatId: options.chatId,
                                input
                            })
                            awa
                            nestedToolOutputs.push({
                                tool_call_id: actions[i].toolCallId,
                                output: toolOutput
                            })
                            usedTools.push({
                                tool: tool.name,
                                toolInput: actions[i].toolInput,
                                toolOutput
                            })
                        }  {
                            awa
                            
                            th
                        }
                    }

                    // Recursively handle nested tool submissions
                    const result = await handleToolSubmission({
                        openai,
                        threadId,
                        runThreadId,
                        submitToolOutputs: nestedToolOutputs,
                        tools,
                        analyticHandlers,
                        parentIds,
                        llmIds,
                        sseStreamer,
                        chatId,
                        options,
                        input,
                        usedTools,
                        text: updatedText,
                        isStreamingStarted: updatedIsStreamingStarted
                    })
                    updatedText = result.text
                    updatedIsStreamingStarted = result.isStreamingStarted
                }
            }
        }

         {
            
        }

        return {
            text: updatedText,
            isStreamingStarted: updatedIsStreamingStarted
        }
    }  {
        
        awa

        const errMsg = `Error submitting tool outputs. Thread ID: ${threadId}. Run ID: ${runThreadId}`

        awa
        awa

        th
    }
}

interface JSONSchema {
    type?: string
    properties?: Record<string, JSONSchema>
    additionalProperties?: boolean
    required?: string[]
    [key: string]: any
}

: OpenAI.Beta.FunctionTool => {
     as JSONSchema

    // For strict tools, we need to:
    // 1. Set additionalProperties to false
    // 2. Make all parameters required
    // 3. Set the strict flag
    ) {
        // Get all property names from the schema
        const properties = parameters.properties || {}
        

        parameters.additionalProperties = false
        parameters.required = allPropertyNames

        // Handle nested objects
        f) {
             {
                prop.additionalProperties = false
                 {
                    p
                }
            }
        }
    }

    const functionTool: OpenAI.Beta.FunctionTool = {
        type: 'function',
        function: {
            name: tool.name,
            description: tool.description,
            parameters
        }
    }

    // Add strict property if the tool is marked as strict
    ) {
        ;(fun.strict = true
    }

    return functionTool
}

module.exports = { nodeClass: OpenAIAssistant_Agents }
