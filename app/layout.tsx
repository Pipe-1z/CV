import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Felipe Henao Tovar | Ingeniero en Sistemas y Computación',
  description: 'Portafolio de Juan Felipe Henao Tovar, estudiante de Ingeniería en Sistemas y Computación en la Universidad de Caldas. Especializado en desarrollo backend, bases de datos y sistemas distribuidos.',
  keywords: ['Juan Felipe Henao Tovar', 'Ingeniería en Sistemas', 'Desarrollo Backend', 'Node.js', 'PostgreSQL', 'Manizales', 'Colombia'],
  authors: [{ name: 'Juan Felipe Henao Tovar' }],
  openGraph: {
    title: 'Juan Felipe Henao Tovar | Ingeniero en Sistemas y Computación',
    description: 'Estudiante de Ingeniería en Sistemas y Computación en la Universidad de Caldas. Especializado en desarrollo backend, bases de datos y sistemas distribuidos.',
    type: 'website',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

