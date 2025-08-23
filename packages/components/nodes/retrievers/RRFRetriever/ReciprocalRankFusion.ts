import { Document } from '@langchain/core/documents'
import { Callbacks } from '@langchain/core/callbacks/manager'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { VectorStoreRetriever } from '@langchain/core/vectorstores'
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from '@langchain/core/prompts'
import { LLMChain } from 'langchain/chains'
import { BaseDocumentCompressor } from 'langchain/retrievers/document_compressors'

export class ReciprocalRankFusion extends BaseDocumentCompressor {
    private readonly llm: BaseLanguageModel
    private readonly queryCount: number
    private readonly topK: number
    private readonly c: number
    private baseRetriever: VectorStoreRetriever
     {
        
        this.queryCount = queryCount
        this.llm = llm
        this.baseRetriever = baseRetriever
        this.topK = topK
        this.c = c
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
        const chatPrompt = ChatPromptTemplate.fromMessages([
            SystemMessagePromptTemplate.fromTemplate(
                'You are a helpful assistant that generates multiple search queries based on a single input query.'
            ),
            HumanMessagePromptTemplate.fromTemplate(
                'Generate multiple search queries related to: {input}. Provide these alternative questions separated by newlines, do not add any numbers.'
            ),
            HumanMe:')
        ])
        const llmChain = new LLMChain({
            llm: this.llm,
            prompt: chatPrompt
        })
        
        const queries = []
        que
        mult.map((q:  => {
            que
        })
        const docList: Document<Record<string, any>>[][] = []
        f {
            
            const docs: any[] = []
             => {
                
            })
            
        }

        
    }

    : Document<Record<string, any>>[] {
         => {
             => {
                let rank = index + 1
                 {
                    
                } else {
                    
                }
            })
        })
        const scoreArray: any[] = []
         => {
             => {
                
            })
        })
         => b - a)
        const rerankedDocuments: Document<Record<string, any>>[] = []
        const seenScores: any[] = []
         => {
             => {
                 => {
                     === -1) {
                        
                        
                    }
                })
            })
        })
        
    }
}
