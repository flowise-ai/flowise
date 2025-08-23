import PropTypes from 'prop-types'
import { forwardRef } from 'react'
// third-party
import { motion, useCycle } from 'framer-motion'

// ==============================|| ANIMATION BUTTON ||============================== //

 {
    let offset1
    let offset2
     {
        case 'up':
        case 'left':
            offset1 = offset
            offset2 = 0
            break
        case 'right':
        case 'down':
        default:
            offset1 = 0
            offset2 = offset
            break
    }

    
    

     {
        case 'rotate':
            return (
                <motion.div
                    ref={ref}
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2,
                        repeatDelay: 0
                    }}
                >
                    {children}
                </motion.div>
            )
        case 'slide':
             {
                return (
                    <motion.div
                        ref={ref}
                        animate={{ y: y !== undefined ? y : '' }}
                         => }
                         => }
                    >
                        {children}
                    </motion.div>
                )
            }
            return (
                <m => }  => }>
                    {children}
                </motion.div>
            )

        case 'scale':
        default:
             {
                scale = {
                    hover: scale,
                    tap: scale
                }
            }
            return (
                <motion.div ref={ref} whileHover={{ scale: scale?.hover }} whileTap={{ scale: scale?.tap }}>
                    {children}
                </motion.div>
            )
    }
})

AnimateButton.propTypes = {
    children: PropTypes.node,
    offset: PropTypes.number,
    type: P,
    ,
    
}

AnimateButton.defaultProps = {
    type: 'scale',
    offset: 10,
    direction: 'right',
    scale: {
        hover: 1,
        tap: 0.9
    }
}

export default AnimateButton
