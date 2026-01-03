import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium ${className}`}>
      {children}
    </span>
  )
}

