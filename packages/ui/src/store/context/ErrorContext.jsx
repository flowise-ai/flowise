import { createContext, useContext, useState } from 'react'
import { redirectWhenUnauthorized } from '@/utils/genericHelper'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { store } from '@/store'
import { logoutSuccess } from '@/store/reducers/authSlice'
import { ErrorMessage } from '../constant'



exp => {
    
    

     => {
        
         {
            nav
        } el {
             {
                )
                nav
            } else {
                const isRedirect = err?.response?.data?.redirectTo && err?.response?.data?.error

                 {
                    redirectWhenUnauthorized({
                        error: err.response.data.error,
                        redirectTo: err.response.data.redirectTo
                    })
                } else {
                    const currentPath = window.location.pathname
                     {
                        )
                        nav
                    }
                }
            }
        } el
    }

    return (
        <ErrorContext.Provider
            value={{
                error,
                setError,
                handleError
            }}
        >
            {children}
        </ErrorContext.Provider>
    )
}

exp => u

ErrorProvider.propTypes = {
    children: PropTypes.any
}
