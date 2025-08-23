exp: any[] {
    
    let response = []
     {
        p => {
            let me
                ? 'systemMessagePrompt'
                : me
                ? 'humanMessagePrompt'
                : me
                ? 'aiMessagePrompt'
                : 'template'
            let me
                ? 'System Message'
                : me
                ? 'Human Message'
                : me
                ? 'AI Message'
                : 'Message'
            let template = message.kwargs.prompt.kwargs.template
            response.push({
                type: messageType,
                typeDisplay: messageTypeDisplay,
                template: template
            })
        })
    } el {
        let template = promptObj.kwargs.template
        response.push({
            type: 'template',
            typeDisplay: 'Prompt',
            template: template
        })
    }
    return response
}
