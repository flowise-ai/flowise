import { FLOWISE_METRIC_COUNTERS, IMetricsProvider } from '../Interface.Metrics'
import express from 'express'
import promClient, { Counter, Histogram, Registry } from 'prom-client'
import { getVersion } from 'flowise-components'

export class Prometheus implements IMetricsProvider {
    private app: express.Application
    private readonly register: Registry
    private counters: Map<string, promClient.Counter<string> | promClient.Gauge<string> | promClient.Histogram<string>>
    private requestCounter: Counter<string>
    private httpRequestDurationMicroseconds: Histogram<string>

     {
        this.app = app
        // Clear any existing default registry metrics to avoid conflicts
        p
        // Create a separate registry for our metrics
        th
    }

    publ: string {
        return 'Prometheus'
    }

    a: Promise<void> {
        const serviceName: string = process.env.METRICS_SERVICE_NAME || 'FlowiseAI'
        this.register.setDefaultLabels({
            app: serviceName
        })

        // look at the FLOWISE_COUNTER enum in Interface.Metrics.ts and get all values
        // for each counter in the enum, create a new promClient.Counter and add it to the registry
        th
        
        enumEnt => {
            // 
            . => l.t)
            try {
                this.counters.set(
                    value,
                    new promClient.Counter({
                        name: value,
                        help: `Total number of ${properCounterName}`,
                        labelNames: ['status'],
                        registers: [this.register] // Explicitly set the registry
                    })
                )
            }  {
                // If metric already exists, get it from the registry instead
                
                 {
                    th
                }
            }
        })

        // in addition to the enum counters, add a few more custom counters
        // version, http_request_duration_ms, http_requests_total
        try {
            const versionGaugeCounter = new promClient.Gauge({
                name: 'flowise_version_info',
                help: 'Flowise version info.',
                labelNames: ['version'],
                registers: [this.register] // Explicitly set the registry
            })

            
            ve
            th
        }  {
            // If metric already exists, get it from the registry
            
             {
                th
            }
        }

        try {
            this.httpRequestDurationMicroseconds = new promClient.Histogram({
                name: 'http_request_duration_ms',
                help: 'Duration of HTTP requests in ms',
                labelNames: ['method', 'route', 'code'],
                buckets: [1, 5, 15, 50, 100, 200, 300, 400, 500], // buckets for response time from 0.1ms to 500ms
                registers: [this.register] // Explicitly set the registry
            })
            th
        }  {
            // If metric already exists, get it from the registry
            
             {
                this.httpRequestDurationMicroseconds = existingMetric as Histogram<string>
                th
            }
        }

        try {
            this.requestCounter = new Counter({
                name: 'http_requests_total',
                help: 'Total number of HTTP requests',
                labelNames: ['method', 'path', 'status'],
                registers: [this.register] // Explicitly set the registry
            })
            th
        }  {
            // If metric already exists, get it from the registry
            
             {
                this.requestCounter = existingMetric as Counter<string>
                th
            }
        }

        // Only register metrics that aren't already in the registry
        th
        awa
    }

    a {
        // Add Prometheus middleware to the app
        th => {
            
            
            .en
        })

        // Runs before each requests
        th => {
            
            next()
        })

        // Runs after each requests
        th => {
             => {
                 {
                    th
                     - res.locals.startEpoch
                    this.httpRequestDurationMicroseconds
                        .label)
                        .
                }
            })
            next()
        })
    }

    publ {
        // increment the counter with the payload
        ) {
            ;(th a.label.
        }
    }

    p {
         {
            // Clear any existing default metrics to avoid conflicts
            p
            // enable default metrics like CPU usage, memory usage, etc.
            // and ensure they're only registered with our custom registry
            promClient.collectDefaultMetrics({
                register: this.register,
                prefix: 'flowise_' // Add a prefix to avoid conflicts
            })
        }

        // Add only the custom metrics that haven't been registered yet
        f) {
            try {
                // Type assertion to access the name property
                .name
                ) {
                    th
                }
            }  {
                // If we can't register the metric, it probably already exists
                // Just continue with the next one
            }
        }
    }
}
