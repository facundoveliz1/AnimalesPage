import { artObj } from "./datos.js";
import { artCmp } from "./funcion.js";

const ctr = document.querySelector("#art_ctr");


for(let i = 0 ; i < artObj.length ; i++) {
    ctr.innerHTML += artCmp(
        artObj[i].titulo,
        artObj[i].src1,
        artObj[i].alt,
        artObj[i].descripcion,
    );
}


const arts = document.querySelectorAll(".article");

for(let i = 0; i < arts.length; i++){
    arts[i].onclick = () => {
        location.href = "animals.html";
        localStorage.setItem("clickedAnimal", JSON.stringify(artObj[i]));
    }
}
