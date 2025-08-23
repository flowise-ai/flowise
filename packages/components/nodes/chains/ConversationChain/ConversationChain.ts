import { ConversationChain } from 'langchain/chains'
import {
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    MessagesPlaceholder,
    SystemMessagePromptTemplate,
    BaseMessagePromptTemplateLike,
    PromptTemplate
} from '@langchain/core/prompts'
import { RunnableSequence } from '@langchain/core/runnables'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { HumanMessage } from '@langchain/core/messages'
import { ConsoleCallbackHandler as LCConsoleCallbackHandler } from '@langchain/core/tracers/console'
import { checkInputs, Moderation, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'
import { addImagesToMessages, llmSupportsVision } from '../../../src/multiModalUtils'
import { ChatOpenAI } from '../../chatmodels/ChatOpenAI/FlowiseChatOpenAI'
import {
    IVisionChatModal,
    FlowiseMemory,
    ICommonObject,
    INode,
    INodeData,
    INodeParams,
    MessageContentImageUrl,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { getBaseClasses, handleEscapeCharacters, transformBracesWithColon } from '../../../src/utils'

let systemMessage = `The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.`
const inputKey = 'input'

class ConversationChain_Chains implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    baseClasses: string[]
    description: string
    inputs: INodeParams[]
    sessionId?: string

     {
        this.label = 'Conversation Chain'
        this.name = 'conversationChain'
        this.version = 3.0
        this.type = 'ConversationChain'
        this.icon = 'conv.svg'
        this.category = 'Chains'
        this.description = 'Chat models specific conversational chain with memory'
        th]
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseMemory'
            },
            {
                label: 'Chat Prompt Template',
                name: 'chatPromptTemplate',
                type: 'ChatPromptTemplate',
                description: 'Override existing prompt with Chat Prompt Template. Human Message must includes {input} variable',
                optional: true
            },
            /* Deprecated
            {
                label: 'Document',
                name: 'document',
                type: 'Document',
                description:
                    'Include whole document into the context window, if you get maximum context length error, please use model with higher context window like Claude 100k, or gpt4 32k',
                optional: true,
                list: true
            },*/
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            },
            {
                label: 'System Message',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                description: 'If Chat Prompt Template is provided, this will be ignored',
                additionalParams: true,
                optional: true,
                default: systemMessage,
                placeholder: systemMessage
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        
        return chain
    }

    a: Promise<string | object> {
        const memory = nodeData.inputs?.memory

        
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            try {
                // Use the output of the moderation chain as input for the LLM chain
                
            }  {
                awa => )
                 {
                    
                }
                
            }
        }

        
        

        let res = ''
        let callbacks = [loggerHandler, ...additionalCallback]

         {
            )
        }

         {
            
            
            
        } else {
            
        }

        await memory.addChatMessages(
            [
                {
                    text: input,
                    type: 'userMessage'
                },
                {
                    text: res,
                    type: 'apiMessage'
                }
            ],
            this.sessionId
        )

        return res
    }
}

 => {
    const memory = nodeData.inputs?.memory as FlowiseMemory
    let prompt = nodeData.inputs?.systemMessagePrompt as string
    p
    const chatPromptTemplate = nodeData.inputs?.chatPromptTemplate as ChatPromptTemplate
    let model = nodeData.inputs?.model as BaseChatModel

     {
        const sysPrompt = chatPromptTemplate.promptMessages[0]
        const humanPrompt = chatPromptTemplate.promptMessages[chatPromptTemplate.promptMessages.length - 1]
        , humanPrompt]

        // OpenAI works better when separate images into standalone human messages
         {
            me)
        } el {
             as HumanMessagePromptTemplate
            .template as string
            const msg = HumanMessagePromptTemplate.fromTemplate([
                ...humanImageMessages,
                {
                    text: template
                }
            ])
            msg.inputVariables = lastMessage.inputVariables
            me
        }

        
        .p {
            // @ts-ignore
            .promptValues
        }

        return chatPrompt
    }

    const messages: BaseMessagePromptTemplateLike[] = [
        Sy,
        new Me,
        HumanMe
    ]

    // OpenAI works better when separate images into standalone human messages
     {
        me)
    } el {
        me
        me)
    }

    

    return chatPrompt
}

 => {
    let model = nodeData.inputs?.model as BaseChatModel
    const memory = nodeData.inputs?.memory as FlowiseMemory
    const memoryKey = memory.memoryKey ?? 'chat_history'
    const prependMessages = options?.prependMessages

    let messageContent: MessageContentImageUrl[] = []
    ) {
        me
        const visionChatModel = model as IVisionChatModal
         {
            v
        } else {
            // revert to previous values if image upload is empty
            v
        }
    }

    
    let promptVariables = {}
    .promptValues
     {
        
        f {
            promptVariables = {
                ...promptVariables,
                 => {
                    return promptValues[val]
                }
            }
        }
    }

    const conversationChain = RunnableSequence.from([
        {
             => input.input,
             => {
                
                return history
            },
            ...promptVariables
        },
        p,
        model,
        new St
    ])

    return conversationChain
}

module.exports = { nodeClass: ConversationChain_Chains }
