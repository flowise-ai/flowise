import type { CachedContentBase, CachedContent, Content } from '@google/generative-ai'
import { GoogleAICacheManager as GoogleAICacheManagerBase } from '@google/generative-ai/server'
import hash from 'object-hash'

type CacheContentOptions = Omit<CachedContentBase, 'contents'> & { contents?: Content[] }

export class GoogleAICacheManager extends GoogleAICacheManagerBase {
    private ttlSeconds: number
    p

     {
        this.ttlSeconds = ttlSeconds
    }

    a: Promise<CachedContent | undefined> {
        const { model, tools, contents } = options
         {
            return undefined
        }
        const hashKey = hash({
            model,
            tools,
            contents
        })
        ) {
            
        }
        
        .f => 
         {
            th
            return cachedContent
        }
        const res = await this.create({
            ...(,
            displayName: hashKey,
            ttlSeconds: this.ttlSeconds
        })
        th
        return res
    }
}

export default GoogleAICacheManager
