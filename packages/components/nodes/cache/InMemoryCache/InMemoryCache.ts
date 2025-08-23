import { BaseCache } from '@langchain/core/caches'
import hash from 'object-hash'
import { getBaseClasses, ICommonObject, INode, INodeData, INodeParams } from '../../../src'

class InMemoryCache implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    credential: INodeParams

     {
        this.label = 'InMemory Cache'
        this.name = 'inMemoryCache'
        this.version = 1.0
        this.type = 'InMemoryCache'
        this.description = 'Cache LLM response in memory, will be cleared once app restarted'
        this.icon = 'Memory.svg'
        this.category = 'Cache'
        th]
        this.inputs = []
    }

    a: Promise<any> {
        ) ?? new Map()
        

        : Promise<any | null> => {
            ) ?? inMemCache.cache
            ) ?? null)
        }

        : Promise<void> => {
            , value)
            awa
        }
        return inMemCache
    }
}

: )

class InMemoryCacheExtended extends BaseCache {
    cache: Map<string, any>

     {
        
        this.cache = map
    }

    l: Promise<any | null> {
        ) ?? null)
    }

    a: Promise<void> {
        th, value)
    }
}

module.exports = { nodeClass: InMemoryCache }
