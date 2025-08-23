import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dotenv from 'dotenv'

exp => {
    let proxy = undefined
     {
        .parsed
        const serverHost = serverEnv?.['HOST'] ?? 'localhost'
        
         &&  {
            proxy = {
                '^/ap.*': {
                    target: `http://${serverHost}:${serverPort}`,
                    changeOrigin: true
                }
            }
        }
    }

    
    return {
        plug],
        resolve: {
            alias: {
                '@': ,
                '@,
                '@,
                '@,
                '@,
                '@,
                '@u,
                '@u,
                '@u,
                '@leze,
                '@leze
            }
        },
        ,
        build: {
            outDir: './build'
        },
        server: {
            open: true,
            proxy,
            port: process.env.VITE_PORT ?? 8080,
            host: process.env.VITE_HOST
        }
    }
})
