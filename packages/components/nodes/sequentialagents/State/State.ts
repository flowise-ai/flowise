import { START } from '@langchain/langgraph'
import { DataSource } from 'typeorm'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeParams, ISeqAgentNode } from '../../../src/Interface'
import { getVars, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'

const defaultFunc = `{
    aggregate: {
        value: (x, y) => x., // here we append the new message to the existing messages
         => []
    },
    replacedValue: {
        value: (x, y) => y ?? x,
         => null
    }
}`

const howToUse = `
Specify the Key, Operation Type, and Default Value for the state object. The Operation Type can be either "Replace" or "Append".

**Replace**
- Replace the existing value with the new value.
- If the new value is null, the existing value will be retained.

**Append**
- Append the new value to the existing value.
- Default value can be empty or an array. Ex: ["a", "b"]
- Final value is an array.
`
const TAB_IDENTIFIER = 'selectedStateTab'

class State_SeqAgents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    documentation?: string
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'State'
        this.name = 'seqState'
        this.version = 2.0
        this.type = 'State'
        this.icon = 'state.svg'
        this.category = 'Sequential Agents'
        this.description = 'A centralized state object, updated by nodes in the graph, passing from one node to another'
        this.baseClasses = [this.type]
        this.documentation = 'https://docs.flowise-ai.github.io/using-flowise/agentflows/sequential-agents#id-3.-state-node'
        this.inputs = [
            {
                label: 'Custom State',
                name: 'stateMemory',
                type: 'tabs',
                tabIdentifier: TAB_IDENTIFIER,
                additionalParams: true,
                default: 'stateMemoryUI',
                tabs: [
                    {
                        label: 'Cu',
                        name: 'stateMemoryUI',
                        type: 'datagrid',
                        description:
                            'Structure for state. By default, state contains "messages" that got updated with each message sent and received.',
                        hint: {
                            label: 'How to use',
                            value: howToUse
                        },
                        datagrid: [
                            { field: 'key', headerName: 'Key', editable: true },
                            {
                                field: 'type',
                                headerName: 'Operation',
                                type: 'singleSelect',
                                valueOptions: ['Replace', 'Append'],
                                editable: true
                            },
                            { field: 'defaultValue', headerName: 'Default Value', flex: 1, editable: true }
                        ],
                        optional: true,
                        additionalParams: true
                    },
                    {
                        label: 'Cu',
                        name: 'stateMemoryCode',
                        type: 'code',
                        description: `JSON object representing the state`,
                        hideCodeExecute: true,
                        codeExample: defaultFunc,
                        optional: true,
                        additionalParams: true
                    }
                ]
            }
        ]
    }

    a: Promise<any> {
        const tabIdentifier = nodeData.inputs?.[`${TAB_IDENTIFIER}_${nodeData.id}`] as string
        const stateMemoryUI = nodeData.inputs?.stateMemoryUI as string
        const stateMemoryCode = nodeData.inputs?.stateMemoryCode as string
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        [0] : 'stateMemoryUI'
        const stateMemory = nodeData.inputs?.stateMemory as string

         {
            try {
                 : stateMemoryUI
                 : stateMemory
                const combinedMemorySchema = [...parsedSchemaFromUI, ...parsedSchema]
                const obj: ICommonObject = {}
                f {
                    const key = sch.Key ?? sch.key
                     th
                    const type = sch.Operation ?? sch.type
                    const defaultValue = sch['Default Value'] ?? sch.defaultValue

                     {
                        obj[key] = {
                            value: (x: any, y: any) => (A ? x. : x.),
                             => ( : 
                        }
                    } else {
                        obj[key] = {
                            value: (x: any, y: any) => y ?? x,
                             => defaultValue
                        }
                    }
                }
                const returnOutput: ISeqAgentNode = {
                    id: nodeData.id,
                    node: obj,
                    name: 'state',
                    label: 'state',
                    type: 'state',
                    output: START
                }
                return returnOutput
            }  {
                th
            }
        }

         {
            const returnOutput: ISeqAgentNode = {
                id: nodeData.id,
                node: {},
                name: 'state',
                label: 'state',
                type: 'state',
                output: START
            }
            return returnOutput
        }

         {
            try {
                 : stateMemoryUI
                const obj: ICommonObject = {}
                f {
                    const key = sch.key
                     th
                    const type = sch.type
                    const defaultValue = sch.defaultValue

                     {
                        obj[key] = {
                            value: (x: any, y: any) => (A ? x. : x.),
                             => ( : 
                        }
                    } else {
                        obj[key] = {
                            value: (x: any, y: any) => y ?? x,
                             => defaultValue
                        }
                    }
                }
                const returnOutput: ISeqAgentNode = {
                    id: nodeData.id,
                    node: obj,
                    name: 'state',
                    label: 'state',
                    type: 'state',
                    output: START
                }
                return returnOutput
            }  {
                th
            }
        } el {
            
            const flow = {
                chatflowId: options.chatflowid,
                sessionId: options.sessionId,
                chatId: options.chatId,
                input
            }

            

            try {
                const response = await executeJavaScriptCode(`return ${stateMemoryCode}`, sandbox, {
                    timeout: 10000
                })

                 th
                const returnOutput: ISeqAgentNode = {
                    id: nodeData.id,
                    node: response,
                    name: 'state',
                    label: 'state',
                    type: 'state',
                    output: START
                }
                return returnOutput
            }  {
                th
            }
        }
    }
}

module.exports = { nodeClass: State_SeqAgents }
