let productos = [
    {id: 1, nombre: "Bebida", precio: 1500},
    {id: 2, nombre: "Pan", precio: 1200},
    {id: 3, nombre: "Queso", precio: 3800},
    {id: 4, nombre: "Jamón Pavo", precio: 4500},
    {id: 5, nombre: "Mermelada", precio: 1000},
]
if( !localStorage.getItem("productos") ){
    localStorage.setItem("productos", JSON.stringify(productos))
}

function crearTabla(){
    const principal = document.getElementById("principal");
    
    const tabla = document.createElement("table");
    tabla.classList.add("table","table-striped","table-hover");
    
    tabla.innerHTML = `
        <thead>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
        </thead>
        <tbody id="cuerpo-tabla"></tbody>
    `;

    principal.appendChild(tabla);
}

function cargarProductos(){
    const cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = '';

    let productosLocal = JSON.parse(localStorage.getItem("productos"));
    productosLocal.forEach(p => {
        const filaTabla = document.createElement("tr");
        
        filaTabla.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
        `;

        cuerpoTabla.appendChild(filaTabla);
    })
}

//la función saludar se invoca con el click de un botón, NO automaticamente
function saludar(){
    let saludo = "Hola mundo";
    alert(saludo);
    console.log(saludo);
}

function recargar(){
    cargarProductos();
}

crearTabla();
cargarProductos();

//como manejar botones solamente con JS:
/*
const btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", () => {
    alert("Hola");
});
*/

//vamos a controlar el formulario:
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");

    const valorNombre = nombre.value.trim();
    
    //deben validar lo mejor posible
    if(!valorNombre){
        alert("El nombre es obligatorio");
        return;
    }else if(!precio.value.trim()){
        alert("El precio es obligatorio");
        return;
    }

    let productosLocal = JSON.parse(localStorage.getItem("productos"));
    let producto = {
        id: productosLocal.length+1, 
        nombre: valorNombre, 
        precio: precio.value.trim()
    }

    productosLocal.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosLocal) )
    //siempre mostrar mensajes!
    alert("Producto agregado con éxito!");
    cargarProductos();

    nombre.value = '';
    precio.value = '';
})

/*primero vamos a explicar localstorage:
localStorage.setItem("nombre","Alan Gajardo");

let persona = {
    rut: 16666666,
    nombre: "Satán",
    apellido: "Lucifer",
    domicilio: "Infierno"
}
localStorage.setItem("persona",JSON.stringify(persona));

let lista = [
    {id: 1, nombre: "lala"},
    {id: 2, nombre: "lele"},
]
localStorage.setItem("lista", JSON.stringify(lista))

console.warn( localStorage.getItem("nombre") )
console.warn( JSON.parse(localStorage.getItem("persona")) )
console.warn( JSON.parse(localStorage.getItem("lista")) )

localStorage.clear();
console.clear();
*/