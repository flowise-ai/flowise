import { Embeddings } from '@langchain/core/embeddings'
import { BaseStore } from '@langchain/core/stores'
import { CacheBackedEmbeddings } from 'langchain/embeddings/cache_backed'
import { getBaseClasses, ICommonObject, INode, INodeData, INodeParams } from '../../../src'

class InMemoryEmbeddingCache implements INode {
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
        this.label = 'InMemory Embedding Cache'
        this.name = 'inMemoryEmbeddingCache'
        this.version = 1.0
        this.type = 'InMemoryEmbeddingCache'
        this.description = 'Cache generated Embeddings in memory to avoid needing to recompute them.'
        this.icon = 'Memory.svg'
        this.category = 'Cache'
        th]
        this.inputs = [
            {
                label: 'Embeddings',
                name: 'embeddings',
                type: 'Embeddings'
            },
            {
                label: 'Namespace',
                name: 'namespace',
                type: 'string',
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const namespace = nodeData.inputs?.namespace as string
        const underlyingEmbeddings = nodeData.inputs?.embeddings as Embeddings
        ) ?? {}
        

         => {
            ) ?? inMemCache.store
             => mem
        }

        : Promise<void> => {
            f {
                inMemCache.store[key] = value
            }
            awa
        }

        : Promise<void> => {
            f {
                delete inMemCache.store[key]
            }
            awa
        }

        return CacheBackedEmbeddings.fromBytesStore(underlyingEmbeddings, inMemCache, {
            namespace: namespace
        })
    }
}

class InMemoryEmbeddingCacheExtended<T = any> extends BaseStore<string, T> {
    lc_namespace = ['langchain', 'storage', 'in_memory']

    store: Record<string, T> = {}

     {
        
        this.store = map
    }

    /**
     * Retrieves the values associated with the given keys from the store.
     * @param keys Keys to retrieve values for.
     * @returns Array of values associated with the given keys.
     */
    a {
         => th
    }

    /**
     * Sets the values for the given keys in the store.
     * @param keyValuePairs Array of key-value pairs to set in the store.
     * @returns Promise that resolves when all key-value pairs have been set.
     */
    a: Promise<void> {
        f {
            this.store[key] = value
        }
    }

    /**
     * Deletes the given keys and their associated values from the store.
     * @param keys Keys to delete from the store.
     * @returns Promise that resolves when all keys have been deleted.
     */
    a: Promise<void> {
        f {
            delete this.store[key]
        }
    }

    /**
     * Asynchronous generator that yields keys from the store. If a prefix is
     * provided, it only yields keys that start with the prefix.
     * @param prefix Optional prefix to filter keys.
     * @returns AsyncGenerator that yields keys from the store.
     */
    a: AsyncGenerator<string> {
        
        f {
            ) {
                yield key
            }
        }
    }
}

module.exports = { nodeClass: InMemoryEmbeddingCache }
