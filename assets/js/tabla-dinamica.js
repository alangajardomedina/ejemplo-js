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
    
    let productos = [
        {id: 1, nombre: "Bebida", precio: 1500},
        {id: 2, nombre: "Pan", precio: 1200},
        {id: 3, nombre: "Queso", precio: 3800},
        {id: 4, nombre: "Jamón Pavo", precio: 4500}
    ]
    
    productos.forEach(p => {
        const filaTabla = document.createElement("tr");
        
        filaTabla.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td>${p.precio}</td>
        `;

        cuerpoTabla.appendChild(filaTabla);
    })
}

crearTabla();
cargarProductos();
