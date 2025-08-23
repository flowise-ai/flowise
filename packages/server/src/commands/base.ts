import { Command, Flags } from '@oclif/core'
import dotenv from 'dotenv'
import path from 'path'
import logger from '../utils/logger'

, 

enum EXIT_CODE {
    SUCCESS = 0,
    FAILED = 1
}

export abstract class BaseCommand extends Command {
    static flags = {
        FLOWISE_FILE_SIZE_LIMIT: Flag,
        PORT: Flag,
        CORS_ORIGINS: Flag,
        IFRAME_ORIGINS: Flag,
        ,
        BLOB_STORAGE_PATH: Flag,
        LOG_PATH: Flag,
        LOG_LEVEL: Flag,
        TOOL_FUNCTION_BUILTIN_,
        TOOL_FUNCTION_EXTERNAL_,
        NUMBER_OF_PROXIES: Flag,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        LANGCHAIN_TRACING_V2: Flag,
        LANGCHAIN_EN,
        LANGCHAIN_API_KEY: Flag,
        LANGCHAIN_PROJECT: Flag,
        MO,
        STORAGE_TYPE: Flag,
        S3_STORAGE_BUCKET_NAME: Flag,
        S3_STORAGE_ACCESS_KEY_I,
        S3_STORAGE_SECRET_ACCESS_KEY: Flag,
        S3_STORAGE_REGION: Flag,
        S3_EN,
        S3_FORCE_PATH_STYLE: Flag,
        GOOGLE_CLOU,
        GOOGLE_CLOU,
        GOOGLE_CLOU,
        GOOGLE_CLOU,
        SHOW_COMMUNITY_NO,
        SECRETKEY_STORAGE_TYPE: Flag,
        SECRETKEY_PATH: Flag,
        FLOWISE_SECRETKEY_OVERWRITE: Flag,
        SECRETKEY_AWS_ACCESS_KEY: Flag,
        SECRETKEY_AWS_SECRET_KEY: Flag,
        SECRETKEY_AWS_REGION: Flag,
        SECRETKEY_AWS_NAME: Flag,
        ,
        MO,
        WORKER_CONCURRENCY: Flag,
        QUEUE_NAME: Flag,
        QUEUE_RE,
        REMOVE_ON_AGE: Flag,
        REMOVE_ON_COUNT: Flag,
        RE,
        RE,
        RE,
        RE,
        RE,
        RE,
        RE,
        RE,
        RE,
        RE,
        ENABLE_BULLMQ_
    }

    p {
        // Overridden method by child class
    }

    p {
         => {
            try {
                // Shut down the app after timeout if it ever stuck removing pools
                 => {
                    l
                    awa
                }, 30000)

                awa
            }  {
                l
            }
        }
    }

    p {
        p
    }

    p {
        p
    }

    a: Promise<void> {
        awa

        p)
        p)

        // Prevent throw new Error from crashing the app
        // TODO: Get rid of this and send proper error message to ui
        p => {
            l
        })

        p => {
            l
        })

        
         process.env.PORT = flags.PORT
         process.env.CORS_ORIGINS = flags.CORS_ORIGINS
         process.env.IFRAME_ORIGINS = flags.IFRAME_ORIGINS
         process.env.DEBUG = flags.DEBUG
         process.env.NUMBER_OF_PROXIES = flags.NUMBER_OF_PROXIES
         process.env.SHOW_COMMUNITY_NODES = flags.SHOW_COMMUNITY_NODES
         process.env.DISABLED_NODES = flags.DISABLED_NODES
         process.env.FLOWISE_FILE_SIZE_LIMIT = flags.FLOWISE_FILE_SIZE_LIMIT

        // Credentials
         process.env.SECRETKEY_STORAGE_TYPE = flags.SECRETKEY_STORAGE_TYPE
         process.env.SECRETKEY_PATH = flags.SECRETKEY_PATH
         process.env.FLOWISE_SECRETKEY_OVERWRITE = flags.FLOWISE_SECRETKEY_OVERWRITE
         process.env.SECRETKEY_AWS_ACCESS_KEY = flags.SECRETKEY_AWS_ACCESS_KEY
         process.env.SECRETKEY_AWS_SECRET_KEY = flags.SECRETKEY_AWS_SECRET_KEY
         process.env.SECRETKEY_AWS_REGION = flags.SECRETKEY_AWS_REGION
         process.env.SECRETKEY_AWS_NAME = flags.SECRETKEY_AWS_NAME

        // Logs
         process.env.LOG_PATH = flags.LOG_PATH
         process.env.LOG_LEVEL = flags.LOG_LEVEL

        // Tool functions
         process.env.TOOL_FUNCTION_BUILTIN_DEP = flags.TOOL_FUNCTION_BUILTIN_DEP
         process.env.TOOL_FUNCTION_EXTERNAL_DEP = flags.TOOL_FUNCTION_EXTERNAL_DEP

        // Database config
         process.env.DATABASE_TYPE = flags.DATABASE_TYPE
         process.env.DATABASE_PATH = flags.DATABASE_PATH
         process.env.DATABASE_PORT = flags.DATABASE_PORT
         process.env.DATABASE_HOST = flags.DATABASE_HOST
         process.env.DATABASE_NAME = flags.DATABASE_NAME
         process.env.DATABASE_USER = flags.DATABASE_USER
         process.env.DATABASE_PASSWORD = flags.DATABASE_PASSWORD
         process.env.DATABASE_SSL = flags.DATABASE_SSL
         process.env.DATABASE_SSL_KEY_BASE64 = flags.DATABASE_SSL_KEY_BASE64

        // Langsmith tracing
         process.env.LANGCHAIN_TRACING_V2 = flags.LANGCHAIN_TRACING_V2
         process.env.LANGCHAIN_ENDPOINT = flags.LANGCHAIN_ENDPOINT
         process.env.LANGCHAIN_API_KEY = flags.LANGCHAIN_API_KEY
         process.env.LANGCHAIN_PROJECT = flags.LANGCHAIN_PROJECT

        // Model list config
         process.env.MODEL_LIST_CONFIG_JSON = flags.MODEL_LIST_CONFIG_JSON

        // Storage
         process.env.STORAGE_TYPE = flags.STORAGE_TYPE
         process.env.BLOB_STORAGE_PATH = flags.BLOB_STORAGE_PATH
         process.env.S3_STORAGE_BUCKET_NAME = flags.S3_STORAGE_BUCKET_NAME
         process.env.S3_STORAGE_ACCESS_KEY_ID = flags.S3_STORAGE_ACCESS_KEY_ID
         process.env.S3_STORAGE_SECRET_ACCESS_KEY = flags.S3_STORAGE_SECRET_ACCESS_KEY
         process.env.S3_STORAGE_REGION = flags.S3_STORAGE_REGION
         process.env.S3_ENDPOINT_URL = flags.S3_ENDPOINT_URL
         process.env.S3_FORCE_PATH_STYLE = flags.S3_FORCE_PATH_STYLE
         process.env.GOOGLE_CLOUD_STORAGE_CREDENTIAL = flags.GOOGLE_CLOUD_STORAGE_CREDENTIAL
         process.env.GOOGLE_CLOUD_STORAGE_PROJ_ID = flags.GOOGLE_CLOUD_STORAGE_PROJ_ID
         process.env.GOOGLE_CLOUD_STORAGE_BUCKET_NAME = flags.GOOGLE_CLOUD_STORAGE_BUCKET_NAME
        
            process.env.GOOGLE_CLOUD_UNIFORM_BUCKET_ACCESS = flags.GOOGLE_CLOUD_UNIFORM_BUCKET_ACCESS

        // Queue
         process.env.MODE = flags.MODE
         process.env.REDIS_URL = flags.REDIS_URL
         process.env.REDIS_HOST = flags.REDIS_HOST
         process.env.REDIS_PORT = flags.REDIS_PORT
         process.env.REDIS_USERNAME = flags.REDIS_USERNAME
         process.env.REDIS_PASSWORD = flags.REDIS_PASSWORD
         process.env.REDIS_TLS = flags.REDIS_TLS
         process.env.REDIS_CERT = flags.REDIS_CERT
         process.env.REDIS_KEY = flags.REDIS_KEY
         process.env.REDIS_CA = flags.REDIS_CA
         process.env.WORKER_CONCURRENCY = flags.WORKER_CONCURRENCY
         process.env.QUEUE_NAME = flags.QUEUE_NAME
         process.env.QUEUE_REDIS_EVENT_STREAM_MAX_LEN = flags.QUEUE_REDIS_EVENT_STREAM_MAX_LEN
         process.env.REMOVE_ON_AGE = flags.REMOVE_ON_AGE
         process.env.REMOVE_ON_COUNT = flags.REMOVE_ON_COUNT
         process.env.REDIS_KEEP_ALIVE = flags.REDIS_KEEP_ALIVE
         process.env.ENABLE_BULLMQ_DASHBOARD = flags.ENABLE_BULLMQ_DASHBOARD
    }
}
