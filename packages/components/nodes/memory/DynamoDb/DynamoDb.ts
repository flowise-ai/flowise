import {
    DynamoDBClient,
    DynamoDBClientConfig,
    GetItemCommand,
    GetItemCommandInput,
    UpdateItemCommand,
    UpdateItemCommandInput,
    DeleteItemCommand,
    DeleteItemCommandInput,
    AttributeValue
} from '@aws-sdk/client-dynamodb'
import { DynamoDBChatMessageHistory } from '@langchain/community/stores/message/dynamodb'
import { mapStoredMessageToChatMessage, AIMessage, HumanMessage, StoredMessage, BaseMessage } from '@langchain/core/messages'
import { BufferMemory, BufferMemoryInput } from 'langchain/memory'
import {
    convertBaseMessagetoIMessage,
    getBaseClasses,
    getCredentialData,
    getCredentialParam,
    mapChatMessageToBaseMessage
} from '../../../src/utils'
import { FlowiseMemory, ICommonObject, IMessage, INode, INodeData, INodeParams, MemoryMethods, MessageType } from '../../../src/Interface'

class DynamoDb_Memory implements INode {
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
        this.label = 'DynamoDB Chat Memory'
        this.name = 'DynamoDBChatMemory'
        this.version = 1.0
        this.type = 'DynamoDBChatMemory'
        this.icon = 'dynamodb.svg'
        this.category = 'Memory'
        this.description = 'Stores the conversation in dynamo db table'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['dynamodbMemoryApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Table Name',
                name: 'tableName',
                type: 'string'
            },
            {
                label: 'Partition Key',
                name: 'partitionKey',
                type: 'string'
            },
            {
                label: 'Region',
                name: 'region',
                type: 'string',
                description: 'The aws region in which table is located',
                placeholder: 'us-east-1'
            },
            {
                label: 'Session ID',
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
    const tableName = nodeData.inputs?.tableName as string
    const partitionKey = nodeData.inputs?.partitionKey as string
    const region = nodeData.inputs?.region as string
    const memoryKey = nodeData.inputs?.memoryKey as string
    const sessionId = nodeData.inputs?.sessionId as string

    
    
    

    let credentials: DynamoDBClientConfig['credentials'] | undefined
     {
        credentials = {
            accessKeyId,
            secretAccessKey
        }
    }

    const config: DynamoDBClientConfig = {
        region,
        credentials
    }

    

    const dynamoDb = new DynamoDBChatMessageHistory({
        tableName,
        partitionKey,
        sessionId,
        config
    })

    const orgId = options.orgId as string

    const memory = new BufferMemoryExtended({
        memoryKey: memoryKey ?? 'chat_history',
        chatHistory: dynamoDb,
        sessionId,
        dynamodbClient: client,
        tableName,
        partitionKey,
        dynamoKey: { [partitionKey]: { S: sessionId } },
        orgId
    })
    return memory
}

interface BufferMemoryExtendedInput {
    dynamodbClient: DynamoDBClient
    sessionId: string
    tableName: string
    partitionKey: string
    dynamoKey: Record<string, AttributeValue>
    orgId: string
}

interface DynamoDBSerializedChatMessage {
    M: {
        type: {
            S: string
        }
        text: {
            S: string
        }
        role?: {
            S: string
        }
    }
}

class BufferMemoryExtended extends FlowiseMemory implements MemoryMethods {
    private tableName = ''
    private partitionKey = ''
    private dynamoKey: Record<string, AttributeValue>
    private messageAttributeName: string
    sessionId = ''
    orgId = ''
    dynamodbClient: DynamoDBClient

     {
        
        this.sessionId = fields.sessionId
        this.dynamodbClient = fields.dynamodbClient
        this.tableName = fields.tableName
        this.partitionKey = fields.partitionKey
        this.dynamoKey = fields.dynamoKey
        this.orgId = fields.orgId
    }

     {
        const existingDynamoKey = this.dynamoKey
        const partitionKey = this.partitionKey

        let newDynamoKey: Record<string, AttributeValue> = {}

        .) {
            newDynamoKey[partitionKey] = { S: overrideSessionId }
        }

        .length ? newDynamoKey : existingDynamoKey
    }

    async addNewMessage(
        messages: StoredMessage[],
        client: DynamoDBClient,
        tableName = '',
        dynamoKey: Record<string, AttributeValue> = {},
        messageAttributeName = 'messages'
    ) {
        const params: UpdateItemCommandInput = {
            TableName: tableName,
            Key: dynamoKey,
            ExpressionAttributeNames: {
                '#m': messageAttributeName
            },
            ExpressionAttributeValues: {
                ':empty_list': {
                    L: []
                },
                ':m': {
                    L: me => {
                        const dynamoSerializedMessage: DynamoDBSerializedChatMessage = {
                            M: {
                                type: {
                                    S: message.type
                                },
                                text: {
                                    S: message.data.content
                                }
                            }
                        }
                         {
                            dynamoSerializedMessage.M.role = { S: message.data.role }
                        }
                        return dynamoSerializedMessage
                    })
                }
            },
            Up, :m)'
        }

        awa)
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
         return []

         : this.dynamoKey
        const tableName = this.tableName

        const messageAttributeName = this.messageAttributeName ? this.messageAttributeName : 'messages'
        const params: GetItemCommandInput = {
            TableName: tableName,
            Key: dynamoKey
        }

        )
        const items = response.Item ? response.Item[messageAttributeName]?.L ?? [] : []
        const messages = items
            .map(( => ({
                type: item.M?.type.S,
                data: {
                    role: item.M?.role?.S,
                    content: item.M?.text.S
                }
            }))
            .f: x 
        
         {
            ba))
        }
        
    }

    a: Promise<void> {
         return

         : this.dynamoKey
        const tableName = this.tableName
        const messageAttributeName = this.messageAttributeName

         => m
         => m

         {
            
             => m)
            awa
        }

         {
            
             => m)
            awa
        }
    }

    a: Promise<void> {
         return

         : this.dynamoKey
        const tableName = this.tableName

        const params: DeleteItemCommandInput = {
            TableName: tableName,
            Key: dynamoKey
        }
        awa)
        awa
    }
}

module.exports = { nodeClass: DynamoDb_Memory }
