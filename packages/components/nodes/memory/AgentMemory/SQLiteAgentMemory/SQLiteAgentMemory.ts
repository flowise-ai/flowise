import path from 'path'
import { getBaseClasses, getUserHome } from '../../../../src/utils'
import { SaverOptions } from '../interface'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeParams } from '../../../../src/Interface'
import { SqliteSaver } from './sqliteSaver'
import { DataSource } from 'typeorm'

class SQLiteAgentMemory_Memory implements INode {
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
        this.label = 'SQLite Agent Memory'
        this.name = 'sqliteAgentMemory'
        this.version = 1.0
        this.type = 'SQLiteAgentMemory'
        this.icon = 'sqlite.png'
        this.category = 'Memory'
        this.description = 'Memory for agentflow to remember the state of the conversation using SQLite database'
        th]
        this.inputs = [
            /*{
                label: 'Database File Path',
                name: 'databaseFilePath',
                type: 'string',
                placeholder: 'C:\\Users\\User\\.flowise\\database.sqlite',
                description: 'Path to the SQLite database file. Leave empty to use default application database',
                optional: true
            },*/
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

        , '.fl, '

        let datasourceOptions: ICommonObject = {
            database,
            ...additionalConfiguration,
            type: 'sqlite'
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

module.exports = { nodeClass: SQLiteAgentMemory_Memory }
