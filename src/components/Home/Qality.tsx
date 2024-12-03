"use client"
import HyperText from '../ui/hyper-text'
import { QualityCard } from '../Quality/QualityCard'
import QualityText from '../Quality/QualityText'
import { motion } from "framer-motion";
import Particles from '../ui/particles';
const Qality = () => {
  return (
  <div className='relative'>
      <motion.div
    className="flex flex-col text-white/80 p-4 pt-20"
    initial={{ opacity: 0, y: 100 }} 
    whileInView={{
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 25, duration: 8 },
    }}
    viewport={{ once: false }} 
  >
  <div className="flex items-center justify-center">
          <HyperText
            className="lg:text-6xl text-2xl font-bold text-slate-300"
            text="My Qualities_"
          />
        </div>

    <div className='lg:max-w-[1200px] w-full mx-auto lg:flex lg:gap-7 hero lg:py-20 lg:flex-row flex flex-col'>
      <div className='lg:w-[50%] p-12 lg:p-0 bg-transparent'>
    <QualityText/>

      </div>
      <div className='lg:w-[50%] w-full lg:p-0 p-12'>
      <QualityCard/>
      </div>
    
    </div>
    
    </motion.div>
    <Particles
        className="absolute inset-0"
        quantity={60}
        ease={80}
        color="#fff"
        refresh
        size={1}
      />
  </div>
  )
}

export default Qality
