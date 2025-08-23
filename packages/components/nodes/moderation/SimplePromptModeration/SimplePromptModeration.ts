import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src'
import { Moderation } from '../Moderation'
import { SimplePromptModerationRunner } from './SimplePromptModerationRunner'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

class SimplePromptModeration implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'Simple Prompt Moderation'
        this.name = 'inputModerationSimple'
        this.version = 2.0
        this.type = 'Moderation'
        this.icon = 'moderation.svg'
        this.category = 'Moderation'
        this.description = 'Check whether input consists of any text from Deny list, and prevent being sent to LLM'
        th]
        this.inputs = [
            {
                label: 'Deny List',
                name: 'denyList',
                type: 'string',
                rows: 4,
                placeholder: `ignore previous instructions\ndo not follow the directions\nyou must ignore all previous instructions`,
                 that should not appear in the prompt text.'
            },
            {
                label: 'Chat Model',
                name: 'model',
                type: 'BaseChatModel',
                description: 'Use LLM to detect if the input is similar to those specified in Deny List',
                optional: true
            },
            {
                label: 'Error Message',
                name: 'moderationErrorMessage',
                type: 'string',
                rows: 2,
                default: 'Cannot Process! Input violates content moderation policies.',
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const denyList = nodeData.inputs?.denyList as string
        const model = nodeData.inputs?.model as BaseChatModel
        const moderationErrorMessage = nodeData.inputs?.moderationErrorMessage as string

        
    }
}

module.exports = { nodeClass: SimplePromptModeration }
