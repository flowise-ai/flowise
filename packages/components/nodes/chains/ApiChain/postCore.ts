import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { CallbackManagerForChainRun } from '@langchain/core/callbacks/manager'
import { BaseChain, ChainInputs, LLMChain, SerializedAPIChain } from 'langchain/chains'
import { BasePromptTemplate, PromptTemplate } from '@langchain/core/prompts'
import { ChainValues } from '@langchain/core/utils/types'
import fetch from 'node-fetch'

export const API_URL_RAW_PROMPT_TEMPLATE = `You are given the below API Documentation:
{api_docs}
Using this documentation, generate a json string with two keys: "url" and "data".
The value of "url" should be a string, which is the API url to call for answering the user question.
The value of "data" should be a dictionary of key-value pairs you want to POST to the url as a JSON body.
Be careful to always use double quotes for strings in the json string.
You should build the json string in order to get a response that is as short as possible, while still getting the necessary information to answer the question. Pay attention to deliberately exclude any unnecessary pieces of data in the API call.

Question:{question}
json string:`

export const API_RESPONSE_RAW_PROMPT_TEMPLATE = `${API_URL_RAW_PROMPT_TEMPLATE} {api_url_body}

Here is the response from the API:

{api_response}

Summarize this response to answer the original question.

Summary:`

const defaultApiUrlPrompt = new PromptTemplate({
    inputVariables: ['api_docs', 'question'],
    template: API_URL_RAW_PROMPT_TEMPLATE
})

const defaultApiResponsePrompt = new PromptTemplate({
    inputVariables: ['api_docs', 'question', 'api_url_body', 'api_response'],
    template: API_RESPONSE_RAW_PROMPT_TEMPLATE
})

export interface APIChainInput extends Omit<ChainInputs, 'memory'> {
    apiAnswerChain: LLMChain
    apiRequestChain: LLMChain
    apiDocs: string
    inputKey?: string
    headers?: Record<string, string>
    /** Key to use for output, defaults to `output` */
    outputKey?: string
}

export type APIChainOptions = {
    headers?: Record<string, string>
    apiUrlPrompt?: BasePromptTemplate
    apiResponsePrompt?: BasePromptTemplate
}

export class APIChain extends BaseChain implements APIChainInput {
    apiAnswerChain: LLMChain

    apiRequestChain: LLMChain

    apiDocs: string

    headers = {}

    inputKey = 'question'

    outputKey = 'output'

    get  {
        return [this.inputKey]
    }

    get  {
        return [this.outputKey]
    }

     {
        
        this.apiRequestChain = fields.apiRequestChain
        this.apiAnswerChain = fields.apiAnswerChain
        this.apiDocs = fields.apiDocs
        this.inputKey = fields.inputKey ?? this.inputKey
        this.outputKey = fields.outputKey ?? this.outputKey
        this.headers = fields.headers ?? this.headers
    }

    /** @ignore */
    a: Promise<ChainValues> {
        try {
            const question: string = values[this.inputKey]

            )

            

            // Validate request is not to internal/private networks
            
            const hostname = urlObj.hostname

            if (
                hostname === 'localhost' ||
                hostname === '127.0.0.1' ||
                h ||
                h ||
                h ||
                h
            ) {
                th
            }

            const res = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                b
            })

            

            const answer = await this.apiAnswerChain.predict(
                { question, api_docs: this.apiDocs, api_url_body, api_response },
                
            )

            return { [this.outputKey]: answer }
        }  {
            return { [this.outputKey]: error }
        }
    }

    _ {
        return 'api_chain' as const
    }

     {
        const { api_request_chain, api_answer_chain, api_docs } = data

         {
            th
        }
         {
            th
        }
         {
            th
        }

        return new APIChain({
            ap,
            ap,
            apiDocs: api_docs
        })
    }

    : SerializedAPIChain {
        return {
            _type: th,
            ap,
            ap,
            api_docs: this.apiDocs
        }
    }

    static fromLLMAndAPIDocs(
        llm: BaseLanguageModel,
        apiDocs: string,
        options: APIChainOptions & Omit<APIChainInput, 'apiAnswerChain' | 'apiRequestChain' | 'apiDocs'> = {}
    ): APIChain {
        const { apiUrlPrompt = defaultApiUrlPrompt, apiResponsePrompt = defaultApiResponsePrompt } = options
        
        
        return new this({
            apiAnswerChain,
            apiRequestChain,
            apiDocs,
            ...options
        })
    }
}
