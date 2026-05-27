// Respuesta 13: JSON - libros y peliculas
const favoritos = [{ tipo: "libro", titulo: "El Hobbit" }, { tipo: "pelicula", titulo: "Interestelar" }];
const json = JSON.stringify(favoritos);
console.log(JSON.parse(json));

