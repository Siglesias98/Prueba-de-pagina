<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Amor</title>
    <style>
        body {
            background-color: black;
            margin: 0;
            font-family: Arial, sans-serif;
            color: white;
            overflow: hidden; /* Ocultar el desbordamiento para evitar scrollbars innecesarios */
        }

        .contenedor {
            position: relative;
            height: 100vh; /* Altura del contenedor igual a la altura del viewport */
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: transform 1s; /* Transición suave para el desplazamiento */
        }

        .mi-amor {
            font-size: 100px;
            color: yellow;
            text-shadow: 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow;
            animation: parpadeo 1.5s infinite alternate;
            z-index: 1; /* Asegura que el texto esté por encima del contenido de la imagen */
        }

        @keyframes parpadeo {
            0% { opacity: 1; }
            100% { opacity: 0.7; }
        }

        .boton {
            margin-top: 20px;
            padding: 15px 30px;
            font-size: 20px;
            background-color: yellow;
            border: none;
            cursor: pointer;
            animation: parpadeoBoton 2s infinite alternate;
            border-radius: 5px;
            z-index: 1; /* Asegura que el botón esté por encima del contenido de la imagen */
        }

        @keyframes parpadeoBoton {
            0% { opacity: 1; }
            100% { opacity: 0.8; }
        }

        .mensaje-floral {
            display: none; /* Inicialmente oculto */
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            max-width: 600px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
            color: white;
            text-align: center;
            font-family: 'Comic Sans MS', cursive, sans-serif; /* Fuente linda y legible */
            font-size: 24px;
            border-radius: 10px; /* Bordes redondeados */
            transition: opacity 1s; /* Transición suave para la aparición del mensaje */
            z-index: 2; /* Asegura que el mensaje esté por encima del contenido */
        }

        .mensaje-floral.visible {
            display: block;
            opacity: 1;
        }

        .mensaje-amor {
            display: none; /* Inicialmente oculto */
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            max-width: 600px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
            color: white;
            text-align: center;
            font-family: 'Comic Sans MS', cursive, sans-serif; /* Fuente linda y legible */
            font-size: 24px;
            border-radius: 10px; /* Bordes redondeados */
            transition: opacity 1s; /* Transición suave para la aparición del mensaje */
            z-index: 2; /* Asegura que el mensaje esté por encima del contenido */
        }

        .mensaje-amor.visible {
            display: block;
            opacity: 1;
        }

        .boton-siguiente {
            margin-top: 20px;
            padding: 15px 30px;
            font-size: 20px;
            background-color: lightcoral; /* Color diferente para distinguir */
            border: none;
            cursor: pointer;
            border-radius: 5px;
            z-index: 1; /* Asegura que el botón esté por encima del contenido */
            position: relative; /* Posición relativa para asegurar que no se superponga con otros elementos */
        }
    </style>
</head>
<body>

    <div class="contenedor" id="contenedor">
        <div class="mi-amor">Mi Amor</div>
        <button class="boton" onclick="mostrarMensajeFloral()" aria-label="Mostrar mensaje floral">Haz clic aquí</button>
    </div>
    <div class="mensaje-floral" id="mensajeFloral">No te apresures mi chismocita, cuando llegue el momento lo sabrás</div>
    <div class="mensaje-amor" id="mensajeAmor">¡Gracias por estos maravillosos 4 meses juntos! Eres mi todo.</div>
    <button class="boton-siguiente" onclick="mostrarMensajeAmor()" aria-label="Siguiente">Siguiente</button>

    <script>
        function mostrarMensajeFloral() {
            const contenedor = document.getElementById("contenedor");
            const mensajeFloral = document.getElementById("mensajeFloral");

            // Muestra el mensaje floral
            mensajeFloral.classList.add('visible');

            // Desplaza el contenedor hacia arriba
            contenedor.style.transform = "translateY(-100vh)"; // Ajusta este valor según el tamaño del contenedor si es necesario
        }

        function mostrarMensajeAmor() {
            const mensajeFloral = document.getElementById("mensajeFloral");
            const mensajeAmor = document.getElementById("mensajeAmor");

            // Mueve el mensaje floral hacia la izquierda
            mensajeFloral.style.transform = "translateX(-150%)"; // Ajusta según el tamaño del mensaje

            // Muestra el mensaje de amor
            mensajeAmor.classList.add('visible');
        }
    </script>

</body>
</html>
