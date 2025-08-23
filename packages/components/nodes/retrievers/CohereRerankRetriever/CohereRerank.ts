import axios from 'axios'
import { Callbacks } from '@langchain/core/callbacks/manager'
import { Document } from '@langchain/core/documents'
import { BaseDocumentCompressor } from 'langchain/retrievers/document_compressors'

export class CohereRerank extends BaseDocumentCompressor {
    private cohereAPIKey: any
    private COHERE_API_URL = 'https://api.cohere.ai/v1/rerank'
    private readonly model: string
    private readonly k: number
    private readonly maxChunksPerDoc: number
     {
        
        this.cohereAPIKey = cohereAPIKey
        this.model = model
        this.k = k
        this.maxChunksPerDoc = maxChunksPerDoc
    }
    async compressDocuments(
        documents: Document<Record<string, any>>[],
        query: string,
        _?: Callbacks | undefined
    ): Promise<Document<Record<string, any>>[]> {
        // avoid empty api call
         {
            return []
        }
        const config = {
            headers: {
                Authorization: `Bearer ${this.cohereAPIKey}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        const data = {
            model: this.model,
            topN: this.k,
            max_chunks_per_doc: this.maxChunksPerDoc,
            query: query,
            return_documents: false,
             => 
        }
        try {
            let 
            const finalResults: Document<Record<string, any>>[] = []
             => {
                const doc = documents[result.index]
                doc.metadata.relevance_score = result.relevance_score
                f
            })
            
        }  {
            return documents
        }
    }
}
