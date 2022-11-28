var personaje_perfil = ["../img/tarjetas/imagen1.jfif", "../img/tarjetas/imagen5.png", "../img/tarjetas/imagen11.jpg", "../img/tarjetas/imagen10.png", "../img/tarjetas/imagen8.jfif", "../img/tarjetas/imagen6.jfif", "../img/tarjetas/imagen2.jfif", "../img/tarjetas/imagen14.jpg"];

var usuario = "";

function ingreso() {
    usuario=document.getElementById("letra").value;
    document.getElementById("ingreso").innerHTML = "<h1>" + usuario.toUpperCase() + "</h1><h2>Elegí tu personaje de perfil:</h2> <ul id='foto_perfil'></ul>"
    localStorage.setItem("usuario", usuario);
    for (let i in personaje_perfil) {
        let posicion = i
        document.getElementById("foto_perfil").innerHTML += "<li> <button class='imagen' onclick='personajePerfil(" + posicion + ")'><img src=" + personaje_perfil[i] + " alt=''></button></li>"
    }
}


var perfil = "";
function personajePerfil(num) {
    perfil = personaje_perfil[num];
    window.location.href = "./ahorcado.html";
}


