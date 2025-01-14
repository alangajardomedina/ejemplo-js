//Podemos programar con Javascript: (camelCase)
let nombre = "Pedro";
let apellido = 'Diaz';
let edad = 25;
let altura = 1.75;
let usaLentes = true;
let estudia = null;
let comuna = undefined;

const iva = 0.19;
const titulo = "SUPER PÁGINA";

//Tipos de datos algo más complejos:
//listas:
let listaProductos = [];
listaProductos.push("Celular");
listaProductos.push("Proyector");
listaProductos.push("Computador");

//consola: depurar en desarrollo nuestras páginas web:
console.log(nombre);
console.log("Hola:",nombre);
console.log("Hola: " + nombre);
console.log(`Hola: ${nombre}`);

console.log(listaProductos);
console.log(listaProductos[0]);
console.log(listaProductos[1]);
listaProductos[2] = "Notebook";
console.log(listaProductos[2]);
console.log(listaProductos[3]);

console.table(listaProductos);
//PERO: pobre que al abrir la consola, este lleeeeeeena de código basura.
let listaNombres = [];
listaNombres.push("Pedro");
listaNombres.push("Juan");
listaNombres.push("Diego");
listaNombres.unshift("Maria");
listaNombres.unshift("Alberta");

listaNombres.pop();
listaNombres.pop();

console.log(`se eliminó a: ${listaNombres.shift()}, adios!`);

//el comando indexOf nos ayuda a buscar un elemento:
console.log( listaNombres.indexOf('Maria') );
console.log( listaNombres.indexOf('Alberta') );
console.log(listaNombres);

//Comandos para trabajar variables, constantes, listas, etc:
console.warn("----------------------------")
let numerito = 20;
if (numerito > 0){
    console.log("Positivo");
}else if(numerito < 0){
    console.log("Negativo");
}else{
    console.log("Neutro");
}

let valor = 50;
if(valor>=1 && valor<=20){
    console.log("valor pequeño");
}else if(valor>=21 && valor<=80){
    console.log("Valor medio");
}else if(valor>=81 && valor<=100){
    console.log("Valor alto");
}else{
    console.error("VALOR FUERA DE RANGO!");
}

let genero = 'M';
if(genero=='f' || genero=='F'){
    console.log("Femenino");
}else if(genero=='m' || genero=='M'){
    console.log("Masculino");
}else{
    console.log("Otro");
}

//ciclo:
let numeritos = [5,7,-8,10,-15,0];
for (let numero of numeritos) {
    if(numero>0){
        console.log("El número",numero,"es positivo")
    }else if(numero<0){
        console.log(`El número ${numero} es negativo`)
    }else{
        console.log("El 0 es neutro")
    }
}

//Funciones: si quiero hacer algo, hago una función:
function sumar(num1, num2){
    let total = num1 + num2;
    //console.log(total);
    return total;
}

//vamos a convertir o crear funciones flecha:
let sumar2 = (num1, num2) => {
    return num1 + num2;
}

console.log( sumar(5,8) )
console.log( sumar2(2,5) )
