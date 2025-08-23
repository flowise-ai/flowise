import client from './client'

 => 
 =>
    client.post(`/vector/internal-upsert/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
 => 
 => 

export default {
    getUpsertHistory,
    upsertVectorStore,
    upsertVectorStoreWithFormData,
    deleteUpsertHistory
}
