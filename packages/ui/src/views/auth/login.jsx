import { useEffect, useState } from 'react'

// material-ui
import { BackdropLoader } from '@/ui-component/loading/BackdropLoader'

// project imports
import MainCard from '@/ui-component/cards/MainCard'

// API
import authApi from '@/api/auth'

// Hooks
import useApi from '@/hooks/useApi'

// ==============================|| ResolveLoginPage ||============================== //

 => {
    
    

    u => {
        
    }, 

    u => {
        
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 

    u => {
        
         {
            window.location.href = resolveLogin.data.redirectUrl
        }
    }, 

    return (
        <>
            <MainCard maxWidth='md'>{loading && <BackdropLoader open={loading} />}</MainCard>
        </>
    )
}

export default ResolveLoginPage
