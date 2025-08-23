import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../../src/utils'
import { SaverOptions } from '../interface'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeParams } from '../../../../src/Interface'
import { DataSource } from 'typeorm'
import { PostgresSaver } from './pgSaver'

class PostgresAgentMemory_Memory implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    badge: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams

     {
        this.label = 'Postgres Agent Memory'
        this.name = 'postgresAgentMemory'
        this.version = 1.0
        this.type = 'AgentMemory'
        this.icon = 'postgres.svg'
        this.category = 'Memory'
        this.description = 'Memory for agentflow to remember the state of the conversation using Postgres database'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['PostgresApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Host',
                name: 'host',
                type: 'string'
            },
            {
                label: 'Database',
                name: 'database',
                type: 'string'
            },
            {
                label: 'Port',
                name: 'port',
                type: 'number',
                default: '5432'
            },
            {
                label: 'Additional Connection Configuration',
                name: 'additionalConfig',
                type: 'json',
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const additionalConfig = nodeData.inputs?.additionalConfig as string
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const chatflowid = options.chatflowid as string
        const appDataSource = options.appDataSource as DataSource
        const orgId = options.orgId as string

        let additionalConfiguration = {}
         {
            try {
                a
            }  {
                th
            }
        }

        const threadId = options.sessionId || options.chatId

        let datasourceOptions: ICommonObject = {
            ...additionalConfiguration,
            type: 'postgres'
        }

        
        
        
         || '5432'
        
        datasourceOptions = {
            ...datasourceOptions,
            host: nodeData.inputs?.host as string,
            port,
            database: nodeData.inputs?.database as string,
            username: user,
            user: user,
            password: password
        }
        const args: SaverOptions = {
            datasourceOptions,
            threadId,
            appDataSource,
            databaseEntities,
            chatflowid,
            orgId
        }
        
        return recordManager
    }
}

module.exports = { nodeClass: PostgresAgentMemory_Memory }
