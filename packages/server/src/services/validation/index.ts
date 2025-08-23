import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getErrorMessage } from '../../errors/utils'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import { ChatFlow } from '../../database/entities/ChatFlow'
import { INodeParams } from 'flowise-components'
import { IReactFlowEdge, IReactFlowNode } from '../../Interface'

interface IValidationResult {
    id: string
    label: string
    name: string
    issues: string[]
}

: Promise<IValidationResult[]> => {
    try {
        

        const componentNodes = appServer.nodesPool.componentNodes

        // Create query conditions with workspace filtering if provided
        const whereCondition: any = { id: flowId }
         whereCondition.workspaceId = workspaceId

        .findOne({
            where: whereCondition
        })

         {
            th
        }

        
        const nodes = flowData.nodes
        const edges = flowData.edges

        // Store validation results
        const validationResults = []

        // Create a map of connected nodes
        
        e => {
            
            
        })

        // Validate each node
        f {
             continue

            const nodeIssues = []

            // Check if node is connected
            ) {
                n
            }

            // Validate input parameters
             {
                f {
                    // Skip validation if the parameter has show condition that doesn't match
                     {
                        let shouldShow = true
                        f) {
                             {
                                shouldShow = false
                                break
                            }
                        }
                         continue
                    }

                    // Skip validation if the parameter has hide condition that matches
                     {
                        let shouldHide = true
                        f) {
                             {
                                shouldHide = false
                                break
                            }
                        }
                         continue
                    }

                    // Check if required parameter has a value
                     {
                        const inputValue = node.data.inputs[param.name]
                         {
                            n
                        }
                    }

                    // Che
                    ) {
                        const inputValue = node.data.inputs[param.name]

                        // Only val
                         {
                            // Check each item in the array
                             => {
                                 {
                                    pa => {
                                        // Evaluate if this parameter should be shown based on current values
                                        // First check show conditions
                                        let shouldValidate = true

                                         {
                                            // Default to not showing unless conditions match
                                            shouldValidate = false

                                            // Each key in show is a condition that must be satisfied
                                            f) {
                                                
                                                let actualValue

                                                 {
                                                    // Replace $index with actual index and evaluate
                                                    /, '$1')
                                                    actualValue = item[normalizedKey]
                                                } else {
                                                    // Direct property in the current item
                                                    actualValue = item[conditionKey]
                                                }

                                                // Check if condition is satisfied
                                                let conditionMet = false
                                                ) {
                                                    
                                                } else {
                                                    conditionMet = actualValue === expectedValue
                                                }

                                                 {
                                                    shouldValidate = true
                                                    break // One matching condition is enough
                                                }
                                            }
                                        }

                                        // Then 
                                         {
                                            f) {
                                                
                                                let actualValue

                                                 {
                                                    // Replace $index with actual index and evaluate
                                                    /, '$1')
                                                    actualValue = item[normalizedKey]
                                                } else {
                                                    // Direct property in the current item
                                                    actualValue = item[conditionKey]
                                                }

                                                // Check if hide condition is met
                                                let shouldHide = false
                                                ) {
                                                    
                                                } else {
                                                    shouldHide = actualValue === expectedValue
                                                }

                                                 {
                                                    shouldValidate = false
                                                    break // One matching hide condition is enough to hide
                                                }
                                            }
                                        }

                                        // Only validate if field should be shown
                                         {
                                            // Check if value is required and missing
                                            if (
                                                (a &&
                                                (item[arrayParam.name] === undefined ||
                                                    item[arrayParam.name] === null ||
                                                    item[arrayParam.name] === '' ||
                                                    
                                            ) {
                                                n
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }

                    // Check for credential requirements
                     {
                        const credentialValue = node.data.inputs[param.name]
                         {
                            n
                        }
                    }

                    // Check for nested config parameters
                    const configKey = `${param.name}Config`
                     {
                        const componentName = node.data.inputs[param.name]
                        const configValue = node.data.inputs[configKey]

                        // Check if the component exists in the componentNodes pool
                         {
                            const componentInputParams = componentNodes[componentName].inputs

                            // Validate each required input parameter in the component
                            f {
                                // Skip validation if the parameter has show condition that doesn't match
                                 {
                                    let shouldShow = true
                                    f) {
                                         {
                                            shouldShow = false
                                            break
                                        }
                                    }
                                     continue
                                }

                                // Skip validation if the parameter has hide condition that matches
                                 {
                                    let shouldHide = true
                                    f) {
                                         {
                                            shouldHide = false
                                            break
                                        }
                                    }
                                     continue
                                }

                                 {
                                    const nestedValue = configValue[componentParam.name]
                                     {
                                        n
                                    }
                                }
                            }

                            // Check for credential requirement in the component
                             {
                                 {
                                    n
                                }
                            }
                        }
                    }
                }
            }

            // Add node to validation results if it has issues
             {
                validationResults.push({
                    id: node.id,
                    label: node.data.label,
                    name: node.data.name,
                    issues: nodeIssues
                })
            }
        }

        // Check for hanging edges
        f {
             => n
             => n

             {
                // Find the existing node that is connected to this hanging edge
                 {
                    // Target exists but source doesn't - add issue to target node
                     => n
                     => 

                     {
                        // Add to existing validation result
                        ta
                    } else {
                        // Create new validation result for this node
                        validationResults.push({
                            id: targetNode.id,
                            label: targetNode.data.label,
                            name: targetNode.data.name,
                            issues: [`Connected to non-existent source node ${edge.source}`]
                        })
                    }
                } el {
                    // Source exists but target doesn't - add issue to source node
                     => n
                     => 

                     {
                        // Add to existing validation result
                        
                    } else {
                        // Create new validation result for this node
                        validationResults.push({
                            id: sourceNode.id,
                            label: sourceNode.data.label,
                            name: sourceNode.data.name,
                            issues: [`Connected to non-existent target node ${edge.target}`]
                        })
                    }
                } else {
                    // Both source and target don't exist - create a generic edge issue
                    validationResults.push({
                        id: edge.id,
                        label: `Edge ${edge.id}`,
                        name: 'edge',
                        issues: ['Disconnected edge - both source and target nodes do not exist']
                    })
                }
            }
        }

        return validationResults
    }  {
        throw new InternalFlowiseError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            `E}`
        )
    }
}

export default {
    checkFlowValidation
}
