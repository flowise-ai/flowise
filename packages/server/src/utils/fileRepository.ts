import { ChatFlow } from '../database/entities/ChatFlow'
import { IReactFlowObject } from '../Interface'
import { addBase64FilesToStorage } from 'flowise-components'
import { checkStorage, updateStorageUsage } from './quotaUsage'
import { UsageCacheManager } from '../UsageCacheManager'

exp => {
    
    
    let found = false
    const nodes = parsedFlowData.nodes
    f {
         {
            continue
        }
        const inputs = node.data.inputs
         {
            
            f {
                const input = inputs[keys[i]]
                 {
                    continue
                }
                 {
                    continue
                }
                ) {
                    try {
                        
                        f {
                            const file = files[j]
                            ) {
                                found = true
                                break
                            }
                        }
                    }  {
                        continue
                    }
                }
                ) {
                    found = true
                    break
                }
            }
        }
    }
    return found
}

export const updateFlowDataWithFilePaths = async (
    chatflowid: string,
    flowData: string,
    orgId: string,
    workspaceId: string,
    subscriptionId: string,
    usageCacheManager: UsageCacheManager
) => {
    try {
        
        
        const nodes = parsedFlowData.nodes

        f {
            const node = nodes[j]
             {
                continue
            }
             {
                const inputs = node.data.inputs
                
                f {
                    const fileNames: string[] = []
                    const key = keys[i]
                    const input = inputs?.[key]
                     {
                        continue
                    }
                     {
                        continue
                    }
                    ) {
                        try {
                            
                            f {
                                const file = files[j]
                                ) {
                                    awa
                                    
                                    node.data.inputs[key] = path
                                    awa
                                }
                            }
                        }  {
                            continue
                        }
                    } el) {
                        awa
                        
                        node.data.inputs[key] = path
                        awa
                    }
                }
            }
        }
        
    }  {
        th
    }
}
