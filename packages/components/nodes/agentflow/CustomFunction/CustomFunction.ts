import { DataSource } from 'typeorm'
import {
    ICommonObject,
    IDatabaseEntity,
    INode,
    INodeData,
    INodeOptionsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { getVars, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { updateFlowState } from '../utils'

interface ICustomFunctionInputVariables {
    variableName: string
    variableValue: string
}

const exampleFunc = `/*
* You can use any libraries imported in Flowise
* You can use properties specified in Input Variables with the prefix $. For example: $foo
* You can get default flow config: $flow.sessionId, $flow.chatId, $flow.chatflowId, $flow.input, $flow.state
* You can get global variables: $vars.<variable-name>
* Must return a string value at the end of function
*/

;
const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
try {
    ;
    ;
    return text;
}  {
    ;
    return '';
}`

class CustomFunction_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    hideOutput: boolean
    hint: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Custom Function'
        this.name = 'customFunctionAgentflow'
        this.version = 1.0
        this.type = 'CustomFunction'
        this.category = 'Agent Flows'
        this.description = 'Execute custom function'
        this.baseClasses = [this.type]
        this.color = '#E4B7FF'
        this.inputs = [
            {
                label: 'Input Variables',
                name: 'customFunctionInputVariables',
                description: 'Input variables can be used in the function with prefix $. For example: $foo',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Variable Name',
                        name: 'variableName',
                        type: 'string'
                    },
                    {
                        label: 'Variable Value',
                        name: 'variableValue',
                        type: 'string',
                        acceptVariable: true
                    }
                ]
            },
            {
                label: 'Javascript Function',
                name: 'customFunctionJavascriptFunction',
                type: 'code',
                codeExample: exampleFunc,
                description: 'The function to execute. Must return a string or an object that can be converted to a string.'
            },
            {
                label: 'Update Flow State',
                name: 'customFunctionUpdateState',
                description: 'Update runtime state during the execution of the workflow',
                type: 'array',
                optional: true,
                acceptVariable: true,
                array: [
                    {
                        label: 'Key',
                        name: 'key',
                        type: 'asyncOptions',
                        loadMethod: 'listRuntimeStateKeys',
                        freeSolo: true
                    },
                    {
                        label: 'Value',
                        name: 'value',
                        type: 'string',
                        acceptVariable: true,
                        acceptNodeOutputAsVariable: true
                    }
                ]
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const previousNodes = options.previousNodes as ICommonObject[]
             => n
            const state = startAgentflowNode?.inputs?.startState as ICommonObject[]
             => ({ label: )
        }
    }

    a: Promise<any> {
        const javascriptFunction = nodeData.inputs?.customFunctionJavascriptFunction as string
        const functionInputVariables = nodeData.inputs?.customFunctionInputVariables as ICustomFunctionInputVariables[]
        const _customFunctionUpdateState = nodeData.inputs?.customFunctionUpdateState

        const state = options.agentflowRuntime?.state as ICommonObject
        const chatId = options.chatId as string
        const isLastNode = options.isLastNode as boolean
        const isStreamable = isLastNode && options.sseStreamer !== undefined

        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity

        // Update flow state if needed
        let newState = { ...state }
         && _ {
            newState = up
        }

        
        const flow = {
            chatflowId: options.chatflowid,
            sessionId: options.sessionId,
            chatId: options.chatId,
            input,
            state: newState
        }

        // Create additional sandbox variables for custom function inputs
        const additionalSandbox: ICommonObject = {}
        f {
            const variableName = item.variableName
            const variableValue = item.variableValue
            additionalSandbox[`$${variableName}`] = variableValue
        }

        

        // Setup streaming function if needed
        const streamOutput = isStreamable
            ? ( => {
                  const sseStreamer: IServerSideEventStreamer = options.sseStreamer
                  
              }
            : undefined

        try {
            const response = await executeJavaScriptCode(javascriptFunction, sandbox, {
                libraries: ['axios'],
                streamOutput,
                timeout: 10000
            })

            let finalOutput = response
             {
                f
            }

            // Process template variables in state
            .length > 0) {
                f {
                    .) {
                        newState
                    }
                }
            }

            const returnOutput = {
                id: nodeData.id,
                name: this.name,
                input: {
                    inputVariables: functionInputVariables,
                    code: javascriptFunction
                },
                output: {
                    content: finalOutput
                },
                state: newState
            }

            return returnOutput
        }  {
            th
        }
    }
}

module.exports = { nodeClass: CustomFunction_Agentflow }
