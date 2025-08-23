import { AIMessage, BaseMessage, HumanMessage, SystemMessage } from '@langchain/core/messages'

export interface Config {
    baseUrl: string
    configurationId: string
}

export class ClientConfig implements Config {
    baseUrl: string
    configurationId: string

     {
        this.baseUrl = baseUrl
        this.configurationId = configurationId
    }
}

export class NemoClient {
    private readonly config: Config

     {
        th
    }

    getR: string {
         {
            return 'user'
        }

        //AIMessage, ToolMessage, FunctionMessage
        return 'assistant'
    }

    getC: string {
        
    }

    bu: any {
         => {
            return {
                ,
                
            }
        })

        const body = {
            config_id: configurationId,
            messages: bodyMessages
        }

        return body
    }

    a: Promise<AIMessage[]> {
        
        hea

        

        const requestOptions = {
            method: 'POST',
            b,
            headers: headers
        }

        
            .then(( => )
            .then((b => b => new AIMe))
    }
}
