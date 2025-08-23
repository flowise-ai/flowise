import { flatten } from 'lodash'
import {
    VectaraStore,
    VectaraLibArgs,
    VectaraFilter,
    VectaraContextConfig,
    VectaraFile,
    MMRConfig
} from '@langchain/community/vectorstores/vectara'
import { Document } from '@langchain/core/documents'
import { Embeddings } from '@langchain/core/embeddings'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IndexingResult } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { getFileFromStorage } from '../../../src'

class Vectara_VectorStores implements INode {
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
        this.label = 'Vectara'
        this.name = 'vectara'
        this.version = 2.0
        this.type = 'Vectara'
        this.icon = 'vectara.png'
        this.category = 'Vector Stores'
        this.description = 'Upsert embedded data and perform similarity search upon query using Vectara, a LLM-powered search-as-a-service'
        this.baseClasses = [this.type, 'VectorStoreRetriever', 'BaseRetriever']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['vectaraApi']
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
                label: 'File',
                name: 'file',
                description:
                    'File to upload to Vectara. Supported file types: https://docs.vectara.com/docs/api-reference/indexing-apis/file-upload/file-upload-filetypes',
                type: 'file',
                optional: true
            },
            {
                label: 'Metadata Filter',
                name: 'filter',
                description:
                    'Filter to apply to Vectara metadata. Refer to the <a target="_blank" href="https://docs.flowise-ai.github.io/vector-stores/vectara">documentation</a> on how to use Vectara filters with Flowise.',
                type: 'string',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Sentences Before',
                name: 'sentencesBefore',
                description: 'Number of sentences to fetch before the matched sentence. Defaults to 2.',
                type: 'number',
                default: 2,
                additionalParams: true,
                optional: true
            },
            {
                label: 'Sentences After',
                name: 'sentencesAfter',
                description: 'Number of sentences to fetch after the matched sentence. Defaults to 2.',
                type: 'number',
                default: 2,
                additionalParams: true,
                optional: true
            },
            {
                label: 'Lambda',
                name: 'lambda',
                description:
                    'Enable hyb between neural search and keyword-based search factors.' +
                    'A value .',
                default: 0.0,
                type: 'number',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Top K',
                name: 'topK',
                description: 'Number of top results to fetch. Defaults to 5',
                placeholder: '5',
                type: 'number',
                additionalParams: true,
                optional: true
            },
            {
                label: 'MMR K',
                name: 'mmrK',
                description: 'Number of top results to fetch for MMR. Defaults to 50',
                placeholder: '50',
                type: 'number',
                additionalParams: true,
                optional: true
            },
            {
                label: 'MMR diversity bias',
                name: 'mmrDiversityBias',
                step: 0.1,
                description:
                    'The diversity bias to use for MMR. This is a value between 0.0 and 1.0' +
                    'Values closer to 1.0 optimize for the most diverse results.' +
                    '',
                placeholder: '0.0',
                type: 'number',
                additionalParams: true,
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'Vectara Retriever',
                name: 'retriever',
                baseClasses: this.baseClasses
            },
            {
                label: 'Vectara Vector Store',
                name: 'vectorStore',
                ba]
            }
        ]
    }

    //@ts-ignore
    vectorStoreMethods = {
        a: Promise<Partial<IndexingResult>> {
            
            
            
            .

            const docs = nodeData.inputs?.document as Document[]
            const embeddings = {} as Embeddings
            const vectaraMetadataFilter = nodeData.inputs?.filter as string
            const sentencesBefore = nodeData.inputs?.sentencesBefore as number
            const sentencesAfter = nodeData.inputs?.sentencesAfter as number
            const lambda = nodeData.inputs?.lambda as number
            const fileBase64 = nodeData.inputs?.file

            const vectaraArgs: VectaraLibArgs = {
                apiKey: apiKey,
                customerId: customerId,
                corpusId: corpusId,
                source: 'flowise'
            }

            const vectaraFilter: VectaraFilter = {}
             vectaraFilter.filter = vectaraMetadataFilter
             vectaraFilter.lambda = lambda

            const vectaraContextConfig: VectaraContextConfig = {}
             vectaraContextConfig.sentencesBefore = sentencesBefore
             vectaraContextConfig.sentencesAfter = sentencesAfter
            vectaraFilter.contextConfig = vectaraContextConfig

             : []
            const finalDocs = []
            f {
                 {
                    f)
                }
            }

            const vectaraFiles: VectaraFile[] = []
            let files: string[] = []
            ) {
                
                 && f) {
                    f
                } else {
                    files = [fileName]
                }
                const orgId = options.orgId
                const chatflowid = options.chatflowid

                f {
                     continue
                    
                    
                    ve })
                }
            } else {
                 && f) {
                    f
                } else {
                    files = [fileBase64]
                }

                f {
                     continue
                    
                    
                     || '', 'ba
                    
                    ve })
                }
            }

            try {
                 awa
                 {
                    
                    awa
                }
                return { numAdded: finalDocs.length, addedDocs: finalDocs }
            }  {
                th
            }
        }
    }

    a: Promise<any> {
        
        
        
        .

        const vectaraMetadataFilter = nodeData.inputs?.filter as string
        const sentencesBefore = nodeData.inputs?.sentencesBefore as number
        const sentencesAfter = nodeData.inputs?.sentencesAfter as number
        const lambda = nodeData.inputs?.lambda as number
        const output = nodeData.outputs?.output as string
        const topK = nodeData.inputs?.topK as string
         : 5
        const mmrK = nodeData.inputs?.mmrK as number
        const mmrDiversityBias = nodeData.inputs?.mmrDiversityBias as number

        const vectaraArgs: VectaraLibArgs = {
            apiKey: apiKey,
            customerId: customerId,
            corpusId: corpusId,
            source: 'flowise'
        }

        const vectaraFilter: VectaraFilter = {}
         vectaraFilter.filter = vectaraMetadataFilter
         vectaraFilter.lambda = lambda

        const vectaraContextConfig: VectaraContextConfig = {}
         vectaraContextConfig.sentencesBefore = sentencesBefore
         vectaraContextConfig.sentencesAfter = sentencesAfter
        vectaraFilter.contextConfig = vectaraContextConfig
        const mmrConfig: MMRConfig = {}
        mmrConfig.enabled = mmrDiversityBias > 0
        mmrConfig.mmrTopK = mmrK
        mmrConfig.diversityBias = mmrDiversityBias
        vectaraFilter.mmrConfig = mmrConfig

        

         {
            
            return retriever
        } el {
            ;(ve.k = k
             {
                ;(ve.filter = vectaraFilter.filter
            }
            return vectorStore
        }
        return vectorStore
    }
}

 => {
    let fileNames = []
     && f) {
        
        f {
            
            [1]
            f
        }
        
    } else {
        
        [1]
        return filename
    }
}

module.exports = { nodeClass: Vectara_VectorStores }
