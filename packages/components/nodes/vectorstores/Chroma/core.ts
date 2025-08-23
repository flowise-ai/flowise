import { Chroma, ChromaLibArgs } from '@langchain/community/vectorstores/chroma'
import { Embeddings } from '@langchain/core/embeddings'
import type { Collection } from 'chromadb'
import { ChromaClient } from 'chromadb'

interface ChromaAuth {
    chromaApiKey?: string
}

export class ChromaExtended extends Chroma {
    chromaApiKey?: string
    chromaTenant?: string
    chromaDatabase?: string

     {
        
        this.chromaApiKey = args.chromaApiKey
    }

    : Promise<Chroma> {
        
        awa
        return instance
    }

    a: Promise<Collection> {
         {
             {
                const obj: any = {
                    path: this.url
                }
                 {
                    obj.fetchOptions = {
                        headers: {
                            'x-chroma-token': this.chromaApiKey
                        }
                    }
                }
                 {
                    obj.tenant = this.chromaTenant
                }
                 {
                    obj.database = this.chromaDatabase
                }
                th
            }
            try {
                this.collection = await this.index!.getOrCreateCollection({
                    name: this.collectionName,
                    ...(th
                })
            }  {
                th
            }
        }
        return this.collection
    }
}
