import { handleEscapeCharacters, ICommonObject } from 'flowise-components'
import { databaseEntities } from '.'
import { InternalFlowiseError } from '../errors/internalFlowiseError'
import { StatusCodes } from 'http-status-codes'
import { getErrorMessage } from '../errors/utils'
import { DataSource } from 'typeorm'
import { IComponentNodes } from '../Interface'

export const executeCustomNodeFunction = async ({
    appDataSource,
    componentNodes,
    data,
    workspaceId,
    orgId
}: {
    appDataSource: DataSource
    componentNodes: IComponentNodes
    data: any
    workspaceId?: string
    orgId?: string
}) => {
    try {
        const body = data
        const jsFunction = typeof body?.javascriptFunction === 'string' ? body.javascriptFunction : ''
        /g)
        
         => )
        .length) {
            f {
                ) {
                    delete functionInputVariables[key]
                }
            }
        }
        const nodeData = { inputs: { functionInputVariables, ...body } }
        ) {
            try {
                const nodeInstanceFilePath = componentNodes['customFunction'].filePath as string
                
                

                const options: ICommonObject = {
                    appDataSource,
                    databaseEntities,
                    workspaceId,
                    orgId
                }

                
                 : returnData

                return dbResponse
            }  {
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
