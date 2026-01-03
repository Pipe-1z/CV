# Favicon

El favicon actual es un archivo SVG (`favicon.svg`) con las iniciales "JF" en color azul.

Si deseas crear un favicon.ico tradicional:

1. Puedes usar herramientas online como:
   - https://realfavicongenerator.net/
   - https://favicon.io/

2. O convertir el SVG a ICO usando herramientas como ImageMagick:
   ```bash
   convert favicon.svg -resize 32x32 favicon.ico
   ```

3. Coloca el archivo `favicon.ico` en la carpeta `/public/`

El sitio funcionará correctamente con el SVG actual, que es compatible con navegadores modernos.

