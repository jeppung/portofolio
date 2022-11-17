import React from 'react'
import { motion } from "framer-motion"

type Props = {
    directionLeft?: boolean;
    name?: string;
    src?: string;
}

function Skill({directionLeft, name, src}: Props) {
  return (
    <div className='group relative flex cursor-pointer flex-col justify-center items-center'>
        <motion.img
            // initial={{
            //     x: directionLeft ? -200 : 200,
            //     opacity: 0
            // }}
            // whileInView={{opacity: 1, x: 0}}
            // transition={{duration: 1}}
            src={src}
            alt=''
            className='h-14 w-14 md:h-20 md:w-20 rounded-xl object-cover filter group-hover:grayscale transition duration-300'
        />
        <div className='absolute -bottom-3 text-center px-2 opacity-0 max-w-md group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm font-bold text-black opacity-100'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill