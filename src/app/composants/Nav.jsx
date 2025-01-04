'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }

    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious()
      if (latest > previous && latest > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      if (latest > 350) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }, [scrollY, isHome])

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome ? (scrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent') : 'backdrop-blur-md bg-black/30'
      }`}
      animate={{ y: hidden && isHome ? -350 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 relative">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-bold text-[#4ea5ff]">Dev_Express</h1>
            </Link>
          </div>

          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 focus:outline-none"
              aria-label="Menu"
            >
              <div className="flex flex-col items-end gap-1">
                <div className={`w-4 h-0.5 bg-white transition-all ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-4 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0 w-4' : 'w-3'}`}></div>
                <div className={`w-4 h-0.5 bg-white transition-all ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : 'w-2'}`}></div>
              </div>
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <ul className="flex gap-x-4 lg:gap-x-8">
              <Link href="/propos">
                <li className="text-white text-sm lg:text-base rounded-md hover:text-[#4ea5ff] hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                  A propos
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-white text-sm lg:text-base rounded-md hover:text-[#4ea5ff] hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out whitespace-nowrap">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden absolute top-full left-1/2 transform -translate-x-1/2 font-bold bg-black/30 backdrop-blur-md mt-4 w-[calc(100%-2rem)] rounded-lg"
        >
          <div className="py-4 px-4 space-y-4">
            <Link href="/propos" onClick={() => setIsMenuOpen(false)}>
              <div className="text-white text-sm rounded-md hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out text-center">
                A propos
              </div>
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <div className="text-white text-sm rounded-md hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out text-center">
                Contact
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
