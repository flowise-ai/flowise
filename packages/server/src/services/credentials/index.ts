import { omit } from 'lodash'
import { StatusCodes } from 'http-status-codes'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Credential } from '../../database/entities/Credential'
import { transformToCredentialEntity, decryptCredentialData } from '../../utils'
import { ICredentialReturnResponse } from '../../Interface'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { getWorkspaceSearchOptions } from '../../enterprise/utils/ControllerServiceUtils'
import { WorkspaceShared } from '../../enterprise/database/entities/EnterpriseEntities'
import { WorkspaceService } from '../../enterprise/services/workspace.service'

 => {
    try {
        
        

         {
            newCredential.id = requestBody.id
        }

        .
        .
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Delete all credentials from chatflowid
: Promise<any> => {
    try {
        
        .
         {
            th
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
        
        let dbResponse = []
         {
            ) {
                f {
                    const name = paramCredentialName[i] as string
                    const searchOptions = {
                        credentialName: name,
                        ...getW
                    }
                    .f
                    
                }
            } else {
                const searchOptions = {
                    credentialName: paramCredentialName,
                    ...getW
                }
                .f
                dbResponse = [...credentials]
            }
            // get shared credentials
             {
                
                ) as Credential[]
                 {
                    f {
                        // Check if paramCredentialName is array
                        ) {
                            f {
                                const name = paramCredentialName[i] as string
                                 {
                                    // @ts-ignore
                                    sharedItem.shared = true
                                    
                                }
                            }
                        } else {
                             {
                                // @ts-ignore
                                sharedItem.shared = true
                                
                            }
                        }
                    }
                }
            }
        } else {
            .f)
            f {
                )
            }

            // get shared credentials
             {
                
                ) as Credential[]
                 {
                    f {
                        // @ts-ignore
                        sharedItem.shared = true
                        
                    }
                }
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
        
        .findOneBy({
            id: credentialId
        })
         {
            th
        }
        // Decrpyt credentialData
        const decryptedCredentialData = await decryptCredentialData(
            credential.encryptedData,
            credential.credentialName,
            appServer.nodesPool.componentCredentials
        )
        const returnCredential: ICredentialReturnResponse = {
            ...credential,
            plainDataObj: decryptedCredentialData
        }
        
         {
            .count({
                where: {
                    workspaceId: workspaceId,
                    sharedItemId: credentialId,
                    itemType: 'credential'
                }
            })
             {
                dbResponse.shared = true
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
        
        .findOneBy({
            id: credentialId
        })
         {
            th
        }
        
        requestBody.plainDataObj = { ...decryptedCredentialData, ...requestBody.plainDataObj }
        
        awa.me
        .
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    createCredential,
    deleteCredentials,
    getAllCredentials,
    getCredentialById,
    updateCredential
}
