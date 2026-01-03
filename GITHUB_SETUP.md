# Guía para Crear y Conectar el Repositorio en GitHub

## ✅ Estado Actual

Ya tienes configurado localmente:
- ✅ Repositorio Git inicializado
- ✅ Commit inicial realizado
- ✅ 3 ramas creadas:
  - `main` (rama principal)
  - `develop` (rama de desarrollo)
  - `features/CV` (rama de características)

---

## 📋 Paso 1: Crear el Repositorio en GitHub

### Opción A: Desde la Web (Recomendado)

1. **Ve a GitHub:** https://github.com
2. **Inicia sesión** en tu cuenta (o créala si no tienes una)
3. **Haz clic en el botón "+"** (arriba a la derecha) → **"New repository"**
4. **Completa el formulario:**
   - **Repository name:** `portafolio-juan-felipe` (o el nombre que prefieras)
   - **Description:** "Portafolio web personal - Juan Felipe Henao Tovar"
   - **Visibility:** 
     - ✅ **Public** (si quieres que sea público)
     - ✅ **Private** (si quieres que sea privado)
   - ⚠️ **NO marques** "Add a README file" (ya tienes uno)
   - ⚠️ **NO marques** "Add .gitignore" (ya tienes uno)
   - ⚠️ **NO marques** "Choose a license" (a menos que quieras agregar uno)
5. **Haz clic en "Create repository"**

### Opción B: Usando GitHub CLI (si lo tienes instalado)

```bash
gh repo create portafolio-juan-felipe --public --source=. --remote=origin --push
```

---

## 🔗 Paso 2: Conectar el Repositorio Local con GitHub

Después de crear el repositorio en GitHub, verás una página con instrucciones. **Copia la URL** de tu repositorio (será algo como):
```
https://github.com/tu-usuario/portafolio-juan-felipe.git
```

### En Git Bash o Terminal:

```bash
# Agregar el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/portafolio-juan-felipe.git

# Verificar que se agregó correctamente
git remote -v
```

**Nota:** Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

---

## 📤 Paso 3: Subir las Ramas a GitHub

### Subir la rama main:

```bash
# Asegúrate de estar en la rama main
git checkout main

# Subir la rama main a GitHub
git push -u origin main
```

### Subir la rama develop:

```bash
# Cambiar a la rama develop
git checkout develop

# Subir la rama develop a GitHub
git push -u origin develop
```

### Subir la rama features/CV:

```bash
# Cambiar a la rama features/CV
git checkout features/CV

# Subir la rama features/CV a GitHub
git push -u origin features/CV
```

---

## 🚀 Comando Rápido (Todo en Uno)

Si prefieres hacerlo todo de una vez, ejecuta estos comandos en orden:

```bash
# 1. Agregar el remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/portafolio-juan-felipe.git

# 2. Subir todas las ramas
git push -u origin main
git push -u origin develop
git push -u origin features/CV

# 3. Volver a la rama main
git checkout main
```

---

## 🔐 Paso 4: Autenticación con GitHub

Si te pide usuario y contraseña, tienes dos opciones:

### Opción A: Personal Access Token (Recomendado)

1. Ve a: https://github.com/settings/tokens
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Dale un nombre (ej: "Portafolio Local")
4. Selecciona los permisos:
   - ✅ `repo` (acceso completo a repositorios)
5. Haz clic en **"Generate token"**
6. **Copia el token** (solo se muestra una vez)
7. Cuando Git pida contraseña, usa el **token** en lugar de tu contraseña

### Opción B: GitHub CLI

```bash
# Instalar GitHub CLI (si no lo tienes)
# Windows: choco install gh
# O descarga desde: https://cli.github.com/

# Autenticarse
gh auth login
```

---

## ✅ Verificar que Todo Funcionó

1. **Ve a tu repositorio en GitHub:** https://github.com/TU-USUARIO/portafolio-juan-felipe
2. **Verifica que veas:**
   - ✅ Todos los archivos del proyecto
   - ✅ Las 3 ramas en el selector de ramas (arriba a la izquierda)
   - ✅ El README.md se muestra correctamente

---

## 📝 Comandos Útiles para el Futuro

### Ver ramas locales y remotas:
```bash
git branch -a
```

### Cambiar de rama:
```bash
git checkout nombre-rama
# O con el nuevo comando:
git switch nombre-rama
```

### Crear una nueva rama y cambiarse a ella:
```bash
git checkout -b nueva-rama
```

### Subir cambios a GitHub:
```bash
# 1. Agregar cambios
git add .

# 2. Hacer commit
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push
```

### Ver el estado del repositorio:
```bash
git status
```

### Ver el historial de commits:
```bash
git log --oneline --graph --all
```

---

## 🎯 Flujo de Trabajo Recomendado

### Para trabajar en nuevas características:

```bash
# 1. Cambiar a develop
git checkout develop

# 2. Crear una nueva rama desde develop
git checkout -b features/nueva-caracteristica

# 3. Hacer tus cambios y commits
git add .
git commit -m "Agregar nueva característica"

# 4. Subir la rama
git push -u origin features/nueva-caracteristica

# 5. Crear un Pull Request en GitHub para fusionar a develop
```

### Para fusionar a main (producción):

```bash
# 1. Cambiar a main
git checkout main

# 2. Fusionar develop en main
git merge develop

# 3. Subir cambios
git push origin main
```

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
# Eliminar el remoto existente
git remote remove origin

# Agregar el remoto correcto
git remote add origin https://github.com/TU-USUARIO/portafolio-juan-felipe.git
```

### Error: "failed to push some refs"
```bash
# Primero hacer pull (si hay cambios en GitHub)
git pull origin main --allow-unrelated-histories

# Luego hacer push
git push -u origin main
```

### Ver la URL del remoto:
```bash
git remote -v
```

### Cambiar la URL del remoto:
```bash
git remote set-url origin https://github.com/TU-USUARIO/nuevo-nombre.git
```

---

## 📚 Recursos Adicionales

- **Documentación de Git:** https://git-scm.com/doc
- **Guía de GitHub:** https://guides.github.com
- **GitHub Desktop:** https://desktop.github.com (interfaz gráfica alternativa)

---

¿Necesitas ayuda con algún paso específico? ¡Avísame!

