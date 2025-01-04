'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Propos() {
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      title: "100% de transparence.",
      content: "Chaque projet étant unique, il mérite des fonctionnalités et caractéristiques sur mesure. Les solutions standardisées peuvent freiner le potentiel. C'est pourquoi nous concevons des offres personnalisées, parfaitement adaptées à vos besoins spécifiques."
    },
    {
      title: "Collaboration basée sur la confiance.",
      content: "Nous accordons une grande importance à une relation personnelle avec vous. Cette relation repose avant tout sur l'échange. Bien que la numérisation soit notre passion, notre priorité reste de comprendre votre entreprise et de saisir pleinement ce que vous représentez."
    },
    {
      title: "fiabilité et engagement.",
      content: "Pour garantir une parfaite transparence tout au long du projet, nous vous tenons régulièrement informé de son avancement. Même dans les périodes les plus intenses, vous pouvez compter sur notre réactivité. En cas d'urgence, nous nous adaptons à vos délais et intervenons là où vous en avez besoin."
    }
  ]

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  return (
    <div className='py-24 sm:py-32 md:py-44 px-4 min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#4ea5ff]'>Qui sommes nous ?</h1>
      </div>
      <div className='text-center max-w-4xl mx-auto mb-12'>
        <p className='text-base sm:text-lg md:text-xl'>
          Depuis notre création en 2024, nous travaillons sur la réalisation et le suivi de divers projets pour des clients de tout le Luxembourg, l'Allemagne, la Belgique, la France de l'Autriche et de la Suisse.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-12'>
        <div className='order-2 md:order-1'>
          <img src="/images/desktops.png" alt="" className='rounded-2xl p-4 sm:p-8 md:p-16 w-full' />
        </div>
        <div className='order-1 md:order-2 text-center p-4 sm:p-8 md:p-12'>
          <p className='text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae necessitatibus iure aspernatur eaque est, ea quas molestias officiis voluptates alias ipsum corrupti doloremque illum id magnam veniam dicta blanditiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque iusto, sapiente odit aliquid voluptatibus similique libero asperiores. Eum in molestias doloribus odit unde! Animi aperiam officiis accusamus voluptas quas.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-8 mb-12'>
        <div className='text-center p-4 sm:p-6 md:p-8 border shadow-lg rounded-lg'>
          <div className='font-bold'>Fondée en</div>
          <div className='text-[#4ea5ff] text-2xl sm:text-3xl md:text-4xl font-bold'>2024</div>
        </div>
        <div className='text-center p-4 sm:p-6 md:p-8 border shadow-lg rounded-lg'>
          <div className='font-bold'>Clients</div>
          <div className='text-[#4ea5ff] text-2xl sm:text-3xl md:text-4xl font-bold'>4</div>
        </div>
        <div className='text-center p-4 sm:p-6 md:p-8 border shadow-lg rounded-lg'>
          <div className='font-bold'>Projets</div>
          <div className='text-[#4ea5ff] text-2xl sm:text-3xl md:text-4xl font-bold'>26</div>
        </div>
        <div className='text-center p-4 sm:p-6 md:p-8 border shadow-lg rounded-lg'>
          <div className='font-bold'>Employés</div>
          <div className='text-[#4ea5ff] text-2xl sm:text-3xl md:text-4xl font-bold'>2</div>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-4 px-4'>
        {sections.map((section, index) => (
          <div key={index} className="w-full max-w-4xl">
            <motion.div
              onClick={() => toggleSection(index)}
              className='text-center py-4 px-4 sm:px-8 border shadow-sm font-bold cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg'
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[#4ea5ff] text-sm sm:text-base">{section.title}</span>
                <motion.svg
                  animate={{ rotate: openSection === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ea5ff] flex-shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>
            </motion.div>
            <AnimatePresence>
              {openSection === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-sm sm:text-base text-gray-600">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
