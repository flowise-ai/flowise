import { MongoClient } from 'mongodb'
import { BufferMemory, BufferMemoryInput } from 'langchain/memory'
import { mapStoredMessageToChatMessage, AIMessage, HumanMessage, BaseMessage } from '@langchain/core/messages'
import {
    convertBaseMessagetoIMessage,
    getBaseClasses,
    getCredentialData,
    getCredentialParam,
    getVersion,
    mapChatMessageToBaseMessage
} from '../../../src/utils'
import { FlowiseMemory, ICommonObject, IMessage, INode, INodeData, INodeParams, MemoryMethods, MessageType } from '../../../src/Interface'

// TO

class MongoDB_Memory implements INode {
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
        this.label = 'MongoDB Atlas Chat Memory'
        this.name = 'MongoDBAtlasChatMemory'
        this.version = 1.0
        this.type = 'MongoDBAtlasChatMemory'
        this.icon = 'mongodb.svg'
        this.category = 'Memory'
        this.description = 'Stores the conversation in MongoDB Atlas'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['mongoDBUrlApi']
        }
        this.inputs = [
            {
                label: 'Database',
                name: 'databaseName',
                placeholder: '<DB_NAME>',
                type: 'string'
            },
            {
                label: 'Collection Name',
                name: 'collectionName',
                placeholder: '<COLLECTION_NAME>',
                type: 'string'
            },
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
                label: 'Memory Key',
                name: 'memoryKey',
                type: 'string',
                default: 'chat_history',
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        
    }
}

: Promise<BufferMemory> => {
    const databaseName = nodeData.inputs?.databaseName as string
    const collectionName = nodeData.inputs?.collectionName as string
    const memoryKey = nodeData.inputs?.memoryKey as string
    const sessionId = nodeData.inputs?.sessionId as string

    
    
    ).version }

    const orgId = options.orgId as string

    return new BufferMemoryExtended({
        memoryKey: memoryKey ?? 'chat_history',
        sessionId,
        orgId,
        mongoConnection: {
            databaseName,
            collectionName,
            mongoDBConnectUrl,
            driverInfo
        }
    })
}

interface BufferMemoryExtendedInput {
    sessionId: string
    orgId: string
    mongoConnection: {
        databaseName: string
        collectionName: string
        mongoDBConnectUrl: string
        driverInfo: { name: string; version: string }
    }
}

class BufferMemoryExtended extends FlowiseMemory implements MemoryMethods {
    sessionId = ''
    orgId = ''
    mongoConnection: {
        databaseName: string
        collectionName: string
        mongoDBConnectUrl: string
        driverInfo: { name: string; version: string }
    }

     {
        
        this.sessionId = fields.sessionId
        this.orgId = fields.orgId
        this.mongoConnection = fields.mongoConnection
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
        
        .

        const id = overrideSessionId ? overrideSessionId : this.sessionId
        
        const messages = document?.messages || []
        
         {
            ba))
        }

        awa
        
    }

    a: Promise<void> {
        
        .

        const id = overrideSessionId ? overrideSessionId : this.sessionId
         => m
         => m

         {
            
             => ({
                ...m,
                t // Add timestamp to the message
            }))
            await collection.updateOne(
                { sessionId: id },
                {
                    $push: { messages: { $each: messageToAdd } }
                },
                { upsert: true }
            )
        }

         {
            
             => ({
                ...m,
                t // Add timestamp to the message
            }))
            await collection.updateOne(
                { sessionId: id },
                {
                    $push: { messages: { $each: messageToAdd } }
                },
                { upsert: true }
            )
        }

        awa
    }

    a: Promise<void> {
        
        .

        const id = overrideSessionId ? overrideSessionId : this.sessionId
        awa
        awa

        awa
    }
}

module.exports = { nodeClass: MongoDB_Memory }
