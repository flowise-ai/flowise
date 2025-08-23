import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { VectorStore } from '@langchain/core/vectorstores'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { BabyAGI } from './core'
import { checkInputs, Moderation } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

class BabyAGI_Agents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    badge: string

     {
        this.label = 'BabyAGI'
        this.name = 'babyAGI'
        this.version = 2.0
        this.type = 'BabyAGI'
        this.category = 'Agents'
        this.icon = 'babyagi.svg'
        this.badge = 'DEPRECATING'
        this.description = 'Task Driven Autonomous Agent which creates new task and reprioritizes task list based on objective'
        this.baseClasses = ['BabyAGI']
        this.inputs = [
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel'
            },
            {
                label: 'Vector Store',
                name: 'vectorStore',
                type: 'VectorStore'
            },
            {
                label: 'Task Loop',
                name: 'taskLoop',
                type: 'number',
                default: 3
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
        const model = nodeData.inputs?.model as BaseChatModel
        const vectorStore = nodeData.inputs?.vectorStore as VectorStore
        const taskLoop = nodeData.inputs?.taskLoop as string
        ?.k ?? 4

        , k)
        return babyAgi
    }

    a: Promise<string | object> {
        const executor = nodeData.instance as BabyAGI
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

         {
            try {
                // Use the output of the moderation chain as input for the BabyAGI agent
                
            }  {
                awa => )
                //  {
                //     
                // }
                
            }
        }

        const objective = input

        
        return res
    }
}

module.exports = { nodeClass: BabyAGI_Agents }
