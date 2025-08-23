import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import type { SafetySetting } from '@google/generative-ai'
import { BaseCache } from '@langchain/core/caches'
import { ICommonObject, IMultiModalOption, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { getModels, MODEL_TYPE } from '../../../src/modelLoader'
import { ChatGoogleGenerativeAI, GoogleGenerativeAIChatInput } from './FlowiseChatGoogleGenerativeAI'

class GoogleGenerativeAI_ChatModels implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'ChatGoogleGenerativeAI'
        this.name = 'chatGoogleGenerativeAI'
        this.version = 3.1
        this.type = 'ChatGoogleGenerativeAI'
        this.icon = 'GoogleGemini.svg'
        this.category = 'Chat Models'
        this.description = 'Wrapper around Google Gemini large language models that use the Chat endpoint'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['googleGenerativeAI'],
            optional: false,
            description: 'Google Generative AI credential.'
        }
        this.inputs = [
            {
                label: 'Cache',
                name: 'cache',
                type: 'BaseCache',
                optional: true
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                default: 'gemini-1.5-flash-latest'
            },
            {
                label: 'Custom Model Name',
                name: 'customModelName',
                type: 'string',
                placeholder: 'gemini-1.5-pro-exp-0801',
                description: 'Custom model name to use. If provided, it will override the model selected',
                additionalParams: true,
                optional: true
            },
            {
                label: 'Temperature',
                name: 'temperature',
                type: 'number',
                step: 0.1,
                default: 0.9,
                optional: true
            },
            {
                label: 'Streaming',
                name: 'streaming',
                type: 'boolean',
                default: true,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Max Output Tokens',
                name: 'maxOutputTokens',
                type: 'number',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top Probability',
                name: 'topP',
                type: 'number',
                step: 0.1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Top Next Highest Probability Tokens',
                name: 'topK',
                type: 'number',
                description: `Decode using top-k sampling: consider the set of top_k most probable tokens. Must be positive`,
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Safety Settings',
                name: 'safetySettings',
                type: 'array',
                description:
                    'Safety settings for the model. Refer to the <a href="https://ai.google.dev/gemini-api/docs/safety-settings">official guide</a> on how to use Safety Settings',
                array: [
                    {
                        label: 'Harm Category',
                        name: 'harmCategory',
                        type: 'options',
                        options: [
                            {
                                label: 'Dangerous',
                                name: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                                description: 'Promotes, facilitates, or encourages harmful acts.'
                            },
                            {
                                label: 'Harassment',
                                name: HarmCategory.HARM_CATEGORY_HARASSMENT,
                                description: 'Negative or harmful comments targeting identity and/or protected attributes.'
                            },
                            {
                                label: 'Hate Speech',
                                name: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                                description: 'Content that is rude, disrespectful, or profane.'
                            },
                            {
                                label: 'Sexually Explicit',
                                name: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                                description: 'Contains references to sexual acts or other lewd content.'
                            },
                            {
                                label: 'Civic Integrity',
                                name: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY,
                                description: 'Election-related queries.'
                            }
                        ]
                    },
                    {
                        label: 'Harm Block Threshold',
                        name: 'harmBlockThreshold',
                        type: 'options',
                        options: [
                            {
                                label: 'None',
                                name: HarmBlockThreshold.BLOCK_NONE,
                                description: 'Always show regardless of probability of unsafe content'
                            },
                            {
                                label: 'Only High',
                                name: HarmBlockThreshold.BLOCK_ONLY_HIGH,
                                description: 'Block when high probability of unsafe content'
                            },
                            {
                                label: 'Medium and Above',
                                name: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                                description: 'Block when medium or high probability of unsafe content'
                            },
                            {
                                label: 'Low and Above',
                                name: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
                                description: 'Block when low, medium or high probability of unsafe content'
                            },
                            {
                                label: 'Th',
                                name: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
                                description: 'Threshold is unspecified, block using default threshold'
                            }
                        ]
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                description: 'Base URL for the API. Leave empty to use the default.',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Allow Image Uploads',
                name: 'allowImageUploads',
                type: 'boolean',
                description:
                    'Allow image input. Refer to the <a href="https://docs.flowise-ai.github.io/using-flowise/uploads#image" target="_blank">docs</a> for more details.',
                default: false,
                optional: true
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        
        

        const temperature = nodeData.inputs?.temperature as string
        const modelName = nodeData.inputs?.modelName as string
        const customModelName = nodeData.inputs?.customModelName as string
        const maxOutputTokens = nodeData.inputs?.maxOutputTokens as string
        const topP = nodeData.inputs?.topP as string
        const topK = nodeData.inputs?.topK as string
        const _safetySettings = nodeData.inputs?.safetySettings as string

        const cache = nodeData.inputs?.cache as BaseCache
        const streaming = nodeData.inputs?.streaming as boolean
        const baseUrl = nodeData.inputs?.baseUrl as string | undefined

        const allowImageUploads = nodeData.inputs?.allowImageUploads as boolean

        const obj: GoogleGenerativeAIChatInput = {
            apiKey: apiKey,
            model: customModelName || modelName,
            streaming: streaming ?? true
        }

        // this extra metadata is needed, as langchain does not show the model name in the callbacks.
        obj.metadata = {
            fw_model_name: customModelName || modelName
        }
         
         
         
         obj.cache = cache
         
         obj.baseUrl = baseUrl

        let safetySettings: SafetySetting[] = []
         {
            try {
                 : _safetySettings
                ) {
                    const validSettings = parsedSafetySettings
                        .f => 
                        .map(( => ({
                            category: setting.harmCategory as HarmCategory,
                            threshold: setting.harmBlockThreshold as HarmBlockThreshold
                        }))

                    // Remove duplicates by keeping only the first occurrence of each harm category
                    
                     => {
                        ) {
                            return false
                        }
                        
                        return true
                    })
                }
            }  {
                
            }
        }
         obj.safetySettings = safetySettings

        const multiModalOption: IMultiModalOption = {
            image: {
                allowImageUploads: allowImageUploads ?? false
            }
        }

        
        m

        return model
    }
}

module.exports = { nodeClass: GoogleGenerativeAI_ChatModels }
