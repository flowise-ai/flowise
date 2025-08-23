import axios from 'axios'
import { load } from 'cheerio'
import * as fs from 'fs'
import * as path from 'path'
import { JSDOM } from 'jsdom'
import { z } from 'zod'
import TurndownService from 'turndown'
import { DataSource, Equal } from 'typeorm'
import { ICommonObject, IDatabaseEntity, IFileUpload, IMessage, INodeData, IVariable, MessageContentImageUrl } from './Interface'
import { AES, enc } from 'crypto-js'
import { omit } from 'lodash'
import { AIMessage, HumanMessage, BaseMessage } from '@langchain/core/messages'
import { Document } from '@langchain/core/documents'
import { getFileFromStorage } from './storageUtils'
import { GetSecretValueCommand, SecretsManagerClient, SecretsManagerClientConfig } from '@aws-sdk/client-secrets-manager'
import { customGet } from '../nodes/sequentialagents/commonUtils'
import { TextSplitter } from 'langchain/text_splitter'
import { DocumentLoader } from 'langchain/document_loaders/base'
import { NodeVM } from '@flowiseai/nodevm'
import { Sandbox } from '@e2b/code-interpreter'

exp$' //return true if string consists only numbers OR expression {{}}
exp*\\S(.|\\*' //return true if string is not empty or blank
export const FLOWISE_CHATID = 'flowise_chatId'

let secretsManagerClient: SecretsManagerClient | null = null
const USE_AWS_SECRETS_MANAGER = process.env.SECRETKEY_STORAGE_TYPE === 'aws'
 {
    const region = process.env.SECRETKEY_AWS_REGION || 'us-east-1' // Default region if not provided
    const accessKeyId = process.env.SECRETKEY_AWS_ACCESS_KEY
    const secretAccessKey = process.env.SECRETKEY_AWS_SECRET_KEY

    const secretManagerConfig: SecretsManagerClientConfig = {
        region: region
    }

     {
        secretManagerConfig.credentials = {
            accessKeyId,
            secretAccessKey
        }
    }

    
}

/*
 * List of dependencies allowed to be import in @flowiseai/nodevm
 */
export const availableDependencies = [
    '@aws-sdk/client-bedrock-runtime',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/client-s3',
    '@elastic/elasticsearch',
    '@dqbd/tiktoken',
    '@getzep/zep-js',
    '@gomomento/sdk',
    '@gomomento/sdk-core',
    '@google-ai/generativelanguage',
    '@google/generative-ai',
    '@huggingface/inference',
    '@langchain/anthropic',
    '@langchain/aws',
    '@langchain/cohere',
    '@langchain/community',
    '@langchain/core',
    '@langchain/google-genai',
    '@langchain/google-vertexai',
    '@langchain/groq',
    '@langchain/langgraph',
    '@langchain/mistralai',
    '@langchain/mongodb',
    '@langchain/ollama',
    '@langchain/openai',
    '@langchain/pinecone',
    '@langchain/qdrant',
    '@langchain/weaviate',
    '@notionhq/client',
    '@opensearch-project/opensearch',
    '@pinecone-database/pinecone',
    '@qdrant/js-client-rest',
    '@supabase/supabase-js',
    '@upstash/redis',
    '@zilliz/milvus2-sdk-node',
    'apify-client',
    'axios',
    'cheerio',
    'chromadb',
    'cohere-ai',
    'd3-dsv',
    'faiss-node',
    'form-data',
    'google-auth-library',
    'graphql',
    'html-to-text',
    'ioredis',
    'langchain',
    'langfuse',
    'langsmith',
    'langwatch',
    'linkifyjs',
    'lunary',
    'mammoth',
    'moment',
    'mongodb',
    'mysql2',
    'node-fetch',
    'node-html-markdown',
    'notion-to-md',
    'openai',
    'pdf-parse',
    'pdfjs-dist',
    'pg',
    'playwright',
    'puppeteer',
    'redis',
    'replicate',
    'srt-parser-2',
    'typeorm',
    'weaviate-ts-client'
]

export const defaultAllowBuiltInDep = [
    'assert',
    'buffer',
    'crypto',
    'events',
    'http',
    'https',
    'net',
    'path',
    'querystring',
    'timers',
    'tls',
    'url',
    'zlib'
]

/**
 * Get base classes of components
 *
 * @export
 * @param {any} targetClass
 * @returns {string[]}
 */
exp => {
    const baseClasses: string[] = []
    const skipClassNames = ['BaseLangChain', 'Serializable']

     {
        let baseClass = targetClass

        wh {
            
             {
                baseClass = newBaseClass
                ) ba
            } else {
                break
            }
        }
    }
    return baseClasses
}

/**
 * Serialize axios query params
 *
 * @export
 * @param {any} params
 * @param {boolean} skipIndex // Set to true if you want same params to be: param=1&param=2 instead of: param[0]=1&param[1]=2
 * @returns {string}
 */
exp: string {
    const parts: any[] = []

     => {
        
            .
            .
            .
            .
            .
            .
    }

     => {
         val = val.t
        el val = JSON.

        pa + '=' + en)
    }

    Obje.f => {
         return

        ) val.f => )
        el
    })

    
}

/**
 * Handle error from try catch
 *
 * @export
 * @param {any} error
 * @returns {string}
 */
exp: string {
    let errorMessage = ''

     {
        errorMessage += error.message + '. '
    }

     {
         {
             e + '. '
            el errorMessage += error.response.data.error + '. '
        } el errorMessage += error.response.data.msg + '. '
        el errorMessage += error.response.data.Message + '. '
        el errorMessage += error.response.data + '. '
    }

     errorMessage = 'Unexpected Error.'

    return errorMessage
}

/**
 * Returns the path of node modules package
 * @param {string} packageName
 * @returns {string}
 */
exp: string => {
    const checkPaths = [
        path.j,
        path.j,
        path.j,
        path.j,
        path.j
    ]
    f {
        ) {
            return checkPath
        }
    }
    return ''
}

/**
 * Get input variables
 * @param {string} paramValue
 * @returns {boolean}
 */
exp: string[] => {
     return []
    const returnVal = paramValue
    const variableStack = []
    const inputVariables = []
    let startIdx = 0
    const endIdx = returnVal.length
    wh {
        
        // Check for escaped curly brackets
        ) {
            startIdx += 2 // Skip the escaped bracket
            continue
        }
        // Store the opening double curly bracket
         {
            va
        }
        // Found the complete variable
         {
            const variableStartIdx = variableStack[variableStack.length - 1].startIdx
            const variableEndIdx = startIdx
            
            ) 
            va
        }
        startIdx += 1
    }
    return inputVariables
}

/**
 * Transform single curly braces into double curly braces if the content includes a colon.
 * @param input - The original string that may contain { ... } segments.
 * @returns The transformed string, where { ... } containing a colon has been replaced with {{ ... }}.
 */
exp: string => {
    // Th an
    // to ensure we only match single curly braces, not double ones.
    // It will match a single { that's not preceded by another {,
    // followed by any content without braces, then a single } that's not followed by another }.
    \{(\}(?/g

     => {
        // groupContent is the text inside the braces `{ ... }`.

        ) {
            // If there's a colon in the content, we turn { ... } into {{ ... }}
            // The match is the full string like: "{ answer: hello }"
            // groupContent is the inner part like: " answer: hello "
            return `{{${groupContent}}}`
        } else {
            // Otherwise, leave it as is
            return match
        }
    })
}

/**
 * Crawl all available urls given a domain url and limit
 * @param {string} url
 * @param {number} limit
 * @returns {string[]}
 */
exp => {
    try {
        const availableUrls: string[] = []

        
        ava

        
        

        
        
         return availableUrls

        l // limit + 1 is because index start from 0 and index 0 is occupy by url
        

        // availableUrls.length cannot exceed limit
        f {
             break // some links are repetitive so it won't added into the array which cause the length to be lesser
            
            const element = relativeLinks[i]

            .att
             continue

            .t
            ) {
                ava
                
            }
        }

        return availableUrls
    }  {
        th
    }
}

/**
 * Search for href through htmlBody string
 * @param {string} htmlBody
 * @param {string} baseURL
 * @returns {string[]}
 */
fun: string[] {
    
    
    const urls: string[] = []
    f {
        try {
            
            u
        }  {
             
            continue
        }
    }
    return urls
}

/**
 * Normalize URL to prevent crawling the same page
 * @param {string} urlString
 * @returns {string}
 */
fun: string {
    
    const port = urlObj.port ? `:${urlObj.port}` : ''
    const hostPath = urlObj.hostname + port + urlObj.pathname + urlObj.search
     == '/') {
        // handling trailing slash
        
    }
    return hostPath
}

/**
 * Recursive crawl using normalizeURL and getURLsFromHTML
 * @param {string} baseURL
 * @param {string} currentURL
 * @param {string[]} pages
 * @param {number} limit
 * @returns {Promise<string[]>}
 */
a: Promise<string[]> {
    
    

     return pages

     return pages

    
    ) {
        return pages
    }

    page

     
    try {
        

         {
             
            return pages
        }

        
        ) ||  {
             
            return pages
        }

        
        
        f {
            page
        }
    }  {
         
    }
    return pages
}

/**
 * Prep URL before passing into recursive crawl function
 * @param {string} stringURL
 * @param {number} limit
 * @returns {Promise<string[]>}
 */
exp: Promise<string[]> {
    
     === '/' ?  : stringURL
    
}

exp: string[] {
    
    
    const urls: string[] = []
    f {
        
         break
         {
            u
        }
    }
    return urls
}

exp: Promise<string[]> {
    let urls: string[] = []
     
    try {
        

         {
             
            return urls
        }

        
         && ) ||  {
             
            return urls
        }

        
        u
    }  {
         
    }
    return urls
}

/**
 * Get env variables
 * @param {string} name
 * @returns {string | undefined}
 */
exp: string | undefined => {
    try {
        return typeof process !== 'undefined' ? process.env?.[name] : undefined
    }  {
        return undefined
    }
}

/**
 * Returns the path of encryption key
 * @returns {string}
 */
: string => {
    const checkPaths = [
        path.j,
        path.j,
        path.j,
        path.j,
        path.j,
        path.j,
        path.j,
        path.j,
        path.j, '.fl
    ]
    f {
        ) {
            return checkPath
        }
    }
    return ''
}

exp: string => {
     : getEn
}

/**
 * Returns the encryption key
 * @returns {Promise<string>}
 */
: Promise<string> => {
     {
        return process.env.FLOWISE_SECRETKEY_OVERWRITE
    }
    try {
         {
            const secretId = process.env.SECRETKEY_AWS_NAME || 'FlowiseEncryptionKey'
            
            

             {
                return response.SecretString
            }
        }
        , 'utf8')
    }  {
        th
    }
}

/**
 * Decrypt credential data
 * @param {string} encryptedData
 * @param {string} componentCredentialName
 * @param {IComponentCredentials} componentCredentials
 * @returns {Promise<ICommonObject>}
 */
: Promise<ICommonObject> => {
    let decryptedDataStr: string

     {
        try {
            ) {
                
                

                 {
                    
                    
                } else {
                    th
                }
            } else {
                
                
                
            }
        }  {
            
            th
        }
    } else {
        // Fallback to existing code
        
        
        
    }

     return {}
    try {
        
    }  {
        
        th
    }
}

/**
 * Get credential data
 * @param {string} selectedCredentialId
 * @param {ICommonObject} options
 * @returns {Promise<ICommonObject>}
 */
exp: Promise<ICommonObject> => {
    const appDataSource = options.appDataSource as DataSource
    const databaseEntities = options.databaseEntities as IDatabaseEntity

    try {
         {
            return {}
        }

        .findOneBy({
            id: selectedCredentialId
        })

         return {}

        // Decrypt credentialData
        

        return decryptedCredentialData
    }  {
        th
    }
}

/**
 * Get first non falsy value
 *
 * @param {...any} values
 *
 * @returns {any|undefined}
 */
exp: any | undefined => {
    [0]
}

exp: any => {
    [paramName] ?? credentialData[paramName] ?? defaultValue ?? undefined
}

// reference https://www.freeformatter.com/json-escape.html
const jsonEscapeCharacters = [
    { escape: '"', value: 'FLOWISE_DOUBLE_QUOTE' },
    { escape: '\n', value: 'FLOWISE_NEWLINE' },
    { escape: '\b', value: 'FLOWISE_BACKSPACE' },
    { escape: '\f', value: 'FLOWISE_FORM_FEED' },
    { escape: '\r', value: 'FLOWISE_CARRIAGE_RETURN' },
    { escape: '\t', value: 'FLOWISE_TAB' },
    { escape: '\\', value: 'FLOWISE_BACKSLASH' }
]

fun: string {
    f {
         : 
    }
    return input
}

fun: any {
    f {
        const type = typeof input[element]
         
        el 
    }
    return input
}

exp: any {
    const type = typeof input
     
    el 
    return input
}

/**
 * Get user home dir
 * @returns {string}
 */
exp: string => {
    let variableName = 'HOME'
     {
        variableName = 'USERPROFILE'
    }

     {
        // If for some reason the variable does not exist, fall back to current folder
        
    }
    return process.env[variableName] as string
}

/**
 * Map ChatMessage to BaseMessage
 * @param {IChatMessage[]} chatmessages
 * @returns {BaseMessage[]}
 */
exp: Promise<BaseMessage[]> => {
    const chatHistory = []

    f {
         {
            )
        } el {
            // check for image/files uploads
             {
                // example: [{"type":"stored-file","name":"0_DiXc4ZklSTo3M8J4.jpg","mime":"image/jpeg"}]
                try {
                    let messageWithFileUploads = ''
                    
                    const imageContents: MessageContentImageUrl[] = []
                    f {
                        ) {
                            
                            // as the image is stored in the server, read the file and convert it to base64
                            

                            imageContents.push({
                                type: 'image_url',
                                image_url: {
                                    url: bf
                                }
                            })
                        } el && upl {
                            imageContents.push({
                                type: 'image_url',
                                image_url: {
                                    url: upload.data
                                }
                            })
                        } el {
                            
                            // @ts-ignore
                            
                            const options = {
                                retrieveAttachmentChatId: true,
                                chatflowid: message.chatflowid,
                                chatId: message.chatId,
                                orgId
                            }
                            let fileInputFieldFromMimeType = 'txtFile'
                            f
                            const nodeData = {
                                inputs: {
                                    }`
                                }
                            }
                            
                            me}</doc>\n\n`
                        }
                    }
                    const messageContent = messageWithFileUploads ? `${messageWithFileUploads}\n\n${message.content}` : message.content
                    chatHistory.push(
                        new HumanMessage({
                            content: [
                                {
                                    type: 'text',
                                    text: messageContent
                                },
                                ...imageContents
                            ]
                        })
                    )
                }  {
                    // failed to parse fileUploads, continue with text only
                    )
                }
            } else {
                )
            }
        }
    }
    return chatHistory
}

/**
 * Convert incoming chat history to string
 * @param {IMessage[]} chatHistory
 * @returns {string}
 */
exp: string => {
    return chatHistory
        .map(( => {
             return ''
            const messageContent = 'message' in chatMessage ? chatMessage.message : chatMessage.content
             === '') return ''

            const messageType = 'type' in chatMessage ? chatMessage.type : chatMessage.role
             {
                return `Assistant: ${messageContent}`
            } el {
                return `Human: ${messageContent}`
            } else {
                return `${messageContent}`
            }
        })
        .f => me // Remove empty messages
        .j
}

/**
 * Serialize array chat history to string
 * @param {string | Array<string>} chatHistory
 * @returns {string}
 */
exp => {
    ) {
        
    }
    return chatHistory
}

/**
 * Convert schema to zod schema
 * @param {string | object} schema
 * @returns {ICommonObject}
 */
exp: ICommonObject => {
    try {
         : schema
        const zodObj: ICommonObject = {}
        f {
             {
                 {
                    z.
                } else {
                    z..
                }
            } el {
                 {
                    z.
                } else {
                    z..
                }
            } el {
                 {
                    z.
                } else {
                    z..
                }
            } el {
                 {
                    z.
                } else {
                    z..
                }
            }
        }
        return zodObj
    }  {
        th
    }
}

/**
 * Flatten nested object
 * @param {ICommonObject} obj
 * @param {string} parentKey
 * @returns {ICommonObject}
 */
exp => {
    let result: any = {}

     return result

    Obje.f => {
        const value = obj[key]
        const _key = parentKey ? parentKey + '.' + key : key
         {
             }
        } else {
            result[_key] = value
        }
    })

    return result
}

/**
 * Convert BaseMessage to IMessage
 * @param {BaseMessage[]} messages
 * @returns {IMessage[]}
 */
exp: IMessage[] => {
    const formatmessages: IMessage[] = []
    f {
         === 'human') {
            formatmessages.push({
                message: m.content as string,
                type: 'userMessage'
            })
        } el === 'a {
            formatmessages.push({
                message: m.content as string,
                type: 'apiMessage'
            })
        } el === ' {
            formatmessages.push({
                message: m.content as string,
                type: 'apiMessage'
            })
        }
    }
    return formatmessages
}

/**
 * Convert MultiOptions String to String Array
 * @param {string} inputString
 * @returns {string[]}
 */
exp: string[] => {
    let ArrayString: string[] = []
    try {
        A
    }  {
        ArrayString = []
    }
    return ArrayString
}

/**
 * Get variables
 * @param {DataSource} appDataSource
 * @param {IDatabaseEntity} databaseEntities
 * @param {INodeData} nodeData
 */
export const getVars = async (
    appDataSource: DataSource,
    databaseEntities: IDatabaseEntity,
    nodeData: INodeData,
    options: ICommonObject
) => {
     {
        return []
    }
    const variables =
        ((await appDataSource
            .getRep
            .f })) a ?? []

    // override variables defined in overrideConfig
    // nodeData.inputs.vars is an Object, check each property and override the variable
     {
        f) {
             => v.name === p
             {
                // even if the variable was defined as runtime, we override it with static value
                foundVar.type = 'static'
                foundVar.value = nodeData.inputs.vars[propertyName]
            } else {
                // add it the variables, if not found locally in the db
                va
            }
        }
    }

    return variables
}

/**
 * Prepare sandbox variables
 * @param {IVariable[]} variables
 */
exp => {
    let vars = {}
     {
        f {
            let value = item.value

            // read from .env file
             {
                value = process.env[item.name] ?? ''
            }

            Object.defineProperty(vars, item.name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
            })
        }
    }
    return vars
}

let version: string
exp => P => {
     return { version }

    const checkPaths = [
        path.j,
        path.j,
        path.j,
        path.j,
        path.j
    ]
    f {
        try {
            
            
            version = parsedContent.version
            return { version }
        } catch {
            continue
        }
    }

    th
}

/**
 * Map Ext to InputField
 * @param {string} ext
 * @returns {string}
 */
exp => {
     {
        case '.txt':
            return 'txtFile'
        case '.pdf':
            return 'pdfFile'
        case '.json':
            return 'jsonFile'
        case '.csv':
        case '.xls':
        case '.xlsx':
            return 'csvFile'
        case '.jsonl':
            return 'jsonlinesFile'
        case '.docx':
        case '.doc':
            return 'docxFile'
        case '.yaml':
            return 'yamlFile'
        default:
            return 'txtFile'
    }
}

/**
 * Map MimeType to InputField
 * @param {string} mimeType
 * @returns {string}
 */
exp => {
     {
        case 'text/plain':
            return 'txtFile'
        case 'application/pdf':
            return 'pdfFile'
        case 'application/json':
            return 'jsonFile'
        case 'text/csv':
            return 'csvFile'
        case 'application/json-lines':
        case 'application/jsonl':
        case 'text/jsonl':
            return 'jsonlinesFile'
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        case 'application/msword': {
            return 'docxFile'
        }
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        case 'application/vnd.ms-excel': {
            return 'excelFile'
        }
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        case 'application/vnd.ms-powerpoint': {
            return 'powerpointFile'
        }
        case 'application/vnd.yaml':
        case 'application/x-yaml':
        case 'text/vnd.yaml':
        case 'text/x-yaml':
        case 'text/yaml':
            return 'yamlFile'
        default:
            return 'txtFile'
    }
}

/**
 * Map MimeType to Extension
 * @param {string} mimeType
 * @returns {string}
 */
exp => {
     {
        case 'text/plain':
            return 'txt'
        case 'text/html':
            return 'html'
        case 'text/css':
            return 'css'
        case 'text/javascript':
        case 'application/javascript':
            return 'js'
        case 'text/xml':
        case 'application/xml':
            return 'xml'
        case 'text/markdown':
        case 'text/x-markdown':
            return 'md'
        case 'application/pdf':
            return 'pdf'
        case 'application/json':
            return 'json'
        case 'text/csv':
            return 'csv'
        case 'application/json-lines':
        case 'application/jsonl':
        case 'text/jsonl':
            return 'jsonl'
        case 'application/msword':
            return 'doc'
        case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            return 'docx'
        case 'application/vnd.ms-excel':
            return 'xls'
        case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            return 'xlsx'
        case 'application/vnd.ms-powerpoint':
            return 'ppt'
        case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
            return 'pptx'
        default:
            return ''
    }
}

// 
exp: string => {
    .*?\)/g, '') : output
}

/**
 * Extract output from array
 * @param {any} output
 * @returns {string}
 */
exp: string => {
    ) {
         => .j
    } el {
         return output.text
        el
    }
    return output
}

/**
 * Loop through the object and replace the key with the value
 * @param {any} obj
 * @param {any} sourceObj
 * @returns {any}
 */
exp: any => {
     {
         ? [] : {}
        f {
            const value = obj[key]
            
        }
        return resolved
    } el) {
        
    } else {
        return obj
    }
}

exp => {
     {
        return docs
    } else {
        let finaltext = ''
        f {
            finaltext += `${doc.pageContent}\n`
        }
        
    }
}

exp: object => {
     return {}

     {
        
    }

    return metadata
}

export const handleDocumentLoaderMetadata = (
    docs: Document[],
    _omitMetadataKeys: string,
    metadata: object | string = {},
    sourceIdKey?: string
) => {
    let omitMetadataKeys: string[] = []
     {
        .map((key) => key.t)
    }

    meta

     => ({
        ...doc,
        metadata:
            _omitMetadataKeys === '*'
                ? metadata
                : omit(
                      {
                          ...metadata,
                          ...doc.metadata,
                          ...(
                      },
                      omitMetadataKeys
                  )
    }))
}

exp => {
    let docs: Document[] = []

     {
        let 
        
        docs = splittedDocs
    } else {
        
    }

    return docs
}

/**
 * Normalize special characters in key to be used in vector store
 * @param str - Key to normalize
 * @returns Normalized key
 */
exp => {
    
}

/**
 * recursively normalize object keys
 * @param data - Object to normalize
 * @returns Normalized object
 */
exp: any => {
    ) {
        
    }

     {
        . => {
            
            a
            return acc
        }, {} a
    }
    return data
}

/**
 * Check if OAuth2 token is expired and refresh if needed
 * @param {string} credentialId
 * @param {ICommonObject} credentialData
 * @param {ICommonObject} options
 * @pa
 * @returns {Promise<ICommonObject>}
 */
export const refreshOAuth2Token = async (
    credentialId: string,
    credentialData: ICommonObject,
    options: ICommonObject,
    bufferTimeMs: number = 5 * 60 * 1000
): Promise<ICommonObject> => {
    // Check if token is expired and refresh if needed
     {
        
        

         > exp - buffe {
             {
                th
            }

            try {
                // Import fetch dynamically to avoid issues
                ).default

                // Call the refresh API endpoint
                const refreshResponse = await fetch(
                    `${options.baseURL || 'http://localhost:3000'}/api/v1/oauth2-credential/refresh/${credentialId}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )

                 {
                    
                    th
                }

                awa

                // Get the updated credential data
                

                return updatedCredentialData
            }  {
                
                throw new Error(
                    `Failed to refresh access token: ${
                        error instanceof Error ? error.message : 'Unknown error'
                    }. Please re-authorize the credential.`
                )
            }
        }
    }

    // Token is not expired, return original data
    return credentialData
}

exp => {
    
    let 
    // After conversion, replace any escaped underscores and square brackets with regular unescaped ones
    /g, '$1')
    return cleanedInput
}

// Helper function to convert require statements to ESM imports
: string | null => {
    // Remove leading/trailing whitespace and get the indentation
    /)?.[1] || ''
    

    // Mat
    \\/)
     {
        const [, , varName, moduleName] = defaultRequireMatch
        return `${indent}import ${varName} from '${moduleName}';`
    }

    // Mat
    \\/)
     {
        const [, , destructuredVars, moduleName] = destructureMatch
        } } from '${moduleName}';`
    }

    // Mat.property
    \\\.(\w+)/)
     {
        const [, , varName, moduleName, property] = propertyMatch
        return `${indent}import { ${property} as ${varName} } from '${moduleName}';`
    }

    // If no pattern matches, return null to skip conversion
    return null
}

/**
 * Execute JavaScript code using either Sandbox or NodeVM
 * @param {string} code - The JavaScript code to execute
 * @param {ICommonObject} sandbox - The sandbox object with variables
 * @param {ICommonObject} options - Execution options
 * @returns {Promise<any>} - The execution result
 */
export const executeJavaScriptCode = async (
    code: string,
    sandbox: ICommonObject,
    options: {
        timeout?: number
        useSandbox?: boolean
        libraries?: string[]
         => void
        nodeVMOptions?: ICommonObject
    } = {}
): Promise<any> => {
    const { timeout = 10000, useSandbox = true, streamOutput, libraries = [], nodeVMOptions = {} } = options
    const shouldUseSandbox = useSandbox && process.env.E2B_APIKEY

     {
        try {
            const variableDeclarations = []

             {
                va};`)
            }

             {
                va};`)
            }

            // Add other sandbox variables
            f) {
                if (
                    key !== '$vars' &&
                    key !== '$flow' &&
                    key !== 'util' &&
                    key !== 'Symbol' &&
                    key !== 'child_process' &&
                    key !== 'fs' &&
                    key !== 'process'
                ) {
                    va};`)
                }
            }

            // Handle import statements properly - they must be at the top
            
            const importLines = []
            const otherLines = []

            f {
                

                // Skip node-fetch imports since Node.js has built-in fetch
                 || t || t) {
                    continue // Skip this line entirely
                }

                // Check for existing ES6 imports and exports
                 || t) {
                    
                }
                // Check for CommonJS require statements and convert them to ESM imports
                el\) {
                    
                     {
                        
                    }
                } else {
                    
                }
            }

            

            // Install libraries
            f {
                awa
            }

            // Separate imports from the rest of the code for proper ES6 module structure
            const codeWithImports = [
                ...importLines,
                `m {`,
                ...variableDeclarations,
                ...otherLines,
                `}()`
            ].j

            

            let output = ''

             output = execution.text
             

             {
                th
            }

             {
                th)
            }

            // Stream output if streaming function provided
             {
                
            }

            // Clean up sandbox
            

            return output
        }  {
            th
        }
    } else {
        const builtinDeps = process.env.TOOL_FUNCTION_BUILTIN_DEP
            ? )
            : defaultAllowBuiltInDep
         : []
        

        const defaultNodeVMOptions: any = {
            console: 'inherit',
            sandbox,
            require: {
                external: { modules: deps },
                builtin: builtinDeps
            },
            eval: false,
            wasm: false,
            timeout
        }

        // Merge with custom nodeVMOptions if provided
        const finalNodeVMOptions = { ...defaultNodeVMOptions, ...nodeVMOptions }

        

        try {
             {${`, __

            let finalOutput = response
             {
                f
            }

            // Stream output if streaming function provided
             {
                
            }

            return finalOutput
        }  {
            th
        }
    }
}

/**
 * Create a standard sandbox object for code execution
 * @param {string} input - The input string
 * @param {ICommonObject} variables - Variables from getVars
 * @param {ICommonObject} flow - Flow object with chatflowId, sessionId, etc.
 * @param {ICommonObject} additionalSandbox - Additional sandbox variables
 * @returns {ICommonObject} - The sandbox object
 */
export const createCodeExecutionSandbox = (
    input: string,
    variables: IVariable[],
    flow: ICommonObject,
    additionalSandbox: ICommonObject = {}
): ICommonObject => {
    const sandbox: ICommonObject = {
        $input: input,
        util: undefined,
        Symbol: undefined,
        child_process: undefined,
        fs: undefined,
        process: undefined,
        ...additionalSandbox
    }

    
    sandbox['$flow'] = flow

    return sandbox
}
