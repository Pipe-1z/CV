# Portafolio Web - Juan Felipe Henao Tovar

Portafolio web personal responsive, moderno y limpio desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🚀 Inicio Rápido

### ⚠️ IMPORTANTE: Instalación de Requisitos

**Si no tienes Node.js o Git Bash instalados**, consulta primero el archivo **[INSTALACION.md](./INSTALACION.md)** que contiene instrucciones detalladas paso a paso.

### Prerrequisitos

- Node.js 18.x o superior
- npm (incluido con Node.js)
- Git Bash (opcional, pero recomendado)

### Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── layout.tsx      # Layout principal con SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── Badge.tsx       # Componente de badge para habilidades
│   ├── Card.tsx        # Componente de tarjeta reutilizable
│   ├── Contacto.tsx    # Sección de contacto
│   ├── Educacion.tsx   # Sección de educación
│   ├── Experiencia.tsx # Sección de experiencia académica
│   ├── Habilidades.tsx # Sección de habilidades
│   ├── Hero.tsx        # Sección hero/portada
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Perfil.tsx      # Sección de perfil
│   └── Section.tsx     # Componente de sección reutilizable
├── public/
│   ├── cv.pdf          # CV en formato PDF (agregar tu archivo aquí)
│   └── README_CV.md    # Instrucciones para agregar el CV
└── package.json
```

## 📄 Agregar tu CV PDF

1. Coloca tu archivo PDF en la carpeta `/public/`
2. Renómbralo como `cv.pdf`
3. El botón "Descargar CV" funcionará automáticamente

**Nota:** Actualmente hay un placeholder. Reemplázalo con tu CV real.

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ SEO básico configurado (meta tags, OpenGraph)
- ✅ Favicon con iniciales "JF"
- ✅ Navegación suave entre secciones
- ✅ Componentes reutilizables
- ✅ Accesibilidad (contraste, labels ARIA)
- ✅ Tipografía clara y espaciado adecuado
- ✅ Animaciones y transiciones suaves

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **React 18** - Biblioteca de UI

## 📱 Secciones

1. **Hero** - Portada con nombre, título y botón de descarga de CV
2. **Perfil** - Información personal y profesional
3. **Habilidades** - Tecnologías y herramientas
4. **Educación** - Formación académica
5. **Experiencia** - Proyectos y experiencia académica
6. **Contacto** - Información de contacto

## 🌐 Despliegue

Para desplegar en producción:

1. Construir la aplicación:
   ```bash
   npm run build
   ```

2. Iniciar el servidor de producción:
   ```bash
   npm run start
   ```

O despliega en plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (con configuración adicional)

## 📝 Notas

- El sitio está completamente en español
- Toda la información mostrada corresponde exactamente al CV proporcionado
- No se han agregado enlaces a GitHub/LinkedIn ya que no estaban en el CV original
- El diseño es limpio, moderno y optimizado para móviles

## 📧 Contacto

- **Email:** felipehenao50@gmail.com
- **Teléfono:** 316-169-5872
- **Ubicación:** Manizales, 170001, Colombia

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS

