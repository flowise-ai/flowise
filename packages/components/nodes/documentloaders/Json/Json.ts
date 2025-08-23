import { omit } from 'lodash'
import { ICommonObject, IDocument, INode, INodeData, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import { getFileFromStorage, handleEscapeCharacters, INodeOutputsValue } from '../../../src'
import { Document } from '@langchain/core/documents'
import jsonpointer from 'jsonpointer'
import type { readFile as ReadFileT } from 'node:fs/promises'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'

const howToUseCode = `
You can add metadata dynamically from the document:

For example, if the JSON document is:
\`\`\`json
[
    {
        "url": "https://www.google.com",
        "body": "This is body 1"
    },
    {
        "url": "https://www.yahoo.com",
        "body": "This is body 2"
    }
]

\`\`\`

You can have the "url" value as metadata by returning the following:
\`\`\`json
{
    "url": "/url"
}
\`\`\``

class Json_DocumentLoaders implements INode {
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
        this.label = 'Json File'
        this.name = 'jsonFile'
        this.version = 3.0
        this.type = 'Document'
        this.icon = 'json.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from JSON files`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Json File',
                name: 'jsonFile',
                type: 'file',
                fileType: '.json'
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'P',
                name: 'pointersName',
                type: 'string',
                description:
                    'Ex: { "key": "value" }, Pointer Extraction = "key", "value" will be extracted as pageContent of the chunk. Use comma to separate multiple pointers',
                placeholder: 'key1, key2',
                optional: true
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
        const jsonFileBase64 = nodeData.inputs?.jsonFile as string
        const pointersName = nodeData.inputs?.pointersName as string
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        let pointers: string[] = []
         {
            
            p.map((p => '/' + p)
        }

        let docs: IDocument[] = []
        let files: string[] = []

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
                files = [jsonFileBase64]
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

class JSONLoader extends TextLoader {
    public pointers: string[]
    private metadataMapping: Record<string, string>

     {
        
        th ? pointers : [pointers]
         {
            th
        }
    }

    p: Promise<Document[]> {
        )
        const documents: Document[] = []

        // Handle both single object and array of objects
         ? json : [json]

        f {
            
            

            f {
                documents.push({
                    pageContent,
                    metadata
                })
            }
        }

        return documents
    }

    /**
     * Extracts content based on specified pointers or all strings if no pointers
     */
    p: string[] {
         => j)

        )
    }

    /**
     * Extracts metadata based on the mapping configuration
     */
    p: Record<string, any> {
        let metadata: Record<string, any> = {}

         {
            .f => type)
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
        }

        return metadata
    }

    /**
     * If JSON pointers are specified, return all strings below any of them
     * and exclude all other nodes expect if they match a JSON pointer.
     * If no JSON pointer is specified then return all string in the object.
     */
    private extractArrayStringsFromObject(
        json: any,
        pointers: jsonpointer[],
        extractAllStrings = false,
        keyHasBeenFound = false
    ): string[] {
         {
            return []
        }

         {
            return [json]
        }

         && ext {
            let extractedString: string[] = []
            f {
                ext)
            }
            return extractedString
        }

         {
             {
                , p
            }

            
             as object[]
             => )

            let extractedStrings: string[] = []
             {
                f {
                    ext)
                }

                f {
                    ext)
                }
            } el {
                f {
                    ext)
                }
            }

            return extractedStrings
        }

        return []
    }

    p: object[] {
        const targetEntries = []
        f {
            
             {
                ta
            }
        }
        return targetEntries
    }
}

module.exports = { nodeClass: Json_DocumentLoaders }
