// Ejercicio 12: Fechas y Math - paracaidismo
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 12: Fechas y Math");

// Escribe tu solucion aqui.

console.log("Ejercicio 12: Date y Math");

// Fecha actual
const fechaSalto = new Date();

// Altura aleatoria entre 1000 y 5000 metros
const altura = Math.round(Math.random() * 4000 + 1000);

// Tiempo de caída aleatorio entre 30 y 90 segundos
const tiempo = Math.round(Math.random() * 60 + 30);

// Mostrar resultados
console.log(`Fecha del salto: ${fechaSalto}`);
console.log(`Altura del salto: ${altura} metros`);
console.log(`Tiempo de caída: ${tiempo} segundos`);

// Reto extra
if (altura >= 3000) {
    console.log("Salto de gran altitud.");
} else {
    console.log("Salto de altitud media.");
}