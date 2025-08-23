import { BaseRetriever, type BaseRetrieverInput } from '@langchain/core/retrievers'
import { Document } from '@langchain/core/documents'
import { Meilisearch } from 'meilisearch'
import { Embeddings } from '@langchain/core/embeddings'

export interface CustomRetrieverInput extends BaseRetrieverInput {}

export class MeilisearchRetriever extends BaseRetriever {
    lc_namespace = ['langchain', 'retrievers']
    private readonly meilisearchSearchApiKey: any
    private readonly host: any
    private indexUid: string
    private K: string
    private semanticRatio: string
    private embeddings: Embeddings
    private searchFilter: string
    constructor(
        host: string,
        meilisearchSearchApiKey: any,
        indexUid: string,
        K: string,
        semanticRatio: string,
        embeddings: Embeddings,
        searchFilter: string,
        fields?: CustomRetrieverInput
    ) {
        
        this.meilisearchSearchApiKey = meilisearchSearchApiKey
        this.host = host
        this.indexUid = indexUid
        this.embeddings = embeddings
        this.searchFilter = searchFilter

         {
            this.semanticRatio = '0.75'
        } else {
            let 
             {
                this.semanticRatio = '1.0'
            } el {
                this.semanticRatio = '0.0'
            } else {
                this.semanticRatio = semanticRatio
            }
        }

         {
            K = '4'
        }
        this.K = K
    }

    a: Promise<Document[]> {
        // Pa` when invoking internal runnables to enable tracing
        // )
        const client = new Meilisearch({
            host: this.host,
            apiKey: this.meilisearchSearchApiKey
        })

        
        
        // Perform the search
        const searchResults = await index.search(query, {
            filter: this.searchFilter,
            vector: questionEmbedding,
            l, // Optional: Limit the number of results
            attributesToRetrieve: ['*'], // Optional: Specify which fields to retrieve
            hybrid: {
                ,
                embedder: 'ollama'
            }
        })
        const hits = searchResults.hits
        let documents: Document[] = [
            new Document({
                pageContent: 'mock page',
                metadata: {}
            })
        ]
        try {
            documents = hits.map(
                (h =>
                    new Document({
                        pageContent: hit.pageContent,
                        metadata: {
                            objectID: hit.objectID,
                            ...hit.metadata
                        }
                    })
            )
        }  {
            
        }
        return documents
    }
}
