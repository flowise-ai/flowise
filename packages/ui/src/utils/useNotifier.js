import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { removeSnackbar } from '@/store/actions'

let displayed = []

 => {
    
     => 
    const { notifications } = notifier

    

     => {
        displayed = [...displayed, id]
    }

     => {
         => ]
    }

    Rea => {
        n => {
             {
                // dismiss snackbar using notistack
                
                return
            }

            // do nothing if snackbar is already displayed
            ) return

            // display snackbar using notistack
            enqueueSnackbar(message, {
                key,
                ...options,
                 => {
                     {
                        
                    }
                },
                 => {
                    // remove this snackbar from redux store
                    )
                    
                }
            })

            // keep track of snackbars that we've displayed
            
        })
    }, 
}

export default useNotifier
