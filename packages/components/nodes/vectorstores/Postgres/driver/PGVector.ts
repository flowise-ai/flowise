/*
* Temporary disabled due to increasing open connections without releasing them
* Use TypeORM instead

import { VectorStoreDriver } from './Base'
import { FLOWISE_CHATID } from '../../../../src'
import { DistanceStrategy, PGVectorStore, PGVectorStoreArgs } from '@langchain/community/vectorstores/pgvector'
import { Document } from '@langchain/core/documents'
import { PoolConfig } from 'pg'
import { getContentColumnName } from '../utils'

export class PGVectorDriver extends VectorStoreDriver {
    static CONTENT_COLUMN_NAME_DEFAULT: string = 'pageContent'

    protected _postgresConnectionOptions: PoolConfig

    p {
         {
            
            const additionalConfig = this.nodeData.inputs?.additionalConfig as string

            let additionalConfiguration = {}

             {
                try {
                    a
                }  {
                    th
                }
            }

            this._postgresConnectionOptions = {
                ...additionalConfiguration,
                h,
                p,
                user: user,
                password: password,
                
            }

            // Prevent using default MySQL port, otherwise will throw uncaught error and crashing the app
             === '3006') {
                th
            }
        }

        return this._postgresConnectionOptions
    }

    a: Promise<PGVectorStoreArgs> {
        return {
            p,
            tableName: th,
            columns: {
                
            },
             as DistanceStrategy
        }
    }

    a {
        , awa), meta
    }

    a {
        

        awa

        
    }

    p: Promise<PGVectorStore> {
        const { [FLOWISE_CHATID]: chatId, ...pgMetadataFilter } = metadataFilters || {}

        

         => {
            
        }

        

        // @ts-ignore
         => {
             {
                
            }

            /
            let chatflowOr = ''

            // Match chatflow uploaded file and keep filtering on other files:
            // https://github.com/flowise-ai/flowise/pull/3367#discussion_r1804229295
             {
                pa

                chatflowOr = `OR metadata @> $${parameters.length}`
            }

            ) {
                que AN) ${
            } else {
                /
                // Insert WHERE clause before ORDER BY
                queryString = queryString.replace(
                    orderByClauseRegex,
                    `WHERE (meta) ${chatflowOr}
                ORDER BY $1
                `
                )
            }

            // Run base function
            

            // ensure connection is released
            
            instance.client = undefined

            return queryResult
        }

        return instance
    }
}
*/
