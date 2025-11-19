import { motion, useScroll, useTransform } from 'framer-motion'

export default function FlowDecor() {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 800], [0, 30])
  const y1 = useTransform(scrollY, [0, 1200], [0, -120])
  const y2 = useTransform(scrollY, [0, 1200], [0, 120])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ rotate, y: y1 }}
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-400/10 to-fuchsia-500/20 blur-3xl"
      />
      <motion.div
        style={{ rotate: rotate, y: y2 }}
        className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-purple-400/10 to-blue-500/20 blur-3xl"
      />
    </div>
  )
}
