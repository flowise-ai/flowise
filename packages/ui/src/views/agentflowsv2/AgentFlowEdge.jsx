import { EdgeLabelRenderer, getBezierPath } from 'reactflow'
import { memo, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { SET_DIRTY } from '@/store/actions'
import { flowContext } from '@/store/context/ReactFlowContext'
import { IconX } from '@tabler/icons-react'

fun {
    return (
        <div
            style={{
                position: 'absolute',
                background: 'transparent',
                left: isHumanInput ? 10 : 0,
                paddingTop: 1,
                color: color,
                fontSize: '0.5rem',
                fontWeight: 700,
                transform,
                zIndex: 1000
            }}
            className='nodrag nopan'
        >
            {label}
        </div>
    )
}

EdgeLabel.propTypes = {
    transform: PropTypes.string,
    isHumanInput: PropTypes.bool,
    label: PropTypes.string,
    color: PropTypes.string
}

const foreignObjectSize = 40

 => {
    
    
    

     => {
        evt.
        
        
    }

    const xEqual = sourceX === targetX
    const yEqual = sourceY === targetY

    const [edgePath, edgeCenterX, edgeCenterY] = getBezierPath({
        // we need this little hack in order to display the gradient for a straight line
        sourceX: xEqual ? sourceX + 0.0001 : sourceX,
        sourceY: yEqual ? sourceY + 0.0001 : sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition
    })

    const gradientId = `edge-gradient-${id}`
    return (
        <>
            <defs>
                <linearGradient id={gradientId}>
                    <stop offset='0%' stopColor={data?.sourceColor || '#ae53ba'} />
                    <stop offset='100%' stopColor={data?.targetColor || '#2a8af6'} />
                </linearGradient>
            </defs>
            <path
                id={`${id}-selector`}
                className='agent-flow-edge-selector'
                style={{
                    stroke: 'transparent',
                    strokeWidth: 15,
                    fill: 'none',
                    cursor: 'pointer'
                }}
                d={edgePath}
                 => }
                 => }
            />
            <path
                id={id}
                className='agent-flow-edge'
                style={{
                    strokeWidth: selected ? 3 : 2,
                    `,
                    f)' : 'none',
                    cursor: 'pointer',
                    opacity: selected ? 1 : 0.75,
                    fill: 'none'
                }}
                d={edgePath}
                markerEnd={markerEnd}
                 => }
                 => }
            />
            {data?.edgeLabel && (
                <EdgeLabelRenderer>
                    <EdgeLabel
                        isHumanInput={data?.isHumanInput}
                        color={data?.sourceColor || '#ae53ba'}
                        label={data.edgeLabel}
                        t t`}
                    />
                </EdgeLabelRenderer>
            )}
            {isHovered && (
                <foreignObject
                    width={foreignObjectSize}
                    height={foreignObjectSize}
                    x={edgeCenterX - foreignObjectSize / 2}
                    y={edgeCenterY - foreignObjectSize / 2}
                    className='edgebutton-foreignobject'
                    requiredExtensions='http://www.w3.org/1999/xhtml'
                     => }
                     => }
                >
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pointerEvents: 'all'
                        }}
                    >
                        <button
                            className='edgebutton'
                             => }
                            style={{
                                width: '12px',
                                height: '12px',
                                background: `linear-gradient(to right, ${data?.sourceColor || '#ae53ba'}, ${
                                    data?.targetColor || '#2a8af6'
                                })`,
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                fontSize: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                b',
                                transition: 'all 0.2s ease-in-out',
                                padding: '2px'
                            }}
                             => {
                                e.'
                                e.'
                            }}
                             => {
                                e.'
                                e.'
                            }}
                             => {
                                e.'
                                e.'
                            }}
                             => {
                                e.'
                                e.'
                            }}
                        >
                            <IconX stroke={2} size='12' color='white' />
                        </button>
                    </div>
                </foreignObject>
            )}
        </>
    )
}

AgentFlowEdge.propTypes = {
    id: PropTypes.string,
    sourceX: PropTypes.number,
    sourceY: PropTypes.number,
    targetX: PropTypes.number,
    targetY: PropTypes.number,
    sourcePosition: PropTypes.any,
    targetPosition: PropTypes.any,
    style: PropTypes.object,
    data: PropTypes.object,
    markerEnd: PropTypes.any,
    selected: PropTypes.bool
}

exp
