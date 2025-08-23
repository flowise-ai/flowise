import { useReducer } from 'react'
import PropTypes from 'prop-types'
import alertReducer, { initialState } from '../reducers/dialogReducer'
import ConfirmContext from './ConfirmContext'

 => {
    

    return <ConfirmContext.Provider value={[state, dispatch]}>{children}</ConfirmContext.Provider>
}

ConfirmContextProvider.propTypes = {
    children: PropTypes.any
}

export default ConfirmContextProvider
