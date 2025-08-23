import { DataSource } from 'typeorm'
import { z } from 'zod'
import { RunnableConfig } from '@langchain/core/runnables'
import { CallbackManagerForToolRun, Callbacks, CallbackManager, parseCallbackConfigArg } from '@langchain/core/callbacks/manager'
import { StructuredTool } from '@langchain/core/tools'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { getCredentialData, getCredentialParam, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { isValidUUID, isValidURL } from '../../../src/validator'
import { v4 as uuidv4 } from 'uuid'

class AgentAsTool_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Agent as Tool'
        this.name = 'agentAsTool'
        this.version = 1.0
        this.type = 'AgentAsTool'
        this.icon = 'agentastool.svg'
        this.category = 'Tools'
        this.description = 'Use as a tool to execute another agentflow'
        this.baseClasses = [this.type, 'Tool']
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['agentflowApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Select Agent',
                name: 'selectedAgentflow',
                type: 'asyncOptions',
                loadMethod: 'listAgentflows'
            },
            {
                label: 'Tool Name',
                name: 'name',
                type: 'string'
            },
            {
                label: 'Tool Description',
                name: 'description',
                type: 'string',
                description: 'Description of what the tool does. This is for LLM to determine when to use this tool.',
                rows: 3,
                placeholder:
                    'State of the Union QA - useful for when you need to ask questions about the most recent state of the union address.'
            },
            {
                label: 'Return Direct',
                name: 'returnDirect',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Override Config',
                name: 'overrideConfig',
                description: 'Override the config passed to the Agentflow.',
                type: 'json',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Base URL',
                name: 'baseURL',
                type: 'string',
                description:
                    'Base URL to Flowise. By default, it is the URL of the incoming request. Useful when you need to execute the Agentflow through an alternative route.',
                placeholder: 'http://localhost:3000',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Start new session per message',
                name: 'startNewSession',
                type: 'boolean',
                description:
                    'Whether to continue the session with the Agentflow tool or start a new one with each interaction. Useful for Agentflows with memory if you want to avoid it.',
                default: false,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Use Question from Chat',
                name: 'useQuestionFromChat',
                type: 'boolean',
                description:
                    'Whether to use the question from the chat as input to the agentflow. If turned on, this will override the custom input.',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Custom Input',
                name: 'customInput',
                type: 'string',
                description: 'Custom input to be passed to the agentflow. Leave empty to let LLM decides the input.',
                optional: true,
                additionalParams: true,
                show: {
                    useQuestionFromChat: false
                }
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const returnData: INodeOptionsValue[] = []

            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity
             {
                return returnData
            }

            const searchOptions = options.searchOptions || {}
            .findBy({
                ...searchOptions,
                type: 'AGENTFLOW'
            })

            f {
                const data = {
                    label: agentflows[i].name,
                    name: agentflows[i].id
                } as INodeOptionsValue
                
            }
            return returnData
        }
    }

    a: Promise<any> {
        const selectedAgentflowId = nodeData.inputs?.selectedAgentflow as string
        const _name = nodeData.inputs?.name as string
        const description = nodeData.inputs?.description as string
        const useQuestionFromChat = nodeData.inputs?.useQuestionFromChat as boolean
        const returnDirect = nodeData.inputs?.returnDirect as boolean
        const customInput = nodeData.inputs?.customInput as string
        const overrideConfig =
            typeof nodeData.inputs?.overrideConfig === 'string' &&
            n &&
            n
                ? JSON.pa
                : nodeData.inputs?.overrideConfig

        const startNewSession = nodeData.inputs?.startNewSession as boolean

         || (

        // Validate agentflowid is a valid UUID
        ) {
            th
        }

        // Validate baseURL is a valid URL
        ) {
            th
        }

        
        

         th

        let headers = {}
         headers = { Authorization: `Bearer ${agentflowApiKey}` }

        let toolInput = ''
         {
            toolInput = input
        } el {
            toolInput = customInput
        }

        let name = _name || 'agentflow_tool'

        return new AgentflowTool({
            name,
            baseURL,
            description,
            returnDirect,
            agentflowid: selectedAgentflowId,
            startNewSession,
            headers,
            input: toolInput,
            overrideConfig
        })
    }
}

class AgentflowTool extends StructuredTool {
     {
        return 'AgentflowTool'
    }

    name = 'agentflow_tool'

    description = 'Execute another agentflow'

    input = ''

    agentflowid = ''

    startNewSession = false

    baseURL = 'http://localhost:3000'

    headers = {}

    overrideConfig?: object

    schema = z.object({
        .
        // ).., // This will be passed to the Agent, so comment it for now.
    }) as any

    constructor({
        name,
        description,
        returnDirect,
        input,
        agentflowid,
        startNewSession,
        baseURL,
        headers,
        overrideConfig
    }: {
        name: string
        description: string
        returnDirect: boolean
        input: string
        agentflowid: string
        startNewSession: boolean
        baseURL: string
        headers: ICommonObject
        overrideConfig?: object
    }) {
        
        this.name = name
        this.description = description
        this.input = input
        this.baseURL = baseURL
        this.startNewSession = startNewSession
        this.headers = headers
        this.agentflowid = agentflowid
        this.overrideConfig = overrideConfig
        this.returnDirect = returnDirect
    }

    async call(
        arg: z.infer<typeof this.schema>,
        configArg?: RunnableConfig | Callbacks,
        tags?: string[],
        flowConfig?: { sessionId?: string; chatId?: string; input?: string }
    ): Promise<string> {
        
         {
            config.runName = this.name
        }
        let parsed
        try {
            pa
        }  {
            th}`)
        }
        const callbackManager_ = await CallbackManager.configure(
            config.callbacks,
            this.callbacks,
            config.tags || tags,
            this.tags,
            config.metadata,
            this.metadata,
            { verbose: this.verbose }
        )
        const runManager = await callbackManager_?.handleToolStart(
            th,
            type,
            undefined,
            undefined,
            undefined,
            undefined,
            config.runName
        )
        let result
        try {
            
        }  {
            awa
            throw e
        }
         {
            
        }
        awa
        return result
    }

    // @ts-ignore
    protected async _call(
        arg: z.infer<typeof this.schema>,
        _?: CallbackManagerForToolRun,
        flowConfig?: { sessionId?: string; chatId?: string; input?: string }
    ): Promise<string> {
        const inputQuestion = this.input || arg.input

        const body = {
            question: inputQuestion,
             : flowConfig?.chatId,
            overrideConfig: {
                 : flowConfig?.sessionId,
                ...(th,
                ...(a
            }
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'flowise-tool': 'true',
                ...this.headers
            },
            b
        }

        const code = `
;
const url = "${this.baseURL}/api/v1/prediction/${this.agentflowid}";

const body = $callBody;

const options = $callOptions;

try {
	;
	;
	return resp.text;
}  {
	;
	return '';
}
`

        // Create additional sandbox variables
        const additionalSandbox: ICommonObject = {
            $callOptions: options,
            $callBody: body
        }

        

        const response = await executeJavaScriptCode(code, sandbox, {
            useSandbox: false,
            timeout: 10000
        })

        return response
    }
}

module.exports = { nodeClass: AgentAsTool_Tools }
