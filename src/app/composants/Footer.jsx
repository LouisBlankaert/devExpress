'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-[#4ea5ff]">Contact</h3>
            <a 
              href="mailto:contact@devexpress.com" 
              className="text-gray-300 hover:text-[#4ea5ff] transition-colors duration-300"
            >
              contact@devexpress.com
            </a>
          </div>

          {/* Contact Button */}
          <div className="text-center md:text-right">
            <Link href="/contact"><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#4ea5ff] text-white rounded-lg font-semibold shadow-lg hover:bg-[#2b5c8d] transition-all duration-300"
            >
              Contactez-nous
            </motion.button></Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p> {currentYear} DevExpress. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
