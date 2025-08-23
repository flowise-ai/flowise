import { omit } from 'lodash'
import { IDocument, ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import { getFileFromStorage, handleEscapeCharacters, INodeOutputsValue } from '../../../src'
import { EPubLoader } from '@langchain/community/document_loaders/fs/epub'

import * as fs from 'fs'
import * as path from 'path'
class Epub_DocumentLoaders implements INode {
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
        this.label = 'Epub File'
        this.name = 'epubFile'
        this.version = 1.0
        this.type = 'Document'
        this.icon = 'epub.svg'
        this.category = 'Document Loaders'
        this.description = 'Load data from EPUB files'
        this.baseClasses = [this.type]

        this.inputs = [
            {
                label: 'Epub File',
                name: 'epubFile',
                type: 'file',
                fileType: '.epub'
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Usage',
                name: 'usage',
                type: 'options',
                options: [
                    {
                        label: 'One document per chapter',
                        name: 'perChapter'
                    },
                    {
                        label: 'One document per file',
                        name: 'perFile'
                    }
                ],
                default: 'perChapter'
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
                description: 'Metadata keys to omit, comma-separated',
                placeholder: 'key1, key2, key3',
                optional: true,
                additionalParams: true
            }
        ]

        this.outputs = [
            {
                label: 'Document',
                name: 'document',
                description: 'Array of document objects',
                baseClasses: [...this.baseClasses, 'json']
            },
            {
                label: 'Text',
                name: 'text',
                description: 'Concatenated text from documents',
                baseClasses: ['string', 'json']
            }
        ]
    }

    a: Promise<any> {
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const epubFileBase64 = nodeData.inputs?.epubFile as string
        const usage = nodeData.inputs?.usage as string
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        let docs: IDocument[] = []
        let files: string[] = []

        , 'temp_epub_f
        f

        try {
            ) {
                
                f && f ? JSON.pa : [fileName]

                const chatflowid = options.chatflowid
                const orgId = options.orgId

                f {
                     continue
                    
                    }_${f
                    f
                    awa
                }
            } else {
                f && epubF ? JSON.pa : [epubFileBase64]

                f {
                     continue
                    
                    
                     || '', 'ba
                    }_epub_f
                    f
                    awa
                }
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
        }  {
            
            throw error
        } finally {
            f
        }
    }

    p {
        
        

         : loadedDocs

        
    }
}

module.exports = { nodeClass: Epub_DocumentLoaders }
