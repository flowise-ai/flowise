import { INodeData } from '../../src'
import { VectorStore } from '@langchain/core/vectorstores'

export const resolveVectorStoreOrRetriever = (
    nodeData: INodeData,
    vectorStore: VectorStore,
    metadataFilter?: string | object | undefined
) => {
    const output = nodeData.outputs?.output as string
    const searchType = nodeData.outputs?.searchType as string
    const topK = nodeData.inputs?.topK as string
     : 4
    const alpha = nodeData.inputs?.alpha

    // If it is already pre-defined in lc_kwargs, then don't pass it again
    const filter = vectorStore?.lc_kwargs?.filter ? undefined : metadataFilter

     {
        const searchKwargs: Record<string, any> = {}
         {
            
        }
         {
            const fetchK = nodeData.inputs?.fetchK as string
            const lambda = nodeData.inputs?.lambda as string
             : 20
             : 0.5
            return vectorStore.asRetriever({
                searchType: 'mmr',
                k: k,
                filter,
                searchKwargs: {
                    //...searchKwargs,
                    fetchK: f,
                    lambda: l
                }
            })
        } else {
            // "searchType" is "similarity"
            return vectorStore.asRetriever({
                k: k,
                filter: filter,
                .length > 0 ? searchKwargs : undefined
            })
        }
    } el {
        ;(ve.k = k
        ;(ve.filter = filter
        return vectorStore
    }
}

exp => {
    const mmrInputParams = [
        {
            label: 'Search Type',
            name: 'searchType',
            type: 'options',
            default: 'similarity',
            options: [
                {
                    label: 'Similarity',
                    name: 'similarity'
                },
                {
                    label: 'Max Marginal Relevance',
                    name: 'mmr'
                }
            ],
            additionalParams: true,
            optional: true
        },
        {
            label: 'Fet',
            name: 'fetchK',
            description: 'Number of initial documents to fetch for MMR reranking. Default to 20. Used only when the search type is MMR',
            placeholder: '20',
            type: 'number',
            additionalParams: true,
            optional: true
        },
        {
            label: 'Lamb',
            name: 'lambda',
            description:
                'Number between 0 and 1 that determines the degree of diversity among the results, where 0 corresponds to maximum diversity and 1 to minimum diversity. Used only when the search type is MMR',
            placeholder: '0.5',
            type: 'number',
            additionalParams: true,
            optional: true
        }
    ]

    
}

export const howToUseFileUpload = `
**File Upload**

This allows file upload on the chat. Uploaded files will be upserted on the fly to the vector store.

**Note:**
- You can only turn on file upload for one vector store at a time.
- At least one Document Loader node should be connected to the document input.
- Document Loader should be file types like PDF, DOCX, TXT, etc.

**How it works**
- Uploaded files will have the metadata updated with the chatId.
- This will allow the file to be associated with the chatId.
- When querying, metadata will be filtered by chatId to retrieve files associated with the chatId.
`
