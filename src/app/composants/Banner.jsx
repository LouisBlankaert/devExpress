'use client'
import React from 'react'
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//link
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-24 relative items-center">
      {/* Background image with overlay --- banner*/}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/desktops.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Content with higher z-index */}
      <div className="flex flex-col gap-y-4 items-center relative z-10 text-white">
        <div>
          <h1 className='text-xl font-semibold uppercase'>Votre agence</h1>
        </div>
        <motion.div 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{ once: false, amount: 0.3 }} 
          className='mb-4 text-[60px] text-[#4ea5ff] font-semibold uppercase flex items-end h-[80px]'
        >
          <TypeAnimation 
            sequence={[
              "Landing page",
              1500,
              "Web design",
              1500,
              "Branding",
              1500,
            ]} 
            speed={50}
            className='text-accent'
            wrapper="span"
            repeat={Infinity}
            cursor={false}
          />
          <motion.span
            className="inline-block w-6 h-1 bg-[#4ea5ff] mb-3 ml-1"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
          />
        </motion.div>
        <div className="flex flex-col gap-y-4 items-center">
          <p>Depuis 2024 nos solutions ne contentent pas d'etre beau, elles sont surtout conçues pour atteindre leurs objectif</p>
        </div>
        <Link href="/contact"><button className='btn btn-accent items-center justify-center py-2 px-4 rounded-full mt-6 font-medium bg-[#4ea5ff] hover:bg-[#4ea5ff]/80 hover:transform hover:scale-105 transition-all duration-300 ease-in-out'>
          Travaillons ensemble
        </button></Link>
      </div>
    </div>
  )
}
