function login() {

    let user = (document.getElementById("user").value);
    let password = (document.getElementById("password").value);

    let boton = document.getElementById("boton");

    let mensaje;

    if (user == "admin" && password == "1234"){
        window.location.href="home.html";
        return;

    } else {
        mensaje = "Usuario o contraseña incorrectos. Revise e intente de nuevo <color:red>";
    }

    document.getElementById("mensaje").innerHTML = mensaje;  
}

function desconectar(){
    window.location.href="index.html";
}