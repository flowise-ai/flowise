import { TextSplitter } from 'langchain/text_splitter'
import { PowerpointLoader } from './PowerpointLoader'
import { getFileFromStorage, handleDocumentLoaderDocuments, handleDocumentLoaderMetadata, handleDocumentLoaderOutput } from '../../../src'
import { ICommonObject, IDocument, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'

class MicrosoftPowerpoint_DocumentLoaders implements INode {
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
        this.label = 'Microsoft PowerPoint'
        this.name = 'microsoftPowerpoint'
        this.version = 1.0
        this.type = 'Document'
        this.icon = 'powerpoint.svg'
        this.category = 'Document Loaders'
        this.description = `Load data from Microsoft PowerPoint files`
        this.baseClasses = [this.type]
        this.inputs = [
            {
                label: 'PowerPoint File',
                name: 'powerpointFile',
                type: 'file',
                fileType: '.pptx, .ppt'
            },
            {
                label: 'Text Splitter',
                name: 'textSplitter',
                type: 'TextSplitter',
                optional: true
            },
            {
                label: 'Additional Metadata',
                name: 'metadata',
                type: 'json',
                description: 'Additional metadata to be added to the extracted documents',
                optional: true,
                additionalParams: true
            },
            {
                label: 'Omit Metadata Keys',
                name: 'omitMetadataKeys',
                type: 'string',
                rows: 4,
                description:
                    'Each document loader comes with a default set of metadata keys that are extracted from the document. You can use this field to omit some of the default metadata keys. The value should be a list of keys, seperated by comma. Use * to omit all metadata keys execept the ones you specify in the Additional Metadata field',
                placeholder: 'key1, key2, key3.nestedKey1',
                optional: true,
                additionalParams: true
            }
        ]
        this.outputs = [
            {
                label: 'Document',
                name: 'document',
                description: 'Array of document objects containing metadata and pageContent',
                baseClasses: [...this.baseClasses, 'json']
            },
            {
                label: 'Text',
                name: 'text',
                description: 'Concatenated string from pageContent of documents',
                baseClasses: ['string', 'json']
            }
        ]
    }

    getF {
        const powerpointFileBase64 = nodeData.inputs?.powerpointFile as string

        let files: string[] = []
        let fromStorage: boolean = true

        ) {
            
             && f) {
                f
            } else {
                files = [fileName]
            }
        } else {
             && p) {
                f
            } else {
                files = [powerpointFileBase64]
            }

            fromStorage = false
        }

        return { files, fromStorage }
    }

    a {
         {
            
        } else {
            
            
             || '', 'ba
        }
    }

    a: Promise<any> {
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const output = nodeData.outputs?.output as string
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string

        let docs: IDocument[] = []

        const orgId = options.orgId
        const chatflowid = options.chatflowid

        

        f {
             continue

            
            
            

            // use spread instead of push, because it raises RangeError: Maximum call stack size exceeded when too many docs
            )]
        }

        

        
    }
}

module.exports = { nodeClass: MicrosoftPowerpoint_DocumentLoaders }
