import { plantilla_animal } from "./impresion.js";

let main = document.querySelector("main");

let animal = JSON.parse(localStorage.getItem("clickedAnimal"));

main.innerHTML += plantilla_animal(animal.titulo, animal.src2, animal.alt, animal.descripcion, animal.texto);