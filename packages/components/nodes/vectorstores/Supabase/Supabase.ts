import { flatten } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { createClient } from '@supabase/supabase-js'
import { Document } from '@langchain/core/documents'
import { Embeddings } from '@langchain/core/embeddings'
import { SupabaseVectorStore, SupabaseLibArgs } from '@langchain/community/vectorstores/supabase'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { addMMRInputParams, resolveVectorStoreOrRetriever } from '../VectorStoreUtils'
import { index } from '../../../src/indexing'
import { FilterParser } from './filterParser'

class Supabase_VectorStores implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    badge: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams
    outputs: INodeOutputsValue[]

     {
        this.label = 'Supabase'
        this.name = 'supabase'
        this.version = 4.0
        this.type = 'Supabase'
        this.icon = 'supabase.svg'
        this.category = 'Vector Stores'
        this.description = 'Upsert embedded data and perform similarity or mmr search upon query using Supabase via pgvector extension'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['supabaseApi']
        }
        this.inputs = [
            {
                label: 'Document',
                name: 'document',
                type: 'Document',
                list: true,
                optional: true
            },
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'Embeddings'
            },
            {
                label: 'Record Manager',
                name: 'recordManager',
                type: 'RecordManager',
                description: 'Keep track of the record to prevent duplication',
                optional: true
            },
            {
                label: 'Supabase Project URL',
                name: 'supabaseProjUrl',
                type: 'string'
            },
            {
                label: 'Table Name',
                name: 'tableName',
                type: 'string'
            },
            {
                label: 'Query Name',
                name: 'queryName',
                type: 'string'
            },
            {
                label: 'Supabase Metadata Filter',
                name: 'supabaseMetadataFilter',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Supabase RPC Filter',
                name: 'supabaseRPCFilter',
                type: 'string',
                rows: 4,
                pla
.f
.f;`,
                description:
                    'Query builder-style filtering. If this is set, will override the metadata filter. Refer <a href="https://js.langchain.com/v0.1/docs/integrations/vectorstores/supabase/#metadata-query-builder-filtering" target="_blank">here</a> for more information',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Default to 4',
                placeholder: '4',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ]
        a
        this.outputs = [
            {
                label: 'Supabase Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Supabase Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            const supabaseProjUrl = nodeData.inputs?.supabaseProjUrl as string
            const tableName = nodeData.inputs?.tableName as string
            const queryName = nodeData.inputs?.queryName as string
            const docs = nodeData.inputs?.document as Document[]
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const recordManager = nodeData.inputs?.recordManager

            
            

            

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            try {
                 {
                    const vectorStore = await SupabaseUpsertVectorStore.fromExistingIndex(embeddings, {
                        client,
                        tableName: tableName,
                        queryName: queryName
                    })
                    awa
                    const res = await index({
                        docsSource: finalDocs,
                        recordManager,
                        vectorStore,
                        options: {
                            cleanup: recordManager?.cleanup,
                            sourceIdKey: recordManager?.sourceIdKey ?? 'source',
                            vectorStoreName: tableName + '_' + queryName
                        }
                    })
                    return res
                } else {
                    await SupabaseUpsertVectorStore.fromDocuments(finalDocs, embeddings, {
                        client,
                        tableName: tableName,
                        queryName: queryName
                    })
                    return { numAdded: finalDocs.length, addedDocs: finalDocs }
                }
            }  {
                th
            }
        },
        a: Promise<void> {
            const supabaseProjUrl = nodeData.inputs?.supabaseProjUrl as string
            const tableName = nodeData.inputs?.tableName as string
            const queryName = nodeData.inputs?.queryName as string
            const embeddings = nodeData.inputs?.embeddings as Embeddings
            const recordManager = nodeData.inputs?.recordManager

            
            

            

            const supabaseStore = new SupabaseVectorStore(embeddings, {
                client,
                tableName: tableName,
                queryName: queryName
            })

            try {
                 {
                    const vectorStoreName = tableName + '_' + queryName
                    awa
                    ;(.name.namespace + '_' + vectorStoreName
                    

                    awa
                    awa
                } else {
                    awa
                }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        const supabaseProjUrl = nodeData.inputs?.supabaseProjUrl as string
        const tableName = nodeData.inputs?.tableName as string
        const queryName = nodeData.inputs?.queryName as string
        const embeddings = nodeData.inputs?.embeddings as Embeddings
        const supabaseMetadataFilter = nodeData.inputs?.supabaseMetadataFilter
        const supabaseRPCFilter = nodeData.inputs?.supabaseRPCFilter

        
        

        

        const obj: SupabaseLibArgs = {
            client,
            tableName,
            queryName
        }

         {
            
            obj.filter = metadatafilter
        }

         {
            
        }

        

        
    }
}

class SupabaseUpsertVectorStore extends SupabaseVectorStore {
    a: Promise<string[]> {
         {
            return []
        }
         => ({
            content: documents[idx].pageContent,
            embedding,
            metadata: documents[idx].metadata
        }))

        let returnedIds: string[] = []
        f {
            .map(( => {
                 {
                    return { id: options.ids[i + j], ...row }
                }
                return row
            })

            let .up.

             {
                // If the error is due to null value in column "id", we will generate a new id for the row
                ) {
                    .map(( => {
                         {
                            return { id: options.ids[i + y], ...row }
                        }
                        , ...row }
                    })
                    .up.

                     {
                        th
                    }
                } else {
                    th
                }
            }

             {
                 => )
            }
        }

        return returnedIds
    }
}

module.exports = { nodeClass: Supabase_VectorStores }
