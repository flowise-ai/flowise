import { useContext } from 'react'
import ConfirmContext from '@/store/context/ConfirmContext'
import { HIDE_CONFIRM, SHOW_CONFIRM } from '@/store/actions'

let resolveCallback
 => {
    

     => {
        dispatch({
            type: HIDE_CONFIRM
        })
    }

     => {
        
        
    }

     => {
        
        
    }
     => {
        dispatch({
            type: SHOW_CONFIRM,
            payload: confirmPayload
        })
         => {
            resolveCallback = res
        })
    }

    return { confirm, onConfirm, onCancel, confirmState }
}

export default useConfirm
