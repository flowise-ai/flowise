// TODO: add settings

import { Platform } from '../../Interface'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'

 => {
    try {
        
        

         {
            case Platform.ENTERPRISE: {
                ) {
                    return {}
                } else {
                    return { PLATFORM_TYPE: Platform.ENTERPRISE }
                }
            }
            case Platform.CLOUD: {
                return { PLATFORM_TYPE: Platform.CLOUD }
            }
            default: {
                return { PLATFORM_TYPE: Platform.OPEN_SOURCE }
            }
        }
    }  {
        return {}
    }
}

export default {
    getSettings
}
