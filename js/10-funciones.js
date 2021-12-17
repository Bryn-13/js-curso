// FUNCIONES

// Serie de procedimientos o instrucciones que realizan una acción

// Declaración de función

// function sumar() {
//     console.log(10 + 10);
// }

// sumar();

//Expresión de la función

// const sumar2 = function() {
//     console.log(3 + 3);
// }

// sumar2();

// IIFE
// (function() {
//    console.log("Esto es una función")
// })(); // Previene que no se puedan leer de otros archivos


// -- ** HOISTING **

// Declaración de la función

// sumar();
// function sumar() {
//     console.log(10 + 10);
// } // Funciona, el hoisting primero reconoce la variable
// y en la segunda lectura la llama

// Expresión de la función

// sumar2();
// const sumar2 = function() {
//     console.log(3 + 3); 
// } // No funciona. El hoisting toma la función como variable, 
// y en la segunda lectura no encuentra la función a la que llamar


// ** -- MÉTODOS Y FUNCIONES -- **


// const numero1 = 20;
// const numero2 = "20";

// console.log(parseInt(numero2)) // parseInt() es una función
// console.log(numero1.toString()) // .toString() es un método

// ** -- PARÁMETROS Y ARGUMENTOS -- **

// function sumar(n1, n2) { // número1, ...2 son parámetros
//     console.log(n1 + n2);
// }
// sumar(10, 20); // Argumentos, o los valores reales
// sumar(3, 3);
// sumar(3, 6);
// sumar(1, 2);


// const sumar2 = function(n3, n4) {
//     console.log(n3 + n4); 
// }
// sumar2(5, 10);

// Parámetros por default. En caso de que no se asignen
// valores, se asigna un parámetro por default para que JS
// no arroje error o no salga NaN. Ej:

// function sumar3(n5 = 0, n6 =0) {
//     console.log(n5 + n6);
// }
// sumar3( );




// ** -- FUNCIONES QUE RETORNAN VALORES -- **

// function sumar(n1, n2) {  // Diferencia entre console.log y return = console.log lo muestra en la consola; return sólo lo procesa para que se muestre cuando se llame
//     return n1 + n2;
// }

// let resultado = sumar(2, 3);

// console.log(resultado)

let total = 0

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
total = agregarCarrito(800);

console.log(total)

const totalAPagar = calcularImpuesto(total)

console.log(`El total a pagar con impuestos es de: ${totalAPagar}`)