import { ZepMemory, ZepMemoryInput } from '@getzep/zep-cloud/langchain'
import { BaseMessage } from '@langchain/core/messages'
import { InputValues, MemoryVariables, OutputValues } from 'langchain/memory'
import { ICommonObject } from '../../../src'
import { IMessage, INode, INodeData, INodeParams, MemoryMethods, MessageType } from '../../../src/Interface'
import {
    convertBaseMessagetoIMessage,
    getBaseClasses,
    getCredentialData,
    getCredentialParam,
    mapChatMessageToBaseMessage
} from '../../../src/utils'

class ZepMemoryCloud_Memory implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Zep Memory - Cloud'
        this.name = 'ZepMemoryCloud'
        this.version = 2.0
        this.type = 'ZepMemory'
        this.icon = 'zep.svg'
        this.category = 'Memory'
        this.description = 'Summarizes the conversation and stores the memory in zep server'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            optional: true,
            ',
            credentialNames: ['zepMemoryApi']
        }
        this.inputs = [
            {
                label: 'Session Id',
                name: 'sessionId',
                type: 'string',
                description:
                    'If not specified, a random id will be used. Learn <a target="_blank" href="https://docs.flowise-ai.github.io/memory/long-term-memory#ui-and-embedded-chat">more</a>',
                default: '',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Memory Type',
                name: 'memoryType',
                type: 'string',
                default: 'perpetual',
                description: 'Zep Memory Type, can be perpetual or message_window',
                additionalParams: true
            },
            {
                label: 'AI Prefix',
                name: 'aiPrefix',
                type: 'string',
                default: 'ai',
                additionalParams: true
            },
            {
                label: 'Human Prefix',
                name: 'humanPrefix',
                type: 'string',
                default: 'human',
                additionalParams: true
            },
            {
                label: 'Memory Key',
                name: 'memoryKey',
                type: 'string',
                default: 'chat_history',
                additionalParams: true
            },
            {
                label: 'Input Key',
                name: 'inputKey',
                type: 'string',
                default: 'input',
                additionalParams: true
            },
            {
                label: 'Output Key',
                name: 'outputKey',
                type: 'string',
                default: 'text',
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        
    }
}

: Promise<ZepMemory> => {
    const aiPrefix = nodeData.inputs?.aiPrefix as string
    const humanPrefix = nodeData.inputs?.humanPrefix as string
    const memoryKey = nodeData.inputs?.memoryKey as string
    const inputKey = nodeData.inputs?.inputKey as string

    const memoryType = nodeData.inputs?.memoryType as 'perpetual' | 'message_window'
    const sessionId = nodeData.inputs?.sessionId as string

    
    
    const orgId = options.orgId as string
    const obj: ZepMemoryInput & ZepMemoryExtendedInput = {
        apiKey,
        aiPrefix,
        humanPrefix,
        memoryKey,
        sessionId,
        inputKey,
        memoryType: memoryType,
        returnMessages: true,
        orgId
    }

    
}

interface ZepMemoryExtendedInput {
    memoryType?: 'perpetual' | 'message_window'
    orgId: string
}

class ZepMemoryExtended extends ZepMemory implements MemoryMethods {
    memoryType: 'perpetual' | 'message_window'
    orgId: string

     {
        
        this.memoryType = fields.memoryType ?? 'perpetual'
        this.orgId = fields.orgId
    }

    a: Promise<MemoryVariables> {
         {
            this.sessionId = overrideSessionId
        }
        
    }

    a: Promise<void> {
         {
            this.sessionId = overrideSessionId
        }
        
    }

    a: Promise<void> {
         {
            this.sessionId = overrideSessionId
        }
        
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
        const id = overrideSessionId ? overrideSessionId : this.sessionId
        
        const baseMessages = memoryVariables[this.memoryKey]
         {
            ba))
        }
        
    }

    a: Promise<void> {
        const id = overrideSessionId ? overrideSessionId : this.sessionId
         => m
         => m
        const inputValues = { [this.inputKey ?? 'input']: input?.text }
        const outputValues = { output: output?.text }

        awa
    }

    a: Promise<void> {
        const id = overrideSessionId ? overrideSessionId : this.sessionId
        awa
    }
}

module.exports = { nodeClass: ZepMemoryCloud_Memory }
