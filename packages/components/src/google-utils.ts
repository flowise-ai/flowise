import { getCredentialData, getCredentialParam, type ICommonObject, type INodeData } from '.'
import type { ChatVertexAIInput, VertexAIInput } from '@langchain/google-vertexai'

type SupportedAuthOptions = ChatVertexAIInput['authOptions'] | VertexAIInput['authOptions']

exp: Promise<SupportedAuthOptions | null> => {
    
    
    
    

    const authOptions: any = {}
    .length  {
        
            th
        
            throw new Error(
                'Error: More than one component has been inputted. Please use only one of the following: Google Application Credential File Path or Google Credential JSON Object'
            )

         authOptions.keyFile = googleApplicationCredentialFilePath
        el
            authOpt

         authOptions.projectId = projectID
    }

    return authOptions
}
