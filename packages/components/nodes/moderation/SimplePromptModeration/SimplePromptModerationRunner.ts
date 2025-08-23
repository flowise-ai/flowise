import { Moderation } from '../Moderation'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

export class SimplePromptModerationRunner implements Moderation {
    private readonly denyList: string = ''
    private readonly moderationErrorMessage: string = ''
    private readonly model: BaseChatModel

     {
        this.denyList = denyList
         === -1) {
            this.denyList += '\n'
        }
        this.moderationErrorMessage = moderationErrorMessage
         this.model = model
    }

    a: Promise<string> {
         {
            
            f {
                 continue
                const res = await this.model.invoke(
                    `Are these two sentences similar to each other? Only return Yes or No.\nFirst sentence: ${input}\nSecond sentence: ${denyStr}`
                )
                .t.) {
                    th
                }
            }
        } else {
            th.f => {
                .)) {
                    th
                }
            })
        }
        
    }
}
