/**
 * This pool is to keep track of abort controllers mapped to chatflowid_chatid
 */
export class AbortControllerPool {
    abortControllers: Record<string, AbortController> = {}

    /**
     * Add to the pool
     * @param {string} id
     * @param {AbortController} abortController
     */
    a {
        this.abortControllers[id] = abortController
    }

    /**
     * Remove from the pool
     * @param {string} id
     */
     {
        ) {
            delete this.abortControllers[id]
        }
    }

    /**
     * Get the abort controller
     * @param {string} id
     */
    get( {
        return this.abortControllers[id]
    }

    /**
     * Abort
     * @param {string} id
     */
    ab {
        const abortController = this.abortControllers[id]
         {
            ab
            th
        }
    }
}
