'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const forfaitParam = searchParams.get('forfait')

  useEffect(() => {
    if (forfaitParam) {
      const selectElement = document.getElementById('forfait')
      if (selectElement) {
        selectElement.value = forfaitParam
      }
    }
  }, [forfaitParam])

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <form className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-[#4ea5ff] focus:border-[#4ea5ff] outline-none transition-all duration-200"
            placeholder="Votre nom"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-[#4ea5ff] focus:border-[#4ea5ff] outline-none transition-all duration-200"
            placeholder="votre@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="forfait" className="block text-sm font-medium text-gray-700 mb-1">
            Forfait souhaité
          </label>
          <select
            id="forfait"
            name="forfait"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-[#4ea5ff] focus:border-[#4ea5ff] outline-none transition-all duration-200 bg-white"
            required
          >
            <option value="">Sélectionnez un forfait</option>
            <option value="basique">Basique</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-[#4ea5ff] focus:border-[#4ea5ff] outline-none transition-colors duration-150"
            placeholder="Décrivez votre projet..."
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-1">
            Site web (optionnel)
          </label>
          <input
            type="url"
            id="site"
            name="site"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-[#4ea5ff] focus:border-[#4ea5ff] outline-none transition-colors duration-150"
            placeholder="https://www.votresite.com"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 sm:py-3 px-4 text-sm sm:text-base bg-[#4ea5ff] text-white rounded-lg font-semibold hover:bg-[#2b5c8d] transition-colors duration-300"
          type="submit"
        >
          Envoyer
        </motion.button>
      </form>
    </div>
  )
}
