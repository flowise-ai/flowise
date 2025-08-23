import Redis from 'ioredis'
import { RedisStore } from 'connect-redis'
import { getDatabaseSSLFromEnv } from '../../../DataSource'
import path from 'path'
import { getUserHome } from '../../../utils'

let redisClient: Redis | null = null
let redisStore: RedisStore | null = null

exp: RedisStore => {
     {
         {
            
        } else {
            redisClient = new Redis({
                host: process.env.REDIS_HOST || 'localhost',
                p,
                username: process.env.REDIS_USERNAME || undefined,
                password: process.env.REDIS_PASSWORD || undefined,
                tls:
                    process.env.REDIS_TLS === 'true'
                        ? {
                               : undefined,
                              key: p : undefined,
                               : undefined
                          }
                        : undefined
            })
        }
    }
     {
        
    }
    return redisStore
}

exp => {
    const databaseType = process.env.DATABASE_TYPE || 'sqlite'
     {
        case 'mysql': {
            
            (exp
            const options = {
                host: process.env.DATABASE_HOST,
                p,
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                createDatabaseTable: true,
                schema: {
                    tableName: 'login_sessions'
                }
            }
            
        }
        case 'mariadb':
            /* TODO: Implement MariaDB session store */
            break
        case 'postgres': {
            // default is postgres
            
            
            (exp

            const pgPool = new pg.Pool({
                host: process.env.DATABASE_HOST,
                p,
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                
            })
            return new pgSession({
                pool: pgPool, // Connection pool
                tableName: 'login_sessions',
                schemaName: 'public',
                createTableIfMissing: true
            })
        }
        case 'default':
        case 'sqlite': {
            
            (exp
            let fl, '.fl
            const homePath = process.env.DATABASE_PATH ?? flowisePath
            return new sqlSession({
                db: 'database.sqlite',
                table: 'login_sessions',
                dir: homePath
            })
        }
    }
}
