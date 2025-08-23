import { v4 as uuidv4 } from 'uuid'
import { PostHog } from 'posthog-node'
import { getAppVersion } from '../utils'

export enum TelemetryEventType {
    'USER_CREATED' = 'user_created',
    'ORGANIZATION_CREATED' = 'organization_created'
}

export class Telemetry {
    postHog?: PostHog

     {
         {
            th
        } else {
            this.postHog = undefined
        }
    }

    a: Promise<void> {
        p
         {
            
            this.postHog.capture({
                event,
                distinctId,
                properties
            })
        }
    }

    a: Promise<void> {
         {
            awa
        }
    }
}
