// Arreglos o Arrays

const numeros = [10,20,30,40,50];

// console.table(numeros)

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
// console.table(meses);

// const arreglo = ["Hola", 10 , true, "si", null, {nombre: "Paulina", apellido: "Palomino"}, [1,2,3]]


// Acceder a valores de un arreglo

// console.log(numeros[5]);
// console.log(numeros[10]);

// Conocer la extensión de un arreglo

// console.log(meses.length);

// numeros.forEach(function(numero) {  // iterador
//     console.log(numero)
// })
 


// ** -- AGREGAR ELEMENTOS A ARREGLO -- **


// numeros[5] = 60; // No se utiliza mucho, hay que saber la extensión del arreglo porque puede modificar otros elementos si se ingresa una posición ya ocupada

numeros.push(60); // Agrega al final. Actualmente se recomienda no modificar los arreglos originales

numeros.unshift(-10,-20,-30) // Agrega al inicio

console.table(numeros);

// ** -- QUITAR ELEMENTOS DE ARREGLO -- **

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento
// meses.splice(2,1); // Primer número = posición, segundo número = cantidad eliminados

// console.table(meses);

// ** -- RESTO OPERATOR O SPREAD OPERATOR -- **

const nuevoArreglo = [...meses, "Junio"]; // <-- UTILIZAR ESTE MÉTODO. No se modifica el arreglo original

console.table(nuevoArreglo)

