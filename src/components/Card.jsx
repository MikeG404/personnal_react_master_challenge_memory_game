import { motion } from "motion/react"
import CardBack from "./svg/CardBack"

const Card = ({elem, handleFlip, isFlipped}) => {
    return (
        <div className="w-full aspect-square" style={{ perspective: '1000px' }}>
            
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                onClick={handleFlip}
            >
                <div 
                    className="absolute inset-0 flex justify-center items-center rounded-2xl bg-white text-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <CardBack />
                </div>
                
                <div 
                    className="absolute inset-0 flex justify-center items-center rounded-2xl border border-black bg-white text-7xl"
                    style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {elem}
                </div>
            </motion.div>
        </div>
    )
}

export default Card;