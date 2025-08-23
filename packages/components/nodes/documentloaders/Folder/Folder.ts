import { omit } from 'lodash'
import { INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { JSONLinesLoader, JSONLoader } from 'langchain/document_loaders/fs/json'
import { CSVLoader } from '@langchain/community/document_loaders/fs/csv'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { DocxLoader } from '@langchain/community/document_loaders/fs/docx'
import { LoadOfSheet } from '../MicrosoftExcel/ExcelLoader'
import { PowerpointLoader } from '../MicrosoftPowerpoint/PowerpointLoader'
import { handleEscapeCharacters } from '../../../src/utils'

class Folder_DocumentLoaders implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Folder with Files'
        this.name = 'folderFiles'
        this.version = 4.0
        this.type = 'Document'
        this.icon = 'folder.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from folder with multiple files`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Folder Path',
                name: 'folderPath',
                type: 'string',
                placeholder: ''
            },
            {
                label: 'Recursive',
                name: 'recursive',
                type: 'boolean',
                additionalParams: false
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Pdf Usage',
                name: 'pdfUsage',
                type: 'options',
                description: 'Only when loading PDF files',
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
                label: 'JSONL Pointer Extraction',
                name: 'pointerName',
                type: 'string',
                description: 'Only when loading JSONL files',
                placeholder: '<pointerName>',
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

    a: Promise<any> {
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const folderPath = nodeData.inputs?.folderPath as string
        const metadata = nodeData.inputs?.metadata
        const recursive = nodeData.inputs?.recursive as boolean
        const pdfUsage = nodeData.inputs?.pdfUsage
        const pointerName = nodeData.inputs?.pointerName as string
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        const loader = new DirectoryLoader(
            folderPath,
            {
                '.j => new JSONL,
                '.j => new JSONL),
                '.txt': (path) => new TextL,
                '. => new CSVL,
                '.xl => new L,
                '.xl => new L,
                '.xl => new L,
                '.xl => new L,
                '. => new ,
                '. => new ,
                '.ppt': (path) => new P,
                '.pptx': (path) => new P,
                '.p =>
                    pdfUsage === 'perFile'
                        ? // @ts-ignore
                          new P =>  })
                        : // @ts-ignore
                          new P =>  }),
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
            recursive
        )
        let docs = []

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

module.exports = { nodeClass: Folder_DocumentLoaders }
