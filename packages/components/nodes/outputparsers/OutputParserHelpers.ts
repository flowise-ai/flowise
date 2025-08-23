import { BaseOutputParser } from '@langchain/core/output_parsers'
import { ChatPromptTemplate, FewShotPromptTemplate, PromptTemplate, SystemMessagePromptTemplate } from '@langchain/core/prompts'
import { BaseLanguageModel, BaseLanguageModelCallOptions } from '@langchain/core/language_models/base'
import { LLMChain } from 'langchain/chains'
import { ICommonObject } from '../../src'

export const CATEGORY = 'Output Parsers'

exp: string | object => {
     {
        return { json: response }
    }
    return response
}

export const injectOutputParser = (
    outputParser: BaseOutputParser<unknown>,
    chain: LLMChain<string | object | BaseLanguageModel<any, BaseLanguageModelCallOptions>>,
    promptValues: ICommonObject | undefined = undefined
) => {
     {
        
         {
            let pt = chain.prompt
            pt.template = pt.template + '\n{format_instructions}'
            chain.prompt.partialVariables = { format_instructions: formatInstructions }
        } el {
            let pt = chain.prompt
            pt.p => {
                 {
                    ;(m.pa }
                    ;(m.template = ((m.template + '\n{f as string
                }
            })
        } el {
            chain.prompt.examplePrompt.partialVariables = { format_instructions: formatInstructions }
            chain.prompt.examplePrompt.template = chain.prompt.examplePrompt.template + '\n{format_instructions}'
        }

        
         {
            p }
        }
    }
    return promptValues
}
