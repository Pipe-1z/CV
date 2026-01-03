import React from 'react'
import Section from './Section'
import Card from './Card'

export default function Contacto() {
  return (
    <Section id="contacto" title="Contacto" className="bg-gray-100">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
            <a 
              href="tel:+573161695872" 
              className="text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="Llamar al teléfono 316-169-5872"
            >
              316-169-5872
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Correo Electrónico</h3>
            <a 
              href="mailto:felipehenao50@gmail.com" 
              className="text-primary-600 hover:text-primary-700 transition-colors break-all"
              aria-label="Enviar correo a felipehenao50@gmail.com"
            >
              felipehenao50@gmail.com
            </a>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
            <p className="text-gray-700">Manizales, 170001, Colombia</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}

