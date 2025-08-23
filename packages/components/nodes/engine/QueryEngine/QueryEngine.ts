import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IServerSideEventStreamer } from '../../../src/Interface'
import {
    RetrieverQueryEngine,
    ResponseSynthesizer,
    CompactAndRefine,
    TreeSummarize,
    Refine,
    SimpleResponseBuilder,
    Metadata,
    NodeWithScore
} from 'llamaindex'
import { reformatSourceDocuments } from '../EngineUtils'
import { EvaluationRunTracerLlama } from '../../../evaluation/EvaluationRunTracerLlama'

class QueryEngine_LlamaIndex implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    tags: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]
    sessionId?: string

     {
        this.label = 'Query Engine'
        this.name = 'queryEngine'
        this.version = 2.0
        this.type = 'QueryEngine'
        this.icon = 'query-engine.png'
        this.category = 'Engine'
        this.description = 'Simple query engine built to answer question over your data, without memory'
        this.baseClasses = [this.type, 'BaseQueryEngine']
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'Vector Store Retriever',
                name: 'vectorStoreRetriever',
                type: 'VectorIndexRetriever'
            },
            {
                label: 'Response Synthesizer',
                name: 'responseSynthesizer',
                type: 'ResponseSynthesizer',
                description:
                    'ResponseSynthesizer is responsible for sending the query, nodes, and prompt templates to the LLM to generate a response. See <a target="_blank" href="https://ts.llamaindex.ai/modules/response_synthesizer">more</a>',
                optional: true
            },
            {
                label: 'Return Source Documents',
                name: 'returnSourceDocuments',
                type: 'boolean',
                optional: true
            }
        ]
        this.sessionId = fields?.sessionId
    }

    a: Promise<any> {
        
    }

    a: Promise<string | object> {
        const returnSourceDocuments = nodeData.inputs?.returnSourceDocuments as boolean
        

        let text = ''
        let sourceDocuments: ICommonObject[] = []
        let sourceNodes: NodeWithScore<Metadata>[] = []
        let isStreamingStarted = false

        awa

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

         {
            
            f {
                text += chunk.response
                 sourceNodes = chunk.sourceNodes
                 {
                    isStreamingStarted = true
                     {
                        
                    }
                }
                 {
                    
                }
            }

             {
                
                 {
                    
                }
            }
        } else {
            
            text = response?.response
            
        }

         return { text, sourceDocuments }
        else return { text }
    }
}

 => {
    const vectorStoreRetriever = nodeData.inputs?.vectorStoreRetriever
    const responseSynthesizerObj = nodeData.inputs?.responseSynthesizer

    let que

     {
         {
            const responseSynthesizer = new ResponseSynthesizer({
                ,
                serviceContext: vectorStoreRetriever.serviceContext
            })
            que
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                responseBuilder: new CompactAndRefine(
                    vectorStoreRetriever.serviceContext,
                    responseSynthesizerObj.textQAPromptTemplate,
                    responseSynthesizerObj.refinePromptTemplate
                ),
                serviceContext: vectorStoreRetriever.serviceContext
            })
            que
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                responseBuilder: new Refine(
                    vectorStoreRetriever.serviceContext,
                    responseSynthesizerObj.textQAPromptTemplate,
                    responseSynthesizerObj.refinePromptTemplate
                ),
                serviceContext: vectorStoreRetriever.serviceContext
            })
            que
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                ,
                serviceContext: vectorStoreRetriever.serviceContext
            })
            que
        }
    }

    return queryEngine
}

module.exports = { nodeClass: QueryEngine_LlamaIndex }
