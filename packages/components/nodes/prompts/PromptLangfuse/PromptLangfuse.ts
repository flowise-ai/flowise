import { ICommonObject, INode, INodeData, INodeParams, PromptTemplate } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam, getInputVariables, transformBracesWithColon } from '../../../src/utils'
import { PromptTemplateInput } from '@langchain/core/prompts'
import { Langfuse } from 'langfuse'

class PromptLangfuse_Prompts implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    author: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'LangFuse Prompt Template'
        this.name = 'promptLangFuse'
        this.version = 1.0
        this.type = 'PromptTemplate'
        this.icon = 'prompt.svg'
        this.category = 'Prompts'
        this.author = 'Lucas Cruz'
        this.description = 'Fetch schema from LangFuse to represent a prompt for an LLM'
        th]
        this.credential = {
            label: 'Langfuse Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['langfuseApi']
        }
        this.inputs = [
            {
                label: 'Prompt Name',
                name: 'template',
                type: 'string',
                placeholder: `Name of the template`
            },
            {
                label: 'Format Prompt Values',
                name: 'promptValues',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
            }
        ]
    }

    a: Promise<any> {
        
        
        
        

        const langfuse = new Langfuse({
            secretKey: langFuseSecretKey,
            publicKey: langFusePublicKey,
            baseUrl: langFuseEndpoint ?? 'https://cloud.langfuse.com',
            sdkIntegration: 'Flowise'
        })

        
        let template = langfu

        const promptValuesStr = nodeData.inputs?.promptValues

        let promptValues: ICommonObject = {}
         {
            try {
                p
            }  {
                th
            }
        }

        
        template = t

        try {
            const options: PromptTemplateInput = {
                template,
                inputVariables
            }
            
            prompt.promptValues = promptValues
            return prompt
        }  {
            th
        }
    }
}

module.exports = { nodeClass: PromptLangfuse_Prompts }
