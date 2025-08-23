import axios from 'axios'
import { BaseLanguageModel } from '@langchain/core/language_models/base'
import { AgentExecutor } from 'langchain/agents'
import { LLMChain } from 'langchain/chains'
import { ICommonObject, INode, INodeData, INodeParams, IServerSideEventStreamer, PromptTemplate } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { ConsoleCallbackHandler, CustomChainHandler, additionalCallbacks } from '../../../src/handler'
import { LoadPyodide, finalSystemPrompt, systemPrompt } from './core'
import { checkInputs, Moderation } from '../../moderation/Moderation'
import { formatResponse } from '../../outputparsers/OutputParserHelpers'

class Airtable_Agents implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'Airtable Agent'
        this.name = 'airtableAgent'
        this.version = 2.0
        this.type = 'AgentExecutor'
        this.category = 'Agents'
        this.icon = 'airtable.svg'
        this.description = 'Agent used to answer queries on Airtable table'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['airtableApi']
        }
        this.inputs = [
            {
                label: 'Language Model',
                name: 'model',
                type: 'BaseLanguageModel'
            },
            {
                label: 'Base Id',
                name: 'baseId',
                type: 'string',
                placeholder: 'app11RobdGoX0YNsC',
                description:
                    'If your table URL looks like: https://airtable.com/app11RobdGoX0YNsC/tblJdmvbrgizbYICO/viw9UrP77Id0CE4ee, app11RovdGoX0YNsC is the base id'
            },
            {
                label: 'Table Id',
                name: 'tableId',
                type: 'string',
                placeholder: 'tblJdmvbrgizbYICO',
                description:
                    'If your table URL looks like: https://airtable.com/app11RobdGoX0YNsC/tblJdmvbrgizbYICO/viw9UrP77Id0CE4ee, tblJdmvbrgizbYICO is the table id'
            },
            {
                label: 'Return All',
                name: 'returnAll',
                type: 'boolean',
                default: true,
                additionalParams: true,
                description: 'If all results should be returned or only up to a given limit'
            },
            {
                label: 'Limit',
                name: 'limit',
                type: 'number',
                default: 100,
                additionalParams: true,
                description: 'Number of results to return'
            },
            {
                label: 'Input Moderation',
                description: 'Detect text that could generate harmful output and prevent it from being sent to the language model',
                name: 'inputModeration',
                type: 'Moderation',
                optional: true,
                list: true
            }
        ]
    }

    a: Promise<any> {
        // Not used
        return undefined
    }

    a: Promise<string | object> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const baseId = nodeData.inputs?.baseId as string
        const tableId = nodeData.inputs?.tableId as string
        const returnAll = nodeData.inputs?.returnAll as boolean
        const limit = nodeData.inputs?.limit as string
        const moderations = nodeData.inputs?.inputModeration as Moderation[]

         {
            try {
                // Use the output of the moderation chain as input for the Vectara chain
                
            }  {
                awa => )
                //  {
                //     
                // }
                
            }
        }

        const shouldStreamResponse = options.shouldStreamResponse
        const sseStreamer: IServerSideEventStreamer = options.sseStreamer as IServerSideEventStreamer
        const chatId = options.chatId

        
        

        let airtableData: ICommonObject[] = []

         {
            a
        } else {
            a : 100, ba
        }

        let ba).t

        
        

        

        // First load the csv file and get the dataframe dictionary of column types
        // For example using titanic.csv: {'PassengerId': 'int64', 'Survived': 'int64', 'Pclass': 'int64', 'Name': 'object', 'Sex': 'object', 'Age': 'float64', 'SibSp': 'int64', 'Parch': 'int64', 'Ticket': 'object', 'Fare': 'float64', 'Cabin': 'object', 'Embarked': 'object'}
        let dataframeColDict = ''
        try {
            const code = `import pandas as pd
import base64
import json

base64_string = "${base64String}"



j


my_.t
p
j`
            
        }  {
            th
        }

        // Then tell GPT to come out with ONLY python code
        // F, 
        let pythonCode = ''
         {
            const chain = new LLMChain({
                llm: model,
                p,
                verbose: process.env.DEBUG === 'true' ? true : false
            })
            const inputs = {
                dict: dataframeColDict,
                question: input
            }
            
            pythonCode = res?.text
            // Regex to get rid of markdown code blocks syntax
            pyth
        }

        // Then run the code using Pyodide
        let finalResult = ''
         {
            try {
                const code = `import pandas as pd\n${pythonCode}`
                // TODO: get print console output
                f
            }  {
                th
            }
        }

        // Finally, return a complete answer
         {
            const chain = new LLMChain({
                llm: model,
                p,
                verbose: process.env.DEBUG === 'true' ? true : false
            })
            const inputs = {
                question: input,
                answer: finalResult
            }

             {
                
                
                return result?.text
            } else {
                
                return result?.text
            }
        }

        return pythonCode
    }
}

interface AirtableLoaderResponse {
    records: AirtableLoaderPage[]
    offset?: string
}

interface AirtableLoaderPage {
    id: string
    createdTime: string
    fields: ICommonObject
}

: Promise<AirtableLoaderResponse> => {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
        
        return response.data
    }  {
        th
    }
}

: Promise<ICommonObject[]> => {
    const params: ICommonObject = { pageSize: 100 }
    let data: AirtableLoaderResponse
    let returnPages: AirtableLoaderPage[] = []

    do {
        
        
        params.offset = data.offset
    } wh

     => page.f
}

: Promise<ICommonObject[]> => {
    const params = { maxRecords: limit }
    
     {
        return []
    }
     => page.f
}

module.exports = { nodeClass: Airtable_Agents }
