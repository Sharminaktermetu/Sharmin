"use client"
import HyperText from '../ui/hyper-text'
import { QualityCard } from '../Quality/QualityCard'
import QualityText from '../Quality/QualityText'
import { motion } from "framer-motion";
const Qality = () => {
  return (
    <motion.div
    className="flex flex-col text-white/80 p-4"
    initial={{ opacity: 0, y: 100 }} // Starts off-screen, below the viewport
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 25, duration: 8 },
    }}
    viewport={{ once: false }} // Trigger only once when in view
  >
  <div className="flex items-center justify-center">
          <HyperText
            className="lg:text-6xl font-bold text-slate-300 my-16"
            text="My Qualities_"
          />
        </div>

    <div className='flex  max-w-[1200px] mx-auto  items-center justify-center gap-7'>
      <div className='w-[50%] bg-transparent'>
    <QualityText/>

      </div>
      <div className='w-[50%]'>
      <QualityCard/>
      </div>
    </div>
    </motion.div>
  )
}

export default Qality
