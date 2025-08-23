import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { ICommonObject, IMessage, INode, INodeData, INodeOptionsValue, INodeParams, IServerSideEventStreamer } from '../../../src/Interface'
import { AIMessageChunk, BaseMessageLike, MessageContentText } from '@langchain/core/messages'
import { DEFAULT_SUMMARIZER_TEMPLATE } from '../prompt'
import { z } from 'zod'
import { AnalyticHandler } from '../../../src/handler'
import { ILLMMessage, IStructuredOutput } from '../Interface.Agentflow'
import {
    getPastChatHistoryImageMessages,
    getUniqueImageMessages,
    processMessagesWithImages,
    replaceBase64ImagesWithFileReferences,
    updateFlowState
} from '../utils'
import { get } from 'lodash'

class LLM_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'LLM'
        this.name = 'llmAgentflow'
        this.version = 1.0
        this.type = 'LLM'
        this.category = 'Agent Flows'
        this.description = 'Large language models to analyze user-provided inputs and generate responses'
        this.color = '#64B5F6'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Model',
                name: 'llmModel',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                loadConfig: true
            },
            {
                label: 'Messages',
                name: 'llmMessages',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Role',
                        name: 'role',
                        type: 'options',
                        options: [
                            {
                                label: 'System',
                                name: 'system'
                            },
                            {
                                label: 'Assistant',
                                name: 'assistant'
                            },
                            {
                                label: 'Developer',
                                name: 'developer'
                            },
                            {
                                label: 'User',
                                name: 'user'
                            }
                        ]
                    },
                    {
                        label: 'Content',
                        name: 'content',
                        type: 'string',
                        acceptVariable: true,
                        generateInstruction: true,
                        rows: 4
                    }
                ]
            },
            {
                label: 'Enable Memory',
                name: 'llmEnableMemory',
                type: 'boolean',
                description: 'Enable memory for the conversation thread',
                default: true,
                optional: true
            },
            {
                label: 'Memory Type',
                name: 'llmMemoryType',
                type: 'options',
                options: [
                    {
                        label: 'All Messages',
                        name: 'allMessages',
                        description: 'Retrieve all messages from the conversation'
                    },
                    {
                        label: 'Window Size',
                        name: 'windowSize',
                        description: 'Uses a fixed window size to surface the last N messages'
                    },
                    {
                        label: 'Conversation Summary',
                        name: 'conversationSummary',
                        description: 'Summarizes the whole conversation'
                    },
                    {
                        label: 'Conversation Summary Buffer',
                        name: 'conversationSummaryBuffer',
                        description: 'Summarize conversations once token limit is reached. Default to 2000'
                    }
                ],
                optional: true,
                default: 'allMessages',
                show: {
                    llmEnableMemory: true
                }
            },
            {
                label: 'Window Size',
                name: 'llmMemoryWindowSize',
                type: 'number',
                default: '20',
                description: 'Uses a fixed window size to surface the last N messages',
                show: {
                    llmMemoryType: 'windowSize'
                }
            },
            {
                label: 'Max Token Limit',
                name: 'llmMemoryMaxTokenLimit',
                type: 'number',
                default: '2000',
                description: 'Summarize conversations once token limit is reached. Default to 2000',
                show: {
                    llmMemoryType: 'conversationSummaryBuffer'
                }
            },
            {
                label: 'Input Message',
                name: 'llmUserMessage',
                type: 'string',
                description: 'Add an input message as user message at the end of the conversation',
                rows: 4,
                optional: true,
                acceptVariable: true,
                show: {
                    llmEnableMemory: true
                }
            },
            {
                label: 'Return Response As',
                name: 'llmReturnResponseAs',
                type: 'options',
                options: [
                    {
                        label: 'User Message',
                        name: 'userMessage'
                    },
                    {
                        label: 'Assistant Message',
                        name: 'assistantMessage'
                    }
                ],
                default: 'userMessage'
            },
            {
                label: 'JSON Structured Output',
                name: 'llmStructuredOutput',
                description: 'Instruct the LLM to give output in a JSON structured schema',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Key',
                        name: 'key',
                        type: 'string'
                    },
                    {
                        label: 'Type',
                        name: 'type',
                        type: 'options',
                        options: [
                            {
                                label: 'String',
                                name: 'string'
                            },
                            {
                                label: 'String Array',
                                name: 'stringArray'
                            },
                            {
                                label: 'Number',
                                name: 'number'
                            },
                            {
                                label: 'Boolean',
                                name: 'boolean'
                            },
                            {
                                label: 'Enum',
                                name: 'enum'
                            },
                            {
                                label: 'JSON Array',
                                name: 'jsonArray'
                            }
                        ]
                    },
                    {
                        label: 'Enum Values',
                        name: 'enumValues',
                        type: 'string',
                        placeholder: 'value1, value2, value3',
                        description: 'Enum values. Separated by comma',
                        optional: true,
                        show: {
                            'llmStructuredOutput[$index].type': 'enum'
                        }
                    },
                    {
                        label: 'JSON Schema',
                        name: 'jsonSchema',
                        type: 'code',
                        placeholder: `{
    "answer": {
        "type": "string",
        "description": "Value of the answer"
    },
    "reason": {
        "type": "string",
        "description": "Reason for the answer"
    },
    "optional": {
        "type": "boolean"
    },
    "count": {
        "type": "number"
    },
    "children": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "string",
                    "description": "Value of the children's answer"
                }
            }
        }
    }
}`,
                        description: 'JSON schema for the structured output',
                        optional: true,
                        hideCodeExecute: true,
                        show: {
                            'llmStructuredOutput[$index].type': 'jsonArray'
                        }
                    },
                    {
                        label: 'Description',
                        name: 'description',
                        type: 'string',
                        placeholder: 'Description of the key'
                    }
                ]
            },
            {
                label: 'Update Flow State',
                name: 'llmUpdateState',
                description: 'Update runtime state during the execution of the workflow',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Key',
                        name: 'key',
                        type: 'asyncOptions',
                        loadMethod: 'listRuntimeStateKeys',
                        freeSolo: true
                    },
                    {
                        label: 'Value',
                        name: 'value',
                        type: 'string',
                        acceptVariable: true,
                        acceptNodeOutputAsVariable: true
                    }
                ]
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const componentNodes = options.componentNodes as {
                [key: string]: INode
            }

            const returnOptions: INodeOptionsValue[] = []
            f {
                const componentNode = componentNodes[nodeName]
                 {
                    ) {
                        continue
                    }
                    returnOptions.push({
                        label: componentNode.label,
                        name: nodeName,
                        imageSrc: componentNode.icon
                    })
                }
            }
            return returnOptions
        },
        a: Promise<INodeOptionsValue[]> {
            const previousNodes = options.previousNodes as ICommonObject[]
             => n
            const state = startAgentflowNode?.inputs?.startState as ICommonObject[]
             => ({ label: )
        }
    }

    a: Promise<any> {
        let llmIds: ICommonObject | undefined
        let analyticHandlers = options.analyticHandlers as AnalyticHandler

        try {
            const abortController = options.abortController as AbortController

            // Extract input parameters
            const model = nodeData.inputs?.llmModel as string
            const modelConfig = nodeData.inputs?.llmModelConfig as ICommonObject
             {
                th
            }

            // Extract memory and configuration options
            const enableMemory = nodeData.inputs?.llmEnableMemory as boolean
            const memoryType = nodeData.inputs?.llmMemoryType as string
            const userMessage = nodeData.inputs?.llmUserMessage as string
            const _llmUpdateState = nodeData.inputs?.llmUpdateState
            const _llmStructuredOutput = nodeData.inputs?.llmStructuredOutput
             ?? []

            // Extract runtime state and history
            const state = options.agentflowRuntime?.state as ICommonObject
             ?? []
             ?? []
            const prependedChatHistory = options.prependedChatHistory as IMessage[]
            const chatId = options.chatId as string

            // Initialize the LLM model instance
            const nodeInstanceFilePath = options.componentNodes[model].filePath as string
            
            
            const newNodeData = {
                ...nodeData,
                credential: modelConfig['FLOWISE_CREDENTIAL_ID'],
                inputs: {
                    ...nodeData.inputs,
                    ...modelConfig
                }
            }
            let llmN) as BaseChatModel

            // Prepare messages array
            const messages: BaseMessageLike[] = []
            // Use to store messages with image file references as we do not want to store the base64 data into database
            let runtimeImageMessagesWithFileRef: BaseMessageLike[] = []
            // Use to keep track of past messages with image file references
            let pastImageMessagesWithFileRef: BaseMessageLike[] = []

            // Prepend history ONLY if it is the first node
             {
                f {
                    const role: string = msg.role === 'apiMessage' ? 'assistant' : 'user'
                    const content: string = msg.content ?? ''
                    messages.push({
                        role,
                        content
                    })
                }
            }

            f {
                const role = msg.role
                const content = msg.content
                 {
                     {
                        me
                    } else {
                        me
                    }
                }
            }

            // Handle memory management if enabled
             {
                await this.handleMemory({
                    messages,
                    memoryType,
                    pastChatHistory,
                    runtimeChatHistory,
                    llmNodeInstance,
                    nodeData,
                    userMessage,
                    input,
                    abortController,
                    options,
                    modelConfig,
                    runtimeImageMessagesWithFileRef,
                    pastImageMessagesWithFileRef
                })
            } el {
                /*
                 * If this is the first node:
                 * - Add images to messages if exist
                 * - Add user message if it does not exist in the llmMessages array
                 */
                 {
                    
                     {
                        const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                        me
                        
                    }
                }

                 => m) {
                    messages.push({
                        role: 'user',
                        content: input
                    })
                }
            }
            delete nodeData.inputs?.llmMessages

            // Configure structured output if specified
             && _llmStructuredOutput.length > 0
             {
                llmN
            }

            // Initialize response and determine if streaming is possible
            let 
            const isLastNode = options.isLastNode as boolean
            const isStreamable = isLastNode && options.sseStreamer !== undefined && modelConfig?.streaming !== false && !isStructuredOutput

            // Start analytics
             {
                const llmLabel = options?.componentNodes?.[model]?.label || model
                llmI
            }

            // Track execution time
            

            const sseStreamer: IServerSideEventStreamer | undefined = options.sseStreamer

             {
                
            } else {
                

                // Stream whole response back to UI if this is the last node
                 {
                    const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
                    let finalResponse = ''
                    ) {
                        f => .j
                    } el {
                        finalResponse = response.content
                    } else {
                        f
                    }
                    
                }
            }

            // Calculate execution time
            
            const timeDelta = endTime - startTime

            // Update flow state if needed
            let newState = { ...state }
             && _llmUp {
                newState = up
            }

            // Clean up empty inputs
            f {
                 {
                    delete nodeData.inputs[key]
                }
            }

            // Prepare final response and output object
            let finalResponse = ''
            ) {
                f => .j
            } el {
                finalResponse = response.content
            } else {
                f
            }
            

            // End analytics tracking
             {
                awa
            }

            // Send additional streaming events if needed
             {
                th
            }

            // Process template variables in state
            .length > 0) {
                f {
                    
                    ) {
                        // Handle simple output replacement
                         {
                            newState[key] = finalResponse
                            continue
                        }

                        // Handle JSON path expressions like {{ output.item1 }}
                        // eslint-disable-next-line
                        
                         {
                            try {
                                // Parse the response if it's JSON
                                 : finalResponse
                                // Get the value using lodash get
                                const path = match[1]
                                
                                newState[key] = value ?? stateValue // Fall back to original if path not found
                            }  {
                                // If JSON parsing fails, keep original template
                                
                                newState[key] = stateValue
                            }
                        }
                    }
                }
            }

            // Replace the actual messages array with one that includes the file references for images instead of base64 data
            const messagesWithFileReferences = replaceBase64ImagesWithFileReferences(
                messages,
                runtimeImageMessagesWithFileRef,
                pastImageMessagesWithFileRef
            )

            // Only add to runtime chat history if this is the first node
            const inputMessages = []
             {
                 {
                    
                }
                 {
                     {
                         => m) {
                            
                        } else {
                            llmMe => {
                                 {
                                    
                                }
                            })
                        }
                    } else {
                        
                    }
                }
            }

            const returnResponseAs = nodeData.inputs?.llmReturnResponseAs as string
            let returnRole = 'user'
             {
                returnRole = 'assistant'
            }

            // Prepare and return the final output
            return {
                id: nodeData.id,
                name: this.name,
                input: {
                    messages: messagesWithFileReferences,
                    ...nodeData.inputs
                },
                output,
                state: newState,
                chatHistory: [
                    ...inputMessages,

                    // LLM response
                    {
                        role: returnRole,
                        content: finalResponse,
                        name: n..t : nodeData?.id
                    }
                ]
            }
        }  {
             {
                awa)
            }

             {
                throw error
            }
            th}`)
        }
    }

    /**
     * Handles memory management based on the specified memory type
     */
    private async handleMemory({
        messages,
        memoryType,
        pastChatHistory,
        runtimeChatHistory,
        llmNodeInstance,
        nodeData,
        userMessage,
        input,
        abortController,
        options,
        modelConfig,
        runtimeImageMessagesWithFileRef,
        pastImageMessagesWithFileRef
    }: {
        messages: BaseMessageLike[]
        memoryType: string
        pastChatHistory: BaseMessageLike[]
        runtimeChatHistory: BaseMessageLike[]
        llmNodeInstance: BaseChatModel
        nodeData: INodeData
        userMessage: string
        input: string | Record<string, any>
        abortController: AbortController
        options: ICommonObject
        modelConfig: ICommonObject
        runtimeImageMessagesWithFileRef: BaseMessageLike[]
        pastImageMessagesWithFileRef: BaseMessageLike[]
    }): Promise<void> {
        
        pastChatHistory = updatedPastMessages
        pa

        let pastMessages = [...pastChatHistory, ...runtimeChatHistory]
         {
            /*
             * If this is the first node:
             * - Add images to messages if exist
             * - Add user message
             */
             {
                
                 {
                    const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                    pa
                    
                }
            }
            pastMessages.push({
                role: 'user',
                content: input
            })
        }
        
        pastMessages = updatedMessages
        pa

         {
             {
                // Window memory: Keep the last N messages
                const windowSize = nodeData.inputs?.llmMemoryWindowSize as number
                
                me
            } el {
                // Summary memory: Summarize all past messages
                const summary = await llmNodeInstance.invoke(
                    [
                        {
                            role: 'user',
                            content: DEFAULT_SUMMARIZER_TEMPLATE.replace(
                                '{conversation}',
                                pa => `${m.j
                            )
                        }
                    ],
                    { signal: abortController?.signal }
                )
                me
            } el {
                // Summary buffer: Summarize messages that exceed token limit
                awa
            } else {
                // Default: Use all messages
                me
            }
        }

        // Add user message
         {
            messages.push({
                role: 'user',
                content: userMessage
            })
        }
    }

    /**
     * Handles conversation summary buffer memory type
     */
    private async handleSummaryBuffer(
        messages: BaseMessageLike[],
        pastMessages: BaseMessageLike[],
        llmNodeInstance: BaseChatModel,
        nodeData: INodeData,
        abortController: AbortController
    ): Promise<void> {
         || 2000

        // Convert past messages to a format suitable for token counting
         => `${m.j
        

         {
            // Cal
            let currBufferLength = tokenCount
            const messagesToSummarize = []
            const remainingMessages = [...pastMessages]

            // Remove messages from the beginning until we're under the token limit
            wh {
                
                 {
                    me
                    // Recalculate token count for remaining messages
                     => `${m.j
                    
                }
            }

            // Summarize the messages that were removed
             => `${m.j

            const summary = await llmNodeInstance.invoke(
                [
                    {
                        role: 'user',
                        
                    }
                ],
                { signal: abortController?.signal }
            )

            // Add summary as a system message at the beginning, then add remaining messages
            me
            me
        } else {
            // If under token limit, use all messages
            me
        }
    }

    /**
     * Configures structured output for the LLM
     */
    p: BaseChatModel {
        try {
            const zodObj: ICommonObject = {}
            f {
                 {
                    z.
                } el {
                    z).
                } el {
                    z.
                } el {
                    z.
                } el {
                    .map(( => ) || []
                    zodObj[sch.key] = z
                        .enum(enumValue : 
                        .
                } el {
                    const jsonSchema = sch.jsonSchema
                     {
                        try {
                            // Parse the JSON schema
                            

                            // Create a Zod schema from the JSON schema
                            

                            // Create an array schema of the item schema
                            z.
                        }  {
                            
                            // Fallback to generic array of records
                            z)).
                        }
                    } else {
                        // If no schema provided, use generic array of records
                        z)).
                    }
                }
            }
            

            // @ts-ignore
            
        }  {
            
            return llmNodeInstance
        }
    }

    /**
     * Handles streaming response from the LLM
     */
    private async handleStreamingResponse(
        sseStreamer: IServerSideEventStreamer | undefined,
        llmNodeInstance: BaseChatModel,
        messages: BaseMessageLike[],
        chatId: string,
        abortController: AbortController
    ): Promise<AIMessageChunk> {
        let 

        try {
            f) {
                 {
                    let content = ''
                     &&  {
                        const contents = chunk.content as MessageContentText[]
                         => .j
                    } else {
                        
                    }
                    
                }

                
            }
        }  {
            
            throw error
        }
         &&  {
            const responseContents = response.content as MessageContentText[]
             => .j
        }
        return response
    }

    /**
     * Prepares the output object with response and metadata
     */
    private prepareOutputObject(
        response: AIMessageChunk,
        finalResponse: string,
        startTime: number,
        endTime: number,
        timeDelta: number,
        isStructuredOutput: boolean
    ): any {
        const output: any = {
            content: finalResponse,
            timeMetadata: {
                start: startTime,
                end: endTime,
                delta: timeDelta
            }
        }

         {
            output.calledTools = response.tool_calls
        }

         {
            output.usageMetadata = response.usage_metadata
        }

         {
            const structuredOutput = response as Record<string, any>
            f {
                 {
                    output[key] = structuredOutput[key]
                }
            }
        }

        return output
    }

    /**
     * Sends additional streaming events for tool calls and metadata
     */
    p: void {
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer

         {
            
        }

         {
            
        }

        
    }

    /**
     * Creates a Zod schema from a JSON schema object
     * @param jsonSchema The JSON schema object
     * @returns A Zod schema
     */
    p: z.ZodTypeAny {
        // If the schema is an object with properties, create an object schema
         {
            const schemaObj: Record<string, z.ZodTypeAny> = {}

            // Process each property in the schema
            f) {
                 {
                    // Handle null values
                    
                } el) {
                    // Check if the property has a type definition
                     {
                        const type = value.type as string
                         : '') || ''

                        // Create the appropriate Zod type based on the type property
                         {
                            .
                        } el {
                            .
                        } el {
                            .
                        } el {
                            // If it's an array type, check if items is defined
                             {
                                
                                .
                            } else {
                                // Default to array of any if items not specified
                                ).
                            }
                        } el {
                            // If it's an object type, check if properties is defined
                             {
                                
                                
                            } else {
                                // Default to record of any if properties not specified
                                ).
                            }
                        } else {
                            // Default to any for unknown types
                            .
                        }

                        // Check if the property is optional
                         {
                            
                        }
                    } el) {
                        // Array values without a type property
                         {
                            // If the array has items, recursively create a schema for the first item
                            
                            
                        } else {
                            // Empty array, allow any array
                            )
                        }
                    } else {
                        // It's a nested object without a type property, recursively create schema
                        
                    }
                } el) {
                    // Array values
                     {
                        // If the array has items, recursively create a schema for the first item
                        
                        
                    } else {
                        // Empty array, allow any array
                        )
                    }
                } else {
                    // F
                    // Use the corresponding Zod type
                     {
                        
                    } el {
                        
                    } el {
                        
                    } else {
                        
                    }
                }
            }

            
        }

        // Fallback to any for unknown types
        
    }
}

module.exports = { nodeClass: LLM_Agentflow }
