import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import {
    getCredentialData,
    getCredentialParam,
    handleDocumentLoaderDocuments,
    handleDocumentLoaderMetadata,
    handleDocumentLoaderOutput
} from '../../../src/utils'
import { S3Client, GetObjectCommand, S3ClientConfig, ListObjectsV2Command, ListObjectsV2Output } from '@aws-sdk/client-s3'
import { getRegions, MODEL_TYPE } from '../../../src/modelLoader'
import { Readable } from 'node:stream'
import * as fsDefault from 'node:fs'
import * as path from 'node:path'
import * as os from 'node:os'

import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { JSONLoader } from 'langchain/document_loaders/fs/json'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { DocxLoader } from '@langchain/community/document_loaders/fs/docx'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { TextSplitter } from 'langchain/text_splitter'
import { CSVLoader } from '../Csv/CsvLoader'
import { LoadOfSheet } from '../MicrosoftExcel/ExcelLoader'
import { PowerpointLoader } from '../MicrosoftPowerpoint/PowerpointLoader'
class S3_DocumentLoaders implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs?: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'S3 Directory'
        this.name = 's3Directory'
        this.version = 4.0
        this.type = 'Document'
        this.icon = 's3.svg'
        this.category = 'Document Loaders'
        this.description = 'Load Data from S3 Buckets'
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['awsApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Bucket',
                name: 'bucketName',
                type: 'string'
            },
            {
                label: 'Region',
                name: 'region',
                type: 'asyncOptions',
                loadMethod: 'listRegions',
                default: 'us-east-1'
            },
            {
                label: 'Server URL',
                name: 'serverUrl',
                description:
                    'The fully qual.',
                type: 'string',
                optional: true
            },
            {
                label: 'Prefix',
                name: 'prefix',
                type: 'string',
                description: 'Limits the response to keys that begin with the specified prefix',
                placeholder: 'TestFolder/Something',
                optional: true
            },
            {
                label: 'Pdf Usage',
                name: 'pdfUsage',
                type: 'options',
                options: [
                    {
                        label: 'One document per page',
                        name: 'perPage'
                    },
                    {
                        label: 'One document per file',
                        name: 'perFile'
                    }
                ],
                default: 'perPage',
                optional: true,
                additionalParams: true
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

    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const bucketName = nodeData.inputs?.bucketName as string
        const prefix = nodeData.inputs?.prefix as string
        const region = nodeData.inputs?.region as string
        const serverUrl = nodeData.inputs?.serverUrl as string
        const pdfUsage = nodeData.inputs?.pdfUsage
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let credentials: S3ClientConfig['credentials'] | undefined

         {
            
            
            

             {
                credentials = {
                    accessKeyId,
                    secretAccessKey
                }
            }
        }

        let s3Config: S3ClientConfig = {
            region: region,
            credentials: credentials
        }

         {
            s3Config = {
                region: region,
                credentials: credentials,
                endpoint: serverUrl,
                forcePathStyle: true
            }
        }

        , ')

        try {
            

            const listObjectsOutput: ListObjectsV2Output = await s3Client.send(
                new ListObjectsV2Command({
                    Bucket: bucketName,
                    Prefix: prefix
                })
            )

            .f => .map(( => 

            await Promise.all(
                key => {
                    
                    try {
                        const response = await s3Client.send(
                            new GetObjectCommand({
                                Bucket: bucketName,
                                Key: key
                            })
                        )

                         => {
                            const chunks: Buffer[] = []

                             {
                                 => )
                                 => ))
                                
                            } else {
                                )
                            }
                        })

                        // create the directory if it doesnt already exist
                        f, { 

                        // write the file to the directory
                        f
                    }  {
                        th
                    }
                })
            )

            const loader = new DirectoryLoader(
                tempDir,
                {
                    '.j => new JSONL,
                    '.txt': (path) => new TextL,
                    '. => new CSVL,
                    '.xl => new L,
                    '.xl => new L,
                    '.xl => new L,
                    '.xl => new L,
                    '. => new ,
                    '.ppt': (path) => new P,
                    '.pptx': (path) => new P,
                    '.p =>
                        new PDFLoader(path, {
                            splitPages: pdfUsage !== 'perFile',
                            // @ts-ignore
                            p => 
                        }),
                    '.a => new TextL,
                    '.a => new TextL,
                    '. => new TextL, // C++
                    '. => new TextL,
                    '. => new TextL,
                    '. => new TextL,
                    '.g => new TextL, // Go
                    '.h': (path) => new TextL, // C++ Header files
                    '.kt': (path) => new TextL, // Kotlin
                    '.java': (path) => new TextL, // Java
                    '.j => new TextL, // JavaScript
                    '.le => new TextL, // Less files
                    '.t => new TextL, // TypeScript
                    '.php': (path) => new TextL, // PHP
                    '.p => new TextL, // Protocol Buffers
                    '.pyth => new TextL, // Python
                    '.py': (path) => new TextL, // Python
                    '. => new TextL, // reStructuredText
                    '. => new TextL, // Ruby
                    '. => new TextL, // Ruby
                    '. => new TextL, // Rust
                    '. => new TextL, // Scala
                    '. => new TextL, // Scala
                    '. => new TextL, // Sass
                    '. => new TextL, // Solidity
                    '. => new TextL, //SQL
                    '. => new TextL, // Swift
                    '.ma => new TextL, // Markdown
                    '.m => new TextL, // Markdown
                    '.tex': (path) => new TextL, // LaTeX
                    '.ltx': (path) => new TextL, // LaTeX
                    '.html': (path) => new TextL, // HTML
                    '.vb': (path) => new TextL, // Visual Basic
                    '.xml': (path) => new TextL // XML
                },
                true
            )

            let 

            

            
        }  {
            th
        } finally {
            // remove the temp directory before returning docs
            f
        }
    }
}
module.exports = { nodeClass: S3_DocumentLoaders }
