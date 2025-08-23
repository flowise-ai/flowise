import { Mem0Memory as BaseMem0Memory, Mem0MemoryInput, ClientOptions } from '@mem0/community'
import { MemoryOptions, SearchOptions } from 'mem0ai'
import { BaseMessage } from '@langchain/core/messages'
import { InputValues, MemoryVariables, OutputValues } from '@langchain/core/memory'
import { ICommonObject, IDatabaseEntity } from '../../../src'
import { IMessage, INode, INodeData, INodeParams, MemoryMethods, MessageType } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam, mapChatMessageToBaseMessage } from '../../../src/utils'
import { DataSource } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

interface BufferMemoryExtendedInput {
    sessionId: string
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
}

interface NodeFields extends Mem0MemoryInput, Mem0MemoryExtendedInput, BufferMemoryExtendedInput {
    searchOnly: boolean
    useFlowiseChatId: boolean
    input: string
}

class Mem0_Memory implements INode {
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
        this.label = 'Mem0'
        this.name = 'mem0'
        this.version = 1.1
        this.type = 'Mem0'
        this.icon = 'mem0.svg'
        this.category = 'Memory'
        this.description = 'Stores and manages chat memory using Mem0 service'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            optional: false,
            description: 'Configure API Key for Mem0 service',
            credentialNames: ['mem0MemoryApi']
        }
        this.inputs = [
            {
                label: 'User ID',
                name: 'user_id',
                type: 'string',
                description: 'Unique identifier for the user. Required only if "Use Flowise Chat ID" is OFF.',
                default: 'flowise-default-user',
                optional: true
            },
            // Added toggle to use Flowise chat ID
            {
                label: 'Use Flowise Chat ID',
                name: 'useFlowiseChatId',
                type: 'boolean',
                description: 'Use the Flowise internal Chat ID as the Mem0 User ID, overriding the "User ID" field above.',
                default: false,
                optional: true
            },
            {
                label: 'Search Only',
                name: 'searchOnly',
                type: 'boolean',
                description: 'Search only mode',
                default: false,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Run ID',
                name: 'run_id',
                type: 'string',
                description: 'Unique identifier for the run session',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Agent ID',
                name: 'agent_id',
                type: 'string',
                description: 'Identifier for the agent',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'App ID',
                name: 'app_id',
                type: 'string',
                description: 'Identifier for the application',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Project ID',
                name: 'project_id',
                type: 'string',
                description: 'Identifier for the project',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Organization ID',
                name: 'org_id',
                type: 'string',
                description: 'Identifier for the organization',
                default: '',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Memory Key',
                name: 'memoryKey',
                type: 'string',
                default: 'history',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Input Key',
                name: 'inputKey',
                type: 'string',
                default: 'input',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Output Key',
                name: 'outputKey',
                type: 'string',
                default: 'text',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        
    }
}

: Promise<BaseMem0Memory> => {
    const initialUserId = nodeData.inputs?.user_id as string
    const useFlowiseChatId = nodeData.inputs?.useFlowiseChatId as boolean
    const orgId = options.orgId as string

     {
        th
    }

    
    

    const mem0Options: ClientOptions = {
        apiKey: apiKey,
        host: nodeData.inputs?.host as string,
        organizationId: nodeData.inputs?.org_id as string,
        projectId: nodeData.inputs?.project_id as string
    }

    const memOptionsUserId = initialUserId

    

    const memoryOptions: MemoryOptions & SearchOptions = {
        user_id: memOptionsUserId,
         || undefined,
        agent_ || undefined,
        app_ || undefined,
        p || undefined,
         || undefined,
        ap || undefined,
        enable_g || false,
        meta || {},
        f || {}
    }

    const obj: NodeFields = {
        apiKey: apiKey,
        humanPrefix: nodeData.inputs?.humanPrefix as string,
        aiPrefix: nodeData.inputs?.aiPrefix as string,
        inputKey: nodeData.inputs?.inputKey as string,
        sessionId: constructorSessionId,
        mem0Options: mem0Options,
        memoryOptions: memoryOptions,
        separateMessages: false,
        returnMessages: false,
        appDataSource: options.appDataSource as DataSource,
        databaseEntities: options.databaseEntities as IDatabaseEntity,
        chatflowid: options.chatflowid as string,
         || false,
        useFlowiseChatId: useFlowiseChatId,
        input: input,
        orgId: orgId
    }

    
}

interface Mem0MemoryExtendedInput extends Mem0MemoryInput {
    memoryOptions?: MemoryOptions | SearchOptions
    useFlowiseChatId: boolean
    orgId: string
}

class Mem0MemoryExtended extends BaseMem0Memory implements MemoryMethods {
    initialUserId: string
    userId: string
    orgId: string
    memoryKey: string
    inputKey: string
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    chatflowid: string
    searchOnly: boolean
    useFlowiseChatId: boolean
    input: string

     {
        
        this.initialUserId = fields.memoryOptions?.user_id ?? ''
        this.userId = this.initialUserId
        this.memoryKey = 'history'
        this.inputKey = fields.inputKey ?? 'input'
        this.appDataSource = fields.appDataSource
        this.databaseEntities = fields.databaseEntities
        this.chatflowid = fields.chatflowid
        this.searchOnly = fields.searchOnly
        this.useFlowiseChatId = fields.useFlowiseChatId
        this.input = fields.input
        this.orgId = fields.orgId
    }

    // Sele
    p: string {
        let effectiveUserId: string | undefined

         {
             {
                effectiveUserId = overrideUserId
            } else {
                th wa
            }
        } else {
            // If toggle is OFF, ALWAYS use the ID from the input field.
            effectiveUserId = this.initialUserId
        }

        // Th.
         {
            th
        }
        return effectiveUserId
    }

    a: Promise<MemoryVariables> {
        
        this.userId = effectiveUserId
         {
            this.memoryOptions.user_id = effectiveUserId
        }
        
    }

    a: Promise<void> {
         {
            return
        }
        
        this.userId = effectiveUserId
         {
            this.memoryOptions.user_id = effectiveUserId
        }
        
    }

    a: Promise<void> {
        
        this.userId = effectiveUserId
         {
            this.memoryOptions.user_id = effectiveUserId
        }
        
    }

    async getChatMessages(
        overrideUserId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
        const flowiseSessionId = overrideUserId
         {
            . Cann
            return []
        }

        let .find({
            where: {
                sessionId: flowiseSessionId,
                chatflowid: this.chatflowid
            },
            order: {
                createdDate: 'DESC'
            },
            take: 10
        })
        

        let  => ({
            message: m.content as string,
            type: m.role as MessageType
        }))

         {
            
            // Reverted to original simpler unshift
            )
        }

         {
            const memoryVariables = await this.loadMemoryVariables(
                {
                    [this.inputKey]: this.input ?? ''
                },
                overrideUserId
            )
            const mem0History = memoryVariables[this.memoryKey]

             {
                const systemMessage = {
                    role: 'apiMessage' as MessageType,
                    content: mem0History,
                    
                }
                // Ensure Mem0 history message also conforms structurally if mapChatMessageToBaseMessage is strict
                 // Cast needed if mixing structures
            } el {
                
            }

            
        }

        return returnIMessages
    }

    a: Promise<void> {
        
         => m
         => m

         {
            const inputValues = { [this.inputKey ?? 'input']: input.text }
            const outputValues = { output: output.text }
            awa
        } else {
            
        }
    }

    a: Promise<void> {
        
        awa

        const flowiseSessionId = overrideUserId
         {
            await this.appDataSource
                .getRep
                .
        } else {
            . Cann
        }
    }
}

module.exports = { nodeClass: Mem0_Memory }
