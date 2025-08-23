import { Navigate } from 'react-router'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useConfig } from '@/store/context/ConfigContext'
import { useAuth } from '@/hooks/useAuth'
import { useSelector } from 'react-redux'

/**
 * Checks if a feature flag is enabled
 * @param {Object} features - Feature flags object
 * @param {string} display - Feature flag key to check
 * @param {React.ReactElement} children - Components to render if feature is enabled
 * @returns {React.ReactElement} Children or unauthorized redirect
 */
 => {
    // Validate features object exists and is properly formatted
     || Obje.length === 0) {
        return <Navigate to='/unauthorized' replace />
    }

    // Check if feature flag exists and is enabled
    ) {
        const isFeatureEnabled = features[display] === 'true' || features[display] === true
        return isFeatureEnabled ? children : <Navigate to='/unauthorized' replace />
    }

    return <Navigate to='/unauthorized' replace />
}

exp => {
    
    
    
     => 
     => 
     => 
     => 

    // Step 1: Authentication Check
    // Redirect to login if user is not authenticated
     {
        return <Navigate to='/login' replace state={{ path: location.pathname }} />
    }

    // Step 2: Deployment Type Specific Logic
    // Open Source: Only show features without display property
     {
        return !display ? children : <Navigate to='/unauthorized' replace />
    }

    // Cloud & Enterprise: Check both permissions and feature flags
     {
        // All
         return children

        // Check if user has any permissions
         {
            return <Navigate to='/unauthorized' replace state={{ path: location.pathname }} />
        }

        // Organization admins bypass permission checks
         {
            
        }

        // Check user permissions and feature flags
        ) {
            
        }

        return <Navigate to='/unauthorized' replace />
    }

    // Fallback: Allow access if none of the above conditions match
    return children
}

RequireAuth.propTypes = {
    permission: PropTypes.string,
    display: PropTypes.string,
    children: PropTypes.element
}
