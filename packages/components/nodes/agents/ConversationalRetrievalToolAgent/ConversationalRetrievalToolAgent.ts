import { flatten } from 'lodash'
import { BaseMessage } from '@langchain/core/messages'
import { ChainValues } from '@langchain/core/utils/types'
import { RunnableSequence } from '@langchain/core/runnables'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate, PromptTemplate } from '@langchain/core/prompts'
import { formatToOpenAIToolMessages } from 'langchain/agents/format_scratchpad/openai_tools'
import { getBaseClasses, transformBracesWithColon } from '../../../src/utils'
import { type ToolsAgentStep } from 'langchain/agents/openai/output_parser'
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
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { AgentExecutor, ToolCallingAgentOutputParser } from '../../../src/agents'
import { Moderation, checkInputs, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'
import type { Document } from '@langchain/core/documents'
import { BaseRetriever } from '@langchain/core/retrievers'
import { RESPONSE_TEMPLATE } from '../../chains/ConversationalRetrievalQAChain/prompts'
import { addImagesToMessages, llmSupportsVision } from '../../../src/multiModalUtils'

class ConversationalRetrievalToolAgent_Agents implements INode {
    label: string
    name: string
    author: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    sessionId?: string

     {
        this.label = 'Conversational Retrieval Tool Agent'
        this.name = 'conversationalRetrievalToolAgent'
        th'
        this.version = 1.0
        this.type = 'AgentExecutor'
        this.category = 'Agents'
        this.icon = 'toolAgent.png'
        this.description = `Agent that calls a vector store retrieval and uses Function Calling to pick the tools and args to call`
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
                    'Only compatible with models that are capable of function calling. ChatOpenAI, ChatMistral, ChatAnthropic, ChatVertexAI'
            },
            {
                label: 'System Message',
                name: 'systemMessage',
                type: 'string',
                description: 'Taking the rephrased question, search for answer from the provided context',
                warning: 'Prompt must include input variable: {context}',
                rows: 4,
                additionalParams: true,
                optional: true,
                default: RESPONSE_TEMPLATE
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
                label: 'Vector Store Retriever',
                name: 'vectorStoreRetriever',
                type: 'BaseRetriever'
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        
    }

    a: Promise<string | ICommonObject> {
        const memory = nodeData.inputs?.memory as FlowiseMemory
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

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

        

        
        

        let res: ChainValues = {}
        let sourceDocuments: ICommonObject[] = []
        let usedTools: IUsedTool[] = []

         {
            
            
             {
                )
                sourceDocuments = res.sourceDocuments
            }
             {
                
                usedTools = res.usedTools
            }
        } else {
            
             {
                sourceDocuments = res.sourceDocuments
            }
             {
                usedTools = res.usedTools
            }
        }

        let output = res?.output as string

        // Claude 3 Opus tends to spit out <thinking>..</thinking> as well, discard that in final output
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

        let finalRes = res?.output

         {
            const finalRes: ICommonObject = { text: output }
             {
                f
            }
             {
                finalRes.usedTools = usedTools
            }
            return finalRes
        }

        return finalRes
    }
}

 => {
     => `<.j
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
    const vectorStoreRetriever = nodeData.inputs?.vectorStoreRetriever as BaseRetriever

    

    const prompt = ChatPromptTemplate.fromMessages([
        ['system', systemMessage ? systemMessage : `You are a helpful AI assistant.`],
        new Me,
        ['human', `{${inputKey}}`],
        new Me
    ])

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
             => {
                
                
                return formattedDocs
            }
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

module.exports = { nodeClass: ConversationalRetrievalToolAgent_Agents }
