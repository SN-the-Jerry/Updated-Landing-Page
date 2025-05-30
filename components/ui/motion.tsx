import { motion } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const MotionDiv = motion.div