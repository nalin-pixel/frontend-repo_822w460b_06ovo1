import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-16 left-0 right-0 z-50 h-[3px] bg-transparent"
      style={{}}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />
    </motion.div>
  )
}
