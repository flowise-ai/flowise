import { Document } from '@langchain/core/documents'
import axios, { AxiosRequestConfig } from 'axios'
import * as https from 'https'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { TextSplitter } from 'langchain/text_splitter'
import { omit } from 'lodash'
import { getFileFromStorage } from '../../../src'
import { ICommonObject, IDocument, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { handleEscapeCharacters } from '../../../src/utils'

class API_DocumentLoaders implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs?: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'API Loader'
        this.name = 'apiLoader'
        this.version = 2.1
        this.type = 'Document'
        this.icon = 'api.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from an API`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Method',
                name: 'method',
                type: 'options',
                options: [
                    {
                        label: 'GET',
                        name: 'GET'
                    },
                    {
                        label: 'POST',
                        name: 'POST'
                    }
                ]
            },
            {
                label: 'URL',
                name: 'url',
                type: 'string'
            },
            {
                label: 'Headers',
                name: 'headers',
                type: 'json',
                additionalParams: true,
                optional: true
            },
            {
                label: 'SSL Certificate',
                description: 'Please upload a SSL certificate file in either .pem or .crt',
                name: 'caFile',
                type: 'file',
                fileType: '.pem, .crt',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Body',
                name: 'body',
                type: 'json',
                description:
                    'JSON body for the POST request. If not specified, agent will try to figure out itself from AIPlugin if provided',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Additional Metadata',
                name: 'metadata',
                type: 'json',
                description: 'Additional metadata to be added to the extracted documents',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Omit Metadata Keys',
                name: 'omitMetadataKeys',
                type: 'string',
                rows: 4,
                description:
                    'Each document loader comes with a default set of metadata keys that are extracted from the document. You can use this field to omit some of the default metadata keys. The value should be a list of keys, seperated by comma. Use * to omit all metadata keys execept the ones you specify in the Additional Metadata field',
                placeholder: 'key1, key2, key3.nestedKey1',
                optional: true,
                additionalParams: true
            }
        ]
        this.outputs = [
            {
                label: 'Document',
                name: 'document',
                description: 'Array of document objects containing metadata and pageContent',
                baseClasses: [...this.baseClasses, 'json']
            },
            {
                label: 'Text',
                name: 'text',
                description: 'Concatenated string from pageContent of documents',
                baseClasses: ['string', 'json']
            }
        ]
    }

    a: Promise<any> {
        const headers = nodeData.inputs?.headers as string
        const caFileBase64 = nodeData.inputs?.caFile as string
        const url = nodeData.inputs?.url as string
        const body = nodeData.inputs?.body as string
        const method = nodeData.inputs?.method as string
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        const apiLoaderParam: ApiLoaderParams = {
            url,
            method
        }

         {
            
            apiLoaderParam.headers = parsedHeaders
        }

        ) {
            let f
            f
            f
            const orgId = options.orgId
            const chatflowid = options.chatflowid
            
            ap
        } else {
            
            
             || '', 'ba
            ap
        }

         {
            
            apiLoaderParam.body = parsedBody
        }

        

        let docs: IDocument[] = []

         {
            
            
        } else {
            
        }

         {
            
             => ({
                ...doc,
                metadata:
                    _omitMetadataKeys === '*'
                        ? {
                              ...parsedMetadata
                          }
                        : omit(
                              {
                                  ...doc.metadata,
                                  ...parsedMetadata
                              },
                              omitMetadataKeys
                          )
            }))
        } else {
             => ({
                ...doc,
                metadata:
                    _omitMetadataKeys === '*'
                        ? {}
                        : omit(
                              {
                                  ...doc.metadata
                              },
                              omitMetadataKeys
                          )
            }))
        }

         {
            return docs
        } else {
            let finaltext = ''
            f {
                finaltext += `${doc.pageContent}\n`
            }
            
        }
    }
}

interface ApiLoaderParams {
    url: string
    method: string
    headers?: ICommonObject
    body?: ICommonObject
    ca?: string
}

class ApiLoader extends BaseDocumentLoader {
    public readonly url: string

    public readonly headers?: ICommonObject

    public readonly body?: ICommonObject

    public readonly method: string

    public readonly ca?: string

     {
        
        this.url = url
        this.headers = headers
        this.body = body
        this.method = method
        this.ca = ca
    }

    publ: Promise<IDocument[]> {
         {
            
        } else {
            
        }
    }

    p: Promise<IDocument[]> {
        try {
            const config: AxiosRequestConfig = {}
             {
                config.headers = headers
            }
             {
                config.httpsAgent = new https.Agent({
                    ca: ca
                })
            }
            
            
            const doc = new Document({
                pageContent: responseJsonString,
                metadata: {
                    url
                }
            })
            return [doc]
        }  {
            th
        }
    }

    p: Promise<IDocument[]> {
        try {
            const config: AxiosRequestConfig = {}
             {
                config.headers = headers
            }
             {
                config.httpsAgent = new https.Agent({
                    ca: ca
                })
            }
            
            
            const doc = new Document({
                pageContent: responseJsonString,
                metadata: {
                    url
                }
            })
            return [doc]
        }  {
            th
        }
    }
}

module.exports = {
    nodeClass: API_DocumentLoaders
}
