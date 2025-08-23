import { CommonType, ICommonObject, ICondition, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import removeMarkdown from 'remove-markdown'

class Condition_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    tags: string[]
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Condition'
        this.name = 'conditionAgentflow'
        this.version = 1.0
        this.type = 'Condition'
        this.category = 'Agent Flows'
        this.description = `Split flows based on If Else conditions`
        this.baseClasses = [this.type]
        this.color = '#FFB938'
        this.inputs = [
            {
                label: 'Conditions',
                name: 'conditions',
                type: 'array',
                description: 'Values to compare',
                acceptVariable: true,
                default: [
                    {
                        type: 'string',
                        value1: '',
                        operation: 'equal',
                        value2: ''
                    }
                ],
                array: [
                    {
                        label: 'Type',
                        name: 'type',
                        type: 'options',
                        options: [
                            {
                                label: 'String',
                                name: 'string'
                            },
                            {
                                label: 'Number',
                                name: 'number'
                            },
                            {
                                label: 'Boolean',
                                name: 'boolean'
                            }
                        ],
                        default: 'string'
                    },
                    /////////////////////////////////////// STRING ////////////////////////////////////////
                    {
                        label: 'Value 1',
                        name: 'value1',
                        type: 'string',
                        default: '',
                        description: 'First value to be compared with',
                        acceptVariable: true,
                        show: {
                            'conditions[$index].type': 'string'
                        }
                    },
                    {
                        label: 'Operation',
                        name: 'operation',
                        type: 'options',
                        options: [
                            {
                                label: 'Contains',
                                name: 'contains'
                            },
                            {
                                label: 'Ends With',
                                name: 'endsWith'
                            },
                            {
                                label: 'Equal',
                                name: 'equal'
                            },
                            {
                                label: 'Not Contains',
                                name: 'notContains'
                            },
                            {
                                label: 'Not Equal',
                                name: 'notEqual'
                            },
                            {
                                label: 'Regex',
                                name: 'regex'
                            },
                            {
                                label: 'Starts With',
                                name: 'startsWith'
                            },
                            {
                                label: 'Is Empty',
                                name: 'isEmpty'
                            },
                            {
                                label: 'Not Empty',
                                name: 'notEmpty'
                            }
                        ],
                        default: 'equal',
                        description: 'Type of operation',
                        show: {
                            'conditions[$index].type': 'string'
                        }
                    },
                    {
                        label: 'Value 2',
                        name: 'value2',
                        type: 'string',
                        default: '',
                        description: 'Second value to be compared with',
                        acceptVariable: true,
                        show: {
                            'conditions[$index].type': 'string'
                        },
                        hide: {
                            'conditions[$index].operation': ['isEmpty', 'notEmpty']
                        }
                    },
                    /////////////////////////////////////// NUMBER ////////////////////////////////////////
                    {
                        label: 'Value 1',
                        name: 'value1',
                        type: 'number',
                        default: '',
                        description: 'First value to be compared with',
                        acceptVariable: true,
                        show: {
                            'conditions[$index].type': 'number'
                        }
                    },
                    {
                        label: 'Operation',
                        name: 'operation',
                        type: 'options',
                        options: [
                            {
                                label: 'Smaller',
                                name: 'smaller'
                            },
                            {
                                label: 'Smaller Equal',
                                name: 'smallerEqual'
                            },
                            {
                                label: 'Equal',
                                name: 'equal'
                            },
                            {
                                label: 'Not Equal',
                                name: 'notEqual'
                            },
                            {
                                label: 'Larger',
                                name: 'larger'
                            },
                            {
                                label: 'Larger Equal',
                                name: 'largerEqual'
                            },
                            {
                                label: 'Is Empty',
                                name: 'isEmpty'
                            },
                            {
                                label: 'Not Empty',
                                name: 'notEmpty'
                            }
                        ],
                        default: 'equal',
                        description: 'Type of operation',
                        show: {
                            'conditions[$index].type': 'number'
                        }
                    },
                    {
                        label: 'Value 2',
                        name: 'value2',
                        type: 'number',
                        default: 0,
                        description: 'Second value to be compared with',
                        acceptVariable: true,
                        show: {
                            'conditions[$index].type': 'number'
                        }
                    },
                    /////////////////////////////////////// BOOLEAN ////////////////////////////////////////
                    {
                        label: 'Value 1',
                        name: 'value1',
                        type: 'boolean',
                        default: false,
                        description: 'First value to be compared with',
                        show: {
                            'conditions[$index].type': 'boolean'
                        }
                    },
                    {
                        label: 'Operation',
                        name: 'operation',
                        type: 'options',
                        options: [
                            {
                                label: 'Equal',
                                name: 'equal'
                            },
                            {
                                label: 'Not Equal',
                                name: 'notEqual'
                            }
                        ],
                        default: 'equal',
                        description: 'Type of operation',
                        show: {
                            'conditions[$index].type': 'boolean'
                        }
                    },
                    {
                        label: 'Value 2',
                        name: 'value2',
                        type: 'boolean',
                        default: false,
                        description: 'Second value to be compared with',
                        show: {
                            'conditions[$index].type': 'boolean'
                        }
                    }
                ]
            }
        ]
        this.outputs = [
            {
                label: '0',
                name: '0',
                description: 'Condition 0'
            },
            {
                label: '1',
                name: '1',
                description: 'Else'
            }
        ]
    }

    a: Promise<any> {
        const state = options.agentflowRuntime?.state as ICommonObject

        const compareOperationFunctions: {
             => boolean
        } = {
             => (value1 || '').t..t),
            n => .t..t),
            en => (value1 a.en,
            equal: (value1: C => value1 === value2,
            n => value1 !== value2,
            la => (Numbe || 0) > (Numbe || 0),
            la => (Numbe || 0) >= (Numbe || 0),
             => (Numbe || 0) < (Numbe || 0),
             => (Numbe || 0) <= (Numbe || 0),
             => (value1 a.,
             => ,
            n => 
        }

        const _conditions = nodeData.inputs?.conditions
         : _conditions
        const initialConditions = { ...conditions }

        f {
            const _value1 = condition.value1
            const _value2 = condition.value2
            const operation = condition.operation

            let value1: CommonType
            let value2: CommonType

             {
                case 'boolean':
                    value1 = _value1
                    value2 = _value2
                    break
                case 'number':
                    value1 = pa || 0
                    value2 = pa || 0
                    break
                default: // string
                    value1 =  || '')
                    value2 =  || '')
            }

            
             {
                // find the matching condition
                 => JSON. === JSON.)
                // add isFulfilled to the condition
                 {
                    conditions[conditionIndex] = { ...condition, isFulfilled: true }
                }
                break
            }
        }

        // If no condition is fullfilled, add isFulfilled to the ELSE condition
        const dummyElseConditionData = {
            type: 'string',
            value1: '',
            operation: 'equal',
            value2: ''
        }
         => ) {
            conditions.push({
                ...dummyElseConditionData,
                isFulfilled: true
            })
        } else {
            conditions.push({
                ...dummyElseConditionData,
                isFulfilled: false
            })
        }

        const returnOutput = {
            id: nodeData.id,
            name: this.name,
            input: { conditions: initialConditions },
            output: { conditions },
            state
        }

        return returnOutput
    }
}

module.exports = { nodeClass: Condition_Agentflow }
