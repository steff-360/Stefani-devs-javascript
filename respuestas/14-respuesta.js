// Respuesta 14: Promesas / async basico - videojuegos RPG
function cargarHeroe() { return new Promise(resolve => setTimeout(() => resolve({ nombre: "Astra", nivel: 7 }), 500)); }
async function iniciar() { const heroe = await cargarHeroe(); console.log("Heroe cargado", heroe); }
iniciar();

