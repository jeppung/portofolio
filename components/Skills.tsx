import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative h-screen flex flex-col text-center justify-center items-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
            Technology Used
        </h3>

        <h3 className='mt-2 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over to see tech's name i have used</h3>    

        <div className='grid grid-cols-4 gap-6 mt-20'>
            <Skill name='Javascript' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
            <Skill name='Python' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
            <Skill name='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'/>
            <Skill name='NextJS' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'/>
            <Skill name='Laravel' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'/>
            <Skill name='Firebase' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'/>
            <Skill name='Git' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'/>
            <Skill name='HTML' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'/>
            <Skill name='Linux' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'/>
            <Skill name='MySQL' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'/>
            <Skill name='PHP' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'/>
            <Skill name='Bootstrap' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'/>
            <Skill name='TailwindCSS' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'/>
        </div>
    </motion.div>
  )
}

export default Skills