import React from 'react'
import Section from './Section'
import Card from './Card'

export default function Perfil() {
  return (
    <Section id="perfil" title="Perfil">
      <Card>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            Graduado del colegio Instituto para la Ciencia (3-12-2021)
          </p>
          <p className="text-gray-700 leading-relaxed">
            Estudiante de Ingeniería en Sistemas y Computación en la Universidad de Caldas, centrado en desarrollo de backend, bases de datos y sistemas distribuidos. Me destaco por mi curiosidad tecnológica, responsabilidad y capacidad para trabajar en equipo. Busco oportunidades para aplicar mis conocimientos en proyectos reales y seguir creciendo como profesional en el área de TI.
          </p>
        </div>
      </Card>
    </Section>
  )
}

