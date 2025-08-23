// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import AuthUtils from '@/utils/authUtils'

const initialState = {
    u ? JSON.pa) : null,
    ,
    ,
    token: null,
    permissions:
        l && l !== 'undefined'
            ? JSON.pa)
            : null,
    features:
        l && l !== 'undefined'
            ? JSON.pa)
            : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        l => {
            AuthUt
        },
        l => {
            state.user = null
            state.token = null
            state.permissions = null
            state.features = null
            state.isAuthenticated = false
            state.isGlobal = false
            AuthUt
        },
        w => {
            AuthUt
        },
        upg => {
            AuthUt
        },
        u => {
            
            state.user.name = user.name
            state.user.email = user.email
            AuthUt
        },
        w => {
            const updatedWorkspace = action.payload
            // find the matching assignedWorkspace and update it
             => {
                 {
                    return {
                        ...workspace,
                        name: updatedWorkspace.name
                    }
                }
                return workspace
            })
            state.user.assignedWorkspaces = assignedWorkspaces
            AuthUt
        }
    }
})

export const { loginSuccess, logoutSuccess, workspaceSwitchSuccess, upgradePlanSuccess, userProfileUpdated, workspaceNameUpdated } =
    authSlice.actions
export default authSlice.reducer
