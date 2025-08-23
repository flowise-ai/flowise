import { cloneDeep } from 'lodash'
import { StatusCodes } from 'http-status-codes'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'

// Get all component credentials
: Promise<any> => {
    try {
        
        const dbResponse = []
        f {
            
            
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

 => {
    try {
        
        ) {
            ) {
                return appServer.nodesPool.componentCredentials[credentialName]
            } else {
                throw new InternalFlowiseError(
                    StatusCodes.NOT_FOUND,
                    `Error: componentsCredentialsService.getSingleComponentsCredential - Credential ${credentialName} not found`
                )
            }
        } else {
            const dbResponse = []
            f) {
                ) {
                    
                } else {
                    throw new InternalFlowiseError(
                        StatusCodes.NOT_FOUND,
                        `Error: componentsCredentialsService.getSingleComponentsCredential - Credential ${name} not found`
                    )
                }
            }
            return dbResponse
        }
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Returns specific component credential icon via name
 => {
    try {
        
        ) {
            const credInstance = appServer.nodesPool.componentCredentials[credentialName]
             {
                th
            }

             ||  || ) {
                const filepath = credInstance.icon
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

export default {
    getAllComponentsCredentials,
    getComponentByName,
    getSingleComponentsCredentialIcon
}
