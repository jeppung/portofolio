import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 items-start xl:items-center flex justify-between max-w-7xl mx-auto z-30'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{duration: 1.5}}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url='https://linkedin.com/in/jeppung' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://instagram.com/jeppung' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://github.com/jeppung' fgColor='gray' bgColor='transparent'/>
        </motion.div>

        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{duration: 1.5}}
        className='flex items-center text-gray-300'>
            <SocialIcon className='cursor-pointer' url='mailto: jeppung@gmail.com' fgColor='gray' bgColor='transparent'/>
            <p className='hidden md:inline-flex uppercase text-gray-400 text-sm'>Get in Touch</p>
        </motion.div>
    </header>
  )
}

export default Header