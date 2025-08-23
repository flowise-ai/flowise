import {
    type FunctionDeclarationSchema as GenerativeAIFunctionDeclarationSchema,
    type SchemaType as FunctionDeclarationSchemaType
} from '@google/generative-ai'
import { InteropZodType, isInteropZodSchema } from '@langchain/core/utils/types'
import { type JsonSchema7Type, toJsonSchema } from '@langchain/core/utils/json_schema'

export interface GenerativeAIJsonSchema extends Record<string, unknown> {
    properties?: Record<string, GenerativeAIJsonSchema>
    type: FunctionDeclarationSchemaType
}

export interface GenerativeAIJsonSchemaDirty extends GenerativeAIJsonSchema {
    properties?: Record<string, GenerativeAIJsonSchemaDirty>
    additionalProperties?: boolean
}

exp: GenerativeAIJsonSchema {
     {
        const newObj = { ...obj }

         {
            delete newObj.additionalProperties
        }
         {
            delete newObj.$schema
        }
         {
            delete newObj.strict
        }

        f {
             {
                ) {
                    newObj
                } el {
                    newObj
                }
            }
        }

        return newObj as GenerativeAIJsonSchema
    }

    return obj as GenerativeAIJsonSchema
}

export function schemaToGenerativeAIParameters<RunOutput extends Record<string, any> = Record<string, any>>(
    schema: InteropZodType<RunOutput> | JsonSchema7Type
): GenerativeAIFunctionDeclarationSchema {
    // GenerativeAI doesn't accept either the $schema or additionalProperties
    // attributes, so we need to explicitly remove them.
     ? t : 
    const { _schema, ...rest } = jsonSchema

    return rest as GenerativeAIFunctionDeclarationSchema
}

exp: GenerativeAIFunctionDeclarationSchema {
    // Gemini doesn't accept either the $schema or additionalProperties
    // attributes, so we need to explicitly remove them.

    
    const { _schema, ...rest } = jsonSchema

    return rest as GenerativeAIFunctionDeclarationSchema
}
