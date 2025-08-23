import { IComponentNodes, IComponentCredentials } from './Interface'
import path from 'path'
import { Dirent } from 'fs'
import { getNodeModulesPackagePath } from './utils'
import { promises } from 'fs'
import { ICommonObject } from 'flowise-components'
import logger from './utils/logger'
import { appConfig } from './AppConfig'

export class NodesPool {
    componentNodes: IComponentNodes = {}
    componentCredentials: IComponentCredentials = {}
    private credentialIconPath: ICommonObject = {}

    /**
     * Initialize to get all nodes & credentials
     */
    a {
        awa
        awa
    }

    /**
     * Initialize nodes
     */
    p {
         : []
        
        
        
        return Promise.all(
            n => {
                ) {
                    try {
                        

                         {
                            
                            newNodeInstance.filePath = file

                            // Replace file icon with absolute path
                            if (
                                newNodeInstance.icon &&
                                (newN ||
                                    newN ||
                                    newN)
                            ) {
                                .
                                f
                                }/${newNodeInstance.icon}`
                                newNodeInstance.icon = nodeIconAbsolutePath

                                // Store icon path for componentCredentials
                                 {
                                    f {
                                        this.credentialIconPath[credName] = nodeIconAbsolutePath
                                    }
                                }
                            }

                            const skipCategories = ['Analytic', 'SpeechToText']
                            

                            const isCommunityNodesAllowed = appConfig.showCommunityNodes
                            const isAuthorPresent = newNodeInstance.author
                            let conditionTwo = true
                             conditionTwo = false

                            

                             {
                                this.componentNodes[newNodeInstance.name] = newNodeInstance
                            }
                        }
                    }  {
                        l
                    }
                }
            })
        )
    }

    /**
     * Initialize credentials
     */
    p {
        
        
        
        return Promise.all(
            n => {
                ) {
                    
                     {
                        
                        newCredInstance.icon = this.credentialIconPath[newCredInstance.name] ?? ''
                        this.componentCredentials[newCredInstance.name] = newCredInstance
                    }
                }
            })
        )
    }

    /**
     * Recursive function to get node files
     * @param {string} dir
     * @returns {string[]}
     */
    p: Promise<string[]> {
        
        const files = await Promise.all(
             => {
                
                 ? th : res
            })
        )
        
    }
}
