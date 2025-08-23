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

class GoogleSheets_DocumentLoaders implements INode {
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
        this.label = 'Google Sheets'
        this.name = 'googleSheets'
        this.version = 1.0
        this.type = 'Document'
        this.icon = 'google-sheets.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from Google Sheets as documents`
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Google Sheets OAuth2 Credential',
            credentialNames: ['googleSheetsOAuth2']
        }
        this.inputs = [
            {
                label: 'Select Spreadsheet',
                name: 'spreadsheetIds',
                type: 'asyncMultiOptions',
                loadMethod: 'listSpreadsheets',
                description: 'Select spreadsheet from your Google Drive',
                refresh: true
            },
            {
                label: 'Sheet Names',
                name: 'sheetNames',
                type: 'string',
                description: 'Comma-separated list of sheet names to load. If empty, loads all sheets.',
                placeholder: 'Sheet1, Sheet2',
                optional: true
            },
            {
                label: 'Range',
                name: 'range',
                type: 'string',
                . If empty, loads entire sheet.',
                placeholder: 'A1:E10',
                optional: true
            },
            {
                label: 'Include Headers',
                name: 'includeHeaders',
                type: 'boolean',
                description: 'Whether to include the first row as headers',
                default: true
            },
            {
                label: 'Value Render Option',
                name: 'valueRenderOption',
                type: 'options',
                description: 'How values should be represented in the output',
                options: [
                    {
                        label: 'Formatted Value',
                        name: 'FORMATTED_VALUE'
                    },
                    {
                        label: 'Unformatted Value',
                        name: 'UNFORMATTED_VALUE'
                    },
                    {
                        label: 'Formula',
                        name: 'FORMULA'
                    }
                ],
                default: 'FORMATTED_VALUE',
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

                // Query for Google Sheets files specifically
                const query = "mimeType='application/vnd.google-apps.spreadsheet' and trashed = false"

                
                u
                u
                u')
                u

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
        const _spreadsheetIds = nodeData.inputs?.spreadsheetIds as string
        const sheetNames = nodeData.inputs?.sheetNames as string
        const range = nodeData.inputs?.range as string
        const includeHeaders = nodeData.inputs?.includeHeaders as boolean
         || 'FORMATTED_VALUE'
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

        let 
        
        

         {
            th
        }

        let docs: IDocument[] = []

        try {
            // Process each spreadsheet
            f {
                try {
                    // Get spreadsheet metadata first
                    

                    // Determine which sheets to load
                    let sheetsToLoad: string[] = []
                     {
                        .map((name) => name.t)
                    } else {
                        // Get all sheet names from metadata
                         =>  || []
                    }

                    // Load data from each sheet
                    f {
                        const sheetRange = range ? `${sheetName}!${range}` : sheetName
                        

                         {
                            const sheetDoc = this.convertSheetToDocument(
                                sheetData,
                                sheetName,
                                spreadsheetId,
                                spreadsheetMetadata,
                                includeHeaders
                            )
                            
                        }
                    }
                }  {
                    
                    // Continue processing other spreadsheets even if one fails
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
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })

         {
            
            th
        }

        
    }

    p: Promise<any> {
        }`
        const params = new URLSearchParams({
            valueRenderOption,
            dateTimeRenderOption: 'FORMATTED_STRING',
            majorDimension: 'ROWS'
        })

        const response = await fetch(`${url}?${params}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })

         {
            
            th
        }

        
    }

    private convertSheetToDocument(
        sheetData: any,
        sheetName: string,
        spreadsheetId: string,
        spreadsheetMetadata: any,
        includeHeaders: boolean
    ): IDocument {
        const values = sheetData.values || []

         {
            return {
                pageContent: '',
                metadata: {
                    source: `Google Sheets: ${spreadsheetMetadata.properties?.title || 'Unknown'} - ${sheetName}`,
                    spreadsheetId,
                    sheetName,
                    spreadsheetTitle: spreadsheetMetadata.properties?.title,
                    range: sheetData.range,
                    rowCount: 0,
                    columnCount: 0
                }
            }
        }

        let headers: string[] = []
        let dataRows: string[][] = []

         {
            headers = values[0] || []
            
        } else {
            // Generate default headers like A, B, C, etc.
             => )
            hea => St)
            dataRows = values
        }

        // Convert to markdown table format
        let content = ''

         {
            // Create header row
             + ' |\n'
            // Create separator row
             => '---').j + ' |\n'

            // Add data rows
            f {
                const paddedRow = [...row]
                // Pad row to match header length
                wh {
                    pa
                }
                 + ' |\n'
            }
        }

        return {
            pageContent: content,
            metadata: {
                source: `Google Sheets: ${spreadsheetMetadata.properties?.title || 'Unknown'} - ${sheetName}`,
                spreadsheetId,
                sheetName,
                spreadsheetTitle: spreadsheetMetadata.properties?.title,
                spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
                range: sheetData.range,
                rowCount: values.length,
                columnCount: headers.length,
                headers: includeHeaders ? headers : undefined,
                totalDataRows: dataRows.length
            }
        }
    }
}

module.exports = { nodeClass: GoogleSheets_DocumentLoaders }
