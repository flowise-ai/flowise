import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { INodeOptionsValue } from './Interface'

export enum MODEL_TYPE {
    CHAT = 'chat',
    LLM = 'llm',
    EMBEDDING = 'embedding'
}

: string => {
    , path.j]
    f {
        ) {
            return checkPath
        }
    }
    return ''
}

 => {
    let url
    try {
        u
    }  {
        return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
}

/**
 * Load the raw model file from either a URL or a local file
 * If any of the loading fails, fallback to the default models.json file on disk
 */
 => {
    const modelFile =
        process.env.MODEL_LIST_CONFIG_JSON ?? 'https://raw.githubusercontent.com/flowise-ai/flowise/main/packages/components/models.json'
    try {
        ) {
            
             {
                return resp.data
            } else {
                th
            }
        } el) {
            
             {
                
            }
        }
        th
    }  {
        , 'utf8')
         {
            
        }
        return {}
    }
}

 => {
    

    const categoryModels = models[category]
     => m
}

exp => {
    

    const categoryModels = models[category]
    
}

 => {
    f {
         === p) {
            f {
                 {
                    return m
                }
            }
        }
    }
    return undefined
}

exp => {
    const returnData: INodeOptionsValue[] = []
    try {
        
        
        return returnData
    }  {
        th
    }
}

exp => {
    const returnData: INodeOptionsValue[] = []
    try {
        
        
        return returnData
    }  {
        th
    }
}
