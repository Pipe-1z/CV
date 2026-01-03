# Script para copiar el CV PDF a la carpeta public
# Ejecuta este script desde la carpeta del proyecto

Write-Host "Buscando el archivo 'CV Juan Felipe Henao Tovar.pdf'..." -ForegroundColor Cyan

# Buscar el archivo en ubicaciones comunes
$archivos = @(
    "$env:USERPROFILE\Documents\CV Juan Felipe Henao Tovar.pdf",
    "$env:USERPROFILE\Downloads\CV Juan Felipe Henao Tovar.pdf",
    "$env:USERPROFILE\Desktop\CV Juan Felipe Henao Tovar.pdf",
    ".\CV Juan Felipe Henao Tovar.pdf"
)

$archivoEncontrado = $null

foreach ($archivo in $archivos) {
    if (Test-Path $archivo) {
        $archivoEncontrado = $archivo
        Write-Host "Archivo encontrado en: $archivo" -ForegroundColor Green
        break
    }
}

# Si no se encuentra, buscar recursivamente en Documents
if (-not $archivoEncontrado) {
    Write-Host "Buscando en Documents..." -ForegroundColor Yellow
    $resultado = Get-ChildItem -Path "$env:USERPROFILE\Documents" -Filter "*CV*.pdf" -Recurse -ErrorAction SilentlyContinue | 
                 Where-Object { $_.Name -like "*Juan Felipe*" -or $_.Name -like "*Henao*" } | 
                 Select-Object -First 1
    
    if ($resultado) {
        $archivoEncontrado = $resultado.FullName
        Write-Host "Archivo encontrado en: $archivoEncontrado" -ForegroundColor Green
    }
}

# Si aún no se encuentra, pedir al usuario
if (-not $archivoEncontrado) {
    Write-Host "`nNo se encontró el archivo automáticamente." -ForegroundColor Yellow
    Write-Host "Por favor, ingresa la ruta completa del archivo PDF:" -ForegroundColor Yellow
    $rutaManual = Read-Host "Ruta del archivo"
    
    if (Test-Path $rutaManual) {
        $archivoEncontrado = $rutaManual
    } else {
        Write-Host "Error: El archivo no existe en la ruta proporcionada." -ForegroundColor Red
        exit 1
    }
}

# Copiar el archivo a public/cv.pdf
$destino = ".\public\cv.pdf"

try {
    Copy-Item -Path $archivoEncontrado -Destination $destino -Force
    Write-Host ""
    Write-Host "CV copiado exitosamente a: $destino" -ForegroundColor Green
    Write-Host "El boton de descarga ahora funcionara correctamente." -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "Error al copiar el archivo: $_" -ForegroundColor Red
    exit 1
}

