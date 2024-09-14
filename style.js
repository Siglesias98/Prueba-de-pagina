function mostrarMensajeFloral() {
    const contenedor = document.getElementById("contenedor");
    const mensajeFloral = document.getElementById("mensajeFloral");
    const imagenFloral = document.getElementById("imagenFloral");

    // Configura la URL de la imagen
    imagenFloral.src = "https://img.freepik.com/vector-gratis/ilustracion-vector-flor-acuarela-estilo-colorido_341269-945.jpg";

    // Muestra la imagen floral
    imagenFloral.style.display = "block";

    // Muestra el mensaje floral
    mensajeFloral.classList.add('visible');

    // Desplaza el contenedor hacia arriba
    contenedor.style.transform = "translateY(-100vh)"; // Ajusta este valor según el tamaño del contenedor si es necesario
}

function mostrarMensajeAmor() {
    const mensajeFloral = document.getElementById("mensajeFloral");
    const mensajeAmor = document.getElementById("mensajeAmor");
    const imagenFloral = document.getElementById("imagenFloral");

    // Oculta la imagen floral si es necesario
    imagenFloral.style.display = "none";

    // Mueve el mensaje floral hacia la izquierda
    mensajeFloral.style.transform = "translateX(-150%)"; // Ajusta según el tamaño del mensaje

    // Muestra el mensaje de amor
    mensajeAmor.classList.add('visible');
}
