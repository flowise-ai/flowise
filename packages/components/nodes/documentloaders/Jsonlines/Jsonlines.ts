import { omit } from 'lodash'
import { ICommonObject, IDocument, INode, INodeData, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import jsonpointer from 'jsonpointer'
import { getFileFromStorage, handleEscapeCharacters, INodeOutputsValue } from '../../../src'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { Document } from '@langchain/core/documents'
import type { readFile as ReadFileT } from 'node:fs/promises'

const howToUseCode = `
You can add metadata dynamically from the document:

For example, if the document is:
\`\`\`jsonl
{
    "source": "www.example.com", "content": "Hello World!"
}
{
    "source": "www.example2.com", "content": "Hi World!"
}
\`\`\`

You can have the "source" value as metadata by returning the following:
\`\`\`json
{
    "source": "/source"
}
\`\`\``

class Jsonlines_DocumentLoaders implements INode {
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
        this.label = 'Json Lines File'
        this.name = 'jsonlinesFile'
        this.version = 3.0
        this.type = 'Document'
        this.icon = 'jsonlines.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from JSON Lines files`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Jsonlines File',
                name: 'jsonlinesFile',
                type: 'file',
                fileType: '.jsonl'
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Pointer Extraction',
                name: 'pointerName',
                type: 'string',
                placeholder: 'key',
                description: 'Ex: { "key": "value" }, Pointer Extraction = "key", "value" will be extracted as pageContent of the chunk',
                optional: false
            },
            {
                label: 'Additional Metadata',
                name: 'metadata',
                type: 'json',
                description:
                    'Additional metadata to be added to the extracted documents. You can add metadata dynamically from the document. Ex: { "key": "value", "source": "www.example.com" }. Metadata: { "page": "/source" } will extract the value of the key "source" from the document and add it to the metadata with the key "page"',
                hint: {
                    label: 'How to use',
                    value: howToUseCode
                },
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
        const jsonLinesFileBase64 = nodeData.inputs?.jsonlinesFile as string
        const pointerName = nodeData.inputs?.pointerName as string
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        let docs: IDocument[] = []
        let files: string[] = []

        let p
        //FILE-STORAGE::["CONTRIBUTING.md","LICENSE.md","README.md"]
        ) {
            
             && f) {
                f
            } else {
                files = [fileName]
            }
            const orgId = options.orgId
            const chatflowid = options.chatflowid

            f {
                 continue
                
                
                

                 {
                    let 
                    
                    
                } else {
                    ))
                }
            }
        } else {
             && j) {
                f
            } else {
                files = [jsonLinesFileBase64]
            }

            f {
                 continue
                
                
                 || '', 'ba
                
                

                 {
                    let 
                    
                    
                } else {
                    ))
                }
            }
        }

         {
            let pa
            pa
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

: Record<string, any> => {
    const result: Record<string, any> = {}

    f {
        const value = obj[key]
        ) {
            continue
        }
        result[key] = value
    }

    return result
}

class TextLoader extends BaseDocumentLoader {
     {
        
    }

    p: Promise<{ pageContent: string; metadata: ICommonObject }[]> {
        return [{ pageContent: raw, metadata: {} }]
    }

    publ: Promise<Document[]> {
        let text: string
        let metadata: Record<string, string>
         {
            
            text = awa
            metadata = { source: this.filePathOrBlob }
        } else {
            text = awa
            metadata = { source: 'blob', blobType: this.filePathOrBlob.type }
        }
        
        pa => {
            const { pageContent } = parsedData
             {
                th
            }
        })
         => {
            const { pageContent, metadata: additionalMetadata } = parsedData
            return new Document({
                pageContent,
                metadata:
                    parsed.length === 1
                        ? { ...metadata, ...additionalMetadata }
                        : {
                              ...metadata,
                              line: i + 1,
                              ...additionalMetadata
                          }
            })
        })
    }

    : Promise<{
        readFile: typeof ReadFileT
    }> {
        try {
            
            return { readFile }
        }  {
            
            th
        }
    }
}

class JSONLinesLoader extends TextLoader {
    metadata?: ICommonObject
    additionalMetadata: ICommonObject[] = []

     {
        
         {
            th
        }
    }

    a: Promise<ICommonObject[]> {
        return this.additionalMetadata
    }

    p: Promise<{ pageContent: string; metadata: ICommonObject }[]> {
        
        const jsons = lines
            .map((l => l)
            .f
            .map((l => JSON.pa)
        
         {
            .f => type)
            let newJsons = []
            f {
                let metadata = {}
                f {
                     {
                        .f => th
                         {
                            metadata = {
                                ...metadata,
                                
                            }
                        }
                    }
                }
                newJ, meta
            }
            return newJsons
        }
         => {
            , metadata: {} }
        })
    }
}

module.exports = { nodeClass: Jsonlines_DocumentLoaders }
