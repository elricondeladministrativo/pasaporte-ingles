# Pasaporte de Inglés

Juego para practicar **English File Beginner (5th edition)**: 12 Files con preguntas de gramática, escucha, ordenar oraciones y escribir, más un modo mezclado y uno de verbos en pasado.

Jugar: https://elricondeladministrativo.github.io/pasaporte-ingles/

## Instalar en el celular

- **Android (Chrome):** abrí el link → menú ⋮ → *Instalar app* / *Agregar a la pantalla principal*.
- **iPhone (Safari):** abrí el link → Compartir → *Agregar a inicio*.

Una vez instalado funciona sin internet.

## Cómo funciona

- Cada File tiene tres niveles: **Fácil** (3 opciones), **Medio** (4 opciones, escuchar, ordenar) y **Difícil** (escribir).
- Con 7 de 10 bien se abre el nivel siguiente. Cada nivel se puede repetir: las preguntas cambian (primero vuelven las que fallaste, después las que no viste, y hay preguntas generadas de números, horas, fechas y verbos).
- Cada respuesta muestra la página del libro o del Workbook donde está el tema.

## Archivos

- `index.html`: el juego (diseño y lógica).
- `preguntas.js`: el banco de preguntas por File y nivel, con la página del libro de cada una.
- `auditar.js`: revisa el banco (`node auditar.js preguntas.js`): que ninguna respuesta correcta esté entre las incorrectas, que no haya opciones repetidas y que todas tengan página.
- `manifest.webmanifest`, `icon-192.png`, `icon-512.png`: datos para instalarlo como app.
- `sw.js`: guarda el juego en el teléfono para usarlo offline. Al publicar una versión nueva, cambiá `VERSION` en este archivo.
