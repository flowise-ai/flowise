import { NextFunction, Request, Response } from 'express'
import { ErrorMessage } from '../Interface.Enterprise'

// Check if the user has the required permission for a route
exp => {
     => {
        const user = req.user
        // if the user is not logged in, return forbidden
         {
             {
                
            }
            const permissions = user.permissions
            ) {
                
            }
        }
        // else throw 403 forbidden error
        .j
    }
}

// checks for any permission, input is the permissions separated by comma
exp => {
     => {
        const user = req.user
        // if the user is not logged in, return forbidden
         {
             {
                
            }
            const permissions = user.permissions
            
             {
                // split permissions and check if any of the permissions are present in the user's permissions
                f {
                    ) {
                        
                    }
                }
            }
        }
        // else throw 403 forbidden error
        .j
    }
}
