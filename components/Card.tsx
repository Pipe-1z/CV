import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  )
}

