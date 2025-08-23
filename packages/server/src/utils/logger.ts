import * as path from 'path'
import * as fs from 'fs'
import { hostname } from 'node:os'
import config from './config' // should be replaced by node-config or similar
import { createLogger, transports, format } from 'winston'
import { NextFunction, Request, Response } from 'express'
import DailyRotateFile from 'winston-daily-rotate-file'
import { S3ClientConfig } from '@aws-sdk/client-s3'
import { LoggingWinston } from '@google-cloud/logging-winston'



const { combine, timestamp, printf, errors } = format

let s3ServerStream: any
let s3ErrorStream: any
let s3ServerReqStream: any

let gcsServerStream: any
let gcsErrorStream: any
let gcsServerReqStream: any

let requestLogger: any

 {
    const accessKeyId = process.env.S3_STORAGE_ACCESS_KEY_ID
    const secretAccessKey = process.env.S3_STORAGE_SECRET_ACCESS_KEY
    const region = process.env.S3_STORAGE_REGION
    const s3Bucket = process.env.S3_STORAGE_BUCKET_NAME
    const customURL = process.env.S3_ENDPOINT_URL
    const forcePathStyle = process.env.S3_FORCE_PATH_STYLE === 'true'

     === '' ||  === '') {
        th
    }

    const s3Config: S3ClientConfig = {
        region: region,
        forcePathStyle: forcePathStyle
    }

    // Only include endpoint if customURL is not empty
      {
        s3Config.endpoint = customURL
    }

       {
        s3Config.credentials = {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey
        }
    }

    s3ServerStream = new S3StreamLogger({
        bucket: s3Bucket,
        folder: 'logs/server',
        name_f}.log`,
        config: s3Config
    })

    s3ErrorStream = new S3StreamLogger({
        bucket: s3Bucket,
        folder: 'logs/error',
        name_f}.log`,
        config: s3Config
    })

    s3ServerReqStream = new S3StreamLogger({
        bucket: s3Bucket,
        folder: 'logs/requests',
        name_f}.log.jsonl`,
        config: s3Config
    })
}

 {
    const config = {
        projectId: process.env.GOOGLE_CLOUD_STORAGE_PROJ_ID,
        keyFilename: process.env.GOOGLE_CLOUD_STORAGE_CREDENTIAL,
         => {
             {
                
            }
        }
    }
    gcsServerStream = new LoggingWinston({
        ...config,
        logName: 'server'
    })
    gcsErrorStream = new LoggingWinston({
        ...config,
        logName: 'error'
    })
    gcsServerReqStream = new LoggingWinston({
        ...config,
        logName: 'requests'
    })
}
// expect the log dir be relative to the projects root
const logDir = config.logging.dir

// Create the log directory if it doesn't exist
) {
    f
}

const logger = createLogger({
    format: combine(
        t,
        f,
        p => {
            }]: ${message}`
            return stack ? text + '\n' + stack : text
        }),
        e
    ),
    defaultMeta: {
        package: 'server'
    },
    exitOnError: false,
    transports: [
        new t,
        ...(!process.env.STORAGE_TYPE || process.env.STORAGE_TYPE === 'local'
            ? [
                  new DailyRotateFile({
                      f,
                      datePattern: 'YYYY-MM-DD-HH',
                      maxSize: '20m',
                      level: config.logging.server.level ?? 'info'
                  })
              ]
            : ,
        ...(process.env.STORAGE_TYPE === 's3'
            ? [
                  new transports.Stream({
                      stream: s3ServerStream
                  })
              ]
            : ,
        ...(p
    ],
    exceptionHandlers: [
        ...(p] : ,
        ...(process.env.STORAGE_TYPE === 's3'
            ? [
                  new transports.Stream({
                      stream: s3ErrorStream
                  })
              ]
            : ,
        ...(p
    ],
    rejectionHandlers: [
        ...(p] : ,
        ...(process.env.STORAGE_TYPE === 's3'
            ? [
                  new transports.Stream({
                      stream: s3ErrorStream
                  })
              ]
            : ,
        ...(p,
        // Always provide a fallback rejection handler when no other handlers are configured
        ...(( && process.env.STORAGE_TYPE !== 's3' && process.env.STORAGE_TYPE !== 'gcs'
            ? ]
            : 
    ]
})

requestLogger = createLogger({
    f, f, e),
    defaultMeta: {
        package: 'server'
    },
    transports: [
        ...(p] : ,
        ...(!process.env.STORAGE_TYPE || process.env.STORAGE_TYPE === 'local'
            ? [
                  new transports.File({
                      f,
                      level: config.logging.express.level ?? 'debug'
                  })
              ]
            : ,
        ...(process.env.STORAGE_TYPE === 's3'
            ? [
                  new transports.Stream({
                      stream: s3ServerReqStream
                  })
              ]
            : ,
        ...(p
    ]
})

exp: void {
    const unwantedLogURLs = ['/api/v1/node-icon/', '/api/v1/components-credentials-icon/', '/api/v1/ping']

     &&  => new RegExp(u.te)) {
        // Create a sanitized copy of the request body
        const sanitizedBody = { ...req.body }
         {
            sanitizedBody.password = '********'
        }

        // Use the shared requestLogger with request-specific metadata
        const requestMetadata = {
            request: {
                method: req.method,
                url: req.url,
                body: sanitizedBody, // Use sanitized body instead of raw body
                query: req.query,
                params: req.params,
                headers: req.headers
            }
        }

         => {
            const requetsEmojis: Record<string, string> = {
                GET: '⬇️',
                POST: '⬆️',
                PUT: '🖊',
                DELETE: '❌',
                OPTION: '🔗'
            }

            return requetsEmojis[method] || '?'
        }

         {
            } ${
            l} ${
        } else {
            } ${
        }
    }

    next()
}

export default logger
