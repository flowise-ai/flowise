import { Tool } from '@langchain/core/tools'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { LangchainToolSet } from 'composio-core'

class ComposioTool extends Tool {
    name = 'composio'
    description = 'Tool for interacting with Composio applications and performing actions'
    toolset: any
    appName: string
    actions: string[]

     {
        
        this.toolset = toolset
        this.appName = appName
        this.actions = actions
    }

    a: Promise<string> {
        try {
            return `Executed action on ${this.appName} with input: ${input}`
        }  {
            return 'Failed to execute action'
        }
    }
}

class Composio_Tools implements INode {
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
        this.label = 'Composio'
        this.name = 'composio'
        this.version = 2.0
        this.type = 'Composio'
        this.icon = 'composio.svg'
        this.category = 'Tools'
        this.description = 'Toolset with over 250+ Apps for building AI-powered applications'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['composioApi']
        }
        this.inputs = [
            {
                label: 'App Name',
                name: 'appName',
                type: 'asyncOptions',
                loadMethod: 'listApps',
                description: 'Select the app to connect with',
                refresh: true
            },
            {
                label: 'Auth Status',
                name: 'authStatus',
                type: 'asyncOptions',
                loadMethod: 'authStatus',
                placeholder: 'Connection status will appear here',
                refresh: true
            },
            {
                label: 'Actions to Use',
                name: 'actions',
                type: 'asyncMultiOptions',
                loadMethod: 'listActions',
                description: 'Select the actions you want to use',
                refresh: true
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        l: Promise<INodeOptionsValue[]> => {
            try {
                
                

                 {
                    return [
                        {
                            label: 'API Key Required',
                            name: 'placeholder',
                            description: 'Enter Composio API key in the credential field'
                        }
                    ]
                }

                
                
                app => a.name.l)

                 => ({
                    label: name.t,
                    name: name,
                    description: rest.description || name
                }))
            }  {
                
                return [
                    {
                        label: 'Error Loading Apps',
                        name: 'error',
                        description: 'Failed to load apps. Please check your API key and try again'
                    }
                ]
            }
        },
        l: Promise<INodeOptionsValue[]> => {
            try {
                
                
                const appName = nodeData.inputs?.appName as string

                 {
                    return [
                        {
                            label: 'API Key Required',
                            name: 'placeholder',
                            description: 'Enter Composio API key in the credential field'
                        }
                    ]
                }

                 {
                    return [
                        {
                            label: 'Select an App first',
                            name: 'placeholder',
                            description: 'Select an app from the dropdown to view available actions'
                        }
                    ]
                }

                
                
                a => a.name.l)

                 => ({
                    label: name.t,
                    name: name,
                    description: rest.description || name
                }))
            }  {
                
                return [
                    {
                        label: 'Error Loading Actions',
                        name: 'error',
                        description: 'Failed to load actions. Please check your API key and try again'
                    }
                ]
            }
        },
        authStatu: Promise<INodeOptionsValue[]> => {
            
            
            const appName = nodeData.inputs?.appName as string

             {
                return [
                    {
                        label: 'API Key Required',
                        name: 'placeholder',
                        description: 'Enter Composio API key in the credential field'
                    }
                ]
            }

             {
                return [
                    {
                        label: 'Select an App first',
                        name: 'placeholder',
                        description: 'Select an app from the dropdown to view available actions'
                    }
                ]
            }

            
            .getC })
            return [
                {
                    label: authStatus ? 'Connected' : 'Not Connected',
                    name: authStatus ? 'Connected' : 'Not Connected',
                    description: authStatus ? 'Selected app has an active connection' : 'Please connect the app on app.composio.dev'
                }
            ]
        }
    }

    a: Promise<any> {
         nodeData.inputs = {}

        
        

         {
            nodeData.inputs = {
                appName: undefined,
                authStatus: '',
                actions: []
            }
            th
        }

        const _actions = nodeData.inputs?.actions
        let actions = []
         {
            try {
                a : _actions
            }  {
                
            }
        }

        
        
        return tools
    }
}

module.exports = { nodeClass: Composio_Tools }
