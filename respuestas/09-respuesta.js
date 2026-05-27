// Respuesta 09: Funciones - pingpong
function sumarPunto(marcador) { return marcador + 1; }
function ganador(a, b) { return a >= 11 && a - b >= 2 ? "Jugador A" : "Sin ganador"; }
console.log(ganador(sumarPunto(10), 8));

