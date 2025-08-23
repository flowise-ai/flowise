import { Response } from 'express'
import { IServerSideEventStreamer } from 'flowise-components'

//  and Response type
type Client = {
    // future use
    clientType: 'INTERNAL' | 'EXTERNAL'
    response: Response
    // optional property with default value
    started?: boolean
}

export class SSEStreamer implements IServerSideEventStreamer {
    clients: { [id: string]: Client } = {}

    a {
        this.clients[chatId] = { clientType: 'EXTERNAL', response: res, started: false }
    }

    a {
        this.clients[chatId] = { clientType: 'INTERNAL', response: res, started: false }
    }

     {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'end',
                data: '[DONE]'
            }
             + '\n\n')
            
            delete this.clients[chatId]
        }
    }

     {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: eventType,
                data: data
            }
             + '\n\n')
        }
    }

     {
        const client = this.clients[chatId]
        // prevent multiple start events being streamed to the client
         {
            const clientResponse = {
                event: 'start',
                data: data
            }
             + '\n\n')
            client.started = true
        }
    }

     {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'token',
                data: data
            }
             + '\n\n')
        }
    }

     {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'sourceDocuments',
                data: data
            }
             + '\n\n')
        }
    }
     {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'artifacts',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'usedTools',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'calledTools',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'fileAnnotations',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'tool',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'agentReasoning',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'nextAgent',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'agentFlowEvent',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'agentFlowExecutedData',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'nextAgentFlow',
                data: data
            }
             + '\n\n')
        }
    }
    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'action',
                data: data
            }
             + '\n\n')
        }
    }

    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'abort',
                data: '[DONE]'
            }
             + '\n\n')
        }
    }

     {
        // placeholder for future use
    }

     {
        ) msg = '401 Invalid model key or Incorrect local model configuration.'
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'error',
                data: msg
            }
             + '\n\n')
        }
    }

     {
        const metadataJson: any = {}
         {
            metadataJson['chatId'] = apiResponse.chatId
        }
         {
            metadataJson['chatMessageId'] = apiResponse.chatMessageId
        }
         {
            metadataJson['question'] = apiResponse.question
        }
         {
            metadataJson['sessionId'] = apiResponse.sessionId
        }
         {
            metadataJson['memoryType'] = apiResponse.memoryType
        }
         {
            metadataJson['followUpPrompts'] =
                type : apiResponse.followUpPrompts
        }
         {
            metadataJson['flowVariables'] =
                type : apiResponse.flowVariables
        }
        .length > 0) {
            th
        }
    }

    : void {
        const client = this.clients[chatId]
         {
            const clientResponse = {
                event: 'usageMetadata',
                data: data
            }
             + '\n\n')
        }
    }
}
