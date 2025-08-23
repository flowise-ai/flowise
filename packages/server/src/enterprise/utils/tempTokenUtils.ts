import { LoggedInUser } from '../Interface.Enterprise'
import * as crypto from 'crypto'
import moment from 'moment'
import { customAlphabet } from 'nanoid'



// Generate a copy of the users without their passwords.
exp: any => {
    let _user: any = { ...user }
    delete _user.credential
    delete _user.tempToken
    delete _user.tokenExpiry
     {
        delete _user.email
    }
    delete _user.workspaceIds
    delete _user.ssoToken
    delete _user.ssoRefreshToken
    return _user
}

exp => {
    // generate a token with nanoid and return it
    
    return token
}

// Encrypt token with password using crypto.Cipheriv
exp => {
    const key = crypto
        .
        .up
        .

    const IV_LENGTH = 16
    
    
    

    ])

    // formatted string [iv]:[token]
     + ':' + 
}

// Decrypt token using the inverse of encryption crypto algorithm
exp: string | undefined => {
    try {
        const key = crypto
            .
            .up
            .

        let textPa
        let  a
        let en, 'hex')
        let 
        let 

        ])

        
    }  {
        return undefined
    }
}

// Extract userUUID from decrypted token string
exp: string | undefined => {
    try {
        [2]
        .t
    }  {
        return undefined
    }
}

exp: boolean => {
    // Using moment.diff method for retrieve dates difference in hours
    
    

     {
         : 24
        // Fail if more than 24 hours
        
         > exp return false
    } el {
        const expiryInMins = process.env.PASSWORD_RESET_TOKEN_EXPIRY_IN_MINUTES
            ? pa
            : 15
        
         > exp return false
    }
    return true
}

export enum TokenType {
    INVITE = 'INVITE',
    PASSWORD_RESET = 'PASSWORD_RESET'
}
