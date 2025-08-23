import { flatten } from 'lodash'
import { ChainValues } from '@langchain/core/utils/types'
import { AgentStep } from '@langchain/core/agents'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { RunnableSequence } from '@langchain/core/runnables'
import { Tool } from '@langchain/core/tools'
import { ChatPromptTemplate, HumanMessagePromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts'
import { formatLogToMessage } from 'langchain/agents/format_scratchpad/log_to_message'
import { getBaseClasses, transformBracesWithColon } from '../../../src/utils'
import {
    FlowiseMemory,
    ICommonObject,
    IMessage,
    INode,
    INodeData,
    INodeParams,
    IServerSideEventStreamer,
    IUsedTool
} from '../../../src/Interface'
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { AgentExecutor, XMLAgentOutputParser } from '../../../src/agents'
import { Moderation, checkInputs } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

const defaultSystemMessage = `You are a helpful assistant. Help the user answer any questions.

You have access to the following tools:

{tools}

In order to use a tool, you can use <tool></tool> and <tool_input></tool_input> tags. You will then get back a response in the form <observation></observation>
For example, if you have a tool called 'search' that could run a google search, in order to search for the weather in SF you would respond:

<tool>search</tool><tool_input>weather in SF</tool_input>
<observation>64 degrees</observation>

When you are done, respond with a final answer between <final_answer></final_answer>. For example:

<final_answer>The weather in SF is 64 degrees</final_answer>

Begin!

Previous Conversation:
{chat_history}

Question: {input}
{agent_scratchpad}`

class XMLAgent_Agents implements INode {
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
        this.label = 'XML Agent'
        this.name = 'xmlAgent'
        this.version = 2.0
        this.type = 'XMLAgent'
        this.category = 'Agents'
        this.icon = 'xmlagent.svg'
        th`
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
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
            },
            {
                label: 'System Message',
                name: 'systemMessage',
                type: 'string',
                warning: 'Prompt must include input variables: {tools}, {chat_history}, {input} and {agent_scratchpad}',
                rows: 4,
                default: defaultSystemMessage,
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
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        return null
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
                //  {
                //     
                // }
                
            }
        }
        

        
        

        let res: ChainValues = {}
        let sourceDocuments: ICommonObject[] = []
        let usedTools: IUsedTool[] = []

         {
            
            
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
            // If the tool is set to returnDirect, stream the output to the client
             {
                let inputTools = nodeData.inputs?.tools
                
                f {
                     => 
                     {
                         {
                            
                        }
                    }
                }
            }
        } else {
            
             {
                sourceDocuments = res.sourceDocuments
            }
             {
                usedTools = res.usedTools
            }
        }

        await memory.addChatMessages(
            [
                {
                    text: input,
                    type: 'userMessage'
                },
                {
                    text: res?.output,
                    type: 'apiMessage'
                }
            ],
            this.sessionId
        )

        let finalRes = res?.output

         {
            finalRes = { text: res?.output }
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
    const inputKey = memory.inputKey ? memory.inputKey : 'input'
    const memoryKey = memory.memoryKey ? memory.memoryKey : 'chat_history'
    const prependMessages = options?.prependMessages

    

    let promptMessage = systemMessage ? systemMessage : defaultSystemMessage
     p
     p

    const prompt = ChatPromptTemplate.fromMessages([
        HumanMe,
        new Me
    ])

     => )

     {
        th}`)
    }

    

    ) as IMessage[]
    let chatHistoryMsgTxt = ''
    f {
         {
            chatHistoryMsgTxt += `\\nAI:${message.message}`
        } el {
            chatHistoryMsgTxt += `\\nHuman:${message.message}`
        }
    }

    const runnableAgent = RunnableSequence.from([
        {
             => i.input,
            agent_ => f,
            t =>
                t => `${t,
             => chatHistoryMsgTxt
        },
        prompt,
        llmWithStop,
        new XMLAgentOutputPa
    ])

    const executor = AgentExecutor.fromAgentAndTools({
        agent: runnableAgent,
        tools,
        sessionId: flowObj?.sessionId,
        chatId: flowObj?.chatId,
        input: flowObj?.input,
        isXML: true,
        verbose: process.env.DEBUG === 'true' ? true : false,
        maxIte : undefined
    })

    return executor
}

module.exports = { nodeClass: XMLAgent_Agents }
