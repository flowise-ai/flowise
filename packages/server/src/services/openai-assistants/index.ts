import OpenAI from 'openai'
import { StatusCodes } from 'http-status-codes'
import { decryptCredentialData } from '../../utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { Credential } from '../../database/entities/Credential'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { getFileFromUpload, removeSpecificFileFromUpload } from 'flowise-components'

// ----------------------------------------
// Assistants
// ----------------------------------------

// List available assistants
: Promise<any> => {
    try {
        
        .findOneBy({
            id: credentialId
        })
         {
            th
        }
        // Decrpyt credentialData
        
        const openAIApiKey = decryptedCredentialData['openAIApiKey']
         {
            th
        }
        
        
        const dbResponse = retrievedAssistants.data
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

// Get assistant object
: Promise<any> => {
    try {
        
        .findOneBy({
            id: credentialId
        })
         {
            th
        }
        // Decrpyt credentialData
        
        const openAIApiKey = decryptedCredentialData['openAIApiKey']
         {
            th
        }

        
        
        
        const existingFiles = resp.data ?? []
         {
            ;(.files = [
                ...ex => )
            ]
        }
         {
            // Since there can only be 1 vector store per assistant
            const vectorStoreId = dbResponse.tool_resources.file_search.vector_store_ids[0]
            
             => f ?? []
            ;(.f => f)]
            ;(.ve
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
    
    .findOneBy({
        id: credentialId
    })
     {
        th
    }
    // Decrpyt credentialData
    
    const openAIApiKey = decryptedCredentialData['openAIApiKey']
     {
        th
    }

    
    const uploadedFiles = []

    f {
        
        
        const createdFile = await openai.files.create({
            file: toFile,
            purpose: 'assistants'
        })
        upl
        awa
    }

    return uploadedFiles
}

export default {
    getAllOpenaiAssistants,
    getSingleOpenaiAssistant,
    uploadFilesToAssistant
}
