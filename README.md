# Quiniela Mundial 2026

Este paquete contiene un sitio estatico listo para GitHub Pages y un Google Apps Script para guardar quinielas, sincronizar resultados desde football-data.org y calcular ranking.

## Archivos

- `index.html`: pagina principal con resultados, ranking y calendario.
- `quiniela.html`: formulario de quiniela. Muestra un partido por vez, incluye banderas y resume todas las selecciones antes de enviar.
- `predicciones.html`: matriz tipo Hoja2 para mostrar predicciones de participantes, resultados y puntos por grupo.
- `apps-script.gs`: backend de Google Apps Script para respuestas, resultados, ranking y football-data.org.

## Configurar Google Sheets y Apps Script

1. Abre [script.google.com](https://script.google.com/) y crea un proyecto.
2. Pega el contenido de `apps-script.gs`.
3. Confirma que `SPREADSHEET_ID` sea:
   `1bJ6OEcfab_stv8aEq-qggJssYhQPciODAX0tOhD54kQ`
4. En Apps Script, ve a `Project Settings` > `Script properties` y agrega:
   - `FOOTBALL_DATA_API_KEY`: tu API key de football-data.org.
   - `SYNC_SECRET`: opcional, solo si quieres permitir sincronizacion manual por URL.
5. Ejecuta una vez la funcion `checkFootballDataSetup` para autorizar permisos y confirmar que la key existe.
6. Ejecuta una vez `setupQuinielaSheets` para crear las hojas `Partidos`, `Resultados`, `Ranking` y `Estado API`.
7. Si no ves las hojas, ejecuta `diagnosticoQuiniela` y revisa `spreadsheetUrl`; esa es la hoja donde el script esta escribiendo.
8. Ejecuta una vez `syncFootballData` para consultar football-data.org y llenar resultados/API.
9. Ejecuta una vez `installFootballDataTrigger` para instalar una sincronizacion automatica cada 5 minutos.
10. Ve a `Deploy` > `New deployment` > `Web app`.
11. Usa estos valores:
   - `Execute as`: `Me`
   - `Who has access`: `Anyone`
12. Copia la URL del Web App que termina en `/exec`.
13. En `quiniela.html`, `index.html` y `predicciones.html`, confirma que `APPS_SCRIPT_URL` tenga esa URL. En este paquete ya esta configurada con:
   `https://script.google.com/macros/s/AKfycby-vt500y5fZEJ5QAT7z9y0Zn7WEJJTg6iAeTf2qvYp97cqa8EWhVVPcW_9psToHu-k/exec`

Si haces cambios en `apps-script.gs`, vuelve a desplegar el Web App con `Deploy` > `Manage deployments` > editar despliegue > `New version`.

## Como funciona la actualizacion automatica

- `syncFootballData` consulta `https://api.football-data.org/v4/competitions/WC/matches?season=2026` usando `X-Auth-Token`.
- Los headers `X-RequestsAvailable`, `X-RequestCounter-Reset`, `X-API-Version` y `X-Authenticated-Client` se guardan en `Estado API`.
- `Resultados` guarda marcador, estado y ganador de cada partido.
- `Ranking` da 1 punto por cada seleccion acertada en partidos finalizados.
- `index.html` lee `?action=publicData` desde Apps Script cada 60 segundos; no llama directamente a football-data.org.
- `predicciones.html` lee `?action=predictionsData` para mostrar las quinielas guardadas en formato de matriz.

## Subir a GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todo el contenido de esta carpeta a la raiz del repositorio: `index.html`, `quiniela.html`, `predicciones.html`, `apps-script.gs`, `matches.json`, `README.md` y la carpeta `assets`.
3. En `Settings` > `Pages`, publica desde la rama principal y la carpeta raiz.

El Apps Script creara automaticamente las pestanas `Respuestas`, `Partidos`, `Resultados`, `Ranking` y `Estado API` cuando se usen las funciones correspondientes.
