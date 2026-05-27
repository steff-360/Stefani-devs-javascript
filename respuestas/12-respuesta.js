// Respuesta 12: Fechas y Math - paracaidismo
const fecha = new Date();
const altura = Math.round(Math.random() * 3000 + 1000);
const tiempo = Math.round(altura / 55);
console.log(`Salto: ${fecha.toLocaleDateString()} | Altura: ${altura}m | Tiempo: ${tiempo}s`);

