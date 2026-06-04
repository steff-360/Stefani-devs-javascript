// Ejercicio 06: Objetos - viajes
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 06: Objetos");

// Escribe tu solucion aqui.

console.log("Ejercicio 06: Objetos");

// Crear objeto viaje
let viaje = {
    destino: "Antigua Guatemala",
    dias: 5,
    presupuesto: 2500,

    resumen: function () {
        return `Viaje a ${this.destino} por ${this.dias} días con un presupuesto de Q${this.presupuesto}.`;
    }
};

// Mostrar propiedades
console.log("Destino:", viaje.destino);
console.log("Días:", viaje.dias);
console.log("Presupuesto:", viaje.presupuesto);

// Ejecutar método
console.log(viaje.resumen());

// Reto extra
viaje.transporte = "Bus";

console.log("Transporte:", viaje.transporte);

if (viaje.presupuesto > 2000) {
    console.log("El presupuesto es suficiente para el viaje.");
} else {
    console.log("Se recomienda aumentar el presupuesto.");
}
