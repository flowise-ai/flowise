/**
 * Strictly no getRepository, appServer here, must be passed as parameter
 */

import path from 'path'
import fs from 'fs'
import logger from './logger'
import { v4 as uuidv4 } from 'uuid'
import {
    IChatFlow,
    IComponentCredentials,
    IComponentNodes,
    ICredentialDataDecrypted,
    ICredentialReqBody,
    IDepthQueue,
    IExploredNode,
    INodeData,
    INodeDependencies,
    INodeDirectedGraph,
    INodeOverrides,
    INodeQueue,
    IOverrideConfig,
    IReactFlowEdge,
    IReactFlowNode,
    IVariable,
    IVariableDict,
    IVariableOverride,
    IncomingInput
} from '../Interface'
import { cloneDeep, get, isEqual } from 'lodash'
import {
    convertChatHistoryToText,
    getInputVariables,
    handleEscapeCharacters,
    getEncryptionKeyPath,
    ICommonObject,
    IDatabaseEntity,
    IMessage,
    FlowiseMemory,
    IFileUpload,
    getS3Config
} from 'flowise-components'
import { randomBytes } from 'crypto'
import { AES, enc } from 'crypto-js'
import multer from 'multer'
import multerS3 from 'multer-s3'
import MulterGoogleCloudStorage from 'multer-cloud-storage'
import { ChatFlow } from '../database/entities/ChatFlow'
import { ChatMessage } from '../database/entities/ChatMessage'
import { Credential } from '../database/entities/Credential'
import { Tool } from '../database/entities/Tool'
import { Assistant } from '../database/entities/Assistant'
import { Lead } from '../database/entities/Lead'
import { DataSource } from 'typeorm'
import { CachePool } from '../CachePool'
import { Variable } from '../database/entities/Variable'
import { DocumentStore } from '../database/entities/DocumentStore'
import { DocumentStoreFileChunk } from '../database/entities/DocumentStoreFileChunk'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import {
    CreateSecretCommand,
    GetSecretValueCommand,
    SecretsManagerClient,
    SecretsManagerClientConfig
} from '@aws-sdk/client-secrets-manager'

export const QUESTION_VAR_PREFIX = 'question'
export const FILE_ATTACHMENT_PREFIX = 'file_attachment'
export const CHAT_HISTORY_VAR_PREFIX = 'chat_history'
export const RUNTIME_MESSAGES_LENGTH_VAR_PREFIX = 'runtime_messages_length'
export const CURRENT_DATE_TIME_VAR_PREFIX = 'current_date_time'
export const REDACTED_CREDENTIAL_VALUE = '_FLOWISE_BLANK_07167752-1a71-43b1-bf8f-4f32252165db'

let secretsManagerClient: SecretsManagerClient | null = null
const USE_AWS_SECRETS_MANAGER = process.env.SECRETKEY_STORAGE_TYPE === 'aws'
 {
    const region = process.env.SECRETKEY_AWS_REGION || 'us-east-1' // Default region if not provided
    const accessKeyId = process.env.SECRETKEY_AWS_ACCESS_KEY
    const secretAccessKey = process.env.SECRETKEY_AWS_SECRET_KEY

    const secretManagerConfig: SecretsManagerClientConfig = {
        region: region
    }

     {
        secretManagerConfig.credentials = {
            accessKeyId,
            secretAccessKey
        }
    }
    
}

export const databaseEntities: IDatabaseEntity = {
    ChatFlow: ChatFlow,
    ChatMessage: ChatMessage,
    Tool: Tool,
    Credential: Credential,
    Lead: Lead,
    Assistant: Assistant,
    Variable: Variable,
    DocumentStore: DocumentStore,
    DocumentStoreFileChunk: DocumentStoreFileChunk
}

/**
 * Returns the home folder path of the user if
 * none can be found it falls back to the current
 * working directory
 *
 */
exp: string => {
    let variableName = 'HOME'
     {
        variableName = 'USERPROFILE'
    }

     {
        // If for some reason the variable does not exist
        // fall back to current folder
        
    }
    return process.env[variableName] as string
}

/**
 * Returns the path of node modules package
 * @param {string} packageName
 * @returns {string}
 */
exp: string => {
    const checkPaths = [
        path.j,
        path.j,
        path.j,
        path.j,
        path.j
    ]
    f {
        ) {
            return checkPath
        }
    }
    return ''
}

/**
 * Construct graph and node dependencies score
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {IReactFlowEdge[]} reactFlowEdges
 * @param {{ isNonDirected?: boolean, isReversed?: boolean }} options
 */
export const constructGraphs = (
    reactFlowNodes: IReactFlowNode[],
    reactFlowEdges: IReactFlowEdge[],
    options?: { isNonDirected?: boolean; isReversed?: boolean }
) => {
    const nodeDependencies = {} as INodeDependencies
    const graph = {} as INodeDirectedGraph

    f {
        const nodeId = reactFlowNodes[i].id
        nodeDependencies[nodeId] = 0
        graph[nodeId] = []
    }

     {
        f {
            const source = reactFlowEdges[i].source
            const target = reactFlowEdges[i].target

            ) {
                g
            } else {
                graph[target] = [source]
            }

            nodeDependencies[target] += 1
        }

        return { graph, nodeDependencies }
    }

    f {
        const source = reactFlowEdges[i].source
        const target = reactFlowEdges[i].target

        ) {
            g
        } else {
            graph[source] = [target]
        }

         {
            ) {
                g
            } else {
                graph[target] = [source]
            }
        }
        nodeDependencies[target] += 1
    }

    return { graph, nodeDependencies }
}

/**
 * Get starting node and check if flow is valid
 * @param {INodeDependencies} nodeDependencies
 */
exp => {
    // Find starting node
    const startingNodeIds = [] as string[]
    Obje.f => {
         {
            
        }
    })

    return { startingNodeIds }
}

/**
 * Get starting nodes and check if flow is valid
 * @param {INodeDependencies} graph
 * @param {string} endNodeId
 */
exp => {
    const depthQueue: IDepthQueue = {
        [endNodeId]: 0
    }

    // Assuming that this is a directed acyclic graph, there will be no infinite loop problem.
     => {
        const depth = depthQueue[nodeId]
        g => {
            
            walkG
        })
    }

    walkG

    )
    const depthQueueReversed: IDepthQueue = {}
    f {
        ) {
            
        }
    }

    
        .f => 
        .map(( => 

    return { startingNodeIds, depthQueue: depthQueueReversed }
}

/**
 * Get all connected nodes from startnode
 * @param {INodeDependencies} graph
 * @param {string} startNodeId
 */
exp => {
    
    const queue: Array<[string]> = [[startNodeId]]

    wh {
        !

        ) {
            continue
        }

        v

        f {
            ) {
                queue.pu
            }
        }
    }

    return [...visited]
}

/**
 * Get ending node and check if flow is valid
 * @param {INodeDependencies} nodeDependencies
 * @param {INodeDirectedGraph} graph
 * @param {IReactFlowNode[]} allNodes
 */
export const getEndingNodes = (
    nodeDependencies: INodeDependencies,
    graph: INodeDirectedGraph,
    allNodes: IReactFlowNode[]
): IReactFlowNode[] => {
    const endingNodeIds: string[] = []
    Obje.f => {
        .length === 1) {
            en
        } el {
            en
        }
    })

    let en => en)

    // If there are multiple endingnodes, the failed ones will be automatically ignored.
    // And only ensure that at least one can pass the verification.
    const verifiedEndingNodes: typeof endingNodes = []
    let error: InternalFlowiseError | null = null
    f {
        const endingNodeData = endingNode.data
         {
            e

            continue
        }

        const isEndingNode = endingNodeData?.outputs?.output === 'EndingNode'

         {
            if (
                endingNodeData &&
                endingNodeData.category !== 'Chains' &&
                endingNodeData.category !== 'Agents' &&
                endingNodeData.category !== 'Engine' &&
                endingNodeData.category !== 'Multi Agents' &&
                endingNodeData.category !== 'Sequential Agents'
            ) {
                e
                continue
            }
        }
        ve
    }

     {
        return verifiedEndingNodes
    }

     {
        e
    }

    throw error
}

/**
 * Get file name from base64 string
 * @param {string} fileBase64
 */
exp: string => {
    let fileNames = []
    ) {
        
         && name) {
            
            
        } else {
            
        }
    }
     && f) {
        
        f {
            
            [1]
            f
        }
        
    } else {
        
        [1]
        return filename
    }
}

/**
 * Save upsert flowData
 * @param {INodeData} nodeData
 * @param {Record<string, any>} upsertHistory
 */
exp: ICommonObject[] => {
    const existingUpsertFlowData = upsertHistory['flowData'] ?? []
    const paramValues: ICommonObject[] = []

    f {
         => 
         continue

        let paramValue: ICommonObject = {}

         {
            continue
        }
        if (
            typeof nodeData.inputs[input] === 'string' &&
            n &&
            n
        ) {
            continue
        }
        // Get file name instead of the base64 string
         => ?.type === 'f {
            paramValue = {
                label: inputParam?.label,
                name: inputParam?.name,
                type: inputParam?.type,
                value: getF
            }
            pa
            continue
        }

        paramValue = {
            label: inputParam?.label,
            name: inputParam?.name,
            type: inputParam?.type,
            value: nodeData.inputs[input]
        }
        pa
    }

    const newFlowData = {
        label: nodeData.label,
        name: nodeData.name,
        category: nodeData.category,
        id: nodeData.id,
        paramValues
    }
    ex
    return existingUpsertFlowData
}

/**
 * Check if doc loader should be bypassed, ONLY if doc loader is connected to a vector store
 * Reason being we dont want to load the doc loader again whenever we are building the flow, because it was already done during upserting
 * EXCEPT if the vector store is a memory vector store
 * TODO: Remove this logic when we remove doc loader nodes from the canvas
 * @param {IReactFlowNode} reactFlowNode
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {IReactFlowEdge[]} reactFlowEdges
 * @returns {boolean}
 */
const checkIfDocLoaderShouldBeIgnored = (
    reactFlowNode: IReactFlowNode,
    reactFlowNodes: IReactFlowNode[],
    reactFlowEdges: IReactFlowEdge[]
): boolean => {
    let outputId = ''

     {
        .length) {
            const output = reactFlowNode.data.outputs?.output
             => an
             .id
        } else {
            .id
        }
    }

     => e?.target

     {
         => n?.data.category || ''
         => n?.data.name || ''
         {
            return true
        }
    }

    return false
}

type BuildFlowParams = {
    startingNodeIds: string[]
    reactFlowNodes: IReactFlowNode[]
    reactFlowEdges: IReactFlowEdge[]
    graph: INodeDirectedGraph
    depthQueue: IDepthQueue
    componentNodes: IComponentNodes
    question: string
    chatHistory: IMessage[]
    chatId: string
    sessionId: string
    chatflowid: string
    apiMessageId: string
    appDataSource: DataSource
    overrideConfig?: ICommonObject
    apiOverrideStatus?: boolean
    nodeOverrides?: INodeOverrides
    availableVariables?: IVariable[]
    variableOverrides?: IVariableOverride[]
    cachePool?: CachePool
    isUpsert?: boolean
    stopNodeId?: string
    uploads?: IFileUpload[]
    baseURL?: string
    orgId?: string
    workspaceId?: string
    subscriptionId?: string
    usageCacheManager?: any
    uploadedFilesContent?: string
    up => void
     => Promise<any>
}

/**
 * Build flow from start to end
 * @param {BuildFlowParams} params
 */
export const buildFlow = async ({
    startingNodeIds,
    reactFlowNodes,
    reactFlowEdges,
    graph,
    depthQueue,
    componentNodes,
    question,
    uploadedFilesContent,
    chatHistory,
    apiMessageId,
    chatId,
    sessionId,
    chatflowid,
    appDataSource,
    overrideConfig,
    apiOverrideStatus = false,
    nodeOverrides = {},
    availableVariables = [],
    variableOverrides = [],
    cachePool,
    isUpsert,
    stopNodeId,
    uploads,
    baseURL,
    orgId,
    workspaceId,
    subscriptionId,
    usageCacheManager,
    updateStorageUsage,
    checkStorage
}: Bu => {
    

    let upsertHistory: Record<string, any> = {}

    // Create a Queue and add our initial node in it
    const nodeQueue = [] as INodeQueue[]
    const exploredNode = {} as IExploredNode
    const dynamicVariables = {} as Record<string, unknown>
    let ignoreNodeIds: string[] = []

    // In the case of infinite loop, only max 3 loops will be executed
    const maxLoop = 3

    f {
        n
        exploredNode[startingNodeIds[i]] = { remainingLoop: maxLoop, lastSeenDepth: 0 }
    }

    
    .graph

    const flowData: ICommonObject = {
        chatflowid,
        chatId,
        sessionId,
        chatHistory,
        ...overrideConfig
    }
    wh {
         as INodeQueue

         => n
         => n
         continue

        try {
            const nodeInstanceFilePath = componentNodes[reactFlowNode.data.name].filePath as string
            
            

            let fl

            // Only override the config if its status is true
             {
                fl
            }

             up

            const reactFlowNodeData: INodeData = await resolveVariables(
                flowNodeData,
                flowNodes,
                question,
                chatHistory,
                flowData,
                uploadedFilesContent,
                availableVariables,
                variableOverrides
            )

             {
                l`)
                const indexResult = await newNodeInstance.vectorStoreMethods!['upsert']!.call(newNodeInstance, reactFlowNodeData, {
                    orgId,
                    workspaceId,
                    subscriptionId,
                    chatId,
                    sessionId,
                    chatflowid,
                    chatHistory,
                    apiMessageId,
                    logger,
                    appDataSource,
                    databaseEntities,
                    cachePool,
                    usageCacheManager,
                    dynamicVariables,
                    uploads,
                    baseURL
                })
                 upsertHistory['result'] = indexResult
                l`)
                break
            } else if (
                !isUpsert &&
                reactFlowNode.data.category === 'Document Loaders' &&
                
            ) {
                
            } else {
                l`)
                const finalQuestion = uploadedFilesContent ? `${uploadedFilesContent}\n\n${question}` : question
                let outputResult = await newNodeInstance.init(reactFlowNodeData, finalQuestion, {
                    orgId,
                    workspaceId,
                    subscriptionId,
                    chatId,
                    sessionId,
                    chatflowid,
                    chatHistory,
                    logger,
                    appDataSource,
                    databaseEntities,
                    cachePool,
                    usageCacheManager,
                    isUpsert,
                    dynamicVariables,
                    uploads,
                    baseURL,
                    componentNodes,
                    updateStorageUsage,
                    checkStorage
                })

                // Save dynamic variables
                 {
                    const dynamicVars = outputResult?.dynamicVariables ?? {}

                    f {
                        dynamicVariables[variableKey] = dynamicVars[variableKey]
                    }

                    outputResult = outputResult?.output
                }

                // Determine which nodes to route next when it comes to ifElse
                 {
                    let sourceHandle = ''
                     {
                        // sourceHandle = `${nodeId}-output-returnFalse-string|number|boolean|json|array`
                        sourceHandle = (
                             => n..f => n?.name === ' as any
                        )?.id
                    } el {
                        // sourceHandle = `${nodeId}-output-returnTrue-string|number|boolean|json|array`
                        sourceHandle = (
                             => n..f => n?.name === ' as any
                        )?.id
                    }

                     => e
                     {
                        const { graph } = constructGraphs(
                            reactFlowNodes,
                             => ),
                            { isNonDirected: true }
                        )
                        )
                        ]
                    }

                    outputResult = outputResult?.output
                }

                flowNodes[nodeIndex].data.instance = outputResult

                l`)
                
            }
        }  {
            l
            th
        }

        let neighbourNodeIds = graph[nodeId]
        const nextDepth = depth + 1

        // Find other nodes that are on the same depth level
        .f => 

        f {
            ) continue
            ne
        }

        ne => )

        f {
            const neighNodeId = neighbourNodeIds[i]
            ) continue
            ) continue
             => )) continue
            // If nodeId has been seen, cycle detected
            ) {
                const { remainingLoop, lastSeenDepth } = exploredNode[neighNodeId]

                 continue

                 {
                    break
                }
                const remainingLoopMinusOne = remainingLoop - 1
                exploredNode[neighNodeId] = { remainingLoop: remainingLoopMinusOne, lastSeenDepth: nextDepth }
                n
            } else {
                exploredNode[neighNodeId] = { remainingLoop: maxLoop, lastSeenDepth: nextDepth }
                n
            }
        }

        // Move end node to last
         {
             => n
            fl
        }
    }
     : flowNodes
}

/**
 * Clear session memories
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {IComponentNodes} componentNodes
 * @param {string} chatId
 * @param {DataSource} appDataSource
 * @param {string} sessionId
 * @param {string} memoryType
 * @param {string} isClearFromViewMessageDialog
 */
export const clearSessionMemory = async (
    reactFlowNodes: IReactFlowNode[],
    componentNodes: IComponentNodes,
    chatId: string,
    appDataSource: DataSource,
    orgId?: string,
    sessionId?: string,
    memoryType?: string,
    isClearFromViewMessageDialog?: string
) => {
    f {
         continue

        // Only clear specific session memory from View Message Dialog UI
         continue

        const nodeInstanceFilePath = componentNodes[node.data.name].filePath as string
        
        
        const options: ICommonObject = { orgId, chatId, appDataSource, databaseEntities, logger }

        // SessionId always take priority first because it is the sessionId used for 3rd party memory node
         {
             {
                awa
            } else {
                node.data.inputs.sessionId = sessionId
                
                awa
            }
        } el {
             {
                awa
            } else {
                node.data.inputs.sessionId = chatId
                
                awa
            }
        }
    }
}

export const getGlobalVariable = async (
    overrideConfig?: ICommonObject,
    availableVariables: IVariable[] = [],
    variableOverrides: ICommonObject[] = []
) => {
    // override variables defined in overrideConfig
    // nodeData.inputs.vars is an Object, check each property and override the variable
     {
        f) {
            // Check if this variable is enabled for override
             => v.name === p
             {
                continue // Skip this variable if it's not enabled for override
            }

             => v.name === p
             {
                // even if the variable was defined as runtime, we override it with static value
                foundVar.type = 'static'
                foundVar.value = overrideConfig.vars[propertyName]
            } else {
                // add it the variables, if not found locally in the db
                availableVariables.push({
                    name: propertyName,
                    type: 'static',
                    value: overrideConfig.vars[propertyName],
                    id: '',
                    up,
                    
                })
            }
        }
    }

    let vars = {}
     {
        f {
            let value = item.value

            // read from .env file
             {
                value = process.env[item.name] ?? ''
            }

            Object.defineProperty(vars, item.name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: value
            })
        }
    }
    return vars
}

/**
 * Get variable value from outputResponses.output
 * @param {string} paramValue
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {string} question
 * @param {boolean} isAcceptVariable
 * @returns {string}
 */
export const getVariableValue = async (
    paramValue: string | object,
    reactFlowNodes: IReactFlowNode[],
    question: string,
    chatHistory: IMessage[],
    isAcceptVariable = false,
    flowConfig?: ICommonObject,
    uploadedFilesContent?: string,
    availableVariables: IVariable[] = [],
    variableOverrides: ICommonObject[] = []
) => {
    const isObject = typeof paramValue === 'object'
     : pa ?? ''
    let returnVal = initialValue
    const variableStack = []
    const variableDict = {} as IVariableDict
    let startIdx = 0
    const endIdx = initialValue.length - 1

    wh {
        

        // Store the opening double curly bracket
         {
            va
        }

        // Found the complete variable
         {
            const variableStartIdx = variableStack[variableStack.length - 1].startIdx
            const variableEndIdx = startIdx
            

            /**
             * Apply string transformation to convert special chars:
             * FROM: hello i am ben\n\n\thow are you?
             * TO: hello i am benFLOWISE_NEWLINEFLOWISE_NEWLINEFLOWISE_TABhow are you?
             */
             {
                va
            }

             {
                va
            }

             {
                va, fal
            }

            ) {
                
                )
                 {
                    variableDict[`{{${variableFullPath}}}`] = variableValue
                    .j
                }
            }

             && fl {
                )
                 {
                    variableDict[`{{${variableFullPath}}}`] = variableValue
                    .j
                }
            }

            // Resolve values with following case.
            // 1: <variableNodeId>.data.instance
            // 2: <variableNodeId>.data.instance.pathtokey
            
            const variableNodeId = variableFullPathParts[0]
             => n
             {
                let va

                // Handle path such as `<variableNodeId>.data.instance.key`
                 {
                    let variableObj = null
                     {
                        case 'string': {
                            
                             && unE) {
                                try {
                                    va
                                }  {
                                    // ignore
                                }
                            }
                            break
                        }
                        case 'object': {
                            variableObj = variableValue
                            break
                        }
                        default:
                            break
                    }
                     {
                        va)
                        variableValue = handleEscapeCharacters(
                            type : variableObj,
                            false
                        )
                    }
                }
                 {
                    variableDict[`{{${variableFullPath}}}`] = variableValue
                } else {
                    returnVal = variableValue
                }
            }
            va
        }
        startIdx += 1
    }

     {
        
        va // Sort by length of variable path because longer path could possibly contains nested variable
        va => {
            let variableValue: object | string = variableDict[path]
            // Replace all occurrence
             {
                // Just get the id of variableValue object if it is agentflow node, to avoid circular JSON error
                ) {
                    const nodeId = variableValue['id']
                    variableValue = { id: nodeId }
                }

                )
                 && ) {
                    // get rid of the double quotes
                    .j)
                } else {
                    .j.)
                }
            } else {
                .j
            }
        })
        return returnVal
    }
     : returnVal
}

/**
 * Loop through each inputs and resolve variable if neccessary
 * @param {INodeData} reactFlowNodeData
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {string} question
 * @returns {INodeData}
 */
export const resolveVariables = async (
    reactFlowNodeData: INodeData,
    reactFlowNodes: IReactFlowNode[],
    question: string,
    chatHistory: IMessage[],
    flowConfig?: ICommonObject,
    uploadedFilesContent?: string,
    availableVariables: IVariable[] = [],
    variableOverrides: ICommonObject[] = []
): Promise<INodeData> => {
    let fl

     => {
        f {
            const paramValue: string = paramsObj[key]
            ) {
                const resolvedInstances = []
                f {
                    const resolvedInstance = await getVariableValue(
                        param,
                        reactFlowNodes,
                        question,
                        chatHistory,
                        undefined,
                        flowConfig,
                        uploadedFilesContent,
                        availableVariables,
                        variableOverrides
                    )
                    
                }
                paramsObj[key] = resolvedInstances
            } else {
                 => pa?.acceptVariable ?? false
                const resolvedInstance = await getVariableValue(
                    paramValue,
                    reactFlowNodes,
                    question,
                    chatHistory,
                    isAcceptVariable,
                    flowConfig,
                    uploadedFilesContent,
                    availableVariables,
                    variableOverrides
                )
                paramsObj[key] = resolvedInstance
            }
        }
    }

    const paramsObj = flowNodeData['inputs'] ?? {}
    awa

    return flowNodeData
}

/**
 * Loop through each inputs and replace their value with override config values
 * @param {INodeData} flowNodeData
 * @param {ICommonObject} overrideConfig
 * @param {INodeOverrides} nodeOverrides
 * @param {IVariableOverride[]} variableOverrides
 * @returns {INodeData}
 */
export const replaceInputsWithConfig = (
    flowNodeData: INodeData,
    overrideConfig: ICommonObject,
    nodeOverrides: INodeOverrides,
    variableOverrides: IVariableOverride[]
) => {
    const types = 'inputs'

    : boolean => {
         return false
         => pa
        return parameter?.enabled ?? false
    }

     => {
        f {
            /**
             * Several conditions:
             * 1. If config is 'analytics', always allow it
             * 2. If config is 'vars', check its object and filter out the variables that are not enabled for override
             * 3. If typeof config's value is an array, check if the parameter is enabled and apply directly
             * 4. If type is enabled
             * Example:
             * "systemMessagePrompt": {
             *  "chatPromptTemplate_0": "You are an assistant"
             * }
             * 5. If typeof config's value is a string, check if the parameter is enabled
             * Example:
             * "systemMessagePrompt": "You are an assistant"
             */

             {
                // pass
            } el {
                 {
                    const filteredVars: ICommonObject = {}

                    const vars = overrideConfig[config]
                    f {
                         => v.name === va
                         {
                            continue // Skip this variable if it's not enabled for override
                        }
                        filteredVars[variable] = vars[variable]
                    }
                    overrideConfig[config] = filteredVars
                }
            } el) {
                // Handle arrays as direct parameter values
                ) {
                    // If existing value is also an array, concatenate; otherwise replace
                    const existingValue = inputsObj[config]
                    ) {
                        ]
                    } else {
                        inputsObj[config] = overrideConfig[config]
                    }
                }
                continue
            } el {
                
                ) {
                    // Check if this parameter is enabled
                    ) {
                        const existingValue = inputsObj[config]
                        const overrideValue = overrideConfig[config][flowNodeData.id]

                        // Merge objects instead of completely overriding
                        if (
                            typeof existingValue === 'object' &&
                            typeof overrideValue === 'object' &&
                             &&
                             &&
                            existingValue !== null &&
                            overrideValue !== null
                        ) {
                            
                        } el && ex) {
                            try {
                                
                                ) {
                                    
                                } else {
                                    inputsObj[config] = overrideValue
                                }
                            }  {
                                inputsObj[config] = overrideValue
                            }
                        } else {
                            inputsObj[config] = overrideValue
                        }
                    }
                    continue
                } el => n)) {
                    /*
                     * "systemMessagePrompt": {
                     *   "chatPromptTemplate_0": "You are an assistant" <---- continue for loop if current node is chatPromptTemplate_1
                     * }
                     */
                    continue
                }
            } else {
                // Skip if it is an override "files" input, such as pdfFile, txtFile, etc
                ) {
                    // pass
                } el) {
                    // Only proceed if the parameter is enabled
                    continue
                }
            }

            let paramValue = inputsObj[config]
            const overrideConfigValue = overrideConfig[config]
             {
                 {
                    // Handle arrays specifically - concatenate instead of replace
                     && A) {
                        pa]
                    } el) {
                        paramValue = overrideConfigValue
                    } else {
                         {
                            case 'string':
                                 && pa) {
                                    try {
                                        pa, 
                                        break
                                    }  {
                                        // ignore
                                    }
                                }
                                paramValue = overrideConfigValue
                                break
                            case 'object':
                                // Make sure we're not dealing with arrays here
                                ) {
                                    pa
                                } else {
                                    paramValue = overrideConfigValue
                                }
                                break
                            default:
                                paramValue = overrideConfigValue
                                break
                        }
                    }
                } else {
                    paramValue = overrideConfigValue
                }
            }
            // Check if boolean
             paramValue = true
            el paramValue = false
            inputsObj[config] = paramValue
        }
    }

    const inputsObj = flowNodeData[types] ?? {}

    getPa

    return flowNodeData
}

/**
 * Rebuild flow if LLMChain has dependency on other chains
 * User Question => Prompt_0 => LLMChain_0 => Prompt-1 => LLMChain_1
 * @param {IReactFlowNode[]} startingNodes
 * @returns {boolean}
 */
exp: boolean => {
    f {
         return true
        f {
            
             return true
        }
    }
    const whitelistNodeNames = ['vectorStoreToDocument', 'autoGPT', 'chatPromptTemplate', 'promptTemplate'] //If these nodes are found, chatflow cannot be reused
    f {
         {
            let promptValues: ICommonObject = {}
            const promptValuesRaw = node.data.inputs?.promptValues
             {
                try {
                    p
                }  {
                    
                }
            }
            .) return true
        } el) return true
    }
    return false
}

/**
 * Rebuild flow if new override config is provided
 * @param {boolean} isInternal
 * @param {ICommonObject} existingOverrideConfig
 * @param {ICommonObject} newOverrideConfig
 * @returns {boolean}
 */
export const isSameOverrideConfig = (
    isInternal: boolean,
    existingOverrideConfig?: ICommonObject,
    newOverrideConfig?: ICommonObject
): boolean => {
     {
        .length) return false
        return true
    }
    // If existing and new overrideconfig are the same
    if (
        existingOverrideConfig &&
        Obje.length &&
        newOverrideConfig &&
        Obje.length &&
        
    ) {
        return true
    }
    // If there is no existing and new overrideconfig
     return true
    return false
}

/**
 * @param {string} existingChatId
 * @param {string} newChatId
 * @returns {boolean}
 */
exp: boolean => {
    ) {
        return true
    }
     return true
    return false
}

/**
 * Find all available input params config
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {IComponentCredentials} componentCredentials
 * @returns {IOverrideConfig[]}
 */
exp => {
    const configs: IOverrideConfig[] = []

    f {
        f {
            let obj: IOverrideConfig | undefined
             {
                obj = {
                    node: flowNode.data.label,
                    nodeId: flowNode.data.id,
                    label: inputParam.label,
                    name: 'files',
                    type: inputParam.fileType ?? inputParam.type
                }
            } el {
                obj = {
                    node: flowNode.data.label,
                    nodeId: flowNode.data.id,
                    label: inputParam.label,
                    name: inputParam.name,
                    type: inputParam.options
                        ? inputParam.options
                              ?.map(( => {
                                  return option.name
                              })
                              .j
                        : 'string'
                }
            } el {
                // get component credential inputs
                f {
                    ) {
                        const inputs = componentCredentials[name]?.inputs ?? []
                        f {
                            obj = {
                                node: flowNode.data.label,
                                nodeId: flowNode.data.id,
                                label: input.label,
                                name: input.name,
                                type: input.type === 'password' ? 'string' : input.type
                            }
                            
                        }
                    }
                }
                continue
            } el {
                const arrayItem = inputParam.array
                ) {
                    const arrayItemSchema: Record<string, string> = {}
                    // Build object schema representing the structure of each array item
                    f {
                        let itemType = item.type
                         {
                             => .j
                            `
                        } el {
                            itemType = item.fileType ?? item.type
                        }
                        arrayItemSchema[item.name] = itemType
                    }
                    obj = {
                        node: flowNode.data.label,
                        nodeId: flowNode.data.id,
                        label: inputParam.label,
                        name: inputParam.name,
                        type: inputParam.type,
                        schema: arrayItemSchema
                    }
                }
            } el {
                const configData = flowNode?.data?.inputs?.[`${inputParam.name}Config`]
                 {
                    // Parse config data to extract schema
                    let parsedConfig: any = {}
                    try {
                        pa : configData
                    }  {
                        // If parsing fails, treat as empty object
                        parsedConfig = {}
                    }

                    // Generate schema from config structure
                    const configSchema: Record<string, string> = {}
                    pa
                    f {
                         continue
                        const value = parsedConfig[key]
                        let fieldType = 'string' // default type

                         {
                            fieldType = 'boolean'
                        } el {
                            fieldType = 'number'
                        } el) {
                            fieldType = 'array'
                        } el {
                            fieldType = 'object'
                        }

                        configSchema[key] = fieldType
                    }

                    obj = {
                        node: flowNode.data.label,
                        nodeId: flowNode.data.id,
                        label: `${inputParam.label} Config`,
                        name: `${inputParam.name}Config`,
                        type: `json`,
                        schema: configSchema
                    }
                }
            } else {
                obj = {
                    node: flowNode.data.label,
                    nodeId: flowNode.data.id,
                    label: inputParam.label,
                    name: inputParam.name,
                    type: inputParam.type === 'password' ? 'string' : inputParam.type
                }
            }
             => JSON. === JSON.)) {
                
            }
        }
    }
    return configs
}

/**
 * Check to see if flow valid for stream
 * TODO: perform check from component level. i.e: set streaming on component, and check here
 * @param {IReactFlowNode[]} reactFlowNodes
 * @param {INodeData} endingNodeData
 * @returns {boolean}
 */
exp => {
    /** Deprecated, add streaming input param to the component instead **/
    const streamAvailableLLMs = {
        'Chat Models': [
            'azureChatOpenAI',
            'chatOpenAI',
            'chatOpenAI_LlamaIndex',
            'chatOpenAICustom',
            'chatAnthropic',
            'chatAnthropic_LlamaIndex',
            'chatOllama',
            'chatOllama_LlamaIndex',
            'awsChatBedrock',
            'chatMistralAI',
            'chatMistral_LlamaIndex',
            'chatAlibabaTongyi',
            'groqChat',
            'chatGroq_LlamaIndex',
            'chatCohere',
            'chatGoogleGenerativeAI',
            'chatTogetherAI',
            'chatTogetherAI_LlamaIndex',
            'chatFireworks',
            'ChatSambanova',
            'chatBaiduWenxin'
        ],
        LLMs: ['azureOpenAI', 'openAI', 'ollama']
    }

    let isChatOrLLMsExist = false
    f {
        const data = flowNode.data
         {
             {
                return false
            }
             {
                isChatOrLLMsExist = true // passed, proceed to next check
            }
            /** Deprecated, add streaming input param to the component instead **/
             &&  {
                isChatOrLLMsExist = true
                const validLLMs = streamAvailableLLMs[data.category]
                ) return false
            }
        }
    }

    let isValidChainOrAgent = false
     {
        // Chains that are not available to stream
        const blacklistChains = ['openApiChain', 'vectaraQAChain']
        
    } el {
        // Agent that are available to stream
        const whitelistAgents = ['csvAgent', 'airtableAgent', 'toolAgent', 'conversationalRetrievalToolAgent', 'openAIToolAgentLlamaIndex']
        

        // If agent is openAIAssistant, streaming is enabled
         return true
    } el {
        // Engines that are available to stream
        const whitelistEngine = ['contextChatEngine', 'simpleChatEngine', 'queryEngine', 'subQuestionQueryEngine']
        
    }

    // If no output parser, flow is available to stream
    let isOutputParserExist = false
    f {
        const data = flowNode.data
        ) {
            isOutputParserExist = true
        }
    }

    return isChatOrLLMsExist && isValidChainOrAgent && !isOutputParserExist
}

/**
 * Returns the encryption key
 * @returns {Promise<string>}
 */
exp: Promise<string> => {
     {
        return process.env.FLOWISE_SECRETKEY_OVERWRITE
    }
     {
        const secretId = process.env.SECRETKEY_AWS_NAME || 'FlowiseEncryptionKey'
        try {
            
            

             {
                return response.SecretString
            }
        }  {
             {
                // Secret doesn't exist, create it
                
                const createCommand = new CreateSecretCommand({
                    Name: secretId,
                    SecretString: newKey
                })
                awa
                return newKey
            }
            throw error
        }
    }
    try {
        , 'utf8')
    }  {
        
        const defaultLocation = process.env.SECRETKEY_PATH
            ? path.j
            : path.j, '.fl
        awa
        return encryptKey
    }
}

/**
 * Encrypt credential data
 * @param {ICredentialDataDecrypted} plainDataObj
 * @returns {Promise<string>}
 */
exp: Promise<string> => {
    
    , en.t
}

/**
 * Decrypt credential data
 * @param {string} encryptedData
 * @param {string} componentCredentialName
 * @param {IComponentCredentials} componentCredentials
 * @returns {Promise<ICredentialDataDecrypted>}
 */
export const decryptCredentialData = async (
    encryptedData: string,
    componentCredentialName?: string,
    componentCredentials?: IComponentCredentials
): Promise<ICredentialDataDecrypted> => {
    let decryptedDataStr: string

     {
        try {
            ) {
                
                

                 {
                    
                    
                } else {
                    th
                }
            } else {
                
                
                
            }
        }  {
            
            th
        }
    } else {
        // Fallback to existing code
        
        
        
    }

     return {}
    try {
         {
            
            
        }
        
    }  {
        
        return {}
    }
}

/**
 * Generate an encryption key
 * @returns {string}
 */
exp: string => {
    .t
}

/**
 * Transform ICredentialBody from req to Credential entity
 * @param {ICredentialReqBody} body
 * @returns {Credential}
 */
exp: Promise<Credential> => {
    const credentialBody: ICommonObject = {
        name: body.name,
        credentialName: body.credentialName
    }

     {
        
        credentialBody.encryptedData = encryptedData
    }

    
    Obje

     {
        newCredential.workspaceId = body.workspaceId
    }

    return newCredential
}

/**
 * Redact values that are of password type to avoid sending back to client
 * @param {string} componentCredentialName
 * @param {ICredentialDataDecrypted} decryptedCredentialObj
 * @param {IComponentCredentials} componentCredentials
 * @returns {ICredentialDataDecrypted}
 */
export const redactCredentialWithPasswordType = (
    componentCredentialName: string,
    decryptedCredentialObj: ICredentialDataDecrypted,
    componentCredentials: IComponentCredentials
): ICredentialDataDecrypted => {
    
    f {
         => 
         {
            plainDataObj[cred] = REDACTED_CREDENTIAL_VALUE
        }
    }
    return plainDataObj
}

/**
 * Get sessionId
 * H
 * API/Embed:
 * (1) Provided in API body - incomingInput.overrideConfig: { sessionId: 'abc' }
 * (2) Provided in API body - incomingInput.chatId
 *
 * API/Embed + UI:
 * (3) Hard-coded sessionId in UI
 * (4) Not specified on UI nor API, default to chatId
 * @param {IReactFlowNode | undefined} memoryNode
 * @param {IncomingInput} incomingInput
 * @param {string} chatId
 * @param {boolean} isInternal
 * @returns {string}
 */
export const getMemorySessionId = (
    memoryNode: IReactFlowNode | undefined,
    incomingInput: IncomingInput,
    chatId: string,
    isInternal: boolean
): string => {
     {
        // Provided in API body - incomingInput.overrideConfig: { sessionId: 'abc' }
         {
            return incomingInput.overrideConfig?.sessionId
        }
        // Provided in API body - incomingInput.chatId
         {
            return incomingInput.chatId
        }
    }

    // Hard-coded sessionId in UI
     {
        return memoryNode.data.inputs.sessionId
    }

    // Default chatId
    return chatId
}

/**
 * Get chat messages from sessionId
 * @param {IReactFlowNode} memoryNode
 * @param {string} sessionId
 * @param {IReactFlowNode} memoryNode
 * @param {IComponentNodes} componentNodes
 * @param {DataSource} appDataSource
 * @param {IDatabaseEntity} databaseEntities
 * @param {any} logger
 * @returns {IMessage[]}
 */
export const getSessionChatHistory = async (
    chatflowid: string,
    sessionId: string,
    memoryNode: IReactFlowNode,
    componentNodes: IComponentNodes,
    appDataSource: DataSource,
    databaseEntities: IDatabaseEntity,
    logger: any,
    prependMessages?: IMessage[]
): Promise<IMessage[]> => {
    const nodeInstanceFilePath = componentNodes[memoryNode.data.name].filePath as string
    
    

    // Replace memory's sessionId/chatId
     {
        memoryNode.data.inputs.sessionId = sessionId
    }

    const initializedInstance: FlowiseMemory = await newNodeInstance.init(memoryNode.data, '', {
        chatflowid,
        appDataSource,
        databaseEntities,
        logger
    })

    ) as IMessage[]
}

/**
 * Method that find memory that is connected within chatflow
 * In a chatflow, there should only be 1 memory node
 * @param {IReactFlowNode[]} nodes
 * @param {IReactFlowEdge[]} edges
 * @returns {IReactFlowNode | undefined}
 */
exp: IReactFlowNode | undefined => {
     => n
     => mem.

    f {
        ) {
             => n
            return memoryNode
        }
    }

    return undefined
}

/**
 * Get all values from a JSON object
 * @param {any} obj
 * @returns {any[]}
 */
exp: any[] => {
    const values: any[] = []

    fun {
         {
            ) {
                f {
                    ext
                }
            } else {
                f {
                    ext
                }
            }
        } else {
            value
        }
    }

    ext
    return values
}

/**
 * Get only essential flow data items for telemetry
 * @param {IReactFlowNode[]} nodes
 * @param {IReactFlowEdge[]} edges
 */
exp => {
     => n
     => ({ )
    return { nodes: nodeData, edges: edgeData }
}

/**
 * Get app current version
 */
exp => {
    : string => {
        const checkPaths = [
            path.j,
            path.j,
            path.j,
            path.j,
            path.j
        ]
        f {
            ) {
                return checkPath
            }
        }
        return ''
    }

    
     return ''
    try {
        
        
        return parsedContent.version
    }  {
        return ''
    }
}

exp => {
    return word
        .
        .
        .t
}

exp => {
    
    .getM - 1)
    return date
}

exp => {
    try {
         : {}
        const nodeOverrides: INodeOverrides =
            apiConfig.overrideConfig && apiConfig.overrideConfig.nodes ? apiConfig.overrideConfig.nodes : {}
        const variableOverrides: IVariableOverride[] =
            apiConfig.overrideConfig && apiConfig.overrideConfig.variables ? apiConfig.overrideConfig.variables : []
        const apiOverrideStatus: boolean =
            apiConfig.overrideConfig && apiConfig.overrideConfig.status ? apiConfig.overrideConfig.status : false

        return { nodeOverrides, variableOverrides, apiOverrideStatus }
    }  {
        return { nodeOverrides: {}, variableOverrides: [], apiOverrideStatus: false }
    }
}

exp: string => {
    return process.env.BLOB_STORAGE_PATH
        ? path.j
        : path.j, '.fl
}

exp {
    
}

exp => {
    const storageType = process.env.STORAGE_TYPE ? process.env.STORAGE_TYPE : 'local'

     {
        .s3Client
        .Bucket

        const upload = multer({
            storage: multerS3({
                s3: s3Client,
                bucket: Bucket,
                meta {
                    
                },
                key: fun {
                    }`)
                }
            })
        })
        return upload
    } el {
        return multer({
            storage: new MulterGoogleCloudStorage({
                projectId: process.env.GOOGLE_CLOUD_STORAGE_PROJ_ID,
                bucket: process.env.GOOGLE_CLOUD_STORAGE_BUCKET_NAME,
                keyFilename: process.env.GOOGLE_CLOUD_STORAGE_CREDENTIAL,
                un ?? true,
                }`
            })
        })
    } else {
         })
    }
}

/**
 * Calculate depth of each node from starting nodes
 * @param {INodeDirectedGraph} graph
 * @param {string[]} startingNodeIds
 * @returns {Record<string, number>} Map of nodeId to its depth
 */
exp: Record<string, number> => {
    const depths: Record<string, number> = {}
    

    // In
    f {
        depths[nodeId] = -1
    }

    // BFS queue with [nodeId, depth]
     => 

    // Set starting nodes depth to 0
     => {
        depths[id] = 0
    })

    wh {
        !

        ) continue
        v

        // Process all neighbors
        f {
            ) {
                // Update depth if unvisited or found shorter path
                 {
                    depths[neighbor] = currentDepth + 1
                }
                queue.pu
            }
        }
    }

    return depths
}

/**
 * Helper function to get all nodes in a path starting from a node
 * @param {INodeDirectedGraph} graph
 * @param {string} startNode
 * @returns {string[]}
 */
exp: string[] => {
    
    const queue = [startNode]

    wh {
        !
        ) continue

        n
         {
            queue.pu
        }
    }

    
}

exp: any => {
     return obj

    ) {
         => _)
    }

    const newObj: Record<string, any> = {}
    f) {
         continue
        newObj
    }
    return newObj
}

/**
 * Validates that history items follow the expected schema
 * @param {any[]} history - Array of history items to validate
 * @returns {boolean} - True if all items are valid, false otherwise
 */
exp: boolean => {
    ) {
        return false
    }

     => {
        // Check if item is an object
         {
            return false
        }

        // Check if role exists and is valid
        ) {
            return false
        }

        // Check if content exists and is a string
         {
            return false
        }

        return true
    })
}
