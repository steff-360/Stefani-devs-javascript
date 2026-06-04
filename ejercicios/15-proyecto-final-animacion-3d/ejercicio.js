// Ejercicio 15: Proyecto integrador basico - animacion 3D, MOBA o diseno 3D arquitectura
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 15: Proyecto integrador basico");

// Escribe tu solucion aqui.

console.log("Ejercicio 15: Proyecto integrador basico");

// Elementos del DOM
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const boton = document.querySelector("#accion");

// Array de objetos
const escenarios = [
    {
        nombre: "Castillo 3D",
        descripcion: "Diseño arquitectónico moderno."
    },
    {
        nombre: "Arena MOBA",
        descripcion: "Campo de batalla para héroes."
    },
    {
        nombre: "Ciudad Animada",
        descripcion: "Escena con efectos visuales 3D."
    }
];

// Función para cambiar escenario
function cambiarEscenario() {
    const indice = Math.floor(Math.random() * escenarios.length);
    const escenario = escenarios[indice];

    titulo.textContent = escenario.nombre;
    descripcion.textContent = escenario.descripcion;
}

// Evento
boton.addEventListener("click", cambiarEscenario);

// Reto extra
if (escenarios.length > 0) {
    console.log("Escenarios cargados correctamente.");
}