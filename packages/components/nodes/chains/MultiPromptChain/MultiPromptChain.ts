import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { MultiPromptChain } from 'langchain/chains'
import { ICommonObject, INode, INodeData, INodeParams, IServerSideEventStreamer, PromptRetriever } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { checkInputs, Moderation, streamResponse } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

class MultiPromptChain_Chains implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    baseClasses: string[]
    description: string
    inputs: INodeParams[]
    badge: string

     {
        this.label = 'Multi Prompt Chain'
        this.name = 'multiPromptChain'
        this.version = 2.0
        this.badge = 'DEPRECATING'
        this.type = 'MultiPromptChain'
        this.icon = 'prompt.svg'
        this.category = 'Chains'
        this.description = 'Chain automatically picks an appropriate prompt from multiple prompt templates'
        th]
        this.inputs = [
            {
                label: 'Language Model',
                name: 'model',
                type: 'BaseLanguageModel'
            },
            {
                label: 'Prompt Retriever',
                name: 'promptRetriever',
                type: 'PromptRetriever',
                list: true
            },
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            }
        ]
    }

    a: Promise<any> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const promptRetriever = nodeData.inputs?.promptRetriever as PromptRetriever[]
        const promptNames = []
        const promptDescriptions = []
        const promptTemplates = []

        f {
            p
            p
            p
        }

        const chain = MultiPromptChain.fromLLMAndPrompts(model, {
            promptNames,
            promptDescriptions,
            promptTemplates,
            llmChainOpts: { verbose: process.env.DEBUG === 'true' ? true : false }
        })

        return chain
    }

    a: Promise<string | object> {
        const chain = nodeData.instance as MultiPromptChain
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

        // this is true if the prediction is external and the client has requested streaming='true'
        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            try {
                // Use the output of the moderation chain as input for the Multi Prompt Chain
                
            }  {
                awa => )
                 {
                    
                }
                
            }
        }
        const obj = { input }

        
        

         {
            
            
            return res?.text
        } else {
            
            return res?.text
        }
    }
}

module.exports = { nodeClass: MultiPromptChain_Chains }
