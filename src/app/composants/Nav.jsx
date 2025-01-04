'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
      // Ajout de la détection du scroll pour le fond
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
      animate={{ y: hidden && isHome ? -150 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <div>
          <Link href="/">
            {/* <img src="/images/logo.png" alt="Logo" className="h-28" /> */}
            <h1 className="text-4xl font-bold text-[#4ea5ff]">Dev_Express</h1>
          </Link>
        </div>
        {/* menu */}
        <div>
          <ul className="flex gap-x-8">
            <Link href="/propos">
              <li className="text-white rounded-md hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out">
                A propos
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-white rounded-md hover:bg-[#4ea5ff] hover:rounded-md px-2 py-2 transition-all duration-300 ease-in-out">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
