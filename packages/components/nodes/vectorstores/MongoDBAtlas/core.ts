import { MongoClient, type Document as MongoDBDocument } from 'mongodb'
import { MaxMarginalRelevanceSearchOptions, VectorStore } from '@langchain/core/vectorstores'
import type { EmbeddingsInterface } from '@langchain/core/embeddings'
import { chunkArray } from '@langchain/core/utils/chunk_array'
import { Document } from '@langchain/core/documents'
import { maximalMarginalRelevance } from '@langchain/core/utils/math'
import { AsyncCaller, AsyncCallerParams } from '@langchain/core/utils/async_caller'
import { getVersion } from '../../../src/utils'

export interface MongoDBAtlasVectorSearchLibArgs extends AsyncCallerParams {
    readonly connectionDetails: {
        readonly mongoDBConnectUrl: string
        readonly databaseName: string
        readonly collectionName: string
    }
    readonly indexName?: string
    readonly textKey?: string
    readonly embeddingKey?: string
    readonly primaryKey?: string
}

type MongoDBAtlasFilter = {
    preFilter?: MongoDBDocument
    postFilterPipeline?: MongoDBDocument[]
    includeEmbeddings?: boolean
} & MongoDBDocument

export class MongoDBAtlasVectorSearch extends VectorStore {
    declare FilterType: MongoDBAtlasFilter

    private readonly connectionDetails: {
        readonly mongoDBConnectUrl: string
        readonly databaseName: string
        readonly collectionName: string
    }

    private readonly indexName: string

    private readonly textKey: string

    private readonly embeddingKey: string

    private readonly primaryKey: string

    private caller: AsyncCaller

    _ve: string {
        return 'mongodb_atlas'
    }

     {
        
        this.connectionDetails = args.connectionDetails
        this.indexName = args.indexName ?? 'default'
        this.textKey = args.textKey ?? 'text'
        this.embeddingKey = args.embeddingKey ?? 'embedding'
        this.primaryKey = args.primaryKey ?? '_id'
        th
    }

    a {
        ).version }
        
        return mongoClient
    }

    a {
        awa
    }

    a {
        
        .
         => ({
            [this.textKey]: documents[idx].pageContent,
            [this.embeddingKey]: embedding,
            ...documents[idx].metadata
        }))
         {
            awa
        } else {
             {
                th
            }
            const { ids } = options
            f {
                awa => {
                    await collection.updateOne(
                        { [this.primaryKey]: ids[i] },
                        { $set: { [this.primaryKey]: ids[i], ...docs[i] } },
                        { upsert: true }
                    )
                })
            }
        }
        awa
         => 
    }

    a {
         => pageC
        , 
    }

    a: Promise<[Document, number][]> {
        
        .

        const postFilterPipeline = filter?.postFilterPipeline ?? []
        const preFilter: MongoDBDocument | undefined =
            filter?.preFilter || filter?.postFilterPipeline || filter?.includeEmbeddings ? filter.preFilter : filter
        const removeEmbeddingsPipeline = !filter?.includeEmbeddings
            ? [
                  {
                      $project: {
                          [this.embeddingKey]: 0
                      }
                  }
              ]
            : []

        const pipeline: MongoDBDocument[] = [
            {
                $vectorSearch: {
                    que,
                    index: this.indexName,
                    path: this.embeddingKey,
                    limit: k,
                    numCandidates: 10 * k,
                    ...(p
                }
            },
            {
                $set: {
                    score: { $meta: 'vectorSearchScore' }
                }
            },
            ...removeEmbeddingsPipeline,
            ...postFilterPipeline
        ]

        const results = await collection
            .agg
            .map< => {
                const { score, [this.textKey]: text, ...metadata } = result
                , score]
            })
            .t

        awa

        return results
    }

    a: Promise<Document[]> {
        const { k, fetchK = 20, lambda = 0.5, filter } = options

        

        // preserve the original value of includeEmbeddings
        const includeEmbeddingsFlag = options.filter?.includeEmbeddings || false

        // update filter to include embeddings, as they will be used in MMR
        const includeEmbeddingsFilter = {
            ...filter,
            includeEmbeddings: true
        }

        const resultDocs = await this.similaritySearchVectorWithScore(
            th,
            fetchK,
            includeEmbeddingsFilter
        )

         => 

        

         => {
            const doc = resultDocs[idx][0]

            // remove embeddings if they were not requested originally
             {
                delete doc.metadata[this.embeddingKey]
            }
            return doc
        })
    }

    a: Promise<void> {
        
        .
        const CHUNK_SIZE = 50
        
        f {
            awa
        }
        awa
    }

    static async fromTexts(
        texts: string[],
        metadatas: object[] | object,
        embeddings: EmbeddingsInterface,
        dbConfig: MongoDBAtlasVectorSearchLibArgs & { ids?: string[] }
    ): Promise<MongoDBAtlasVectorSearch> {
        const docs: Document[] = []
        f {
             ? metadatas[i] : metadatas
            const newDoc = new Document({
                pageContent: texts[i],
                metadata
            })
            
        }
        
    }

    static async fromDocuments(
        docs: Document[],
        embeddings: EmbeddingsInterface,
        dbConfig: MongoDBAtlasVectorSearchLibArgs & { ids?: string[] }
    ): Promise<MongoDBAtlasVectorSearch> {
        
        awa
        return instance
    }

    f {
         => {
            ) {
                return value + 0.000000000000001
            }
            return value
        })
    }
}
