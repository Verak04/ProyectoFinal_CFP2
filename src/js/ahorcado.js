var palabras = ["ABOGADO", "ANGEL", "ENOJADO", "CALABAZA", "VOLADOR", "JIRAFA", "LIBRO", "RELAMPAGO", "DESMAYO", "CONCEBIR", "VERTICE", "SUCUMBIR", "BARBERO", "DICCIONARIO", "ELEFANTE", "HERMANO", "HOSPITAL", "DESARROLLADOR", "DESTORNILLADOR", "ELECTRICO", "ASCENSOR", "ADAPTACION", "AGUDO", "ANTIBIOTICO", "CIRCULACION", "PLASTICO", "GENERAR", "NUMERO",];

/*Elección aleatoria de la palabra (posicion del array)*/
var palabra1 = palabras[Math.floor(Math.random() * palabras.length)];

/*Palabra convertida en array*/
var palabra_ahorcado = palabra1.split('');

/*Creación de la cantidad de espacios que tiene la palabra*/
for (let i in palabra_ahorcado) {
    let ide = "posicion" + i;
    console.log(ide);
    document.getElementById("ahorcado").innerHTML += "<li id='" + ide + "'>_</li>";
}

var cont = 0;
var cont_correcto = 0;
var cont_error = 0;
var cant_palabras = palabra_ahorcado.length - 1;
var palabraIngresadaCorreta = [];
palabraIngresadaCorreta[0] = " "
var puntaje = 0;

console.log(palabra_ahorcado);
//Ingreso de letra.
function ahorcado() {
    let usuario_= localStorage.getItem("usuario");
    console.log(usuario_);
    document.getElementById("perfil_jugador").innerHTML="<h3>"+usuario+"</h3>";
    letra_ingresada = document.getElementById("letra").value;
    console.log(letra_ingresada);
    cont = 0;
    let cont2 = 0;
    //Comprueba que la letra ingresada "correcta" no sea repetida.
    while (cont2 < palabraIngresadaCorreta.length) {
        if (letra_ingresada.toUpperCase() === palabraIngresadaCorreta[cont2]) {
            alert("letra repetida");
            break;
        } else {
            cont2++;
            console.log(cont2)
        }
    }

    //si la letra "correcta" no fue ingresada entra al for y se realiza la comparación con cada una de las letras
    if (cont2 >= palabraIngresadaCorreta.length) {
        for (let i in palabra_ahorcado) {

            if (palabra_ahorcado[i] === letra_ingresada.toUpperCase()) {
                cont_correcto++;
                puntaje = puntaje + 30; //puntaje por cada letra adivinada
                document.getElementById("puntaje").innerHTML = "<h3>" + puntaje + "</h3>";
                var ide = "posicion" + i;
                var palabra_correcta = document.createElement(ide);
                palabra_correcta.innerHTML = "<li id='" + ide + "'>" + palabra_ahorcado[i] + "</li>";
                document.getElementById(ide).parentNode.replaceChild(palabra_correcta, document.getElementById(ide));
                palabraIngresadaCorreta.push(palabra_ahorcado[i]);
            }
            else {
                cont++;
            }
        }
    }

    //Conteo de los aciertos.
    if (cont_correcto > cant_palabras) {
        alert("Felicitaciones")
        puntaje = puntaje + 150;//Suma del puntaje de la palabra total adivinada.
        alert("Sumaste " + puntaje + " a tu puntaje.");
        document.getElementById("puntaje").innerHTML = "<h3>" + puntaje + "</h3>";
    }
    //Conteo de los errores
    else if (cont > cant_palabras) {
        cont_error++;
        let imagen = "error_" + cont_error;
        puntaje = puntaje - 10;//resta de puntaje por cada error.
        document.getElementById("puntaje").innerHTML = "<h3>" + puntaje + "</h3>";
        document.getElementById("dibujo").innerHTML = "<img src='../img/" + imagen + ".png' alt=''></img>"
        if (cont_error > 4) {
            alert("Perdiste");
            puntaje = puntaje - 100; //Resta de puntaje por no adivinar la palabra.
            alert("Sumaste " + puntaje + " a tu puntaje.");
            document.getElementById("puntaje").innerHTML = "<h3>" + puntaje + "</h3>";
        }
    }
    return;
};


