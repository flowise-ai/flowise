import { useEffect, useRef } from 'react'

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

 => {
    

    useEffect(
        () => () => {
            scripted.current = false
        },
        []
    )

    return scripted
}

export default useScriptRef
