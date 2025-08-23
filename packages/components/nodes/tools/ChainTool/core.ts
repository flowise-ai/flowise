import { DynamicTool, DynamicToolInput } from '@langchain/core/tools'
import { BaseChain } from 'langchain/chains'
import { handleEscapeCharacters } from '../../../src/utils'
import { CustomChainHandler } from '../../../src'

export interface ChainToolInput extends Omit<DynamicToolInput, 'func'> {
    chain: BaseChain
}

export class ChainTool extends DynamicTool {
    chain: BaseChain

     {
        super({
            ...rest,
            fun => {
                // prevent sending SSE events of the sub-chain
                 => han?.sseStreamer
                 {
                    const callbacks = runManager.handlers
                    f {
                         {
                            ;(.sseStreamer = undefined
                        }
                    }
                }

                .p.p {
                    .p

                    )
                     {
                        const callbacks = runManager.handlers
                        f {
                             {
                                ;(.sseStreamer = sseStreamer
                            }
                        }
                    }
                    return values?.text
                }

                )
                 {
                    const callbacks = runManager.handlers
                    f {
                         {
                            ;(.sseStreamer = sseStreamer
                        }
                    }
                }
                return values
            }
        })
        this.chain = chain
    }
}
