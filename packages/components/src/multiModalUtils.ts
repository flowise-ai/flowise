import { IVisionChatModal, ICommonObject, IFileUpload, IMultiModalOption, INodeData, MessageContentImageUrl } from './Interface'
import { getFileFromStorage } from './storageUtils'

export const addImagesToMessages = async (
    nodeData: INodeData,
    options: ICommonObject,
    multiModalOption?: IMultiModalOption
): Promise<MessageContentImageUrl[]> => {
    const imageContent: MessageContentImageUrl[] = []
    let model = nodeData.inputs?.model

     && mult {
        // Image Uploaded
         {
            
            f {
                let bf = upload.data
                 {
                    
                    // as the image is stored in the server, read the file and convert it to base64
                    bf = '

                    imageContent.push({
                        type: 'image_url',
                        image_url: {
                            url: bf,
                            detail: multiModalOption.image.imageResolution ?? 'low'
                        }
                    })
                } el {
                    imageContent.push({
                        type: 'image_url',
                        image_url: {
                            url: bf,
                            detail: multiModalOption.image.imageResolution ?? 'low'
                        }
                    })
                }
            }
        }
    }
    return imageContent
}

exp => {
     => upl)
}

exp => {
     => upl)
}

exp: value is IVisionChatModal => !!value?.multiModalOption
