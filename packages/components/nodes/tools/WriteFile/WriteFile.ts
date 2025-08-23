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

class WriteFile_Tools implements INode {
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
        this.label = 'Write File'
        this.name = 'writeFile'
        this.version = 1.0
        this.type = 'WriteFile'
        this.icon = 'writefile.svg'
        this.category = 'Tools'
        this.description = 'Write file to disk'
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

interface WriteFileParams extends ToolParams {
    store: BaseFileStore
}

/**
 * Class for writing data to files on the disk. Extends the StructuredTool
 * class.
 */
export class WriteFileTool extends StructuredTool {
     {
        return 'WriteFileTool'
    }

    schema = z.object({
        f.,
        text: z..
    }) as any

    name = 'write_file'

    description = 'Write file from disk'

    store: BaseFileStore

     {
        

        this.store = store
    }

    a {
        awa
        return 'File written to successfully.'
    }
}

module.exports = { nodeClass: WriteFile_Tools }
