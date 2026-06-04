// Ejercicio 09: Funciones - pingpong
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 09: Funciones");

// Escribe tu solucion aqui.

console.log("Ejercicio 09: Funciones");

// Función para mostrar puntos
function mostrarPuntos(jugador, puntos) {
    return jugador + " tiene " + puntos + " puntos";
}

// Función para determinar el ganador
function determinarGanador(jugador1, puntos1, jugador2, puntos2) {
    if (puntos1 > puntos2) {
        return jugador1;
    } else if (puntos2 > puntos1) {
        return jugador2;
    } else {
        return "Empate";
    }
}

// Función para mostrar mensaje final
function mostrarResultado(ganador) {
    return "Ganador: " + ganador;
}

// Datos del partido
let jugador1 = "Ana";
let jugador2 = "Luis";
let puntos1 = 11;
let puntos2 = 9;

// Mostrar información
console.log(mostrarPuntos(jugador1, puntos1));
console.log(mostrarPuntos(jugador2, puntos2));

let ganador = determinarGanador(jugador1, puntos1, jugador2, puntos2);

console.log(mostrarResultado(ganador));

// Reto extra
function partidoFinalizado(puntos) {
    return puntos >= 11;
}

console.log("¿Partido finalizado? " + partidoFinalizado(puntos1));