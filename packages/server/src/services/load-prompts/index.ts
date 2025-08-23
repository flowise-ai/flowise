import { Client } from 'langchainhub'
import { StatusCodes } from 'http-status-codes'
import { parsePrompt } from '../../utils/hub'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'

: Promise<any> => {
    try {
        let hub = new Cl
        
        
        const dbResponse = {
            status: 'OK',
            prompt: promptName,
            templates: templates
        }
        return dbResponse
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    createPrompt
}
