import fetch from 'node-fetch'
import { Document } from '@langchain/core/documents'
import { VectaraStore } from '@langchain/community/vectorstores/vectara'
import { VectorDBQAChain } from 'langchain/chains'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { checkInputs, Moderation } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

// functionality based on https://github.com/vectara/vectara-answer
 => {
     || []

    ]
    const citationToReplacement: { [key: string]: string } = {}
    un => {
        citationToReplacement[citation] = `[${index + 1}]`
    })

     => 
}
 => {
    const orderedSearchResults: any[] = []
     || []

    
    f {
        const citation = allCitations[i]
        ) - 1

        ) continue
        
        a
    }

    return orderedSearchResults
}

class VectaraChain_Chains implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    baseClasses: string[]
    description: string
    inputs: INodeParams[]

     {
        this.label = 'Vectara QA Chain'
        this.name = 'vectaraQAChain'
        this.version = 2.0
        this.type = 'VectaraQAChain'
        this.icon = 'vectara.png'
        this.category = 'Chains'
        this.description = 'QA chain for Vectara'
        th]
        this.inputs = [
            {
                label: 'Vectara Store',
                name: 'vectaraStore',
                type: 'VectorStore'
            },
            {
                label: 'Summarizer Prompt Name',
                name: 'summarizerPromptName',
                description:
                    'Summarize the results fetched from Vectara. Read <a target="_blank" href="https://docs.vectara.com/docs/learn/grounded-generation/select-a-summarizer">more</a>',
                type: 'options',
                options: [
                    {
                        label: 've',
                        name: 'vectara-summary-ext-v1.2.0',
                        description: 'base summarizer, available to all Vectara users'
                    },
                    {
                        label: 've',
                        name: 'vectara-experimental-summary-ext-2023-10-23-small',
                        description: `In beta, available to both Growth and <a target="_blank" href="https://vectara.com/pricing/">Scale</a> Vectara users`
                    },
                    {
                        label: 've',
                        name: 'vectara-summary-ext-v1.3.0',
                        description: 'Only available to <a target="_blank" href="https://vectara.com/pricing/">Scale</a> Vectara users'
                    },
                    {
                        label: 've',
                        name: 'vectara-experimental-summary-ext-2023-10-23-med',
                        description: `In beta, only available to <a target="_blank" href="https://vectara.com/pricing/">Scale</a> Vectara users`
                    }
                ],
                default: 'vectara-summary-ext-v1.2.0'
            },
            {
                label: 'Response Language',
                name: 'responseLang',
                description:
                    'Return the response in specific language. If not selected, Vectara will automatically detects the language. Read <a target="_blank" href="https://docs.vectara.com/docs/learn/grounded-generation/grounded-generation-response-languages">more</a>',
                type: 'options',
                options: [
                    {
                        label: 'English',
                        name: 'eng'
                    },
                    {
                        label: 'German',
                        name: 'deu'
                    },
                    {
                        label: 'French',
                        name: 'fra'
                    },
                    {
                        label: 'Chinese',
                        name: 'zho'
                    },
                    {
                        label: 'Korean',
                        name: 'kor'
                    },
                    {
                        label: 'Arabic',
                        name: 'ara'
                    },
                    {
                        label: 'Russian',
                        name: 'rus'
                    },
                    {
                        label: 'Thai',
                        name: 'tha'
                    },
                    {
                        label: 'Dutch',
                        name: 'nld'
                    },
                    {
                        label: 'Italian',
                        name: 'ita'
                    },
                    {
                        label: 'Portuguese',
                        name: 'por'
                    },
                    {
                        label: 'Spanish',
                        name: 'spa'
                    },
                    {
                        label: 'Japanese',
                        name: 'jpn'
                    },
                    {
                        label: 'Polish',
                        name: 'pol'
                    },
                    {
                        label: 'Turkish',
                        name: 'tur'
                    },
                    {
                        label: 'Vietnamese',
                        name: 'vie'
                    },
                    {
                        label: 'Indonesian',
                        name: 'ind'
                    },
                    {
                        label: 'Czech',
                        name: 'ces'
                    },
                    {
                        label: 'Ukrainian',
                        name: 'ukr'
                    },
                    {
                        label: 'Greek',
                        name: 'ell'
                    },
                    {
                        label: 'Hebrew',
                        name: 'heb'
                    },
                    {
                        label: 'Farsi/Persian',
                        name: 'fas'
                    },
                    {
                        label: 'Hindi',
                        name: 'hin'
                    },
                    {
                        label: 'Urdu',
                        name: 'urd'
                    },
                    {
                        label: 'Swedish',
                        name: 'swe'
                    },
                    {
                        label: 'Bengali',
                        name: 'ben'
                    },
                    {
                        label: 'Malay',
                        name: 'msa'
                    },
                    {
                        label: 'Romanian',
                        name: 'ron'
                    }
                ],
                optional: true,
                default: 'eng'
            },
            {
                label: 'Max Summarized Results',
                name: 'maxSummarizedResults',
                description: 'Maximum results used to build the summarized response',
                type: 'number',
                default: 7
            },
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            }
        ]
    }

    a: Promise<any> {
        return null
    }

    a: Promise<string | object> {
        const vectorStore = nodeData.inputs?.vectaraStore as VectaraStore
         ?? 'eng'
        const summarizerPromptName = nodeData.inputs?.summarizerPromptName as string
        const maxSummarizedResultsStr = nodeData.inputs?.maxSummarizedResults as string
         : 7

        ?.k ?? 10

        
        .vectaraFilter ?? {}
        .corpusId ?? []
        .customerId ?? ''

         => ({
            customerId,
            corpusId,
            metadataFilter: vectaraFilter?.filter ?? '',
            lexicalInterpolationConfig: { lambda: vectaraFilter?.lambda ?? 0.025 }
        }))

        // Ve
        const mmrRerankerId = 272725718
        const mmrEnabled = vectaraFilter?.mmrConfig?.enabled

        const moderations = nodeData.inputs?.inputModeration as Moderation[]
         {
            try {
                // Use the output of the moderation chain as input for the Vectara chain
                
            }  {
                awa => )
                //  {
                //     
                // }
                
            }
        }

        const data = {
            query: [
                {
                    query: input,
                    start: 0,
                    numResults: mmrEnabled ? vectaraFilter?.mmrTopK : topK,
                    corpusKey: corpusKeys,
                    contextConfig: {
                        sentencesAfter: vectaraFilter?.contextConfig?.sentencesAfter ?? 2,
                        sentencesBefore: vectaraFilter?.contextConfig?.sentencesBefore ?? 2
                    },
                    ...(mmrEnabled
                        ? {
                              rerankingConfig: {
                                  rerankerId: mmrRerankerId,
                                  mmrConfig: {
                                      diversityBias: vectaraFilter?.mmrConfig.diversityBias
                                  }
                              }
                          }
                        : {}),
                    summary: [
                        {
                            summarizerPromptName,
                            responseLang,
                            maxSummarizedResults
                        }
                    ]
                }
            ]
        }

        try {
            const response = await fetch(`https://api.vectara.io/v1/query`, {
                method: 'POST',
                headers: headers?.headers,
                b
            })

             {
                th
            }

            
            const responses = result.responseSet[0].response
            const documents = result.responseSet[0].document
            let rawSummarizedText = ''

            // 
            // Note that this does not really matter functionally due to the reorder citations, but it is more efficient
             : responses.length
             {
                
            }

            // Add metadata to each text response given its corresponding document metadata
            f {
                const responseMetadata = responses[i].metadata
                const documentMetadata = documents[responses[i].documentIndex].metadata
                const combinedMetadata: Record<string, unknown> = {}

                 => {
                    combinedMetadata[item.name] = item.value
                })

                 => {
                    combinedMetadata[item.name] = item.value
                })

                responses[i].metadata = combinedMetadata
            }

            // Create the summarization response
            const summaryStatus = result.responseSet[0].summary[0].status
             {
                throw new Error(
                    `BAD REQUEST: Too much text for the summarizer to summarize. Please try reducing the number of search results to summarize, or the context of each result by adjusting the 'summary_num_sentences', and 'summary_num_results' parameters respectively.`
                )
            }
            if (
                summaryStatus.length > 0 &&
                summaryStatus[0].code === 'NOT_FOUND' &&
                summaryStatus[0].statusDetail === 'Failed to retrieve summarizer.'
            ) {
                th
            }

            // Reorder citations in summary and create the list of returned source documents
            rawSummarizedText = result.responseSet[0].summary[0]?.text
            let 
            let 

            const sourceDocuments: Document[] = summaryResponses.map(
                ( =>
                    new Document({
                        pageContent: response.text,
                        metadata: response.metadata
                    })
            )

            return { text: summarizedText, sourceDocuments: sourceDocuments }
        }  {
            th
        }
    }
}

module.exports = { nodeClass: VectaraChain_Chains }
