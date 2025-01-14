//dom.js: no es obligación ese nombre, es para explicar materia:

//DOM: document object model:
const tituloHTML = document.getElementById("titulo");
console.log( tituloHTML.textContent )
tituloHTML.textContent = "Hola mundo";

const parrafo = document.querySelector("p");
console.log(parrafo.textContent)
parrafo.textContent = "Ahora eres otro parrafo";

const elementos = document.querySelectorAll("li");
console.log(elementos)
for (let e of elementos) {
    console.log(e.textContent)
}

elementos.forEach(e => console.log(e.textContent))

//atributos:
const enlace = document.querySelector("a");
enlace.setAttribute("href", "contacto.html");

//clase:
const subtitulo = document.getElementById("subtitulo");
subtitulo.style.color = "rgb(169, 211, 163)";
subtitulo.style.fontSize = "50px";

tituloHTML.classList.add("titulo");
tituloHTML.classList.remove("titulo");

//crear elementos HTML y agregarlos al DOM:
const frase = document.createElement("p");
frase.textContent = "super frase 1";

const contenedor = document.getElementById("contenedor");
contenedor.appendChild(frase);

//hagamos lo mismo pero que sean 10 frases:
let frases = ["frase 1", "frase 2", "frase 3", "frase 4"];
frases.push("frase 5");
const contenedorLista = document.getElementById("contenedor-lista");
for (let f of frases) {
    const p = document.createElement("p");
    p.textContent = f;
    contenedorLista.appendChild(p);
}