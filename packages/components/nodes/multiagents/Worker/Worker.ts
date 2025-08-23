import { flatten } from 'lodash'
import { RunnableSequence, RunnablePassthrough, RunnableConfig } from '@langchain/core/runnables'
import { ChatPromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate } from '@langchain/core/prompts'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'
import { HumanMessage } from '@langchain/core/messages'
import { formatToOpenAIToolMessages } from 'langchain/agents/format_scratchpad/openai_tools'
import { type ToolsAgentStep } from 'langchain/agents/openai/output_parser'
import { INode, INodeData, INodeParams, IMultiAgentNode, ITeamState, ICommonObject, MessageContentImageUrl } from '../../../src/Interface'
import { ToolCallingAgentOutputParser, AgentExecutor } from '../../../src/agents'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { getInputVariables, handleEscapeCharacters } from '../../../src/utils'

const examplePrompt = 'You are a research assistant who can search for up-to-date info using search engine.'

class Worker_MultiAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    hideOutput: boolean
    inputs?: INodeParams[]
    badge?: string

     {
        this.label = 'Worker'
        this.name = 'worker'
        this.version = 2.0
        this.type = 'Worker'
        this.icon = 'worker.svg'
        this.category = 'Multi Agents'
        this.baseClasses = [this.type]
        this.hideOutput = true
        this.inputs = [
            {
                label: 'Worker Name',
                name: 'workerName',
                type: 'string',
                placeholder: 'Worker'
            },
            {
                label: 'Worker Prompt',
                name: 'workerPrompt',
                type: 'string',
                rows: 4,
                default: examplePrompt
            },
            {
                label: 'Tools',
                name: 'tools',
                type: 'Tool',
                list: true,
                optional: true
            },
            {
                label: 'Supervisor',
                name: 'supervisor',
                type: 'Supervisor'
            },
            {
                label: 'Tool Calling Chat Model',
                name: 'model',
                type: 'BaseChatModel',
                optional: true,
                description: `Only compatible with models that are capable of function calling: ChatOpenAI, ChatMistral, ChatAnthropic, ChatGoogleGenerativeAI, ChatVertexAI, GroqChat. If not specified, supervisor's model will be used`
            },
            {
                label: 'Format Prompt Values',
                name: 'promptValues',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
            },
            {
                label: 'Max Iterations',
                name: 'maxIterations',
                type: 'number',
                optional: true
            }
        ]
    }

    a: Promise<any> {
        let tools = nodeData.inputs?.tools
        t
        let workerPrompt = nodeData.inputs?.workerPrompt as string
        const workerLabel = nodeData.inputs?.workerName as string
        const supervisor = nodeData.inputs?.supervisor as IMultiAgentNode
        const maxIterations = nodeData.inputs?.maxIterations as string
        const model = nodeData.inputs?.model as BaseChatModel
        const promptValuesStr = nodeData.inputs?.promptValues

         th
        ..t

         th

        let workerInputVariablesValues: ICommonObject = {}
         {
            try {
                w
            }  {
                th
            }
        }
        w

        
        const multiModalMessageContent = supervisor?.multiModalMessageContent || []

        const abortControllerSignal = options.signal as AbortController
        

         => Obje.)) {
            th
        }

        const agent = await createAgent(
            llm,
            [...tools],
            workerPrompt,
            multiModalMessageContent,
            workerInputVariablesValues,
            maxIterations,
            {
                sessionId: options.sessionId,
                chatId: options.chatId,
                input
            }
        )

         =>
            await agentNode(
                {
                    state,
                    agent: agent,
                    name: workerName,
                    nodeId: nodeData.id,
                    abortControllerSignal
                },
                config
            )

        const returnOutput: IMultiAgentNode = {
            node: workerNode,
            name: workerName,
            label: workerLabel,
            type: 'worker',
            workerPrompt,
            workerInputVariables,
            parentSupervisorName: supervisor.name ?? 'supervisor'
        }

        return returnOutput
    }
}

async function createAgent(
    llm: BaseChatModel,
    tools: any[],
    systemPrompt: string,
    multiModalMessageContent: MessageContentImageUrl[],
    workerInputVariablesValues: ICommonObject,
    maxIterations?: string,
    flowObj?: { sessionId?: string; chatId?: string; input?: string }
): Promise<AgentExecutor | RunnableSequence> {
     {
        const combinedPrompt =
            systemPrompt +
            '\nWork autonomously according to your specialty, using the tools available to you.' +
            ' Do not ask for clarification.' +
            ' Y will collaborate with you with their own specialties.' +
            ' You are chosen for a reason! You are one of the following team members: {team_members}.'

        // => t.name).j : ''
        const prompt = ChatPromptTemplate.fromMessages([
            ['system', combinedPrompt],
            new Me,
            new Me
            /* Gettind rid of this for now because other LLMs dont support system message at later stage
            [
                'system',
                [
                    'Supervisor instructions: {instructions}\n' + tools.length
                        ? `Remember, you individually can only use these tools: ${toolNames}`
                        : '' + '\n\nEnd if you have already completed the requested task. Communicate the work completed.'
                ].j
            ]*/
        ])

         {
            
            p
        }

         {
            th
        }
        

        let agent

        .length) {
            agent = RunnableSequence.from([
                RunnablePassthrough.assign({
                    //@ts-ignore
                    agent_ => f
                }),
                prompt,
                modelWithTools,
                new T
            ])
        } else {
            agent = RunnableSequence.from([
                RunnablePassthrough.assign({
                    //@ts-ignore
                    agent_ => f
                }),
                RunnablePa),
                prompt,
                modelWithTools,
                new T
            ])
        }

        const executor = AgentExecutor.fromAgentAndTools({
            agent,
            tools,
            sessionId: flowObj?.sessionId,
            chatId: flowObj?.chatId,
            input: flowObj?.input,
            verbose: process.env.DEBUG === 'true' ? true : false,
            maxIte : undefined
        })
        return executor
    } else {
        const combinedPrompt =
            systemPrompt +
            '\nWork autonomously according to your specialty, using the tools available to you.' +
            ' Do not ask for clarification.' +
            ' Y will collaborate with you with their own specialties.' +
            ' You are chosen for a reason! You are one of the following team members: {team_members}.'

        ])
         {
            
            p
        }

        let conversationChain

        .length) {
            ])
        } else {
            conversationChain = RunnableSequence.from([
                RunnablePa),
                prompt,
                llm,
                new St
            ])
        }
        return conversationChain
    }
}

async function agentNode(
    {
        state,
        agent,
        name,
        nodeId,
        abortControllerSignal
    }: { state: ITeamState; agent: AgentExecutor | RunnableSequence; name: string; nodeId: string; abortControllerSignal: AbortController },
    config: RunnableConfig
) {
    try {
         {
            th
        }

        
        const additional_kwargs: ICommonObject = { nodeId, type: 'worker' }
         {
            additional_kwargs.usedTools = result.usedTools
        }
         {
            additional_kwargs.sourceDocuments = result.sourceDocuments
        }
        return {
            messages: [
                new HumanMessage({
                    content: typeof result === 'string' ? result : result.output,
                    name,
                    a.length ? additional_kwargs : undefined
                })
            ]
        }
    }  {
        th
    }
}

 => {
    const transformedObject: ICommonObject = {}

    f {
        t => obj[key]
    }

    return transformedObject
}

module.exports = { nodeClass: Worker_MultiAgents }
