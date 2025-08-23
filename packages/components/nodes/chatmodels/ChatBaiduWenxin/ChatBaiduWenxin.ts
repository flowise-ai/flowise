import { BaseCache } from '@langchain/core/caches'
import { ChatBaiduQianfan } from '@langchain/baidu-qianfan'
import { ICommonObject, INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'

class ChatBaiduWenxin_ChatModels implements INode {
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
        this.label = 'ChatBaiduWenxin'
        this.name = 'chatBaiduWenxin'
        this.version = 2.0
        this.type = 'ChatBaiduWenxin'
        this.icon = 'baiduwenxin.svg'
        this.category = 'Chat Models'
        this.description = 'Wrapper around BaiduWenxin Chat Endpoints'
        th]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['baiduQianfanApi']
        }
        this.inputs = [
            {
                label: 'Cache',
                name: 'cache',
                type: 'BaseCache',
                optional: true
            },
            {
                label: 'Model',
                name: 'modelName',
                type: 'string',
                placeholder: 'ERNIE-Bot-turbo'
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
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const cache = nodeData.inputs?.cache as BaseCache
        const temperature = nodeData.inputs?.temperature as string
        const modelName = nodeData.inputs?.modelName as string
        const streaming = nodeData.inputs?.streaming as boolean

        
        
        

        const obj: Partial<ChatBaiduQianfan> = {
            streaming: streaming ?? true,
            qianfanAccessKey,
            qianfanSecretKey,
            modelName,
            tempe : undefined
        }
         obj.cache = cache

        
        return model
    }
}

module.exports = { nodeClass: ChatBaiduWenxin_ChatModels }
