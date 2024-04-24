
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", jugar);
});

// variables de valor 0 en usuario y puntos cpu, para darle a sumar los puntos restantes
var puntosUsuario = 0;
var puntosCPU = 0;

// aca se aplica la logica matematica, aplicando random * largo de variables opciones 
function jugar(opcionUsuario) {
    var opciones = ["piedra", "papel", "tijera"];
    var opcionCPU = opciones[Math.floor(Math.random() * opciones.length)];

    var resultado = determinarGanador(opcionUsuario, opcionCPU);
    alert("TU : " + opcionUsuario + "\n CPU :" + opcionCPU + "\n\n" + resultado);
    actualizarMarcador(resultado);

}

//aca se aplica la logica del piedra papel y tijera
function determinarGanador(usuario, cpu) {
    if (usuario === cpu) {
        return "Empate!!";
    } else if (
        (usuario === "piedra" && cpu === "tijera") ||
        (usuario === "papel" && cpu === "piedra") ||
        (usuario === "tijera" && cpu === "papel")
    ) {
        puntosUsuario++;
        return "Ganaste!";
    } else {
        puntosCPU++;
        return "Perdiste!";
    }
}

// la actualizacion del marcador segun quien haga el puntito
function actualizarMarcador(resultado) {
    var marcadorUsuario = document.getElementById("puntosUsuario");
    var marcadorCPU = document.getElementById("puntosCPU");

    marcadorUsuario.textContent = "" + puntosUsuario;
    marcadorCPU.textContent = "" + puntosCPU;
}
