import React from 'react'
import Section from './Section'
import Card from './Card'

export default function Educacion() {
  return (
    <Section id="educacion" title="Educación">
      <Card>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Universidad de Caldas
        </h3>
        <p className="text-gray-600 mb-4">Manizales</p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Estudiante de Ingeniería en Sistemas y Computación (6to semestre).</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Sólida formación en estructuras de datos, desarrollo backend, bases de datos y arquitectura de microservicios.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Experiencia en proyectos académicos utilizando metodologías ágiles (Scrum).</span>
          </li>
        </ul>
      </Card>
    </Section>
  )
}

