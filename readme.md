# Judgy background

## Contexto
En mi clase de estructuras de datos tenemos un juez online que nos corrige los ejercicios que nos manda la profe. El juez hace un ranking de los estudiantes que participamos, lo cual ha empujado hacia una competitividad desquiciada a algunos de los alumnos.

## Que es Judgy_background

¿Darle a 15hz al F5 24h al día en la página del juez te esta produciendo más sindrome del tunel carpiano del que estas dispuesto a sufrir por ese dulce verde oscuro? ¡Tenemos la solución a tu problema! Con Judgy_background el trabajo lo hace tu ordenador por ti. Cada cierto tiempo (10s por defecto) cambiará tu fondo de escritorio por un pantallazo del Scoreboard del juez.

## instalación

Antes de la instalación ten en cuenta que el código solo se ha probado en windows 10. De todas formas estoy bastante seguro de que en linux y en OSX debería funcionar.

1. Clonar el repo o descargar el .zip en cualquier sitio
2. Crear un archivo "secrets.json" en la misma carpeta que el index.js con el siguiente contenido:

```
{
    "username": "[tu usuario del juez]",
    "password": "[tu contraseña del juez]"
}
```
3.  Tener instalado npm y node (v17.6.0 es la versión de node que he usado yo, pero no debería haber problema con versiones anteriores)
4.  En una consola situada en la misma carpeta que package.json escribir:
```
npm install
```
5. Si todo ha ido bien en la instalación de dependencias escribe en la misma consola para ejecutar:
```
node index.js
```

## ⚠️ disclaimer ⚠️

Personalmente no voy a usar este programa, y no recomendaría su uso tampoco. El juez lo hostea gratuitamente una empresa externa a la UCM (creo), por lo que es responsabilidad de todos hacer un uso responsable. El objetivo del programa era trastear con puppeteer un poco, y el código lo subo para que sirva de ejemplo de uso del módulo a mi y a otros programadores (a GH copilot supongo que también 😅)
