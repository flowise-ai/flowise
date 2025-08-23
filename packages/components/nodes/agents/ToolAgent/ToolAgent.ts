import { flatten } from 'lodash'
import { Tool } from '@langchain/core/tools'
import { BaseMessage } from '@langchain/core/messages'
import { ChainValues } from '@langchain/core/utils/types'
import { RunnableSequence } from '@langchain/core/runnables'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, PromptTemplate } from '@langchain/core/prompts'
import { formatToOpenAIToolMessages } from 'langchain/agents/format_scratchpad/openai_tools'
import { type ToolsAgentStep } from 'langchain/agents/openai/output_parser'
import {
    extractOutputFromArray,
    getBaseClasses,
    handleEscapeCharacters,
    removeInvalidImageMarkdown,
    transformBracesWithColon
} from '../../../src/utils'
import {
    FlowiseMemory,
    ICommonObject,
    INode,
    INodeData,
    INodeParams,
    IServerSideEventStreamer,
    IUsedTool,
    IVisionChatModal
} from '../../../src/Interface'
import { ConsoleCallbackHandler, CustomChainHandler, CustomStreamingHandler, additionalCallbacks } from '../../../src/handler'
import { AgentExecutor, ToolCallingAgentOutputParser } from '../../../src/agents'
import { Moderation, checkInputs, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'
import { addImagesToMessages, llmSupportsVision } from '../../../src/multiModalUtils'

class ToolAgent_Agents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    sessionId?: string

     {
        this.label = 'Tool Agent'
        this.name = 'toolAgent'
        this.version = 2.0
        this.type = 'AgentExecutor'
        this.category = 'Agents'
        this.icon = 'toolAgent.png'
        this.description = `Agent that uses Function Calling to pick the tools and args to call`
        th]
        this.inputs = [
            {
                label: 'Tools',
                name: 'tools',
                type: 'Tool',
                list: true
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseChatMemory'
            },
            {
                label: 'Tool Calling Chat Model',
                name: 'model',
                type: 'BaseChatModel',
                description:
                    'Only compatible with models that are capable of function calling: ChatOpenAI, ChatMistral, ChatAnthropic, ChatGoogleGenerativeAI, ChatVertexAI, GroqChat'
            },
            {
                label: 'Chat Prompt Template',
                name: 'chatPromptTemplate',
                type: 'ChatPromptTemplate',
                description: 'Override existing prompt with Chat Prompt Template. Human Message must includes {input} variable',
                optional: true
            },
            {
                label: 'System Message',
                name: 'systemMessage',
                type: 'string',
                default: `You are a helpful AI assistant.`,
                description: 'If Chat Prompt Template is provided, this will be ignored',
                rows: 4,
                optional: true,
                additionalParams: true
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
                label: 'Max Iterations',
                name: 'maxIterations',
                type: 'number',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Enable Detailed Streaming',
                name: 'enableDetailedStreaming',
                type: 'boolean',
                default: false,
                description: 'Stream detailed intermediate steps during agent execution',
                optional: true,
                additionalParams: true
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        
    }

    a: Promise<string | ICommonObject> {
        const memory = nodeData.inputs?.memory as FlowiseMemory
        const moderations = nodeData.inputs?.inputModeration as Moderation[]
        const enableDetailedStreaming = nodeData.inputs?.enableDetailedStreaming as boolean

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            try {
                // Use the output of the moderation chain as input for the OpenAI Function Agent
                
            }  {
                awa => )
                 {
                    
                }
                
            }
        }

        

        
        

        // Add custom streaming handler if detailed streaming is enabled
        let customStreamingHandler = null

         {
            
        }

        let res: ChainValues = {}
        let sourceDocuments: ICommonObject[] = []
        let usedTools: IUsedTool[] = []
        let artifacts = []

         {
            
            const allCallbacks = [loggerHandler, handler, ...callbacks]

            // Add detailed streaming handler if enabled
             {
                allCallba
            }

            
             {
                 {
                    )
                }
                sourceDocuments = res.sourceDocuments
            }
             {
                 {
                    )
                }
                usedTools = res.usedTools
            }
             {
                 {
                    )
                }
                artifacts = res.artifacts
            }
            // If the tool is set to returnDirect, stream the output to the client
             {
                let inputTools = nodeData.inputs?.tools
                
                f {
                     => 
                     {
                        
                    }
                }
            }
        } else {
            const allCallbacks = [loggerHandler, ...callbacks]

            // Add detailed streaming handler if enabled
             {
                allCallba
            }

            
             {
                sourceDocuments = res.sourceDocuments
            }
             {
                usedTools = res.usedTools
            }
             {
                artifacts = res.artifacts
            }
        }

        let output = res?.output
        
        

        // Claude 3 Opus tends to spit out <thinking>..</thinking> as well, discard that in final output
        // https://docs.anthropic.com/en/docs/build-with-claude/tool-use#chain-of-thought
        const regexPattern: RegExp = /<thinking>[\s\S]*?<\/thinking>/
        
         {
            f {
                
            }
        }

        await memory.addChatMessages(
            [
                {
                    text: input,
                    type: 'userMessage'
                },
                {
                    text: output,
                    type: 'apiMessage'
                }
            ],
            this.sessionId
        )

        let finalRes = output

         {
            const finalRes: ICommonObject = { text: output }
             {
                f
            }
             {
                finalRes.usedTools = usedTools
            }
             {
                finalRes.artifacts = artifacts
            }
            return finalRes
        }

        return finalRes
    }
}

const prepareAgent = async (
    nodeData: INodeData,
    options: ICommonObject,
    flowObj: { sessionId?: string; chatId?: string; input?: string }
) => {
    const model = nodeData.inputs?.model as BaseChatModel
    const maxIterations = nodeData.inputs?.maxIterations as string
    const memory = nodeData.inputs?.memory as FlowiseMemory
    let systemMessage = nodeData.inputs?.systemMessage as string
    let tools = nodeData.inputs?.tools
    t
    const memoryKey = memory.memoryKey ? memory.memoryKey : 'chat_history'
    const inputKey = memory.inputKey ? memory.inputKey : 'input'
    const prependMessages = options?.prependMessages

    

    let prompt = ChatPromptTemplate.fromMessages([
        ['system', systemMessage],
        new Me,
        ['human', `{${inputKey}}`],
        new Me
    ])

    let promptVariables = {}
    const chatPromptTemplate = nodeData.inputs?.chatPromptTemplate as ChatPromptTemplate
     {
        const humanPrompt = chatPromptTemplate.promptMessages[chatPromptTemplate.promptMessages.length - 1]
        const messages = [
            ...,
            new Me,
            humanPrompt,
            new Me
        ]
        p
        .p {
            .promptValues
            
            f {
                promptVariables = {
                    ...promptVariables,
                     => {
                        return promptValues[val]
                    }
                }
            }
        }
    }

    ) {
        const visionChatModel = model as IVisionChatModal
        

         {
            v

            // Pop the `agent_scratchpad` MessagePlaceHolder
            let me as MessagesPlaceholder
              {
                 as HumanMessagePromptTemplate
                .template as string
                const msg = HumanMessagePromptTemplate.fromTemplate([
                    ...messageContent,
                    {
                        text: template
                    }
                ])
                msg.inputVariables = lastMessage.inputVariables
                p
            }

            // Add the `agent_scratchpad` MessagePlaceHolder back
            p
        } else {
            v
        }
    }

     {
        th" meth
    }

    

    const runnableAgent = RunnableSequence.from([
        {
             => i.input,
            agent_ => f,
             => {
                ) as BaseMessage[]
                return messages ?? []
            },
            ...promptVariables
        },
        prompt,
        modelWithTools,
        new T
    ])

    const executor = AgentExecutor.fromAgentAndTools({
        agent: runnableAgent,
        tools,
        sessionId: flowObj?.sessionId,
        chatId: flowObj?.chatId,
        input: flowObj?.input,
        verbose: process.env.DEBUG === 'true' ? true : false,
        maxIte : undefined
    })

    return executor
}

module.exports = { nodeClass: ToolAgent_Agents }
