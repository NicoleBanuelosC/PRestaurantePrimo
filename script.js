function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    
    if (usuario === "userclient" && contrasena === "29091998") {
        document.getElementById("mensaje").textContent = "¡Bienvenido!";
    } else {
        document.getElementById("mensaje").textContent = "Error: datos incorrectos";
    }
}