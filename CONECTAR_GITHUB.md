# 🔗 Conectar tu Repositorio Local con GitHub

## 📋 Situación Actual

Tu repositorio local está listo, pero **NO está conectado con GitHub**. Necesitas:

1. ✅ Crear el repositorio en GitHub (si no lo has hecho)
2. ✅ Conectar el repositorio local con GitHub
3. ✅ Subir todas las ramas

---

## 🚀 Pasos a Seguir

### Paso 1: Crear el Repositorio en GitHub

1. **Ve a GitHub:** https://github.com
2. **Inicia sesión** en tu cuenta
3. **Haz clic en el botón "+"** (arriba a la derecha) → **"New repository"**
4. **Completa el formulario:**
   - **Repository name:** `portafolio-juan-felipe` (o el nombre que prefieras)
   - **Description:** "Portafolio web personal - Juan Felipe Henao Tovar"
   - **Visibility:** 
     - ✅ **Public** (público) o
     - ✅ **Private** (privado)
   - ⚠️ **IMPORTANTE:** NO marques ninguna de estas opciones:
     - ❌ "Add a README file"
     - ❌ "Add .gitignore"
     - ❌ "Choose a license"
   - (Ya tienes estos archivos en tu proyecto local)
5. **Haz clic en "Create repository"**

---

### Paso 2: Copiar la URL del Repositorio

Después de crear el repositorio, GitHub te mostrará una página con instrucciones. 

**Copia la URL HTTPS** (será algo como):
```
https://github.com/TU-USUARIO/portafolio-juan-felipe.git
```

**Ejemplo:**
```
https://github.com/juanfelipe/portafolio-juan-felipe.git
```

---

### Paso 3: Conectar el Repositorio Local con GitHub

**Abre Git Bash** en la carpeta del proyecto y ejecuta:

```bash
# Reemplaza TU-USUARIO y nombre-repositorio con tus valores reales
git remote add origin https://github.com/TU-USUARIO/nombre-repositorio.git
```

**Ejemplo:**
```bash
git remote add origin https://github.com/juanfelipe/portafolio-juan-felipe.git
```

**Verificar que se agregó correctamente:**
```bash
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU-USUARIO/nombre-repositorio.git (fetch)
origin  https://github.com/TU-USUARIO/nombre-repositorio.git (push)
```

---

### Paso 4: Subir las Ramas a GitHub

Ejecuta estos comandos **en orden**:

```bash
# 1. Asegúrate de estar en la rama main
git checkout main

# 2. Subir la rama main
git push -u origin main

# 3. Subir la rama develop
git checkout develop
git push -u origin develop

# 4. Subir la rama features/CV
git checkout features/CV
git push -u origin features/CV

# 5. Volver a main
git checkout main
```

---

## 🔐 Autenticación con GitHub

Cuando ejecutes `git push`, GitHub te pedirá autenticarte. Tienes dos opciones:

### Opción A: Personal Access Token (Recomendado)

1. Ve a: https://github.com/settings/tokens
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Dale un nombre (ej: "Portafolio Local")
4. Selecciona el scope: ✅ **`repo`** (acceso completo a repositorios)
5. Haz clic en **"Generate token"**
6. **Copia el token** (solo se muestra una vez - guárdalo bien)
7. Cuando Git pida contraseña:
   - **Usuario:** tu nombre de usuario de GitHub
   - **Contraseña:** pega el **token** (no tu contraseña real)

### Opción B: GitHub CLI

```bash
# Instalar GitHub CLI (si no lo tienes)
# Windows: choco install gh
# O descarga desde: https://cli.github.com/

# Autenticarse
gh auth login
```

---

## ✅ Verificar que Funcionó

1. **Ve a tu repositorio en GitHub:**
   ```
   https://github.com/TU-USUARIO/nombre-repositorio
   ```

2. **Deberías ver:**
   - ✅ Todos los archivos del proyecto
   - ✅ El README.md se muestra correctamente
   - ✅ Las 3 ramas en el selector de ramas (arriba a la izquierda)

3. **Para ver las ramas:**
   - Haz clic en el botón que dice "main" (arriba a la izquierda)
   - Deberías ver: `main`, `develop`, `features/CV`

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"

Si ya intentaste agregar el remoto antes:

```bash
# Eliminar el remoto existente
git remote remove origin

# Agregar el remoto correcto
git remote add origin https://github.com/TU-USUARIO/nombre-repositorio.git
```

### Error: "failed to push some refs"

Si hay cambios en GitHub que no tienes localmente:

```bash
# Primero hacer pull (si hay cambios en GitHub)
git pull origin main --allow-unrelated-histories

# Luego hacer push
git push -u origin main
```

### Error: "authentication failed"

- Verifica que estés usando el **Personal Access Token** (no tu contraseña)
- O usa GitHub CLI: `gh auth login`

### Ver la URL del remoto actual:

```bash
git remote -v
```

### Cambiar la URL del remoto:

```bash
git remote set-url origin https://github.com/TU-USUARIO/nuevo-nombre.git
```

---

## 📝 Comandos Rápidos (Copia y Pega)

**Reemplaza `TU-USUARIO` y `nombre-repositorio` con tus valores:**

```bash
# 1. Agregar remoto
git remote add origin https://github.com/TU-USUARIO/nombre-repositorio.git

# 2. Verificar
git remote -v

# 3. Subir todas las ramas
git checkout main
git push -u origin main

git checkout develop
git push -u origin develop

git checkout features/CV
git push -u origin features/CV

# 4. Volver a main
git checkout main
```

---

## 🎯 ¿Necesitas Ayuda?

Si tienes problemas en algún paso, comparte:
1. El error exacto que ves
2. En qué paso estás
3. La URL de tu repositorio en GitHub (si ya lo creaste)

¡Estoy aquí para ayudarte! 🚀

