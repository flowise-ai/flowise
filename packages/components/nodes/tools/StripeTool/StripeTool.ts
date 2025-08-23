import { StripeAgentToolkit } from '@stripe/agent-toolkit/langchain'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { convertMultiOptionsToStringArray, getCredentialData, getCredentialParam } from '../../../src/utils'

class StripeTool_Tools implements INode {
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
    badge?: string

     {
        this.label = 'StripeAgentTool'
        this.name = 'stripeAgentTool'
        this.version = 1.0
        this.type = 'stripeAgentTool'
        this.icon = 'stripe.png'
        this.category = 'Tools'
        this.description = 'Use Stripe Agent function calling for financial transactions'
        this.badge = 'BETA'
        this.inputs = [
            {
                label: 'Payment Links',
                name: 'paymentLinks',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Products',
                name: 'products',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Prices',
                name: 'prices',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Balance',
                name: 'balance',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Invoice Items',
                name: 'invoiceItems',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Invoices',
                name: 'invoices',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            },
            {
                label: 'Customers',
                name: 'customers',
                type: 'multiOptions',
                options: [
                    {
                        label: 'Create',
                        name: 'create'
                    },
                    {
                        label: 'Update',
                        name: 'update'
                    },
                    {
                        label: 'Read',
                        name: 'read'
                    }
                ],
                optional: true,
                additionalParams: true
            }
        ]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['stripeApi']
        }
        this.baseClasses = [this.type, 'Tool']
    }

    a: Promise<any> {
        
        

        const _paymentLinks = nodeData.inputs?.paymentLinks as string
        let paymentL

        const _products = nodeData.inputs?.products as string
        let p

        const _prices = nodeData.inputs?.prices as string
        let p

        const _balance = nodeData.inputs?.balance as string
        let balan

        const _invoiceItems = nodeData.inputs?.invoiceItems as string
        let 

        const _invoices = nodeData.inputs?.invoices as string
        let 

        const _customers = nodeData.inputs?.customers as string
        let 

        const actionObj: any = {}
         {
            actionObj['paymentLinks'] = {}
            ) actionObj['paymentLinks'].create = true
            ) actionObj['paymentLinks'].read = true
            ) actionObj['paymentLinks'].update = true
        }
         {
            actionObj['products'] = {}
            ) actionObj['products'].create = true
            ) actionObj['products'].read = true
            ) actionObj['products'].update = true
        }
         {
            actionObj['prices'] = {}
            ) actionObj['prices'].create = true
            ) actionObj['prices'].read = true
            ) actionObj['prices'].update = true
        }
         {
            actionObj['balance'] = {}
            ) actionObj['balance'].create = true
            ) actionObj['balance'].read = true
            ) actionObj['balance'].update = true
        }
         {
            actionObj['invoiceItems'] = {}
            ) actionObj['invoiceItems'].create = true
            ) actionObj['invoiceItems'].read = true
            ) actionObj['invoiceItems'].update = true
        }
         {
            actionObj['invoices'] = {}
            ) actionObj['invoices'].create = true
            ) actionObj['invoices'].read = true
            ) actionObj['invoices'].update = true
        }
         {
            actionObj['customers'] = {}
            ) actionObj['customers'].create = true
            ) actionObj['customers'].read = true
            ) actionObj['customers'].update = true
        }

        const stripeAgentToolkit = new StripeAgentToolkit({
            secretKey: stripeApiToken,
            configuration: {
                actions: actionObj
            }
        })

        
        f {
            // convert tool name into small letter, and space to underscore, ex: Create Payment Link => create_payment_link
            t.j.t
        }

        return stripeTool
    }
}

module.exports = { nodeClass: StripeTool_Tools }
