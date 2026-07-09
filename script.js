function login() {

    let user = (document.getElementById("user").value);
    let password = (document.getElementById("password").value);

    let boton = document.getElementById("boton");

    let mensaje;

    if (user == "admin" && password == "1234"){
        mensaje = "Usuario y contraseña correctos.¡Bienvenido!";
    } else {
        mensaje = "Usuario o contraseña incorrectos. Revise e intente de nuevo";
    }

    document.getElementById("mensaje").innerHTML = mensaje;  
}