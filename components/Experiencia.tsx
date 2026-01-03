import React from 'react'
import Section from './Section'
import Card from './Card'

export default function Experiencia() {
  const experiencias = [
    'Desarrollo Backend (Node.js, Express, PostgreSQL, Docker, Prisma) y gestión de proyecto Scrum para microservicios (autenticación, inventario, pedidos, geolocalización)',
    'Implementación de APIs RESTful seguras con JWT, incluyendo autenticación de usuarios y control de acceso multi-rol (Administrador, Gerente, Despachador, Repartidor).',
    'Integración de funcionalidades de carga masiva de datos (CSV/Excel), notificaciones automáticas (Nodemailer, Twilio) y pruebas unitarias (Jest).',
    'Implementación de CI/CD con Docker y Documentación API con Swagger.',
  ]

  return (
    <Section id="experiencia" title="Académicamente">
      <div className="space-y-6">
        {experiencias.map((experiencia, index) => (
          <Card key={index}>
            <p className="text-gray-700 leading-relaxed">
              {experiencia}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

