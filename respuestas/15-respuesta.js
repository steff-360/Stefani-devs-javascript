// Respuesta 15: Proyecto integrador basico - animacion 3D, MOBA o diseno 3D arquitectura
const boton = document.querySelector("#toggle");
const cubo = document.querySelector(".cube");
boton.addEventListener("click", () => { cubo.style.transition = "transform 600ms"; cubo.style.transform = "rotateX(55deg) rotateY(145deg) scale(1.1)"; });

