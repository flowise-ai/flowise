import { AnalyticHandler } from '../../../src/handler'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { AIMessageChunk, BaseMessageLike } from '@langchain/core/messages'
import {
    getPastChatHistoryImageMessages,
    getUniqueImageMessages,
    processMessagesWithImages,
    replaceBase64ImagesWithFileReferences
} from '../utils'
import { CONDITION_AGENT_SYSTEM_PROMPT, DEFAULT_SUMMARIZER_TEMPLATE } from '../prompt'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

class ConditionAgent_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    tags: string[]
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Condition Agent'
        this.name = 'conditionAgentAgentflow'
        this.version = 1.1
        this.type = 'ConditionAgent'
        this.category = 'Agent Flows'
        this.description = `Utilize an agent to split flows based on dynamic conditions`
        this.baseClasses = [this.type]
        this.color = '#ff8fab'
        this.inputs = [
            {
                label: 'Model',
                name: 'conditionAgentModel',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                loadConfig: true
            },
            {
                label: 'Instructions',
                name: 'conditionAgentInstructions',
                type: 'string',
                description: 'A general instructions of what the condition agent should do',
                rows: 4,
                acceptVariable: true,
                placeholder: 'Determine if the user is interested in learning about AI'
            },
            {
                label: 'Input',
                name: 'conditionAgentInput',
                type: 'string',
                description: 'Input to be used for the condition agent',
                rows: 4,
                acceptVariable: true,
                default: '<p><span class="variable" data-type="mention" data-id="question" data-label="question">{{ question }}</span> </p>'
            },
            {
                label: 'Scenarios',
                name: 'conditionAgentScenarios',
                description: 'Define the scenarios that will be used as the conditions to split the flow',
                type: 'array',
                array: [
                    {
                        label: 'Scenario',
                        name: 'scenario',
                        type: 'string',
                        placeholder: 'User is asking for a pizza'
                    }
                ],
                default: [
                    {
                        scenario: ''
                    },
                    {
                        scenario: ''
                    }
                ]
            },
            {
                label: 'Override System Prompt',
                name: 'conditionAgentOverrideSystemPrompt',
                type: 'boolean',
                description: 'Override initial system prompt for Condition Agent',
                optional: true
            },
            {
                label: 'Node System Prompt',
                name: 'conditionAgentSystemPrompt',
                type: 'string',
                rows: 4,
                optional: true,
                acceptVariable: true,
                default: CONDITION_AGENT_SYSTEM_PROMPT,
                description: 'Expert use only. Modifying this can significantly alter agent behavior. Leave default if unsure',
                show: {
                    conditionAgentOverrideSystemPrompt: true
                }
            }
            /*{
                label: 'Enable Memory',
                name: 'conditionAgentEnableMemory',
                type: 'boolean',
                description: 'Enable memory for the conversation thread',
                default: true,
                optional: true
            },
            {
                label: 'Memory Type',
                name: 'conditionAgentMemoryType',
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
                    conditionAgentEnableMemory: true
                }
            },
            {
                label: 'Window Size',
                name: 'conditionAgentMemoryWindowSize',
                type: 'number',
                default: '20',
                description: 'Uses a fixed window size to surface the last N messages',
                show: {
                    conditionAgentMemoryType: 'windowSize'
                }
            },
            {
                label: 'Max Token Limit',
                name: 'conditionAgentMemoryMaxTokenLimit',
                type: 'number',
                default: '2000',
                description: 'Summarize conversations once token limit is reached. Default to 2000',
                show: {
                    conditionAgentMemoryType: 'conversationSummaryBuffer'
                }
            }*/
        ]
        this.outputs = [
            {
                label: '0',
                name: '0',
                description: 'Condition 0'
            },
            {
                label: '1',
                name: '1',
                description: 'Else'
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
        }
    }

    p: any {
        // Strip whitespace
        j
        const starts = ['```json', '```', '``', '`', '{']
        const ends = ['```', '``', '`', '}']

        let startIndex = -1
        let endIndex = -1

        // Find start of JSON
        f {
            
             {
                 {
                    startIndex += s.length
                }
                break
            }
        }

        // Find end of JSON
         {
            f {
                en
                 {
                     {
                        endIndex += 1
                    }
                    break
                }
            }
        }

         {
            .t
            try {
                
            }  {
                th
            }
        }

        th
    }

    a: Promise<any> {
        let llmIds: ICommonObject | undefined
        let analyticHandlers = options.analyticHandlers as AnalyticHandler

        try {
            const abortController = options.abortController as AbortController

            // Extract input parameters
            const model = nodeData.inputs?.conditionAgentModel as string
            const modelConfig = nodeData.inputs?.conditionAgentModelConfig as ICommonObject
             {
                th
            }
            const conditionAgentInput = nodeData.inputs?.conditionAgentInput as string
            let input = conditionAgentInput || question
            const conditionAgentInstructions = nodeData.inputs?.conditionAgentInstructions as string
            const conditionAgentSystemPrompt = nodeData.inputs?.conditionAgentSystemPrompt as string
            const conditionAgentOverrideSystemPrompt = nodeData.inputs?.conditionAgentOverrideSystemPrompt as boolean
            let systemPrompt = CONDITION_AGENT_SYSTEM_PROMPT
             {
                systemPrompt = conditionAgentSystemPrompt
            }

            // Extract memory and configuration options
            const enableMemory = nodeData.inputs?.conditionAgentEnableMemory as boolean
            const memoryType = nodeData.inputs?.conditionAgentMemoryType as string
            const _conditionAgentScenarios = nodeData.inputs?.conditionAgentScenarios as { scenario: string }[]

            // Extract runtime state and history
            const state = options.agentflowRuntime?.state as ICommonObject
             ?? []
             ?? []

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

            const isStructuredOutput =
                _ && _conditionAgentScenarios.length > 0
             {
                th
            }

            // Prepare messages array
            const messages: BaseMessageLike[] = [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: `{"input": "Hello", "scenarios": ["user is asking about AI", "user is not asking about AI"], "instruction": "Your task is to check if the user is asking about AI."}`
                },
                {
                    role: 'assistant',
                    content: `\`\`\`json\n{"output": "user is not asking about AI"}\n\`\`\``
                }
            ]
            // Use to store messages with image file references as we do not want to store the base64 data into database
            let runtimeImageMessagesWithFileRef: BaseMessageLike[] = []
            // Use to keep track of past messages with image file references
            let pastImageMessagesWithFileRef: BaseMessageLike[] = []

            input = `{"input": ${input}, "scenarios": ${JSON.stringify(
                _ => 
            )}, "instruction": ${conditionAgentInstructions}}`

            // Handle memory management if enabled
             {
                await this.handleMemory({
                    messages,
                    memoryType,
                    pastChatHistory,
                    runtimeChatHistory,
                    llmNodeInstance,
                    nodeData,
                    input,
                    abortController,
                    options,
                    modelConfig,
                    runtimeImageMessagesWithFileRef,
                    pastImageMessagesWithFileRef
                })
            } else {
                /*
                 * If this is the first node:
                 * - Add images to messages if exist
                 */
                 {
                    
                     {
                        const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                        me
                        
                    }
                }
                messages.push({
                    role: 'user',
                    content: input
                })
            }

            // Initialize response and determine if streaming is possible
            let 

            // Start analytics
             {
                const llmLabel = options?.componentNodes?.[model]?.label || model
                llmI
            }

            // Track execution time
            

            

            // Calculate execution time
            
            const timeDelta = endTime - startTime

            // End analytics tracking
             {
                await analyticHandlers.onLLMEnd(
                    llmIds,
                    type
                )
            }

            let calledOutputName: string
            try {
                
                 {
                    th
                }
                calledOutputName = parsedResponse.output
            }  {
                throw new Error(
                    `Failed to parse a valid scenario from the LLM's response. Please check if the model is capable of following JSON output instructions. Raw LLM Response: "${
                        response.content as string
                    }"`
                )
            }

            // Clean up empty inputs
            f {
                 {
                    delete nodeData.inputs[key]
                }
            }

            // Find the first exact match
            const matchedScenarioIndex = _conditionAgentScenarios.findIndex(
                ( =>  === 
            )

             => {
                return {
                    output: scenario.scenario,
                    isFulfilled: index === matchedScenarioIndex
                }
            })

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
                    
                }
            }

            const returnOutput = {
                id: nodeData.id,
                name: this.name,
                input: { messages: messagesWithFileReferences },
                output: {
                    conditions,
                    ,
                    timeMetadata: {
                        start: startTime,
                        end: endTime,
                        delta: timeDelta
                    }
                },
                state,
                chatHistory: [...inputMessages]
            }

            return returnOutput
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
        input: string
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
             */
             {
                
                 {
                    const { imageMessageWithBase64, imageMessageWithFileRef } = imageContents
                    pa
                    
                }
            }
        }
        
        pastMessages = updatedMessages
        pa

         {
             {
                // Window memory: Keep the last N messages
                const windowSize = nodeData.inputs?.conditionAgentMemoryWindowSize as number
                
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

        messages.push({
            role: 'user',
            content: input
        })
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
}

module.exports = { nodeClass: ConditionAgent_Agentflow }
