import axios from 'axios'
import { baseURL, ErrorMessage } from '@/store/constant'
import AuthUtils from '@/utils/authUtils'

const apiClient = axios.create({
    baseURL: `${baseURL}/api/v1`,
    headers: {
        'Content-type': 'application/json',
        'x-request-from': 'internal'
    },
    withCredentials: true
})

apiClient.interceptors.response.use(
    fun {
        return response
    },
    a => {
         {
            // check if refresh is needed
             {
                const originalRequest = error.config
                // call api to get new token
                
                 {
                    // retry the original request
                    
                }
            }
            l
            l
            AuthUt
        }

        
    }
)

export default apiClient
