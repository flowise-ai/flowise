import { Suspense } from 'react'

// project imports
import Loader from './Loader'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

 =>
    fun {
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        )
    }

export default Loadable
