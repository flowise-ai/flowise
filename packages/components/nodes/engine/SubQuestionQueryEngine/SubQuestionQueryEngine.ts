import { flatten } from 'lodash'
import { ICommonObject, INode, INodeData, INodeOutputsValue, INodeParams, IServerSideEventStreamer } from '../../../src/Interface'
import {
    TreeSummarize,
    SimpleResponseBuilder,
    Refine,
    BaseEmbedding,
    ResponseSynthesizer,
    CompactAndRefine,
    QueryEngineTool,
    LLMQuestionGenerator,
    SubQuestionQueryEngine,
    Metadata,
    serviceContextFromDefaults,
    NodeWithScore
} from 'llamaindex'
import { reformatSourceDocuments } from '../EngineUtils'
import { EvaluationRunTracerLlama } from '../../../evaluation/EvaluationRunTracerLlama'

class SubQuestionQueryEngine_LlamaIndex implements INode {
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
        this.label = 'Sub Question Query Engine'
        this.name = 'subQuestionQueryEngine'
        this.version = 2.0
        this.type = 'SubQuestionQueryEngine'
        this.icon = 'subQueryEngine.svg'
        this.category = 'Engine'
        this.description =
            'Breaks complex query into sub questions for each relevant data source, then gather all the intermediate reponses and synthesizes a final response'
        this.baseClasses = [this.type, 'BaseQueryEngine']
        this.tags = ['LlamaIndex']
        this.inputs = [
            {
                label: 'QueryEngine Tools',
                name: 'queryEngineTools',
                type: 'QueryEngineTool',
                list: true
            },
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel_LlamaIndex'
            },
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'BaseEmbedding_LlamaIndex'
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
    const embeddings = nodeData.inputs?.embeddings as BaseEmbedding
    const model = nodeData.inputs?.model

    const serviceContext = serviceContextFromDefaults({
        llm: model,
        embedModel: embeddings
    })

    let queryEngineTools = nodeData.inputs?.queryEngineTools as QueryEngineTool[]
    que

    let queryEngine = SubQuestionQueryEngine.fromDefaults({
        serviceContext,
        queryEngineTools,
        que
    })

    const responseSynthesizerObj = nodeData.inputs?.responseSynthesizer
     {
         {
            const responseSynthesizer = new ResponseSynthesizer({
                ,
                serviceContext
            })
            queryEngine = SubQuestionQueryEngine.fromDefaults({
                responseSynthesizer,
                serviceContext,
                queryEngineTools,
                que
            })
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                responseBuilder: new CompactAndRefine(
                    serviceContext,
                    responseSynthesizerObj.textQAPromptTemplate,
                    responseSynthesizerObj.refinePromptTemplate
                ),
                serviceContext
            })
            queryEngine = SubQuestionQueryEngine.fromDefaults({
                responseSynthesizer,
                serviceContext,
                queryEngineTools,
                que
            })
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                responseBuilder: new Refine(
                    serviceContext,
                    responseSynthesizerObj.textQAPromptTemplate,
                    responseSynthesizerObj.refinePromptTemplate
                ),
                serviceContext
            })
            queryEngine = SubQuestionQueryEngine.fromDefaults({
                responseSynthesizer,
                serviceContext,
                queryEngineTools,
                que
            })
        } el {
            const responseSynthesizer = new ResponseSynthesizer({
                ,
                serviceContext
            })
            queryEngine = SubQuestionQueryEngine.fromDefaults({
                responseSynthesizer,
                serviceContext,
                queryEngineTools,
                que
            })
        }
    }

    return queryEngine
}

module.exports = { nodeClass: SubQuestionQueryEngine_LlamaIndex }
