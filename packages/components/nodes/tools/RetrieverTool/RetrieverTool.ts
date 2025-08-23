import { z } from 'zod'
import { CallbackManager, CallbackManagerForToolRun, Callbacks, parseCallbackConfigArg } from '@langchain/core/callbacks/manager'
import { BaseDynamicToolInput, DynamicTool, StructuredTool, ToolInputParsingException } from '@langchain/core/tools'
import { BaseRetriever } from '@langchain/core/retrievers'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, resolveFlowObjValue } from '../../../src/utils'
import { SOURCE_DOCUMENTS_PREFIX } from '../../../src/agents'
import { RunnableConfig } from '@langchain/core/runnables'
import { VectorStoreRetriever } from '@langchain/core/vectorstores'

const howToUse = `Add additional filters to vector store. You can also filter with flow config, including the current "state":
- \`$flow.sessionId\`
- \`$flow.chatId\`
- \`$flow.chatflowId\`
- \`$flow.input\`
- \`$flow.state\`
`

type ZodObjectAny = z.ZodObject<any, any, any, any>
type IFlowConfig = { sessionId?: string; chatId?: string; input?: string; state?: ICommonObject }
interface DynamicStructuredToolInput<T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>>
    extends BaseDynamicToolInput {
    fun => Promise<string>
    schema: T
}

class DynamicStructuredTool<T extends z.ZodObject<any, any, any, any> = z.ZodObject<any, any, any, any>> extends StructuredTool<
    T extends ZodObjectAny ? T : ZodObjectAny
> {
     {
        return 'DynamicStructuredTool'
    }

    name: string

    description: string

    func: DynamicStructuredToolInput['func']

    // @ts-ignore
    schema: T

    private flowObj: any

     {
        
        this.name = fields.name
        this.description = fields.description
        this.func = fields.func
        this.returnDirect = fields.returnDirect ?? this.returnDirect
        this.schema = fields.schema
    }

    a: Promise<string> {
        
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
    p: Promise<string> {
        let flowConfiguration: ICommonObject = {}
        .length) {
            f {
                flowConfiguration[`$${item}`] = arg[item]
            }
        }

        // inject flow properties
         {
            flowConfiguration['$flow'] = { ...this.flowObj, ...flowConfig }
        }

        
    }

     {
        this.flowObj = flow
    }
}

class Retriever_Tools implements INode {
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
        this.label = 'Retriever Tool'
        this.name = 'retrieverTool'
        this.version = 3.0
        this.type = 'RetrieverTool'
        this.icon = 'retrievertool.svg'
        this.category = 'Tools'
        this.description = 'Use a retriever as allowed tool for agent'
        th]
        this.inputs = [
            {
                label: 'Retriever Name',
                name: 'name',
                type: 'string',
                placeholder: 'search_state_of_union'
            },
            {
                label: 'Retriever Description',
                name: 'description',
                type: 'string',
                description: 'When should agent uses to retrieve documents',
                rows: 3,
                placeholder: 'Searches and returns documents regarding the state-of-the-union.'
            },
            {
                label: 'Retriever',
                name: 'retriever',
                type: 'BaseRetriever'
            },
            {
                label: 'Return Source Documents',
                name: 'returnSourceDocuments',
                type: 'boolean',
                optional: true
            },
            {
                label: 'Additional Metadata Filter',
                name: 'retrieverToolMetadataFilter',
                type: 'json',
                description: 'Add additional metadata filter on top of the existing filter from vector store',
                optional: true,
                additionalParams: true,
                hint: {
                    label: 'What can you filter?',
                    value: howToUse
                }
            }
        ]
    }

    a: Promise<any> {
        const name = nodeData.inputs?.name as string
        const description = nodeData.inputs?.description as string
        const retriever = nodeData.inputs?.retriever as BaseRetriever
        const returnSourceDocuments = nodeData.inputs?.returnSourceDocuments as boolean
        const retrieverToolMetadataFilter = nodeData.inputs?.retrieverToolMetadataFilter

        const input = {
            name,
            description
        }

        const flow = { chatflowId: options.chatflowid }

         => {
             {
                const flowObj = flowConfig

                const metadatafilter =
                    type
                

                .vectorStore
                vectorStore.filter = newMetadataFilter
            }
            
             => .j
            
            return returnSourceDocuments ? content + SOURCE_DOCUMENTS_PREFIX + sourceDocuments : content
        }

        const schema = z.object({
            .
        }) as any

        
        t
        return tool
    }
}

module.exports = { nodeClass: Retriever_Tools }
