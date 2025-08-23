import { flatten } from 'lodash'
import { type StructuredTool } from '@langchain/core/tools'
import { DataSource } from 'typeorm'
import { getVars, handleEscapeCharacters, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'

class CustomFunction_Utilities implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    tags: string[]
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Custom JS Function'
        this.name = 'customFunction'
        this.version = 3.0
        this.type = 'CustomFunction'
        this.icon = 'customfunction.svg'
        this.category = 'Utilities'
        this.description = `Execute custom javascript function`
        this.baseClasses = [this.type, 'Utilities']
        this.tags = ['Utilities']
        this.inputs = [
            {
                label: 'Input Variables',
                name: 'functionInputVariables',
                description: 'Input variables can be used in the function with prefix $. For example: $var',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
            },
            {
                label: 'Function Name',
                name: 'functionName',
                type: 'string',
                optional: true,
                placeholder: 'My Function'
            },
            {
                label: 'Additional Tools',
                ',
                name: 'tools',
                type: 'Tool',
                list: true,
                optional: true
            },
            {
                label: 'Javascript Function',
                name: 'javascriptFunction',
                type: 'code'
            }
        ]
        this.outputs = [
            {
                label: 'Output',
                name: 'output',
                baseClasses: ['string', 'number', 'boolean', 'json', 'array']
            },
            {
                label: 'Ending Node',
                name: 'EndingNode',
                baseClasses: [this.type]
            }
        ]
    }

    a: Promise<any> {
        const isEndingNode = nodeData?.outputs?.output === 'EndingNode'
         return // prevent running both init and run twice

        const javascriptFunction = nodeData.inputs?.javascriptFunction as string
        const functionInputVariablesRaw = nodeData.inputs?.functionInputVariables
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
         a?.map((t =>  ?? 

        
        const flow = {
            chatflowId: options.chatflowid,
            sessionId: options.sessionId,
            chatId: options.chatId,
            rawOutput: options.rawOutput || '',
            input
        }

        let inputVars: ICommonObject = {}
         {
            try {
                inputVars =
                    type
            }  {
                th
            }
        }

        // Some values might be a stringified JSON, parse it
        f {
            let value = inputVars[key]
             {
                value = han
                 && value.en) {
                    try {
                        value = JSON.pa
                    }  {
                        // ignore
                    }
                }
                inputVars[key] = value
            }
        }

        // Create additional sandbox variables
        const additionalSandbox: ICommonObject = {
            $tools: tools
        }

        // Add input variables to sandbox
        .length) {
            f {
                additionalSandbox[`$${item}`] = inputVars[item]
            }
        }

        

        try {
            const response = await executeJavaScriptCode(javascriptFunction, sandbox, {
                timeout: 10000
            })

             {
                
            }
            return response
        }  {
            th
        }
    }

    a: Promise<string> {
        
    }
}

module.exports = { nodeClass: CustomFunction_Utilities }
