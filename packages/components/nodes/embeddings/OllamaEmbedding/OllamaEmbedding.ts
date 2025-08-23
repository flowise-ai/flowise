import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama'
import { OllamaInput } from '@langchain/community/llms/ollama'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'

class OllamaEmbedding_Embeddings implements INode {
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
        this.label = 'Ollama Embeddings'
        this.name = 'ollamaEmbedding'
        this.version = 1.0
        this.type = 'OllamaEmbeddings'
        this.icon = 'Ollama.svg'
        this.category = 'Embeddings'
        this.description = 'Generate embeddings for a given text using open source model on Ollama'
        th]
        this.inputs = [
            {
                label: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'http://localhost:11434'
            },
            {
                label: 'Model Name',
                name: 'modelName',
                type: 'string',
                placeholder: 'llama2'
            },
            {
                label: 'Number of GPU',
                name: 'numGpu',
                type: 'number',
                description:
                    'The numbe. On macOS it defaults to 1 to enable metal support, 0 to disable. Refer to <a target="_blank" href="https://github.com/jmorganca/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values">docs</a> for more details',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Number of Thread',
                name: 'numThread',
                type: 'number',
                description:
                    'Set. Refer to <a target="_blank" href="https://github.com/jmorganca/ollama/blob/main/docs/modelfile.md#valid-parameters-and-values">docs</a> for more details',
                step: 1,
                optional: true,
                additionalParams: true
            },
            {
                label: 'Use MMap',
                name: 'useMMap',
                type: 'boolean',
                default: true,
                optional: true,
                additionalParams: true
            }
        ]
    }

    a: Promise<any> {
        const modelName = nodeData.inputs?.modelName as string
        const baseUrl = nodeData.inputs?.baseUrl as string
        const numThread = nodeData.inputs?.numThread as string
        const numGpu = nodeData.inputs?.numGpu as string
        const useMMap = nodeData.inputs?.useMMap as boolean

        const obj = {
            model: modelName,
            baseUrl,
            requestOptions: {}
        }

        const requestOptions: OllamaInput = {}
         
         

        // default useMMap to true
        requestOptions.useMMap = useMMap === undefined ? true : useMMap

        .length) obj.requestOptions = requestOptions

        
        return model
    }
}

module.exports = { nodeClass: OllamaEmbedding_Embeddings }
