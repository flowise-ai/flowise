import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import SuggestionList from './SuggestionList'
import variablesApi from '@/api/variables'

/**
 * Workaround for the current typing incompatibility between Tippy.js and Tiptap
 * Suggestion utility.
 *
 * @see https://github.com/ueberdosis/tiptap/issues/2795#issuecomment-1160623792
 *
 * Adopted from
 * https://github.com/Doist/typist/blob/a1726a6be089e3e1452def641dfcfc622ac3e942/stories/typist-editor/constants/suggestions.ts#L169-L186
 */
const DOM_RECT_FALLBACK = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    t {
        return {}
    }
}

// Cache for storing variables
let cachedVariables = []

// Function to fetch variables
 => {
    try {
        
        cachedVariables = response.data || []
        return cachedVariables
    }  {
        
        return []
    }
}

export const suggestionOptions = (
    availableNodesForVariable,
    availableState,
    acceptNodeOutputAsVariable,
    nodes,
    nodeData,
    isNodeInsideInteration
) => ({
    char: '{{',
     => {
        const defaultItems = [
            { id: 'question', mentionLabel: 'question', description: "User's question from chatbox", category: 'Chat Context' },
            {
                id: 'chat_history',
                mentionLabel: 'chat_history',
                description: 'Past conversation history between user and AI',
                category: 'Chat Context'
            },
            {
                id: 'current_date_time',
                mentionLabel: 'current_date_time',
                description: 'Current date and time',
                category: 'Chat Context'
            },
            {
                id: 'runtime_messages_length',
                mentionLabel: 'runtime_messages_length',
                description: 'Total messsages between LLM and Agent',
                category: 'Chat Context'
            },
            {
                id: 'file_attachment',
                mentionLabel: 'file_attachment',
                description: 'Files uploaded from the chat',
                category: 'Chat Context'
            },
            { id: '$flow.sessionId', mentionLabel: '$flow.sessionId', description: 'Current session ID', category: 'Flow Variables' },
            { id: '$flow.chatId', mentionLabel: '$flow.chatId', description: 'Current chat ID', category: 'Flow Variables' },
            { id: '$flow.chatflowId', mentionLabel: '$flow.chatflowId', description: 'Current chatflow ID', category: 'Flow Variables' }
        ]

        .map(( => ({
            id: `$flow.state.${state.key}`,
            mentionLabel: `$flow.state.${state.key}`,
            category: 'Flow State'
        }))

         {
            defaultItems.unshift({
                id: '$iteration',
                mentionLabel: '$iteration',
                description: 'Iteration item. For JSON, use dot notation: $iteration.name',
                category: 'Iteration'
            })
        }

        // Add output option if acceptNodeOutputAsVariable is true
         {
            defaultItems.unshift({
                id: 'output',
                mentionLabel: 'output',
                description: 'Output from the current node',
                category: 'Node Outputs'
            })

            const structuredOutputs = nodeData?.inputs?.llmStructuredOutput ?? []
             {
                 => {
                    defaultItems.unshift({
                        id: `output.${item.key}`,
                        mentionLabel: `output.${item.key}`,
                        description: `${item.description}`,
                        category: 'Node Outputs'
                    })
                })
            }
        }

        // Fetch variables if cache is empty
         {
            awa
        }

         => ({
            id: `$vars.${variable.name}`,
            mentionLabel: `$vars.${variable.name}`,
            `,
            category: 'Custom Variables'
        }))

         => n
        const formInputTypes = startAgentflowNode?.data?.inputs?.formInputTypes

        let formItems = []
         {
            f.map(( => ({
                id: `$form.${input.name}`,
                mentionLabel: `$form.${input.name}`,
                description: `Form Input: ${input.label}`,
                category: 'Form Inputs'
            }))
        }

        .map((n => {
             => an

            return {
                id: `${node.id}`,
                mentionLabel: node.data.inputs.chainName ?? node.data.inputs.functionName ?? node.data.inputs.variableName ?? node.data.id,
                description:
                    node.data.name === 'ifElseFunction'
                        ? node.data.description
                        : `${selectedOutputAnchor?.label ?? 'Output'} from ${node.data.label}`,
                category: 'Node Outputs'
            }
        })

        const allItems = [...defaultItems, ...formItems, ...nodeItems, ...stateItems, ...variableItems]

        return allItems.filter(
            ( => .) || .)
        )
    },
     => {
        let component
        let popup

        return {
             => {
                component = new ReactRenderer(SuggestionList, {
                    props,
                    editor: props.editor
                })

                popup = tippy('body', {
                    getRefe => p ?? DOM_RECT_FALLBACK,
                    appen => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start'
                })[0]
            },

             {
                

                popup?.setProps({
                    getRefe => p ?? DOM_RECT_FALLBACK
                })
            },

             {
                 {
                    p
                    return true
                }

                 {
                    return false
                }

                
            },

             {
                p
                

                // Remove references to the old popup and component upon destruction/exit.
                // (Th`, which Tippy
                // warns in the console is a sign of a memory leak, as the `suggestion`
                // plugin seems to call `onExit` both when a suggestion menu is closed after
                // a u
                popup = undefined
                component = undefined
            }
        }
    }
})

// Export function to refresh variables cache
exp => {
    
}
