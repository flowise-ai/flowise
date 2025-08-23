import axios from 'axios'
import { Callbacks } from '@langchain/core/callbacks/manager'
import { Document } from '@langchain/core/documents'
import { BaseDocumentCompressor } from 'langchain/retrievers/document_compressors'

export class VoyageAIRerank extends BaseDocumentCompressor {
    private voyageAIAPIKey: any
    private readonly VOYAGEAI_RERANK_API_URL = 'https://api.voyageai.com/v1/rerank'
    private model: string = 'rerank-lite-1'
    private readonly k: number

     {
        
        this.voyageAIAPIKey = voyageAIAPIKey
        this.model = model
        this.k = k
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
                Authorization: `Bearer ${this.voyageAIAPIKey}`,
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }
        const data = {
            model: this.model,
            query: query,
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
