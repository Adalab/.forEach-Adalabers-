# forEach-Adalabers

Os presentamos el reto al que nos hemos enfrentado en el Sprint2 de Adalab :muscle:. Hemos desarrollado una página web con la que puedes crearte una tarjeta de presentación . Una tarjeta concisa con la que podrás destacar entre los miles de posibles candidatos a una oferta de empelo :sunglasses:.

La creación de la tarjeta consta de tres pasos:
1. Elige tu diseño: color y tipografía.
2. Rellena todos tus datos personales (todos obligatorios).
3. Comparte en twitter tu tarjeta; si prefieres hacerlo en otra red social te facilitamos una url para que puedas copiarla.
Paso a paso podrás ir viendo los cambios que realizas en la tarjeta de la parte derecha de la pantalla (visualización previa).

Por último, comentar que la página dispone un botón "reset" para que puedas elimiar todos tus datos :put_litter_in_its_place:.



Si lo que quieres es trabajar en el proyecto, aquí te dejo las instrucciones para poder hacerlo: 
## Instrucciones 🔧
Incluye SCSS, un sistema de plantillas HTMl y un web server.


+ ## Guía de inicio rápido
Necesitarás instalar [Node.js](https://nodejs.org/) y [Gulp](https://gulpjs.com) para trabajar con este proyecto, luego:
1. Descarga o clona el repositorio
2. Instala las dependencias locales con `$ npm install`
3. Arranca el proyecto con `$ gulp`

+ ## Espera, ¿esto se hace siempre?
> ### Solo una vez al principio en cada ordenador que utilicemos:
1. Instalamos node
2. Instalamos el comando de gulp de forma global para poder usarlo desde cualquier carpeta usando `npm install --global gulp-cli`


> ### Cada vez que estemos trabajando con nuestro código:
3. Desde nuestra terminal, ejecutamos el comando `gulp` para que realice la tarea por defecto, que en el caso del `gulpfile.js` que tenemos en el proyecto estará pendiente de nuestros archivos Sass, html y JavaScript y los compilará, minificará y/o recargará el servidor cada vez que hagamos un cambio

+ ## Tareas de gulp incluidas
### Inicio de un web server para desarrollo
```
$ gulp
```
Lanza un webserver con BrowserSync y varios watchers estarán pendientes de los archivos SCSS/JS/HTML, en la carpeta **public/**, para recargar el navegador cuando se necesite.

### Versión lista para subir a producción
```
$ gulp docs
```
En la carpeta **docs/** genera los CSS y JS minimizados y sin sourcemaps listos para subir al repo y activar GitHub Pages en `master/docs`.


+ ## Estructura del proyecto
Nuestro **gulpfile.js** usa un JSON de configuración con las rutas de los archivos a generar/vigilar.

La estructura de carpetas tiene esta pinta:
```
/
`- _src
   |- assets
   |  |- icons
   |  |- images
   |  |- js
   |  `- scss
   |     `- core
   |
   `- templates
      `- partials

```

+ ## HTML
Viene incluído el paquete [**gulp-html-partial**](https://www.npmjs.com/package/gulp-html-partial) que nos va a permitir tener un sistema de plantillas html

+ ## Imágenes e iconos
Tenemos en **_src/** una carpeta para las imágenes del proyecto y una para los iconos como el favicon o los iconos de dispositivos móviles. Estos últimos se generan en la raíz de las carpetas **public/** y **docs/**

+ ## CSS
Viene incluído el paquete [**gulp-combine-mq**](https://www.npmjs.com/package/gulp-combine-mq) que agrupa todas las mediaqueries al final del documento css.

+ ## JS
Podemos usar parciales de JS: en el JSON de configuración, **config.json** especificamos los archivos JS que utilizamos y en el orden que deben procesarse.

+ ## ¿Cómo actualizo si tengo una versión anterior?
En principio puedes descargar todos los archivos fuera de **_src/** y sustituir los de tu proyecto. Además deberías replicar la estructura de carpetas dentro de **_src/**.

## Falta algo?

Echas de menos que el proyecto haga algo en concreto? Pidelo sin problema a través de los Issues o si te animas a mejorarlo mándanos un PR :)
