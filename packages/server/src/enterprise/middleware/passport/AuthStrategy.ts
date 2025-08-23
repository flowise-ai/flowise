import { JwtFromRequestFunction, Strategy as JwtStrategy, VerifiedCallback } from 'passport-jwt'
import { decryptToken } from '../../utils/tempTokenUtils'
import { Strategy } from 'passport'
import { Request } from 'express'
import { ICommonObject } from 'flowise-components'

 => {
    let jwt = null

     {
        jwt = req.cookies['token']
    }

    return jwt
}

exp: Strategy => {
    let jwtFromRequest: JwtFromRequestFunction
    jwtFromRequest = _cookieExtractor
    const jwtOptions = {
        jwtFromRequest: jwtFromRequest,
        passReqToCallback: true,
        ...options
    }
     => {
        try {
             {
                
            }
            
             {
                
            }
            
             {
                
            }
            
        }  {
            
        }
    }
    
}
