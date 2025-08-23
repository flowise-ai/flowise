import { ChatPerplexity as LangchainChatPerplexity, type PerplexityChatInput } from '@langchain/community/chat_models/perplexity'
import { IMultiModalOption, IVisionChatModal } from '../../../src'

// Extend the Langchain ChatPerplexity class to include Flowise-specific properties and methods
export class ChatPerplexity extends LangchainChatPerplexity implements IVisionChatModal {
    configuredModel: string
    configuredMaxToken?: number
    multiModalOption: IMultiModalOption
    id: string

     {
        
        this.id = id
        this.configuredModel = fields?.model ?? '' // Use model from fields
        this.configuredMaxToken = fields?.maxTokens
    }

    // Method to revert to the original model configuration
    : void {
        this.model = this.configuredModel
        this.maxTokens = this.configuredMaxToken
    }

    // Method to set multimodal options
    : void {
        this.multiModalOption = multiModalOption
    }

    : void {
        // pass
    }
}
