import { flatten } from 'lodash'
import { ChainValues } from '@langchain/core/utils/types'
import { AgentStep, AgentAction } from '@langchain/core/agents'
import { BaseMessage, FunctionMessage, AIMessage, isBaseMessage } from '@langchain/core/messages'
import { ToolCall } from '@langchain/core/messages/tool'
import { OutputParserException, BaseOutputParser, BaseLLMOutputParser } from '@langchain/core/output_parsers'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { CallbackManager, CallbackManagerForChainRun, Callbacks } from '@langchain/core/callbacks/manager'
import { ToolInputParsingException, Tool, StructuredToolInterface } from '@langchain/core/tools'
import { Runnable, RunnableSequence, RunnablePassthrough, type RunnableConfig } from '@langchain/core/runnables'
import { Serializable } from '@langchain/core/load/serializable'
import { renderTemplate } from '@langchain/core/prompts'
import { ChatGeneration } from '@langchain/core/outputs'
import { Document } from '@langchain/core/documents'
import { BaseChain, SerializedLLMChain } from 'langchain/chains'
import {
    CreateReactAgentParams,
    AgentExecutorInput,
    AgentActionOutputParser,
    BaseSingleActionAgent,
    BaseMultiActionAgent,
    RunnableAgent,
    StoppingMethod
} from 'langchain/agents'
import { formatLogToString } from 'langchain/agents/format_scratchpad/log'
import { IUsedTool } from './Interface'
import { getErrorMessage } from './error'

export const SOURCE_DOCUMENTS_PREFIX = '\n\n----FLOWISE_SOURCE_DOCUMENTS----\n\n'
export const ARTIFACTS_PREFIX = '\n\n----FLOWISE_ARTIFACTS----\n\n'
export const TOOL_ARGS_PREFIX = '\n\n----FLOWISE_TOOL_ARGS----\n\n'

export type AgentFinish = {
    returnValues: Record<string, any>
    log: string
}
type AgentExecutorOutput = ChainValues
interface AgentExecutorIteratorInput {
    agentExecutor: AgentExecutor
    inputs: Record<string, string>
    config?: RunnableConfig
    callbacks?: Callbacks
    tags?: string[]
    metadata?: Record<string, unknown>
    runName?: string
    runManager?: CallbackManagerForChainRun
}

//TODO: stream tools back
export class AgentExecutorIterator extends Serializable implements AgentExecutorIteratorInput {
    lc_namespace = ['langchain', 'agents', 'executor_iterator']

    agentExecutor: AgentExecutor

    inputs: Record<string, string>

    config?: RunnableConfig

    callbacks: Callbacks

    tags: string[] | undefined

    metadata: Record<string, unknown> | undefined

    runName: string | undefined

    private _finalOutputs: Record<string, unknown> | undefined

    get f: Record<string, unknown> | undefined {
        return this._finalOutputs
    }

    /** Intended to be used as a setter method, needs to be async. */
    a {
        this._finalOutputs = undefined
         {
            
            this._finalOutputs = preparedOutputs
        }
    }

    runManager: CallbackManagerForChainRun | undefined

    intermediateSteps: AgentStep[] = []

    iterations = 0

    get nameT: Record<string, Tool> {
         => ({
            [tool.name]: tool
        }))
        
    }

     {
        
        this.agentExecutor = fields.agentExecutor
        this.inputs = fields.inputs
        this.tags = fields.tags
        this.metadata = fields.metadata
        this.runName = fields.runName
        this.runManager = fields.runManager
        this.config = fields.config
    }

    /**
     * Reset the iterator to its initial state, clearing intermediate steps,
     * iterations, and the final output.
     */
    : void {
        this.intermediateSteps = []
        this.iterations = 0
        this._finalOutputs = undefined
    }

    up: void {
        this.iterations += 1
    }

    a {
        th

        // Loop to handle iteration
        wh {
            try {
                 {
                    awa
                }

                
                yield result
            }  {
                ) {
                     {
                        throw e
                    }
                    return this.finalOutputs
                }
                 {
                    awa
                }
                throw e
            }
        }
    }

    /**
     * Perform any necessary setup for the first step
     * of the asynchronous iterator.
     */
    a: Promise<void> {
         {
            const callbackManager = await CallbackManager.configure(
                this.callbacks,
                this.agentExecutor.callbacks,
                this.tags,
                this.agentExecutor.tags,
                this.metadata,
                this.agentExecutor.metadata,
                {
                    verbose: this.agentExecutor.verbose
                }
            )
            this.runManager = await callbackManager?.handleChainStart(
                th,
                this.inputs,
                undefined,
                undefined,
                this.tags,
                this.metadata,
                this.runName
            )
        }
    }

    /**
     * Execute the next step in the chain using the
     * AgentExecutor's _takeNextStep method.
     */
    a: Promise<AgentFinish | AgentStep[]> {
        
    }

    /**
     * Process the output of the next step,
     * handling AgentFinish and tool return cases.
     */
    async _processNextStepOutput(
        nextStepOutput: AgentFinish | AgentStep[],
        runManager?: CallbackManagerForChainRun
    ): Promise<Record<string, string | AgentStep[]>> {
         {
            
             {
                awa
            }
            awa
            return output
        }

        th

        let output: Record<string, string | AgentStep[]> = {}
         && nextStepOutput.length === 1) {
            const nextStep = nextStepOutput[0]
            
             {
                
                 {
                    awa
                }
                awa
            }
        }
        output = { intermediateSteps: nextStepOutput as AgentStep[] }
        return output
    }

    a: Promise<Record<string, unknown>> {
        const output = await this.agentExecutor.agent.returnStoppedResponse(
            this.agentExecutor.earlyStoppingMethod,
            this.intermediateSteps,
            this.inputs
        )
        
        awa
        return returnedOutput
    }

    a: Promise<Record<string, unknown>> {
        // f
         {
            th}`)
        }
        // t
        ) {
            
        }
        
        
        th
        return output
    }
}

export class AgentExecutor extends BaseChain<ChainValues, AgentExecutorOutput> {
     {
        return 'AgentExecutor'
    }

    get l {
        return ['langchain', 'agents', 'executor']
    }

    agent: BaseSingleActionAgent | BaseMultiActionAgent

    tools: this['agent']['ToolType'][]

    returnIntermediateSteps = false

    maxIterations?: number = 15

    earlyStoppingMethod: StoppingMethod = 'force'

    sessionId?: string

    chatId?: string

    input?: string

    isXML?: boolean

    /**
     * How to handle errors raised by the agent's output parser.
        Defaults to `False`, which raises the error.

        If `true`, the error will be sent back to the LLM as an observation.
        If a string, the string itself will be sent to the LLM as an observation.
        If a callable function, the function will be called with the exception
        as an argument, and the result of that function will be passed to the agent
        as an observation.
    */
    han =>  = false

    han => string

    get  {
        return this.agent.inputKeys
    }

    get  {
        return this.agent.returnValues
    }

     {
        let agent: BaseSingleActionAgent | BaseMultiActionAgent
        ) {
            agent = new RunnableAgent({ 
        } else {
            agent = input.agent
        }

        
        this.agent = agent
        this.tools = input.tools
        this.handleParsingErrors = input.handleParsingErrors ?? this.handleParsingErrors
        /* Getting rid of this because RunnableAgent doesnt allow return direct
         === "mult {
            f {
               {
                throw new Error(
                  `Tool with return direct ${tool.name} not supported for multi-action agent.`
                );
              }
            }
        }*/
        this.returnIntermediateSteps = input.returnIntermediateSteps ?? this.returnIntermediateSteps
        this.maxIterations = input.maxIterations ?? this.maxIterations
        this.earlyStoppingMethod = input.earlyStoppingMethod ?? this.earlyStoppingMethod
        this.sessionId = input.sessionId
        this.chatId = input.chatId
        this.input = input.input
        this.isXML = input.isXML
    }

    static fromAgentAndTools(
        fields: AgentExecutorInput & { sessionId?: string; chatId?: string; input?: string; isXML?: boolean }
    ): AgentExecutor {
        
         newInstance.sessionId = fields.sessionId
         newInstance.chatId = fields.chatId
         newInstance.input = fields.input
         newInstance.isXML = fields.isXML
        return newInstance
    }

    get  {
        
    }

    /**
     * Method that checks if the agent execution should continue based on the
     * number of iterations.
     * @param iterations The current number of iterations.
     * @returns A boolean indicating whether the agent execution should continue.
     */
    p: boolean {
        return this.maxIterations === undefined || iterations < this.maxIterations
    }

    a: Promise<AgentExecutorOutput> {
         => , t]))

        const steps: AgentStep[] = []
        let iterations = 0
        let sourceDocuments: Array<Document> = []
        const usedTools: IUsedTool[] = []
        let artifacts: any[] = []

        : Promise<AgentExecutorOutput> => {
            const { returnValues } = finishStep
            
             a
             additional.usedTools = usedTools
             a
             {
                return { ...returnValues, intermediateSteps: steps, ...additional }
            }
            awa
            return { ...returnValues, ...additional }
        }

        wh) {
            let output
            try {
                , 
            }  {
                 {
                    let observation
                    let text = e.message
                     {
                         {
                            observation = e.observation
                            text = e.llmOutput ?? ''
                        } else {
                            observation = 'Invalid or incomplete response'
                        }
                    } el {
                        observation = this.handleParsingErrors
                    } el {
                        
                    } else {
                        throw e
                    }
                    output = {
                        tool: '_Exception',
                        toolInput: observation,
                        log: text
                    } as AgentAction
                } else {
                    throw e
                }
            }
            // Check if the agent has finished
             {
                
            }

            let actions: AgentAction[]
            ) {
                actions = output as AgentAction[]
            } else {
                actions = [output as AgentAction]
            }

            const newSteps = await Promise.all(
                a => {
                    awa
                     : t]
                    let observation
                    try {
                        /* Here we need to override Tool call method to include sessionId, chatId, input as parameter
                         * Tool Call Parameters:
                         * - arg: z.output<T>
                         * - configArg?: RunnableConfig | Callbacks
                         * - tags?: string[]
                         * - flowConfig?: { sessionId?: string, chatId?: string, input?: string }
                         */
                         {
                            .call(
                                this.isXML && typeof action.toolInput === 'string' ? { input: action.toolInput } : action.toolInput,
                                ,
                                undefined,
                                {
                                    sessionId: this.sessionId,
                                    chatId: this.chatId,
                                    input: this.input,
                                    state: inputs
                                }
                            )
                            let toolOutput = observation
                            ) {
                                t[0]
                            }
                            ) {
                                t[0]
                            }
                            let toolInput
                            ) {
                                
                                toolOutput = splitArray[0]
                                try {
                                    t
                                }  {
                                    
                                }
                            }
                            usedTools.push({
                                tool: tool.name,
                                t,
                                toolOutput
                            })
                        } else {
                            observation = `${action.tool} is not a valid tool, try another one.`
                        }
                    }  {
                         {
                             {
                                observation = 'Invalid or incomplete tool input. Please try again.'
                            } el {
                                observation = this.handleParsingErrors
                            } el {
                                
                            } else {
                                throw e
                            }
                            .)
                            usedTools.push({
                                tool: tool.name,
                                toolInput: action.toolInput as any,
                                toolOutput: '',
                                e
                            })
                            return { action, observation: observation ?? '' }
                        } else {
                            usedTools.push({
                                tool: tool.name,
                                toolInput: action.toolInput as any,
                                toolOutput: '',
                                e
                            })
                             }
                        }
                    }
                    ) {
                        
                        observation = observationArray[0]
                        const docs = observationArray[1]
                        try {
                            
                            
                        }  {
                            
                        }
                    }
                    ) {
                        
                        observation = observationArray[0]
                        try {
                            
                            a
                        }  {
                            
                        }
                    }
                    ) {
                        
                        observation = observationArray[0]
                    }
                    return { action, observation: observation ?? '' }
                })
            )

            

            const lastStep = steps[steps.length - 1]
            ]

             {
                return getOutput({
                    returnValues: { [this.agent.returnValues[0]]: lastStep.observation },
                    log: ''
                })
            }

            iterations += 1
        }

        

        
    }

    async _takeNextStep(
        nameToolMap: Record<string, Tool>,
        inputs: ChainValues,
        intermediateSteps: AgentStep[],
        runManager?: CallbackManagerForChainRun,
        config?: RunnableConfig
    ): Promise<AgentFinish | AgentStep[]> {
        let output
        try {
            , 
        }  {
             {
                let observation
                let text = e.message
                 {
                     {
                        observation = e.observation
                        text = e.llmOutput ?? ''
                    } else {
                        observation = 'Invalid or incomplete response'
                    }
                } el {
                    observation = this.handleParsingErrors
                } el {
                    
                } else {
                    throw e
                }
                output = {
                    tool: '_Exception',
                    toolInput: observation,
                    log: text
                } as AgentAction
            } else {
                throw e
            }
        }

         {
            return output
        }

        let actions: AgentAction[]
        ) {
            actions = output as AgentAction[]
        } else {
            actions = [output as AgentAction]
        }

        const result: AgentStep[] = []
        f {
            let observation = ''
             {
                awa
            }
             {
                const tool = nameToolMap[agentAction.tool]
                try {
                    /* Here we need to override Tool call method to include sessionId, chatId, input as parameter
                     * Tool Call Parameters:
                     * - arg: z.output<T>
                     * - configArg?: RunnableConfig | Callbacks
                     * - tags?: string[]
                     * - flowConfig?: { sessionId?: string, chatId?: string, input?: string }
                     */
                    .call(
                        this.isXML && typeof agentAction.toolInput === 'string' ? { input: agentAction.toolInput } : agentAction.toolInput,
                        ,
                        undefined,
                        {
                            sessionId: this.sessionId,
                            chatId: this.chatId,
                            input: this.input,
                            state: inputs
                        }
                    )
                    ) {
                        
                        observation = observationArray[0]
                    }
                    ) {
                        
                        observation = observationArray[0]
                    }
                    ) {
                        
                        observation = observationArray[0]
                    }
                }  {
                     {
                         {
                            observation = 'Invalid or incomplete tool input. Please try again.'
                        } el {
                            observation = this.handleParsingErrors
                        } el {
                            
                        } else {
                            throw e
                        }
                        .)
                    }
                }
            } else {
                .j}`
            }
            result.push({
                action: agentAction,
                observation
            })
        }
        return result
    }

    async _return(
        output: AgentFinish,
        intermediateSteps: AgentStep[],
        runManager?: CallbackManagerForChainRun
    ): Promise<AgentExecutorOutput> {
         {
            awa
        }
        const finalOutput: Record<string, unknown> = output.returnValues
         {
            finalOutput.intermediateSteps = intermediateSteps
        }
        return finalOutput
    }

    a: Promise<AgentFinish | null> {
        const { action, observation } = nextStepOutput
         => , t]))
        const [returnValueKey = 'output'] = this.agent.returnValues
        // Invalid tools won't be in the map, so we return False.
         {
             {
                return {
                    returnValues: { [returnValueKey]: observation },
                    log: ''
                }
            }
        }
        return null
    }

    _ {
         {
            return {
                returnValues: {
                    output: 'Agent stopped due to iteration limit or time limit.'
                },
                log: ''
            } as AgentFinish
        }
        th
    }

    a: AsyncGenerator<ChainValues> {
        const agentExecutorIterator = new AgentExecutorIterator({
            inputs,
            agentExecutor: this,
            config: options,
            metadata: this.metadata,
            tags: this.tags,
            callbacks: this.callbacks
        })
        
        f {
             {
                continue
            }
            yield step
        }
    }

    _ {
        return 'agent_executor' as const
    }

    : SerializedLLMChain {
        th
    }
}

class ExceptionTool extends Tool {
    name = '_Exception'

    description = 'Exception tool'

    a {
        return query
    }
}

exp: BaseMessage[] =>
     => {
         => {
            let content: string
             {
                
            } else {
                content = observation
            }
            
        }
         {
            const log = action.messageLog as BaseMessage[]
            )
        } else {
            ]
        }
    })

: string => {
     => `${t.j
}

exp => {
     => )
     {
        th}`)
    }
     => t
    const partialedPrompt = await prompt.partial({
        t,
        t
    })
    // TODO: Add .bind to core runnable interface.
    .bind({
        stop: ['\nObservation:']
    })
    const agent = RunnableSequence.from([
        RunnablePassthrough.assign({
            //@ts-ignore
            agent_ => f
        }),
        partialedPrompt,
        llmWithStop,
        new ReActSingleInputOutputParser({
            toolNames
        })
    ])
    return agent
}

class ReActSingleInputOutputParser extends AgentActionOutputParser {
    lc_namespace = ['langchain', 'agents', 'react']

    private toolNames: string[]
    private FINAL_ANSWER_ACTION = 'Final Answer:'
    private FINAL_ANSWER_AND_PARSABLE_ACTION_ERROR_MESSAGE = 'Parsing LLM output produced both a final answer and a parse-able action:'
    private FORMAT_INSTRUCTIONS = `Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (th
Thought: I now know the final answer
Final Answer: the final answer to the original input question`

     {
        
        this.toolNames = fields.toolNames
    }

    /**
     * Parses the given text into an AgentAction or AgentFinish object. If an
     * output fixing parser is defined, uses it to parse the text.
     * @param text Text to parse.
     * @returns Promise that resolves to an AgentAction or AgentFinish object.
     */
    a: Promise<AgentAction | AgentFinish> {
        
        /
        
         {
             {
                th
            }

            const action = actionMatch[1]
            const actionInput = actionMatch[2]
            .

            return {
                tool: action,
                toolInput,
                log: text
            }
        }

         {
            
            return {
                returnValues: {
                    output: finalAnswerText
                },
                log: text
            }
        }

        // Instead of throwing Error, we return a AgentFinish object
        return { returnValues: { output: text }, log: text }
    }

    /**
     * Returns the format instructions as a string. If the 'raw' option is
     * true, returns the raw FORMAT_INSTRUCTIONS.
     * @param options Options for getting the format instructions.
     * @returns Format instructions as a string.
     */
    getF: string {
        return renderTemplate(this.FORMAT_INSTRUCTIONS, 'f-string', {
            t
        })
    }
}

export class XMLAgentOutputParser extends AgentActionOutputParser {
    lc_namespace = ['langchain', 'agents', 'xml']

     {
        return 'XMLAgentOutputParser'
    }

    /**
     * Parses the output text from the agent and returns an AgentAction or
     * AgentFinish object.
     * @param text The output text from the agent.
     * @returns An AgentAction or AgentFinish object.
     */
    a: Promise<AgentAction | AgentFinish> {
        ) {
            
            [1]
            [1]
            return { tool: _tool, toolInput: _toolInput, log: text }
        } el) {
            
            return { returnValues: { output: answer }, log: text }
        } else {
            // Instead of throwing Error, we return a AgentFinish object
            return { returnValues: { output: text }, log: text }
        }
    }

    getF: string {
        th
    }
}

abstract class AgentMultiActionOutputParser extends BaseOutputParser<AgentAction[] | AgentFinish> {}

export type ToolsAgentAction = AgentAction & {
    toolCallId: string
    messageLog?: BaseMessage[]
}

export type ToolsAgentStep = AgentStep & {
    action: ToolsAgentAction
}

fun: ToolsAgentAction[] | AgentFinish {
    
    let toolCalls: ToolCall[] = []
     {
        toolCalls = message.tool_calls
    } else {
         {
            return {
                returnValues: { output: message.content },
                log: stringifiedMessageContent
            }
        }
        // Best effort parsing
        f {
            const functionName = toolCall.function?.name
            try {
                
                t
            }  {
                throw new OutputParserException(
                    `Fa}". ${e}`
                )
            }
        }
    }
     => {
        const messageLog = i === 0 ? [message] : []
        }\n${stringifiedMessageContent}`
        return {
            tool: toolCall.name as string,
            toolInput: toolCall.args,
            toolCallId: toolCall.id ?? '',
            log,
            messageLog
        }
    })
}

export class ToolCallingAgentOutputParser extends AgentMultiActionOutputParser {
    lc_namespace = ['langchain', 'agents', 'tool_calling']

     {
        return 'ToolCallingAgentOutputParser'
    }

    a: Promise<AgentAction[] | AgentFinish> {
        th
    }

    a {
        ) {
            
        }
        th
    }

    getF: string {
        th
    }
}

export type ParsedToolCall = {
    id?: string

    type: string

    args: Record<string, any>

    /** @deprecated Use `type` instead. Will be removed in 0.2.0. */
    name: string

    /** @deprecated Use `args` instead. Will be removed in 0.2.0. */
    arguments: Record<string, any>
}

export type JsonOutputToolsParserParams = {
    /** Whether to return the tool call id. */
    returnId?: boolean
}

export class JsonOutputToolsParser extends BaseLLMOutputParser<ParsedToolCall[]> {
     {
        return 'JsonOutputToolsParser'
    }

    returnId = false

    lc_namespace = ['langchain', 'output_parsers', 'openai_tools']

    lc_serializable = true

     {
        
        this.returnId = fields?.returnId ?? this.returnId
    }

    /**
     * Parses the output and returns a JSON object. If `argsOnly` is true,
     * only the arguments of the function call are returned.
     * @param generations The output of the LLM to parse.
     * @returns A JSON object representation of the function call or its arguments.
     */
    a: Promise<ParsedToolCall[]> {
        const toolCalls = generations[0].message.additional_kwargs.tool_calls
        const parsedToolCalls = []

         {
            // @ts-expect-error name and arguemnts are defined by Object.defineProperty
            const parsedToolCall: ParsedToolCall = {
                type: 'undefined',
                args: {}
            }

            // backward-compatibility with previous
            // versions of Langchain JS, which uses `name` and `arguments`
            Object.defineProperty(parsedToolCall, 'name', {
                get() {
                    return this.type
                }
            })

            Object.defineProperty(parsedToolCall, 'arguments', {
                get() {
                    return this.args
                }
            })

            pa
        }

        )
        f {
             {
                // @ts-expect-error name and arguemnts are defined by Object.defineProperty
                const parsedToolCall: ParsedToolCall = {
                    type: toolCall.function.name,
                    a
                }

                 {
                    parsedToolCall.id = toolCall.id
                }

                // backward-compatibility with previous
                // versions of Langchain JS, which uses `name` and `arguments`
                Object.defineProperty(parsedToolCall, 'name', {
                    get() {
                        return this.type
                    }
                })

                Object.defineProperty(parsedToolCall, 'arguments', {
                    get() {
                        return this.args
                    }
                })

                pa
            }
        }
        return parsedToolCalls
    }
}
