import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { ListKeyOptions, RecordManagerInterface, UpdateOptions } from '@langchain/community/indexes/base'
import { DataSource } from 'typeorm'
import { getHost, getSSL } from '../../vectorstores/Postgres/utils'
import { getDatabase, getPort, getTableName } from './utils'

const serverCredentialsExists = !!process.env.POSTGRES_RECORDMANAGER_USER && !!process.env.POSTGRES_RECORDMANAGER_PASSWORD

class PostgresRecordManager_RecordManager implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    badge: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Postgres Record Manager'
        this.name = 'postgresRecordManager'
        this.version = 1.0
        this.type = 'Postgres RecordManager'
        this.icon = 'postgres.svg'
        this.category = 'Record Manager'
        this.description = 'Use Postgres to keep track of document writes into the vector databases'
        th]
        this.inputs = [
            {
                label: 'Host',
                name: 'host',
                type: 'string',
                pla,
                
            },
            {
                label: 'Database',
                name: 'database',
                type: 'string',
                pla,
                
            },
            {
                label: 'Port',
                name: 'port',
                type: 'number',
                pla,
                optional: true
            },
            {
                label: 'SSL',
                name: 'ssl',
                description: 'Use SSL to connect to Postgres',
                type: 'boolean',
                additionalParams: true,
                optional: true
            },
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
                pla,
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
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['PostgresApi'],
            optional: serverCredentialsExists
        }
    }

    a: Promise<any> {
        
        
        
        
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

        const postgresConnectionOptions = {
            ...additionalConfiguration,
            type: 'postgres',
            h,
            p,
            ,
            username: user,
            password: password,
            
        }

        const args = {
            postgresConnectionOptions: postgresConnectionOptions,
            tableName: tableName
        }

        

        ;(.cleanup = cleanup
        ;(.sourceIdKey = sourceIdKey

        return recordManager
    }
}

type PostgresRecordManagerOptions = {
    postgresConnectionOptions: any
    tableName: string
}

class PostgresRecordManager implements RecordManagerInterface {
    lc_namespace = ['langchain', 'recordmanagers', 'postgres']
    config: PostgresRecordManagerOptions
    tableName: string
    namespace: string

     {
        const { tableName } = config
        this.namespace = namespace
        this.tableName = tableName
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
        const { postgresConnectionOptions } = this.config
         {
            th
        }
        // Prevent using default MySQL port, otherwise will throw uncaught error and crashing the app
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
    uu,
    key TEXT NOT NULL,
    namespace TEXT NOT NULL,
    updated_at Double PRECISION NOT NULL,
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
            
             AS ext
            awa
            
        }  {
            
            throw error
        } finally {
            awa
        }
    }

    /**
     * Generates the SQL placeholders for a specific row at the provided index.
     *
     * @param index - The index of the row for which placeholders need to be generated.
     * @param numOfColumns - The number of columns we are inserting data into.
     * @returns The SQL placeholders for the row values.
     */
    p: string {
        const placeholders = []
        f {
            pla
        }
        })`
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

         => 

         => th).j

         VALUES ${value DO UPDATE SET updated_at = EXCLUDED.updated_at;`
        try {
            awa)
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

        
        
        

        const startIndex = 2
         => `$${.j

        const query = `
        SELECT k, (key  ex f k left join "${tableName}" on k=key and namespace = $1;
        `
        try {
            ])
            awa
             => 
        }  {
            
            throw error
        } finally {
            awa
        }
    }

    a: Promise<string[]> {
        const { before, after, limit, groupIds } = options ?? {}
        

        let query = `SELECT key FROM "${tableName}" WHERE namespace = $1`
        [] = [this.namespace]

        let index = 2
         {
            value
            query += ` AND updated_at < $${index}`
            index += 1
        }

         {
            value
            query += ` AND updated_at > $${index}`
            index += 1
        }

         {
            value
            query += ` LIMIT $${index}`
            index += 1
        }

         {
            value
            que`
            index += 1
        }

        query += ';'

        
        

        try {
            
            awa
             => 
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

        
        
        

        try {
            ;`
            awa
            awa
        }  {
            
            throw error
        } finally {
            awa
        }
    }
}

module.exports = { nodeClass: PostgresRecordManager_RecordManager }
