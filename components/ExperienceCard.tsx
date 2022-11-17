import { motion } from "framer-motion"
import Image from "next/image"
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col items-center w-full flex-shrink-0 p-5 bg-slate-700 rounded-lg space-y-2 max-w-lg snap-center mx-auto">
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.2}}
        viewport={{once: true}}
        className="h-20 w-44" 
        src="https://logos-download.com/wp-content/uploads/2016/11/ESRI_logo_logotype.png"
        alt=""
        />

        <div className="px-0 md:px-10">
            <h4 className="text-3xl font-light">Application Developer (Internship)</h4>
            <p className="font-bold text-2xl mt-1">ESRI Indonesia</p>
            {/* <div className="flex space-x-2 my-2">
                <Image className="h-10 w-10 rounded-full" src={require('../assets/ArcGIS_logo.png')} alt=""/>
            </div> */}
            <p className="uppercase py-2 text-gray-300">February 2021 - February 2022</p>
            <ul className="list-disc space-y-4 ml-5 text-sm">
                <li>Creating Dashboard Application where it shows all healthcare in Indonesia (with API) in a map view with some features (Near Me, Total Healthcare Counter, Healthcare Filter)</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard