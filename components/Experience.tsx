import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative h-screen flex flex-col justify-center items-center mx-auto'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl items-center'>
            Experience
        </h3>
        <div className='w-full mt-20 px-5 flex space-x-5 overflow-x-auto snap-x snap-mandatory '>
          <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default Experience