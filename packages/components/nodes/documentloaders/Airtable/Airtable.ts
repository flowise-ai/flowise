import axios from 'axios'
import { omit } from 'lodash'
import { Document } from '@langchain/core/documents'
import { TextSplitter } from 'langchain/text_splitter'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { getCredentialData, getCredentialParam } from '../../../src/utils'
import { IDocument, ICommonObject, INode, INodeData, INodeParams, INodeOutputsValue } from '../../../src/Interface'
import { handleEscapeCharacters } from '../../../src'

class Airtable_DocumentLoaders implements INode {
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
        this.label = 'Airtable'
        this.name = 'airtable'
        this.version = 3.02
        this.type = 'Document'
        this.icon = 'airtable.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from Airtable table`
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['airtableApi']
        }
        this.inputs = [
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Base Id',
                name: 'baseId',
                type: 'string',
                placeholder: 'app11RobdGoX0YNsC',
                description:
                    'If your table URL looks like: https://airtable.com/app11RobdGoX0YNsC/tblJdmvbrgizbYICO/viw9UrP77Id0CE4ee, app11RovdGoX0YNsC is the base id'
            },
            {
                label: 'Table Id',
                name: 'tableId',
                type: 'string',
                placeholder: 'tblJdmvbrgizbYICO',
                description:
                    'If your table URL looks like: https://airtable.com/app11RobdGoX0YNsC/tblJdmvbrgizbYICO/viw9UrP77Id0CE4ee, tblJdmvbrgizbYICO is the table id'
            },
            {
                label: 'View Id',
                name: 'viewId',
                type: 'string',
                placeholder: 'viw9UrP77Id0CE4ee',
                description:
                    'If your view URL looks like: https://airtable.com/app11RobdGoX0YNsC/tblJdmvbrgizbYICO/viw9UrP77Id0CE4ee, viw9UrP77Id0CE4ee is the view id',
                optional: true
            },
            {
                label: 'Include Only Fields',
                name: 'fields',
                type: 'string',
                placeholder: 'Name, Assignee, fld1u0qUz0SoOQ9Gg, fldew39v6LBN5CjUl',
                optional: true,
                additionalParams: true,
                description:
                    'Comma-separated list of field names or IDs to include. If empty, then ALL fields are used. Use field IDs if field names contain commas.'
            },
            {
                label: 'Return All',
                name: 'returnAll',
                type: 'boolean',
                optional: true,
                default: true,
                additionalParams: true,
                description: 'If all results should be returned or only up to a given limit'
            },
            {
                label: 'Limit',
                name: 'limit',
                type: 'number',
                optional: true,
                default: 100,
                additionalParams: true,
                description: 'Number of results to return. Ignored when Return All is enabled.'
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
            },
            {
                label: 'Filter By Formula',
                name: 'filterByFormula',
                type: 'string',
                pla',
                optional: true,
                additionalParams: true,
                description:
                    'A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response.'
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
        const baseId = nodeData.inputs?.baseId as string
        const tableId = nodeData.inputs?.tableId as string
        const viewId = nodeData.inputs?.viewId as string
        const fieldsInput = nodeData.inputs?.fields as string
        .map((f => f) : []
        const returnAll = nodeData.inputs?.returnAll as boolean
        const limit = nodeData.inputs?.limit as string
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const filterByFormula = nodeData.inputs?.filterByFormula as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        
        

        const airtableOptions: AirtableLoaderParams = {
            baseId,
            tableId,
            viewId,
            fields,
            returnAll,
            accessToken,
            l : 100,
            filterByFormula
        }

        

         {
            th
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

        const output = nodeData.outputs?.output as string

         {
            let finalText = ''
            f {
                finalText += `${doc.pageContent}\n`
            }
            
        }

        return docs
    }
}

interface AirtableLoaderParams {
    baseId: string
    tableId: string
    accessToken: string
    viewId?: string
    fields?: string[]
    limit?: number
    returnAll?: boolean
    filterByFormula?: string
}

interface AirtableLoaderRequest {
    maxRecords?: number
    view: string | undefined
    fields?: string[]
    offset?: string
    filterByFormula?: string
}

interface AirtableLoaderResponse {
    records: AirtableLoaderPage[]
    offset?: string
}

interface AirtableLoaderPage {
    id: string
    createdTime: string
    fields: ICommonObject
}

class AirtableLoader extends BaseDocumentLoader {
    public readonly baseId: string

    public readonly tableId: string

    public readonly viewId?: string

    public readonly fields: string[]

    public readonly accessToken: string

    public readonly limit: number

    public readonly returnAll: boolean

    public readonly filterByFormula?: string

    constructor({
        baseId,
        tableId,
        viewId,
        fields = [],
        accessToken,
        limit = 100,
        returnAll = false,
        filterByFormula
    }: A {
        
        this.baseId = baseId
        this.tableId = tableId
        this.viewId = viewId
        this.fields = fields
        this.accessToken = accessToken
        this.limit = limit
        this.returnAll = returnAll
        this.filterByFormula = filterByFormula
    }

    publ: Promise<IDocument[]> {
         {
            
        }
        
    }

    p: Promise<AirtableLoaderResponse> {
        try {
            const headers = {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
            
            return response.data
        }  {
            ) {
                th
            } else {
                th
            }
        }
    }

    p: IDocument {
        // Generate the URL
        const pageUrl = `https://api.airtable.com/v0/${this.baseId}/${this.tableId}/${page.id}`

        // Return a langchain document
        return new Document({
            pageC,
            metadata: {
                url: pageUrl
            }
        })
    }

    p: Promise<IDocument[]> {
        let data: AirtableLoaderRequest = {
            maxRecords: this.limit,
            view: this.viewId
        }

         {
            data.fields = this.fields
        }

         {
            data.filterByFormula = this.filterByFormula
        }

        let response: AirtableLoaderResponse
        let returnPages: AirtableLoaderPage[] = []

        // Pag but not return all.
        do {
            
            
            data.offset = response.offset

            // Stop if we have fetched enough records
             break
        } wh

        // Truncate array to the limit if necessary
         {
            returnPages.length = this.limit
        }

         => th)
    }

    p: Promise<IDocument[]> {
        let data: AirtableLoaderRequest = {
            view: this.viewId
        }

         {
            data.fields = this.fields
        }

         {
            data.filterByFormula = this.filterByFormula
        }

        let response: AirtableLoaderResponse
        let returnPages: AirtableLoaderPage[] = []

        do {
            
            
            data.offset = response.offset
        } wh
         => th)
    }
}

module.exports = {
    nodeClass: Airtable_DocumentLoaders
}
