import { BaseLanguageModel, BaseLanguageModelCallOptions } from '@langchain/core/language_models/base'
import { BaseLLMOutputParser, BaseOutputParser } from '@langchain/core/output_parsers'
import { HumanMessage } from '@langchain/core/messages'
import { ChatPromptTemplate, FewShotPromptTemplate, HumanMessagePromptTemplate, PromptTemplate } from '@langchain/core/prompts'
import { OutputFixingParser } from 'langchain/output_parsers'
import { LLMChain } from 'langchain/chains'
import {
    IVisionChatModal,
    ICommonObject,
    INode,
    INodeData,
    INodeOutputsValue,
    INodeParams,
    IServerSideEventStreamer
} from '../../../src/Interface'
import { additionalCallbacks, ConsoleCallbackHandler, CustomChainHandler } from '../../../src/handler'
import { getBaseClasses, handleEscapeCharacters } from '../../../src/utils'
import { checkInputs, Moderation, streamResponse } from '../../moderation/Moderation'
import { formatResponse, injectOutputParser } from '../../outputparsers/OutputParserHelpers'
import { addImagesToMessages, llmSupportsVision } from '../../../src/multiModalUtils'

class LLMChain_Chains implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    baseClasses: string[]
    description: string
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]
    outputParser: BaseOutputParser

     {
        this.label = 'LLM Chain'
        this.name = 'llmChain'
        this.version = 3.0
        this.type = 'LLMChain'
        this.icon = 'LLM_Chain.svg'
        this.category = 'Chains'
        this.description = 'Chain to run queries against LLMs'
        th]
        this.inputs = [
            {
                label: 'Language Model',
                name: 'model',
                type: 'BaseLanguageModel'
            },
            {
                label: 'Prompt',
                name: 'prompt',
                type: 'BasePromptTemplate'
            },
            {
                label: 'Output Parser',
                name: 'outputParser',
                type: 'BaseLLMOutputParser',
                optional: true
            },
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            },
            {
                label: 'Chain Name',
                name: 'chainName',
                type: 'string',
                placeholder: 'Name Your Chain',
                optional: true
            }
        ]
        this.outputs = [
            {
                label: 'LLM Chain',
                name: 'llmChain',
                ba]
            },
            {
                label: 'Output Prediction',
                name: 'outputPrediction',
                baseClasses: ['string', 'json']
            }
        ]
    }

    a: Promise<any> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const prompt = nodeData.inputs?.prompt
        const output = nodeData.outputs?.output as string
        let promptValues: ICommonObject | undefined = nodeData.inputs?.prompt.promptValues as ICommonObject
        const llmOutputParser = nodeData.inputs?.outputParser as BaseOutputParser
        this.outputParser = llmOutputParser
         {
            let aut.autoFix
             {
                th
            }
        }
         {
            const chain = new LLMChain({
                llm: model,
                outputParser: this.outputParser as BaseLLMOutputParser<string | object>,
                prompt,
                verbose: process.env.DEBUG === 'true'
            })
            return chain
        } el {
            const chain = new LLMChain({
                llm: model,
                outputParser: this.outputParser as BaseLLMOutputParser<string | object>,
                prompt,
                verbose: process.env.DEBUG === 'true'
            })
            const inputVariables = chain.prompt.inputVariables as string[] // ["product"]
            p
            // Disable streaming because its not final chain
            const disableStreaming = true
            
            // eslint-disable-next-line no-console
            
            // eslint-disable-next-line no-console
            

            let finalRes = res
            ) {
                f.json
            }

            /**
             * Apply string transformation to convert special chars:
             * FROM: hello i am ben\n\n\thow are you?
             * TO: hello i am benFLOWISE_NEWLINEFLOWISE_NEWLINEFLOWISE_TABhow are you?
             */
            
        }
    }

    a: Promise<string | object> {
        const inputVariables = nodeData.instance.prompt.inputVariables as string[] // ["product"]
        const chain = nodeData.instance as LLMChain
        let promptValues: ICommonObject | undefined = nodeData.inputs?.prompt.promptValues as ICommonObject
        const outputParser = nodeData.inputs?.outputParser as BaseOutputParser
         {
            this.outputParser = outputParser
        }
        p
        
        // eslint-disable-next-line no-console
        
        // eslint-disable-next-line no-console
        
        return res
    }
}

const runPrediction = async (
    inputVariables: string[],
    chain: LLMChain<string | object | BaseLanguageModel<any, BaseLanguageModelCallOptions>>,
    input: string,
    promptValuesRaw: ICommonObject | undefined,
    options: ICommonObject,
    nodeData: INodeData,
    disableStreaming?: boolean
) => {
    
    

    const moderations = nodeData.inputs?.inputModeration as Moderation[]

    // this is true if the prediction is external and the client has requested streaming='true'
    const shouldStreamResponse = !disableStreaming && options.shouldStreamResponse
    const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
    const chatId = options.chatId

     {
        try {
            // Use the output of the moderation chain as input for the LLM chain
            
        }  {
            awa => )
             {
                
            }
            
        }
    }

    /**
     * Apply string transformation to reverse converted special chars:
     * FROM: { "value": "hello i am benFLOWISE_NEWLINEFLOWISE_NEWLINEFLOWISE_TABhow are you?" }
     * TO: { "value": "hello i am ben\n\n\thow are you?" }
     */
    

    ) {
        const visionChatModel = chain.llm as IVisionChatModal
        
         {
            // Change model to gpt-4-vision && max token to higher when using gpt-4-vision
            v
            // Add image to the message
             {
                const existingPromptTemplate = chain.prompt.template as string
                const msg = HumanMessagePromptTemplate.fromTemplate([
                    ...messageContent,
                    {
                        text: existingPromptTemplate
                    }
                ])
                msg.inputVariables = chain.prompt.inputVariables
                
            } el {
                  {
                     as HumanMessagePromptTemplate
                    .template as string
                    const msg = HumanMessagePromptTemplate.fromTemplate([
                        ...messageContent,
                        {
                            text: template
                        }
                    ])
                    msg.inputVariables = lastMessage.inputVariables
                    
                } else {
                    )
                }
            } el {
                let existingFewShotPromptTemplate = chain.prompt.examplePrompt.template as string
                let newFewShotPromptTemplate = ChatPromptTemplate.fromMessages([
                    HumanMe
                ])
                newFewSh)
                // @ts-ignore
                chain.prompt.examplePrompt = newFewShotPromptTemplate
            }
        } else {
            // revert to previous values if image upload is empty
            v
        }
    }

     {
        let seen: string[] = []

        f {
            
             {
                
            }
        }

         {
            // All inputVariables have fixed values specified
            const options = { ...promptValues }
             {
                
                
                
            } else {
                
                
            }
        } el {
            // If  as value
            
             th
            const options = {
                ...promptValues,
                [lastValue]: input
            }
             {
                
                
                
            } else {
                
                
            }
        } else {
            th}`)
        }
    } else {
         {
            

            
            
        } else {
            
            
        }
    }
}

module.exports = { nodeClass: LLMChain_Chains }
