'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BarreContact() {
  return (
    <div className="bg-[#4ea5ff] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Prêt à commencer ?</h2>
          <p className="text-white/90">Contactez-nous dès maintenant pour discuter de votre projet.</p>
        </div>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#4ea5ff] rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Contactez-nous
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
