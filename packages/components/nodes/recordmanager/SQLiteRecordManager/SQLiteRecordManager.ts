import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getUserHome } from '../../../src/utils'
import { ListKeyOptions, RecordManagerInterface, UpdateOptions } from '@langchain/community/indexes/base'
import { DataSource } from 'typeorm'
import path from 'path'

class SQLiteRecordManager_RecordManager implements INode {
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

     {
        this.label = 'SQLite Record Manager'
        this.name = 'SQLiteRecordManager'
        this.version = 1.1
        this.type = 'SQLite RecordManager'
        this.icon = 'sqlite.png'
        this.category = 'Record Manager'
        this.description = 'Use SQLite to keep track of document writes into the vector databases'
        th]
        this.inputs = [
            /*{
                label: 'Database File Path',
                name: 'databaseFilePath',
                type: 'string',
                placeholder: 'C:\\Users\\User\\.flowise\\database.sqlite'
            },*/
            {
                label: 'Additional Connection Configuration',
                name: 'additionalConfig',
                type: 'json',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Table Name',
                name: 'tableName',
                type: 'string',
                placeholder: 'upsertion_records',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Namespace',
                name: 'namespace',
                type: 'string',
                description: 'If not specified, chatflowid will be used',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Cleanup',
                name: 'cleanup',
                type: 'options',
                description:
                    'Read more on the difference between different cleanup methods <a target="_blank" href="https://js.langchain.com/docs/modules/data_connection/indexing/#deletion-modes">here</a>',
                options: [
                    {
                        label: 'None',
                        name: 'none',
                        description: 'No clean up of old content'
                    },
                    {
                        label: 'Incremental',
                        name: 'incremental',
                        description:
                            'Delete previous versions of the content if content of the source document has changed. Important!! SourceId Key must be specified and document metadata must contains the specified key'
                    },
                    {
                        label: 'Full',
                        name: 'full',
                        description:
                            'Same as incremental, but if the source document has been deleted, it will be deleted from vector store as well, incremental mode will not.'
                    }
                ],
                additionalParams: true,
                default: 'none'
            },
            {
                label: 'SourceId Key',
                name: 'sourceIdKey',
                type: 'string',
                description:
                    'Key used to get the true source of document, to be compared against the record. Document metadata must contains SourceId Key',
                default: 'source',
                placeholder: 'source',
                additionalParams: true,
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const _tableName = nodeData.inputs?.tableName as string
        const tableName = _tableName ? _tableName : 'upsertion_records'
        const additionalConfig = nodeData.inputs?.additionalConfig as string
        const _namespace = nodeData.inputs?.namespace as string
        const namespace = _namespace ? _namespace : options.chatflowid
        const cleanup = nodeData.inputs?.cleanup as string
        const _sourceIdKey = nodeData.inputs?.sourceIdKey as string
        const sourceIdKey = _sourceIdKey ? _sourceIdKey : 'source'

        let additionalConfiguration = {}
         {
            try {
                a
            }  {
                th
            }
        }

        , '.fl, '

        const sqliteOptions = {
            database,
            ...additionalConfiguration,
            type: 'sqlite'
        }

        const args = {
            sqliteOptions,
            tableName: tableName
        }

        

        ;(.cleanup = cleanup
        ;(.sourceIdKey = sourceIdKey

        return recordManager
    }
}

type SQLiteRecordManagerOptions = {
    sqliteOptions: any
    tableName?: string
}

class SQLiteRecordManager implements RecordManagerInterface {
    lc_namespace = ['langchain', 'recordmanagers', 'sqlite']
    tableName: string
    namespace: string
    config: SQLiteRecordManagerOptions

     {
        const { tableName } = config
        this.namespace = namespace
        this.tableName = tableName || 'upsertion_records'
        this.config = config
    }

    : string {
        // Trim and normalize case, turn whitespace into underscores
        tableName = tableName.t.t.

        // Val
        ) {
            th
        }

        return tableName
    }

    p: Promise<DataSource> {
        const { sqliteOptions } = this.config
         {
            th
        }
        
        awa
        return dataSource
    }

    a: Promise<void> {
        try {
            
            
            

            await queryRunner.manager.query(`
CREATE TABLE IF NOT EXISTS "${tableName}" (
  uu))),
  key TEXT NOT NULL,
  namespace TEXT NOT NULL,
  updated_at REAL NOT NULL,
  group_id TEXT,
  UNIQUE (key, name
);
CREATE IN;
CREATE IN;
CREATE IN;
CREATE IN;`)

            awa
        }  {
            // This error indicates that the table already exists
            // Due to asynchronous nature of the code, it is possible that
            // the table is created between the time we check if it exists
            // and the time we try to create it. It can be safely ignored.
             {
                return
            }
            throw e
        }
    }

    a: Promise<number> {
        
        try {
            
             AS ep
            awa
            
        }  {
            
            throw error
        } finally {
            awa
        }
    }

    a: Promise<void> {
         {
            return
        }
        
        
        

        
        const { timeAtLeast, groupIds: _groupIds } = updateOptions ?? {}

         {
            th
        }

         => null)

         {
            th `)
        }

         => [
            key,
            this.namespace,
            updatedAt,
            groupIds[i] ?? null // Ensure groupIds[i] is null if undefined
        ])

        const query = `
        INSERT INTO "${tableName}" (key, name
        VALUES (?, ?, ?, ?)
        ON CONFLICT (key, name DO UPDATE SET updated_at = excluded.updated_at`

        try {
            // To handle multiple files upsert
            f {
                // Consider using a transaction for batch operations
                awa)
            }
            awa
        }  {
            
            throw error
        } finally {
            awa
        }
    }

    a: Promise<boolean[]> {
         {
            return []
        }
        

        // Prepare the placeholders and the query
         => `?`).j
        const sql = `
    SELECT key
    FROM "${tableName}"
    WHERE name`

        // Initialize an array to fill with the existence checks
        .f

        
        

        try {
            // Execute the query
            ])
            // Create a set of existing keys for faster lookup
             => )
            // Map the input keys to booleans indicating if they exist
            key => {
                ex
            })
            awa
            return existsArray
        }  {
            
            throw error // Allow the caller to handle the error
        } finally {
            awa
        }
    }

    a: Promise<string[]> {
        const { before, after, limit, groupIds } = options ?? {}
        

        let query = `SELECT key FROM "${tableName}" WHERE namespace = ?`
        [] = [this.namespace]

         {
            query += ` AND updated_at < ?`
            value
        }

         {
            query += ` AND updated_at > ?`
            value
        }

         {
            query += ` LIMIT ?`
            value
        }

        ) {
            query += ` AND group_id IN (${groupIds
                .f => g
                .map(() => '?')
                .j})`
            value: g)
        }

        query += ';'

        
        

        // Directly using try/catch with async/await for cleaner flow
        try {
            
            awa
             => 
        }  {
            
            throw error // Re-throw the error to be handled by the caller
        } finally {
            awa
        }
    }

    a: Promise<void> {
         {
            return
        }

        
        
        

         => '?').j
        ;`
         => (type)

        // Directly using try/catch with async/await for cleaner flow
        try {
            awa
            awa
        }  {
            
            throw error // Re-throw the error to be handled by the caller
        } finally {
            awa
        }
    }
}

module.exports = { nodeClass: SQLiteRecordManager_RecordManager }
