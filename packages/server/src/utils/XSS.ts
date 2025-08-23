import { Request, Response, NextFunction } from 'express'
import sanitizeHtml from 'sanitize-html'

exp: void {
    // decoding is necessary as the url is encoded by the browser
    
    
    f {
        ) {
            const sanitizedQ = []
            f {
                )
            }
            req.query[p] = sanitizedQ
        } else {
            
        }
    }
    next()
}

exp: string {
    // Expects FQDN separated by commas, otherwise nothing or * for all.
    return process.env.CORS_ORIGINS ?? '*'
}

exp: any {
    const corsOptions = {
         => v {
            
              {
                
            } else {
                
            }
        }
    }
    return corsOptions
}

exp: string {
    // Expects FQDN separated by commas, otherwise nothing or * for all.
    // Also CSP allowed values: self or none
    return process.env.IFRAME_ORIGINS ?? '*'
}
