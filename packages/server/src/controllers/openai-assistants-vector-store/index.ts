import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import openAIAssistantVectorStoreService from '../../services/openai-assistants-vector-store'

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.getAssistantVectorStore - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.getAssistantVectorStore - credential not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.listAssistantVectorStore - credential not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.createAssistantVectorStore - body not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.createAssistantVectorStore - credential not provided!`
            )
        }
        
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.updateAssistantVectorStore - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.updateAssistantVectorStore - credential not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.updateAssistantVectorStore - body not provided!`
            )
        }
        const apiResponse = await openAIAssistantVectorStoreService.updateAssistantVectorStore(
            req.query.credential as string,
            req.params.id,
            req.body
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.deleteAssistantVectorStore - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.updateAssistantVectorStore - credential not provided!`
            )
        }
        const apiResponse = await openAIAssistantVectorStoreService.deleteAssistantVectorStore(
            req.query.credential as string,
            req.params.id as string
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.uploadFilesToAssistantVectorStore - body not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.uploadFilesToAssistantVectorStore - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.uploadFilesToAssistantVectorStore - credential not provided!`
            )
        }
        const files = req.files ?? []
        const uploadFiles: { filePath: string; fileName: string }[] = []

        ) {
            f {
                // Address file name with special characters: https://github.com/expressjs/multer/issues/1104
                f.t
                uploadFiles.push({
                    filePath: file.path ?? file.key,
                    fileName: file.originalname
                })
            }
        }

        const apiResponse = await openAIAssistantVectorStoreService.uploadFilesToAssistantVectorStore(
            req.query.credential as string,
            req.params.id as string,
            uploadFiles
        )
        
    }  {
        next(e
    }
}

 => {
    try {
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.deleteFilesFromAssistantVectorStore - body not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.deleteFilesFromAssistantVectorStore - id not provided!`
            )
        }
         {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: openaiAssistantsVectorStoreController.deleteFilesFromAssistantVectorStore - credential not provided!`
            )
        }

        const apiResponse = await openAIAssistantVectorStoreService.deleteFilesFromAssistantVectorStore(
            req.query.credential as string,
            req.params.id as string,
            req.body.file_ids
        )
        
    }  {
        next(e
    }
}

export default {
    getAssistantVectorStore,
    listAssistantVectorStore,
    createAssistantVectorStore,
    updateAssistantVectorStore,
    deleteAssistantVectorStore,
    uploadFilesToAssistantVectorStore,
    deleteFilesFromAssistantVectorStore
}
