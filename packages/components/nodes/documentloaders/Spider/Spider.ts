import { omit } from 'lodash'
import { TextSplitter } from 'langchain/text_splitter'
import { Document, DocumentInterface } from '@langchain/core/documents'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { INode, INodeData, INodeParams, ICommonObject, INodeOutputsValue } from '../../../src/Interface'
import { getCredentialData, getCredentialParam, handleEscapeCharacters } from '../../../src/utils'
import SpiderApp from './SpiderApp'

interface SpiderLoaderParameters {
    url: string
    apiKey?: string
    mode?: 'crawl' | 'scrape'
    limit?: number
    additionalMetadata?: Record<string, unknown>
    params?: Record<string, unknown>
}

class SpiderLoader extends BaseDocumentLoader {
    private apiKey: string
    private url: string
    private mode: 'crawl' | 'scrape'
    private limit?: number
    private additionalMetadata?: Record<string, unknown>
    private params?: Record<string, unknown>

     {
        
        const { apiKey, url, mode = 'crawl', limit, additionalMetadata, params } = loaderParams
         {
            th
        }

        this.apiKey = apiKey
        this.url = url
        this.mode = mode
        th
        this.additionalMetadata = additionalMetadata
        this.params = params
    }

    publ: Promise<DocumentInterface[]> {
        
        let spiderDocs: any[]

         {
            
             {
                th
            }
            spiderDocs = [response.data]
        } el {
             {
                this.params.limit = this.limit
            }
            
             {
                th
            }
            spiderDocs = response.data
        } else {
            th
        }

        return spiderDocs.map(
            ( =>
                new Document({
                    pageContent: doc.content || '',
                    metadata: {
                        ...(th,
                        source: doc.url
                    }
                })
        )
    }
}

class Spider_DocumentLoaders implements INode {
    label: string
    name: string
    description: string
    type: string
    icon: string
    version: number
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]

     {
        this.label = 'Spider Document Loaders'
        this.name = 'spiderDocumentLoaders'
        this.version = 2.0
        this.type = 'Document'
        this.icon = 'spider.svg'
        this.category = 'Document Loaders'
        this.description = 'Scrape & Crawl the web with Spider'
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Mode',
                name: 'mode',
                type: 'options',
                options: [
                    {
                        label: 'Scrape',
                        name: 'scrape',
                        description: 'Scrape a single page'
                    },
                    {
                        label: 'Crawl',
                        name: 'crawl',
                        description: 'Crawl a website and extract pages within the same domain'
                    }
                ],
                default: 'scrape'
            },
            {
                label: 'Web Page URL',
                name: 'url',
                type: 'string',
                placeholder: 'https://spider.cloud'
            },
            {
                label: 'Limit',
                name: 'limit',
                type: 'number',
                default: 25
            },
            {
                label: 'Additional Metadata',
                name: 'additional_metadata',
                type: 'json',
                description: 'Additional metadata to be added to the extracted documents',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Additional Parameters',
                name: 'params',
                description:
                    'Find all the available parameters in the <a _target="blank" href="https://spider.cloud/docs/api">Spider API documentation</a>',
                additionalParams: true,
                placeholder: '{ "anti_bot": true }',
                type: 'json',
                optional: true
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
        this.credential = {
            label: 'Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['spiderApi']
        }
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
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const url = nodeData.inputs?.url as string
        const mode = nodeData.inputs?.mode as 'crawl' | 'scrape'
        const limit = nodeData.inputs?.limit as number
        let additionalMetadata = nodeData.inputs?.additional_metadata
        let params = nodeData.inputs?.params || {}
        
        
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

         {
            try {
                pa
            }  {
                
            }
        }

         {
             {
                try {
                    a
                }  {
                    
                }
            } el {
                
            }
        } else {
            additionalMetadata = {}
        }

        // Ensure return_format is set to markdown
        params.return_format = 'markdown'

        const input: SpiderLoaderParameters = {
            url,
            mode: mode as 'crawl' | 'scrape',
            apiKey: spiderApiKey,
            limit: limit as number,
            additionalMetadata: additionalMetadata as Record<string, unknown>,
            params: params as Record<string, unknown>
        }

        

        let docs = []

         {
            
        } else {
            
        }

         => ({
            ...doc,
            metadata:
                _omitMetadataKeys === '*'
                    ? additionalMetadata
                    : omit(
                          {
                              ...doc.metadata,
                              ...additionalMetadata
                          },
                          omitMetadataKeys
                      )
        }))

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

module.exports = { nodeClass: Spider_DocumentLoaders }
