import { Logger } from 'winston'
import { v4 as uuidv4 } from 'uuid'
import { Client } from 'langsmith'
import CallbackHandler from 'langfuse-langchain'
import lunary from 'lunary'
import { RunTree, RunTreeConfig, Client as LangsmithClient } from 'langsmith'
import { Langfuse, LangfuseTraceClient, LangfuseSpanClient, LangfuseGenerationClient } from 'langfuse'
import { LangChainInstrumentation } from '@arizeai/openinference-instrumentation-langchain'
import { Metadata } from '@grpc/grpc-js'
import opentelemetry, { Span, SpanStatusCode } from '@opentelemetry/api'
import { OTLPTraceExporter as GrpcOTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc'
import { OTLPTraceExporter as ProtoOTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { Resource } from '@opentelemetry/resources'
import { SimpleSpanProcessor, Tracer } from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions'

import { BaseCallbackHandler, NewTokenIndices, HandleLLMNewTokenCallbackFields } from '@langchain/core/callbacks/base'
import * as CallbackManagerModule from '@langchain/core/callbacks/manager'
import { LangChainTracer, LangChainTracerFields } from '@langchain/core/tracers/tracer_langchain'
import { BaseTracer, Run } from '@langchain/core/tracers/base'
import { ChainValues } from '@langchain/core/utils/types'
import { AgentAction } from '@langchain/core/agents'
import { LunaryHandler } from '@langchain/community/callbacks/handlers/lunary'

import { getCredentialData, getCredentialParam, getEnvironmentVariable } from './utils'
import { EvaluationRunTracer } from '../evaluation/EvaluationRunTracer'
import { EvaluationRunTracerLlama } from '../evaluation/EvaluationRunTracerLlama'
import { ICommonObject, IDatabaseEntity, INodeData, IServerSideEventStreamer } from './Interface'
import { LangWatch, LangWatchSpan, LangWatchTrace, autoconvertTypedValues } from 'langwatch'
import { DataSource } from 'typeorm'
import { ChatGenerationChunk } from '@langchain/core/outputs'
import { AIMessageChunk, BaseMessageLike } from '@langchain/core/messages'
import { Serialized } from '@langchain/core/load/serializable'

export interface AgentRun extends Run {
    actions: AgentAction[]
}

interface ArizeTracerOptions {
    apiKey: string
    spaceId: string
    baseUrl: string
    projectName: string
    sdkIntegration?: string
    sessionId?: string
    enableCallback?: boolean
}

fun: Tracer | undefined {
    const SEMRESATTRS_PROJECT_NAME = 'openinference.project.name'
    try {
        
        meta
        meta
        const traceExporter = new GrpcOTLPTraceExporter({
            url: `${options.baseUrl}/v1`,
            metadata
        })
        const tracerProvider = new NodeTracerProvider({
            resource: new Resource({
                [ATTR_SERVICE_NAME]: options.projectName,
                [ATTR_SERVICE_VERSION]: '1.0.0',
                [SEMRESATTRS_PROJECT_NAME]: options.projectName,
                model_id: options.projectName
            })
        })
        t)
         {
            registerInstrumentations({
                instrumentations: []
            })
            
            l
            t
        }
        .t}`)
    }  {
         
        return undefined
    }
}

interface PhoenixTracerOptions {
    apiKey: string
    baseUrl: string
    projectName: string
    sdkIntegration?: string
    sessionId?: string
    enableCallback?: boolean
}

fun: Tracer | undefined {
    const SEMRESATTRS_PROJECT_NAME = 'openinference.project.name'
    try {
        const traceExporter = new ProtoOTLPTraceExporter({
            url: `${options.baseUrl}/v1/traces`,
            headers: {
                api_key: options.apiKey
            }
        })
        const tracerProvider = new NodeTracerProvider({
            resource: new Resource({
                [ATTR_SERVICE_NAME]: options.projectName,
                [ATTR_SERVICE_VERSION]: '1.0.0',
                [SEMRESATTRS_PROJECT_NAME]: options.projectName
            })
        })
        t)
         {
            registerInstrumentations({
                instrumentations: []
            })
            
            l
            t
        }
        .t}`)
    }  {
         
        return undefined
    }
}

interface OpikTracerOptions {
    apiKey: string
    baseUrl: string
    projectName: string
    workspace: string
    sdkIntegration?: string
    sessionId?: string
    enableCallback?: boolean
}

fun: Tracer | undefined {
    const SEMRESATTRS_PROJECT_NAME = 'openinference.project.name'
    try {
        const traceExporter = new ProtoOTLPTraceExporter({
            url: `${options.baseUrl}/v1/private/otel/v1/traces`,
            headers: {
                Authorization: options.apiKey,
                projectName: options.projectName,
                'Comet-Workspace': options.workspace
            }
        })
        const tracerProvider = new NodeTracerProvider({
            resource: new Resource({
                [ATTR_SERVICE_NAME]: options.projectName,
                [ATTR_SERVICE_VERSION]: '1.0.0',
                [SEMRESATTRS_PROJECT_NAME]: options.projectName
            })
        })
        t)
         {
            registerInstrumentations({
                instrumentations: []
            })
            
            l
            t
        }
        .t}`)
    }  {
         
        return undefined
    }
}

fun {
    try {
         ?? '2')
    }  {
        return 2
    }
}

exp {
    try {
        )
    }  {
        return fallback
    }
}

exp: string {
     return ''
    const elapsed = run.end_time - run.start_time
     {
        return `${elapsed}ms`
    }
    .t}s`
}

export class ConsoleCallbackHandler extends BaseTracer {
    name = 'console_callback_handler' as const
    logger: Logger
    orgId?: string

    p {
        
    }

     {
        
        this.logger = logger
        this.orgId = orgId
         === 't {
            l ?? 'info'
        }
    }

    getPa {
        const parents: Run[] = []
        let currentRun = run
        wh {
            
             {
                pa
                currentRun = parent
            } else {
                break
            }
        }
        return parents
    }

    getB {
        .
        const string = [...parents, run]
            .map((pa => {
                const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`
                return name
            })
            .j
        return string
    }

     {
        

        this.logger.verbose(
            `}`
        )
    }

     {
        
        this.logger.verbose(
            `}] Exiting Chain run with output: ${tryJsonStringify(
                run.outputs,
                '[outputs]'
            )}`
        )
    }

     {
        
        this.logger.verbose(
            `}] Chain run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        
        .map((p) => p.t) } : run.inputs
        th}`)
    }

     {
        
        this.logger.verbose(
            `}] Exiting LLM run with output: ${tryJsonStringify(
                run.outputs,
                '[response]'
            )}`
        )
    }

     {
        
        this.logger.verbose(
            `}] LLM run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        
        th}"`)
    }

     {
        
        this.logger.verbose(
            `}] Ex}"`
        )
    }

     {
        
        this.logger.verbose(
            `}] Tool run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        const agentRun = run as AgentRun
        
        this.logger.verbose(
            `[${this.orgId}]: [agent/action] [${crumbs}] Agent selected action: ${tryJsonStringify(
                agentRun.actions[agentRun.actions.length - 1],
                '[action]'
            )}`
        )
    }
}

/**
 * Custom chain handler class
 */
export class CustomChainHandler extends BaseCallbackHandler {
    name = 'custom_chain_handler'
    isLLMStarted = false
    skipK = 0 // Skip streaming for first K numbers of handleLLMStart
    returnSourceDocuments = false
    cachedResponse = true
    chatId: string = ''
    sseStreamer: IServerSideEventStreamer | undefined

     {
        
        this.sseStreamer = sseStreamer
        this.chatId = chatId
        this.skipK = skipK ?? this.skipK
        this.returnSourceDocuments = returnSourceDocuments ?? this.returnSourceDocuments
    }

    han {
        this.cachedResponse = false
         this.skipK -= 1
    }

    handleLLMNewToken(
        token: string,
        idx?: NewTokenIndices,
        runId?: string,
        parentRunId?: string,
        tags?: string[],
        fields?: HandleLLMNewTokenCallbackFields
    ): void | Promise<void> {
         {
             {
                this.isLLMStarted = true
                 {
                    th
                }
            }
             {
                 {
                    const chunk = fields?.chunk as ChatGenerationChunk
                    const message = chunk?.message as AIMessageChunk
                    const toolCalls = message?.tool_call_chunks || []

                    // Only stream when token is not empty and not a tool call
                     {
                        th
                    }
                }
            }
        }
    }

    han {
         {
            th
        }
    }

    han: void | Promise<void> {
        /*
            Langchain does not call handleLLMStart, handleLLMEnd, handleLLMNewToken when the chain is cached.
            Callback Order is "Chain Start -> LLM Start --> LLM Token --> LLM End -> Chain End" for normal responses.
            Callback Order is "Chain Start -> Chain End" for cached responses.
         */
         {
            const cachedValue = outputs.text || outputs.response || outputs.output || outputs.output_text
            //split at whitespace, and keep the whitespace. This is to preserve the original formatting.
            /)
             => {
                 {
                     {
                        th
                    }
                }
                 {
                    th
                }
            })
             {
                th
            }
             {
                th
            }
        } else {
             {
                th
            }
        }
    }
}

/*TODO - Add llamaIndex tracer to non evaluation runs*/
class ExtendedLunaryHandler extends LunaryHandler {
    chatId: string
    appDataSource: DataSource
    databaseEntities: IDatabaseEntity
    currentRunId: string | null
    thread: any
    apiMessageId: string

     {
        
        this.appDataSource = flowiseOptions.appDataSource
        this.databaseEntities = flowiseOptions.databaseEntities
        this.chatId = flowiseOptions.chatId
        this.apiMessageId = flowiseOptions.apiMessageId
    }

    a {
        .findOne({
            where: {
                chatId: this.chatId
            }
        })

        const userId = entity?.email ?? entity?.id

        this.thread = lunary.openThread({
            id: this.chatId,
            userId,
            userProps: userId
                ? {
                      name: entity?.name ?? undefined,
                      email: entity?.email ?? undefined,
                      phone: entity?.phone ?? undefined
                  }
                : undefined
        })
    }

    a: Promise<void> {
        // F is the user message
         {
             {
                awa
            }

            const messageText = inputs.input || inputs.question

            const messageId = this.thread.trackMessage({
                content: messageText,
                role: 'user'
            })

            // Track top level chain id for knowing when we got the final reply
            this.currentRunId = runId

            // Use the messageId as the parent of the chain for reconciliation
            
        } else {
            
        }
    }

    a: Promise<void> {
         {
            const answer = outputs.output

            this.thread.trackMessage({
                id: this.apiMessageId,
                content: answer,
                role: 'assistant'
            })

            this.currentRunId = null
        }

        
    }
}

exp => {
    try {
         return []

        
        const callbacks: any = []

        f {
            const providerStatus = analytic[provider].status as boolean
             {
                const credentialId = analytic[provider].credentialId as string
                
                 {
                    const langSmithProject = analytic[provider].projectName as string

                    
                    

                    const client = new Client({
                        apiUrl: langSmithEndpoint ?? 'https://api.smith.langchain.com',
                        apiKey: langSmithApiKey
                    })

                    let langSmithField: LangChainTracerFields = {
                        projectName: langSmithProject ?? 'default',
                        //@ts-ignore
                        client
                    }

                     {
                        langSmithField = { ...langSmithField, ...nodeData?.inputs?.analytics?.langSmith }
                    }

                    
                    
                } el {
                    const release = analytic[provider].release as string

                    
                    
                    

                    let langFuseOptions: any = {
                        secretKey: langFuseSecretKey,
                        publicKey: langFusePublicKey,
                        baseUrl: langFuseEndpoint ?? 'https://cloud.langfuse.com',
                        sdkIntegration: 'Flowise'
                    }
                     langFuseOptions.release = release
                     langFuseOptions.sessionId = options.chatId

                     {
                        langFuseOptions = { ...langFuseOptions, ...nodeData?.inputs?.analytics?.langFuse }
                    }

                    
                    
                } el {
                    
                    

                    let lunaryFields = {
                        publicKey: lunaryPublicKey,
                        apiUrl: lunaryEndpoint ?? 'https://api.lunary.ai',
                        runtime: 'flowise',
                        flowiseOptions: options
                    }

                     {
                        lunaryFields = { ...lunaryFields, ...nodeData?.inputs?.analytics?.lunary }
                    }

                    

                    
                } el {
                     {
                        new Evaluat
                    } else {
                        
                        
                    }
                } el {
                    
                    

                    const langwatch = new LangWatch({
                        apiKey: langWatchApiKey,
                        endpoint: langWatchEndpoint
                    })

                    
                    )
                } el {
                    
                    
                    
                    const arizeProject = analytic[provider].projectName as string

                    let arizeOptions: ArizeTracerOptions = {
                        apiKey: arizeApiKey,
                        spaceId: arizeSpaceId,
                        baseUrl: arizeEndpoint ?? 'https://otlp.arize.com',
                        projectName: arizeProject ?? 'default',
                        sdkIntegration: 'Flowise',
                        enableCallback: true
                    }

                     arizeOptions.sessionId = options.chatId
                     {
                        arizeOptions = { ...arizeOptions, ...nodeData?.inputs?.analytics?.arize }
                    }

                    
                    
                } el {
                    
                    
                    const phoenixProject = analytic[provider].projectName as string

                    let phoenixOptions: PhoenixTracerOptions = {
                        apiKey: phoenixApiKey,
                        baseUrl: phoenixEndpoint ?? 'https://app.phoenix.arize.com',
                        projectName: phoenixProject ?? 'default',
                        sdkIntegration: 'Flowise',
                        enableCallback: true
                    }

                     phoenixOptions.sessionId = options.chatId
                     {
                        phoenixOptions = { ...phoenixOptions, ...nodeData?.inputs?.analytics?.phoenix }
                    }

                    
                    
                } el {
                    
                    
                    
                    const opikProject = analytic[provider].opikProjectName as string

                    let opikOptions: OpikTracerOptions = {
                        apiKey: opikApiKey,
                        baseUrl: opikEndpoint ?? 'https://www.comet.com/opik/api',
                        projectName: opikProject ?? 'default',
                        workspace: opikWorkspace ?? 'default',
                        sdkIntegration: 'Flowise',
                        enableCallback: true
                    }

                     opikOptions.sessionId = options.chatId
                     {
                        opikOptions = { ...opikOptions, ...nodeData?.inputs?.analytics?.opik }
                    }

                    
                    
                }
            }
        }
        return callbacks
    }  {
        th
    }
}

export class AnalyticHandler {
    p
    private nodeData: INodeData
    private options: ICommonObject
    private handlers: ICommonObject = {}
    private initialized: boolean = false
    private analyticsConfig: string | undefined
    private chatId: string
    private createdAt: number

    p {
        this.nodeData = nodeData
        this.options = options
        this.analyticsConfig = options.analytic
        this.chatId = options.chatId
        th
    }

    : AnalyticHandler {
        const chatId = options.chatId
         th

        // Reset instance if analytics config changed for this chat
        
         {
            Analyt
        }

        ) {
            Analyt)
        }
        !
    }

    : void {
        Analyt
    }

    // Keep this as backup for orphaned instances
    : void {
        
        f {
             {
                Analyt
            }
        }
    }

    a {
         return

        try {
             return

            
            f {
                const providerStatus = analytic[provider].status as boolean
                 {
                    const credentialId = analytic[provider].credentialId as string
                    
                    awa
                }
            }
            this.initialized = true
        }  {
            th
        }
    }

    // A
    getHan: ICommonObject {
        return this.handlers
    }

    a {
         {
            const langSmithProject = providerConfig.projectName as string
            
            

            const client = new LangsmithClient({
                apiUrl: langSmithEndpoint ?? 'https://api.smith.langchain.com',
                apiKey: langSmithApiKey
            })

            this.handlers['langSmith'] = { client, langSmithProject }
        } el {
            const release = providerConfig.release as string
            
            
            

            const langfuse = new Langfuse({
                secretKey: langFuseSecretKey,
                publicKey: langFusePublicKey,
                baseUrl: langFuseEndpoint ?? 'https://cloud.langfuse.com',
                sdkIntegration: 'Flowise',
                release
            })
            this.handlers['langFuse'] = { client: langfuse }
        } el {
            
            

            lunary.init({
                publicKey: lunaryPublicKey,
                apiUrl: lunaryEndpoint,
                runtime: 'flowise'
            })

            this.handlers['lunary'] = { client: lunary }
        } el {
            
            

            const langwatch = new LangWatch({
                apiKey: langWatchApiKey,
                endpoint: langWatchEndpoint
            })

            this.handlers['langWatch'] = { client: langwatch }
        } el {
            
            
            
            const arizeProject = providerConfig.projectName as string

            let arizeOptions: ArizeTracerOptions = {
                apiKey: arizeApiKey,
                spaceId: arizeSpaceId,
                baseUrl: arizeEndpoint ?? 'https://otlp.arize.com',
                projectName: arizeProject ?? 'default',
                sdkIntegration: 'Flowise',
                enableCallback: false
            }

            
            const rootSpan: Span | undefined = undefined

            this.handlers['arize'] = { client: arize, arizeProject, rootSpan }
        } el {
            
            
            const phoenixProject = providerConfig.projectName as string

            let phoenixOptions: PhoenixTracerOptions = {
                apiKey: phoenixApiKey,
                baseUrl: phoenixEndpoint ?? 'https://app.phoenix.arize.com',
                projectName: phoenixProject ?? 'default',
                sdkIntegration: 'Flowise',
                enableCallback: false
            }

            
            const rootSpan: Span | undefined = undefined

            this.handlers['phoenix'] = { client: phoenix, phoenixProject, rootSpan }
        } el {
            
            
            
            const opikProject = providerConfig.opikProjectName as string

            let opikOptions: OpikTracerOptions = {
                apiKey: opikApiKey,
                baseUrl: opikEndpoint ?? 'https://www.comet.com/opik/api',
                projectName: opikProject ?? 'default',
                workspace: opikWorkspace ?? 'default',
                sdkIntegration: 'Flowise',
                enableCallback: false
            }

            
            const rootSpan: Span | undefined = undefined

            this.handlers['opik'] = { client: opik, opikProject, rootSpan }
        }
    }

    a {
        const returnIds: ICommonObject = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {},
            arize: {},
            phoenix: {},
            opik: {}
        }

        ) {
            .length) {
                const parentRunConfig: RunTreeConfig = {
                    name,
                    run_type: 'chain',
                    inputs: {
                        text: input
                    },
                    serialized: {},
                    project_name: this.handlers['langSmith'].langSmithProject,
                    client: this.handlers['langSmith'].client,
                    ...this.nodeData?.inputs?.analytics?.langSmith
                }
                
                awa
                this.handlers['langSmith'].chainRun = { [parentRun.id]: parentRun }
                returnIds['langSmith'].chainRun = parentRun.id
            } else {
                const parentRun: RunTree | undefined = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun]
                 {
                    const childChainRun = await parentRun.createChild({
                        name,
                        run_type: 'chain',
                        inputs: {
                            text: input
                        }
                    })
                    awa
                    this.handlers['langSmith'].chainRun = { [childChainRun.id]: childChainRun }
                    returnIds['langSmith'].chainRun = childChainRun.id
                }
            }
        }

        ) {
            let langfuseTraceClient: LangfuseTraceClient

            .length) {
                const langfuse: Langfuse = this.handlers['langFuse'].client
                langfuseTraceClient = langfuse.trace({
                    name,
                    sessionId: this.options.chatId,
                    metadata: { tags: ['openai-assistant'] },
                    ...this.nodeData?.inputs?.analytics?.langFuse
                })
            } else {
                langfuseTraceClient = this.handlers['langFuse'].trace[parentIds['langFuse']]
            }

             {
                langfuseTraceClient.update({
                    input: {
                        text: input
                    }
                })
                const span = langfuseTraceClient.span({
                    name,
                    input: {
                        text: input
                    }
                })
                this.handlers['langFuse'].trace = { [langfuseTraceClient.id]: langfuseTraceClient }
                this.handlers['langFuse'].span = { [span.id]: span }
                returnIds['langFuse'].trace = langfuseTraceClient.id
                returnIds['langFuse'].span = span.id
            }
        }

        ) {
            const monitor = this.handlers['lunary'].client

             {
                
                await monitor.trackEvent('chain', 'start', {
                    runId,
                    name,
                    input,
                    ...this.nodeData?.inputs?.analytics?.lunary
                })
                this.handlers['lunary'].chainEvent = { [runId]: runId }
                returnIds['lunary'].chainEvent = runId
            }
        }

        ) {
            let langwatchTrace: LangWatchTrace

            .length) {
                const langwatch: LangWatch = this.handlers['langWatch'].client
                langwatchTrace = langwatch.getTrace({
                    name,
                    metadata: { tags: ['openai-assistant'], threadId: this.options.chatId },
                    ...this.nodeData?.inputs?.analytics?.langWatch
                })
            } else {
                langwatchTrace = this.handlers['langWatch'].trace[parentIds['langWatch']]
            }

             {
                const span = langwatchTrace.startSpan({
                    name,
                    type: 'chain',
                    
                })
                this.handlers['langWatch'].trace = { [langwatchTrace.traceId]: langwatchTrace }
                this.handlers['langWatch'].span = { [span.spanId]: span }
                returnIds['langWatch'].trace = langwatchTrace.traceId
                returnIds['langWatch'].span = span.spanId
            }
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['arize'].client
            let rootSpan: Span | undefined = this.handlers['arize'].rootSpan

            .length) {
                 : undefined
                 {
                    
                    
                    
                    
                    
                    
                    
                    
                }
                this.handlers['arize'].rootSpan = rootSpan
            }

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                
                )
                
            }
            .spanId

            this.handlers['arize'].chainSpan = { [chainSpanId]: chainSpan }
            returnIds['arize'].chainSpan = chainSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['phoenix'].client
            let rootSpan: Span | undefined = this.handlers['phoenix'].rootSpan

            .length) {
                 : undefined
                 {
                    
                    
                    
                    
                    
                    
                    
                    
                }
                this.handlers['phoenix'].rootSpan = rootSpan
            }

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                
                )
                
            }
            .spanId

            this.handlers['phoenix'].chainSpan = { [chainSpanId]: chainSpan }
            returnIds['phoenix'].chainSpan = chainSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['opik'].client
            let rootSpan: Span | undefined = this.handlers['opik'].rootSpan

            .length) {
                 : undefined
                 {
                    
                    
                    
                    
                    
                    
                    
                    
                }
                this.handlers['opik'].rootSpan = rootSpan
            }

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                
                )
                
            }
            .spanId

            this.handlers['opik'].chainSpan = { [chainSpanId]: chainSpan }
            returnIds['opik'].chainSpan = chainSpanId
        }

        return returnIds
    }

    a {
        ) {
            const chainRun: RunTree | undefined = this.handlers['langSmith'].chainRun[returnIds['langSmith'].chainRun]
             {
                await chainRun.end({
                    outputs: {
                        output
                    }
                })
                awa
            }
        }

        ) {
            const span: LangfuseSpanClient | undefined = this.handlers['langFuse'].span[returnIds['langFuse'].span]
             {
                span.end({
                    output
                })
                const langfuseTraceClient = this.handlers['langFuse'].trace[returnIds['langFuse'].trace]
                 {
                    langfuseTraceClient.update({
                        output: {
                            output
                        }
                    })
                }
                 {
                    const langfuse: Langfuse = this.handlers['langFuse'].client
                    awa
                }
            }
        }

        ) {
            const chainEventId = returnIds['lunary'].chainEvent
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('chain', 'end', {
                    runId: chainEventId,
                    output
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    
                })
            }
        }

        ) {
            const chainSpan: Span | undefined = this.handlers['arize'].chainSpan[returnIds['arize'].chainSpan]
             {
                )
                
                
                
            }
        }

        ) {
            const chainSpan: Span | undefined = this.handlers['phoenix'].chainSpan[returnIds['phoenix'].chainSpan]
             {
                )
                
                
                
            }
        }

        ) {
            const chainSpan: Span | undefined = this.handlers['opik'].chainSpan[returnIds['opik'].chainSpan]
             {
                )
                
                
                
            }
        }

         {
            // Cleanup this instance when chain ends
            Analyt
        }
    }

    a {
        ) {
            const chainRun: RunTree | undefined = this.handlers['langSmith'].chainRun[returnIds['langSmith'].chainRun]
             {
                await chainRun.end({
                    error: {
                        error
                    }
                })
                awa
            }
        }

        ) {
            const span: LangfuseSpanClient | undefined = this.handlers['langFuse'].span[returnIds['langFuse'].span]
             {
                span.end({
                    output: {
                        error
                    }
                })
                const langfuseTraceClient = this.handlers['langFuse'].trace[returnIds['langFuse'].trace]
                 {
                    langfuseTraceClient.update({
                        output: {
                            error
                        }
                    })
                }
                 {
                    const langfuse: Langfuse = this.handlers['langFuse'].client
                    awa
                }
            }
        }

        ) {
            const chainEventId = returnIds['lunary'].chainEvent
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('chain', 'end', {
                    runId: chainEventId,
                    output: error
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    error
                })
            }
        }

        ) {
            const chainSpan: Span | undefined = this.handlers['arize'].chainSpan[returnIds['arize'].chainSpan]
             {
                )
                
                 })
                
            }
        }

        ) {
            const chainSpan: Span | undefined = this.handlers['phoenix'].chainSpan[returnIds['phoenix'].chainSpan]
             {
                )
                
                 })
                
            }
        }

         {
            // Cleanup this instance when chain ends
            Analyt
        }
    }

    a {
        const returnIds: ICommonObject = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {},
            arize: {},
            phoenix: {}
        }

        ) {
            const parentRun: RunTree | undefined = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun]

             {
                const inputs: any = {}
                ) {
                    inputs.messages = input
                } else {
                    inputs.prompts = [input]
                }
                const childLLMRun = await parentRun.createChild({
                    name,
                    run_type: 'llm',
                    inputs
                })
                awa
                this.handlers['langSmith'].llmRun = { [childLLMRun.id]: childLLMRun }
                returnIds['langSmith'].llmRun = childLLMRun.id
            }
        }

        ) {
            const trace: LangfuseTraceClient | undefined = this.handlers['langFuse'].trace[parentIds['langFuse'].trace]
             {
                const generation = trace.generation({
                    name,
                    input: input
                })
                this.handlers['langFuse'].generation = { [generation.id]: generation }
                returnIds['langFuse'].generation = generation.id
            }
        }

        ) {
            const monitor = this.handlers['lunary'].client
            const chainEventId: string = this.handlers['lunary'].chainEvent[parentIds['lunary'].chainEvent]

             {
                
                await monitor.trackEvent('llm', 'start', {
                    runId,
                    parentRunId: chainEventId,
                    name,
                    input
                })
                this.handlers['lunary'].llmEvent = { [runId]: runId }
                returnIds['lunary'].llmEvent = runId
            }
        }

        ) {
            const trace: LangWatchTrace | undefined = this.handlers['langWatch'].trace[parentIds['langWatch'].trace]
             {
                const span = trace.startLLMSpan({
                    name,
                    
                })
                this.handlers['langWatch'].span = { [span.spanId]: span }
                returnIds['langWatch'].span = span.spanId
            }
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['arize'].client
            const rootSpan: Span | undefined = this.handlers['arize'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                llmSpan.
                llmSpan.)
                llmSpan.
            }
            .spanId

            this.handlers['arize'].llmSpan = { [llmSpanId]: llmSpan }
            returnIds['arize'].llmSpan = llmSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['phoenix'].client
            const rootSpan: Span | undefined = this.handlers['phoenix'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                llmSpan.
                llmSpan.)
                llmSpan.
            }
            .spanId

            this.handlers['phoenix'].llmSpan = { [llmSpanId]: llmSpan }
            returnIds['phoenix'].llmSpan = llmSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['opik'].client
            const rootSpan: Span | undefined = this.handlers['opik'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                llmSpan.
                llmSpan.)
                llmSpan.
            }
            .spanId

            this.handlers['opik'].llmSpan = { [llmSpanId]: llmSpan }
            returnIds['opik'].llmSpan = llmSpanId
        }

        return returnIds
    }

    a {
        ) {
            const llmRun: RunTree | undefined = this.handlers['langSmith'].llmRun[returnIds['langSmith'].llmRun]
             {
                await llmRun.end({
                    outputs: {
                        generations: [output]
                    }
                })
                awa
            }
        }

        ) {
            const generation: LangfuseGenerationClient | undefined = this.handlers['langFuse'].generation[returnIds['langFuse'].generation]
             {
                generation.end({
                    output: output
                })
            }
        }

        ) {
            const llmEventId: string = this.handlers['lunary'].llmEvent[returnIds['lunary'].llmEvent]
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('llm', 'end', {
                    runId: llmEventId,
                    output
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    
                })
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['arize'].llmSpan[returnIds['arize'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan.
                llmSpan.en
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['phoenix'].llmSpan[returnIds['phoenix'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan.
                llmSpan.en
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['opik'].llmSpan[returnIds['opik'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan.
                llmSpan.en
            }
        }
    }

    a {
        ) {
            const llmRun: RunTree | undefined = this.handlers['langSmith'].llmRun[returnIds['langSmith'].llmRun]
             {
                await llmRun.end({
                    error: {
                        error
                    }
                })
                awa
            }
        }

        ) {
            const generation: LangfuseGenerationClient | undefined = this.handlers['langFuse'].generation[returnIds['langFuse'].generation]
             {
                generation.end({
                    output: error
                })
            }
        }

        ) {
            const llmEventId: string = this.handlers['lunary'].llmEvent[returnIds['lunary'].llmEvent]
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('llm', 'end', {
                    runId: llmEventId,
                    output: error
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    error
                })
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['arize'].llmSpan[returnIds['arize'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan. })
                llmSpan.en
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['phoenix'].llmSpan[returnIds['phoenix'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan. })
                llmSpan.en
            }
        }

        ) {
            const llmSpan: Span | undefined = this.handlers['opik'].llmSpan[returnIds['opik'].llmSpan]
             {
                llmSpan.)
                llmSpan.
                llmSpan. })
                llmSpan.en
            }
        }
    }

    a {
        const returnIds: ICommonObject = {
            langSmith: {},
            langFuse: {},
            lunary: {},
            langWatch: {},
            arize: {},
            phoenix: {},
            opik: {}
        }

        ) {
            const parentRun: RunTree | undefined = this.handlers['langSmith'].chainRun[parentIds['langSmith'].chainRun]
             {
                const childToolRun = await parentRun.createChild({
                    name,
                    run_type: 'tool',
                    inputs: {
                        input
                    }
                })
                awa
                this.handlers['langSmith'].toolRun = { [childToolRun.id]: childToolRun }
                returnIds['langSmith'].toolRun = childToolRun.id
            }
        }

        ) {
            const trace: LangfuseTraceClient | undefined = this.handlers['langFuse'].trace[parentIds['langFuse'].trace]
             {
                const toolSpan = trace.span({
                    name,
                    input
                })
                this.handlers['langFuse'].toolSpan = { [toolSpan.id]: toolSpan }
                returnIds['langFuse'].toolSpan = toolSpan.id
            }
        }

        ) {
            const monitor = this.handlers['lunary'].client
            const chainEventId: string = this.handlers['lunary'].chainEvent[parentIds['lunary'].chainEvent]

             {
                
                await monitor.trackEvent('tool', 'start', {
                    runId,
                    parentRunId: chainEventId,
                    name,
                    input
                })
                this.handlers['lunary'].toolEvent = { [runId]: runId }
                returnIds['lunary'].toolEvent = runId
            }
        }

        ) {
            const trace: LangWatchTrace | undefined = this.handlers['langWatch'].trace[parentIds['langWatch'].trace]
             {
                const span = trace.startSpan({
                    name,
                    type: 'tool',
                    
                })
                this.handlers['langWatch'].span = { [span.spanId]: span }
                returnIds['langWatch'].span = span.spanId
            }
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['arize'].client
            const rootSpan: Span | undefined = this.handlers['arize'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                t
                t)
                t
            }
            .spanId

            this.handlers['arize'].toolSpan = { [toolSpanId]: toolSpan }
            returnIds['arize'].toolSpan = toolSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['phoenix'].client
            const rootSpan: Span | undefined = this.handlers['phoenix'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                t
                t)
                t
            }
            .spanId

            this.handlers['phoenix'].toolSpan = { [toolSpanId]: toolSpan }
            returnIds['phoenix'].toolSpan = toolSpanId
        }

        ) {
            const tracer: Tracer | undefined = this.handlers['opik'].client
            const rootSpan: Span | undefined = this.handlers['opik'].rootSpan

            const rootSpanContext = rootSpan
                ? , 
                : 
            
             {
                t
                t)
                t
            }
            .spanId

            this.handlers['opik'].toolSpan = { [toolSpanId]: toolSpan }
            returnIds['opik'].toolSpan = toolSpanId
        }

        return returnIds
    }

    a {
        ) {
            const toolRun: RunTree | undefined = this.handlers['langSmith'].toolRun[returnIds['langSmith'].toolRun]
             {
                await toolRun.end({
                    outputs: {
                        output
                    }
                })
                awa
            }
        }

        ) {
            const toolSpan: LangfuseSpanClient | undefined = this.handlers['langFuse'].toolSpan[returnIds['langFuse'].toolSpan]
             {
                toolSpan.end({
                    output
                })
            }
        }

        ) {
            const toolEventId: string = this.handlers['lunary'].toolEvent[returnIds['lunary'].toolEvent]
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('tool', 'end', {
                    runId: toolEventId,
                    output
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    
                })
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['arize'].toolSpan[returnIds['arize'].toolSpan]
             {
                t)
                t
                t
                t
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['phoenix'].toolSpan[returnIds['phoenix'].toolSpan]
             {
                t)
                t
                t
                t
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['opik'].toolSpan[returnIds['opik'].toolSpan]
             {
                t)
                t
                t
                t
            }
        }
    }

    a {
        ) {
            const toolRun: RunTree | undefined = this.handlers['langSmith'].toolRun[returnIds['langSmith'].toolRun]
             {
                await toolRun.end({
                    error: {
                        error
                    }
                })
                awa
            }
        }

        ) {
            const toolSpan: LangfuseSpanClient | undefined = this.handlers['langFuse'].toolSpan[returnIds['langFuse'].toolSpan]
             {
                toolSpan.end({
                    output: error
                })
            }
        }

        ) {
            const toolEventId: string = this.handlers['lunary'].llmEvent[returnIds['lunary'].toolEvent]
            const monitor = this.handlers['lunary'].client

             {
                await monitor.trackEvent('tool', 'end', {
                    runId: toolEventId,
                    output: error
                })
            }
        }

        ) {
            const span: LangWatchSpan | undefined = this.handlers['langWatch'].span[returnIds['langWatch'].span]
             {
                span.end({
                    error
                })
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['arize'].toolSpan[returnIds['arize'].toolSpan]
             {
                t)
                t
                t })
                t
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['phoenix'].toolSpan[returnIds['phoenix'].toolSpan]
             {
                t)
                t
                t })
                t
            }
        }

        ) {
            const toolSpan: Span | undefined = this.handlers['opik'].toolSpan[returnIds['opik'].toolSpan]
             {
                t)
                t
                t })
                t
            }
        }
    }
}

/**
 * Custom callback handler for streaming detailed intermediate information
 * during agent execution, specifically tool invocation inputs and outputs.
 */
export class CustomStreamingHandler extends BaseCallbackHandler {
    name = 'custom_streaming_handler'

    private sseStreamer: IServerSideEventStreamer
    private chatId: string

     {
        
        this.sseStreamer = sseStreamer
        this.chatId = chatId
    }

    /**
     * Handle the start of a tool invocation
     */
    a: Promise<void> {
         return

        const toolName = typeof tool === 'object' && tool.name ? tool.name : 'unknown-tool'
        

        // Stream the tool invocation details using the agent_trace event type for consistency
        this.sseStreamer.streamCustomEvent(this.chatId, 'agent_trace', {
            step: 'tool_start',
            name: toolName,
            input: toolInput,
            runId,
            parentRunId: parentRunId || null
        })
    }

    /**
     * Handle the end of a tool invocation
     */
    a: Promise<void> {
         return

        

        // Stream the tool output details using the agent_trace event type for consistency
        this.sseStreamer.streamCustomEvent(this.chatId, 'agent_trace', {
            step: 'tool_end',
            output: toolOutput,
            runId,
            parentRunId: parentRunId || null
        })
    }

    /**
     * Handle tool errors
     */
    a: Promise<void> {
         return

        // Stream the tool error details using the agent_trace event type for consistency
        this.sseStreamer.streamCustomEvent(this.chatId, 'agent_trace', {
            step: 'tool_error',
            error: error.message,
            runId,
            parentRunId: parentRunId || null
        })
    }

    /**
     * Handle agent actions
     */
    a: Promise<void> {
         return

        // Stream the agent action details using the agent_trace event type for consistency
        this.sseStreamer.streamCustomEvent(this.chatId, 'agent_trace', {
            step: 'agent_action',
            a,
            runId,
            parentRunId: parentRunId || null
        })
    }
}
