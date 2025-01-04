'use client'
import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen py-24 sm:py-24 md:py-32 lg:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-[#4ea5ff]"
        >
          Contactez-nous
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-600 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          Nous sommes là pour écouter vos besoins, échanger sur vos objectifs et élaborer des stratégies sur mesure pour votre entreprise. Aucun engagement n'est nécessaire, simplement l'opportunité de découvrir comment nous pouvons travailler ensemble pour libérer tout votre potentiel.
        </motion.h2>
        
        <Suspense fallback={<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
          <div className="animate-pulse space-y-4 sm:space-y-6">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  )
}
