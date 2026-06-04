# Quiniela Mundial 2026

Este paquete contiene un sitio estático listo para GitHub Pages y un Google Apps Script para guardar las respuestas en la hoja indicada.

## Archivos

- `index.html`: formulario de quiniela. Muestra un partido por vez, incluye banderas y resume todas las selecciones antes de enviar.
- `apps-script.gs`: endpoint que recibe las respuestas y las guarda en Google Sheets.

## Configurar Google Sheets

1. Abre [script.google.com](https://script.google.com/) y crea un proyecto.
2. Pega el contenido de `apps-script.gs`.
3. Confirma que `SPREADSHEET_ID` sea:
   `1bJ6OEcfab_stv8aEq-qggJssYhQPciODAX0tOhD54kQ`
4. Ve a `Deploy` > `New deployment` > `Web app`.
5. Usa estos valores:
   - `Execute as`: `Me`
   - `Who has access`: `Anyone`
6. Copia la URL del Web App que termina en `/exec`.
7. En `index.html`, confirma que `APPS_SCRIPT_URL` tenga esa URL. En este paquete ya está configurada con:
   `https://script.google.com/macros/s/AKfycbzQI1RJxvLAqjCR-L1MDauB1sWzVwYtX8SO3mWXozaF_QmkN3FRoAC8vW6F3aFgz1znyQ/exec`

Si haces cambios en `apps-script.gs`, vuelve a desplegar el Web App con `Deploy` > `Manage deployments` > editar despliegue > `New version`.

## Subir a GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube `index.html` a la raíz del repositorio.
3. En `Settings` > `Pages`, publica desde la rama principal y la carpeta raíz.

El Apps Script creará automáticamente las pestañas `Respuestas` y `Partidos` si no existen.
