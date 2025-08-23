import { omit } from 'lodash'
import { ICommonObject, IDocument, INode, INodeData, INodeParams, INodeOptionsValue } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import {
    convertMultiOptionsToStringArray,
    getCredentialData,
    getCredentialParam,
    handleEscapeCharacters,
    INodeOutputsValue,
    refreshOAuth2Token
} from '../../../src'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { DocxLoader } from '@langchain/community/document_loaders/fs/docx'
import { CSVLoader } from '@langchain/community/document_loaders/fs/csv'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import { LoadOfSheet } from '../MicrosoftExcel/ExcelLoader'
import { PowerpointLoader } from '../MicrosoftPowerpoint/PowerpointLoader'

// Helper function to get human-readable MIME type labels
: string | undefined => {
    const mimeTypeLabels: { [key: string]: string } = {
        'application/vnd.google-apps.document': 'Google Doc',
        'application/vnd.google-apps.spreadsheet': 'Google Sheet',
        'application/vnd.google-apps.presentation': 'Google Slides',
        'application/pdf': 'PDF',
        'text/plain': 'Text File',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Doc',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PowerPoint',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel File'
    }
    return mimeTypeLabels[mimeType] || undefined
}

class GoogleDrive_DocumentLoaders implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Google Drive'
        this.name = 'googleDrive'
        this.version = 1.0
        this.type = 'Document'
        this.icon = 'google-drive.svg'
        this.category = 'Document Loaders'
        this.description = `Load documents from Google Drive files`
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Google Drive OAuth2 Credential',
            credentialNames: ['googleDriveOAuth2']
        }
        this.inputs = [
            {
                label: 'Select Files',
                name: 'selectedFiles',
                type: 'asyncMultiOptions',
                loadMethod: 'listFiles',
                description: 'Select files from your Google Drive',
                refresh: true,
                optional: true
            },
            {
                label: 'Folder ID',
                name: 'folderId',
                type: 'string',
                ',
                placeholder: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
                optional: true
            },
            {
                label: 'File Types',
                name: 'fileTypes',
                type: 'multiOptions',
                description: 'Types of files to load',
                options: [
                    {
                        label: 'Google Docs',
                        name: 'application/vnd.google-apps.document'
                    },
                    {
                        label: 'Google Sheets',
                        name: 'application/vnd.google-apps.spreadsheet'
                    },
                    {
                        label: 'Google Slides',
                        name: 'application/vnd.google-apps.presentation'
                    },
                    {
                        label: 'PDF Files',
                        name: 'application/pdf'
                    },
                    {
                        label: 'Text Files',
                        name: 'text/plain'
                    },
                    {
                        label: 'Word Documents',
                        name: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    },
                    {
                        label: 'PowerPoint',
                        name: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                    },
                    {
                        label: 'Excel Files',
                        name: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    }
                ],
                default: [
                    'application/vnd.google-apps.document',
                    'application/vnd.google-apps.spreadsheet',
                    'application/vnd.google-apps.presentation',
                    'text/plain',
                    'application/pdf',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                ],
                optional: true
            },
            {
                label: 'Include Subfolders',
                name: 'includeSubfolders',
                type: 'boolean',
                description: 'Whether to include files from subfolders when loading from a folder',
                default: false,
                optional: true
            },
            {
                label: 'Include Shared Drives',
                name: 'includeSharedDrives',
                type: 'boolean',
                 that you have access to',
                default: false,
                optional: true
            },
            {
                label: 'Max Files',
                name: 'maxFiles',
                type: 'number',
                ',
                default: 50,
                optional: true
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
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

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const returnData: INodeOptionsValue[] = []

            try {
                let 
                
                

                 {
                    return returnData
                }

                // Get file types from input to filter
                
                const includeSharedDrives = nodeData.inputs?.includeSharedDrives as boolean
                 || 100

                let query = 'trashed = false'

                // Add file type filter if specified
                 {
                     => `m.j
                    que`
                }

                
                u
                u.t)
                u')
                u

                // Add shared drives support if requested
                 {
                    u
                    u
                }

                , {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                })

                 {
                    
                    return returnData
                }

                

                f {
                    
                     {
                        continue
                    }

                    // Add drive context to description
                    ' : ' (My '

                    const obj: INodeOptionsValue = {
                        name: file.id,
                        label: file.name,
                        .t}`
                    }
                    
                }
            }  {
                
            }

            return returnData
        }
    }

    a: Promise<any> {
        const selectedFiles = nodeData.inputs?.selectedFiles as string
        const folderId = nodeData.inputs?.folderId as string
        const fileTypes = nodeData.inputs?.fileTypes as string[]
        const includeSubfolders = nodeData.inputs?.includeSubfolders as boolean
        const includeSharedDrives = nodeData.inputs?.includeSharedDrives as boolean
         || 50
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

         {
            th
        }

        let 
        
        

         {
            th
        }

        let docs: IDocument[] = []

        try {
            let filesToProcess: any[] = []

             {
                // L
                let ids: string[] = []
                 && ) {
                    
                } el {
                    ids = [selectedFiles]
                } el) {
                    ids = selectedFiles
                }
                f {
                    
                    ) {
                        f
                    }
                }
            } el {
                // Load files from folder
                filesToProcess = await this.getFilesFromFolder(
                    folderId,
                    accessToken,
                    fileTypes,
                    includeSubfolders,
                    includeSharedDrives,
                    maxFiles
                )
            }

            // Process each file
            f {
                try {
                    
                     {
                        
                    }
                }  {
                    
                }
            }

            // Apply text splitter if provided
             {
                
            }

            // Apply metadata transformations
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
        }  {
            th
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

    p: Promise<any> {
        }`)
        u

        // Add shared drives support if requested
         {
            u
        }

        , {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })

         {
            th
        }

        

        // Add drive context to description
        ' : ' (My '

        return {
            ...fileInfo,
            driveContext
        }
    }

    private async getFilesFromFolder(
        folderId: string,
        accessToken: string,
        fileTypes: string[] | undefined,
        includeSubfolders: boolean,
        includeSharedDrives: boolean,
        maxFiles: number
    ): Promise<any[]> {
        const files: any[] = []
        let nextPageToken: string | undefined

        do {
            let query = `'${folderId}' in parents and trashed = false`

            // Add file type filter if specified
             {
                 => `m.j
                que`
            }

            
            u
            u.t)
            url.searchParams.append(
                'fields',
                'nextPageT'
            )

            // Add shared drives support if requested
             {
                u
                u
            }

             {
                u
            }

            , {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })

             {
                th
            }

            

            // Add drive context to each file
             => ({
                ...file,
                ' : ' (My '
            }))

            f
            nextPageToken = data.nextPageToken

            // If includeSubfolders is true, also get files from subfolders
             {
                f {
                     {
                        const subfolderFiles = await this.getFilesFromFolder(
                            file.id,
                            accessToken,
                            fileTypes,
                            includeSubfolders,
                            includeSharedDrives,
                            maxFiles - files.length
                        )
                        f
                    }
                }
            }
        } wh

        
    }

    p: boolean {
         {
            return true
        }
        
    }

    p: Promise<IDocument[]> {
        let content = ''

        try {
            // Handle different file types
            ) {
                // Download regular text files
                

                // Create document with metadata
                return [
                    {
                        pageContent: content,
                        metadata: {
                            source: fileInfo.webViewLink || `https://drive.google.com/file/d/${fileInfo.id}/view`,
                            fileId: fileInfo.id,
                            fileName: fileInfo.name,
                            mimeType: fileInfo.mimeType,
                             : undefined,
                            createdTime: fileInfo.createdTime,
                            modifiedTime: fileInfo.modifiedTime,
                            parents: fileInfo.parents,
                            driveId: fileInfo.driveId,
                            ' : ' (My ')
                        }
                    }
                ]
            } el || th) {
                // Process binary files and Google Workspace files using loaders
                
            } else {
                
                return []
            }
        }  {
            
            return []
        }
    }

    p: boolean {
        const supportedBinaryTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
            'text/csv'
        ]
        
    }

    p: Promise<IDocument[]> {
        let tempFilePath: string | null = null

        try {
            let buffer: Buffer
            let processedMimeType: string
            let processedFileName: string

            ) {
                // Handle Google Workspace files by exporting to appropriate format
                
                buffer = exportResult.buffer
                processedMimeType = exportResult.mimeType
                processedFileName = exportResult.fileName
            } else {
                // Handle regular binary files
                buffe
                processedMimeType = fileInfo.mimeType
                processedFileName = fileInfo.name
            }

            // Download file to temporary location
            tempF

            let docs: IDocument[] = []
            
             {
                case 'application/pdf': {
                    const pdfLoader = new PDFLoader(tempFilePath, {
                        // @ts-ignore
                        p => 
                    })
                    
                    break
                }

                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                case 'application/msword': {
                    
                    
                    break
                }

                case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                case 'application/vnd.ms-excel': {
                    
                    
                    break
                }
                case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                case 'application/vnd.ms-powerpoint': {
                    
                    
                    break
                }
                case 'text/csv': {
                    
                    
                    break
                }

                default:
                    th
            }

            // Add Google Drive metadata to each document
             {
                const googleDriveMetadata = {
                    source: fileInfo.webViewLink || `https://drive.google.com/file/d/${fileInfo.id}/view`,
                    fileId: fileInfo.id,
                    fileName: fileInfo.name,
                    mimeType: fileInfo.mimeType,
                     : undefined,
                    createdTime: fileInfo.createdTime,
                    modifiedTime: fileInfo.modifiedTime,
                    parents: fileInfo.parents,
                    totalPages: docs.length // Total number of pages/sheets in the file
                }

                 => ({
                    ...doc,
                    metadata: {
                        ...
                        ...googleDriveMetadata, // Add Google Drive metadata
                        pageIndex: index, // Add page/sheet index
                        driveId: fileInfo.driveId,
                        ' : ' (My ')
                    }
                }))
            }

            return []
        }  {
            th
        } finally {
            // Clean up temporary file
            ) {
                try {
                    f
                }  {
                    
                }
            }
        }
    }

    p: Promise<string> {
        // Get appropriate file extension
        let exten
         {
            const extensionMap: { [key: string]: string } = {
                'application/pdf': '.pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
                'application/msword': '.doc',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
                'application/vnd.ms-excel': '.xls',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
                'application/vnd.ms-powerpoint': '.ppt',
                'text/csv': '.csv'
            }
            extension = extensionMap[mimeType] || '.tmp'
        }

        // Create temporary file
        
        }_${Math..t.}${extension}`
        

        f
        return tempFilePath
    }

    p: Promise<Buffer> {
        }?alt=media`

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

         {
            th
        }

        
        
    }

    p: Promise<string> {
        }?alt=media`

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

         {
            th
        }

        // Only  for text-based files
         || ''
         &&  && ) {
            th
        }

        
    }

    p: boolean {
        const googleWorkspaceMimeTypes = [
            'application/vnd.google-apps.document',
            'application/vnd.google-apps.spreadsheet',
            'application/vnd.google-apps.presentation',
            'application/vnd.google-apps.drawing'
        ]
        
    }

    p: boolean {
        const textBasedMimeTypes = [
            'text/plain',
            'text/html',
            'text/css',
            'text/javascript',
            'text/csv',
            'text/xml',
            'application/json',
            'application/xml',
            'text/markdown',
            'text/x-markdown'
        ]
        
    }

    private async exportGoogleWorkspaceFileAsBuffer(
        fileId: string,
        mimeType: string,
        accessToken: string
    ): Promise<{ buffer: Buffer; mimeType: string; fileName: string }> {
        // Automatic mapping of Google Workspace MIME types to export formats
        let exportMimeType: string
        let fileExtension: string

         {
            case 'application/vnd.google-apps.document':
                exportMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                fileExtension = '.docx'
                break
            case 'application/vnd.google-apps.spreadsheet':
                exportMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                fileExtension = '.xlsx'
                break
            case 'application/vnd.google-apps.presentation':
                exportMimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                fileExtension = '.pptx'
                break
            case 'application/vnd.google-apps.drawing':
                exportMimeType = 'application/pdf'
                fileExtension = '.pdf'
                break
            default:
                // Fallback to DOCX for any other Google Workspace file
                exportMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                fileExtension = '.docx'
                break
        }

        }/export?mimeType=${encodeURIComponent(
            exportMimeType
        )}`

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

         {
            th
        }

        
        

        return {
            buffer,
            mimeType: exportMimeType,
            fileName: `exported_file${fileExtension}`
        }
    }
}

module.exports = { nodeClass: GoogleDrive_DocumentLoaders }
