import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration: 1.5}}
     className='relative h-screen flex flex-col text-center justify-center items-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mb-10'>About</h3>
        <div className='flex flex-col justify-center items-center text-center  md:flex-row md:justify-center md:items-center md:space-x-5 max-w-7xl '>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{once: true}}
                className='flex justify-center w-full md:pl-5'
            >
                <Image src={require('../assets/profile2HD.jpg').default} alt='' className='h-56 w-56 object-cover object-top rounded-full md:h-fit md:rounded-lg md:w-full'/>
            </motion.div>
            {/* <img className='' src='https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'/> */}
            <div className='px-5 space-y-5 mt-10 md:mt-0'>
                <h4 className='text-4xl font-semibold text-center md:text-left'>Background</h4>
                <p className='text-sm md:text-base text-justify'>
                    I am a self-taught person in Information Technology things. I have passion in computer since i was a little. 
                    I love to try learn new things about computer. i have tried several programming language & frameworks. 
                    Youtube, Google, Stackoverflow is my guidance. i have used both Windows and Linux. 
                    i have experience in helping many people to fix their computer-related things 
                    (ex. operating system installation, applications installation, drivers installation, troubleshooting, etc). 
                    Currently interested in Web Development (NextJS) and Mobile Development (React Native)
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About