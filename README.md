# Quiniela Mundial 2026

Este paquete contiene un sitio estatico listo para GitHub Pages y un Google Apps Script para guardar quinielas, sincronizar resultados desde football-data.org y calcular ranking.

## Archivos

- `index.html`: pagina principal con resultados, calendarios y rankings completos de todos los participantes.
- `quiniela.html`: formulario de quiniela. Muestra un partido por vez, incluye banderas y resume todas las selecciones antes de enviar.
- `octavos.html`: formulario de octavos de final. Sigue la misma estructura de dieciseisavos, con una sola respuesta por participante.
- `cuartos.html`: formulario de cuartos de final, con cuatro partidos y una sola respuesta actualizable por participante.
- `fase-final.html`: formulario de semifinales, tercer lugar y final. Si una semifinal se marca empate, pide desempate para armar los cruces derivados.
- `dieciseisavos.html`: formulario de los 16 cruces, limitado a participantes existentes y con cierre el 28 de junio a la 1:00 p.m. CR.
- `predicciones.html`: matriz visible de la fase actual con puntos anteriores, puntos de fase, total acumulado y campeon elegido.
- `exportar-predicciones.html`: herramienta personal para descargar por separado la fase de grupos o fase final en XLSX, sin correos.
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
6. Ejecuta una vez `setupQuinielaSheets` para crear las hojas de partidos, resultados y rankings de las fases principales, octavos, cuartos y fase final.
7. Si no ves las hojas, ejecuta `diagnosticoQuiniela` y revisa `spreadsheetUrl`; esa es la hoja donde el script esta escribiendo.
8. Ejecuta una vez `syncFootballData` para consultar football-data.org y llenar resultados/API.
9. Ejecuta una vez `installFootballDataTrigger` para instalar una sincronizacion automatica cada 5 minutos.
10. Ve a `Deploy` > `New deployment` > `Web app`.
11. Usa estos valores:
   - `Execute as`: `Me`
   - `Who has access`: `Anyone`
12. Copia la URL del Web App que termina en `/exec`.
13. En `quiniela.html`, `dieciseisavos.html`, `index.html` y `predicciones.html`, confirma que `APPS_SCRIPT_URL` tenga esa URL. En este paquete ya esta configurada con:
   `https://script.google.com/macros/s/AKfycby-vt500y5fZEJ5QAT7z9y0Zn7WEJJTg6iAeTf2qvYp97cqa8EWhVVPcW_9psToHu-k/exec`

Si haces cambios en `apps-script.gs`, vuelve a desplegar el Web App con `Deploy` > `Manage deployments` > editar despliegue > `New version`.

## Como funciona la actualizacion automatica

- `syncFootballData` consulta `https://api.football-data.org/v4/competitions/WC/matches?season=2026` usando `X-Auth-Token`.
- Los headers `X-RequestsAvailable`, `X-RequestCounter-Reset`, `X-API-Version` y `X-Authenticated-Client` se guardan en `Estado API`.
- `Resultados` guarda marcador, estado y ganador de cada partido.
- `Ranking` da 1 punto por cada seleccion acertada en partidos finalizados.
- `Dieciseisavos` conserva una sola fila por participante: un nuevo envio actualiza la respuesta existente.
- `Ranking Dieciseisavos` muestra los puntos de la fase y `Ranking Acumulado` suma fase de grupos y dieciseisavos. Ambos guardan movimiento de posicion.
- Cuando football-data.org devuelve una respuesta incompleta o no empareja temporalmente un partido, Apps Script conserva el ultimo resultado valido guardado para no borrar puntos ni partidos finalizados.
- Para la quiniela se usa `score.regularTime`: el marcador al terminar los 90 minutos. Los goles de tiempo extra y penales no cambian el resultado ni los puntos; un empate a 90 minutos siempre cuenta como `Empate`.
- `index.html` lee `?action=publicData` desde Apps Script cada 60 segundos fuera de partidos en vivo y cada 10 segundos durante una ventana en vivo; no llama directamente a football-data.org.
- Durante una ventana en vivo, Apps Script permite sincronizar football-data.org como maximo una vez cada 10 segundos, equivalente a hasta 6 llamadas por minuto.
- `predicciones.html` lee `?action=predictionsData` cada 60 segundos fuera de partidos en vivo y cada 10 segundos durante una ventana en vivo. Tambien refresca al volver a enfocar la pestana.
- `?action=predictionsData` tambien intenta sincronizar football-data.org antes de devolver resultados, usando el mismo cache global de Apps Script.
- `publicData` y `predictionsData` usan cache corta en Apps Script para evitar leer toda la hoja en cada visita. La cache dura 8 segundos durante ventanas en vivo y 30 segundos fuera de ellas.
- `index.html` y `predicciones.html` guardan la ultima respuesta valida en el navegador por hasta 10 minutos para pintar rapido y luego actualizar en segundo plano.
- `exportar-predicciones.html` lee `?action=predictionsExportData` para descargar en XLSX la fase de grupos o fase final con sus resumenes de puntaje.

## Subir a GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube todo el contenido de esta carpeta a la raiz del repositorio, incluyendo `index.html`, `fase-final.html`, `predicciones.html`, `apps-script.gs` y la carpeta `assets`.
3. En `Settings` > `Pages`, publica desde la rama principal y la carpeta raiz.

El Apps Script creara automaticamente las pestanas de respuestas, partidos, resultados y ranking para fase de grupos, dieciseisavos, octavos, cuartos y fase final, ademas de `Ranking Acumulado` y `Estado API`.
