'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Projets() {

  let images = [
    "/images/moviz.png",
    "/images/yoga.png",
    "/images/louisBlankaert.png",
  ]

  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-[#4ea5ff]"
        >
          Nos derniers projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projet 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <a href="https://movie-tau-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src={images[0]} 
                  alt="Moviz 2.0" 
                  className="absolute inset-0 w-full h-full object-fill md:scale-110 transition-transform duration-500 ease-out md:group-hover:scale-100"
                />
              </div>
              <div className="p-6 h-[250px] relative">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Moviz 2.0</h3>
                  <p className="text-gray-600 mb-4">Site de films et series pour pouvoir enregistrer vos favoris et les regarder plus tard.</p>
                </div>
                <div className="flex gap-2 flex-wrap absolute bottom-6">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Prisma</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">SQL</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Projet 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <a href="https://yoga-three-cyan.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src={images[1]} 
                  alt="Yoga" 
                  className="absolute inset-0 w-full h-full object-fill md:scale-110 transition-transform duration-500 ease-out md:group-hover:scale-100"
                />
              </div>
              <div className="p-6 h-[250px] relative">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Yoga</h3>
                  <p className="text-gray-600 mb-4">Dans l'univers de la yoga, nous avons mis en place une application web pour faciliter la communication entre les praticiens et leurs clients.</p>
                </div>
                <div className="flex gap-2 flex-wrap absolute bottom-6">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Projet 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <a href="https://www.louisblankaert.com/" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src={images[2]} 
                  alt="Portfolio" 
                  className="absolute inset-0 w-full h-full object-fill md:scale-110 transition-transform duration-500 ease-out md:group-hover:scale-100"
                />
              </div>
              <div className="p-6 h-[250px] relative">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Portfolio</h3>
                  <p className="text-gray-600 mb-4">Portfolio de Louis Blankaert, jeune developpeur web.</p>
                </div>
                <div className="flex gap-2 flex-wrap absolute bottom-6">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Tailwind</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Framer Motion</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
