import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Perfil from '@/components/Perfil'
import Habilidades from '@/components/Habilidades'
import Educacion from '@/components/Educacion'
import Experiencia from '@/components/Experiencia'
import Contacto from '@/components/Contacto'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Perfil />
      <Habilidades />
      <Educacion />
      <Experiencia />
      <Contacto />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Juan Felipe Henao Tovar. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

