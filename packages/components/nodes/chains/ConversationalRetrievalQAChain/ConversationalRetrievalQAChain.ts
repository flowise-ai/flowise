import { applyPatch } from 'fast-json-patch'
import { DataSource } from 'typeorm'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { BaseRetriever } from '@langchain/core/retrievers'
import { PromptTemplate, ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts'
import { Runnable, RunnableSequence, RunnableMap, RunnableBranch, RunnableLambda } from '@langchain/core/runnables'
import { BaseMessage, HumanMessage, AIMessage } from '@langchain/core/messages'
import { ConsoleCallbackHandler as LCConsoleCallbackHandler } from '@langchain/core/tracers/console'
import { checkInputs, Moderation, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'
import { StringOutputParser } from '@langchain/core/output_parsers'
import type { Document } from '@langchain/core/documents'
import { BufferMemoryInput } from 'langchain/memory'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { getBaseClasses, mapChatMessageToBaseMessage } from '../../../src/utils'
import { ConsoleCallbackHandler, additionalCallbacks } from '../../../src/handler'
import {
    FlowiseMemory,
    ICommonObject,
    IMessage,
    INode,
    INodeData,
    INodeParams,
    IDatabaseEntity,
    MemoryMethods,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { QA_TEMPLATE, REPHRASE_TEMPLATE, RESPONSE_TEMPLATE } from './prompts'

type RetrievalChainInput = {
    chat_history: string
    question: string
}

const sourceRunnableName = 'FindDocs'

class ConversationalRetrievalQAChain_Chains implements INode {
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
        this.label = 'Conversational Retrieval QA Chain'
        this.name = 'conversationalRetrievalQAChain'
        this.version = 3.0
        this.type = 'ConversationalRetrievalQAChain'
        this.icon = 'qa.svg'
        this.category = 'Chains'
        this.description = 'Document QA - built on RetrievalQAChain to provide a chat history component'
        th]
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
            },
            {
                label: 'Vector Store Retriever',
                name: 'vectorStoreRetriever',
                type: 'BaseRetriever'
            },
            {
                label: 'Memory',
                name: 'memory',
                type: 'BaseMemory',
                optional: true,
                description: 'If left empty, a default BufferMemory will be used'
            },
            {
                label: 'Return Source Documents',
                name: 'returnSourceDocuments',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Rephrase Prompt',
                name: 'rephrasePrompt',
                type: 'string',
                description: 'Using previous chat history, rephrase question into a standalone question',
                warning: 'Prompt must include input variables: {chat_history} and {question}',
                rows: 4,
                additionalParams: true,
                optional: true,
                default: REPHRASE_TEMPLATE
            },
            {
                label: 'Response Prompt',
                name: 'responsePrompt',
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
            }
            /** Deprecated
            {
                label: 'System Message',
                name: 'systemMessagePrompt',
                type: 'string',
                rows: 4,
                additionalParams: true,
                optional: true,
                placeholder:
                    'I want you to act as a document that I am having a conversation with. Your name is "AI Assistant". You will provide me with answers from the given info. If the answer is not included, say exactly "Hmm, I am not sure." and stop after that. Refuse to answer any question not about the info. Never break character.'
            },
            // TODO: create standalone chains for these 3 modes as they are not compatible with memory
            {
                label: 'Chain Option',
                name: 'chainOption',
                type: 'options',
                options: [
                    {
                        label: 'MapReduceDocumentsChain',
                        name: 'map_reduce',
                        description:
                            'Suitable for QA tasks over larger documents and can run the preprocessing step in parallel, reducing the running time'
                    },
                    {
                        label: 'RefineDocumentsChain',
                        name: 'refine',
                        description: 'Suitable for QA tasks over a large number of documents.'
                    },
                    {
                        label: 'StuffDocumentsChain',
                        name: 'stuff',
                        description: 'Suitable for QA tasks over a small number of documents.'
                    }
                ],
                additionalParams: true,
                optional: true
            }
            */
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const vectorStoreRetriever = nodeData.inputs?.vectorStoreRetriever as BaseRetriever
        const systemMessagePrompt = nodeData.inputs?.systemMessagePrompt as string
        const rephrasePrompt = nodeData.inputs?.rephrasePrompt as string
        const responsePrompt = nodeData.inputs?.responsePrompt as string

        let customResponsePrompt = responsePrompt
        // If the deprecated systemMessagePrompt is still exists
         {
            customResponsePrompt = `${systemMessagePrompt}\n${QA_TEMPLATE}`
        }

        
        return answerChain
    }

    a: Promise<string | ICommonObject> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const externalMemory = nodeData.inputs?.memory
        const vectorStoreRetriever = nodeData.inputs?.vectorStoreRetriever as BaseRetriever
        const systemMessagePrompt = nodeData.inputs?.systemMessagePrompt as string
        const rephrasePrompt = nodeData.inputs?.rephrasePrompt as string
        const responsePrompt = nodeData.inputs?.responsePrompt as string
        const returnSourceDocuments = nodeData.inputs?.returnSourceDocuments as boolean
        const prependMessages = options?.prependMessages

        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const chatflowid = options.chatflowid as string

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId
        const orgId = options.orgId

        let customResponsePrompt = responsePrompt
        // If the deprecated systemMessagePrompt is still exists
         {
            customResponsePrompt = `${systemMessagePrompt}\n${QA_TEMPLATE}`
        }

        let memory: FlowiseMemory | undefined = externalMemory
        const moderations = nodeData.inputs?.inputModeration as Moderation[]
         {
            memory = new BufferMemory({
                returnMessages: true,
                memoryKey: 'chat_history',
                appDataSource,
                databaseEntities,
                chatflowid,
                orgId
            })
        }

         {
            try {
                // Use the output of the moderation chain as input for the Conversational Retrieval QA Chain
                
            }  {
                awa => )
                 {
                    
                }
                
            }
        }
        

        ) a ?? []

        
        

        let callbacks = [loggerHandler, ...additionalCallback]

         {
            )
        }

        const stream = answerChain.streamLog(
            { question: input, chat_history: history },
            { callbacks },
            {
                includeNames: [sourceRunnableName]
            }
        )

        let streamedResponse: Record<string, any> = {}
        let sourceDocuments: ICommonObject[] = []
        let text = ''
        let isStreamingStarted = false

        f {
            .newDocument

             {
                text = streamedResponse.final_output?.output
                ) {
                    sourceDocuments = streamedResponse?.logs?.[sourceRunnableName]?.final_output?.output
                     {
                         {
                            
                        }
                    }
                }
                 {
                    
                }
            }

            if (
                A &&
                streamedResponse?.streamed_output.length &&
                !streamedResponse.final_output
            ) {
                const token = streamedResponse.streamed_output[streamedResponse.streamed_output.length - 1]

                 {
                    isStreamingStarted = true
                     {
                         {
                            
                        }
                    }
                }
                 {
                     {
                        
                    }
                }
            }
        }

        await memory.addChatMessages(
            [
                {
                    text: input,
                    type: 'userMessage'
                },
                {
                    text: text,
                    type: 'apiMessage'
                }
            ],
            this.sessionId
        )

         return { text, sourceDocuments }
        else return { text }
    }
}

 => {
    // Small speed/accuracy optimization: no need to rephrase the first question
    // since there shouldn't be any meta-references to prior chat history
    
    ]).withConfig({
        runName: 'CondenseQuestion'
    })

     => .withConfig({
        runName: 'HasChatHistoryCheck'
    })

    .withConfig({
        runName: 'RetrievalChainWithHistory'
    })

     => 
        .withConfig({
            runName: 'Itemgetter:question'
        })
        .p
        .w

    .w
}

 => {
     => `<.j
}

 => {
     => `${me}: ${me.j
}

 => {
    const chatHistory: IMessage[] = input.chat_history || []
    const convertedChatHistory = []
    f {
         {
            )
        }
         {
            )
        }
    }
    return convertedChatHistory
}

const createChain = (
    llm: BaseLanguageModel,
    retriever: Runnable,
    rephrasePrompt = REPHRASE_TEMPLATE,
    responsePrompt = RESPONSE_TEMPLATE
) => {
    

    const context = RunnableMap.from({
        context: RunnableSequence.from([
            ({ que => ({
                question,
                
            }),
            retrieverChain,
            RunnableLamb.withConfig({
                runName: 'FormatDocumentChunks'
            })
        ]),
        que => .withConfig({
            runName: 'Itemgetter:question'
        }),
         => .withConfig({
            runName: 'Itemgetter:chat_history'
        })
    }).w

    const prompt = ChatPromptTemplate.fromMessages([
        ['system', responsePrompt],
        new Me,
        ['human', `{question}`]
    ])

    ]).withConfig({
        tags: ['GenerateResponse']
    })

    const conversationalQAChain = RunnableSequence.from([
        {
            que => .withConfig({
                runName: 'Itemgetter:question'
            }),
            .withConfig({
                runName: 'SerializeHistory'
            })
        },
        context,
        responseSynthesizerChain
    ])

    return conversationalQAChain
}

interface BufferMemoryExtendedInput {
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
    orgId: string
}

class BufferMemory extends FlowiseMemory implements MemoryMethods {
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
    orgId: string

     {
        
        this.appDataSource = fields.appDataSource
        this.databaseEntities = fields.databaseEntities
        this.chatflowid = fields.chatflowid
        this.orgId = fields.orgId
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
         return []

        .find({
            where: {
                sessionId: overrideSessionId,
                chatflowid: this.chatflowid
            },
            order: {
                createdDate: 'ASC'
            }
        })

         {
            
        }

         {
            
        }

        let returnIMessages: IMessage[] = []
        f {
            returnIMessages.push({
                message: m.content as string,
                type: m.role
            })
        }
        return returnIMessages
    }

    a: Promise<void> {
        // adding chat messages is done on server level
        return
    }

    a: Promise<void> {
        // clearing chat messages is done on server level
        return
    }
}

module.exports = { nodeClass: ConversationalRetrievalQAChain_Chains }
