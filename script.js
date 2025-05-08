const contenedorInicioSesion = document.getElementById("contenedorInicioSesion");
const contenedorCrearCuenta = document.getElementById("contenedorCrearCuenta");

function mostrarCrearCuenta() {
    contenedorInicioSesion.style.display = "none";
    contenedorCrearCuenta.style.display = "block";
}

function mostrarIniciarSesion() {
    contenedorCrearCuenta.style.display = "none";
    contenedorInicioSesion.style.display = "block";
}

function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensajeElemento = document.getElementById("mensajeInicioSesion");

    if (usuario === "ejemplo" && contrasena === "1234") {
        mensajeElemento.textContent = "¡Bienvenido!";
    } else if (usuario === "" || contrasena === "") {
        mensajeElemento.textContent = "Por favor, ingresa usuario y contraseña.";
    } else {
        mensajeElemento.textContent = "Error al iniciar sesión.";
    }
}

function crearCuenta() {
    let nombre = document.getElementById("nombre").value;
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let correoTelefono = document.getElementById("correoTelefono").value;
    let mensajeElemento = document.getElementById("mensajeCrearCuenta");

    // Aquí iría tu lógica para crear la cuenta (enviar datos al servidor, etc.)
    if (nombre !== "" && nuevaContrasena !== "" && correoTelefono !== "") {
        mensajeElemento.textContent = "Cuenta creada exitosamente.";
        // Redirigir a otra página si es necesario:
        // window.location.href = "confirmacion_cuenta.html";
    } else {
        mensajeElemento.textContent = "Por favor, completa los campos obligatorios para crear la cuenta.";
    }
}

// Mostrar el formulario de inicio de sesión al cargar la página
mostrarIniciarSesion();