import { z } from 'zod'
import { StructuredTool, ToolParams } from '@langchain/core/tools'
import { Serializable } from '@langchain/core/load/serializable'
import { NodeFileStore } from 'langchain/stores/file/node'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'

abstract class BaseFileStore extends Serializable {
    ab: Promise<string>
    ab: Promise<void>
}

class ReadFile_Tools implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

     {
        this.label = 'Read File'
        this.name = 'readFile'
        this.version = 1.0
        this.type = 'ReadFile'
        this.icon = 'readfile.svg'
        this.category = 'Tools'
        this.description = 'Read file from disk'
        th]
        this.inputs = [
            {
                label: 'Base Path',
                name: 'basePath',
                placeholder: `C:\\Users\\User\\Desktop`,
                type: 'string',
                optional: true
            }
        ]
    }

    a: Promise<any> {
        const basePath = nodeData.inputs?.basePath as string
         : new N
        
    }
}

interface ReadFileParams extends ToolParams {
    store: BaseFileStore
}

/**
 * Class for reading files from the disk. Extends the StructuredTool
 * class.
 */
export class ReadFileTool extends StructuredTool {
     {
        return 'ReadFileTool'
    }

    schema = z.object({
        f.
    }) as any

    name = 'read_file'

    description = 'Read file from disk'

    store: BaseFileStore

     {
        

        this.store = store
    }

    a {
        
    }
}

module.exports = { nodeClass: ReadFile_Tools }
