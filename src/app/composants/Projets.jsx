'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Projets() {
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
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src="/images/desktops.png" 
                  alt="Projet 1" 
                  className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-500 ease-out group-hover:scale-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Projet 1</h3>
                <p className="text-gray-600 mb-4">Description de votre premier projet. Expliquez ce que vous avez réalisé.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Tailwind</span>
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
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src="/images/desktops.png" 
                  alt="Projet 2" 
                  className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-500 ease-out group-hover:scale-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Projet 2</h3>
                <p className="text-gray-600 mb-4">Description de votre deuxième projet. Expliquez ce que vous avez réalisé.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">TypeScript</span>
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
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-64 w-full">
                {/* Remplacer le src par votre image */}
                <img 
                  src="/images/desktops.png" 
                  alt="Projet 3" 
                  className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-500 ease-out group-hover:scale-100"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#4ea5ff]">Projet 3</h3>
                <p className="text-gray-600 mb-4">Description de votre troisième projet. Expliquez ce que vous avez réalisé.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-[#4ea5ff]/10 text-[#4ea5ff] rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
