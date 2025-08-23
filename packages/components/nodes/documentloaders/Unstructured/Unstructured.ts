import {
    HiResModelName,
    SkipInferTableTypes,
    UnstructuredLoaderOptions,
    UnstructuredLoaderStrategy
} from '@langchain/community/document_loaders/fs/unstructured'
import { BaseDocumentLoader } from 'langchain/document_loaders/base'
import { StringWithAutocomplete } from 'langchain/dist/util/types'
import { Document } from '@langchain/core/documents'

/**
 * Set the chunking_strategy to chunk text into larger or smaller elements. Defaults to None with optional arg of by_title
 */
type ChunkingStrategy = 'None' | 'by_title'

/**
 * Represents an element returned by the Unstructured API. It has
 * properties for the element type, text content, and metadata.
 */
type Element = {
    type: string
    text: string
    // this is purposefully loosely typed
    metadata: {
        [key: string]: unknown
    }
}

export class UnstructuredLoader extends BaseDocumentLoader {
    public filePath: string

    private apiUrl = process.env.UNSTRUCTURED_API_URL || 'https://api.unstructuredapp.io/general/v0/general'

    private apiKey: string | undefined = process.env.UNSTRUCTURED_API_KEY

    private strategy: StringWithAutocomplete<UnstructuredLoaderStrategy> = 'hi_res'

    private encoding?: string

    private ocrLanguages: Array<string> = []

    private coordinates?: boolean

    private pdfInferTableStructure?: boolean

    private xmlKeepTags?: boolean

    private skipInferTableTypes?: Array<StringWithAutocomplete<SkipInferTableTypes>>

    private hiResModelName?: StringWithAutocomplete<HiResModelName>

    private includePageBreaks?: boolean

    private chunkingStrategy?: StringWithAutocomplete<ChunkingStrategy>

    private multiPageSections?: boolean

    private combineUnderNChars?: number

    private newAfterNChars?: number

    private maxCharacters?: number

     {
        

        const options = optionsOrLegacyFilePath
        this.apiKey = options.apiKey
        this.apiUrl = options.apiUrl || this.apiUrl
        this.strategy = options.strategy || this.strategy
        this.encoding = options.encoding
        this.ocrLanguages = options.ocrLanguages || this.ocrLanguages
        this.coordinates = options.coordinates
        this.pdfInferTableStructure = options.pdfInferTableStructure
        this.xmlKeepTags = options.xmlKeepTags
        this.skipInferTableTypes = options.skipInferTableTypes
        this.hiResModelName = options.hiResModelName
        this.includePageBreaks = options.includePageBreaks
        this.chunkingStrategy = options.chunkingStrategy
        this.multiPageSections = options.multiPageSections
        this.combineUnderNChars = options.combineUnderNChars
        this.newAfterNChars = options.newAfterNChars
        this.maxCharacters = options.maxCharacters
    }

    a: Promise<Element[]> {
        
        f, f
        f
        th => {
            f
        })
         {
            f
        }
         {
            f
        }
         {
            f
        }
         {
            f
        }
         {
            f)
        }
         {
            f
        }
         {
            f
        }
         {
            f
        }
         {
            f
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

        const headers = {
            'UNSTRUCTURED-API-KEY': this.apiKey || ''
        }

        const response = await fetch(this.apiUrl, {
            method: 'POST',
            body: formData,
            headers
        })

         {
            th}`)
        }

        
        ) {
            th
        }
         => type as Element[]
    }

    a: Promise<Document[]> {
        

        const documents: Document[] = []
        f {
            const { metadata, text } = element
             {
                documents.push(
                    new Document({
                        pageContent: text,
                        metadata: {
                            ...metadata,
                            category: element.type
                        }
                    })
                )
            }
        }

        return documents
    }

    a: Promise<Document[]> {
          )
    }
}
