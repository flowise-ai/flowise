import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'
import { BedrockEmbeddings, BedrockEmbeddingsParams } from '@langchain/community/embeddings/bedrock'
import { ICommonObject, INode, INodeData, INodeOptionsValue, INodeParams } from '../../../src/Interface'
import { getBaseClasses, getCredentialData, getCredentialParam } from '../../../src/utils'
import { MODEL_TYPE, getModels, getRegions } from '../../../src/modelLoader'

class AWSBedrockEmbedding_Embeddings implements INode {
    label: string
    name: string
    version: number
    type: string
    icon: string
    category: string
    description: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]

     {
        this.label = 'AWS Bedrock Embeddings'
        this.name = 'AWSBedrockEmbeddings'
        this.version = 5.0
        this.type = 'AWSBedrockEmbeddings'
        this.icon = 'aws.svg'
        this.category = 'Embeddings'
        this.description = 'AWSBedrock embedding models to generate embeddings for a given text'
        th]
        this.credential = {
            label: 'AWS Credential',
            name: 'credential',
            type: 'credential',
            credentialNames: ['awsApi'],
            optional: true
        }
        this.inputs = [
            {
                label: 'Region',
                name: 'region',
                type: 'asyncOptions',
                loadMethod: 'listRegions',
                default: 'us-east-1'
            },
            {
                label: 'Model Name',
                name: 'model',
                type: 'asyncOptions',
                loadMethod: 'listModels',
                default: 'amazon.titan-embed-text-v1'
            },
            {
                label: 'Custom Model Name',
                name: 'customModel',
                description: 'If provided, will override model selected from Model Name option',
                type: 'string',
                optional: true
            },
            {
                label: 'Cohere Input Type',
                name: 'inputType',
                type: 'options',
                description:
                    'Specifies the type of input passed to the model. Required for cohere embedding models v3 and higher. <a target="_blank" href="https://docs.cohere.com/reference/embed">Official Docs</a>',
                options: [
                    {
                        label: 'search_document',
                        name: 'search_document',
                        description: 'Use this to encode documents for embeddings that you store in a vector database for search use-cases'
                    },
                    {
                        label: 'search_query',
                        name: 'search_query',
                        description: 'Use this when you query your vector DB to find relevant documents.'
                    },
                    {
                        label: 'classification',
                        name: 'classification',
                        description: 'Use this when you use the embeddings as an input to a text classifier'
                    },
                    {
                        label: 'clustering',
                        name: 'clustering',
                        description: 'Use this when you want to cluster the embeddings.'
                    }
                ],
                optional: true
            },
            {
                label: 'Batch Size',
                name: 'batchSize',
                description: 'Documents batch size to send to AWS API for Titan model embeddings. Used to avoid throttling.',
                type: 'number',
                optional: true,
                default: 50,
                additionalParams: true
            },
            {
                label: 'Max AWS API retries',
                name: 'maxRetries',
                description: 'This will limit the nubmer of AWS API for Titan model embeddings call retries. Used to avoid throttling.',
                type: 'number',
                optional: true,
                default: 5,
                additionalParams: true
            }
        ]
    }

    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            
        },
        a: Promise<INodeOptionsValue[]> {
            
        }
    }

    a: Promise<any> {
        const iRegion = nodeData.inputs?.region as string
        const iModel = nodeData.inputs?.model as string
        const customModel = nodeData.inputs?.customModel as string
        const inputType = nodeData.inputs?.inputType as string

         &&  {
            th
        }

        const obj: BedrockEmbeddingsParams = {
            model: customModel ? customModel : iModel,
            region: iRegion
        }

        
        .length  {
            
            
            

            obj.credentials = {
                accessKeyId: credentialApiKey,
                secretAccessKey: credentialApiSecret,
                sessionToken: credentialApiSession
            }
        }

        const client = new BedrockRuntimeClient({
            region: obj.region,
            credentials: obj.credentials
        })

        

        m: Promise<number[]> => {
            ) {
                
                return embeddings[0]
            } else {
                
            }
        }

        m: Promise<number[][]> => {
            ) {
                
            } else {
                const batchSize = nodeData.inputs?.batchSize as number
                const maxRetries = nodeData.inputs?.maxRetries as number
                 => embe)
            }
        }
        return model
    }
}

: Promise<number[]> => {
    

    const res = await client.send(
        new InvokeModelCommand({
            modelId: model,
            body: JSON.stringify({
                inputText: cleanedText
            }),
            contentType: 'application/json',
            accept: 'application/json'
        })
    )

    try {
        .
        .embedding
    }  {
        th
    }
}

: Promise<number[][]> => {
     => text.)

    const command = {
        modelId: model,
        body: JSON.stringify({
            texts: cleanedTexts,
            input_type: inputType,
            truncate: 'END'
        }),
        contentType: 'application/json',
        accept: 'application/json'
    }
    )
    try {
        .
        .embeddings
    }  {
        th
    }
}

const processInBatches = async (
    documents: string[],
    batchSize: number,
    maxRetries: number,
    p => Promise<number[]>
): Promise<number[][]> => {
    let sleepTime = 0
    let retryCounter = 0
    let result: number[][] = []
    f {
        let 
        try {
            let )
            
            retryCounter = 0
        }  {
            ) {
                retryCounter = retryCounter + 1
                i = i - batchSize
                sleepTime = sleepTime + 100
            } else {
                // Split to distinguish between throttling retry error and other errors in trance
                ) {
                    th
                } else {
                    th
                }
            }
        }
        awa => )
    }
    return result
}

module.exports = { nodeClass: AWSBedrockEmbedding_Embeddings }
