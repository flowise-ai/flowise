import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getInputVariables } from '../../../src/utils'
import { FewShotPromptTemplate, FewShotPromptTemplateInput, PromptTemplate, TemplateFormat } from '@langchain/core/prompts'
import type { Example } from '@langchain/core/prompts'

class FewShotPromptTemplate_Prompts implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'Few Shot Prompt Template'
        this.name = 'fewShotPromptTemplate'
        this.version = 1.0
        this.type = 'FewShotPromptTemplate'
        this.icon = 'prompt.svg'
        this.category = 'Prompts'
        this.description = 'Prompt template you can build with examples'
        th]
        this.inputs = [
            {
                label: 'Examples',
                name: 'examples',
                type: 'string',
                rows: 4,
                placeholder: `[
  { "word": "happy", "antonym": "sad" },
  { "word": "tall", "antonym": "short" },
]`
            },
            {
                label: 'Example Prompt',
                name: 'examplePrompt',
                type: 'PromptTemplate'
            },
            {
                label: 'Prefix',
                name: 'prefix',
                type: 'string',
                rows: 4,
                placeholder: `Give the antonym of every input`
            },
            {
                label: 'Suffix',
                name: 'suffix',
                type: 'string',
                rows: 4,
                placeholder: `Word: {input}\nAntonym:`
            },
            {
                label: 'Example Separator',
                name: 'exampleSeparator',
                type: 'string',
                placeholder: `\n\n`
            },
            {
                label: 'Template Format',
                name: 'templateFormat',
                type: 'options',
                options: [
                    {
                        label: 'f-string',
                        name: 'f-string'
                    },
                    {
                        label: 'jinja-2',
                        name: 'jinja-2'
                    }
                ],
                default: `f-string`
            }
        ]
    }

    a: Promise<any> {
        const examplesStr = nodeData.inputs?.examples
        const prefix = nodeData.inputs?.prefix as string
        const suffix = nodeData.inputs?.suffix as string
        const exampleSeparator = nodeData.inputs?.exampleSeparator as string
        const templateFormat = nodeData.inputs?.templateFormat as TemplateFormat
        const examplePrompt = nodeData.inputs?.examplePrompt as PromptTemplate

        , ...getInputVa])]

        let examples: Example[] = []
         {
            try {
                example
            }  {
                th
            }
        }

        try {
            const obj: FewShotPromptTemplateInput = {
                examples,
                examplePrompt,
                prefix,
                suffix,
                inputVariables,
                exampleSeparator,
                templateFormat
            }
            
            return prompt
        }  {
            th
        }
    }
}

module.exports = { nodeClass: FewShotPromptTemplate_Prompts }
