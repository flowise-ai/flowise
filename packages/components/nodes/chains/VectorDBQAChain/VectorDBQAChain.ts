import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { VectorStore } from '@langchain/core/vectorstores'
import { VectorDBQAChain } from 'langchain/chains'
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { ICommonObject, INode, INodeData, INodeParams, IServerSideEventStreamer } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { checkInputs, Moderation } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

class VectorDBQAChain_Chains implements INode {
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
        this.label = 'VectorDB QA Chain'
        this.name = 'vectorDBQAChain'
        this.version = 2.0
        this.type = 'VectorDBQAChain'
        this.icon = 'vectordb.svg'
        this.category = 'Chains'
        this.badge = 'DEPRECATING'
        this.description = 'QA chain for vector databases'
        th]
        this.inputs = [
            {
                label: 'Language Model',
                name: 'model',
                type: 'BaseLanguageModel'
            },
            {
                label: 'Vector Store',
                name: 'vectorStore',
                type: 'VectorStore'
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
        const vectorStore = nodeData.inputs?.vectorStore as VectorStore

        const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
            k: (ve?.k ?? 4,
            verbose: process.env.DEBUG === 'true' ? true : false
        })
        return chain
    }

    a: Promise<string | object> {
        const chain = nodeData.instance as VectorDBQAChain
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            try {
                // Use the output of the moderation chain as input for the VectorDB QA Chain
                
            }  {
                awa => )
                //  {
                //     
                // }
                
            }
        }
        const obj = {
            query: input
        }

        
        

         {
            
            
            return res?.text
        } else {
            
            return res?.text
        }
    }
}

module.exports = { nodeClass: VectorDBQAChain_Chains }
