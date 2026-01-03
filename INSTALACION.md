# Guía de Instalación - Node.js y Git Bash

## 📋 Requisitos Previos

Para ejecutar este proyecto necesitas:
1. **Node.js** (incluye npm)
2. **Git Bash** (opcional, pero recomendado)

---

## 🔧 Paso 1: Instalar Node.js

### Opción A: Descarga Directa (Recomendado)

1. Ve a la página oficial de Node.js: https://nodejs.org/
2. Descarga la versión **LTS** (Long Term Support) - recomendada para la mayoría de usuarios
3. Ejecuta el instalador (`.msi` para Windows)
4. Durante la instalación:
   - ✅ Acepta los términos
   - ✅ Marca la opción "Automatically install the necessary tools" si aparece
   - ✅ Deja todas las opciones por defecto
5. Reinicia tu terminal o PowerShell después de instalar

### Opción B: Usando Chocolatey (si lo tienes instalado)

```powershell
choco install nodejs
```

### Verificar Instalación

Abre una nueva terminal (PowerShell, CMD o Git Bash) y ejecuta:

```bash
node --version
npm --version
```

Deberías ver números de versión (ej: `v20.x.x` y `10.x.x`)

---

## 🐚 Paso 2: Configurar Git Bash en Cursor/VS Code

### Si Git Bash NO está instalado:

1. Descarga Git para Windows: https://git-scm.com/download/win
2. Ejecuta el instalador
3. Durante la instalación:
   - ✅ Selecciona "Git Bash Here" en el menú contextual
   - ✅ Elige "Use Git and optional Unix tools from the Command Prompt"
   - ✅ Deja las demás opciones por defecto

### Configurar Git Bash como Terminal en Cursor:

1. Abre Cursor
2. Presiona `Ctrl + ,` (o ve a File > Preferences > Settings)
3. Busca: `terminal.integrated.defaultProfile.windows`
4. Cambia el valor a: `"Git Bash"`
5. O busca: `terminal.integrated.profiles.windows`
6. Agrega esta configuración:

```json
{
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "path": "C:\\Program Files\\Git\\bin\\bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```

**Nota:** Si Git está instalado en otra ubicación, ajusta la ruta. Las ubicaciones comunes son:
- `C:\Program Files\Git\bin\bash.exe`
- `C:\Program Files (x86)\Git\bin\bash.exe`
- `%USERPROFILE%\AppData\Local\Programs\Git\bin\bash.exe`

### Verificar Git Bash

1. En Cursor, abre una nueva terminal: `Ctrl + `` (backtick) o Terminal > New Terminal
2. Deberías ver un prompt como: `user@computer MINGW64 /c/Users/felip/Documents/CV $`
3. Prueba ejecutar:
   ```bash
   node --version
   npm --version
   ```

---

## 🚀 Paso 3: Instalar Dependencias del Proyecto

Una vez que Node.js esté instalado y Git Bash configurado:

1. Abre Git Bash en la carpeta del proyecto
2. Ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (Next.js, React, TypeScript, Tailwind, etc.)

### Si encuentras errores de permisos:

En Git Bash, ejecuta:
```bash
npm install --legacy-peer-deps
```

---

## ✅ Verificar que Todo Funciona

Después de instalar las dependencias:

```bash
npm run dev
```

Deberías ver:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - ready started server on 0.0.0.0:3000
```

Abre tu navegador en `http://localhost:3000` para ver el portafolio.

---

## 🆘 Solución de Problemas

### Error: "node: command not found"
- **Solución:** Reinicia la terminal después de instalar Node.js
- Verifica que Node.js esté en el PATH: `echo $PATH` (en Git Bash)

### Error: "npm: command not found"
- **Solución:** Node.js incluye npm. Si npm no funciona, reinstala Node.js

### Error: "EACCES: permission denied"
- **Solución:** Ejecuta Git Bash como administrador o usa:
  ```bash
  npm install --legacy-peer-deps
  ```

### Git Bash no aparece en Cursor
- **Solución:** 
  1. Cierra y vuelve a abrir Cursor
  2. Verifica la ruta de Git Bash en la configuración
  3. Asegúrate de que Git esté instalado correctamente

---

## 📝 Comandos Útiles

```bash
# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar producción
npm run start
```

---

## 🔗 Enlaces Útiles

- **Node.js:** https://nodejs.org/
- **Git para Windows:** https://git-scm.com/download/win
- **Documentación Next.js:** https://nextjs.org/docs
- **Documentación npm:** https://docs.npmjs.com/

---

¿Necesitas ayuda? Revisa la documentación oficial o los mensajes de error específicos.

