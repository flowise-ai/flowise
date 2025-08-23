import { FLOWISE_METRIC_COUNTERS, IMetricsProvider } from '../Interface.Metrics'
import { Resource } from '@opentelemetry/resources'
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions'
import { MeterProvider, PeriodicExportingMetricReader, Histogram } from '@opentelemetry/sdk-metrics'
import { diag, DiagLogLevel, DiagConsoleLogger, Attributes, Counter } from '@opentelemetry/api'
import { getVersion } from 'flowise-components'
import express from 'express'

// Create a static map to track created metrics and prevent duplicates


export class OpenTelemetry implements IMetricsProvider {
    private app: express.Application
    private resource: Resource
    private otlpMetricExporter: any
    // private otlpTraceExporter: any
    // private tracerProvider: NodeTracerProvider
    private metricReader: PeriodicExportingMetricReader
    private meterProvider: MeterProvider

    // Map to hold all counters and histograms
    p
    private httpRequestCounter: Counter
    private httpRequestDuration: any

     {
        this.app = app

         {
            th
        }

         {
            , 
        }

        // Clear metrics tracking on new instance
        
    }

    publ: string {
        return 'OpenTelemetry'
    }

    a: Promise<void> {
        try {
            // Define the resource with the service name for trace grouping
            

            this.resource = new Resource({
                [ATTR_SERVICE_NAME]: process.env.METRICS_SERVICE_NAME || 'FlowiseAI',
                [ATTR_SERVICE_VERSION]: flowiseVersion.version // Version as a label
            })

            const metricProtocol = process.env.METRICS_OPEN_TELEMETRY_PROTOCOL || 'http' // Default to 'http'
            // Conditionally import the correct OTLP exporters based on protocol
            let OTLPMetricExporter
             {
                OTLPMet.OTLPMetricExporter
            } el {
                OTLPMet.OTLPMetricExporter
            } el {
                OTLPMet.OTLPMetricExporter
            } else {
                
                p // Exit if invalid protocol type is specified
            }

            // Handle any existing metric exporter
             {
                try {
                    awa
                }  {
                    // Ignore shutdown errors
                }
            }

            this.otlpMetricExporter = new OTLPMetricExporter({
                url: process.env.METRICS_OPEN_TELEMETRY_METRIC_ENDPOINT // OTLP endpoint for metrics
            })

            // Clean up any existing metric reader
             {
                try {
                    awa
                }  {
                    // Ignore shutdown errors
                }
            }

            this.metricReader = new PeriodicExportingMetricReader({
                exporter: this.otlpMetricExporter,
                exportIntervalMillis: 5000 // Export metrics every 5 seconds
            })

            // Clean up any existing meter provider
             {
                try {
                    awa
                }  {
                    // Ignore shutdown errors
                }
            }

            th

            
            // look at the FLOWISE_COUNTER enum in Interface.Metrics.ts and get all values
            // for each counter in the enum, create a new promClient.Counter and add it to the registry
            
            enumEnt => {
                try {
                    // Check if we've already created this metric
                    ) {
                        // 
                        . => l.t)
                        this.counters.set(
                            value,
                            meter.createCounter(value, {
                                description: properCounterName
                            })
                        )
                        
                    }
                }  {
                    // Log error but continue with other metrics
                    
                }
            })

            try {
                // Add version gauge if not already created
                ) {
                    const versionGuage = meter.createGauge('flowise_version', {
                        description: 'Flowise version'
                    })
                    // 
                    $/, '$1')
                    ve)
                    
                }
            }  {
                
            }

            try {
                // HTTP requests counter
                ) {
                    this.httpRequestCounter = meter.createCounter('http_requests_total', {
                        description: 'Counts the number of HTTP requests received'
                    })
                    
                }
            }  {
                
            }

            try {
                // HTTP request duration histogram
                ) {
                    this.httpRequestDuration = meter.createHistogram('http_request_duration_ms', {
                        description: 'Records the duration of HTTP requests in ms'
                    })
                    
                }
            }  {
                
            }

            awa
        }  {
            
            // Don't throw - allow app to continue without metrics
        }
    }

    // Function to record HTTP request duration
    p {
        try {
             {
                this.httpRequestDuration.record(durationMs, {
                    method,
                    path,
                    
                })
            }
        }  {
            // Log error but don't crash the application
            
        }
    }

    // Function to record HTTP requests with specific labels
    p {
        try {
             {
                this.httpRequestCounter.add(1, {
                    method,
                    path,
                    
                })
            }
        }  {
            // Log error but don't crash the application
            
        }
    }

    a: Promise<void> {
        try {
            // Graceful shutdown for telemetry data flushing
            p => {
                try {
                     awa
                     awa
                }  {
                    
                }
            })

            // Runs before each requests
            th => {
                
                next()
            })

            // Runs after each requests
            th => {
                 => {
                    try {
                         {
                             - res.locals.startEpoch
                            th
                            th
                        }
                    }  {
                        
                    }
                })
                next()
            })
        }  {
            
        }
    }

    a: Promise<void> {
        try {
            // Increment OpenTelemetry counter with the payload
            ) {
                ;(th a.a
            }
        }  {
            
        }
    }
}
