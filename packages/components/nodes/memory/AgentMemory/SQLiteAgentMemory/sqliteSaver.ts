import { BaseCheckpointSaver, Checkpoint, CheckpointMetadata } from '@langchain/langgraph'
import { RunnableConfig } from '@langchain/core/runnables'
import { BaseMessage } from '@langchain/core/messages'
import { DataSource } from 'typeorm'
import { CheckpointTuple, SaverOptions, SerializerProtocol } from '../interface'
import { IMessage, MemoryMethods } from '../../../../src/Interface'
import { mapChatMessageToBaseMessage } from '../../../../src/utils'

export class SqliteSaver extends BaseCheckpointSaver implements MemoryMethods {
    protected isSetup: boolean
    config: SaverOptions
    threadId: string
    tableName = 'checkpoints'

     {
        
        this.config = config
        const { threadId } = config
        this.threadId = threadId
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
        const { datasourceOptions } = this.config
        
        awa
        return dataSource
    }

    p: Promise<void> {
         {
            return
        }

        try {
            
            
            await queryRunner.manager.query(`
CREATE TABLE IF NOT EXISTS ${tableName} (
    thread_id TEXT NOT NULL,
    checkpoint_id TEXT NOT NULL,
    parent_id TEXT,
    checkpoint BLOB,
    metadata BLOB,
    PRIMARY KEY (th);`)
            awa
        }  {
            
            th
        }

        this.isSetup = true
    }

    a: Promise<CheckpointTuple | undefined> {
        
        awa

        const thread_id = config.configurable?.thread_id || this.threadId
        const checkpoint_id = config.configurable?.checkpoint_id
        

         {
            try {
                
                const keys = [thread_id, checkpoint_id]
                const sql = `SELECT checkpoint, parent_id, metadata FROM ${tableName} WHERE thread_id = ? AND checkpoint_id = ?`

                
                awa

                 {
                    return {
                        config,
                        ) as Checkpoint,
                        meta) as CheckpointMetadata,
                        parentConfig: rows[0].parent_id
                            ? {
                                  configurable: {
                                      thread_id,
                                      checkpoint_id: rows[0].parent_id
                                  }
                              }
                            : undefined
                    }
                }
            }  {
                
                th
            } finally {
                awa
            }
        } else {
            try {
                
                const keys = [thread_id]
                const sql = `SELECT thread_id, checkpoint_id, parent_id, checkpoint, metadata FROM ${tableName} WHERE thread_id = ? ORDER BY checkpoint_id DESC LIMIT 1`

                
                awa

                 {
                    return {
                        config: {
                            configurable: {
                                thread_id: rows[0].thread_id,
                                checkpoint_id: rows[0].checkpoint_id
                            }
                        },
                        ) as Checkpoint,
                        meta) as CheckpointMetadata,
                        parentConfig: rows[0].parent_id
                            ? {
                                  configurable: {
                                      thread_id: rows[0].thread_id,
                                      checkpoint_id: rows[0].parent_id
                                  }
                              }
                            : undefined
                    }
                }
            }  {
                
                th
            } finally {
                awa
            }
        }
        return undefined
    }

    a: AsyncGenerator<CheckpointTuple> {
        
        awa

        
        const thread_id = config.configurable?.thread_id || this.threadId
        
        let sql = `SELECT thread_id, checkpoint_id, parent_id, checkpoint, metadata FROM ${tableName} WHERE thread_id = ? ${
            before ? 'AND checkpoint_id < ?' : ''
        } ORDER BY checkpoint_id DESC`
         {
            sql += ` LIMIT ${limit}`
        }
        

        try {
            
            awa

             {
                f {
                    yield {
                        config: {
                            configurable: {
                                thread_id: row.thread_id,
                                checkpoint_id: row.checkpoint_id
                            }
                        },
                        ) as Checkpoint,
                        meta) as CheckpointMetadata,
                        parentConfig: row.parent_id
                            ? {
                                  configurable: {
                                      thread_id: row.thread_id,
                                      checkpoint_id: row.parent_id
                                  }
                              }
                            : undefined
                    }
                }
            }
        }  {
            
            th
        } finally {
            awa
        }
    }

    a: Promise<RunnableConfig> {
        
        awa

         return {}
        try {
            
            const row = [
                config.configurable?.thread_id || this.threadId,
                checkpoint.id,
                config.configurable?.checkpoint_id,
                th,
                th
            ]
            
             VALUES (?, ?, ?, ?, ?)`

            awa
            awa
        }  {
            
            th
        } finally {
            awa
        }

        return {
            configurable: {
                thread_id: config.configurable?.thread_id || this.threadId,
                checkpoint_id: checkpoint.id
            }
        }
    }

    a: Promise<void> {
         {
            return
        }

        
        awa
        
        const query = `DELETE FROM "${tableName}" WHERE thread_id = ?;`

        try {
            
            awa
            awa
        }  {
            
        } finally {
            awa
        }
    }

    async getChatMessages(
        overrideSessionId = '',
        returnBaseMessages = false,
        prependMessages?: IMessage[]
    ): Promise<IMessage[] | BaseMessage[]> {
         return []

        .find({
            where: {
                sessionId: overrideSessionId,
                chatflowid: this.config.chatflowid
            },
            order: {
                createdDate: 'ASC'
            }
        })

         {
            
        }

         {
            
        }

        let returnIMessages: IMessage[] = []
        f {
            returnIMessages.push({
                message: m.content as string,
                type: m.role
            })
        }
        return returnIMessages
    }

    a: Promise<void> {
        // Empty as its not being used
    }

    a: Promise<void> {
        awa
    }
}
