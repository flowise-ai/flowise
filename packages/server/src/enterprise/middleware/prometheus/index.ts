import express from 'express'
import promClient, { Counter } from 'prom-client'

exp => {
    
    register.setDefaultLabels({
        app: 'FlowiseAI'
    })

    const predictionsTotal = new promClient.Counter({
        name: 'checkouts_total',
        help: 'Total number of checkouts',
        labelNames: ['payment_method']
    })

    const requestCounter = new Counter({
        name: 'http_requests_total',
        help: 'Total number of HTTP requests',
        labelNames: ['method', 'path', 'status']
    })

    app.u => {
         => {
            ).
            p.
        })
    })

    // enable default metrics like CPU usage, memory usage, etc.
    p
    // Add our custom metric to the registry
    
    

    // Add Prometheus middleware to the app
    app.u => {
        
        
        
    })

    const httpRequestDurationMicroseconds = new promClient.Histogram({
        name: 'http_request_duration_ms',
        help: 'Duration of HTTP requests in ms',
        labelNames: ['method', 'route', 'code'],
        buckets: [1, 5, 15, 50, 100, 200, 300, 400, 500] // buckets for response time from 0.1ms to 500ms
    })
    

    // Runs before each requests
    app.u => {
        
        next()
    })

    // Runs after each requests
    app.u => {
         => {
            
             - res.locals.startEpoch
            httpReque).
        })
        next()
    })
}
