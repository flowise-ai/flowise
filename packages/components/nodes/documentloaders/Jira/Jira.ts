import { omit } from 'lodash'
import { ICommonObject, IDocument, INode, INodeData, INodeParams } from '../../../src/Interface'
import { TextSplitter } from 'langchain/text_splitter'
import { JiraProjectLoaderParams, JiraProjectLoader } from '@langchain/community/document_loaders/web/jira'
import { getCredentialData, getCredentialParam, handleEscapeCharacters, INodeOutputsValue } from '../../../src'

class Jira_DocumentLoaders implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    credential: INodeParams
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

     {
        this.label = 'Jira'
        this.name = 'jira'
        this.version = 1.0
        this.type = 'Document'
        this.icon = 'jira.svg'
        this.category = 'Document Loaders'
        this.description = `Load issues from Jira`
        this.baseClasses = [this.type]
        this.credential = {
            label: 'Connect Credential',
            name: 'credential',
            type: 'credential',
            description: 'Jira API Credential',
            credentialNames: ['jiraApi']
        }
        this.inputs = [
            {
                label: 'Host',
                name: 'host',
                type: 'string',
                placeholder: 'https://jira.example.com'
            },
            {
                label: 'Project Key',
                name: 'projectKey',
                type: 'string',
                default: 'main'
            },
            {
                label: 'Limit per request',
                name: 'limitPerRequest',
                type: 'number',
                step: 1,
                optional: true,
                placeholder: '100'
            },
            {
                label: 'Created after',
                name: 'createdAfter',
                type: 'string',
                optional: true,
                placeholder: '2024-01-01'
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

    a: Promise<any> {
        const host = nodeData.inputs?.host as string
        const projectKey = nodeData.inputs?.projectKey as string
        const limitPerRequest = nodeData.inputs?.limitPerRequest as string
        const createdAfter = nodeData.inputs?.createdAfter as string
        const textSplitter = nodeData.inputs?.textSplitter as TextSplitter
        const metadata = nodeData.inputs?.metadata
        const _omitMetadataKeys = nodeData.inputs?.omitMetadataKeys as string
        const output = nodeData.outputs?.output as string

        let omitMetadataKeys: string[] = []
         {
            .map((key) => key.t)
        }

        
        
        

        const jiraOptions: JiraProjectLoaderParams = {
            projectKey,
            host,
            username,
            accessToken
        }

         {
            j
        }

         {
            j
        }

        
        let docs: IDocument[] = []

         {
            
            
        } else {
            
        }

         {
            
             => ({
                ...doc,
                metadata:
                    _omitMetadataKeys === '*'
                        ? {
                              ...parsedMetadata
                          }
                        : omit(
                              {
                                  ...doc.metadata,
                                  ...parsedMetadata
                              },
                              omitMetadataKeys
                          )
            }))
        } else {
             => ({
                ...doc,
                metadata:
                    _omitMetadataKeys === '*'
                        ? {}
                        : omit(
                              {
                                  ...doc.metadata
                              },
                              omitMetadataKeys
                          )
            }))
        }

         {
            return docs
        } else {
            let finaltext = ''
            f {
                finaltext += `${doc.pageContent}\n`
            }
            
        }
    }
}

module.exports = { nodeClass: Jira_DocumentLoaders }
