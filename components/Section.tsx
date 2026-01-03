import React from 'react'

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

