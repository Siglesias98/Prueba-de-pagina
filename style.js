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
