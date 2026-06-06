// INFORMACIÓN DEL APP 
export let id = 'cumplewii'
export let app = 'CumpleWii'
export let icon = 'fa-cake-candles'
export let titulo = 'CumpleWii - Centro de gestion de cumpleaños';
export let keywii = 'cumpleaños, gestion, eventos, recordatorios, celebraciones';
export let descri = 'Centro de gestion de cumpleaños para organizar celebraciones, fechas y recordatorios de forma clara y sencilla.';
export let linkweb = 'https://cumplewii.web.app'; // Sin slash (/), al final
export let lanzamiento = 2026;
export let by = '@wilder.taype';
export let linkme = 'https://wtaype.github.io/';
export let ipdev = import.meta.env.VITE_DEV;
export let version = 'v11'; // Siempre va "v" para estructura

/** ACTUALIZAR AL TAG POR SEGURIDAD [TAG NUEVO] (1)
git tag v11 -m "Version v11" ; git push origin v11 

ACTUALIZACIÓN AL MAIN PRINCIPAL DEL PROYECTO [MAIN] (2)
git add . ; git commit -m "Actualizacion Principal v11.10.10" ; git push origin main

// REEMPLAZAR TAG DE SEGURIDAD EXISTENTE [TAG REMPLAZO] (3)
git tag -d v11 ; git tag v11 -m "Version v11 actualizada" ; git push origin v11 --force

// Actualizar versiones de seguridad [ELIMINAR CARPETA - ARCHIVO ONLINE] (4)
git rm --cached skills-lock.json ; git commit -m "Archivo Eliminado" ; git push origin main
git rm -r --cached .claude/ ; git commit -m "Carpeta Eliminada" ; git push origin main 
git tag -d 10 ; git push origin --delete 10 // Eliminar tag del local y remoto.
 ACTUALIZACION TAG[END] */
