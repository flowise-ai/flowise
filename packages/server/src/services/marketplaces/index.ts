import path from 'path'
import * as fs from 'fs'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { IReactFlowEdge, IReactFlowNode } from '../../Interface'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { DeleteResult } from 'typeorm'
import { CustomTemplate } from '../../database/entities/CustomTemplate'
import { v4 as uuidv4 } from 'uuid'
import chatflowsService from '../chatflows'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { WorkspaceService } from '../../enterprise/services/workspace.service'

type ITemplate = {
    badge: string
    description: string
    framework: string[]
    usecases: string[]
    nodes: IReactFlowNode[]
    edges: IReactFlowEdge[]
}

 => {
     => n.f => ))
}

// Get all templates for marketplaces
 => {
    try {
        let ma
        let j.f => path.extname(f === '.j
        let templates: any[] = []
        j => {
            
            
            ) as ITemplate

            const template = {
                ,
                templateName: f[0],
                fl,
                badge: fileDataObj?.badge,
                framework: fileDataObj?.framework,
                usecases: fileDataObj?.usecases,
                ,
                type: 'Chatflow',
                description: fileDataObj?.description || ''
            }
            template
        })

        ma
        j.f => path.extname(f === '.j
        j => {
            
            
            )
            const template = {
                ...fileDataObj,
                ,
                type: 'Tool',
                framework: fileDataObj?.framework,
                badge: fileDataObj?.badge,
                usecases: fileDataObj?.usecases,
                categories: [],
                templateName: f[0]
            }
            template
        })

        /*
        * Agentflow is deprecated
        ma
        j.f => path.extname(f === '.j
        j => {
            
            
            )
            const template = {
                ,
                templateName: f[0],
                fl,
                badge: fileDataObj?.badge,
                framework: fileDataObj?.framework,
                usecases: fileDataObj?.usecases,
                ,
                type: 'Agentflow',
                description: fileDataObj?.description || ''
            }
            template
        })*/

        ma
        j.f => path.extname(f === '.j
        j => {
            
            
            )
            const template = {
                ,
                templateName: f[0],
                fl,
                badge: fileDataObj?.badge,
                framework: fileDataObj?.framework,
                usecases: fileDataObj?.usecases,
                ,
                type: 'AgentflowV2',
                description: fileDataObj?.description || ''
            }
            template
        })
         => {
            // Prioritize AgentflowV2 templates first
             {
                return -1
            }
             {
                return 1
            }
            // Put Tool templates last
             {
                return 1
            }
             {
                return -1
            }
            // For same types, sort alphabetically by templateName
            
        })
        const dbResponse = sortedTemplates
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

: Promise<DeleteResult> => {
    try {
        
        .
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    template => {
        template.u : ''
         {
            template.fl
            template.iconSrc = template.flowData.iconSrc
            template.schema = template.flowData.schema
            template.func = template.flowData.func
            template.categories = []
            template.flowData = undefined
        } else {
            template.)
        }
         {
            template.badge = ''
        }
         {
            template.framework = ''
        }
    })
}

: Promise<any> => {
    try {
        
        .f)
        const dbResponse = []
        _m
        
        // get shared credentials
         {
            
            ) as CustomTemplate[]
             {
                _m
                // add shared = true flag to all shared items, to differentiate them in the UI
                 => {
                    // @ts-ignore
                    sharedItem.shared = true
                    
                })
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

: Promise<any> => {
    try {
        
        let flowDataStr = ''
        let derivedFramework = ''
        
        Obje

         {
            
            
            
            fl
            customTemplate.framework = framework
        } el {
            const flowData = {
                iconSrc: body.tool.iconSrc,
                schema: body.tool.schema,
                func: body.tool.func
            }
            customTemplate.framework = ''
            customTemplate.type = 'Tool'
            fl
        }
        customTemplate.framework = derivedFramework
         {
            
        }
        .
        entity.flowData = flowDataStr
        .
        return flowTemplate
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    const nodes = flowData.nodes
    const edges = flowData.edges

    let framework = 'Langchain'
    f {
        nodes[i].selected = false
        const node = nodes[i]

        const newNodeData = {
            id: node.data.id,
            label: node.data.label,
            version: node.data.version,
            name: node.data.name,
            type: node.data.type,
            color: node.data.color,
            hideOutput: node.data.hideOutput,
            hideInput: node.data.hideInput,
            baseClasses: node.data.baseClasses,
            tags: node.data.tags,
            category: node.data.category,
            description: node.data.description,
            inputParams: node.data.inputParams,
            inputAnchors: node.data.inputAnchors,
            inputs: {},
            outputAnchors: node.data.outputAnchors,
            outputs: node.data.outputs,
            selected: false
        }

         {
            ) {
                framework = 'LlamaIndex'
            }
        }

        // Remove password, file & folder
        .length) {
            const nodeDataInputs: any = {}
            f {
                 => 
                 continue
                 continue
                 continue
                nodeDataInputs[input] = node.data.inputs[input]
            }
            newNodeData.inputs = nodeDataInputs
        }

        nodes[i].data = newNodeData
    }
    const exportJson = {
        nodes,
        edges
    }
    return { exportJson, framework }
}

export default {
    getAllTemplates,
    getAllCustomTemplates,
    saveCustomTemplate,
    deleteCustomTemplate
}
