#!/bin/bash
# Script para copiar el CV PDF a la carpeta public (para Git Bash)
# Ejecuta este script desde la carpeta del proyecto

echo "Buscando el archivo 'CV Juan Felipe Henao Tovar.pdf'..."

# Buscar el archivo en ubicaciones comunes
ARCHIVO_ENCONTRADO=""

# Buscar en ubicaciones comunes
for ruta in \
    "$HOME/Documents/CV Juan Felipe Henao Tovar.pdf" \
    "$HOME/Downloads/CV Juan Felipe Henao Tovar.pdf" \
    "$HOME/Desktop/CV Juan Felipe Henao Tovar.pdf" \
    "./CV Juan Felipe Henao Tovar.pdf"
do
    if [ -f "$ruta" ]; then
        ARCHIVO_ENCONTRADO="$ruta"
        echo "✓ Archivo encontrado en: $ruta"
        break
    fi
done

# Si no se encuentra, buscar en Documents
if [ -z "$ARCHIVO_ENCONTRADO" ]; then
    echo "Buscando en Documents..."
    ARCHIVO_ENCONTRADO=$(find "$HOME/Documents" -name "*CV*.pdf" -type f 2>/dev/null | grep -i "juan\|felipe\|henao" | head -1)
    
    if [ -n "$ARCHIVO_ENCONTRADO" ]; then
        echo "✓ Archivo encontrado en: $ARCHIVO_ENCONTRADO"
    fi
fi

# Si aún no se encuentra, pedir al usuario
if [ -z "$ARCHIVO_ENCONTRADO" ]; then
    echo ""
    echo "No se encontró el archivo automáticamente."
    echo "Por favor, ingresa la ruta completa del archivo PDF:"
    read -r RUTA_MANUAL
    
    if [ -f "$RUTA_MANUAL" ]; then
        ARCHIVO_ENCONTRADO="$RUTA_MANUAL"
    else
        echo "Error: El archivo no existe en la ruta proporcionada."
        exit 1
    fi
fi

# Copiar el archivo a public/cv.pdf
DESTINO="./public/cv.pdf"

if cp "$ARCHIVO_ENCONTRADO" "$DESTINO"; then
    echo ""
    echo "✓ CV copiado exitosamente a: $DESTINO"
    echo "El botón de descarga ahora funcionará correctamente."
else
    echo ""
    echo "Error al copiar el archivo."
    exit 1
fi

