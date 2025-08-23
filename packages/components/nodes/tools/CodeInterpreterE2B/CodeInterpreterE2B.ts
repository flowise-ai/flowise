import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { StructuredTool, ToolInputParsingException, ToolParams } from '@langchain/core/tools'
import { Sandbox } from '@e2b/code-interpreter'
import { z } from 'zod'
import { addSingleFileToStorage } from '../../../src/storageUtils'
import { CallbackManager, CallbackManagerForToolRun, Callbacks, parseCallbackConfigArg } from '@langchain/core/callbacks/manager'
import { RunnableConfig } from '@langchain/core/runnables'
import { ARTIFACTS_PREFIX } from '../../../src/agents'

const DESC = `Evaluates python code in a sandbox environment. \
The environment is long running and exists across multiple executions. \
You must send the whole script every time and print your outputs. \
Script should be pure python code that can be evaluated. \
It should be in python format NOT markdown. \
The code should NOT be wrapped in backticks. \
All python packages including requests, matplotlib, scipy, numpy, pandas, \
et".`
const NAME = 'code_interpreter'

class Code_Interpreter_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    badge: string
    credential: INodeParams

     {
        this.label = 'Code Interpreter by E2B'
        this.name = 'codeInterpreterE2B'
        this.version = 1.0
        this.type = 'CodeInterpreter'
        this.icon = 'e2b.png'
        this.category = 'Tools'
        this.description = 'Execute code in a sandbox environment'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['E2BApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Tool Name',
                name: 'toolName',
                type: 'string',
                description: 'Specify the name of the tool',
                default: 'code_interpreter'
            },
            {
                label: 'Tool Description',
                name: 'toolDesc',
                type: 'string',
                rows: 4,
                description: 'Specify the description of the tool',
                default: DESC
            }
        ]
    }

    a: Promise<any> {
        const toolDesc = nodeData.inputs?.toolDesc as string
        const toolName = nodeData.inputs?.toolName as string

        
        

        return await E2BTool.initialize({
            description: toolDesc ?? DESC,
            name: toolName ?? NAME,
            apiKey: e2bApiKey,
            schema: z.object({
                .
            }),
            chatflowid: options.chatflowid,
            orgId: options.orgId
        })
    }
}

type E2BToolParams = ToolParams
type E2BToolInput = {
    name: string
    description: string
    apiKey: string
    schema: any
    chatflowid: string
    orgId: string
    templateCodeInterpreterE2B?: string
    domainCodeInterpreterE2B?: string
}

export class E2BTool extends StructuredTool {
     {
        return 'E2BTool'
    }

    name = NAME

    description = DESC

    instance: Sandbox

    apiKey: string

    schema

    chatflowid: string

    orgId: string

    flowObj: ICommonObject

    templateCodeInterpreterE2B?: string
    domainCodeInterpreterE2B?: string

     {
        
        this.description = options.description
        this.name = options.name
        this.apiKey = options.apiKey
        this.schema = options.schema
        this.chatflowid = options.chatflowid
        this.orgId = options.orgId
        this.templateCodeInterpreterE2B = options.templateCodeInterpreterE2B
        this.domainCodeInterpreterE2B = options.domainCodeInterpreterE2B
    }

     {
        return new this({
            name: options.name,
            description: options.description,
            apiKey: options.apiKey,
            schema: options.schema,
            chatflowid: options.chatflowid,
            orgId: options.orgId,
            templateCodeInterpreterE2B: options.templateCodeInterpreterE2B,
            domainCodeInterpreterE2B: options.domainCodeInterpreterE2B
        })
    }

    async call(
        arg: z.infer<typeof this.schema>,
        configArg?: RunnableConfig | Callbacks,
        tags?: string[],
        flowConfig?: { sessionId?: string; chatId?: string; input?: string; state?: ICommonObject }
    ): Promise<string> {
        
         {
            config.runName = this.name
        }
        let parsed
        try {
            pa
        }  {
            th)
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
        flowConfig = { ...this.flowObj, ...flowConfig }
        try {
             {
                th
                

                const artifacts = []
                f {
                    f {
                         continue

                         {
                            //@ts-ignore
                            

                            }.png`

                            // Don't check storage usage because this is incoming file, and if we throw error, agent will keep on retrying
                            const { path } = await addSingleFileToStorage(
                                'image/png',
                                pngData,
                                filename,
                                this.orgId,
                                this.chatflowid,
                                flowConfig!.chatId as string
                            )

                            a
                        } el {
                            //@ts-ignore
                            

                            }.jpg`

                            const { path } = await addSingleFileToStorage(
                                'image/jpg',
                                jpegData,
                                filename,
                                this.orgId,
                                this.chatflowid,
                                flowConfig!.chatId as string
                            )

                            a
                        } el {
                            a
                        } //TODO: support for pdf
                    }
                }

                let output = ''

                 output = execution.text
                 

                 {
                    return `${execution.error.name}: ${execution.error.value}`
                }

                 : output
            } else {
                return 'No input provided'
            }
        }  {
             th
            
        }
    }

     {
        this.flowObj = flowObj
    }
}

module.exports = { nodeClass: Code_Interpreter_Tools }
