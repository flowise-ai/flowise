import { BaseTracer, Run } from '@langchain/core/tracers/base'
import { Logger } from 'winston'
import { AgentRun, elapsed, tryJsonStringify } from './handler'

export class MetricsLogger extends BaseTracer {
    name = 'console_callback_handler' as const
    logger: Logger
    orgId?: string

    p {
        
    }

     {
        
        this.logger = logger
        this.orgId = orgId
    }

    // utility methods

    getPa {
        const parents: Run[] = []
        let currentRun = run
        wh {
            
             {
                pa
                currentRun = parent
            } else {
                break
            }
        }
        return parents
    }

    getB {
        .
        const string = [...parents, run]
            .map((pa => {
                const name = `${parent.execution_order}:${parent.run_type}:${parent.name}`
                return name
            })
            .j
        return string
    }

    // logging methods

     {
        
        this.logger.verbose(
            `}`
        )
    }

     {
        
        this.logger.verbose(
            `}] Exiting Chain run with output: ${tryJsonStringify(
                run.outputs,
                '[outputs]'
            )}`
        )
    }

     {
        
        this.logger.verbose(
            `}] Chain run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        
        .map((p) => p.t) } : run.inputs
        th}`)
    }

     {
        
        this.logger.verbose(
            `}] Exiting LLM run with output: ${tryJsonStringify(
                run.outputs,
                '[response]'
            )}`
        )
    }

     {
        
        this.logger.verbose(
            `}] LLM run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        
        th}"`)
    }

     {
        
        this.logger.verbose(
            `}] Ex}"`
        )
    }

     {
        
        this.logger.verbose(
            `}] Tool run errored with error: ${tryJsonStringify(
                run.error,
                '[error]'
            )}`
        )
    }

     {
        const agentRun = run as AgentRun
        
        this.logger.verbose(
            `[${this.orgId}]: [agent/action] [${crumbs}] Agent selected action: ${tryJsonStringify(
                agentRun.actions[agentRun.actions.length - 1],
                '[action]'
            )}`
        )
    }
}
