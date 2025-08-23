import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeOptionsValue, INodeOutputsValue, INodeParams } from '../../../src/Interface'
import { DataSource } from 'typeorm'

class DocStore_VectorStores implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        th'
        this.name = 'documentStoreVS'
        this.version = 1.0
        this.type = 'DocumentStoreVS'
        this.icon = 'dstore.svg'
        this.category = 'Vector Stores'
        this.description = `Search and retrieve documents from Document Store`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'Select Store',
                name: 'selectedStore',
                type: 'asyncOptions',
                loadMethod: 'listStores'
            }
        ]
        this.outputs = [
            {
                label: 'Retriever',
                name: 'retriever',
                baseClasses: ['BaseRetriever']
            },
            {
                label: 'Vector Store',
                name: 'vectorStore',
                baseClasses: ['VectorStore']
            }
        ]
    }

    //@ts-ignore
    loadMethods = {
        a: Promise<INodeOptionsValue[]> {
            const returnData: INodeOptionsValue[] = []

            const appDataSource = options.appDataSource as DataSource
            const databaseEntities = options.databaseEntities as IDatabaseEntity

             {
                return returnData
            }

            const searchOptions = options.searchOptions || {}
            .f
            f {
                 {
                    const obj = {
                        name: store.id,
                        label: store.name,
                        description: store.description
                    }
                    
                }
            }
            return returnData
        }
    }

    a: Promise<any> {
        const selectedStore = nodeData.inputs?.selectedStore as string
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const output = nodeData.outputs?.output as string

        .f
         {
            return { error: 'Store not found' }
        }
        const data: ICommonObject = {}
        data.output = output

        // Prepare Embeddings Instance
        
        data.embeddingName = embeddingConfig.name
        data.embeddingConfig = embeddingConfig.config
        let embe
         {
            return { error: 'Failed to create EmbeddingObj' }
        }

        // Prepare Vector Store Instance
        
        data.vectorStoreName = vsConfig.name
        data.vectorStoreConfig = vsConfig.config
         {
            data.vectorStoreConfig = { ...vsConfig.config, ...data.inputs }
        }

        // Prepare Vector Store Node Data
        

        // F
        
        
         {
            return { error: 'Failed to create vectorStore' }
        }
        return retrieverOrVectorStore
    }
}

: Promise<any> => {
    // prepare embedding node data
    const embeddingComponent = componentNodes[data.embeddingName]
    const embeddingNodeData: any = {
        inputs: { ...data.embeddingConfig },
        outputs: { output: 'document' },
        id: `${embeddingComponent.name}_0`,
        label: embeddingComponent.label,
        name: embeddingComponent.name,
        category: embeddingComponent.category,
        inputParams: embeddingComponent.inputs || []
    }
     {
        embeddingNodeData.credential = data.embeddingConfig.credential
    }

    // init embedding object
    const embeddingNodeInstanceFilePath = embeddingComponent.filePath as string
    
    
    
}

 => {
    const vectorStoreComponent = componentNodes[data.vectorStoreName]
    const vStoreNodeData: any = {
        id: `${vectorStoreComponent.name}_0`,
        inputs: { ...data.vectorStoreConfig },
        outputs: { output: data.output },
        label: vectorStoreComponent.label,
        name: vectorStoreComponent.name,
        category: vectorStoreComponent.category
    }
     {
        vStoreNodeData.credential = data.vectorStoreConfig.credential
    }

     {
        vStoreNodeData.inputs.embeddings = embeddingObj
    }

    // Get all input params except the ones that are anchor points to avoid JSON stringify circular error
    const filterInputParams = ['document', 'embeddings', 'recordManager']
     => )
    vStoreNodeData.inputParams = inputParams
    return vStoreNodeData
}

 => {
    const vStoreNodeInstanceFilePath = componentNodes[data.vectorStoreName].filePath as string
    
    
    return vStoreNodeInstance
}

module.exports = { nodeClass: DocStore_VectorStores }
