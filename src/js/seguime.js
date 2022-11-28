//4,16,20
var cubo=[];
var cont=0;
function armado_cubos(dificultad) {
    document.getElementById("juego_seguime").innerHTML="<div id='cubos"+dificultad+"'></div>"
    while (cont < dificultad) {
        cont++;
        document.getElementById("cubos"+dificultad).innerHTML += "<div class='div_cubos'><div>"
        
    }
}

armado_cubos(16)
