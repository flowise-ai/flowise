import { cloneDeep, omit } from 'lodash'
import { StatusCodes } from 'http-status-codes'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { INodeData, MODE } from '../../Interface'
import { INodeOptionsValue } from 'flowise-components'
import { databaseEntities } from '../../utils'
import logger from '../../utils/logger'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { OMIT_QUEUE_JOB_DATA } from '../../utils/constants'
import { executeCustomNodeFunction } from '../../utils/executeCustomNodeFunction'

// Get all component nodes
 => {
    try {
        
        const dbResponse = []
        f {
            
            
        }
        return dbResponse
    }  {
        th}`)
    }
}

// Get all component nodes for a specific category
 => {
    try {
        
        const dbResponse = []
        f {
            const componentNode = appServer.nodesPool.componentNodes[nodeName]
             {
                
                
            }
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Get specific component node via name
 => {
    try {
        
        ) {
            const dbResponse = appServer.nodesPool.componentNodes[nodeName]
            return dbResponse
        } else {
            th
        }
    }  {
        th}`)
    }
}

// Returns specific component node icon via name
 => {
    try {
        
        ) {
            const nodeInstance = appServer.nodesPool.componentNodes[nodeName]
             {
                th
            }

             || n || n) {
                const filepath = nodeInstance.icon
                return filepath
            } else {
                th
            }
        } else {
            th
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<any> => {
    try {
        
        const nodeData: INodeData = requestBody
        ) {
            try {
                const nodeInstance = appServer.nodesPool.componentNodes[nodeName]
                const methodName = nodeData.loadMethod || ''

                const dbResponse: INodeOptionsValue[] = await nodeInstance.loadMethods![methodName]!.call(nodeInstance, nodeData, {
                    appDataSource: appServer.AppDataSource,
                    databaseEntities: databaseEntities,
                    componentNodes: appServer.nodesPool.componentNodes,
                    previousNodes: requestBody.previousNodes,
                    currentNode: requestBody.currentNode,
                    searchOptions: requestBody.searchOptions,
                    cachePool: appServer.cachePool
                })

                return dbResponse
            }  {
                return []
            }
        } else {
            th
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// execute custom function node
 => {
    
    const executeData = {
        appDataSource: appServer.AppDataSource,
        componentNodes: appServer.nodesPool.componentNodes,
        data: requestBody,
        isExecuteCustomFunction: true,
        orgId,
        workspaceId
    }

     {
        

        )
        l

        
        
         {
            th
        }

        return result
    } else {
        
    }
}

export default {
    getAllNodes,
    getNodeByName,
    getSingleNodeIcon,
    getSingleNodeAsyncOptions,
    executeCustomFunction,
    getAllNodesForCategory
}
