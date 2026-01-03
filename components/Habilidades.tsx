import React from 'react'
import Section from './Section'
import Badge from './Badge'

export default function Habilidades() {
  const habilidades = [
    'JAVASCRIPT',
    'NODE.JS, EXPRESS.JS',
    'POSTGRESQL, SQL',
    'GITHUB',
    'JEST, DOCKER',
    'PRISMA',
    'SWAGGER',
  ]

  return (
    <Section id="habilidades" title="Habilidades">
      <div className="flex flex-wrap gap-3 justify-center">
        {habilidades.map((habilidad, index) => (
          <Badge key={index}>
            {habilidad}
          </Badge>
        ))}
      </div>
    </Section>
  )
}

