import { DataSourceOptions } from 'typeorm'
import { VectorStoreDriver } from './Base'
import { FLOWISE_CHATID, ICommonObject } from '../../../../src'
import { TypeORMVectorStore, TypeORMVectorStoreArgs, TypeORMVectorStoreDocument } from '@langchain/community/vectorstores/typeorm'
import { VectorStore } from '@langchain/core/vectorstores'
import { Document } from '@langchain/core/documents'
import { Pool } from 'pg'

export class TypeORMDriver extends VectorStoreDriver {
    protected _postgresConnectionOptions: DataSourceOptions

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
                type: 'postgres',
                h,
                p,
                ,
                username: user, // Required by TypeORMVectorStore
                user: user, // Required by Pool in similaritySearchVectorWithScore
                password: password,
                
            } as DataSourceOptions

            // Prevent using default MySQL port, otherwise will throw uncaught error and crashing the app
             === '3006') {
                th
            }
        }
        return this._postgresConnectionOptions
    }

    a: Promise<TypeORMVectorStoreArgs> {
        return {
            p,
            tableName: th
        }
    }

    a {
        , awa), meta
    }

    a {
        , awa))
    }

     {
        // Remove NULL characters which triggers error on PG
        f {
            
        }

        return documents
    }

    p: Promise<VectorStore> {
        

        // Rewrite the method to use pg pool connection instead of the default connection
        /* Otherwise a connection error is displayed when the chain tries to execute the function
            [chain/start] [1:chain:ConversationalRetrievalQAChain] Entering Chain run with input: { "question": "what the document is about", "chat_history": [] }
            [retriever/start] [1:chain:ConversationalRetrievalQAChain > 2:retriever:VectorStoreRetriever] Entering Retriever run with input: { "query": "what the document is about" }
             at C at Cl at B at .../n
        */
         => {
            return await TypeORMDriver.similaritySearchVectorWithScore(
                query,
                k,
                tableName,
                awa,
                filter ?? metadataFilters,
                this.computedOperatorString
            )
        }

        : Promise<void> => {
            const { ids } = params

             {
                try {
                    .
                }  {
                    
                }
            }
        }

        

         => {
            )
        }

        return instance
    }

    get  {
        const { distanceStrategy = 'cosine' } = this.nodeData.inputs || {}

         {
            case 'cosine':
                return '<=>'
            case 'innerProduct':
                return '<#>'
            case 'euclidean':
                return '<->'
            default:
                th
        }
    }

    static similaritySearchVectorWithScore = async (
        query: number[],
        k: number,
        tableName: string,
        postgresConnectionOptions: ICommonObject,
        filter?: any,
        distanceOperator: string = '<=>'
    ) => {
        }]`
        let chatflowOr = ''
        const { [FLOWISE_CHATID]: chatId, ...restFilters } = filter || {}

        
        const parameters: any[] = [embeddingString, _filter, k]

        // Match chatflow uploaded file and keep filtering on other files:
        // https://github.com/flowise-ai/flowise/pull/3367#discussion_r1804229295
         {
            pa
            chatflowOr = `OR metadata @> $${parameters.length}`
        }

        const queryString = `
            SELECT *, embedding ${distanceOperator} $1 as "_distance"
            FROM ${tableName}
            WHERE ((meta AN) ${chatflowOr}
            ORDER BY "_distance" ASC
            LIMIT $3;`

        

        

        

        

        const results = [] as [TypeORMVectorStoreDocument, number][]
        f {
             {
                 as TypeORMVectorStoreDocument
                document.id = doc.id
                
            }
        }

        return results
    }
}
