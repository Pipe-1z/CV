'use client'

import React from 'react'

export default function Hero() {
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a')
      link.href = '/cv.pdf'
      link.download = 'CV_Juan_Felipe_Henao_Tovar.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error al descargar el CV:', error)
      // Fallback: abrir en nueva pestaña si la descarga falla
      window.open('/cv.pdf', '_blank')
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Juan Felipe Henao Tovar
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-primary-100">
          Pregrado en Ingeniería en Sistemas y Computación — Estudiante
        </p>
        <p className="text-lg md:text-xl mb-8 text-primary-200">
          Manizales, 170001, Colombia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleDownloadCV}
            className="px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 shadow-lg"
            aria-label="Descargar CV en formato PDF"
          >
            📄 Descargar CV
          </button>
        </div>
      </div>
    </section>
  )
}

