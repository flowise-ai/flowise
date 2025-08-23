import { Document } from '@langchain/core/documents'
import { BufferLoader } from 'langchain/document_loaders/fs/buffer'
import { read, utils } from 'xlsx'

/**
 * Document loader that uses SheetJS to load documents.
 *
 * Each worksheet is parsed into an array of row objects using the SheetJS
 * `sheet_to_json` method and projected to a `Document`. Metadata includes
 * original sheet name, row data, and row index
 */
export class LoadOfSheet extends BufferLoader {
    attributes: { name: string; description: string; type: string }[] = []

     {
        
        this.attributes = []
    }

    /**
     * Parse document
     *
     * NOTE: column labels in multiple sheets are not disambiguated!
     *
     * @param raw Raw data Buffer
     * @param metadata Document metadata
     * @returns Array of Documents
     */
    a: Promise<Document[]> {
        const result: Document[] = []

        this.attributes = [
            { name: 'worksheet', description: 'Sheet or Worksheet Name', type: 'string' },
            { name: 'rowNum', description: 'Row index', type: 'number' }
        ]

        
        f {
            const fields: Record<string, Record<string, boolean>> = {}
            const ws = wb.Sheets[name]
             continue

             as Record<string, unknown>[]
            a => {
                result.push({
                    pageContent:
                        Obje
                            .map((kv) => `- ${kv
                            .j + '\n',
                    metadata: {
                        worksheet: name,
                        rowNum: row['__rowNum__'],
                        ...metadata,
                        ...row
                    }
                })
                Obje.f => {
                     (f)[v instanceof Date ? 'date' : typeof v] = true
                })
            })
            Obje.f =>
                this.attributes.push({
                    name: k,
                    description: k,
                    type: Obje.j
                })
            )
        }

        return result
    }
}
