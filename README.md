# Integracion-de-Apis-chistes-


El proyecto está organizado de la siguiente manera:

📁 La carpeta principal es Integracion-de-Apis-chistes-, que contiene todo el código fuente y recursos del sistema de chistes de programadores.

📦 Dentro de ella, la subcarpeta CHISTE-PROGRAMADOR es el núcleo de la aplicación y contiene:

🖥️ index.PHP: Es la página principal de la aplicación web. Aquí se muestra el chiste, los botones para ver la respuesta, pedir otro chiste y votar si te gustó o no. También se cargan los estilos y scripts necesarios para la interacción.

🤖 joke.php: Es el archivo backend que se encarga de devolver los chistes en formato JSON. Es consumido por el frontend mediante JavaScript para mostrar los chistes de manera dinámica.

🗂️ assets/: Carpeta que agrupa todos los recursos estáticos del proyecto:

🎨 css/styles.css: Archivo de estilos que define la apariencia visual de la página.
🧠 js/app.js: Script principal que maneja la lógica de la aplicación, como la obtención de chistes, la interacción con los botones y la gestión de votos.
⚙️ js/config.js: Archivo de configuración global para la aplicación, donde se definen parámetros como el nombre, versión e idioma.


Esta estructura separa claramente la lógica del backend (PHP), la interfaz de usuario (HTML y CSS) y los recursos estáticos (imágenes, scripts y estilos), facilitando el mantenimiento, la comprensión y la escalabilidad del proyecto.
