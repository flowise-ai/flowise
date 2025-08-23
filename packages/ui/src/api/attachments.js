import client from './client'

 =>
    client.post(`/attachments/${chatflowid}/${chatid}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })

export default {
    createAttachment
}
