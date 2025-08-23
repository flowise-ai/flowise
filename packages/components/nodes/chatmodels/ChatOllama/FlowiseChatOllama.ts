import { ChatOllama as LCChatOllama, ChatOllamaInput } from '@langchain/ollama'
import { IMultiModalOption, IVisionChatModal } from '../../../src'

export class ChatOllama extends LCChatOllama implements IVisionChatModal {
    configuredModel: string
    configuredMaxToken?: number
    multiModalOption: IMultiModalOption
    id: string

     {
        
        this.id = id
        this.configuredModel = fields?.model ?? ''
    }

    : void {
        this.model = this.configuredModel
    }

    : void {
        this.multiModalOption = multiModalOption
    }

    : void {
        // pass
    }
}
