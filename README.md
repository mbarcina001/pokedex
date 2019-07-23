# candidates_Frontend
Technical test for frontend candidates

Mediante el uso del API https://pokeapi.co/ necesitamos generar una app que mostrará un listado de Pokémon con los siguientes requerimientos:

Listado de Pokémon.

Nuestros usuarios se dirigen a nuestra pagina Home desde donde se podrán visualizar, en modo lista, los diferentes Pokémon que devuelva el API. A su vez, cada elemento de la lista permitirá la navegación al detalle del ítem seleccionado. En el header, habilitaremos un buscador, y sólo disponible en la pagina Home, que buscará y filtrará la lista por nombre.

Detalle de Pokémon seleccionado.

La sección de detalle, usando como parámetro el id del ítem seleccionado previamente, y utilizando el API, mostrará el detalle en formato card. Necesitamos incluir un botón atrás que nos lleve a la home para optimizar la navegación, y en el header queremos mostrar el nombre del ítem seleccionado. 
-    El contenido del detalle no es tan importante, lo que nos interesa es la funcionalidad.
-    Aún así, si valoraremos mucho como gestionáis y mostráis en pantalla los datos que obtenéis. Dejamos la creatividad de vuestro lado.

## Necesitamos
-    Puedes usar tantos HTMLs como CSSs o JSs que necesites, y que consideres necesarios para el desarrollo de la prueba.
-    Queremos un buen uso del API. Limpio y estructurado, por ello deberéis generar los modelos que necesitéis y sólo con la información que necesitéis.
-    Uso de componentes web.
-    Mediante un archivo de lenguaje local (con un único idioma es suficiente) establecer todos los textos de la app dinámicos.
-    App Responsive.
-    Os facilitamos unos colores básicos para que apliquéis en la app.
        - Primary: #2962FF (header, botones, enlaces…)
        - Seconday: #0039cb (background de cards, toolbars secundarias…)
        - Dark: #263238 (Para los textos de la app)
-    También os facilitamos el tipo de fuente (Montserrat) que queremos aplicar en la app en sus 3 estilos. Regular, Light y Bold.
        - El valor por defecto será regular con un tamaño de 15px.
        - El texto del header tendrá un tamaño proporcional de 125% respecto al valor por defecto establecido en la app.
        - El texto de los títulos (El nombre del Pokémon por ejemplo) será Bold y tendrá un tamaño del 150% respecto al valor por defecto establecido en la app.

## Level up!
-    Que los estilos vengan proporcionados por un precompilador de CSS.
-    Código desacoplado.
-    Código escalable.
-    Código mantenible.
-    Generar una app (no es necesaria su compilación) en iOnic v4.
-    Usar elementos Ionic para generar los headers, buttons, lists…de tal forma que la app se vea de forma nativa en Android e iOS.
