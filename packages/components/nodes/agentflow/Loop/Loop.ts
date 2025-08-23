import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'

class Loop_Agentflow implements INode {
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
        this.label = 'Loop'
        this.name = 'loopAgentflow'
        this.version = 1.0
        this.type = 'Loop'
        this.category = 'Agent Flows'
        this.description = 'Loop back to a previous node'
        this.baseClasses = [this.type]
        this.color = '#FFA07A'
        this.hint = 'Make sure to have memory enabled in the LLM/Agent node to retain the chat history'
        this.hideOutput = true
        this.inputs = [
            {
                label: 'Loop Back To',
                name: 'loopBackToNode',
                type: 'asyncOptions',
                loadMethod: 'listPreviousNodes',
                freeSolo: true
            },
            {
                label: 'Max Loop Count',
                name: 'maxLoopCount',
                type: 'number',
                default: 5
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const previousNodes = options.previousNodes as ICommonObject[]

            const returnOptions: INodeOptionsValue[] = []
            f {
                returnOptions.push({
                    label: node.label,
                    name: `${node.id}-${node.label}`,
                    description: node.id
                })
            }
            return returnOptions
        }
    }

    a: Promise<any> {
        const loopBackToNode = nodeData.inputs?.loopBackToNode as string
        const _maxLoopCount = nodeData.inputs?.maxLoopCount as string

        const state = options.agentflowRuntime?.state as ICommonObject

        [0]
        [1]

        const data = {
            nodeID: loopBackToNodeId,
            maxL : 5
        }

        const returnOutput = {
            id: nodeData.id,
            name: this.name,
            input: data,
            output: {
                `,
                nodeID: loopBackToNodeId,
                maxL : 5
            },
            state
        }

        return returnOutput
    }
}

module.exports = { nodeClass: Loop_Agentflow }
