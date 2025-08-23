import client from './client'

// OpenAI Assistant
 => 

 => 

// Assistant
 => 

 => 

 => 

 => 

 =>
     : 

// Vector Store
 => 

 => 

 => 

 =>
    

 => 

// Vector Store Files
 =>
    client.post(`/openai-assistants-vector-store/${id}?credential=${credentialId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })

 =>
    

// Files
 =>
    client.post(`/openai-assistants-file/upload?credential=${credentialId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })

 => 
 => 
 => 

 => 

export default {
    getAllAssistants,
    getSpecificAssistant,
    getAssistantObj,
    getAllAvailableAssistants,
    createNewAssistant,
    updateAssistant,
    deleteAssistant,
    getAssistantVectorStore,
    listAssistantVectorStore,
    updateAssistantVectorStore,
    createAssistantVectorStore,
    uploadFilesToAssistant,
    uploadFilesToAssistantVectorStore,
    deleteFilesFromAssistantVectorStore,
    deleteAssistantVectorStore,
    getChatModels,
    getDocStores,
    getTools,
    generateAssistantInstruction
}
