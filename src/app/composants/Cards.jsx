'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.3
    }
  }
};

export default function Cards() {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16 text-[#4ea5ff]"
        >
          Nos Offres
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Carte Basique */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out border border-gray-200 flex flex-col h-full relative md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4ea5ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Populaire
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Basique</h3>
              <div className="text-4xl font-bold text-[#4ea5ff] mb-6">699€</div>
              <p className="text-gray-600 mb-6">Essentielle</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Site vitrine simple (1 à 3 pages)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Design responsive
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Mise en page basique
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Installation sur hébergeur
                </li>
              </ul>
            </div>
            <Link href="/contact?forfait=basique">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-[#4ea5ff] text-white rounded-lg hover:bg-[#2b5c8d] transition-all duration-300 ease-out"
              >
                Choisir
              </motion.button>
            </Link>
          </motion.div>

          {/* Carte Standard */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out border border-gray-200 md:scale-105 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <div className="text-4xl font-bold text-[#4ea5ff] mb-6">1299€</div>
              <p className="text-gray-600 mb-6">Professionnelle</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Site dynamique (5-7 pages)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Formulaire de contact
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimisation SEO de base
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Design personnalisé avec animations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hébergement et nom de domaine
                </li>
              </ul>
            </div>
            <Link href="/contact?forfait=standard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-[#4ea5ff] text-white rounded-lg hover:bg-[#2b5c8d] transition-all duration-300 ease-out"
              >
                Choisir
              </motion.button>
            </Link>
          </motion.div>

          {/* Carte Premium */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out border border-gray-200 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold text-[#4ea5ff] mb-6">2999€</div>
              <p className="text-gray-600 mb-6">Sur-mesure</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  E-commerce avec paiements sécurisés
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Fonctionnalités avancées (API, chat)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimisation SEO avancée
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Support technique gratuit pendant 3 mois
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Formulaire de contact personnalisé
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#4ea5ff] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Formation à l'utilisation de la plateforme
                </li>
              </ul>
            </div>
            <Link href="/contact?forfait=premium">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-[#4ea5ff] text-white rounded-lg hover:bg-[#2b5c8d] transition-all duration-300 ease-out"
              >
                Choisir
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="text-center pt-8">
          <p>* Nous offrons la possibilité de régler votre paiement en plusieurs fois, jusqu'à 4 échéances.</p>
        </div>
      </div>
    </div>
  )
}
