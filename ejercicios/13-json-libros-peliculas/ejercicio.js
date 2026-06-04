// Ejercicio 13: JSON - libros y peliculas
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 13: JSON");

// Escribe tu solucion aqui.

console.log("Ejercicio 13: JSON");

// Array de objetos
const favoritos = [
    {
        tipo: "Libro",
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez"
    },
    {
        tipo: "Película",
        titulo: "Avatar",
        director: "James Cameron"
    }
];

// Convertir a JSON
const datosJSON = JSON.stringify(favoritos);

console.log("JSON generado:");
console.log(datosJSON);

// Convertir JSON a objeto
const datosObjeto = JSON.parse(datosJSON);

console.log("Datos recuperados:");
console.log(datosObjeto);

// Reto extra
if (datosObjeto.length > 0) {
    console.log("Hay elementos registrados en favoritos.");
}