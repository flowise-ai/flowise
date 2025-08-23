import { Moderation } from '../Moderation'
import { OpenAIModerationChain } from 'langchain/chains'

export class OpenAIModerationRunner implements Moderation {
    private openAIApiKey = ''
    private moderationErrorMessage: string = "Text was found that violates OpenAI's content policy."

     {
        this.openAIApiKey = openAIApiKey
    }

    a: Promise<string> {
         {
            th
        }
        // Create a new instance of the OpenAIModerationChain
        const moderation = new OpenAIModerationChain({
            openAIApiKey: this.openAIApiKey,
            throwError: false // If set to true, the call will throw an error when the moderation chain detects violating content. If set to false, violating content will return "Text was found that violates OpenAI's content policy.".
        })
        // Send the user's input to the moderation chain and wait for the result
        const { output: moderationOutput, results } = await moderation.call({
            input: input
        })
         {
            th
        }
        return moderationOutput
    }

     {
        this.moderationErrorMessage = message
    }
}
