import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Section({ id, className = '', children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  return (
    <section id={id} ref={ref} className={`relative py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
      >
        {children}
      </motion.div>
    </section>
  )
}
