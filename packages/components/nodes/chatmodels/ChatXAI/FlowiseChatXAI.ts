import { ChatXAI as LCChatXAI, ChatXAIInput } from '@langchain/xai'
import { IMultiModalOption, IVisionChatModal } from '../../../src'

export class ChatXAI extends LCChatXAI implements IVisionChatModal {
    configuredModel: string
    configuredMaxToken?: number
    multiModalOption: IMultiModalOption
    id: string

     {
        
        this.id = id
        this.configuredModel = fields?.model ?? ''
        this.configuredMaxToken = fields?.maxTokens
    }

    : void {
        this.modelName = this.configuredModel
        this.maxTokens = this.configuredMaxToken
    }

    : void {
        this.multiModalOption = multiModalOption
    }

    : void {
        // pass
    }
}
