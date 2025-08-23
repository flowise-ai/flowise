import { omit } from 'lodash'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { JSONLinesLoader, JSONLoader } from 'langchain/document_loaders/fs/json'
import { CSVLoader } from '@langchain/community/document_loaders/fs/csv'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { DocxLoader } from '@langchain/community/document_loaders/fs/docx'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { LoadOfSheet } from '../MicrosoftExcel/ExcelLoader'
import { PowerpointLoader } from '../MicrosoftPowerpoint/PowerpointLoader'
import { Document } from '@langchain/core/documents'
import { getFileFromStorage } from '../../../src/storageUtils'
import { handleEscapeCharacters, mapMimeTypeToExt } from '../../../src/utils'

class File_DocumentLoaders implements INode {
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
        this.label = 'File Loader'
        this.name = 'fileLoader'
        this.version = 2.0
        this.type = 'Document'
        this.icon = 'file.svg'
        this.category = 'Document Loaders'
        this.description = `A generic file loader that can load different file types`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'File',
                name: 'file',
                type: 'file',
                fileType: '*'
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Pdf Usage',
                name: 'usage',
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
                label: 'Use Legacy Build',
                name: 'legacyBuild',
                type: 'boolean',
                description: 'Use legacy build for PDF compatibility issues',
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
        const fileBase64 = nodeData.inputs?.file as string
        const metadata = nodeData.inputs?.metadata
        const pdfUsage = nodeData.inputs?.pdfUsage || nodeData.inputs?.usage
        const legacyBuild = nodeData.inputs?.legacyBuild as boolean
        const pointerName = nodeData.inputs?.pointerName as string
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        let files: string[] = []
        const fileBlobs: { blob: Blob; ext: string }[] = []
        const processRaw = options.processRaw

        //FILE-STORAGE::["CONTRIBUTING.md","LICENSE.md","README.md"]
         || fileBase64
        ) {
            
             && f) {
                f
            } else {
                files = [fileName]
            }
            const orgId = options.orgId
            const chatflowid = options.chatflowid

            // specific to createAttachment to get files from chatId
            const retrieveAttachmentChatId = options.retrieveAttachmentChatId
             {
                f {
                     continue
                    
                    
                    f.p || '' })
                }
            } else {
                f {
                     continue
                    
                    
                    f.p || '' })
                }
            }
        } else {
             && t) {
                f
            } else {
                files = [totalFiles]
            }

            f {
                 continue
                
                
                 || '', 'ba
                

                let extension = ''
                // eslint-disable-next-line no-useless-escape
                ;ba

                 {
                    // Fallback: check if there's a filename pattern at the end
                    $/)
                     {
                        const filename = filenameMatch[1]
                        .p || ''
                        fileBlobs.push({
                            blob,
                            ext: fileExt
                        })
                    } else {
                        fileBlobs.push({
                            blob,
                            ext: extension
                        })
                    }
                } else {
                    const mimeType = match[1]
                    fileBlobs.push({
                        blob,
                        ext: mapM
                    })
                }
            }
        }

        const loader = new MultiFileLoader(fileBlobs, {
            j => new JSONL,
            j => new JSONL),
            txt: (bl => new TextL,
            html: (bl => new TextL,
             => new TextL,
            j => new TextL,
            xml: (bl => new TextL,
            m => new TextL,
             => new CSVL,
            xl => new L,
            xl => new L,
            xl => new L,
            xl => new L,
             => new ,
             => new ,
            ppt: (bl => new P,
            pptx: (bl => new P,
            p =>
                pdfUsage === 'perFile'
                    ? // @ts-ignore
                      new PDFLoader(blob, {
                          splitPages: false,
                          p =>
                              // @ts-ignore
                              lega : 
                      })
                    : // @ts-ignore
                      new PDFLoader(blob, {
                          p =>
                              // @ts-ignore
                              lega : 
                      }),
            '': (bl => new TextL
        })
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

 => {
    const txtFileBase64 = nodeData.inputs?.txtFile as string
    const pdfFileBase64 = nodeData.inputs?.pdfFile as string
    const jsonFileBase64 = nodeData.inputs?.jsonFile as string
    const csvFileBase64 = nodeData.inputs?.csvFile as string
    const jsonlinesFileBase64 = nodeData.inputs?.jsonlinesFile as string
    const docxFileBase64 = nodeData.inputs?.docxFile as string
    const yamlFileBase64 = nodeData.inputs?.yamlFile as string
    const excelFileBase64 = nodeData.inputs?.excelFile as string
    const powerpointFileBase64 = nodeData.inputs?.powerpointFile as string

    : string[] => {
        
         && f) {
            
        }
        return [fileName]
    }

    // If exists, combine all file inputs into an array
    const files: string[] = []
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }
     {
        f)
    }

     {
         : ''
    }

    }` : ''
}

interface LoadersMapping {
     => BaseDocumentLoader
}

class MultiFileLoader extends BaseDocumentLoader {
     {
        

        .length === 0) {
            th
        }
    }

    publ: Promise<Document[]> {
        const documents: Document[] = []

        f {
            const loaderFactory = this.loaders[fileBlob.ext]
             {
                
                ))
            } else {
                
                try {
                    ))
                }  {
                    th
                }
            }
        }

        return documents
    }
}

module.exports = { nodeClass: File_DocumentLoaders }
